//litrages calculator
var form = document.getElementById('litri');

function litraggio(e) {
    e.preventDefault();
    var lenght = parseInt(document.getElementById('insertLenght').value);
    var deep = parseInt(document.getElementById('insertDeep').value);
    var high = parseInt(document.getElementById('insertHigh').value);
    var a = 1000;
    var resultLt = document.getElementById("resultLt");
    var sumLt = "la tua vasca è di " + lenght * deep * high / a + " lt";

    resultLt.innerHTML = sumLt;
}

form.addEventListener('submit', litraggio);

// biological calculator
var form = document.getElementById('bio');

function biological(f) {
    f.preventDefault();
    var lt = parseInt(document.getElementById('insertLt').value);
    var gr = 10;
    var resultBio = document.getElementById('resultBio');
    var sumBio = "Per una filtrazione biologica hai bisogno di " + lt * gr + " gr di filtranti biologici";

    resultBio.innerHTML = sumBio;
}

form.addEventListener('submit', biological);

// pump calculator
var form = document.getElementById("pump");

function pumpSpeed(g) {
    g.preventDefault();
    var lit = parseInt(document.getElementById('insertLit').value);
    var a = 4;
    var resultPump = document.getElementById('resultPump');
    var sumPump = "Per una circolazione ottimale hai bisogno di una pompa con una portata di " + lit * a + " lt/s";

    resultPump.innerHTML = sumPump;
}

form.addEventListener('submit', pumpSpeed);

// lumen calculator
var form = document.getElementById("lumen");

function lumenLed(h) {
    h.preventDefault();
    var liter = parseInt(document.getElementById('insertLiter').value);
    var lum = parseInt(document.getElementById('insertLumen').value);
    var resultLumen = document.getElementById('resultLumen');
    var sumLum = "Hai un rapporto Lumen/litri pari a " + liter / lum;

    //if (sumLum < 40) {
    //    minimum = "hai un valore basso";
    //} else if (sumLum > 40 && < 60) {
    //    medium = "Hai un buon valore";
    //} else(sumLum > 60) {
    //    high = "hai un valore alto";
    //};

    resultLumen.innerHTML = sumLum;
}

form.addEventListener('submit', lumenLed);

// ground calculator
var form = document.getElementById('ground');

function groundHigh(i) {
    i.preventDefault();
    var lenght = parseInt(document.getElementById('insertLenghtTank').value);
    var deep = parseInt(document.getElementById('insertDeepTank').value);
    var ground = parseInt(document.getElementById('insertGround').value);
    var b = 1000;
    var resultGround = document.getElementById('resultGround');
    var sum = "Hai bisogno di " + lenght * deep * ground / b + " kg di fondo per acquari";

    resultGround.innerHTML = sum;
}

form.addEventListener('submit', groundHigh);

// water change calculator
var form = document.getElementById("change");

function waterChange(l) {
    l.preventDefault();
    var change = parseInt(document.getElementById("insertChange").value);
    var kh = parseInt(document.getElementById("insertKh").value);
    var gh = parseInt(document.getElementById("insertGh").value);
    var khDesire = parseInt(document.getElementById("insertKhDesire").value);
    var resultChange = document.getElementById('resultChange');
    var sumChange = ((change / khDesire) * kh);
    var sumGh = ((gh / change) * sumChange);
    var sum = "Per raggiungere i valori desiderati hai bisogno di " + sumChange + " e avrai un gH pari a " + sumGh;

    resultChange.innerHTML = sum;
}

form.addEventListener('submit', waterChange);