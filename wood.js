function totalWood(qtyChair, qtyTable, qtyBed) {
  const woodPerChair = 3;
  const woodPerTable = 10;
  const woodPerBed = 50;

  const chairWood = woodPerChair * qtyChair;
  const tableWood = woodPerTable * qtyTable;
  const bedWood = woodPerBed * qtyBed;
  
  totalWoodRequired = chairWood + tableWood + bedWood;
  return totalWoodRequired;
}

const needTotalWood = totalWood(10, 20, 15);

console.log(needTotalWood);
