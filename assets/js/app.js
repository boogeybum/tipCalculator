

function tipCalc() {
  // store user input from webpage
  let subtotal = document.getElementById("subtotal").value;
  const tipPercent = document.getElementById("tipPercent").value;
  const numPeople = document.getElementById("numPeople").value;
  
  // calculate based on user input values
  subtotal = parseFloat(subtotal);
  const percentage = tipPercent / 100;
  const tipAmount = subtotal * percentage;
  const total = subtotal + tipAmount;
  const totalPerPerson = tipAmount / numPeople;
  
  console.log(typeof subtotal);
  console.log('The subtotal is ' + subtotal.toFixed(2));
  console.log('The total with tip is ' + total.toFixed(2));
  console.log('The total per person is ' + totalPerPerson.toFixed(2));
  
  document.getElementById("totalWithTip").innerHTML = total.toFixed(2);
  document.getElementById("totalPerPerson").innerHTML = totalPerPerson.toFixed(2);

}

document.getElementById("calculate").onclick =
function() {
  tipCalc();
}
