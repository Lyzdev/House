window.onload = function () {
	// 获取对象
		var lefbtn=document.querySelector('#banner .arrow-left');
		var rigbtn=document.querySelector('#banner .arrow-right');
		var banimg=document.querySelector('#banner .bannerimg' );
		var btn=document.querySelectorAll('#banner .icon a');
		// 绑定事件
		lefbtn.onclick=function(){
			thePre();
		}
		rigbtn.onclick=function(){
			theNext();
		}
		// 定义全局变量
		var index=0;
		function thePre(){
			var newLeft=0;
			index--;
			if(index<0){
				index=3;
			}
			if(banimg.style.left==='0px'){
				newLeft=-4050;
			}else{
				newLeft=parseInt(banimg.style.left)+1350;
			}
			banimg.style.left=newLeft+'px';
		}
        function theNext(){
			var newLeft=0;
			index++;
			if(index>3){
				index=0;
			}
			if(banimg.style.left==='-6750px'){
				newLeft=-2700;
				banimg.style=`left:${newLeft}px;
			               transition-duration: 0; `
			}else{
				newLeft=parseInt(banimg.style.left)-1350;
			}
			banimg.style=`left:${newLeft}px;
			               transition-duration: 0; `
		}
}
