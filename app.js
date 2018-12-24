  let htmlCircleCollection = document.getElementsByClassName('circle');
  let circleArray = Array.from(htmlCircleCollection);
  let width = window.innerWidth;
  let widthMinus = window.innerWidth * 0.30;
  let height = window.innerHeight;
  let heightMinus = window.innerHeight * 0.60;
  let xDem = Array(5);
  let yDem = Array(5);

    function getRandomInt(min,max) {
      return Math.floor(Math.random() * (max - min) ) + min;
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
        // console.log(x);
        if(xDifference < 50){
          x=x+200;
        }
        if(yDifference < 50){
          y=y+200;
        }
        // console.log(x);

        circleArray[i].setAttribute("style", "border-color:" + "rgb("+getRandomInt(0,255)+", "+getRandomInt(0,255)+", "+getRandomInt(0,255)+")");
        circleArray[i].style.left = x+'px';
        circleArray[i].style.top = y+'px';
        circleArray[i].style.height = size+'vw';
        circleArray[i].style.width = size+'vw';

      }
    

    function move(defaultPos,mousePos){
      if(defaultPos!=0 && mousePos!=0 ){
      return (mousePos/defaultPos);
      }else{return 1;}
    }
   

    let el = document.getElementById('container');
    let cir = document.getElementsByClassName('circle');
    let tmpx0 = parseInt(cir[0].style.left, 10);
    let tmpy0 = parseInt(cir[0].style.top, 10);
    let tmpx1 = parseInt(cir[1].style.left, 10);
    let tmpy1 = parseInt(cir[1].style.top, 10);
    let tmpx2 = parseInt(cir[2].style.left, 10);
    let tmpy2 = parseInt(cir[2].style.top, 10);
    let tmpx3 = parseInt(cir[3].style.left, 10);
    let tmpy3 = parseInt(cir[3].style.top, 10);
    let tmpx4 = parseInt(cir[4].style.left, 10);
    let tmpy4 = parseInt(cir[4].style.top, 10);
    let tmpx5 = parseInt(cir[5].style.left, 10);
    let tmpy5 = parseInt(cir[5].style.top, 10);
    
      el.addEventListener("mousemove", (e) => {
        let sx0=(1-0.08)+(0.08*e.x/tmpx0);
        let sy0=(1-0.08)+(0.08*e.y/tmpy0);
        let sx1=(1-0.08)+(0.08*e.x/tmpx1);
        let sy1=(1-0.08)+(0.08*e.y/tmpy1);
        let sx2=(1-0.08)+(0.08*e.x/tmpx2);
        let sy2=(1-0.08)+(0.08*e.y/tmpy2);
        let sx3=(1-0.08)+(0.08*e.x/tmpx3);
        let sy3=(1-0.08)+(0.08*e.y/tmpy3);
        let sx4=(1-0.08)+(0.08*e.x/tmpx4);
        let sy4=(1-0.08)+(0.08*e.y/tmpy4);
        let sx5=(1-0.08)+(0.08*e.x/tmpx5);
        let sy5=(1-0.08)+(0.08*e.y/tmpy5);
      cir[0].style.left = tmpx0 * sx1 + "px";
      cir[0].style.top  = tmpy0 * sy0 + "px";
      cir[1].style.left = tmpx1 * sx1 + "px";
      cir[1].style.top  = tmpy1 * sy1 + "px";
      cir[2].style.left = tmpx2 * sx2 + "px";
      cir[2].style.top  = tmpy2 * sy3 + "px";
      cir[3].style.left = tmpx3 * sx3 + "px";
      cir[3].style.top  = tmpy3 * sy3 + "px";
      cir[4].style.left = tmpx4 * sx4 + "px";
      cir[4].style.top  = tmpy4 * sy4 + "px";
      cir[5].style.left = tmpx5 * sx5 + "px";
      cir[5].style.top  = tmpy5 * sy5 + "px";
    });

