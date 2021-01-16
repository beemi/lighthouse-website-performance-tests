#!/bin/bash

filename='urls_new.json'
jq -r 'keys' $filename
totalUrls=jq -r 'keys'| jq length $filename
echo "Total Urls ${totalUrls}"
jq -r '.' $filename
