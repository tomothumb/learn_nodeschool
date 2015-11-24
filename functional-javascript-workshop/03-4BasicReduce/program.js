function countWords(inputWords) {
    // SOLUTION GOES HERE
    var counts = inputWords.reduce(function(previous,current){
        previous[current] = (previous[current]) ? previous[current]+1 : 1;
        return previous;
    },{});

    return counts;
}

module.exports = countWords;

