// Mova a declaração do canvas dentro da função onload para garantir que o canvas seja acessado após o carregamento do DOM
window.onload = function() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var nave = new Image();
    nave.src = "img/nave.png";
    var x = 400 - nave.width / 2;
    nave.onload = function() {
        ctx.drawImage(nave, x, 700 - 200);
    }

    // Corrija a capitalização de "keydown" e remova "KeyCode" que não é necessário
    document.addEventListener("keydown", function(evento) {
        movimentaNaveTeclado(evento.keyCode);
    });

    function movimentaNaveTeclado(tecla) {
        ctx.clearRect(0, 700 - 200, canvas.width, canvas.height); // Limpe a tela inteira antes de desenhar novamente

        // Verifique se o valor de tecla é definido (adicionado para evitar erros)
        if (tecla == 37) {
            x -= 100;
            x = Math.max(0, x);
        } else if (tecla == 39) {
            x += 100;
            x = Math.min(canvas.width - 160, x);
        } else if (tecla == 32) {
            disparo(x + 80, 700 - 160);
        }

        // Desenhe a nave após mover ou atirar
        ctx.drawImage(nave, x, 700 - 160);
    }

    function disparo(col, lin) {
        if (lin > -6) {
            ctx.clearRect(col, lin - 6, 2, 5);
            ctx.fillRect(col, lin - 6, 2, 5);
        }
        setTimeout(function() {
            disparo(col, lin - 6)
        }, 1);
    }
};
