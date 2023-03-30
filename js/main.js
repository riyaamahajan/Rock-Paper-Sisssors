let playgame= confirm("shall we play rock paper or scissors");
if(playgame)
{
let playerchoice=prompt("please enter rock paper scissors");
if(playerchoice)
{
let playerone=playerchoice.trim().toLowerCase();
if(playerone=== "rock"|| playerone=== "paper"||playerone==="scissors")
{
let computerchoice = Math.floor( Math.random()*3+1)
let computer=computerchoice===1?"rock"
    :computerchoice===2?"paper"
    :"scissors";
    let result=
    playerone===computer
      ?"tie game!!"
      : playerone==="rock" && computer==="paper"
      ? `playerone: ${playerone} \ncomputer: ${computer} \n computer wins!`
      : playerone==="paper" && computer==="scissors"
      ? `playerone: ${playerone} \n computer: ${computer} \n computer wins!`
      : playerone==="scissors" && computer==="rock"
      ? `playerone: ${playerone} \ncomputer: ${computer}\n computer wins!`
      : `playerone: ${playerone}n\ncomputer: ${computer}\n playerone wins!`

alert(result);
let playagain=confirm("playagain")
playagain? location.reload():alert("thanks for playing")

}
else{
    alert("you didn't enter")
}}
else
{
    alert("i guess you changed mind,maybe next time");
}

}
else{
    alert("ok maybe next time");
}
