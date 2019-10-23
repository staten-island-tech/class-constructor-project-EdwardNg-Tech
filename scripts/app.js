class userInterface {
  display(userInput) {
    //document.querySelector('.display').insertAdjacentElement('beforeend', `<div class="card"><div class="card-image"><img src="${userInput.link}"><span class="card-title">${userInput.name}</span><a class="btn-floating halfway-fab waves-effect waves-light red">-</a></div><div class="card-content"><p>Artist: ${userInput.artist}</p><p>Genre: ${userInput.genre}</p><p>Year Relesaed: ${userInput.year}</p><p>Age: ${userInput.calculateAge()} years old</p></div></div>`)
    document.querySelector(".display").insertAdjacentHTML(
      "beforeend",
      `
        <div class="col s4">
          <div class="card element">
             <div class="card-image">
              <img src="${
                userInput.link
              }" onerror="this.onerror=null;this.src='images/svg/disc.svg';">
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
    if (document.querySelector(".card") === null) {
      document.querySelector(".main-row").insertAdjacentHTML(
        "afterend",
        `
          <div class="initial col s12 center-align">
            <img class="disc" src="images/svg/disc.svg" />
            <p class="initial-text">To start, fill in the fields to the left to display information about a music album.</p>
          </div>`
      );
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
          M.toast({
            html: "Please enter a value for every field.",
            displayLength: 4000,
            classes: "rounded red"
          });
          event.preventDefault();
        } else if (Number.isNaN(parseInt(userInput.year))) {
          M.toast({
            html: "Please enter a number for the year field.",
            displayLength: 4000,
            classes: "rounded red"
          });
          event.preventDefault();
        } else {
          let userDisplay = new userInterface();
          userDisplay.display(userInput);
          event.preventDefault();
          userDisplay.removeFields();
          try {
            document.querySelector(".initial").remove();
          } catch (error) {}
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
