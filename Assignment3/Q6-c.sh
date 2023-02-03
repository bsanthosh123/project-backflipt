# cReplace all occurrences of stream-node-max-bytes 4096 with stream-node-max-bytes all

sed -i 's/stream-node-max-bytes 4096/stream-node-max-bytes 5096/g' redis.conf