console.log('JS OK');

//* Esercizio 1 - Gioco dei dadi

// - 1
const play = document.getElementById('play');
const userVictory = document.getElementById('user-winner');
const userLose = document.getElementById('user-loser');
const userDraw = document.getElementById('user-draw');
const userNumber = document.getElementById('user-number')
const computerVictory = document.getElementById('computer-winner');
const computerLose = document.getElementById('computer-loser');
const computerDraw = document.getElementById('computer-draw');
const computerNumber = document.getElementById('computer-number');
console.log (play, userVictory, userLose, computerVictory, computerLose);

play.addEventListener('click', function(){
    
    // - 3 
    let resultUser = '';
    let resultComputer = '';
    console.log (resultUser, resultComputer);

    // - 4 
    resultUser = Math.floor(Math.random() * 6) + 1;
    console.log('Result User', resultUser);
    userNumber.innerText = resultUser;
    resultComputer = Math.floor(Math.random() * 6) + 1;
    console.log('Result Computer', resultComputer);
    computerNumber.innerText = resultComputer;

    // - 5
    if (resultUser > resultComputer) {
        userVictory.classList.remove('d-none')
        computerLose.classList.remove('d-none')
    } else if (resultUser < resultComputer) {
        userLose.classList.remove('d-none')
        computerVictory.classList.remove('d-none')
    } else if (resultUser === resultComputer) {
        userDraw.classList.remove('d-none')
        computerDraw.classList.remove('d-none')
    }
})

//* Esercizio 2 - Finto Login


// - 1 
const allowedEmails = ['rocco.lorenzo@boolean.it', 'ambretta.marino@boolean.it', 'eliana.barese@boolean.it'];

console.log('lista emails: ', allowedEmails);
// - 2
const form = document.getElementById('form');
const input = document.getElementById('input');
const button = document.getElementById('button');
const result = document.getElementById('result');
const error = document.querySelector('.invalid-feedback');

console.log(form, input, button, result);

// - 3
button.addEventListener('click', function () {

    // - 4
    const userEmail = input.value.trim();

    let userIsAllowed = false;

    for(let i = 0; i < allowedEmails.length; i++) {
        console.log('Email controllata: ', allowedEmails[i]);
        console.log("Email dell'utente: ", userEmail)

        if(userEmail === allowedEmails[i]) {
            console.log('Email confermata');;
            userIsAllowed = true;
        }
    }
    
    console.log('la Mail è autorizzata : ',userIsAllowed)

    // - 5 
    if(userIsAllowed) {
        button.classList.add('d-none')
        form.classList.add('d-none')
        result.innerText = 'Benvenuto!';
        result.classList.remove('d-none')
    } else {
        error.innerText = 'Non sei autorizzato';
        input.classList.add('is-invalid')
    }
});


