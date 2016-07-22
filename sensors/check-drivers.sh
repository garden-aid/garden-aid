#!/bin/bash
set -e

CP2102_DRIVER=SiLabsUSBDriver.kext
CH340G=usbserial.kext

# list drivers
echo 'Listing external drivers'
kextstat | grep -v com.apple

# check driver signature
echo 'Checking driver signatures'
codesign -vvvvd "/Library/Extensions/$CP2102_DRIVER/"
codesign -vvvvd "/Library/Extensions/$CH340G/"

echo 'Listing ports'
ls -la /dev/cu.*
ls -la /dev/tty.*
