$("#header").load("http://localhost/shopping/header.html");
$("#foot").load("http://localhost/shopping/fooder.html");

class Deta{
    constructor(){
        this.url="http://localhost/shopping/date/list.json";
        this.init()
    }
    init(){
        this.goods=localStorage.getItem("goods");
        
        var that=this;
        ajaxPost(this.url,function(res){
           that.res= JSON.parse(res);
           that.display();
           
        })
        
    }
    display(){
        var str="";
        for(var i=0;i<this.res.length;i++){
            if(this.res[i].id==this.goods){
                
                str+=`<div class="picture">
                
                    <div class="box">
                        <img src="${this.res[i].src}" alt="" class="minpig">
                        <span></span>
                        <p></p>
                    </div>
                    <div class="bbox">
                         <img src="${this.res[i].src}" >
                    </div>
                
            </div>
            <div class="goods">
                <h3>${this.res[i].name}</h3>
                <h4>商品编号：<span>${this.res[i].id}</span></h4>
                <div class="goods-detail">
                    <div class="f1">
                        <p class="top">
                            <span class="rmb">￥</span><span class="money">${this.res[i].price}</span><span class="sale">优惠价</span><span class="price-name">原价</span><span class="price">${this.res[i].oldprice}</span>
                        </p>
                        <div class="middle">
                            <span class="lj">￥<span>3.6</span></span>
                            <p class="alllj">
                                商品礼金￥<span>1.68 </span>+ 活动礼金<span> 1.68</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="taste">
                    <span class="prefix">规格</span>
                    <ul class="sku-control">
                        <li class="active">默认样式</li>
                    </ul>
                </div>
                <div class="distribution">
                    <span class="prefix">配送</span>
                    <span class="price">免运费</span>
                    <p><span class="special">现货</span>，预计<span id="deliDays">1～3</span>个工作日到货</p>
                </div>
                <div class="number">
                    <span class="prefix">数量</span>
                    <button type="button" class="circle minus">
                        <span class="inner"></span>
                    </button>
                    <input type="text" value="1" class="number-item">
                    <button class="circle add">+</button>
                </div>
                <div class="buy">
                    <button type="button" class="buynow">立即购买</button>
                    <button type="button" class="addcart">加入购物车</button>
                </div>
            </div>`;
            }
        }
        
        str= $(".debox").html()+str;
        $(".debox").html(str);
        this.play();
        this.addevent();
        new Magnifier()
        
    }
    play(){
        $(".minus").on("click",function(){
            if($(".number-item").val()>1){
                var a= Number($(".number-item").val())
                a--
                $(".number-item").attr('value',a)
            }
        })
        $(".add").on("click",function(){
            if($(".number-item").val()>=1){
        
                var a= Number($(".number-item").val())
                a++
                $(".number-item").attr('value',a)
                
            }
        })
    }
    addevent(){
        var that=this;
       
        $(".addcart").on("click",function(){
            that.callback()
        })
    }
    callback(){
        this.goodshop=localStorage.getItem("goodshop");
            this.onoff=true;
            if(this.goodshop){
               this.goodshop=JSON.parse(this.goodshop);
              
                for(var i=0;i<this.goodshop.length;i++){
                    if(this.goodshop[i].id==this.goods){

                        this.goodshop[i].num =parseInt(this.goodshop[i].num)+($(".number-item").val())*1;

                        this.onoff=false;
                    }
                }
                if(this.onoff){
                    this.goodshop.push({
                        id:this.goods,
                        num:$(".number-item").val()
                    })
                }
            }else{
                this.goodshop=[{
                    id:this.goods,
                    num:$(".number-item").val()
                }];
            }
            localStorage.setItem("goodshop",JSON.stringify(this.goodshop))
    }
}
new Deta();






















































