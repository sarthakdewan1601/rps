let userScore=0;
let computerScore=0;
const UserScore_span=document.getElementById("user-score");
const ComputerScore_span=document.getElementById("comp-score");
const scoreBoard_div=document.querySelector(".score-board");
const result_p=document.querySelector(".result > p");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissor_div=document.getElementById("s");

function getcomputerchoice()
{
	const choice=["r","p","s"];
	const randomnumber=Math.floor(Math.random() * 3);
	return choice[randomnumber];
}

function converttoword(letter){
	if(letter==="r") return "Rock";
	if(letter==="p") return "Paper";
    return "Scissors";
}

function win(userChoice,computerChoice)
{
	const smallUserWord= "user".fontsize(3).sub();
	const smallCompWord= "comp".fontsize(3).sub();
	const userChoice_div=document.getElementById(userChoice);
	userScore++;
	UserScore_span.innerHTML=userScore;
	ComputerScore_span.innerHTML=computerScore;
	result_p.innerHTML= `${converttoword(userChoice)}${smallUserWord}  beats  ${converttoword(computerChoice)}${smallCompWord}  .You win!!! :')`;
	userChoice_div.classList.add("green-glow");
	setTimeout(function(){ userChoice_div.classList.remove("green-glow") }, 500);
}

function lose(userChoice,computerChoice)
{
	const smallUserWord= "user".fontsize(3).sub();
	const smallCompWord= "comp".fontsize(3).sub();
	const userChoice_div=document.getElementById(userChoice);
	computerScore++;
	UserScore_span.innerHTML=userScore;
	ComputerScore_span.innerHTML=computerScore;
	result_p.innerHTML= `${converttoword(userChoice)}${smallUserWord}  loses to  ${converttoword(computerChoice)}${smallCompWord}  .You lost! :(`;
	userChoice_div.classList.add("red-glow");
	setTimeout(function(){ userChoice_div.classList.remove("red-glow") }, 500);

}

function draw(userChoice,computerChoice)
{
	const smallUserWord= "user".fontsize(3).sub();
	const smallCompWord= "comp".fontsize(3).sub();
	const userChoice_div=document.getElementById(userChoice);
	result_p.innerHTML= `${converttoword(userChoice)}  equals  ${converttoword(computerChoice)}  .It's a draw...`;
	userChoice_div.classList.add("gray-glow");
	setTimeout(function(){ userChoice_div.classList.remove("gray-glow") }, 500);

}

function game(userChoice)
{
	const computerChoice=getcomputerchoice();
	switch(userChoice+computerChoice)
	{
		case "rs":
		case "pr":
		case "sp":
		win(userChoice,computerChoice);
		break;
		case "rp":
		case "ps":
		case "sr":
		lose(userChoice,computerChoice);
		break;
		case "rr":
		case "pp":
		case "ss":
		draw(userChoice,computerChoice);
		break;
	}

}

function main(){
rock_div.addEventListener("click", function(){

	game("r");

})

paper_div.addEventListener('click', function(){

	game("p");
	
})

scissor_div.addEventListener('click', function(){

	game("s");
	
})
}
main();