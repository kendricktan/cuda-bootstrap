#!/bin/sh

wget https://developer.nvidia.com/compute/cuda/9.1/Prod/local_installers/cuda-repo-ubuntu1604-9-1-local_9.1.85-1_amd64 -O /tmp/cuda_9_1.deb
sudo dpkg -i /tmp/cuda_9_1.deb
sudo apt-key add /var/cuda-repo-9-1-local/7fa2af80.pub
sudo rm -rf /tmp/cuda_9_1.deb
sudo apt-get update
sudo apt-get install cuda -y