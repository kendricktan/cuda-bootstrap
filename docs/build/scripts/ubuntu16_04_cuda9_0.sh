#!/bin/sh

wget https://developer.nvidia.com/compute/cuda/9.0/Prod/local_installers/cuda-repo-ubuntu1604-9-0-local_9.0.176-1_amd64-deb -O /tmp/cuda_9_0.deb
sudo dpkg -i /tmp/cuda_9_0.deb
sudo apt-key add /var/cuda-repo-9-0-local/7fa2af80.pub
sudo rm -rf /tmp/cuda_9_0.deb
sudo apt-get update
sudo apt-get install cuda -y