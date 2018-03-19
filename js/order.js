$('.order-head .order-tab a').click(function(){
	$(this).addClass('active').parents('.order-tab').siblings('.order-tab').find('a').removeClass('active');
})

$('.choose label').click(function(){
	$(this).addClass('on').parents('.coupon_item').siblings('.coupon_item').find('label').removeClass('on');
//	if ($(this).hasClass('on')) {
//		$(this).removeClass('on');
//	}else{
//		$(this).addClass('on');
//	}
})

$('.con_box .dflex li').click(function(){
	var i = $(this).index();
	$(this).addClass('con_on').siblings('li').removeClass('con_on');
	$('.order-y').eq(i).show().siblings('.order-y').hide();
})

$('.pro-opts-minus').click(function(){
    var i = $('.pro-opts-input').val();
	i--;
	$('.pro-opts-input').val(i);
	if (i<1) {
		$('.pro-opts-input').val(1);
	}
})
$('.pro-opts-add').click(function(){
    var i = $('.pro-opts-input').val();
	i++;
	$('.pro-opts-input').val(i);
})

//支付
$('.hd-fu').click(function(){
	$(this).addClass('on').siblings('.hd-fu').removeClass('on');
})
$('.addcart').click(function(){
	var pay_mon = $('.order-mon').html();
	$('.canvas-head .jine').html(pay_mon);
})

	var height = ($(window).height()-49)+'px'; 
	$('.scroll-body').height(height)
$(window).resize(function(){
	var height = ($(window).height()-49)+'px'; 
	$('.scroll-body').height(height)
})
