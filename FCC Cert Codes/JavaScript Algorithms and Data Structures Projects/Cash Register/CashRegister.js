// Cash Register

function checkCashRegister(price, cash, cid) {
  const currencyUnits = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100],
  ];

  let changeDue = cash - price;

  let totalCid = cid.reduce((sum, curr) => sum + curr[1], 0).toFixed(2);

  totalCid = parseFloat(totalCid);

  if (totalCid < changeDue) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  if (totalCid === changeDue) {
    return { status: "CLOSED", change: cid };
  }

  let changeArray = [];

  for (let i = currencyUnits.length - 1; i >= 0; i--) {
    const currencyName = currencyUnits[i][0];
    const currencyValue = currencyUnits[i][1];
    let amountInDrawer = cid[i][1];

    // Calculate how much of this denomination we can give
    let amountToReturn = 0;

    while (changeDue >= currencyValue && amountInDrawer > 0) {
      changeDue -= currencyValue;
      amountInDrawer -= currencyValue;
      amountToReturn += currencyValue;
      // Round to avoid floating point issues
      changeDue = Math.round(changeDue * 100) / 100;
    }

    if (amountToReturn > 0) {
      changeArray.push([currencyName, amountToReturn]);
    }
  }

  console.log(changeDue);
  if (changeDue > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  return { status: "OPEN", change: changeArray };
}

checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);

console.log(
  checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);
