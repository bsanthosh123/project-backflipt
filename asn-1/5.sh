#5) Copying one directory to another directory    
echo "enter the source directory:"
read sourcedir
echo "enter the desination directory:"
read destdir
cp  -r "$sourcedir" "$destdir"