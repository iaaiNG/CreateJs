var stage = new createjs.Stage('canvas')
// stage.x = 100
// stage.y = 100

tweens = []

for (var i = 0; i < 25; i++) {
  var circle = new createjs.Shape()
  circle.alpha = 1 - i * 0.02;
  var c = circle.graphics
  c.setStrokeStyle(15)
  c.beginStroke("#113355")
  c.drawCircle(0, 0, (i + 1) * 4 )
  circle.compositeOperation = 'lighter'

  var tween = createjs.Tween.get(circle)
    .to({ x: 300, y: 200 }, (0.5 + i * 0.06) * 1000, createjs.Ease.bounceOut)
    .call(tweenComplete)
    
  tweens.push({ tween: tween, ref: circle })
  stage.addChild(circle)
}

var activeCount = 25
stage.addEventListener('stagemousemove', handlerMouseup)

createjs.Ticker.framerate = 100
createjs.Ticker.addEventListener('tick', stage)

function handlerMouseup() {
  for (var i = 0; i < 25; i++) {
    var ref = tweens[i].ref
    createjs.Tween.get(ref, { override: false })
      .to({ x: stage.mouseX, y: stage.mouseY }, (0.5 + i * 0.06) * 100, createjs.Ease.bounceOut)
      // .call(tweenComplete)
      
  }
}

function tweenComplete(){
  activeCount--
}