// 注册、登陆选项卡
class Tab{
    constructor(){
        this.li = $(".logbar-top").children("li");
        this.init()
    }
    init(){
        var that = this;
        
        this.li.on("click",function(){
            $(this).addClass("active").siblings().removeClass("active");
            
            
            that.li.parent().siblings(".bar").eq($(this).index()).show().siblings(".bar").hide();
        })
    }
}
new Tab()
//判断合法
//登陆
var btn1onoff=0;
$(".btn1").on("click",function(){
    var reg1 = /^1[3456789]\d{9}$/;
    var reg2 = /^[a-zA-Z0-9]\w{5,17}$/;
    $(".input-bar1").find($(".erro-msg")).html("");
    if(reg1.test($("#user1").val())==false){
        $(".input-bar1").find($(".erro-msg")).html("用户名不正确");
     return false;
       }
    if(reg2.test($("#paworld1").val())==false){
        $(".input-bar1").find($(".erro-msg")).html("请输入6到17位的密码");
     return false;
    }
btn1onoff=1;   
})
//注册
var btn2onoff=0;
$(".btn2").on("click",function(){
    var reg1 = /^1[3456789]\d{9}$/;
    var reg2 = /^[a-zA-Z0-9]\w{5,17}$/;
    
    if($("#user2").val()==""){
        $(".input-bar2").find($(".erro-msg")).html("用户名不能为空");
        return false;
    }
    if(reg1.test($("#user2").val())==false){
        $(".input-bar2").find($(".erro-msg")).html("用户名不正确");
        return false;
    }
    if(reg2.test($("#paworld2").val())==false){
        $(".input-bar2").find($(".erro-msg")).html("请输入6到17位的密码");
     return false;
    }
    if(!($("#paworld3").val()==$("#paworld2").val())){
        $(".input-bar2").find($(".erro-msg")).html("两次密码不同");
        return false;
    }

    $(".input-bar2").find($(".erro-msg")).html("");
    btn2onoff=1;           
})
// 登陆
class Load{
    constructor(){
        this.user=$("#user1").val();
        this.pswd=$("#paworld1").val();
        console.log(1)
        this.init();
    }
    init(){
        console.log(1)
        var check = localStorage.getItem("check")?JSON.parse(localStorage.getItem("check")) : [];;
        for(var i=0;i<check.length;i++){
            if(check[i].phone == this.user && check[i].password == this.pswd){
                $(".input-bar1").find($(".erro-msg")).html("登陆成功");
                return;
            }
           
        } 
        for(var i=0;i<check.length;i++){
            if(check[i].phone == this.user&&check[i].password != this.pswd){
                $(".input-bar1").find($(".erro-msg")).html("密码错误");
                return;
            }
        }
        console.log(1)
        $(".input-bar1").find($(".erro-msg")).html("用户名错误");
    }
}
$(".btn1").on("click",function(){
    if(btn1onoff){
        console.log(1)
        new Load();
    }   
})
//注册
class Register{
    constructor(){
        this.user=$("#user2").val();
        this.pswd=$("#paworld2").val();
        this.pswd2=$("#paworld3").val();
        this.init()
    }
    init(){
        var check = localStorage.getItem("check");
    if(check){
        var onoff = true;
        check = JSON.parse(check);
        for(var i = 0;i<check.length;i++){
            if(check[i].phone == this.user){
                onoff = false;
                $(".input-bar2").find($(".erro-msg")).html("用户名重复");
                this.user = "";
                this.pswd = "";
                this.pswd2 = "";
                return;
            }
        }
        if(onoff){
            check.push({
                phone:this.user,
                password:this.pswd
            })
        }
    }else{
        check = [{
            phone:this.user,
            password:this.pswd
        }]
        
    }
    localStorage.setItem("check",JSON.stringify(check));
    $(".input-bar2").find($(".erro-msg")).html("注册成功");
    }

}
$(".btn2").on("click",function(){
    if(btn2onoff){
        new Register();
    }   
})
        

    

      
       


















