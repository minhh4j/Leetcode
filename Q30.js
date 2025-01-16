var createHelloWorld = function() {
    return function(...args) { 
        return 'hello world'
    }
};
console.log(createHelloWorld()())