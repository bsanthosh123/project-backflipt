//lets say you have array of objects drop last 5 players whose avg run scoring is less in overall batsmen
const players=[
    {
        name:"raina",
        average:65
    },
    {
        name:"pointing",
        average:70
    },
    {
        name:"pant",
        average:80
    },
    {
        name:"jackuskallis",
        average:50

    },
    {
        name:"dhoni",
        average:50

    },
    {
        name:"Gambhir",
        average:39

    }
];

let cmp=R.ascend(R.prop('average'));
let playerssort=R.sort(cmp,players);
const ans=R.drop(5,playerssort);
ans