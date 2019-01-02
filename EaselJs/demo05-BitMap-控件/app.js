var stage = new createjs.Stage('canvas')
var container = new createjs.Container()
stage.addChild(container)

var count = 0

var bitmap = new createjs.Bitmap('./img/2.jpg')
container.addChild(bitmap)

// createjs.Ticker.framerate = 100
// createjs.Ticker.addEventListener('tick', function(){
//   stage.update()
// })

var preload = new createjs.LoadQueue(false, "img/");

var plugin = {
  getPreloadHandlers: function () {
      return {
          types: ['image'],
          callback: function (tar) {
              var bitmap = new createjs.Bitmap(tar.src)
              container.addChild(bitmap)
              stage.update()
          }
      }
  }
}

preload.installPlugin(plugin);
var res = preload.loadManifest([
  '2.jpg'
]);