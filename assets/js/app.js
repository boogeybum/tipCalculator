const subtotal = 125;
const tipPercent = 15;
const numPeople = 4;

function tipCalc(val1, val2, val3) {
  const percentage = val2 / 100;
  const tipAmount = val1 * percentage;
  const total = val1 + tipAmount;
  const totalPerPerson = total / val3;

  console.log('The total with tip is ' + total.toFixed(2));
  console.log('The total per person is ' + totalPerPerson.toFixed(2));
  
  document.getElementById("totalWithTip").innerHTML = total.toFixed(2);
  document.getElementById("totalPerPerson").innerHTML = totalPerPerson.toFixed(2);

}

tipCalc(subtotal, tipPercent, numPeople);
