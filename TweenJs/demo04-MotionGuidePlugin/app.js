var stage = new createjs.Stage('canvas')
stage.x = 100
stage.y = 100
createjs.MotionGuidePlugin.install(createjs.Tween);

var ball = new createjs.Shape()
var b = ball.graphics

var ball2 = new createjs.Shape()
var b2 = ball2.graphics
b2.beginFill('#ff00ff').drawCircle(0, 0, 20)
b2.endFill()

var ball3 = new createjs.Shape()
var b3 = ball3.graphics
b3.beginFill('#ff77ff').drawCircle(0, 0, 20)
b3.endFill()

b.setStrokeStyle(2)
b.beginFill('#ff0000').drawCircle(0, 0, 20)
b.endFill()

createjs.Tween.get(ball2, { loop: false }, true)
  .to({
    alpha: 0.5,
    guide: {
      path: [0, 0, 800, 100, 800, 300]
    },
    orient: true
  }, 5000)

createjs.Tween.get(ball3, { loop: false }, true)
  .to({
    guide: {
      path: [0, 0, 0, 200, 200, 200, 200, 0, 0, 0]
    },
    orient: true
  }, 5000)


b.beginStroke('blue').mt(0, 0).curveTo(0, 200, 200, 200).curveTo(200, 0, 0, 0);
b.beginStroke('blue').mt(0, 0).curveTo(800, 100, 800, 300)

stage.addChild(ball, ball2,ball3)
createjs.Ticker.addEventListener('tick', stage)