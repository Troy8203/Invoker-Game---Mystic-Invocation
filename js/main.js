import objectsArray from './data.js';

const quas = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/invoker_quas.png';
const wex = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/invoker_wex.png';
const exort = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/invoker_exort.png';

const result = ["", "", ""];
const resultSpell = ["", ""];

window.playGame = function playGame() {
    console.log("clicked");
    const icon = document.querySelector('.controller img');
    const text = document.querySelector('.controller h4');

    const random = Math.floor(Math.random() * objectsArray.length);
    const randomObject = objectsArray[random];
    text.textContent = randomObject.name;
    icon.src = randomObject.image;
}

window.setBuff = function setBuff(value) {
    const buff1 = document.querySelector('#buff-item1 img');
    const buff2 = document.querySelector('#buff-item2 img');
    const buff3 = document.querySelector('#buff-item3 img');

    buff1.src = buff2.src;
    buff2.src = buff3.src;
    result.shift();

    if (value==='quas') {
        result.push('Q');
        buff3.src = quas;
    }
    else if (value==='wex') {
        result.push('W');
        buff3.src = wex;
    }
    else if (value==='exort') {
        result.push('E');
        buff3.src = exort;
    }
}

window.ultiBuff = function ultiBuff() {
    const power1 = document.querySelector('#power1 img');
    const power2 = document.querySelector('#power2 img');

    const combination = ordenarVector(result);
    const power = objectsArray.find(obj => obj.combination === combination);

    if (power1.src !== power.image) {
        resultSpell.shift();
        resultSpell.push(power);

        power2.src = power1.src;
        power1.src = power.image;
    }
}

window.castSpell = function castSpell(numberSpell) {
    const text = document.querySelector('.controller h4');
    const score = document.querySelector('.score span');
    const spell = resultSpell[resultSpell.length-numberSpell]
    if (spell.name == text.textContent) {
        score.textContent = Number(score.textContent) + 25;
        playGame();
    }
    else {
        score.textContent = Number(score.textContent) - 10;
    }
}

function ordenarVector(vector) {
    const letrasOrdenadas = vector.filter(letra => letra === 'Q').concat(
      vector.filter(letra => letra === 'W'),
      vector.filter(letra => letra === 'E')
    );
    return letrasOrdenadas.join('');
}

function sucessAttemp() {
    const score = document.querySelector('.score span');
    const screen = document.querySelector('.img-hero');
    score.textContent = Number(score.textContent) + 25;
    playGame();
    score.classList.add('success');
}