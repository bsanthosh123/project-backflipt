// 4) lets say you have array of objects , find object which has "userId"==="INPUT_USERID"
const persons=[
    {
      name:"santhosh",
      userid:12,
      mail:"bsanthosh@backflipt"
    
  },
  {
      name:"Avinash",
      userid:15,
      mail:"Avinash@backflipt"
    
  },]
  //const inputid=15;
  var inputid=prompt("enter uid");
  const updated=persons.filter(user=>user.userid===inputid);
  updated
  