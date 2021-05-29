let userScore = 0; 
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".scoreBoard"); 
const result_p = document.querySelector(".result > p"); 
const rock_div = document.getElementById("r"); 
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
    const choice = ["r", "p", "s"];
    const randomNumber = Math.floor (Math.random() * 3); 
    return choice[randomNumber];
    
}
function convertToWord(letter){
    if (letter=== "r") return "Rock"; 
    if (letter==="p") return "Paper"; 
    if (letter==="s") return  "Scissors"; 
}

function win(userChoice, computerChoice){
    userScore++; 
    userScore_span.innerHTML = userScore ; 
    result_p.innerHTML = convertToWord(userChoice)+"(user)" + " beats " + convertToWord(computerChoice)+"(computer)" + ". YOU WIN! 🔥 " ; 
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function(){ document.getElementById(userChoice).classList.remove('green-glow')}, 300);
}
function lose(userChoice, computerChoice){
    computerScore++; 
    computerScore_span.innerHTML = computerScore ; 
    result_p.innerHTML = convertToWord(computerChoice)+ "(comp)" + " beats " + convertToWord(userChoice)+"(user)" + ". YOU LOST! 😢 " ; 
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function(){ document.getElementById(userChoice).classList.remove('red-glow')}, 300);
}
function draw(userChoice, computerChoice){
    console.log("ITS A DRAW!");
    result_p.innerHTML = convertToWord(computerChoice) + " is equal to " + convertToWord(userChoice)+ " .It's a Draw 😄" ;  
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(function(){ document.getElementById(userChoice).classList.remove('gray-glow')}, 300);
}

function game(userChoice){
   const computerChoice = getComputerChoice();
   switch(userChoice+computerChoice) {
       case "pr":
       case "sp":
       case  "rs":
           win(userChoice ,computerChoice) ; 
           break; 
        case  "ps":
        case  "rp": 
        case  "sr": 
            lose(userChoice, computerChoice); 
            break ; 
        case  "ss":
        case  "pp":
        case  "rr":
            draw(userChoice, computerChoice);  
            break;                                       
   }

   
}

function main ()  {


    rock_div.addEventListener('click', function(){
        console.log("hey you click on rock");
        game("r"); 
    })
    paper_div.addEventListener('click', function(){
        console.log("hey you click on paper");
        game("p");  
    })
    scissors_div.addEventListener('click', function(){
        console.log("hey you click on scissors"); 
        game("s");
})

}
main();