
var preload;
preload = new createjs.LoadQueue(false, "img/");

var plugin = {
    getPreloadHandlers: function () {
        return {
            types: ['image'],
            callback: function (tar) {
                var id = tar.src.toLowerCase().split('/').pop().split('.')[0];
                var img = document.getElementById(id);
                img.src = tar.src
            }
        }
    }
}

preload.installPlugin(plugin);
var res = preload.loadManifest([
    'spring.jpg',
    "winter.jpg",
    "summer.jpg"
]);


