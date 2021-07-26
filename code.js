const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];
let playerPosition;
let finish;
let rowLength = map[0].length;
restart.addEventListener('click', function () {
    location.reload();
});

let i = 1;
for (a = 0; a < map.length; a++) {
    let row = document.createElement('div');
    row.setAttribute('class', 'row');
    for (b = 0; b < map[a].length; b++) {
        let cell = document.createElement('div');
        cell.setAttribute('id', i);
        let cellValue = map[a][b];
        if (cellValue === 'W') {
            cell.setAttribute('class', 'cell wall');
        }
        else if (cellValue === 'S') {
            cell.setAttribute('class', 'cell start floor');
            playerPosition = i;
            let player1 = document.createElement('div');
            player1.setAttribute('id', 'player');
            player1.innerHTML = '<img src="images/dracula.png" alt="Dracula" />';
            cell.append(player1);
        }
        else if (cellValue === 'F') {
            cell.setAttribute('class', 'cell finish floor');
            finish = i;
            cell.innerHTML = '<img src="images/cupofblood.png" alt="Finish" />';
        }
        else {
            cell.setAttribute('class', 'cell floor');
        }
        row.append(cell);
        i++;
    }
    maze.append(row);
}
const logKey = (e) => {
    let playDiv = document.getElementById(playerPosition);
    if (playDiv.classList.contains('start')) {
        if (e.code === 'ArrowRight') {
            squareCheck(playerPosition + 1);
        }
        else if (e.code === 'ArrowUp') {
            squareCheck(playerPosition - rowLength);
        }
        else if (e.code === 'ArrowDown') {
            squareCheck(playerPosition + rowLength);
        }
    }
    else if (playDiv.classList.contains('finish')) {
        if (e.code === 'ArrowLeft') {
            squareCheck(playerPosition - 1);
        }
        else if (e.code === 'ArrowUp') {
            squareCheck(playerPosition - rowLength);
        }
        else if (e.code === 'ArrowDown') {
            squareCheck(playerPosition + rowLength);
        }
    }
    else {
        if (e.code === 'ArrowRight') {
            squareCheck(playerPosition + 1);
        }
        else if (e.code === 'ArrowLeft') {
            squareCheck(playerPosition - 1);
        }
        else if (e.code === 'ArrowUp') {
            squareCheck(playerPosition - rowLength);
        }
        else if (e.code === 'ArrowDown') {
            squareCheck(playerPosition + rowLength);
        }
    }
    if (playerPosition === finish) {
        let message = document.querySelector("h1").innerHTML="Yummy!!!!! Thanks for the fresh cup of blood.";
        message.style.visibility = 'visible';
    }
}
const squareCheck = (checkId) => {
    let nextMove = document.getElementById(checkId);
    let playerMove = document.getElementById('player');
    if (nextMove.classList.contains('floor')) {
        nextMove.append(playerMove);
        playerPosition = checkId;
    }
}
document.addEventListener('keydown', logKey);