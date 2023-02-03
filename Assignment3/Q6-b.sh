. There are n occurrences of stream-node-max-bytes 4096 line in the file ,replace 5 the occurrence of stream-node-max-bytes 
4096 with stream-node-max-bytes 5th occurrence
sed -i ':a;N;$!ba;s/stream-node-max-bytes 4096/stream-node-max-bytes 5th occurrence/5' redis.conf