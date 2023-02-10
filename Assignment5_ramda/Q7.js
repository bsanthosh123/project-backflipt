// Lets say you have arr1=[1,2,3,4,5,6] and arr2=[3,7,2,9,10,53] 
// all even element should be on left and old on right (into single array)

let array1=[12,15,28,25];
let array2=[90,63,44,55,34];
let finalarr=R.concat(array1,array2);

const Even = n => n%2 === 0;
const Odd = n => n%2 ===1 ;
let evenArray=R.filter(Even, finalarr);
let oddArray=R.filter(Odd,finalarr);
R.concat(evenArray,oddArray);