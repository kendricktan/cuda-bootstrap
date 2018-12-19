#!/bin/sh

wget https://developer.nvidia.com/compute/cuda/9.0/Prod/local_installers/cuda_9.0.176_384.81_linux-run -O /tmp/cuda9_0.sh
chmod +x /tmp/cuda9_0.sh
sudo bash /tmp/cuda9_0.sh --silent
rm -rf /tmp/cuda9_0.sh

sudo apt-get update
sudo apt-get -y install nvidia-384 nvidia-384-dev
sudo modprobe nvidia