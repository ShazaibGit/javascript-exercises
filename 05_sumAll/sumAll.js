const sumAll = function(a,b) {
    let max = Math.max(a,b);
    let min = Math.min(a,b);
    let sum = 0;

    if (a<0 || b <0 || Number.isInteger(a) == false || Number.isInteger(b) == false || isNaN(a) || isNaN(b)){
        return 'ERROR';
    }
    else {
    for (let i = min; i<=max; i++) {
    
        sum = sum+i;
    }
    return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
 