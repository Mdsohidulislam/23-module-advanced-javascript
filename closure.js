function stopWatch(){
    count=0;
    return function(){
        count++;
        return count;
    }
}
var clock1=stopWatch();
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());

var clock2=stopWatch();
console.log(clock2());
console.log(clock1());
console.log(clock2());
console.log(clock2());
console.log(clock1());
 
///jokhon amra khono ekta function theke arekta function return kori ta ekt closed environment toiri kore abong nijera extarnal variable rekhe dei take closure bole