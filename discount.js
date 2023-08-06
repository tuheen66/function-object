function totalTicketPrice(num) {
  const first100Price = 100;
  const second100Price = 90;
  const restPrice = 70;

  if (num <= 100) {
    const ticketCost = num * first100Price;
    console.log(ticketCost);
  } else if (num <= 200) {
    const first100Cost = 100 * first100Price;
    const second100Cost = (num - 100) * second100Price;
    const totalCost = first100Cost + second100Cost;
    console.log(totalCost);
  } else {
    const first100Cost = 100 * first100Price;
    const second100Cost = 100 * second100Price;
    const restCost = (num - 200) * restPrice;
    const totalCost = first100Cost + second100Cost + restCost;
    console.log(totalCost);
  }
}

const totalTicketCost = totalTicketPrice(150);
