var numbers = process.argv.slice(2,process.argv.length)
var sum=0;
numbers.forEach(function(n, index){
    sum += Number(n);
})
console.log(sum);
