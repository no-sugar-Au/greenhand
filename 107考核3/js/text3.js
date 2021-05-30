// 搜索框
$(".text").mouseover(function(){
    $(".text").css("opacity","1")
    $(".submit").css("opacity","1")
})
$(".submit").mouseover(function(){
    $(".submit").css("opacity","1")
    $(".text").css("opacity","1")
})
$(".text").mouseleave(function(){
    $(".text").css("opacity","0.5")
    $(".submit").css("opacity","0.5")
})
$(".submit").mouseleave(function(){
    $(".submit").css("opacity","0.5")
    $(".text").css("opacity","0.5")
})

// 轮播图
let len=$(".imgs").length;
let cutIdx=0;
let slide=()=>{
    if($(".twoimgs").is(":animated"))return;
    cutIdx++;
    $(".twoimgs").animate({
        left:-350*cutIdx
    },function(){
        if(cutIdx==len-1){
            cutIdx=0;
            $(".twoimgs").css({
                "left":0
            })
        }
        $(".indications>div").eq(cutIdx).css("background-color","#E77B07").siblings().css("background-color","rgba(71, 67, 67, 0.514)")
        $(".information>a").eq(cutIdx).css("display","block").siblings().css("display","none")
    })
}
let timer=setInterval(slide,3000)
$(".banner").on("mouseenter",function(){
    clearInterval(timer)
})
$(".banner").on("mouseleave",function(){
    timer=setInterval(slide,3000)
})
$(".indications>div").on("click",function(){
    cutIdx=$(this).index();
    $(".twoimgs").animate({
        left:-350*cutIdx
    })
    $(".indications>div").eq(cutIdx).css("background-color","#E77B07").siblings().css("background-color","rgba(71, 67, 67, 0.514)")
    $(".information>a").eq(cutIdx).css("display","block").siblings().css("display","none")
})

// 理论学习
$(".theory").mouseover(function(){
    $(".theory>a").css("opacity","0.1")
})
$(".theory").mouseleave(function(){
    $(".theory>a").css("opacity","1")
})
$(".content1").mouseover(function(){
    $(".content1>a").css("color","red")
})
$(".content1").mouseleave(function(){
    $(".content1>a").css("color","black")
})
$(".content2").mouseover(function(){
    $(".content2>a").css("color","red")
})
$(".content2").mouseleave(function(){
    $(".content2>a").css("color","black")
})
$(".content3").mouseover(function(){
    $(".content3>a").css("color","red")
})
$(".content3").mouseleave(function(){
    $(".content3>a").css("color","black")
})
$(".content4").mouseover(function(){
    $(".content4>a").css("color","red")
})
$(".content4").mouseleave(function(){
    $(".content4>a").css("color","black")
})
$(".content5").mouseover(function(){
    $(".content5>a").css("color","red")
})
$(".content5").mouseleave(function(){
    $(".content5>a").css("color","black")
})
$(".content6").mouseover(function(){
    $(".content6>a").css("color","red")
})
$(".content6").mouseleave(function(){
    $(".content6>a").css("color","black")
})
$(".content7").mouseover(function(){
    $(".content7>a").css("color","red")
})
$(".content7").mouseleave(function(){
    $(".content7>a").css("color","black")
})

// 通知公告
$(".notice").mouseover(function(){
    $(".notice>a").css("opacity","0.1")
})
$(".notice").mouseleave(function(){
    $(".notice>a").css("opacity","1")
})
$(".six-content").mouseover(function(){
    var index=$(this).index();
    $(".six-content").eq(index).children(".six-content>a").css("color","red")
})
$(".six-content").mouseleave(function(){
    var index=$(this).index();
    $(".six-content").eq(index).children(".six-content>a").css("color","black")
})

// 新闻速递
$(".third-content1").mouseover(function(){
    var index=$(this).index();
    $(".third-content1").eq(index).children(".third-content1>a").css("color","red")
})
$(".third-content1").mouseleave(function(){
    var index=$(this).index();
    $(".third-content1").eq(index).children(".third-content1>a").css("color","black")
})

// 统战忆往
$(".fourth-content1").mouseover(function(){
    var index=$(this).index();
    $(".fourth-content1").eq(index).children(".fourth-content1>a").css("color","red")
})
$(".fourth-content1").mouseleave(function(){
    var index=$(this).index();
    $(".fourth-content1").eq(index).children(".fourth-content1>a").css("color","black")
})

// 人物风采
$(".fifth-content1").mouseover(function(){
    var index=$(this).index();
    $(".fifth-content1").eq(index).children(".fifth-content1>a").css("color","red")
})
$(".fifth-content1").mouseleave(function(){
    var index=$(this).index();
    $(".fifth-content1").eq(index).children(".fifth-content1>a").css("color","black")
})

// 二维码板块
$(".tittle6-1").mouseover(function(){
    $(".tittle6-1>a").css("opacity","0.1")
})
$(".tittle6-1").mouseleave(function(){
    $(".tittle6-1>a").css("opacity","1")
})

// 回到顶部
var boxTop=$(".background").offset().top;
$(window).scroll(function(){
    if($(document).scrollTop()>=boxTop){
        $(".top").show();
    }
    else{
        $(".top").hide();
    }
})
$(".top").click(function(){
    $("body,html").stop().animate({
        scrollTop:0
    },300)
})

// 浮动窗口
var isinter;
var millisec = 15;//定时器间隔执行时间/毫秒
var xfloat = 0; //漂浮层x坐标
var yfloat = 0; //漂浮层y坐标
var yistop = false;
var xisleft = true;
function floatanimation(){
var	visiblewidth = $(window).width();//可视区域宽度
var	visibleheight = $(window).height();//可视区域高度

var	divwidth = $('.float').width();//div漂浮层宽度
var divheight = $('.float').height();//div漂浮层高度
 
var hstop = jQuery(window).scrollTop();//滚动条距离顶部的高度
var wsleft = jQuery(window).scrollLeft();//滚动条距离最左边的距离
 
var offwidth = (visiblewidth-divwidth);//div偏移的宽度
var offheight = (visibleheight-divheight);//div偏移的高度
 
	if (!yistop) {
		yfloat++;
		if (yfloat >= offheight) {
			yistop = true;
		}
	} else {
		yfloat--;
		if (yfloat <= 0) {
			yistop = false;
		}
	}
 
	if (xisleft) {
		xfloat++;
		if (xfloat >= offwidth) {
			xisleft = false;
		}
	} else {
		xfloat--;
		if (xfloat <= 0) {
			xisleft = true;
		}
	}
/* 如果使用固定定位，请把加上滚动条的距离去掉即可 */
$('.float').css({'top':yfloat+hstop,'left':xfloat+wsleft});
}

$(function () {
isinter = setInterval("floatanimation()",millisec);
$('.float').mouseover(function () {
	clearInterval(isinter);
}).mouseout(function () {
	isinter = setInterval("floatanimation()",millisec);
});

});
