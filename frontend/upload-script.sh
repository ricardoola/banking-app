#!/bin/bash

# Replace the placeholders with your server's details
SERVER_USER="ricardo"
SERVER_IP="161.35.114.218"
SERVER_PATH="/var/www/html"

# Run the rsync command to upload the build files
rsync -avz -e "ssh -i '/root/.ssh/id_rsa'" --delete build/ ${SERVER_USER}@${SERVER_IP}:${SERVER_PATH}

