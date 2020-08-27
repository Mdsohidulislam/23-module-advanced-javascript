function add(a,b){
    // console.log(...arguments);
    // console.log([...arguments]);
    // const c=[...arguments]
    const sum=a+b;
    return sum;
}
///arguments holo array like object kintu array noi
var result=add(2,3,4,3,5);
console.log(result);