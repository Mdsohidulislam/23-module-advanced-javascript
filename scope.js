///let and const scope variable and var global variable
let bonus=33;
function sum(m,n){
    let result=m+n+bonus;
    if(result > 15){///{} ei braket er kono element tar scope er bahire access kora jabe na  var batito;
        // let mood='happy';
        var  mood='happy';
        console.log(mood);
    }
    console.log(mood);
    // console.log(bonus);
    // console.log(result); //scope er vitore variable kaj kore kintu bahire kaj kore na
    // console.log(day);///show result undefiend beacause hoisting
    let day='md sohidul islam';
    console.log(day);
    return result;

}

var output=sum(3,9);
//console.log(result);///not work outside a function
console.log(output);

///complete hoisting for interview go thatjsdude.for all interview question <a href="https://www.thatjsdude.com/">go this site for more information</a>