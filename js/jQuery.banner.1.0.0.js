;(function($){
    "use strict";
    $.fn.banner=function(options){
        var _this=this;
        class Banner{
            constructor(options){
                this.img=options.aimg;
                this.left=options.left;
                this.right=options.right;
                this.islist=options.islist==false?false:true;
                this.autoPlay=options.autoPlay==false?false:true;
                this.delayTime=options.delayTime||2000;
                this.moveTime=options.moveTime||200;
                this.index=options.index||0;
                this.iPrev=this.img.length-1;
                this.w=this.img.eq(0).width();
                this.l=600-this.img.length*40/2;
                
                this.img.css({
                    left:this.w
                }).eq(this.index).css({
                    left:0
                })
                this.init()
                this.btnEvent()
                this.play()
            }
            
            init(){
                if(!this.islist)return;
                this.list=$("<div class='list'></div>");
                for(var i=0;i<this.img.length;i++){
                    this.list.append($(`<span>${i+1}</span>`))
                }
                _this.append(this.list);
                this.list.css({
                    height:30,
                    display:"flex",
                    position:"absolute",
                    bottom:20,
                    left:this.l
                    
                    
                }).children("span").css({
                    width:30,
                    height:30,
                    borderRadius:"50%",
                    lineHeight:"30px",
                    textAlign:"center",
                    background: "rgba(200,200,200,0.6)",
                    margin:5
                }).eq(this.index).css({
                    background:"#fff"
                })
                this.listEvent()
            }
            listEvent(){
                var that=this;
                this.list.children("span").click(function(){
                    
                    if($(this).index()>that.index){
                        that.listMove($(this).index(),1)
                        
                    }
                    if($(this).index()<that.index){
                        that.listMove($(this).index(),-1)
                    }
                    that.list.children("span").css({
                        background:"rgba(200,200,200,0.6)"
                    }).eq($(this).index()).css({
                        background:"#fff"
                    })
                    that.index=$(this).index();
                }) 
            }
            listMove(iNow,type){
                this.img.eq(this.index).css({
                    left:0
                }).stop().animate({
                    left:-this.w*type
                },this.moveTime).end().eq(iNow).css({
                    left:this.w*type
                }).stop().animate({
                    left:0
                },this.moveTime)
            }
            btnEvent(){
                if(this.left==undefined||this.left.length<1)return;
                var that=this;
                this.left.on("click",function(){
                    that.changindex(1) ;console.log(1)
                })
                this.right.on("click",function(){
                    that.changindex(-1);
                })
                
            }
            changindex(type){
                if(type==1){
                    if(this.index==0){
                        this.index=this.img.length-1;
                        this.iPrev=0;
                    }else{
                        this.index--;
                        this.iPrev=this.index+1
                    }
                }else{
                    if(this.index==this.img.length-1){
                        this.index=0;
                        this.iPrev=this.img.length-1;
                    }else{
                        this.index++;
                        this.iPrev=this.index-1
                    }
                }
                
                this.btnsMove(type)
            }
            btnsMove(type){
                
                this.img.eq(this.iPrev).css({
                    left:0
                }).stop().animate({
                    left:this.w*type
                },this.moveTime).end().eq(this.index).css({
                    left:-this.w*type
                }).stop().animate({
                   left:0 
                },this.moveTime)

                if(!this.islist)return;
                this.list.children("span").css({
                    background:"rgba(200,200,200,0.6)"
                }).eq(this.index).css({
                    background:"#fff"
                })
            }
            play(){
                if(!this.autoPlay)return;
                var that=this;
                
                this.t=setInterval(function(){
                    that.changindex(-1)
                },this.delayTime);
                _this.hover(function(){
                    clearInterval(that.t)
                },function(){
                    that.t=setInterval(function(){
                        that.changindex(-1)
                    },that.delayTime)
                })
            }
        }
        new Banner(options)
    }

})(jQuery);


