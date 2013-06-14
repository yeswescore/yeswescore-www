#!/bin/sh

BASEDIR=$(dirname $0)
cd $BASEDIR;

# are we in dev or in prod.
if [ "$NODE_ENV" = "PROD" ]
then
  echo "you are in prod environment, you cannot launch the server using ./dev.sh"
  exit 1
fi

export NODE_ENV="DEV"
if [ -f ".port" ]
then
  wwwport=`cat .port | head -1`
  port=`cat ../../yeswescore-server/server/.port`
  proxyport=`cat ../../yeswescore-proxy/server/.port`
  echo "using port number $wwwport from file .port for www"
  echo "using port number $port from file .port for api"
  echo "using port number $proxyport from file .port for proxy"
  export YESWESCORE_PORT=$port
  export YESWESCORE_WWW_PORT=$wwwport
  export YESWESCORE_PROXY_PORT=$proxyport
  if [ "$1" = "debug" ]
  then
    echo "debug mode activated"
    if [ "$#" -eq 2 ]
    then
      node --debug=$2 server.js
    else
      node --debug server.js
    fi
  else
    node server.js
  fi
else
  echo "  Please create .port file containing port number "
  echo "  Exemple:  echo \"9080\" > .port "
fi
