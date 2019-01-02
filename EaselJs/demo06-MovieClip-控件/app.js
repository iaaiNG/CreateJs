var stage = new createjs.Stage('canvas')

createjs.Ticker.framerate = 100
createjs.Ticker.addEventListener('tick', function(){
    stage.update()
})
// createjs.Ticker.timingMode = createjs.Ticker.RAF;

var mc = new createjs.MovieClip(null, 0, true, {start:50})
// mc.framerate = 100;

stage.addChild(mc)

var state1 = new createjs.Shape(new createjs.Graphics().beginFill('#123').drawCircle(0,100,30))
var state2 = new createjs.Shape(new createjs.Graphics().beginFill('#555').drawCircle(0,100,30))

mc.timeline.addTween(
    createjs.Tween
    .get(state1)
    .to({x:30})
    .to({x:370},100)
    .to({x:30},100)
)
mc.timeline.addTween(
    createjs.Tween
    .get(state2)
    .to({x:370})
    .to({x:30},100)
    .to({x:370},100)
)

mc.gotoAndPlay("start")