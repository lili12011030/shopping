$("#banner .box").banner({
    aimg:$(".box").find(".ibox img"),
    left:$(".box").find("#left"),
    right:$(".box").find("#right"),
    index:0
});
$("#header").load("http://localhost/shopping/header.html");
$(".foot").load("http://localhost/shopping/fooder.html");

$("#floor").find("li").click(function(){
    var index = $(this).index();
    var iNowFloor = $(".fl").eq(index);
    var t = iNowFloor.offset().top;
    
    $("html").stop().animate({
      scrollTop:t
    });
});
onscroll=function(){
  var scrollT = document.documentElement.scrollTop;
  if(scrollT>550){
    $("#floor").show();
    $("#backtop").show();
    
  }else{
    $("#floor").hide();
    $("#backtop").hide();
  }

}



