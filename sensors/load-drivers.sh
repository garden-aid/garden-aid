#!/bin/bash
set -e

CP2102_DRIVER=SiLabsUSBDriver.kext
CH340G=usbserial.kext

# Load drivers
sudo kextutil -t "/Library/Extensions/$CP2102_DRIVER"
sudo kextutil -t "/Library/Extensions/$CH340G"
