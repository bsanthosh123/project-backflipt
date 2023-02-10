//lets say you have array of objects (students marks details {name:'',marks:''.....}) 
//get the student details who have scored least in the class
const marksdetails=[
    {
        name:"avinash",
        marks: 55,
        subject :"Maths",
      
    },
    {
        name:"santhosh",
        marks: 36,
        subject :"chemistry",
    },
    {
        name:"vishnu",
        marks: 85,
        subject :"Maths",
    }
];

let compareby=R.ascend(R.prop('marks'));
let sortedSheet=R.sort(compareby,marksdetails);
const leastmarks=sortedSheet[0];
leastmarks