$("#foot").load("http://localhost/shopping/fooder.html");
class Car{
    constructor(){
        this.url="http://localhost/shopping/date/list.json";
        this.init();
        this.addevent();
    }
    init(){
        var that=this;
        ajaxPost(this.url,function(res){
            
            that.res=JSON.parse(res);
            that.getDate()
        })
    }
    getDate(){
        this.goodshop=localStorage.getItem("goodshop")?JSON.parse(localStorage.getItem("goodshop")):[];
        this.display()
    }
    display(){
        var str="";
        for(var i=0;i<this.res.length;i++){
            for(var j=0;j<this.goodshop.length;j++){
                if(this.res[i].id==this.goodshop[j].id){
                    str+=`<tr index=${this.res[i].id}>
                            <td>
                                <img src="${this.res[i].src}" alt="">
                            </td>
                            <td>${this.res[i].name}</td>
                            <td class="pr">${this.res[i].price}</td>
                            <td><input type="number" value="${this.goodshop[j].num}" min=1 class="changeNum">
                            </td>
                            <td class="jine">${this.res[i].price*this.goodshop[j].num}</td>
                            <td class="del">删除</td>
                        </tr>`;
                }
            }
        }
        $("table").find("tbody").html(str);
        this.alljia()
    }
    addevent(){
        var that=this;
        
        $("tbody").on("click",".del",function(){
            // 获取id
            that.id=$(this).parent("tr").attr("index");

            
            // 删除该商品
            $(this).parent("tr").remove();
            // 删除数据里面的商品
            that.setDate(function(i){
                that.goodshop.splice(i,1);
                that.alljia();
            })
        })
        $("tbody").on("input",".changeNum",function(){
            var the=this;
            // 获取id
            that.id=$(this).parent("td").parent("tr").attr("index");
            // 获取单价
            var a= parseInt($(this).parent("td").prev("td").text());  
           
            that.setDate(function(i){
                // 设置数量
                that.goodshop[i].num=$(the).val();
                // 计算小计
                var b=that.goodshop[i].num*a;
                $(the).parent("td").next(".jine").text(b);
                // 重新计算总价 
                that.alljia()
            })
        })
    }
    setDate(callback){
        
        for(var i=0;i<this.goodshop.length;i++){
            
           
            if(this.goodshop[i].id==this.id){
                
              
                callback(i); 
               
            }
        }
        localStorage.setItem("goodshop",JSON.stringify(this.goodshop));
         
    }
    // 计算总金额
    alljia(){
        var a=0;
        // 总价
        for(var i=0;i<$(".jine").length;i++){
            var jine=$(".jine");
           a+= parseInt(jine[i].innerText);
        }
        $(".alljin").text(a)
    }
}
new Car()















