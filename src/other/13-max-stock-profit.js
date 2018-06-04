const profit = arr => {
  let maxProfit = -1;
  let byPrice = 0;
  let sellPrice = 0;
  let changeBy = true;

  for (let i = 0; i < arr.length; i++) {
    if (changeBy) byPrice = arr[i];
    sellPrice = arr[i + 1];

    if (sellPrice < byPrice) {
      changeBy = true;
    } else {
      const tempProfit = sellPrice - byPrice;
      if (tempProfit > maxProfit) maxProfit = tempProfit;
      changeBy = false;
    }
  }
  return maxProfit;
};

console.log(profit([10, 18, 4, 5, 9, 6, 16, 12]));
