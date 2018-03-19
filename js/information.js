$('.add-mo').click(function(){
	$(this).addClass('on').parents('.add-items').siblings('.add-items').find('.add-mo').removeClass('on')
})


//新增地址
$(".city-picker").cityPicker({
//  title: "选择省市区/县"
});