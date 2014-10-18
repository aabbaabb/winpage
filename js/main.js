$(document).ready(function(){
	$("a:last img").remove();
	var number=new Array();
	number=[0,1,2,3,4];
	function openNewWindow(url, pagetitle) {
	    if (!window.open(url, pagetitle, ['toolbar=0,status=0,resizable=1,width=626,height=436,left=', (screen.width - 626) / 2, ',top=', (screen.height - 436) / 2].join(''))) {
	        window.location.href = url;
	    }
	}
	
	function shareRenren() {
	    var shareurl = "http://www.connect.renren.com/share/sharer";
	    var title = "复旦学生网十三周年定向赛";
	    var url = "http://stu.fudan.edu.cn/weixin/content/result.html?oid="+getQueryString('oid');
	    var description="在校庆日探索未曾留意的复旦园！历经千辛万苦，我终于完成了复旦学生网的十三周年站庆定向赛！总计用时"+number[0]+":"+number[1]+number[2]+":"+number[3]+number[4]+"！想要挑战我的成绩赢走拍立得吗么？快来试试吧！";
	    shareurl += "?url="+ encodeURIComponent(url) + "&description="+encodeURIComponent(description);+"&title="+encodeURIComponent(title);
	    openNewWindow(shareurl, "分享到人人");
	}
	
	function shareWeibo() {	
	    var shareurl = "http://service.weibo.com/share/share.php";
	    var title = "#复旦学生网十三周年定向赛#";
	    var url = "http://stu.fudan.edu.cn/weixin/content/result.html?oid="+getQueryString('oid');
	    title += "在校庆日探索未曾留意的复旦园！历经千辛万苦，我终于完成了复旦学生网的十三周年站庆定向赛！总计用时"+number[0]+":"+number[1]+number[2]+":"+number[3]+number[4]+"！想要挑战我的成绩赢走拍立得吗么？快来试试吧！";
	    shareurl += "?url=" + encodeURIComponent(url) + "&title=" + encodeURIComponent(title) ;
	    openNewWindow(shareurl, "分享到新浪微博");
	}

	function getQueryString(name) {
    	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    	var r = window.location.search.substr(1).match(reg);
    	if (r != null) return unescape(r[2]); return null;
    }
	var oid=getQueryString("oid");
	$.ajax({
		url:"http://stu.fudan.edu.cn/weixin/orientation/result/"+oid,
		async:false,
		dataType:"JSON",
		success:function(data){
			number=data;
		}
	})
	$(".share").click(function(){
		
		if($(this).attr("id")=="weibo")
			shareWeibo()
		else
			shareRenren();
	
	})

	function nummove(movetime,len){
		$(".num i").css("backgroundPositionY","2100px");
		for(var i=0;i<len;i++){
			
			
			//var num=String(n).charAt(i);
			//var y = -parseInt(num)*30;
			var obj = $(".num i").eq(i);
			obj.animate({
				backgroundPositionY :100-100*(number[i])+'px' 
				}, movetime,'swing',function(){
	
				}
			);
			movetime=movetime-300;
		}

		

	}
	nummove(3000,5);
})