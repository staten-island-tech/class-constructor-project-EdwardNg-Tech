class userInterface {
    display (userInput) {
        document.querySelector('.display').insertAdjacentHTML('beforeend', `<div class="element"><div class="display-name">${userInput.name}</div><div class="display-artist">${userInput.artist}</div><div class="display-year">${userInput.year}</div><div class="display-age">${userInput.calculateAge()}</div><div class="display-genre">${userInput.genre}</div><div class="display-image"><img src="${userInput.link}" alt=""></div><div class="remove"><button class="remove-albulm">Remove Albulm &#10006; </button></div></div>`);
    }
    removeData () {
        document.querySelector('.element').parentNode.removeChild(document.querySelector('.element'));
    }
    removeFields () {
        document.querySelector('.form').reset();
    }
}
class Albulm {
    constructor(name, artist, year, genre, link) {
        this.name = name;
        this.artist = artist;
        this.year = year;
        this.genre = genre;
        this.link = link;
    }
    calculateAge () {
        return(new Date().getFullYear() - this.year);
    }
}
class eventListeners {
    submit () {
        document.querySelector('#submit').addEventListener('click', function (event) {
            let userInput = new Albulm(
                document.querySelector('#name').value,
                document.querySelector('#artist').value,
                document.querySelector('#year').value,
                document.querySelector('#genre').value,
                document.querySelector('#link').value
            );
            if (userInput.nane === '' || userInput.artist === '' || userInput.year === '' || userInput.genre === '' || userInput.link === '') {
                alert('Error: Please enter a value for every field.');
                event.preventDefault();
            } else if (Number.isNaN(parseInt(userInput.year))) {
                alert('Error: Please enter a number for the year field.');
                event.preventDefault();
            } else {
                let userDisplay = new userInterface;
                userDisplay.display(userInput);
                event.preventDefault();
                userDisplay.removeFields();
            }
        });
    }
    remove () {
        document.querySelector('.display').addEventListener('click', function () {
            let userRemove = new userInterface;
            userRemove.removeData();
        })
    }
}
function run () {
    let userEventListener = new eventListeners;
    userEventListener.submit();
    userEventListener.remove();
}
run();