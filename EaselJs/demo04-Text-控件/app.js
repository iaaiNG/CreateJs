let stage = new createjs.Stage("canvas")
var count = 0

var text = new createjs.Text("text on canvas Num 0!", "bold 18px Arial", "#fff")
text.x = 100
text.y = 100
text.rotation = 20
stage.addChild(text)

console.log(text.getBounds())
var rect = new createjs.Shape()
rect.graphics
  .beginFill("red")
  .drawRect(-10,-10,text.getBounds().width+20,text.getBounds().height+18)
rect.x = text.x
rect.y = text.y
rect.rotation = 20

stage.addChildAt(rect,0)

createjs.Ticker.setFPS(100)
createjs.Ticker.addEventListener('tick', handlerTick)
function handlerTick(){
  count++
  
  text.text = `text on canvas Num ${count}!`
  rect.graphics
  .clear()
  .beginFill("red")
  .drawRect(-10,-10,text.getBounds().width+20,text.getBounds().height+18)
  stage.update()
}

