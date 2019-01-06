var stage = new createjs.Stage('canvas')

createjs.Ticker.timingMode = createjs.Ticker.RAF;
createjs.Ticker.addEventListener('tick', function () {
    stage.update()
})

var mc = new createjs.MovieClip({ labels: { start: 50 }, loop: true })
stage.addChild(mc)

var state1 = new createjs.Shape(new createjs.Graphics().beginFill('#123').drawCircle(0, 100, 30))
var state2 = new createjs.Shape(new createjs.Graphics().beginFill('#555').drawCircle(0, 100, 30))

mc.timeline.addTween(
    createjs.Tween.get(state1).to({ x: 30 }).to({ x: 370 }, 100).to({ x: 30 }, 100)
)
mc.timeline.addTween(
    createjs.Tween.get(state2).to({ x: 370 }).to({ x: 30 }, 100).to({ x: 370 }, 100)
)
mc.gotoAndPlay("start")