let stage = new createjs.Stage("canvas")
let gameView = new createjs.Container()
stage.addChild(gameView)

var rect = new createjs.Shape()
rect.graphics
  .beginFill("#ff00ff")
  .drawRect(0,0,100,50)

var ellipse = new createjs.Shape()
ellipse.graphics
.beginFill("#00ff00")
.drawEllipse(100,100,100,200)
gameView.addChild(rect)
stage.addChild(ellipse)

stage.update()

rect.addEventListener('click', function(e){
 gameView.x += 10;

  stage.update()
})
rect.addEventListener('dblclick', function(e){
  console.log(123)
})

// createjs.Ticker.setFPS(5)
// createjs.Ticker.addEventListener('tick', handlerTick)
var speedX = 10



function handlerTick(){
  if(rect.x<=0){
    rect.x += 10;
  }
  if(rect.x<=0){
    rect.x += 10;
  }
  stage.update()
}