#!/bin/bash

REPOSRC=https://github.com/4refr0nt/luatool.git
LOCALREPO="./luatool"

if [ ! -d $LOCALREPO_VC_DIR ]; then
  mkdir $LOCALREPO
fi

# We do it this way so that we can abstract if from just git later on
LOCALREPO_VC_DIR=$LOCALREPO/.git

if [ ! -d $LOCALREPO_VC_DIR ]; then
  git clone $REPOSRC $LOCALREPO
else
  cd $LOCALREPO
  git pull $REPOSRC
fi
