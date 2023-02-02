#  8) Write a Shell Script with Switch Case which will print the contents of the Given Base Directories.
#   (Directory Name has to be sent as a Argument).
# read -p "enter directory:" directory
case $1 in
    [dD][eE][sS])
        ls  /mnt/c/Users/USER/OneDrive/Desktop
        ;;
    [dD][oO][cC])
        ls  /mnt/c/Users/USER/Documents
        ;;
    [dD][oO][wW])
        ls /mnt/c/Users/USER/Downloads
        ;;
    *)
        echo "INVALID DIRECTORY"
        ;;
esac