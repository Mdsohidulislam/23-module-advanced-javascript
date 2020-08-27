const Student=[
    {name:'anisul',id:33},
    {name:'hm nayem',id:31},
    {name:'sohidul',id:32},
    {name:'saniul',id:38},
];

// const result=Student.map(elem=> elem.name);
// console.log(result);
// const studentName=[]
// for(var i=0; i<Student.length; i++){
//     const elem=Student[i];
//     const elemName=elem.name;
//     studentName.push(elemName)
// }
// console.log(studentName);

// var result=Student.filter(ids=>ids.id > 31);
// console.log(result);
var result=Student.find(elem=>elem.id >32);
console.log(result);