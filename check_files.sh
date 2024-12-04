#!/bin/bash

# Array of URLs to check
urls=(
    "https://eivind-throndsen-private.github.io/ch-clock/"
    "https://eivind-throndsen-private.github.io/ch-clock/index.html"
  "https://eivind-throndsen-private.github.io/ch-clock/manifest.json"
  "https://eivind-throndsen-private.github.io/ch-clock/service-worker.js"
  "https://eivind-throndsen-private.github.io/ch-clock/icons/icon-72x72.png"
  "https://eivind-throndsen-private.github.io/ch-clock/icons/icon-96x96.png"
  "https://eivind-throndsen-private.github.io/ch-clock/icons/icon-128x128.png"
  "https://eivind-throndsen-private.github.io/ch-clock/icons/icon-144x144.png"
  "https://eivind-throndsen-private.github.io/ch-clock/icons/icon-152x152.png"
  "https://eivind-throndsen-private.github.io/ch-clock/icons/icon-192x192.png"
  "https://eivind-throndsen-private.github.io/ch-clock/icons/icon-384x384.png"
  "https://eivind-throndsen-private.github.io/ch-clock/icons/icon-512x512.png"
)

# Loop through each URL and check the status
for url in "${urls[@]}"; do
  http_status=$(curl -o /dev/null -s -w "%{http_code}" "$url")
  echo "$(basename "$url"): $http_status"
done
