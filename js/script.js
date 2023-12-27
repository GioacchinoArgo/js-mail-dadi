console.log('JS OK')

// - 1
const play = document.getElementById('play');
const userVictory = document.getElementById('user-winner');
const userLose = document.getElementById('user-loser');
const userDraw = document.getElementById('user-draw');
const userNumber = document.getElementById('user-number')
const computerVictory = document.getElementById('computer-winner');
const computerLose = document.getElementById('computer-loser');
const computerDraw = document.getElementById('computer-draw');
const computerNumber = document.getElementById('computer-number')
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



// ------------------------- //


