const removeFromArray = function(...arrays) {
    for (i=1 ; i<arrays[0].length;i++ ){
        if (  arrays[0][i] === arrays[i]){
            arrays[0].splice(i,1);
            i--

        }
        else {
            continue;
        }
    }
    return arrays[0];


};

// Do not edit below this line
module.exports = removeFromArray;
