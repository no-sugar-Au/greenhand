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

// 左边栏
$(".content1").mouseover(function(){
    var index=$(this).index();
    $(".content1").eq(index).css("background-color","#8C0F0A").children(".content1>a").css("color","white").css("font-weight","600")
})
$(".content1").mouseleave(function(){
    var index=$(this).index();
    $(".content1").eq(index).css("background-color","white").children(".content1>a").css("color","black").css("font-weight","500")
})
$(".content2-1").mouseover(function(){
    var index=$(this).index();
    $(".content2-1").eq(index).css("background-color","#8C0F0A").children(".content2-1>a").css("color","white").css("font-weight","600")
})
$(".content2-1").mouseleave(function(){
    var index=$(this).index();
    $(".content2-1").eq(index).css("background-color","white").children(".content2-1>a").css("color","black").css("font-weight","500")
})