#  7) Lets Say you Have Directory A, create a new directory named "Backflipt" when Directory A has less than 5 sub-directories or if it has 5 sub-directories create  a new directory named "Xenovus" in Directory 
#  A, else Exit with message "Directory creation not needed"
countDir=$(find . -mindepth 1 -type d | wc -l)
backflipt="Backflipt"
Xenovus="Xenovus"
if [  "$countDir" -lt 5 ];
then
        mkdir "$backflipt"
elif [ "$countDir" -eq 5 ]
then
         mkdir "$Xenovus"
else
    echo "Directory creation not needed"
fi