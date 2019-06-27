var subtotal = 125;
var tipPercent = 15;
var numPeople = 4;

function tipCalc(val1, val2, val3) {
  var percentage = val2 / 100;
  var tipAmount = val1 * percentage;
  var total = val1 + tipAmount;
  var totalPerPerson = total / val3;
  console.log('The total with tip is ' + total.toFixed(2));
  console.log('The total per person is ' + totalPerPerson.toFixed(2));
}

tipCalc(subtotal, tipPercent, numPeople);
