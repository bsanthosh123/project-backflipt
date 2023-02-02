echo "the number of arguments is:$#"

if [ $# -gt 3 ]
then
	echo "no need"
else
	for((i=0;i<$#;i++))
		{
			touch $i.txt
		}
fi

