/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */


/* Step 2 - Variables */
let fullName = 'SSEBUDE TITUS';
let currentYear= '2023';
let profilePicture='images/titus.png';



/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.getElementById('image');
/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;

/*imageElement.setAttribute('src', profilePicture);

imageElement.setAttribute('alt')=`profile picture of ${fullName}`;
/* Step 5 - Array */
let fevfood=['Matooke','Cassava','kikomando','Posho','rice','Nodle','fish','beef','rolex'];
let best= 'chapati';
fevfood.push(best);
foodElement.innerHTML += `<br> ${fevfood}`;
fevfood.shift();
foodElement.innerHTML += `<br>${fevfood}`;
fevfood.pop();
foodElement.innerHTML += `<br>${fevfood}`;







