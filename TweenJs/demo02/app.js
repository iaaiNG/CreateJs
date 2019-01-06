createjs.CSSPlugin.install(createjs.Tween);

// var stage = new createjs.Stage('canvas')
// var circle = new createjs.Shape()
// stage.addChild(circle)
// circle.graphics.beginStroke('#f0f').drawCircle(200,200,100)




var box = document.createElement("div")
box.style.width = '200px'
box.style.height = "200px"
box.style.background = "#00FF00"

document.body.appendChild(box)
box.style.top = "10em";
createjs.Tween.get(box, {loop:true}).to({height:100, width:100}, 1000);

// stage.update()