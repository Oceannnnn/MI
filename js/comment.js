//星级评价
$('.star').raty({
	path: 'img/btn',
	starOff: 'icon_xingw.png',
	starOn: 'icon_xing.png',
//	number: 5,
	size: 30,
//	readOnly: true,
	score: function() {
		return $(this).attr('data-number');
	}
})