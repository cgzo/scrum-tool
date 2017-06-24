#!/bin/bash

SCRIPT_NAME=$(basename -- "$0")

git config --global user.name cgzo
git config --global user.email cengiz_oner@hotmail.com

echo "Set git user name to $(git config user.name)"
echo "Set git user email to $(git config user.email)"

echo "${SCRIPT_NAME} done"

