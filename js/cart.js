
//购物车
$('.choose label').click(function(){
	if ($(this).hasClass('on')) {
		
//		$('.gotobill').addClass('on');
		$(this).addClass('on');
//		结算
		
		$('.total-price .price').text('00.00');
	}else{
		$(this).removeClass('on');
//		$('.gotobill').removeClass('on');
		//结算价格
//		var price = $(this).parents('li').find('.new_price').text();
//		$('.total-price .price').text(price);
	}
})
	//全选 反选
	$(".fixbar input[type=checkbox]").on("click",function(){
		if (this.checked) {
			$('input:checkbox').prop('checked', true);
			$("label").addClass("on");
//			$('.gotobill').addClass('on');
		} else {
			$('input:checkbox').prop('checked', false);
			$("label").removeClass("on");
//			$('.gotobill').removeClass('on');
		}
	});
	
//商品
	$(".mycart-list input[type=checkbox]").on("click",function(){
		var _total = $(".mycart-list input:checkbox").length;
		var _check = $(".mycart-list input:checkbox:checked").length;
		if(_total == _check){
			$(".fixbar input[type=checkbox]").prop('checked', true);
			$(".fixbar label").addClass("on");
			
		}else {
			$(".fixbar input[type=checkbox]").prop('checked', false);
			$(".fixbar label").removeClass("on");
		}
	});

//删除
$('.remove').click(function(){
	if ($('.choose label').hasClass('on')) {
		$('.choose label.on').parents('li').hide();
		$(".fixbar label").removeClass("on");
		} 
})

//打开购物
$('.mycart-list li').click(function(){
	$('.canvas-cover').css('display','block');
	$('.canvas-content').animate({
		'top':'35%'
	});
	$(".scroll-wrap").addClass('on');
})
//关闭购物
$('.canvas-content .close').click(function(){
	$('.canvas-cover').css('display','none');
	$('.canvas-content').animate({
		'top':'135%'
	});
	$(".scroll-wrap").removeClass('on');
})
