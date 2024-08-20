#!/bin/sh

# Update the website
cd /mnt/data/apps/other/arch_80_anniv/ncku-arch-80th-anniversary
git pull

sudo docker build -t ncku-arch-80th-anniversary . && sudo docker compose down && sudo docker compose up -d