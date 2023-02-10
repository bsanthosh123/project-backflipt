// 3) concat two array of objects and sort (asc) it based on "cost" key
const product1=[
    {
      name:"iphone",
      cost:40000,
      manfacturer:"apple",
      model:"13pro"
      
    }]
  const product2=[
    {
      name:"poco",
      cost:12000,
      manfacturer:"xiomi",
      model:"m2pro"
      
    }
  ]
  const sorttasks=function(a,b){return a.cost-b.cost}
  const updated=R.concat(product1,product2);
  let sortedtasks=R.sort(sorttasks,updated);
  sortedtasks