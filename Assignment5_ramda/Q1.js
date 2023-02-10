//1) sort (desc) array of objects based startDate key ex-obj {task:'TASK_NAME',startDate:'22-3-2021',endDate:'25-4-2021'}
const tasks = [
    { task: 'Task 1', startDate: "2022-03-25", endDate: '25-4-2021' },
    { task: 'Task 2', startDate: "2022-05-20", endDate: '20-2-2021' },
    { task: 'Task 3', startDate: "2022-08-21", endDate: '10-6-2021' },
    { task: 'Task 4', startDate: "2022-04-02", endDate: '15-3-2021' },
  ];
  
const sorttasks=function(a,b){
  let k1=new Date  (a.startDate).getTime();
  let k2=new Date  (b.startDate).getTime();
  if(k1>k2) return -1;
  return 1;
}

let sortedtaks=R.sort(sorttasks,tasks);

sortedtaks
