//banner效果
$("#banner .box").banner({
    aimg:$(".box").find(".ibox img"),
    left:$(".box").find("#left"),
    right:$(".box").find("#right"),
    index:0
});
// 头部和底部
$("#header").load("http://localhost/shopping/header.html");
$(".foot").load("http://localhost/shopping/fooder.html");
// 楼层
$("#floor").find("li").click(function(){
    var index = $(this).index();
    var iNowFloor = $(".fl").eq(index);
    var t = iNowFloor.offset().top;
    
    $("html").stop().animate({
      scrollTop:t
    });
});
//滚动事件触发楼层
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
// 底部数据
class Dplay{
    constructor(){
      
      this.url="http://localhost/shopping/date/index.json";
      this.init();
    }
    init(){
      var that=this;
      $.ajax({
        url:this.url,
        type:"post",
        success:function(res){
          that.res=res;
         that.display()
        }
      })
    }
    display(){
      
      var str="";
      for(var i=0;i<this.res.length;i++){
        str+=` <li>
                <a href="">
                  <div>
                    <img src="${this.res[i].src}" alt="">
                  </div>
                  <div>
                    <h5>${this.res[i].name}</h5>
                    <p class="Fsize"><span class="rmb">￥</span>${this.res[i].price}</p>
                  </div>
                </a>
              </li>`
      }
      $(".hot-center").find("ul").html(str);
                             
    }

}
new Dplay();
// 图片放大效果
class big{
  constructor(){

    this.init()
  }
  init(){
    //  .sellwell .sellbottom  .pic
    $("#shopbox").find(".pic").hover(function(){
      $(this).find("img").stop().animate({
        width:"105%",
        left:"-5px"
      },500)
    },function(){
      $(this).find("img").stop().animate({
        width:"100%",
        left:0
      },500)
    })
  }
}
new big();
// 图片划过
class huadong{
  constructor(){
    this.init()
  }
  init(){
   var that=this;
    
   var a= $(".sell-list").find("li").width();
   var b= -$(".sell-list").find("li").width()*8;
    var t=0;
      // var t1= setInterval(function(){
        
      //   // $(".sell-list").css("left","-="+a)
      //   t++
      //  },2000)
      // console.log(t)
      //  if(t>3){
      //    clearInterval(t1)
      //    $(".sell-list").css("left",0) ;
      //    this.init()
      //  }
      var onoff=true;
      $(".tempwarp").hover(function(){
        $(".sell-list").stop().animate()
      },function(){
        that.init();
      });
      if(onoff){
          $(".sell-list").animate({
              "left":"-="+a
               },3000,function(){
            if($(".sell-list").position().left <= b){
                    $(".sell-list").css("left",0);
                }  
                  that.init();
          })
      }
        
    
  }
}
  new huadong();
  $(".shopNav-b").find(".serch-top").find("input").on("focus",function(){
    $(this).css({
      border:0
    })
  })












