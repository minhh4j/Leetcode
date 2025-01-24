function balancedStringSplit(s) {
    let count = 0;  
    let balance = 0;  

    for (let char of s) {
        if (char === 'L') {
            balance++;
        } else if (char === 'R') {
            balance--;
        }

        if (balance === 0) {
            count++;
        }
    }

    return count;
}