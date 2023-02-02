# 9) Write a program Which Accepts the following Values
#         -Name
#           -Contact
#           -Email
#           -Gender (It should be either Male or Female or Prefer Not to say)
#         If any of the following value is missing the script must exitElse write the contents to a file.
# read -p "enter the name:" name
read -p"enter the contact:" contact
read -p"enter the email:" email
read -p "enter the gender:" gender

case "$gender" in
    [Mm][Aa][Ll][eE])
        gender="Male"
        ;;
    [Ff][Mm][Aa][Ll][eE])
        gender="FeMale"
        ;;
    *)
        gender=" Prefer Not to say"
        ;;
esac
if [ -z "$name" -o -z "$contact" -o -z "$email" -o -z "$gender" ]
then
        echo "some values are missing"
        exit
else
    echo "name:" $name >>san.txt
    echo "contact:" $contact >>san.txt
    echo "email:" $email >>san.txt
    echo "gender:" $gender >>san.txt
fi

