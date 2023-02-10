//lets say you have array of objects (user details), new array value should have user details only whose completedTask >=50
const userdet=[
    {
        user:"Avinash",
        completedTasks:20
    },
    {
        user:"santhosh",
        completedTasks:55

    },
    {
        user:"sowmya",
        completedTasks:20
        
    },
    {
        user:"Vishnu",
        completedTasks:60

    },
    {
        user:"Sainath",
        completedTasks:70

    }
];


const updateddata = userdet.filter(row => row['completedTasks'] > 50);
updateddata;