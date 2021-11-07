console.log("connected");

let input = document.querySelector("#comment");
let card = document.querySelectorAll(".card");
let nextPhoto = console.log("hello");
let roxyPhoto = document.querySelector("#roxyPup");


const roxyObject = { // created object for photo
  0: "https://i.imgur.com/3v8GjZZ.jpeg/1280x960", // each img url
  1: "https://i.imgur.com/7lbuTwq.jpeg/1280x960", // ''
  2: "https://i.imgur.com/2mrEqpa.jpeg/1280x960",
  3: "https://i.imgur.com/VmPWHAV.jpeg/1280x960",
  4: "https://i.imgur.com/IOit4MS.jpeg/1280x960",
  5: "https://i.imgur.com/5zczkZw.png/1280x960", 
};
console.log(roxyObject[0]); // print first one to console


// button.addEventListener("click", function(){
//     if (i == 4) { i = 0; /* OR return; to stop */ }
//         jQuery('.row.text-center').append(images[i++]);

// });

var i = 0 // define i
let roxyButton = document.querySelector(".card-image"); // create button
roxyButton.addEventListener("click", function(){ // onclick function
  
  // };
// // cycle through the array of photos //
    if (i == 6) {i = 0};
      roxyPhoto.setAttribute("src",roxyObject[i]); // set attribute (key, value)
      console.log(roxyObject[i]); //print photo url
      console.log(i); // print current 
      i++;

    
// change the current roxyPhoto
// set different src for photo

});

// input.addEventListener("keyup", function(event) {
//     if (event.keyCode === 13) {
//       // Cancel the default action, if needed
//       event.preventDefault();
//       console.log("hello");

//         // Action 2 - Create an Element
//         let newElement = document.createElement("a");
//         newElement.textContent = data.name;
//         console.log(newElement.textContent);
  
//         // Action 3 - Add the element to the page
//         // - grab an existing element from the page
//         // - append or prepend the new element to the exisiting element
//         input.appendChild(newElement);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }); 



// @todo button click to add comment

