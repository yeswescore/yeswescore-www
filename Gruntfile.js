module.exports = function (grunt) {

  var version = parseInt(process.env.YESWESCORE_WWW_BUILD_VERSION, 10) || "42";

  // External tasks.
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-css');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-template-helper');
  grunt.loadNpmTasks('grunt-env');

  grunt.loadTasks('grunt-tasks');

  // FIXME: should be a grunt task ?
  // reading index.html
  var fs = require('fs');
  var html = fs.readFileSync(__dirname + '/server/private/index.html');

  // FIXME: regexp are weak.
  // FIXME: regexp doesn't prevent including commented scripts !
  // harvesting javascripts: <script (...) src="..."></script>
  var re = /<script.*src="([^"]+)">/gi;
  var scripts = [], r;
  while ((r = re.exec(html)) !== null) {
    // excluding cordova file (to not be included twice)
    if (r[0].indexOf("data-grunt-included=\"false\"") == -1)
      scripts.push('server/private/' + r[1]); // ex: src/js/main.js
  }
  
  console.log('scripts',scripts);

  // harvesting css: <link (...) href="styles/main.css"></link>
  var css = [];
  re = /<link.*href="([^"]+)">/gi;
  while ((r = re.exec(html)) !== null) {
    // excluding cordova file (to not be included twice)
    if (r[0].indexOf("data-grunt-included=\"false\"") == -1)
      css.push('server/private/' + r[1]); // ex: src/styles/main.css
  }

  console.log('css',css);
  
  //
  // Project configuration
  //
  var context = {};
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    meta: {
      banner: '/*\n'
        + ' * <%= pkg.name %> v<%= pkg.version %>\n'
        + ' *\n'
        + ' * Copyright (c) <%= grunt.template.today("yyyy") %> zeNodus'
        + ' *\n'
        + ' * Date: <%= grunt.template.today("dddd, mmmm dS, yyyy, h:MM:ss TT") %>\n'
        + ' */'
    },
    jshint: { all: [ /* FIXME */] },
    /* FIXME: wtf is this plugin ??? */
    template: {
      dev: {
        options: {
          wrap: {
            banner: '<script type="text/template" id="#{0}">',
            footer: '</script>',
            inject: [{
              prop: 'src',
              rem: 'server/private/templates/',
              repl: { ".html": "" }
            }]
          }
        },
        src: ['server/private/templates/*.html'],
        dest: 'server/public/build/'+version+'/templates.html'
      }
    },
    concat: {
      dist_javascript: {
        src: scripts,
        dest: 'server/public/build/'+version+'/app.js'
      },
      dist_css: {
        src: css,
        dest: 'server/public/build/'+version+'/app.css'
      },
      dist_html: {
        src: ['server/private/index.html'],
        dest: 'server/public/build/index.html'
      }
    },
    copy: {
      images: {
        files: [
          { expand: true, flatten: true, src: ['server/private/images/*'], dest: 'server/public/images/', filter: 'isFile' }
        ]
      },
      locales: {
        files: [
          { expand: true, flatten: true, src: ['server/private/locales/fr-FR/*'], dest: 'server/public/locales/fr-FR/', filter: 'isFile' },
          { expand: true, flatten: true, src: ['server/private/locales/fr/*'], dest: 'server/public/locales/fr/', filter: 'isFile' }
        ]
      },	  
      fonts: {
        files: [
          { expand: true, flatten: true, src: ['server/private/styles/webfonts/*'], dest: 'server/public/styles/webfonts/', filter: 'isFile' }
        ]
      }
    },
    uglify: {
      build: {
        src: 'server/public/build/'+version+'/app.js',
        dest: 'server/public/build/'+version+'/app.min.js'
      }
    },
    cssmin: {
      my_target: {
        src: 'server/public/build/'+version+'/app.css',
        dest: 'server/public/build/'+version+'/app.min.css'
      }
    },
    ifdef: {
      files: {
        src: [ 'server/public/build/index.html', 'server/public/build/'+version+'/app.js'],
        dest: [ 'server/public/build/index.html', 'server/public/build/'+version+'/app.js']
      }
    },
    env_vars: {
      files: {
        src: [ 'server/public/build/index.html', 'server/public/build/'+version+'/app.js' ],
        dest: [ 'server/public/build/index.html', 'server/public/build/'+version+'/app.js' ]
      }
    },
    env: {
      web: {
        WEB:false,
        CORDOVA: false,
        NOCORDOVA: true,
        CORS: false,
        DEV:true // cross domain
      }
    }
  });

  
  grunt.registerTask('to-page-css', function () {
    grunt.file.copy('server/private/styles/page.css', 'server/public/styles/page.css');
  });
  

  // Default task(s).
  grunt.registerTask('web', ['clean', 'env:web', 'template', 'concat', 'copy', 'ifdef', 'env_vars','to-page-css']);
};