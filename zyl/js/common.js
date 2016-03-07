$(function(){
	$(".sub_list").hover(function(){
		$(this).find(".sub_menu").show();
		$(this).css("background", "#cc3333");
	}, function(){
		$(this).css("background", "#df4754");
		$(this).find(".sub_menu").hide();
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



	var htmls = '';
	for (var i = 0; i < 30; i++) {
		htmls += '<li data-id="math">'
				+'<div class="teach_item">'
				+'<img src="images/teacher_pics.jpg" alt="" title="">'
				+'<div class="teach_item_opt">'
				+'<div class="opts">'
				+'<span class="teach_name">鸭绒</span>'
				+'<span>程序员鼓励师</span>'
				+'<i class="pull_right teach_into icon"></i>'
				+'</div>'
				+'<div class="teach_txt">'
				+'<p>七年前端七年前端七年前端七年前端七年前端七年前端七年前端七年七年前端七年前端七年前端七年前端七年前端七年前端七年前端七年</p>'
				+'</div>'
				+'</div>'
				+'</div>'	
				+'</li>'
	};

	$(".teachers_boxs_show").append(htmls);
	$(".teach_item").hover(function(){
		$(this).addClass("teach_item_hover").siblings().removeClass('teach_item_hover');
	}, function(){
		$(this).removeClass('teach_item_hover');
	})


	var lens = $(".teachers_boxs_show li").length;
	var wids = $(".teachers_boxs_show li").width() + 11;
	var stimer = null;
	var snow = 0;

	sChange();

	function sChange(){
		stimer = setInterval(function(){
			if (snow >= lens - 4) {
				snow = 0;
			} else {
				snow++;
				$(".teach_slider").animate({
					"scrollLeft" : wids * snow
				}, 300)
			}
		}, 3000)
	}

	$(".teachers_boxs_show li").hover(function(){
		clearInterval(stimer);
	}, function(){
		sChange();
	})


	$(".teach_head ul li").hover(function(){
		clearInterval(stimer);
		lens = 8;
		snow = 0;
		$(".teach_slider").scrollLeft(0);
		sChange();
		$(".teachers_boxs_show").html('');
		if ($(this).attr('data-id') != 'all') {
			htmls = '';
			for (var i = 0; i < 8; i++) {
				htmls += '<li data-id="math">'
						+'<div class="teach_item">'
						+'<img src="images/course_pics_1.jpg" alt="" title="">'
						+'<div class="teach_item_opt">'
						+'<div class="opts">'
						+'<span class="teach_name">鸭绒</span>'
						+'<span>程序员鼓励师</span>'
						+'<i class="pull_right teach_into icon"></i>'
						+'</div>'
						+'<div class="teach_txt">'
						+'<p>七年前端七年前端七年前端七年前端七年前端七年前端七年前端七年七年前端七年前端七年前端七年前端七年前端七年前端七年前端七年</p>'
						+'</div>'
						+'</div>'
						+'</div>'	
						+'</li>'
			};

			$(".teachers_boxs_show").append(htmls);
			$(".teach_item").hover(function(){
				$(this).addClass("teach_item_hover").siblings().removeClass('teach_item_hover');
			}, function(){
				$(this).removeClass('teach_item_hover');
			})
		} else {
			htmls = '';
			for (var i = 0; i < 30; i++) {
				htmls += '<li data-id="math">'
						+'<div class="teach_item">'
						+'<img src="images/teacher_pics.jpg" alt="" title="">'
						+'<div class="teach_item_opt">'
						+'<div class="opts">'
						+'<span class="teach_name">鸭绒</span>'
						+'<span>程序员鼓励师</span>'
						+'<i class="pull_right teach_into icon"></i>'
						+'</div>'
						+'<div class="teach_txt">'
						+'<p>七年前端七年前端七年前端七年前端七年前端七年前端七年前端七年七年前端七年前端七年前端七年前端七年前端七年前端七年前端七年</p>'
						+'</div>'
						+'</div>'
						+'</div>'	
						+'</li>'
			};

			$(".teachers_boxs_show").append(htmls);
			$(".teach_item").hover(function(){
				$(this).addClass("teach_item_hover").siblings().removeClass('teach_item_hover');
			}, function(){
				$(this).removeClass('teach_item_hover');
			})
		}

		$(this).addClass("teach_select").siblings().removeClass("teach_select");
	})

	$(".xyzx_main .teach_head ul li").hover(function(){
		$(this).addClass("teach_select").siblings().removeClass("teach_select");
		$(".college_box_item").eq($(this).index()).addClass("college_box_item_show").siblings().removeClass("college_box_item_show");
		$(".college_zx_box").eq($(this).index()).addClass("college_zx_box_show").siblings().removeClass("college_zx_box_show");
	})


	$(".menu_list li").hover(function(){
		$(this).find(".sub_nav").show();
	}, function(){
		$(this).find(".sub_nav").hide();
	})


	var bannerTimer = null;
	var bannerNow = 0;
	var bannerLen = $(".banner_page li").length;
	bannerChange();

	function bannerChange(){
		bannerTimer = setInterval(function(){
			if (bannerNow >= bannerLen - 1) {
				bannerNow = 0;
			} else {
				bannerNow++;
			}
			$(".banner_page li").eq(bannerNow).addClass("banner_current").siblings().removeClass("banner_current");
			$(".banner_img").eq(bannerNow).fadeIn(500).siblings().hide();
		}, 3000);	
	}
	$(".banner_page li").on("click", function(){
		clearInterval(bannerTimer);
		bannerChange();
		bannerNow = $(this).index();
		$(this).addClass("banner_current").siblings().removeClass("banner_current");
		$(".banner_img").eq($(this).index()).fadeIn(500).siblings().hide();
	})



	var yxTimer = null;
	var yxNow = 0;
	var yxLen = $(".yx_page li").length;
	yxChange();

	function yxChange(){
		yxTimer = setInterval(function(){
			if (yxNow >= yxLen - 1) {
				yxNow = 0;
			} else {
				yxNow++;
			}
			$(".yx_page li").eq(yxNow).addClass("yx_current").siblings().removeClass("yx_current");
			$(".yx_list").eq(yxNow).fadeIn(500).siblings().hide();
		}, 3000);	
	}
	$(".yx_page li").on("click", function(){
		clearInterval(yxTimer);
		yxChange();
		yxNow = $(this).index();
		$(this).addClass("yx_current").siblings().removeClass("yx_current");
		$(".yx_list").eq($(this).index()).fadeIn(500).siblings().hide();
	})

	var timer = null;
	var studentNow = 0;
	var studentLen = $(".student_pages li").length;
	studentChange();

	function studentChange(){
		timer = setInterval(function(){
			if (studentNow >= studentLen - 1) {
				studentNow = 0;
			} else {
				studentNow++;
			}
			$(".student_pages li").eq(studentNow).addClass("student_current").siblings().removeClass("student_current");
			$(".student_one").eq(studentNow).fadeIn(500).siblings().hide();
			$(".zx_head em").eq(studentNow).addClass("em_show").siblings().removeClass("em_show");
		}, 3000);	
	}
	$(".student_pages li").on("click", function(){
		clearInterval(timer);
		studentChange();
		studentNow = $(this).index();
		$(this).addClass("student_current").siblings().removeClass("student_current");
		$(".zx_head em").eq(studentNow).addClass("em_show").siblings().removeClass("em_show");
		$(".student_one").eq($(this).index()).fadeIn(500).siblings().hide();
	});



	$(".st_boxs").hover(function(){
		$(".left_btns, .right_btns").fadeIn(100);
	}, function(){
		$(".left_btns, .right_btns").fadeOut(100);
	})
	$(".advert_item img").hover(function(){
		$(this).addClass("hover_img");
	}, function(){
		$(this).removeClass("hover_img");
	})
	$(".zx_item .zx_head span").hover(function(){
		$(this).addClass("zx_select").siblings().removeClass("zx_select").find(".arrow_down").removeClass("arrow_down_white");
		if($(this).find(".arrow_down")) {
			$(this).find(".arrow_down").addClass("arrow_down_white");
		}

		$(".zx_item .zx_one").eq($(this).index()).addClass("zx_one_show").siblings().removeClass("zx_one_show");
	}, function(){
		if($(this).find(".arrow_down")) {
			if (!$(this).hasClass("zx_select")) {
				$(this).find(".arrow_down").removeClass("arrow_down_white");
			};
		}
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
			// console.log(now);
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

		// 返回顶部显示隐藏
	$(window).on("scroll", function(){
		// console.log($(window).scrollTop());
		if ($(window).scrollTop() >= 650) {
			$(".top").show();
		} else {
			$(".top").hide();
		}
	})

	$(".top_btn").on("click", function(){
		$("html, body").animate({
			"scrollTop" : 0
		}, 300)
	})

	// teams
	$(".teams_tit a").on("click", function(){
		$(this).addClass("teams_select").siblings().removeClass("teams_select");
		$(".teams .teach_body").eq($(this).index()).addClass("teach_body_show").siblings().removeClass("teach_body_show");
	})
	$(".teams_pages li").on("click", function(){
		$(this).addClass("teams_page_currents").siblings().removeClass("teams_page_currents");
	})

})
















