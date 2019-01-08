// class Circle extends createjs.Shape {
//   constructor() {
//     super()
//     this.setCircleType(1)
//   }
//   drawCircle(color) {
//     this.graphics.clear().beginFill(color).drawCircle(0, 0, 25).endFill()
//   }
//   setCircleType(index) {
//     switch (index) {
//       case 1: {
//         this.drawCircle("#ccc")
//         break
//       }
//       case 2: {
//         this.drawCircle("#f60")
//         break
//       }
//       case 3: {
//         this.drawCircle("#00f")
//         break
//       }
//     }
//   }
// }

class CircleContainer extends createjs.Container {
  constructor() {
    super()
    this.text = new createjs.Text()
    this.text.font = '20px Airal'
    this.text.x = -5.5
    this.text.y = -6
    this.circle = new createjs.Shape()
    this.addChild(this.circle, this.text)
    this.text.text = 0
    this.setCircleType(1)
  }
  setCircleType(index) {
    switch (index) {
      case 1: {
        this.drawCircle("#ccc")
        this.circleStatus = 1
        this.text.text = 0
        this.text.x = -5.5
        break
      }
      case 2: {
        this.drawCircle("#f60")
        this.circleStatus = 2
        this.text.text = 100
        this.text.x = -18
        break
      }
      case 3: {
        this.drawCircle("#00f")
        this.circleStatus = 3
        this.text.text = 100
        this.text.x = -18
        break
      }
    }
  }
  drawCircle(color) {
    this.circle.graphics.clear().beginFill(color).drawCircle(0, 0, 25).endFill()
  }
}

var canvas = document.getElementById('canvas')
var stageWidth = canvas.width = 535
var stageHeight = canvas.height = 510
var currentCat
var circleArr = []
var step = []
var Ending = false

var stage = new createjs.Stage(canvas)
var container = new createjs.Container()
container.x = 35
container.y = 35
stage.addChild(container)

container.addChild(cc)

for (var i = 0; i < 9; i++) {
  circleArr[i] = []
  for (var j = 0; j < 9; j++) {
    var cc = new CircleContainer()
    cc.x = i % 2 === 0 ? j * 55 : j * 55 + 22.5
    cc.y = i * 55
    cc.indexX = j
    cc.indexY = i
    container.addChild(cc)
    circleArr[i][j] = cc
    if (i === 4 && j === 4) {
      cc.setCircleType(3)
      currentCat = cc
    } else if (Math.random() < 0.2) {
      cc.setCircleType(2)
    }
    cc.addEventListener('click', circleClick)
  }
}


stage.update()
createjs.Ticker.framerate = createjs.Ticker.RAF
createjs.Ticker.addEventListener('tick', function () {
  stage.update()
})

function circleClick(e) {
  if (!Ending) {
    if (e.currentTarget.circleStatus === 1) {
      e.currentTarget.setCircleType(2)
    }
    setWeight()
    catMove()
  }
}

setWeight()

function setWeight() {
  var hadSet = []
  var oneMoreTime = true
  var count = 0
  function fun() {
    for (var y = 0; y < 9; y++) {
      for (var x = 0; x < 9; x++) {
        if (circleArr[y][x].text.text > 99) {
          continue
        } else if (x === 0 || y === 0 || x === 8 || y === 8) {
          continue
        } else {
          var pos = getWeight(x, y)
          circleArr[y][x].text.text = pos.value + 1

          if (hadSet.indexOf(pos.value - 0 + 1) == -1) {
            hadSet.push(pos.value - 0 + 1)
            oneMoreTime = true
          }
        }
      }
    }
  }
  while (oneMoreTime) {
    count++
    oneMoreTime = false
    setTimeout(fun(), 5000)
  }
  console.log(count)
}

function getWeight(x, y) {
  var row = y % 2 === 0
  var pos = {
    left: { pos: [y, x - 1] },
    right: { pos: [y, x + 1] },
    leftUp: !row ? { pos: [y - 1, x] } : { pos: [y - 1, x - 1] },
    rightUp: !row ? { pos: [y - 1, x + 1] } : { pos: [y - 1, x] },
    leftDown: !row ? { pos: [y + 1, x] } : { pos: [y + 1, x - 1] },
    rightDown: !row ? { pos: [y + 1, x + 1] } : { pos: [y + 1, x] }
  }
  pos.left.weight = circleArr[pos.left.pos[0]][pos.left.pos[1]].text.text
  pos.right.weight = circleArr[pos.right.pos[0]][pos.right.pos[1]].text.text
  pos.leftUp.weight = circleArr[pos.leftUp.pos[0]][pos.leftUp.pos[1]].text.text
  pos.rightUp.weight = circleArr[pos.rightUp.pos[0]][pos.rightUp.pos[1]].text.text
  pos.leftDown.weight = circleArr[pos.leftDown.pos[0]][pos.leftDown.pos[1]].text.text
  pos.rightDown.weight = circleArr[pos.rightDown.pos[0]][pos.rightDown.pos[1]].text.text
  var weights = []
  for (var key in pos) {
    weights.push(pos[key].weight)
  }
  var value = Math.min(...weights)
  return { pos, value }
}

function catMove() {
  var x = currentCat.indexX
  var y = currentCat.indexY
  var pos = getWeight(x, y)

  var canMove = []

  for (var key in pos.pos) {
    if (pos.pos[key].weight < 81 && pos.pos[key].weight == pos.value) {
      canMove.push(pos.pos[key].pos)
    }
  }

  if (canMove.length == 0) {
    alert('游戏结束')
    Ending = true
    return
  }
  var item = canMove[Math.floor(Math.random() * canMove.length)];
  if ([item[1]] == 0 || item[0] == 0 || [item[1]] == 8 || item[0] == 8) {
    alert('游戏结束')
    Ending = true
  } else {

    currentCat = circleArr[item[0]][item[1]]
    circleArr[item[0]][item[1]].setCircleType(3)
    circleArr[y][x].setCircleType(1)
    setWeight()
    setWeight()
    setWeight()
  }

}

