#!/bin/sh

# verifying parameters
if [ $# -ne 1 ]
then
  echo "usage : ./deploy-www.sh branch"
  exit 1
fi

# if not master, ask for confirmation
if [ "$1" != "master" ]
then
  echo "press Y to confirm you want to checkout branch '$1' [Y/N]"
  read y
  if [ $y = "Y" ]
  then
    echo "confirmed"
  else
    echo "canceled"
    exit 1
  fi
fi

# start checkout
echo "checkouting $1"
# cleaning deploy directory
if [ ! -d ~/deploy-www/ ]
then
  echo "directory doesn't exist => creating  ~/deploy-www/"
  mkdir ~/deploy-www/
  # changing directory
  cd ~/deploy-www/
  # grabbing code from github
  git clone -b $1 git@github.com:yeswescore/yeswescore-www.git
  # analysing result
  if [ $? -eq 0 ]
  then
    echo "branch $1 is deployed in ~/deploy-www/yeswescore-www/"
  else
    echo "error during clone, abort."
    exit 1
  fi
  # changing directory
  cd ~/deploy-www/yeswescore-www/
  # npm
  npm install -l
else
  # changing directory
  cd ~/deploy-www/yeswescore-www/
  #
  git checkout $1
  # analysing result
  if [ $? -eq 0 ]
  then
    echo "checkouting to $1 in ~/deploy-www/yeswescore-www/"
  else
    echo "error during checkout of $1, abort."
    exit 1
  fi
  # fetching
  git fetch
  # analysing result
  if [ $? -eq 0 ]
  then
    echo "fetching ok"
  else
    echo "error during fetch, abort."
    exit 1
  fi
  # pulling
  git pull origin $1
  # analysing result
  if [ $? -eq 0 ]
  then
    echo "pulling $1 from origin"
  else
    echo "error during pull of $1 from origin, abort."
    exit 1
  fi
fi

# now we can use GRUNT
./grunt.sh prod

# good directory for rsync 
cd ~/deploy-www/

# rsync
echo "sending code to integration environment"
sudo rsync -rltov --del --ignore-errors --exclude node_modules --exclude .git --force -e 'ssh -p 42' yeswescore-www node@www.yeswescore.com:/opt/web/
#echo "sending code to prod server"
#sudo rsync -rltov --del --ignore-errors --exclude node_modules --exclude .git --force -e 'ssh -p 42' yeswescore-www root@176.31.108.85:/opt/web/
