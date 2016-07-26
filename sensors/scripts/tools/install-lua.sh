#!/bin/bash
set -e

LUA_VERSION=5.3.3

curl -R -O "http://www.lua.org/ftp/lua-$LUA_VERSION.tar.gz"
tar zxf "lua-$LUA_VERSION.tar.gz"
cd "$LUA_VERSION"
make macosx install

rm "lua-$LUA_VERSION.tar.gz"
rm -r "lua-$LUA_VERSION"
