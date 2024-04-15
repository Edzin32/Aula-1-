function desenhandoimagens(){
canvas=document.getElementById("canv");
cntxt=canvas.getContext("2d");
img=new Image();
img.src="img/nave.png";
img.onload=function(){
    cntxt.drawImage(img,0,0);
    cntxt.drawImage(img,600,0,100,100);
}
};