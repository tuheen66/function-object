const shoppingCart = [
  { name: "shoe", price: 1200, quantity: 2 },
  { name: "shirt", price: 2200, quantity: 5 },
  { name: "pant", price: 3700, quantity: 4 },
  { name: "belt", price: 600, quantity: 3 },
];

function totalCost(products) {
  let cost = 0;
  for (i = 0; i < products.length; i++) {
    const product = products[i];
    //console.log(product);

    const productCost = product.price * product.quantity;
    cost = cost + productCost;
  }
  return cost;
}

const expense = totalCost(shoppingCart);

console.log(expense);
