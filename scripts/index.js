var randomNumber1 = Math.random()
randomNumber1 = Math.floor(randomNumber1*3)
console.log(randomNumber1)

var randomNumber2 = Math.random()
randomNumber2 = Math.floor(randomNumber2*3)
console.log(randomNumber2)

// scissors = 0
// paper = 1
// rocks = 2

const rps_img = ['static/img/scissors.png', 'static/img/hands.png', 'static/img/rocks.png']

// player 1 image
player1_choice = rps_img[randomNumber1]
// GET and SET player IMG
document.querySelector(".player1img").getAttribute('src')
document.querySelector(".player1img").setAttribute('src', player1_choice)

// player 2 image
player2_choice = rps_img[randomNumber2]
document.querySelector('.player2img').setAttribute('src', player2_choice)

if (player1_choice === player2_choice){
    document.querySelector(".win-status").textContent = "Draw !"
}

else if (player1_choice === rps_img[0] && player2_choice === rps_img[1]){
    document.querySelector(".win-status").textContent = "Player 1 Wins !"
}

else if (player1_choice === rps_img[1] && player2_choice === rps_img[2]){
    document.querySelector(".win-status").textContent = "Player 1 Wins !"
}

else if (player1_choice === rps_img[2] && player2_choice === rps_img[0]){
    document.querySelector(".win-status").textContent = "Player 1 Wins !"
}

else {
    document.querySelector(".win-status").textContent = "Player 2 Wins !"
}