function circle(){
  createjs.Shape.call(this)
  this.setCircleType = function (type) {
    this._circleType = type;
    switch (type){
      case circle.TYPE_RED:
        this.setColor('#ff0000')
        break
      case circle.TYPE_GREEN:
        this.setColor('#00ff00')
        break
    }
  }

  this.setColor = function(color){
    this.graphics
      .beginFill(color)
      .drawCircle(0,0,50)
      this.graphics.endFill()
  }
  this.setCircleType(circle.TYPE_RED)
}

circle.prototype = new createjs.Shape()
circle.TYPE_RED = 1
circle.TYPE_GREEN = 2