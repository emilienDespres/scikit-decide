#!/bin/bash
set -ex

yum install -y git zlib-devel
# Install the latest boost library
curl -L https://boostorg.jfrog.io/artifactory/main/release/1.76.0/source/boost_1_76_0.tar.gz -o boost-1.76.0.tar.gz \
    && tar xfz boost-1.76.0.tar.gz \
    && rm boost-1.76.0.tar.gz \
    && cd boost_1_76_0 \
    && ./bootstrap.sh --help \
    && ./bootstrap.sh --without-icu --with-libraries=headers --prefix=/usr/local \
    && ./b2 install

for PYTHON_VER in 3.7 3.8; do
    python$PYTHON_VER -m pip install --upgrade -q pip
    python$PYTHON_VER -m pip install build cmake
done
#install auditwheel for python 3.8 (used after the build in scripts/build-manylinux-wheels.sh)
python3.8 -m pip install -q auditwheel
