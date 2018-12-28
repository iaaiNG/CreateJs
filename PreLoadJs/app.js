var preload
preload = new createjs.LoadQueue(false, "assets/");

var plugin={
  getPreloadHandlers:function(){
    return {
      callback:function(src){
        var id = src.toLowerCase().split("/").pop().split(".")[0]
        var img = document.getElementById(id)
      }
    }
  }
}

// var canvas = document.getElementById("myCanvas");
// var stage = new createjs.Stage(canvas);

// var manifest;
// var preload;
// var progressText = new createjs.Text("", "20px Arial", "#dd4814");
// progressText.x = 125 - progressText.getMeasuredWidth() / 2;
// progressText.y = 20;
// stage.addChild(progressText);
// stage.update();

// //定义相关JSON格式文件列表
// function setupManifest() {
//     manifest = [{
//         src:  "./img/2.jpg", 
//         id: "easeljs"
//     }, {
//         src: "./img/3.jpg", 
//         id: "logo"
//     }, {
//         src:  "./img/4.jpg", 
//         id: "audiofile"
//     }
//     ];
// }

// //开始预加载
// function startPreload() {
//     preload = new createjs.LoadQueue(true);
//     //注意加载音频文件需要调用如下代码行
//     preload.installPlugin(createjs.Sound);         
//     preload.on("fileload", handleFileLoad);
//     preload.on("progress", handleFileProgress);
//     preload.on("complete", loadComplete);
//     preload.on("error", loadError);
//     preload.loadManifest(manifest);
 
// }

// //处理单个文件加载
// function handleFileLoad(event) {
//     console.log("文件类型: " + event.item.type);
//     if(event.item.id == "logo"){
//         console.log("logo图片已成功加载");
//     }
// }
 
// //处理加载错误：大家可以修改成错误的文件地址，可在控制台看到此方法调用
// function loadError(evt) {
//     console.log("加载出错！",evt.text);
// }
 
// //已加载完毕进度 
// function handleFileProgress(event) {
//     progressText.text = "已加载 " + (preload.progress*100|0) + " %";
//     stage.update();
// }

// //全度资源加载完毕
// function loadComplete(event) {
//     console.log("已加载完毕全部资源");
// }

// setupManifest();
// startPreload();