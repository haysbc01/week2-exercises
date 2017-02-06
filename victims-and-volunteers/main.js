var disasterVictims = prompt('How many disaster victims would you like to enter?')

var name = [];
var number = [];
var street = [];

for (var i=disasterVictims; i>0; i--) {
  if (disasterVictims > 0) {
    name.push(prompt ("What is the victim's name?"));
    number.push(prompt ("What is " + name + "'s phone number?"));
    street.push(prompt ("What is "+ name+ "'s street address?'"));
  }
}

//else {
  //alert ("There are no victims, that is great news!")
//alert ("Names of Victims" + name[]);
