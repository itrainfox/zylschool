$(function(){
	$(".sub_list").hover(function(){
		$(this).find(".sub_menu").show();
		$(this).css("background", "#cc3333");
	}, function(){
		$(this).css("background", "#df4754");
		$(this).find(".sub_menu").hide();
	})
	$(".teach_item").hover(function(){
		$(this).addClass("teach_item_hover").siblings().removeClass('teach_item_hover');
		// $(this).find(".teach_into").show();
	}, function(){
		$(this).removeClass('teach_item_hover');
		// $(this).find(".teach_into").hide();
	})
	$(".st_item").hover(function(){
		$(this).addClass("st_item_hover").siblings().removeClass('st_item_hover');
	}, function(){
		$(this).removeClass('st_item_hover');
	})
	$(".course_items").hover(function(){
		$(this).addClass("course_items_hover").siblings().removeClass('course_items_hover');
	}, function(){
		$(this).removeClass('course_items_hover');
	})

	$(".menu_list li").hover(function(){
		$(this).addClass("menu_list_hover").siblings().removeClass("menu_list_hover");
	}, function(){
		$(this).removeClass('menu_list_hover');
	})

	$(".teach_head ul li").on("click", function(){
		$(this).addClass("teach_select").siblings().removeClass("teach_select");
	})

	$(".menu_list li").hover(function(){
		$(this).find(".sub_nav").show();
	}, function(){
		$(this).find(".sub_nav").hide();
	})

	$(".banner_page li").on("click", function(){
		$(this).addClass("banner_current").siblings().removeClass("banner_current");
		$(".banner_img").eq($(this).index()).fadeIn(500).siblings().hide();
	})
	$(".yx_page li").on("click", function(){
		$(this).addClass("yx_current").siblings().removeClass("yx_current");
		$(".yx_list").eq($(this).index()).fadeIn(500).siblings().hide();
	})
	$(".student_pages li").on("click", function(){
		$(this).addClass("student_current").siblings().removeClass("student_current");
		$(".student_one").eq($(this).index()).fadeIn(500).siblings().hide();
	})
	$(".st_boxs").hover(function(){
		$(".left_btns, .right_btns").fadeIn(100);
	}, function(){
		$(".left_btns, .right_btns").fadeOut(100);
	})

	var w = $(".st_item").width();
	var stLen = $(".st_item_box .st_item").length;
	var now = 0;
	$(".st_item_box").width(w*stLen+stLen*14);
	$(".right_btns").on("click", function(){
		if (now >= stLen - 4) {
			return;
		} else {
			now++;
			console.log(now);
			$(".st_main").animate({
				"scrollLeft" : w*now + now*14
			}, 300)	
		}
	})
	$(".left_btns").on("click", function(){
		if (now <= 0) {
			return;
		} else {
			now--;
			$(".st_main").animate({
				"scrollLeft" : w*now + now*14
			}, 300)		
		}
	})

	// teams
	$(".teams_tit a").on("click", function(){
		$(this).addClass("teams_select").siblings().removeClass("teams_select");
		$(".teams_boxs_con").eq($(this).index()).addClass("teams_boxs_con_show").siblings().removeClass("teams_boxs_con_show");
	})

})
















