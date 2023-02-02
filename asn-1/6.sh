#6) Write a shell script to count the only files in the directory.
countFiles=$(find . -mindepth 1 -maxdepth 1 -type f |( wc -l))
echo "$countFiles"
