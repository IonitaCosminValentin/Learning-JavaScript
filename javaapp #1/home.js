//Challange #1: Your age in days!
{
function ageInDays() {
    let year = prompt("What year were you born in?");
    yearsindays = (2020 - year) * 365;
    var h1 = document.createElement('h1');
    var answer = document.createTextNode("You are " + yearsindays + " days old");
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(answer);
    document.getElementById("flex-box-result").appendChild(h1);
}

function reset() {
    document.getElementById('ageInDays').remove();
}

function cats() {
    let cat = document.createElement("img");
    cat.setAttribute("width" , 300);
    cat.setAttribute("height", 300);
    cat.setAttribute('id', 'catis');
    let arrs = [];
    for (var i = 0; i < 50; i++) {
      arrs.push('http://thecatapi.com/api/images/get?format=src&type==' + i);
    };
    let div = document.getElementById("catts");
    let randcats = Math.floor(Math.random() * arrs.length);
    cat.src = arrs[randcats];
    div.appendChild(cat);
};
function resetCats() {
  document.getElementById('catis').remove();
};
function rpsGame(yourChoice) {
  let humanChoice = yourChoice.id;
  let botChoice = RandGen();
  result = decideWinner(humanChoice, botChoice);
  let message = finalMesage(result);
  console.log("You picked " + humanChoice);
  console.log("The computer picked " + botChoice);
  console.log(message);
  console.log(result);
  rpsFrontEnd(humanChoice, botChoice, message);
}

function RandGen() {
  let dd = Math.floor(Math.random() * 3);
  let arr = ['rock', 'hartie', 'scissors'];
  return arr[dd];
}

function decideWinner(humanChoice, botChoice) {
  let databasew = {
  'rock' : {'scissors':1, 'rock':0.5, 'hartie':0 },
  'hartie' : {'rock':1, 'hartie':0.5, 'scissors':0},
  'scissors': {'hartie':1, 'scissors':0.5, 'rock': 0},
  }
  let yourScore = databasew[humanChoice][botChoice];
  let botScore = databasew[botChoice][humanChoice];
  return [yourScore, botScore];
}

function finalMesage(yourScore, botScore) {
  if(yourScore === 0){
    return {'message': 'You lost!', 'color':'red'};
  }else if(botScore === 0.5){
    return {'message': 'Its a tie!', 'color':'yellow'};
  }else {
    return {'message': 'You won!', 'color':'green'};
  }
}
function rpsFrontEnd(humanImageChoice, botImageChoice, ddd){
  let imgsDatabase = {
    'rock': document.getElementById('rock').src,
    'hartie': document.getElementById('hartie').src,
    'scissors': document.getElementById('scissors').src,
  }
  document.getElementById('rock').remove();
  document.getElementById('hartie').remove();
  document.getElementById('scissors').remove();
  let message = finalMesage(...result);
  let humanDiv = document.createElement('dev');
  let botDiv = document.createElement('dev');
  let messageDiv = document.createElement('dev');
  humanDiv.innerHTML ="<img src='" + imgsDatabase[humanImageChoice] + "' height=150 width=200 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1)'>";
  botDiv.innerHTML ="<img src='" + imgsDatabase[botImageChoice] + "' height=150 width=200 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1)'>";
  messageDiv.innerHTML = "<h1 style='color:" + message['color'] + "; font-size: 60px; padding 30px; '>" + message['message'] + "</h1>";
  document.getElementById('flex-box-rps').appendChild(humanDiv);
  document.getElementById('flex-box-rps').appendChild(messageDiv);
  document.getElementById('flex-box-rps').appendChild(botDiv);
};
function score() {
  let message = finalMesage(...result);
  let h3 = document.createElement('h3');
  let score = [0, 0]
  let div = document.createElement('div')
  if (message['message'] == 'You won!') {
    score[0] = score[0] +1;
  }else if (message['message'] == "You lost!") {
    score[1] = score[1] +1;
  };
  let append = document.createTextNode('Score is ' + score);
  h3.appendChild(append)
  div.appendChild(h3);
  let htmlclass = document.getElementById('rpscontainer');
  htmlclass.appendChild(div);
}
function buton() {
document.getElementById("flex-box-rps").remove();
let div = document.createElement('div');
let rock = document.createElement("img");
let hartie = document.createElement('img');
let scissors = document.createElement('img');
let clasa = document.getElementById('rpscontainer');
rock.setAttribute("src", 'http://clipart-library.com/new_gallery/131-1313931_rock-paper-scissors.png');
rock.setAttribute('width', 200)
hartie.setAttribute('width', 200)
scissors.setAttribute('width', 200)
rock.setAttribute('height', 150)
hartie.setAttribute('height', 150)
scissors.setAttribute('height', 150)
div.setAttribute('class', 'flex-box-rps')
hartie.setAttribute('src', 'https://www.clipartmax.com/png/full/149-1498962_cartoon-emoji-paper-rock-scissors-icon-rock-paper-scissors-emoji.png');
rock.setAttribute("id", "rock");
hartie.setAttribute("id", "hartie");
scissors.setAttribute('id', 'scissors');
scissors.setAttribute('src', 'https://www.kindpng.com/picc/m/502-5025794_rock-paper-scissors-clipart-hd-png-download.png');
rock.setAttribute("onclick", "rpsGame()")
hartie.setAttribute('onclick', 'rpsGame()')
scissors.setAttribute('onclick', "rpsGame()")
div.appendChild(rock);
div.appendChild(hartie);
div.appendChild(scissors);
clasa.appendChild(div);
}
}
var all_buttons = document.getElementsByTagName('button');
let copyAllButtons = [];
for(let i=0; i < all_buttons.length; i++){
  copyAllButtons.push(all_buttons[i].classList[1]);
};
console.log(copyAllButtons);
function buttonColorChange(buttonstuff) {
  if (buttonstuff.value == 'red'){
    buttonsRed();
  }else if (buttonstuff.value == 'green') {
    buttonsGreen();
  }else if (buttonstuff.value == "random") {
    buttonstRandom();
  }else if (buttonstuff.value == 'reset') {
    buttonsReset();
  }
};
function buttonsRed() {
  for(let i = 0; i < all_buttons.length; i++){
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add('btn-danger');
  }
};
function buttonsGreen() {
  for(let i = 0; i < all_buttons.length; i++){
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add('btn-success');
  }
};

function buttonsReset() {
  for(let i = 0; i < all_buttons.length; i++){
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(copyAllButtons[i]);
  }
};
function buttonstRandom() {
  let arrColors = ['btn-danger','btn-warning','btn-success','btn-primary']
  for (var i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1])
    let randomColor = Math.floor(Math.random() * arrColors.length)
    all_buttons[i].classList.add(arrColors[randomColor])
  }
}
