/*
 * PARTIE DU CODE QUI VA ELIMINER BEGIN DEV AND END DEV du code source
 * 
 */
module.exports = function( grunt ) {
  "use strict";

  var rimraf = require("rimraf");

  (function () {
    var regexps = [
      // <!-- #ifdef KEY --> ... <!-- #endif -->
      /<!\-\-\s*#ifdef\s+([a-zA-Z0-9_]+)\s*\-\->([\s\S]*?)<!\-\-\s*#endif\s*\-\->/gm,
      // /* #ifdef KEY */.... /* #endif */-->
      /\/\*\s*#ifdef\s+([a-zA-Z0-9_]+)\s*\*\/([\s\S]*?)\/\*\s*#endif\s*\*\//gm,
      // <!-- #ifndef KEY --> ... <!-- #endif -->
      /<!\-\-\s*#ifndef\s+([a-zA-Z0-9_]+)\s*\-\->([\s\S]*?)<!\-\-\s*#endif\s*\-\->/gm,
      // /* #ifndef KEY */.... /* #endif */-->
      /\/\*\s*#ifndef\s+([a-zA-Z0-9_]+)\s*\*\/([\s\S]*?)\/\*\s*#endif\s*\*\//gm
    ];

    grunt.registerMultiTask('ifdef', 'ifdef', function() {
      // Iterate over all specified file groups.
      this.files.forEach(function(f) {
      
        // this plugin doesn't concat.
        // we need the same number of src & dest files
        if (f.src.length !== f.dest.length) {
          grunt.log.warn('Number of source and destination file differs files.src.length='+f.src.length+', files.dest.length='+f.dest.length);
          return false;
        }

        // processing files
        var src = f.src.forEach(function(filepath, i) {
          // Warn on and remove invalid source files (if nonull was set).
          if (!grunt.file.exists(filepath)) {
            grunt.log.warn('Source file "' + filepath + '" not found.');
            return false;
          }
          var filecontent = grunt.file.read(filepath);
          // searching #ifdef ... #endif
          regexps.forEach(function (r) {
            var m, stripped = [];
            var strip = function (m, s) {
              grunt.log.writeln("#"+s+" "+m[1]+" => strip");
              //grunt.log.writeln("stripping \n"+m[2]);
              stripped.push(m[0]);
            };
            var skip = function (m, s) {
              grunt.log.writeln("#"+s+" "+m[1]+" => skip");
            };

            while (m = r.exec(filecontent)) {
              var ifdef = (String(r).indexOf("ifdef") !== -1), f;
              if (!process.env[m[1]] ||
                   process.env[m[1]] == "false" ||
                   process.env[m[1]] == "0") { // key doesn't exist in env or is "false" or "0"
                f = (ifdef) ? strip : skip;
              } else {
                f = (ifdef) ? skip : strip;
              }
              f(m, ifdef?"ifdef":"ifndef");
            }
            stripped.forEach(function (s) {
              filecontent = filecontent.replace(s, "");

              console.log(filecontent.substr(0, 200));
            });
          });

          // Write the destination file.
          grunt.file.write(f.dest[i], filecontent);
        });
      });
    });
  })();

  (function () {
    // <!-- @include file -->
    var regexp = /(<!\-\-|\/\*)\s*\@include\s+([a-zA-Z0-9_\.\/]+)\s*(\-\->|\*\/)/gm

    grunt.registerMultiTask('include', 'include', function() {
      // Iterate over all specified file groups.
      this.files.forEach(function(f) {
      
        // this plugin doesn't concat.
        // we need the same number of src & dest files
        if (f.src.length !== f.dest.length) {
          grunt.log.warn('Number of source and destination file differs files.src.length='+f.src.length+', files.dest.length='+f.dest.length);
          return false;
        }

        // processing files
        var src = f.src.forEach(function(filepath, i) {
          // Warn on and remove invalid source files (if nonull was set).
          if (!grunt.file.exists(filepath)) {
            grunt.log.warn('Source file "' + filepath + '" not found.');
            return false;
          }
          var filecontent = grunt.file.read(filepath)
            , result = filecontent;
          // searching includes
          var m, result;
          while (m = regexp.exec(filecontent)) {
            grunt.log.writeln("@include file "+m[2]+" in "+filepath);
            var includedcontent = grunt.file.read(m[2]);
            result = result.replace(m[0], function () { return includedcontent }); // avoid $` bugs..
          }

          // Write the destination file.
          grunt.file.write(f.dest[i], result);
        });
      });
    });
  })();

  // Based on jQuery UI build.js
  grunt.registerTask("clean", function () {
      rimraf.sync("dist");
      rimraf.sync("platforms/android/build");
      rimraf.sync("platforms/ios/build");
      rimraf.sync("platforms/wp8/build");
      rimraf.sync("platforms/blackberry/build");
  });
};
