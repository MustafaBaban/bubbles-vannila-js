  let htmlCircleCollection = document.getElementsByClassName('circle');
  let circleArray = Array.from(htmlCircleCollection);
  let width = window.innerWidth;
  let widthMinus = window.innerWidth * 0.30;
  let height = window.innerHeight;
  let heightMinus = window.innerHeight * 0.60;
  let xDem = Array(5);
  let yDem = Array(5);

  function getRandomInt(min,max) {
    return (Math.random() * (min -max) + max);
    // return Math.floor(Math.random() * Math.floor(max));
  }
  
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
    circleArray[i].style.left = x+'px';
    circleArray[i].style.top = y+'px';
    circleArray[i].style.height = size+'vw';
    circleArray[i].style.width = size+'vw';

  }

    let el = document.getElementById('container');
    let cir = document.getElementsByClassName('circle');
  
      el.addEventListener("mousemove", (e) => {

        let x = e.clientX;
        let y = e.clientY;

        for(let circ of circleArray){
          let factor = circ.attributes.factor.value;
          let newposX = x * factor;
          let newposY = y * factor; 
          circ.style.transform ="translate3d("+newposX+"px,"+newposY+"px,0px)";
        }
    });

