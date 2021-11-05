
let input = document.querySelector("#comment");
let card = document.querySelectorAll(".card");
let roxyPhoto = document.querySelector(".roxyPhoto");
let nextPhoto = console.log("hello")

let roxyArray = {
    "https://i.imgur.com/3v8GjZZ.jpeg/1280x960",
    "https://i.imgur.com/7lbuTwq.jpeg/1280x960",
    "https://i.imgur.com/2mrEqpa.jpeg/1280x960",
    "https://i.imgur.com/VmPWHAV.jpeg/1280x960",
    "https://i.imgur.com/IOit4MS.jpeg/1280x960",
    "https://i.imgur.com/5zczkZw.png/1280x960",
};
console.log(roxyArray);

input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      console.log("hello");

        // Action 2 - Create an Element
        let newElement = document.createElement("a");
        newElement.textContent = data.name;
        console.log(newElement.textContent);
  
        // Action 3 - Add the element to the page
        // - grab an existing element from the page
        // - append or prepend the new element to the exisiting element
        input.appendChild(newElement);
      })
      .catch(function (error) {
        console.log(error);
      });
  }); 

// click button to change photo
button.addEventListener("click", nextPhoto);
    
};
// cycle through the array of photos
for (i = 0, i >=6, i++) {
    roxyPhoto.setAttribute("src", roxyArray[i]);
};


// button click to add comment

