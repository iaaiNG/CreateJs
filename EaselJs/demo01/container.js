let stage = new createjs.Stage("canvas")
let child = new createjs.Container()
stage.addChild(child)

// let shape = new createjs.Shape()
// shape.graphics.beginFill("#f00")
// shape.graphics.drawRect(200, 200, 50, 50)
// child.addChild(shape)

child.x = 20
child.y = 20

var c = new childContainer(20,30);
child.addChild(c)
console.log(c)

stage.update()