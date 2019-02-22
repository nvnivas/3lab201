'use strict'

var userName = prompt('What is your Name?');
console.log('user name:', userName);
alert('Hi ' + userName + ' I\'m going to ask you few questions');

var isAdult = prompt('Are you over 18 years old? Please enter yes/no');
console.log('18+ years?:', isAdult);
if (isAdult.toLowerCase() === 'yes' || isAdult.toLowerCase() === 'y') {
  alert('You are an Adult.');
  console.log('You are an Adult.');
} else if (isAdult.toLowerCase() === 'no' || isAdult.toLowerCase() === 'n') {
  alert('You are a Minor.');
  console.log('You are a Minor.');
} else {
  alert('You input is invalid');
  console.log('Invalid input:', isAdult);
}

var isUSCitizen = prompt('Are you US Citizen? Please enter yes/no');
console.log('US Citizen?:', isUSCitizen);
if (isUSCitizen.toLowerCase() === 'yes' || isUSCitizen.toLowerCase() === 'y') {
  alert('You are US Citizen.');
  console.log('You are US Citizen.');
} else if (isUSCitizen.toLowerCase() === 'no' || isUSCitizen.toLowerCase() === 'n') {
  alert('You are not US Citizen.');
  console.log('You are not US Citizen.');
} else {
  alert('You input is invalid');
  console.log('Invalid input:', isUSCitizen);
}

var isGarduate  = prompt('Do you have a Graduate degree? Please enter yes/no');
console.log('Graduate?:', isGarduate );
if (isGarduate .toLowerCase() === 'yes' || isGarduate .toLowerCase() === 'y') {
  alert('You are Graduate.');
  console.log('You are Graduate.');
} else if (isGarduate .toLowerCase() === 'no' || isGarduate .toLowerCase() === 'n') {
  alert('You are not Graduate.');
  console.log('You are not Graduate.');
} else {
  alert('You input is invalid');
  console.log('Invalid input:', isGarduate);
}

var isEmployed  = prompt('Do you have a Job Now? Please enter yes/no');
console.log('Has a Job?:', isEmployed );
if (isEmployed .toLowerCase() === 'yes' || isEmployed .toLowerCase() === 'y') {
  alert('You are Employed.');
  console.log('You are Employed.');
} else if (isEmployed .toLowerCase() === 'no' || isEmployed .toLowerCase() === 'n') {
  alert('You are not Employed.');
  console.log('You are not Employed.');
} else {
  alert('You input is invalid');
  console.log('Invalid input:', isEmployed);
}

var isAvaliableForHire  = prompt('Are you have a new Job? Please enter yes/no');
console.log('Looking for a new Job?:', isAvaliableForHire );
if (isAvaliableForHire .toLowerCase() === 'yes' || isAvaliableForHire .toLowerCase() === 'y') {
  alert('You are Looking for a new Job.');
  console.log('You are Looking for a new Job.');
} else if (isAvaliableForHire .toLowerCase() === 'no' || isAvaliableForHire .toLowerCase() === 'n') {
  alert('You are not Looking for a new Job.');
  console.log('You are not Looking for a new Job.');
} else {
  alert('You input is invalid');
  console.log('Invalid input:', isAvaliableForHire);
}

