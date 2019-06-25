(function canvas(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    let height = c.height;
    let width = c.width;
    ctx.fillStyle = '#29116d'//'linear-gradient( rgba(41, 17, 109, 1)rgba(92, 71, 137, 0.9))'; //'#f00';
    ctx.beginPath();
    ctx.moveTo(0, 30);
    ctx.lineTo(width,0);
    ctx.lineTo(width, 120);
    ctx.lineTo(0, height);
    ctx.closePath();
    ctx.fill();
})();

(function canvas2(){
    var c = document.getElementById("myCanvas2");
    var ctx = c.getContext("2d");
    let height = c.height;
    let width = c.width;
    ctx.fillStyle = '#29116d';
    ctx.beginPath();
    ctx.moveTo(0, 30);
    ctx.lineTo(width,0);
    ctx.lineTo(width, height);
    ctx.lineTo(0, height);
    ctx.closePath();
    ctx.fill();
})();

let speed = 8000;
let count = 0;
(function(){
  let activ = document.getElementById('activ');
  let hidden = document.getElementById('hidden');
  $(document).ready(function(){
      setInterval((function(){
        if(count == 0){ $("#activ").hide(speed),$("#hidden").show(speed);}
        count++ ;
      }),5000);
    });
})();
(function(){
  let activ = document.getElementById('activ');
  let hidden = document.getElementById('hidden');
  //let count = 1;
  $(document).ready(function(){
    setInterval((function(){
      if(count == 1){ $("#hidden").hide(speed),$("#activ").show(speed);}
      count--
    }),5000);
    });
})();

