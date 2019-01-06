let stage = new createjs.Stage("canvas")
var count = 0

var text = new createjs.Text("text on canvas Num 0!", "bold 18px Arial", "#fff")
text.x = 100
text.y = 100
text.rotation = 20
stage.addChild(text)

console.log(1, text.getMeasuredHeight())
console.log(2, text.getMeasuredLineHeight())
console.log(3, text.getBounds().height)

text.lineHeight = 50
text.lineWidth  = 250
// text.outline = 1
text.textBaseLine = 'middle'
var rect = new createjs.Shape()
rect.graphics
  .beginFill("red")
  .drawRect(-10,-10,250,text.getMeasuredHeight())
rect.x = text.x
rect.y = text.y
rect.rotation = 20

stage.addChildAt(rect,0)
stage.update()
// createjs.Ticker.setFPS(100)
// createjs.Ticker.addEventListener('tick', handlerTick)
// function handlerTick(){
//   count++
//   text.text = `text on canvas Num ${count}!`
//   rect.graphics
//   .clear()
//   .beginFill("red")
//   .drawRect(-10,-10,text.getBounds().width+20,text.getBounds().height+20)
//   stage.update()
// }

