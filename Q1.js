var buyChoco = function(prices, money) {

    const sort  = prices.sort((a,b) => a - b )
    const sumPrice = sort[0] + sort[1]
    if(money === sumPrice){
        return money-sumPrice
    }
    else if (money >= sumPrice){
        return money - sumPrice
    }
    return money ; 
};
console.log(buyChoco([1,1,3],3))