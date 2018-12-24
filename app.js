  let htmlCircleCollection = document.getElementsByClassName('circle');
  let circleArray = Array.from(htmlCircleCollection);
  let width = window.innerWidth;
  let widthMinus = window.innerWidth * 0.30;
  let height = window.innerHeight;
  let heightMinus = window.innerHeight * 0.60;
  let xDem = Array(5);
  let yDem = Array(5);
  let xStore = [];
  let yStore = [];

  function getRandomInt(min,max) {
    return (Math.random() * (min -max) + max);
    // return Math.floor(Math.random() * Math.floor(max));
  }
  window.onload = function(){
  for(let i = 0; i < circleArray.length; i++){
    
    let x = getRandomInt(0,width - widthMinus);
    let y = getRandomInt(0,height - heightMinus);
    let size = getRandomInt(9,20);

    xDem[i]=x;
    yDem[i]=y;

    let xDifference = xDem[i-1] - x;
    let yDifference = yDem[i-1] - y;

    if(xDifference < 50){
      x=x+200;
    }
    if(yDifference < 50){
      y=y+200;
    }

    circleArray[i].setAttribute("style", "border-color:" + "rgb("+getRandomInt(0,255)+", "+getRandomInt(0,255)+", "+getRandomInt(0,255)+")");
    // circleArray[i].style.left = x+'px';
    // circleArray[i].style.top = y+'px';
    // circleArray[i].style.transition ="all 1.5s ease-in-out";
    // circleArray[i].style.transform ="translate3d("+x+"px,"+y+"px,0px);";
    // console.log("x " + x + " y "+ y);
    circleArray[i].style.transform =("translate("+x+"px,"+y+"px)");
    xStore[i]=x;
    yStore[i]=y;
    // circleArray[i].style.left = x+'px';
    // circleArray[i].style.top = y+'px';
    // circleArray[i].style.transform ="translateY("+y+"px)";
    circleArray[i].style.height = size+'vw';
    circleArray[i].style.width = size+'vw';

  }

}

    let el = document.getElementById('container');
    let cir = document.getElementsByClassName('circle');
  
      el.addEventListener("mousemove", (e) => {

        let xcord = e.clientX;
        let ycord = e.clientY;

        for(let i = 0; i < circleArray.length; i++){
          circleArray[i].style.transitionDuration = "0.01s";
          circleArray[i].style.transitionTimingFunction = "linear";
          let factor = circleArray[i].attributes.factor.value;
          let newposX = xcord * factor;
          let newposY = ycord * factor; 
          let sx=(1-0.25)+(0.25*newposX/xStore[i]);
          let sy=(1-0.25)+(0.25*newposY/yStore[i]);
          console.log( yStore[i]*sy );
          circleArray[i].style.transform ="translate("+xStore[i]*sx+"px,"+yStore[i]*sy+"px)";
        }
    });

