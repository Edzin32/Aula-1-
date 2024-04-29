var canvas = document.getElementById('Canvas');
var ctx = canvas.getContext('2d');

var img = new Image();
var x = 530;
var y = 250;
img.src = 'img/nave.png';
    function update() {
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, x, y, 80, 80); 
        x=x-1;
        
        if (x > canvas.width-600) {
            requestAnimationFrame(update);
        }
    }

    update();
