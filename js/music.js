var x = document.getElementById("media");
(function(){
    ("#audio_btn").click(function(){
        (this).toggleClass("rotate"); //控制音乐图标 自转或暂停

        //控制背景音乐 播放或暂停
        if((this).hasClass("rotate")){
            x.play();
        }else{
            x.pause();
        }
    })
});