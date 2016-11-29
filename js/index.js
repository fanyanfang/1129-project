;(function($){
    var send=$(".send");
    var input= $(".text input");
    input.on("input propertychange",function(){
        var val=$.trim($(this).val());//trim去掉前导空格
        if(val.length>0){
            send.addClass("active");
        }else{
            send.removeClass("active");
        }
    })
    var tpl='<div class="dialog"><span class="portrait">头像</span><p class="word">{{info}}</p><em></em></div>';
    send.on("click",function(){

        if(!$(this).hasClass("active")) return;
        var texts=input.val()
        tpls=tpl.replace('{{info}}',texts);
        $(tpls).appendTo(".content");
        common.refresh();
        input.val("");
        $(this).removeClass("active");
        common.scrollToElement($(".content .dialog:last")[0]);
    })

})(Zepto)