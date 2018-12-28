// src = "1.mp3"
// var myStatus = document.getElementById("status")
// createjs.Sound.alternateExtensions=["mp3"]
// createjs.Sound.addEventListener("fileload", playSound)
// createjs.Sound.registerSound({src:"1.mp3"})

// myStatus.innerHTML = "waiting for load to complete"

// function playSound(event){
//   soundIntance = createjs.Sound.play(event.src)
//   myStatus.innerHTML = "playing source:" + event.src
// }

createjs.Sound.on("fileload", handleLoadComplete);
createjs.Sound.alternateExtensions = ["mp3"];
createjs.Sound.registerSound({src:"1.mp3", id:"sound"});
function handleLoadComplete(event) {
	createjs.Sound.play("sound");
}

// createjs.Sound.alternateExtensions = ["mp3"];
// createjs.Sound.on("fileload", loadHandler, );
// createjs.Sound.registerSound("1.mp3", "sound");
// function loadHandler(event) {
//     // 这会引发针对每个已注册的声音。
//     var instance = createjs.Sound.play("sound");  // 发挥使用ID。也可以使用完整的源路径或
// }