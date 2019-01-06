var stage = new createjs.Stage('canvas')
var container = new createjs.Container()
stage.addChild(container)

// var count = 0
var img = new Image()
img.src = "./img/4.jpg"

var bitmap = new createjs.Bitmap(img)
// var rect = new createjs.Rectangle(0, 0, 200, 200);
// bitmap.sourceRect = rect
bitmap.scaleX = 0.5
bitmap.scaleY = 0.5
container.addChild(bitmap)

createjs.Ticker.framerate = 100
createjs.Ticker.addEventListener('tick', function(){
  stage.update()
})

// var preload = new createjs.LoadQueue(false, "img/");

// var plugin = {
//   getPreloadHandlers: function () {
//       return {
//           types: ['image'],
//           callback: function (tar) {
//               var bitmap = new createjs.Bitmap(tar.src)
//               container.addChild(bitmap)
//               stage.update()
//           }
//       }
//   }
// }

// preload.installPlugin(plugin);
// var res = preload.loadManifest([
//   '2.jpg'
// ]);