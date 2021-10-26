#!/bin/bash
set -ex

yum install -y git zlib-devel
yum install -y ccache

for PYTHON_VER in 3.7 3.8; do
    python$PYTHON_VER -m pip install --upgrade -q pip
    python$PYTHON_VER -m pip install build cmake
done
#install auditwheel for python 3.8 (used after the build in scripts/build-manylinux-wheels.sh)
python3.8 -m pip install -q auditwheel
