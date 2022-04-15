//Question 1.

var txt; 
if(confirm("Would you like to Withdraw or Deposit?")) {
    txt = "Desposit Money";
}
else {
    txt = "Withdraw Money"
}

//Question 2.

let text;
  let amount = prompt("How much would you like to desposit?", "$0000 ");
  if (amount == null || amount == "") {
    text = "User cancelled the prompt.";
  } else {
    text = "You're depositing $100 " + amount + "Your new balance is $153.22";
  }