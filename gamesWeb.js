function movimentaNaveTeclado(tecla){
    ctx.clearRect(x,700-160,160,160);
    if(tecla==37){
        x-=50;
        x=Math.max(0,x);
    }else if(telca==39){
            x+=50;
            x=Math.min(canvas.width-160,x);
        }else if(tecla==32){
                disparoTiro(x+80,700-160)
            }
            ctx.drawImage(nave,x,700-160);
        }

        function disparoTiro(col,lin){
            if(lin>-6){
                ctx.clearRect(col,lin,2,5);
                ctx.fillRect(col,lin-6,2,5);
            }
            setTimeout(function(){disparoTiro(col,lin-6)},1);
        }
    
    