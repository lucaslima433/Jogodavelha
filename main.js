const player1 = "X";
const player2 = "O";

var playtime = player1;
var gameover = false;

atualizarmostrador();
inicializarespacos();

function atualizarmostrador(){
    if (gameover) {return;}

    if (playtime == player1) {
        var player = document.querySelectorAll("div#Mostrador img") [0];
        player.setAttribute("src", "img/x.png");

    } else {
        var player = document.querySelectorAll("div#Mostrador img") [0];
        player.setAttribute("src", "img/o.png");
    }

}

function inicializarespacos(){
    var espacos = document.getElementsByClassName("espaco");
    for (var i=0; 0 < espacos.length ; i++){
        espacos[i].addEventListener("click", function(){
            if (gameover) {return;}

            if (this.getElementsByTagName("img").length == 0){
                if (playtime == player1) {
                    this.innerHTML = "<img src='img/x.png'>";
                    this.setAttribute("jogada", player1)
                    playtime = player2
            
                } else {
                    this.innerHTML = "<img src='img/o.png'>";
                    this.setAttribute("jogada", player2)
                    playtime = player1
                }
                atualizarmostrador()
                verificarvencedor()

            }
        })
    }
}

async function verificarvencedor(){
    var a1 = document.getElementById("a1").getAttribute("jogada");
    var a2 = document.getElementById("a2").getAttribute("jogada");
    var a3 = document.getElementById("a3").getAttribute("jogada");
    var b1 = document.getElementById("b1").getAttribute("jogada");
    var b2 = document.getElementById("b2").getAttribute("jogada");
    var b3 = document.getElementById("b3").getAttribute("jogada");
    var c1 = document.getElementById("c1").getAttribute("jogada");
    var c2 = document.getElementById("c2").getAttribute("jogada");
    var c3 = document.getElementById("c3").getAttribute("jogada");

    var vencedor = '';

    if ((a1 == b1 && a1==c1 &&  a1 != "")||(a1 == a2 && a1==a3 &&  a1 != "")||(a1 == b2 && a1==c3 &&  a1 != "")){
        vencedor = a1;
    }else if((b2 == b1 && b2==b3 &&  b2 != "")||(b2 == a2 && b2==c2 &&  b2 != "")||(b2 == a3 && b2==c1 &&  b2 != "")){
        vencedor = b2;
    }else if((c3 == c2 && c3==c1 &&  c3 != "")||(c3 == a3 && c3==b3 &&  c3 != "")){
        vencedor = c3;
    }

    if (vencedor != ""){
        gameover = true;
        await sleep(50);
        alert("o ganhador foi: "+ vencedor);
    }else if((a1 != "" &&  b1 != "" &&  c1 != "") && (a2 != "" &&  b2 != "" &&  c2 != "") && (a3 != "" &&  b3 != "" &&  c3 != "")){
        await sleep(50);
        alert('deu velha')
    }
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}