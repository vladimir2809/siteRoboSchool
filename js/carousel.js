var carousel = null;
var btnLeft = null;
var btnRight = null;
var trainersFlex = null;
var trainerItemArr = [];
var pos = -2000; 
var position =pos;
var positionLine = 0;
var lineBlack = null;
var lineIntervalPos = 120;
var numStep = 0;
var dir = null;
var moving = false;
let width = 360+40;
window.addEventListener('load', function () { 
    carousel = document.getElementById('carousel');
    btnLeft = document.getElementById('btnLeft');
    btnRight = document.getElementById('btnRight');
    trainersFlex = document.getElementById('trainersFlex');
    trainerItemArr = document.querySelectorAll(".trainerItem");
    lineBlack=document.getElementById('lineBlack');
    //positionLine = parseInt(lineBlack.style.left,10);
    console.log (positionLine);
   /* hangOut();*/
    carousel.style.left = position + 'px';
    btnLeft.addEventListener("click", function () {
        if (moving == false)
        {
            
            numStep--;
            if (numStep < 0) numStep = 4;
            move(0);
        }
        //hangOut(0);
    });
    btnRight.addEventListener("click", function () {
        if (moving == false) 
        {
           
            numStep++;
            if (numStep > 4) numStep = 0;
            move(1);
        }
       
    });
   
});
function move(dir2)
{
    dir = dir2;
  
    let interval=setInterval(function () {
        moving = true;
        if (dir==0) 
        {
            position+=10;
           // positionLine--;
        }
        if (dir==1)  
        {
            position-=10;
         //   positionLine++;
        }
     
        /*if (positionLine > stepLine * (numStep) && positionLine < stepLine * (numStep + 1))
        {

        }*/
        carousel.style.left = position + 'px';
       
        if (/*dir == 0 && */position % (width) == 0)
        {
            clearInterval(interval);
            moving = false
        }
    }, 10);
    if (position % ((width) * 5) == 0 /*|| 
        (position % ((width-800) * 5) == 0 && dir==0)==false*/)
    {
        position = pos;
    }
    stepLine = lineIntervalPos / 4;
    leftAimLine = stepLine * numStep;
    let speed = Math.abs(positionLine - leftAimLine)/30;
    let interval2 = setInterval(function () {
        
        if (positionLine>leftAimLine)
        {
            positionLine-=speed;
        }
        if (positionLine<leftAimLine)
        {
            positionLine+=speed;
        }
        if (Math.abs(positionLine - leftAimLine)<3)
        {
            clearInterval(interval2);
        }
        lineBlack.style.left = positionLine + 'px';
    },10);
    /*numStep = position / (width);*/
    console.log(position, numStep);

}
function hangOut() // перетусовать елеменнты
{

    for (let i = 0; i < 3;i++)
    {  
        trainerItemArr = document.querySelectorAll(".trainerItem");
        var oldChild1 = trainerItemArr[i];
        let clone = oldChild1.cloneNode(true);
        trainerItemArr[4+i].after(clone);
    }
    let itemArr = [];
    for (let i = 0; i < 5; i++)
    {  
        trainerItemArr = document.querySelectorAll(".trainerItem");
        itemArr.push( trainerItemArr[i]);
        /*
        let clone = oldChild1.cloneNode(true);
        trainerItemArr[0].before(clone);*/
    }
 /*   for (let i = 2; i > 0; i--)
    {  
        trainerItemArr = document.querySelectorAll(".trainerItem");
        itemArr.push( trainerItemArr[i]);
        
        let clone = oldChild1.cloneNode(true);
        trainerItemArr[0].before(clone);
    }*/
    trainerItemArr = document.querySelectorAll(".trainerItem");
    for (let i = 0; i < itemArr.length; i++)
    {
        let clone = itemArr[i].cloneNode(true);
        trainerItemArr[0].before(clone);
    }
   /* linkToDescrArr = document.querySelectorAll('.trainerItem a');*/
}
    