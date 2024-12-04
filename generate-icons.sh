sizes=(72 96 128 144 152 192 384 512)
mkdir icons
for size in "${sizes[@]}"; do
  magick icon-762.png -resize ${size}x${size} icons/icon-${size}x${size}.png
done
