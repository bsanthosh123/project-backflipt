#2) Read and check if directory exists or create it
read directory
if [ -d "$directory" ];
then
    echo "directory exists"
else
    echo "directory does not exixts"
fi

