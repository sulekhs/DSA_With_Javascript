//best-time-stock-sell-buy.js
// You are given array of prices where prices[i] is the price of given stock
// on the ith Day
// You want to maximize profit by choosing a single day to buy a single stick
// and sell that stock on different day in the future
// Return the maximun profit and if you cannot achieve maximum profit return 0

//[7,1,5,3,6,4]
//min=7 => 1
//profit = 0 => 5 - 1 = 4 => 6 - 1 = 5

const maxProfit = (prices) => {
    let minStockpurchasePrice = prices[0] || 0;
    let profit = 0;
    for (let i = 1; i < prices.length; i++){
        if(prices[i] < minStockpurchasePrice){
            minStockpurchasePrice = prices[i]
        }

        profit = Math.max(profit, prices[i] - minStockpurchasePrice);
    }

    return profit;
};
console.log(maxProfit([6,1,5,7,4]))

