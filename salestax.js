
var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {
  var output = {};
  for (num = 0; num < salesData.length; num++) {
    var companyName = salesData[num].name;
    var province = salesData[num]["province"];
    var taxRate = taxRates[province];
    var totalSales = 0;
      for (var x = 0; x < salesData[num]["sales"].length; x++) {
        totalSales += salesData[num]["sales"][x];
      }
    var totalTaxes = totalSales * taxRate;
    if (output[companyName] == undefined) {
      output[companyName] = {};
      output[companyName]["totalSales"] = totalSales;
      output[companyName]["totalTaxes"] = totalTaxes;
    } else {
      output[companyName]["totalSales"] += totalSales;
      output[companyName]["totalTaxes"] += totalTaxes;
    }
  }
  console.log(output);
}


calculateSalesTax(companySalesData, salesTaxRates);

  // for (x = 0; x < salesData.length; x++) {

  // }





// var results = calculateSalesTax(companySalesData, salesTaxRates);
// console.log(results);
/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/