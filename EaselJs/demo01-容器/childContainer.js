function childContainer(x,y){
  var rect = new createjs.Shape();
  rect.graphics
    .beginFill("#F00")
    .drawRect(x,y,50,50)
    .endFill()
  var text = new createjs.Text("jkm","20px Arial","#fff")
  this.addChild(rect)
  this.addChild(text)
}

childContainer.prototype = new createjs.Container()
