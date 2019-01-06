let stage = new createjs.Stage("canvas")
let gameView = new createjs.Container()
stage.addChild(gameView)

var rect = new createjs.Shape()
rect.graphics
  .beginFill("#ff00ff")
  .beginStroke('#156')
  .rect(10,10,100,50,10)
  .moveTo(50,200)
  .drawCircle(200,200,50)
  .moveTo(50,200)
  .lineTo(200,200)
  .lineTo(200,100)
  .closePath()

// var ellipse = new createjs.Shape()
// ellipse.graphics
// .beginFill("#00ff00")
// .drawEllipse(100,100,100,200)
gameView.addChild(rect)
console.log(rect)
// gameView.x = 100
// gameView.y = 100

// var c = new circle()
// c.setCircleType(circle.TYPE_GREEN)
// gameView.addChild(c)

stage.update()