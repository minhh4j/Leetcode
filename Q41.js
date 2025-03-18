
var addTwoPromises = async function(promise1, promise2) {
    return await new Promise ((resolve) => {
      resolve(promise1)
    })
}; 


console.log(addTwoPromises(new Promise(resolve => setTimeout(() => resolve(2), 20))) , new Promise(resolve => setTimeout(() => resolve(5), 60)))
