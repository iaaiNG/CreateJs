var stage = new createjs.Stage('canvas')
container = new createjs.Container()
stage.addChild(container)

container.x = 100
container.y = 100
var content = new createjs.DOMElement('container');
content.scaleX = 2
content.scaleY = 2
container.addChild(content);

stage.update()

