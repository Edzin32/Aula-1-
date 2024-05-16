
window.onload = function() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var nave = new Image();
    nave.src = "img/nave.png";
    var x = 400 - nave.width / 2;
    nave.onload = function() {
        ctx.drawImage(nave, x, 700 - 200,50,50);
    }

    document.addEventListener("keydown", function(evento) {
        movimentaNaveTeclado(evento.keyCode);
    });

    function movimentaNaveTeclado(tecla) {
        ctx.clearRect(0, 700 - 200, canvas.width, canvas.height); 
        if (tecla == 37) {
            x -= 5;
            x = Math.max(0, x);
        } else if (tecla == 39) {
            x += 5;
            x = Math.min(canvas.width - 160, x);
        } else if (tecla == 32) {
            disparo(x + 60, 700 - 200);
        }

        ctx.drawImage(nave, x, 700 - 200,50,50);
    }

    function disparo(col, lin) {
        if (lin > -6) {
            ctx.clearRect(col, lin - 3, 2, 4);
            ctx.fillRect(col, lin - 3, 2, 4);
        }
        setTimeout(function() {
            disparo(col, lin - 10)
        }, 1);
    }
};
