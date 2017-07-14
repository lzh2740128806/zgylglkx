$(document).ready(function() {
    
	function gettime(){
		var date = new Date(),
			year = date.getFullYear(),
			month = date.getMonth()+1,
			day = date.getDate(),
			week = date.getDay(),
			hour = date.getHours(),
			minute = date.getMinutes();
		var weekArray = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
		
		$("#DateTime").text(year + "." + month + "." + day + " " + weekArray[week]);
	};
	gettime();
	setInterval(function(){gettime()},1000);
	
	
	function slideImg(){
		var index = 0;
		var len = $(".First_two .flash .view li").length;
		$(".First_two .flash .view ul").width(len * 555 + "px");
		for(var i=0; i<len; i++){
			$(".First_two .flash .view .number").append("<span></span>");	
		};
		$(".First_two .flash .view .number span:first").addClass("active");
		function NextPage(){
			if(index > len-1){index = 0};
			$(".First_two .flash .view .number span").eq(index).addClass("active").siblings().removeClass("active");
			$(".First_two .flash .view ul").stop(true,false).animate({marginLeft:-index * 555 + "px"},600)	
		};
		function PrevPage(){
			if(index < 0){index = len-1};
			$(".First_two .flash .view .number span").eq(index).addClass("active").siblings().removeClass("active");
			$(".First_two .flash .view ul").stop(true,false).animate({marginLeft:-index * 555 + "px"},600)
		};
		$(".First_two .flash .view .number span").each(function(a) {
			$(this).click(function(){
				index = a;
				NextPage()	
			})
		});
		var timer=setInterval(function(){
			index++;
			NextPage()	
		},3000);
		$(".First_two .flash .view").mouseenter(function(){
			clearInterval(timer)	
		});
		$(".First_two .flash .view").mouseleave(function(){
			timer=setInterval(function(){
				index++;
				NextPage()	
			},3000)
		});
	};
	slideImg();
	
	
	function slideImg1(){
		var index = 0;
		var len = $(".First_thi_flash .view li").length;
		$(".First_thi_flash .view ul").width(len * 228 + "px");
		for(var i=0; i<len; i++){
			$(".First_thi_flash .view .number").append("<span></span>");	
		};
		$(".First_thi_flash .view .number span:first").addClass("active");
		function NextPage(){
			if(index > len-1){index = 0};
			$(".First_thi_flash .view .number span").eq(index).addClass("active").siblings().removeClass("active");
			$(".First_thi_flash .view ul").stop(true,false).animate({marginLeft:-index * 228 + "px"},600)	
		};
		function PrevPage(){
			if(index < 0){index = len-1};
			$(".First_thi_flash .view .number span").eq(index).addClass("active").siblings().removeClass("active");
			$(".First_thi_flash .view ul").stop(true,false).animate({marginLeft:-index * 228 + "px"},600)
		};
		$(".First_thi_flash .view .number span").each(function(a) {
			$(this).click(function(){
				index = a;
				NextPage()	
			})
		});
		var timer=setInterval(function(){
			index++;
			NextPage()	
		},3000);
		$(".First_thi_flash .view").mouseenter(function(){
			clearInterval(timer)	
		});
		$(".First_thi_flash .view").mouseleave(function(){
			timer=setInterval(function(){
				index++;
				NextPage()	
			},3000)
		});
	};
	slideImg1();
	
	$(".menu li").each(function (nn) {
		$(this).click(function () {
			$(".tabContent").addClass("hid");
			$(".tabContent:eq(" + nn + ")").removeClass("hid");
			$(".menu li").removeClass("hover");
			$(this).addClass("hover");
		});
	});
	
	function learned(){
		function scrl(){
		$(".main_foot ul li:first").stop(true,false).animate({
			marginLeft:"-183px"
		},500,function(){
				$(".main_foot ul  li:first").appendTo(".main_foot ul").css("margin","0 0px");
			})	
		};
		function scrlTwo(){
			$(".main_foot ul li:last").prependTo(".main_foot ul ").css("marginLeft","-183px").stop(true,false).animate({marginLeft:"0px"},500)
		};
		$(".main_foot .prev").click(function(){
			scrl()	
		});
		$(".main_foot.next").click(function(){
			scrlTwo()	
		});
		var timer = setInterval(function(){scrl()},3000);
		$(".main_foot ").mouseenter(function(){
			clearInterval(timer)	
		});
		$(".main_foot ").mouseleave(function(){
			timer = setInterval(function(){scrl()},3000)	
		});
	};
	learned();
});