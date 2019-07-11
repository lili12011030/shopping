function Magnifier(){
	this.sbox=document.querySelector(".box");
    this.bbox=document.querySelector(".bbox");
	this.bimg=document.querySelector(".bbox img");
	this.span=document.querySelector(".box span");
	this.addEvent()
}
Magnifier.prototype.init=function(){
	var w= this.bimg.offsetWidth/this.bbox.offsetWidth;
	var h= this.bimg.offsetHeight/this.bbox.offsetHeight;
	this.span.style.width= this.sbox.offsetWidth/w+"px";
	this.span.style.height=this.sbox.offsetHeight/h+"px";
	
}
Magnifier.prototype.addEvent=function(){
	var that=this;
	this.sbox.addEventListener("mouseover",function(){
		that.over()
		that.init()
	})
	this.sbox.addEventListener("mousemove",function(eve){
		var e=eve||window.event;
		that.move(e)
	})
	this.sbox.addEventListener("mouseout",function(){
		that.out()
	})
	
}
Magnifier.prototype.over=function(){
	this.bbox.style.display="block";
	this.span.style.display="block";
}
Magnifier.prototype.out=function(){
	this.bbox.style.display="none";
	this.span.style.display="none";
}
Magnifier.prototype.move=function(e){
	var l = Math.round(e.offsetX - this.span.offsetWidth/2);
    var t = Math.round(e.offsetY - this.span.offsetHeight/2);

	// var l=e.clientX-this.sbox.offsetLeft-this.span.offsetWidth/2;
	// var t=e.clientY-this.sbox.offsetTop-this.span.offsetHeight/2;
	
	if( l<0)l=0;
	if(t<0)t=0;
	if(l>this.sbox.offsetWidth-this.span.offsetWidth){
		l=this.sbox.offsetWidth-this.span.offsetWidth
	}
	if(t>this.sbox.offsetHeight-this.span.offsetHeight){
		t=this.sbox.offsetHeight-this.span.offsetHeight
	}
	this.span.style.left=l+"px";
	this.span.style.top=t+"px";
	var x=l/(this.sbox.offsetWidth-this.span.offsetWidth);
	var y=t/(this.sbox.offsetHeight-this.span.offsetHeight);
	this.bimg.style.left=-x*(this.bimg.offsetWidth-this.bbox.offsetWidth)+"px";
	this.bimg.style.top=-y*(this.bimg.offsetHeight-this.bbox.offsetHeight)+"px";
	
}












