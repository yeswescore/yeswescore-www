#!/bin/bash

fileversion=/tmp/yeswescore-www-build-version

# fichier de version inexistant
if [ ! -f $fileversion ]
then
  echo "WARNING: fichier de version inexistant, la version utilisée sera [1]"
  echo "continuer ? [Y/n]"
  read o
  if [ $o != "Y" ]
  then
    echo "bye bye"
    exit 1
  fi
  echo "1" > $fileversion
fi

# lecture de la version actuelle
oldversion=`cat $fileversion`
version=`expr $oldversion + 1`

# on remplace la version par la nouvelle
echo $version > $fileversion

# petit message
echo "grunt.sh: Version utilisee pour la build = "$version

# export env var
export YESWESCORE_WWW_BUILD_VERSION=$version

# on build
if [ "$1" == "prod" ]
then
  echo "grunting on env 'prod'"
  grunt --force prod
else
  echo "grunting env 'web'"
  grunt --force web
fi
