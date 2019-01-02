var stage = new createjs.Stage('canvas')

stage.x = 50
stage.y = 50
var circle = new createjs.Shape();
circle.graphics.beginFill("#ff0009").drawCircle(50,50,50);

stage.addChild(circle)

createjs.Tween.get(circle,{loop:false},true)
  .to({x:400,y:300},500,createjs.Ease.quadOut)
  .to({x:0},1000,createjs.Ease.backIN)
  .wait(500)
  .to({x:400,y:300},500,createjs.Ease.quadIn)

  createjs.Ticker.framerate = 100
  createjs.Ticker.addEventListener('tick', stage)