//lets say you have objects with keys {name:"",address:"",phone:"" .........} 
//remove these three fileds from the given object
const persons=[{
    name:"Avinash",
    address:"Hyderabad",
    phone:"24234353445",
    emailId:"avinash@backflipt.com",
    id:"x005"
  },
              {
    name:"vishnu",
    address:"Hyderabad",
    phone:"2342343534",
    emailId:"vishnu@backflipt.com",
    id:"x006"
  },
              {
    name:"santhosh",
    address:"Hyderabad",
    phone:"4354353445",
    emailId:"santhoshb@backflipt.com",
    id:"x007"
  }];
  
   
  let nameElemination=R.map(
   R.dissoc('name')
  ,persons)
  let phoneElimination=R.map(
   R.dissoc('phone')
  ,nameElemination)
  const AdressElimination=R.map(
   R.dissoc('address')
  ,phoneElimination)
  AdressElimination