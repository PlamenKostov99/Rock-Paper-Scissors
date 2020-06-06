let userScore = 0;
let compScore = 0;
const userScoreSpan = document.getElementById("user-score");
const compScoreSpan = document.getElementById("computer-score");
const scoreBoardDiv = document.querySelector(".score-board");
const resultDiv = document.querySelector(".result > p");
const rockDiv = document.getElementById("r");
const handDiv = document.getElementById("h");
const scissorsDiv = document.getElementById("s");

function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter){
    if(letter === 'r'){
        return "Rock";
    }else if(letter === 's'){
        return 'Scissors';
    }else{
        return 'Paper';
    }
}

function win(user, comp){
    userScore++;
    userScoreSpan.innerHTML = userScore;
    compScoreSpan.innerHTML = compScore;
    const smallUserWord = "user".fontsize(4).sup();
    const smallCompWord = "comp".fontsize(4).sup();
    resultDiv.innerHTML = `${convertToWord(user)}${smallUserWord} beats
     ${convertToWord(comp)}${smallCompWord} You win !`
}
function lose(user, comp){
    compScore++;
    userScoreSpan.innerHTML = userScore;
    compScoreSpan.innerHTML = compScore;
    const smallUserWord = "user".fontsize(4).sup();
    const smallCompWord = "comp".fontsize(4).sup();
    resultDiv.innerHTML = `${convertToWord(user)}${smallUserWord} loses
     ${convertToWord(comp)}${smallCompWord} You lose !`
}
function draw(user, comp){
    const smallUserWord = "user".fontsize(4).sup();
    const smallCompWord = "comp".fontsize(4).sup();
    resultDiv.innerHTML = `${convertToWord(user)}${smallUserWord} equals
     ${convertToWord(comp)}${smallCompWord} It's a draw!`
}
function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice)
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice)
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice)
            break;
    }
}

function main(){

rockDiv.addEventListener('click', function(){
    game('r');
});

handDiv.addEventListener('click', function(){
    game('p');
});

scissorsDiv.addEventListener('click', function(){
    game('s');
});

}

main();
