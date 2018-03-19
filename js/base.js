//刷新页面
$('.header_1 i.right').click(function(){
	location.reload()
})


//返回上一页
$('.back').click(function(){
	history.go(-1);
})


//删除收藏
$('.items_i').click(function(){
	$(this).parents('li').hide()
})




$('.choose label').click(function(){
	if ($(this).hasClass('on')) {
		$(this).removeClass('on');
	}else{
		$(this).addClass('on');
	}
})



//关闭购物
$('.close').click(function(){
	$('.canvas-cover').css('display','none');
	$('.canvas-content').animate({
		'top':'135%'
	});
	$(".scroll-wrap").removeClass('on');
})


	var height = ($(window).height()-41)+'px'; 
	$('.sign-body').height(height)
$(window).resize(function(){
	var height = ($(window).height()-41)+'px'; 
	$('.sign-body').height(height)
})
