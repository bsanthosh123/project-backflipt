# 6a. Replace stream-node-max-bytes 4096 with stream_node_max_bytes 5096
sed -i ':a;N;$!ba;s/stream-node-max-bytes 4096/stream-node-max-bytes 5096/1' redis.conf
