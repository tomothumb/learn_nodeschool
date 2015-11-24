function doubleAll(numbers) {
    return numbers.map(function(data, idx){
        return data * 2;
    });
    //var result = [];
    //numbers.map(function(data, idx){
    //    result.push(data*2);
    //});
    //return result;
}

module.exports = doubleAll;
