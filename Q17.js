var isValid = function(s) {
    const stack = [];
    const mapping = { ')': '(', '}': '{', ']': '[' };

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char in mapping) {
            if (stack.pop() !== mapping[char]) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;

};
console.log(isValid("() , {}"))
console.log(isValid("([])"));  