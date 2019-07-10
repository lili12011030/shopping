function ajaxGet(url,callback,date){
    date=date?date:{};
    var str="";
    for(var i in date){
        str=str+i+"="+date[i]+"&";
    }
    var d=new Date;
    url= url+"?"+str+"__lzy"+d.getTime();
    var ajax = new XMLHttpRequest();
    ajax.open("get",url,true);
    ajax.onreadystatechange=function(){
        if(ajax.readyState==4 && ajax.status==200){
            // console.log(ajax.responseText);
            callback(ajax.responseText);
        }
    }
    ajax.send();
}
function ajaxPost(url,callback,date){
    date= date?date:{};
    var str="";
    for(var i in date){
        str=str+i+"="+date[i]+"&";
    }
    
    str=str.slice(0,str.length-1);
    
    var xhr=new XMLHttpRequest();
    xhr.open("post",url,true);
    xhr.onreadystatechange=function(){
        if(xhr.readyState ==4 && xhr.status == 200){
            callback(xhr.responseText);
            
        }
    }
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    xhr.send(str);
}














