function tipCalc() {
  // store user input from webpage
  let subtotal = document.getElementById("subtotal").value;
  const tipPercent = document.getElementById("tipPercent").value;
  let numPeople = document.getElementById("numPeople").value;
  
  // User input validation
  if (subtotal == "") {
    alert("Oops! It looks like the meal subtotal amount was left blank. Please enter the meal subtotal amount.");
    return;
  } else if (subtotal <= 0) {
    alert("Are you sure about the meal subtotal amount? Usually the customer is charged for a meal... Please enter a valid positive amount.")
    return;
  }

  if (tipPercent == "" || tipPercent <= 0) {
    alert("Traditionally the customer tips the server. Please enter a valid positive tip percentage.");
    return;
  }

  if (numPeople == "" || numPeople <= 1) {
    numPeople = 1;
  }

  // calculate based on user input values
  subtotal = parseFloat(subtotal);
  let percentage = tipPercent / 100;
  let tipAmount = subtotal * percentage;
  let total = subtotal + tipAmount;
  let totalPerPerson = tipAmount / numPeople;
  
  // console log values to confirm functionality
  console.log('The subtotal variable is a "' + typeof subtotal + '" data type.');
  console.log('The subtotal is $' + subtotal.toFixed(2));
  console.log('The total with tip is $' + total.toFixed(2));
  console.log('The total per person is $' + totalPerPerson.toFixed(2) + ' at a tip rate of ' + tipPercent + '% divided by ' + numPeople + ' people paying.');
  
  // return values to the HTML page
  document.getElementById("totalWithTip").innerHTML = "$" + total.toFixed(2);
  document.getElementById("totalPerPerson").innerHTML = "$" + totalPerPerson.toFixed(2);

}

document.getElementById("calculate").onclick =
function() {
  tipCalc();
}
