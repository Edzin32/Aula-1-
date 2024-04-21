
var canvas = document.getElementById('Canvas');
var ctx = canvas.getContext('2d');

var img = new Image();
img.onload = function() {
    ctx.drawImage(img, 0, 0, 50, 50); // Desenha a imagem na posição (0, 0) com largura e altura de 50 pixels
    moveImage();
};
img.src = 'img/nave.png'; // Certifique-se de que o caminho para a imagem esteja correto

function moveImage() {
    var x = 0;
    var y = 0;
   

    function update() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, x, y, 50, 50); // Desenha a imagem na posição (x, y) com largura e altura de 50 pixels
        x += 1;
        y+=1;
        if (x < canvas.width - 50) {
            requestAnimationFrame(update);
        }
    }

    update();
}
