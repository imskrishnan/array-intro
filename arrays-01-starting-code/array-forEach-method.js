// we have a list of items, and we want to do something with each of those numbers. This is another alternative to the for-of loop. You can always use the for-loop with index but another alternative to that is the forEach loop
const prices = [10, 20, 30, 40, 50];
const tax = 0.18;
const taxAdjusted = [];

prices.forEach((price, index, prices) => {
  const taxAdjustedPrice = (1 + tax) * price;
  taxAdjusted.push(taxAdjustedPrice);
  console.log();
});

console.log(taxAdjusted);
