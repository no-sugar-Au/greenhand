$("div.close>a").click(function(){
    $("body").css("display","none")
})

var coun=0;
$("form").click(function(){
    coun++;
    if(coun%2==0){
        $("div.fourth-1").show()
        $("form").css("left","600px")
    }
    else{
        $("div.fourth-1").hide();
        $("form").css("left","10px")
    }
})





