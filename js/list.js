$("#header").load("http://localhost/shopping/header.html");
$(".foot").load("http://localhost/shopping/fooder.html");
class GoodsList{
    constructor(){
        this.ocont=document.querySelector(".main");
        this.url="http://localhost/shopping/date/list.json";
        this.init()
    }
    init(){
        var that=this;
        ajaxPost(this.url,function(res){
            
            that.res= JSON.parse(res);
            
            that.display()
            that.addevent()
        })
    }
    display(){
        var str="";
        for(var i=0;i<this.res.length;i++){
            str +=`<a href="http://localhost/shopping/details.html" class="new-left clear" index="${this.res[i].id}">
                    <img src="${this.res[i].src}" alt="">
                    <div class="color">
                        <p class="color1">${this.res[i].name}</p>
                        <p class="color1">
                        <span class="rmb">￥</span><span class="red">${this.res[i].price}</span>
                        
                            </p>
                    </div>
                </a> `;
        }
        this.ocont.innerHTML=str;
    }
    addevent(){
        var that=this;
        $(this.ocont).on("click",".new-left",function(){
            
            that.id=$(this).attr("index");
            
        localStorage.setItem("goods",that.id)
        })
    }
}
new GoodsList()






