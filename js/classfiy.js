$('.cate-hd-list ul li').click(function(){
	$(this).addClass('cur').siblings('li').removeClass('cur');
})



//租赁首页
$('.rent-items').click(function(){
	if ($(this).hasClass('active')) {
		$(this).addClass('on');
	}
	$(this).addClass('active').siblings('.rent-items').removeClass('active').removeClass('on');
})
