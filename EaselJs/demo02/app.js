let stage = new createjs.Stage("canvas")
let shape = new createjs.Shape()

shape.graphics.beginFill("#f00")
shape.graphics.drawRect(200, 200, 50, 50)
stage.addChild(shape)

stage.update()