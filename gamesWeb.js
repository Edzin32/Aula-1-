
window.onload = function() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var nave = new Image();
    var inimigo=new Image();
    inimigo.src="img/aeroinimigo.png";
    nave.src = "img/nave.png";
    
    nave.onload = function() {
        var xNave=canvas.width/2-nave.width/2;
         var yNave=canvas.height-nave.height;
        ctx.drawImage(nave,xNave,yNave);
        
    }
    inimigo.onload=function(){
      var xInimigo=canvas.width/2-nave.width/2
      var yInimigo=0  
      ctx.drawImage(inimigo,xInimigo,yInimigo)
    }

    document.addEventListener("keydown", function(evento) {
        movimentaNaveTeclado(evento.key);
    });
    

    function movimentaNaveTeclado(tecla) {
        ctx.clearRect(0,0, canvas.width, canvas.height); 
        if (tecla == "ArrowLeft") {
            xNave -= 10;
            xNave = Math.max(0, xNave);
        } else if (tecla == "ArrowRight") {
            xNave += 10;
            xNave = Math.min(canvas.width - 160, xNave);
        }else if(tecla=="ArrowUp"){
            yNave-=10;
            yNave=Math.max(0,yNave)
        } else if(tecla=="ArrowDown"){
            yNave+=50;
            yNave=Math.min(canvas.height-nave.height,yNave)
        }else if (tecla == "Enter") {
            disparo(x + 50, 700 - 200);
        }

        ctx.drawImage(nave, x, 700 - 200,110,90);
        ctx.drawImage(inimigo)
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

    function colide(){
    var largura=nave.width;
    var altura=nave.heifht;
    return(x+largura)>xInimigo

    }
};
