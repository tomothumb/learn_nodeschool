function reduce(arr, fn, init) {

    if (arr.length ==0) return {};
    //return counts;
    shifted = arr.shift();
    newArr = fn(init, shifted, 0, arr);
    return reduce(arr,fn,newArr );
}

module.exports = reduce;

//??????