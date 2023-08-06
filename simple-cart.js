const shoppingCart = [
  { name: "shoe", price: 1200 },
  { name: "shirt", price: 2200 },
  { name: "pant", price: 3700 },
  { name: "belt", price: 600 },
];

function totalCost(products) {
  let cost = 0;
  for (i = 0; i < products.length; i++) {
    const product = products[i];
    //console.log(product);


    cost = cost + product.price;
  }
  return cost;
}

const expense = totalCost(shoppingCart);

console.log(expense);
