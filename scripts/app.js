class userInterface {
  display(userInput) {
    //document.querySelector('.display').insertAdjacentElement('beforeend', `<div class="card"><div class="card-image"><img src="${userInput.link}"><span class="card-title">${userInput.name}</span><a class="btn-floating halfway-fab waves-effect waves-light red">-</a></div><div class="card-content"><p>Artist: ${userInput.artist}</p><p>Genre: ${userInput.genre}</p><p>Year Relesaed: ${userInput.year}</p><p>Age: ${userInput.calculateAge()} years old</p></div></div>`)
    document.querySelector(".display").insertAdjacentHTML(
      "beforeend",
      `
        <div class="col s4">
          <div class="card element">
             <div class="card-image">
              <img src="${userInput.link}">
             </div>
             <span class="card-title">${userInput.name}</span>
             <div class="card-content">
               <p>Artist: ${userInput.artist}</p>
               <p>Genre: ${userInput.genre}</p>
               <p>Year Released: ${userInput.year}</p>
               <p>Age: ${userInput.calculateAge()}</p>
             <div class="remove">
               <button id="remove-album" class="waves-effect waves-light btn remove-album">Remove Album</button>
             </div>
           </div>
         </div>
         `
    );
  }
  removeData(target) {
    if (target.id === "remove-album") {
      target.parentElement.parentElement.parentElement.parentElement.remove();
    }
  }
  removeFields() {
    document.querySelector(".form").reset();
  }
}
class Album {
  constructor(name, artist, year, genre, link) {
    this.name = name;
    this.artist = artist;
    this.year = year;
    this.genre = genre;
    this.link = link;
  }
  calculateAge() {
    return new Date().getFullYear() - this.year;
  }
}
class eventListeners {
  submit() {
    document
      .querySelector("#submit")
      .addEventListener("click", function(event) {
        let userInput = new Album(
          document.querySelector("#name").value,
          document.querySelector("#artist").value,
          document.querySelector("#year").value,
          document.querySelector("#genre").value,
          document.querySelector("#link").value
        );
        if (
          userInput.nane === "" ||
          userInput.artist === "" ||
          userInput.year === "" ||
          userInput.genre === "" ||
          userInput.link === ""
        ) {
          alert("Error: Please enter a value for every field.");
          event.preventDefault();
        } else if (Number.isNaN(parseInt(userInput.year))) {
          alert("Error: Please enter a number for the year field.");
          event.preventDefault();
        } else {
          let userDisplay = new userInterface();
          userDisplay.display(userInput);
          event.preventDefault();
          userDisplay.removeFields();
        }
      });
  }
  remove() {
    document
      .querySelector(".display")
      .addEventListener("click", function(event) {
        let userRemove = new userInterface();
        userRemove.removeData(event.target);
      });
  }
}
function run() {
  let userEventListener = new eventListeners();
  userEventListener.submit();
  userEventListener.remove();
}
run();
