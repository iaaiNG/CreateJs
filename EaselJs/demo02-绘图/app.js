let stage = new createjs.Stage("canvas")
let gameView = new createjs.Container()
stage.addChild(gameView)

// var rect = new createjs.Shape()
// rect.graphics
//   .beginFill("#ff00ff")
//   .drawRect(0,0,100,50)

// var ellipse = new createjs.Shape()
// ellipse.graphics
// .beginFill("#00ff00")
// .drawEllipse(100,100,100,200)
// gameView.addChild(rect, ellipse)
gameView.x = 100
gameView.y = 100

var c = new circle()
c.setCircleType(circle.TYPE_GREEN)
gameView.addChild(c)

stage.update()