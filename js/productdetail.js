

$('.header_1 .sheng').click(function(){
	$('.sheng_box').toggle('slow');
})

//喜欢
$('.pro_like a').click(function(){
	$(this).toggleClass('on');
	if ($('.pro_like a').hasClass('on')) {
		$('.pro_like a img').attr('src','img/btn/like_mark.png');
	}else{
		$('.pro_like a img').attr('src','img/btn/like_default.png');
	}
})

//客户评价
$('.msg-title-tab span').click(function(){
	var i = $(this).index();
	$(this).addClass('active').siblings('span').removeClass('active');
	$('.msg-content').eq(i).show().siblings('.msg-content').hide();
})
//星级评价
$('.star').raty({
	path: 'img/btn',
	starOff: 'icon_xingw.png',
	starOn: 'icon_xing.png',
//	number: 5,
	size: 30,
	readOnly: true,
	score: function() {
		return $(this).attr('data-number');
	}
});





