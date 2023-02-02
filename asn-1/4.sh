#4) Read directory name from user , delete if it exists or print message if not existsecho "enter the directory name:"
# read dir
# if [ -d "$dir" ];
# then
#     echo "directory exists"
#     rmdir "$dir"
# else
#     echo "directory does not exixts"
# fi

if [ -d "$dir" ];
then
    echo "directory exists"
    rmdir "$dir"
else
    echo "directory does not exixts"
fi