// 搜索框
$(function(){
    $(".text").mouseover(function(){
          $(this).css("background","white");
    });
    $(".text").mouseout(function(){
          $(this).css("background","orange");
    });

// 第二行左边栏
    $(".tittle").mouseover(function(){
         var index=$(this).index();
         $(".shiju").eq(index).show();
         $(".shiju").eq(index).siblings().hide();
    });
// 二级菜单
    $(".dropdown").hover(function(){
      $(this).children(".dropdown-content").stop().slideDown(400);
     },function(){
      $(this).children(".dropdown-content").stop().slideUp(400);
    });
// 第二行右边栏
    $(".big>span").mouseover(function(){
      $(this).parent("li").children("div").stop().slideDown(500).parent().siblings("li").children("div").stop().slideUp(500);
    })
  })
// 轮播图
  let len=$(".imgs").length;
  let cutIdx=0;
  let slide=()=>{
    if($(".fourimg").is(":animated"))return;
    cutIdx++;
    $(".fourimg").animate({
      left:-1519*cutIdx
    },function(){
      if(cutIdx==len-1){
        cutIdx=0;
        $(".fourimg").css({
          "left":0
        })
      }
      $(".indications>div").eq(cutIdx).css("background-color","orange").siblings().css("background-color","rgb(83, 83, 83)");
    })
  }
  let timer=setInterval(slide,3000)
  $(".banner").on("mouseenter",function(){
    clearInterval(timer)
  })
  $(".banner").on("mouseleave",function(){
    timer=setInterval(slide,3000)
  })
  $(".next").on("click",function(){
    slide()
  })
  $(".prev").on("click",function(){
    if($(".fourimg").is(":animated"))return;
    
    if(--cutIdx<0){
      cutIdx=len-2;  
      $(".fourimg").css({
        "left":-1519*(len-1)
      })
    }
    $(".fourimg").animate({
      left:-1519*cutIdx
    })
    $(".indications>div").eq(cutIdx).css("background-color","orange").siblings().css("background-color","rgb(83, 83, 83)");
  })
  $(".indications>div").on("click",function(){
    cutIdx=$(this).index();
    $(".fourimg").animate({
      left:-1519*cutIdx
    })
    $(".indications>div").eq(cutIdx).css("background-color","orange").siblings().css("background-color","rgb(83, 83, 83)");
  })
  let len2=$(".six").length;
  let cutIdx2=0;
  let slide2=()=>{
    if($(".move_son").is(":animated"))return;
    cutIdx2++;
    $(".move_son").animate({
      left:-170*cutIdx2
    },function(){
      if(cutIdx2==len2-4){
        cutIdx2=0;
        $(".move_son").css({
          "left":0
        })
      }
    })
  }
  let timer2=setInterval(slide2,3000)
  $(".move").on("mouseenter",function(){
    clearInterval(timer2)
  })
  $(".move").on("mouseleave",function(){
    timer2=setInterval(slide2,3000)
  })
  $(".goright").on("click",function(){
    slide2()
  })
  $(".goleft").on("click",function(){
    if($(".move_son").is(":animated"))return;
    if(--cutIdx2<0){
      cutIdx2=len2-5;  
      $(".move_son").css({
        "left":-170*(len2-4)
      })
    }
    $(".move_son").animate({
      left:-170*cutIdx2
    })
  })
  let len3=$(".center1>img").length;
  let cutIdx3=0;
  let slide3=()=>{
    if($(".center1").is(":animated"))return;
    cutIdx3++;
    $(".center1").animate({
      left:-280*cutIdx3
    },function(){
      if(cutIdx3==len3-1){
        cutIdx3=0;
        $(".center1").css({
          "left":0
        })
      }
      $(".center2>img").eq(cutIdx3).css("opacity","1").siblings().css("opacity","0")
      $(".center3>img").eq(cutIdx3).css("border-color"," rgb(255, 123, 0)").siblings().css("border-color"," rgb(204, 204, 204)")
      $(".center4").eq(cutIdx3).show().siblings().hide()
    })
  }
  let timer3=setInterval(slide3,3000)
  $(".center").on("mouseenter",function(){
    clearInterval(timer3)
  })
  $(".center").on("mouseleave",function(){
    timer3=setInterval(slide3,3000)
  })
  $(".center3>img").on("click",function(){
    cutIdx3=$(this).index();
    $(".center1").animate({
      left:-280*cutIdx3
    })
    $(".center2>img").eq(cutIdx3).css("opacity","1").siblings().css("opacity","0")
    $(".center3>img").eq(cutIdx3).css("border-color"," rgb(255, 123, 0)").siblings().css("border-color"," rgb(204, 204, 204)")
    $(".center4").eq(cutIdx3).show().siblings().hide()
  })
 $(".fourdogs>img").on("click",function(){
   let cutIdx4=$(this).index();
   $(".bigdog").eq(cutIdx4).fadeIn().siblings().hide()
   $(".close").show()
   
 })
 $(".close").on("click",function(){
   $(".close").hide()
   $(".bigdog").hide()
 })
