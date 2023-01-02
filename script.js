
// Snake Water Gun
//   1     2    3
let cond
function winner(p, c) {
    if (p > c) {
        alert("Congrats you've win")
    } else if (p == c) {
        alert("Match has been draw")
    } else {
        alert("You lose :(")
    }

    cond = confirm("Want to play again?")
}
do {

    let pscore = 0, cscore = 0;

    for (let loop = 1; loop <= 10; loop++) {

        let player = prompt("Your score\n" + pscore + "\nComputer Score\n" + cscore + "\nChoose any one :\n1.snake\n2.water\n3.gun")
        console.log(player)
        let computer = Math.ceil(Math.random() * 3);
        console.log(computer)
        if (player == computer) {
            pscore += 1
            cscore += 1
            alert("Computer also chose this :)")
            continue
        } else if (player > 0 || player < 4) {
            if (player == 1 && computer == 3) {
                alert("Computer won in " + loop + "th round")
                cscore += 2;
                continue;
            } else if (player == 1 && computer == 2) {
                alert("you won in " + loop + "th round")
                pscore += 2;
                continue
            } else if (player == 2 && computer == 1) {
                alert("Computer won in " + loop + "th round")
                cscore += 2;
                continue
            } else if (player == 2 && computer == 3) {
                alert("you won in " + loop + "th round")
                pscore += 2;
                continue
            } else if (player == 3 && computer == 2) {
                alert("Computer won in " + loop + "th round")
                cscore += 2;
                continue
            }
            else if (player == 3 && computer == 1) {
                alert("you won in " + loop + "th round")
                pscore += 2;
                continue
            }
        } else {
            alert("Invalid Input")

        }

    }
    winner(pscore, cscore)
} while (cond)


let i = 0
function changecolor() {
    let colr = ['red', 'lime', 'lightblue', "green", 'megenta', "purple", 'gold', 'orange', 'yellow', 'teal','tomato', "black","white"]
    i += 1
    console.log(i)
    document.body.style.background = colr[i];
    document.body.style.color = colr[i+1];
}
