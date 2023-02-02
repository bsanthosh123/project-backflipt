 #3) Read N value from user and print numbers between 0 to N
echo "enter the value of N:" 
read  N
for(( i=0;i<"$N";i++))
{
    echo "$i"
}
