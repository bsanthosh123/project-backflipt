case $1 in
   1)
        sed -i ':a;N;$!ba;s/stream-node-max-bytes 4096/stream-node-max-bytes 5096/1' redis.conf
        ;;
    2)
        sed -i ':a;N;$!ba;s/stream-node-max-bytes 4096/stream-node-max-bytes 5th occurrence/5' redis.conf
        ;;
    3)
        sed -i 's/stream-node-max-bytes 4096/stream-node-max-bytes 5096/g' redis.conf
        ;;
    *)
        echo "INVALID "
        ;;
esac