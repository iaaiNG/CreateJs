var stage = new createjs.Stage('canvas')

stage.x = 50
stage.y = 50
var circle = new createjs.Shape();
circle.graphics.beginFill("#ff0009").drawCircle(50,50,50);

stage.addChild(circle)

// createjs.Tween.get(circle,{loop:false},true)
//   .to({x:400,y:300},500,createjs.Ease.quadOut)
//   .to({x:0},1000,createjs.Ease.backIN)
//   .wait(500)
//   .to({x:400,y:300},500,createjs.Ease.quadIn)

createjs.Tween.get(circle)
  .wait(500)
  .to({alpha:0, visible:false}, 1000)
// createjs.Tween.get(circle, {override:true}).to({x:100});

createjs.Tween.get(circle, {override:false}).to({x:100}).addEventListener("change", handleChange);
function handleChange(event) {
    console.log("The tween changed.")
}
createjs.Ticker.framerate = 100
createjs.Ticker.addEventListener('tick', stage)