 /*每日推荐*/
var swiper = new Swiper('.act-swiper', {
	slidesPerView: 3.5,
	paginationClickable: true,
});
//轮播图
	$("#index-banner").flexslider({
		slideshowSpeed: 3000, // Integer: ms 滚动间隔时间
		animationSpeed: 600, // Integer: ms 动画滚动速度
		directionNav: false //Boolean: 是否创建上/下一个按钮（previous/next）
	});

$(function() {
  $('#slider-manual').flexslider({
  animationLoop: false,
  });
});


//返回顶部
function goTop() {
	$(window).scroll(function(e) {
		if($(window).scrollTop() > 100)
			$("#gotop").fadeIn(1000);
		else
			$("#gotop").fadeOut(1000);
	});
};
$(function() {
	$("#gotop").click(function(e) {
		//以1秒的间隔返回顶部
		$('body,html').animate({
			scrollTop: 0
		}, 1000);
	});
	goTop();
});

//购物车数量为零时隐藏badge
if($(".am-badge").text() == '0') {
	$(".am-badge").hide();
} else if(parseInt($(".am-badge").text()) > 99) {
	$(".am-badge").text("…")
}

//不得超过库存量
$('.buy-next').click(function(){
	var num = $('.body_size.choosen .ku span').html();
	var i = $('.num_u .num').val();
	i++;
	$('.num_u .num').val(i);
	//不得超过库存量
	if (i>num) {
		$('.num_u .num').val(num);
	}
})
//选择
$('.body_size').click(function(){
	if (!$(this).hasClass('on')) {
		$(this).addClass("choosen").siblings('.body_size').removeClass("choosen");
	} 
	var i = $('.num_u .num').val();
	var num = $('.body_size.choosen .ku span').html();
	if(i-num>0){
		$('.num_u .num').val(num);
	}
})
//购买数量
$('.buy-prev').click(function(){
	var i = $('.num_u .num').val();
	i--;
	$('.num_u .num').val(i);
	if (i<1) {
		$('.num_u .num').val(1);
	}
})
//懒加载图片？
$('img.lazy').lazyload({
//		threshold:200
	effect : "fadeIn"
//	event : "sporty"
})



