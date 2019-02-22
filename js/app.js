'use strict'

var userName = prompt('What is your Name?');
console.log('user name:', userName);
alert('Hi ' + userName + ' I\'m going to ask you few questions');
var noOfCorrectAns = 0; 

var isAdult = prompt('Do you think i am over 18 years old? Please enter yes/no');
console.log('18+ years?:', isAdult);
if (isAdult.toLowerCase() === 'yes' || isAdult.toLowerCase() === 'y') {
  alert('Yes. I am an Adult.');
  console.log('I am an Adult.');
  noOfCorrectAns += 1;
} else if (isAdult.toLowerCase() === 'no' || isAdult.toLowerCase() === 'n') {
  alert('Wrong. I am a Not Minor.');
  console.log('Wrong. I am a Not Minor..');
} else {
  alert('You input is invalid');
  console.log('Invalid input:', isAdult);
}

var isUSCitizen = prompt('Am i a US Citizen? Please enter yes/no');
console.log('US Citizen?:', isUSCitizen);
if (isUSCitizen.toLowerCase() === 'yes' || isUSCitizen.toLowerCase() === 'y') {
  alert('Wrong! I am not US Citizen.');
  console.log('Wrong! I am not US Citizen.');
} else if (isUSCitizen.toLowerCase() === 'no' || isUSCitizen.toLowerCase() === 'n') {
  alert('Correct, I am  not US Citizen.');
  console.log('Correct, I am not US Citizen.');
  noOfCorrectAns += 1;
} else {
  alert('You input is invalid');
  console.log('Invalid input:', isUSCitizen);
}

var isGarduate  = prompt('Do i have a Graduate degree? Please enter yes/no');
console.log('Graduate?:', isGarduate );
if (isGarduate.toLowerCase() === 'yes' || isGarduate.toLowerCase() === 'y') {
  alert('Correct, I am a Graduate.');
  console.log('Correct, I am a Graduate.');
  noOfCorrectAns += 1;
} else if (isGarduate.toLowerCase() === 'no' || isGarduate.toLowerCase() === 'n') {
  alert('Wrong! I do have a graduate degree.');
  console.log('Wrong! I do have a graduate degree.');
} else {
  alert('You input is invalid');
  console.log('Invalid input:', isGarduate);
}

var isEmployed  = prompt('Do i have a Job Now? Please enter yes/no');
console.log('Has a Job?:', isEmployed );
if (isEmployed.toLowerCase() === 'yes' || isEmployed.toLowerCase() === 'y') {
  alert('Correct, i have a job');
  console.log('Correct, i have a job');
  noOfCorrectAns += 1;
} else if (isEmployed.toLowerCase() === 'no' || isEmployed.toLowerCase() === 'n') {
  alert('Wrong! I have a job');
  console.log('Wrong! I have a job');
} else {
  alert('You input is invalid');
  console.log('Invalid input:', isEmployed);
}

var isAvaliableForHire  = prompt('Am i looking for a new Job? Please enter yes/no');
console.log('Looking for a new Job?:', isAvaliableForHire );
if (isAvaliableForHire.toLowerCase() === 'yes' || isAvaliableForHire.toLowerCase() === 'y') {
  alert('Wrong! i am not looking for a Job ');
  console.log('Wrong! i am not looking for a Job');
} else if (isAvaliableForHire.toLowerCase() === 'no' || isAvaliableForHire.toLowerCase() === 'n') {
  alert('Correct, not looking for a job.');
  console.log('Correct, not looking for a job');
  noOfCorrectAns += 1;
} else {
  alert('You input is invalid');
  console.log('Invalid input:', isAvaliableForHire);
}

