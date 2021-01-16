#!/bin/bash

filename='urls.txt'
echo Start
while read url; do
  echo "$url"
  URL=$url npm run desktoptest
done < $filen