/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile ={
    name: "Ssebude Titus",
    photo: "images/titus.png",
    favouriteFood: [
        'Matooke',
        'Cassava',
        'kikomando',
        'Posho',
        'rice',
        'Nodle',
        'fish',
        'beef',
        'rolex'
    ],
    hobbie: [
        'Touring',
        'Eating',
        'watching mivies',
        'Learning new things'
    ],
    placesLived: [],
};
/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'Masaka, Uganda',
        length: '1 year'
    }
);



/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */
document.querySelector('#photo').setAttribute('src', myProfile.photo);

// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.querySelector('#photo').setAttribute('alt', myProfile.name);
/* Favorite Foods List*/
myProfile.favouriteFood.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
})
/* Hobbies List */
myProfile.hobbie.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
})
/* Places Lived DataList */
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
myProfile.placesLived.forEach((placeLived) => {
    let placesLivedPlace = document.createElement('dt');
    placesLivedPlace.textContent = placeLived.place;
    
    let placesLivedLength = document.createElement('dd');
    placesLivedLength.textContent = placeLived.length;
    
    // Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
    document.querySelector('#places-lived').appendChild(placesLivedPlace);
    document.querySelector('#places-lived').appendChild(placesLivedLength);
})

