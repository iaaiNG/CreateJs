var stage = new createjs.Stage('canvas')
container = new createjs.Container()
stage.addChild(container)

container.x = 100
container.y = 100
var content = new createjs.DOMElement('container');
container.addChild(content);



stage.update()

