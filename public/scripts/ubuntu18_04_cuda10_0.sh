#!/bin/sh

wget https://developer.nvidia.com/compute/cuda/10.0/Prod/local_installers/cuda-repo-ubuntu1804-10-0-local-10.0.130-410.48_1.0-1_amd64 -O /tmp/cuda_10_0.deb
sudo dpkg -i /tmp/cuda_10_0.deb
sudo apt-key add /var/cuda-repo-10-0-local-10.0.130-410.48/7fa2af80.pub
sudo rm -rf /tmp/cuda_10_0.deb
sudo apt-get update
sudo apt-get install cuda -y