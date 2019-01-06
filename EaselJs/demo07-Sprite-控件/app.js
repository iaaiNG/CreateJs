var stage = new createjs.Stage('canvas')

var ss = new createjs.SpriteSheet({
    images:["./img/spritesheet_grant.png"],
    frames:{
        height: 292.5,
        width: 165.75,
        count:64
    },
    animations:{
        run:[0,25,"jump",1.5],
        jump:[26,63,"run"]
    }
})

var s = new createjs.Sprite(ss, "run")

stage.addChild(s)
createjs.Ticker.timingMode = createjs.Ticker.RAF;
createjs.Ticker.addEventListener('tick', stage)
