	
//	内容部分开始高度
//	alert($('.topic-head').innerHeight())
	var height = (41+$('.topic-head').innerHeight())+'px';
	$('.index-scroll').css('margin-top',height);
$(window).resize(function(){
	var height = (41+$('.topic-head').innerHeight())+'px';
	$('.index-scroll').css('margin-top',height);
})


$('.topic-items').click(function(){
	$(this).addClass('on').siblings('.topic-items').removeClass('on')
})



	
	var diffleft = ($(window).width()-$('.topic-go').innerWidth())/2+'px';
	$('.topic-go').css('left',diffleft);
//	alert(diffleft)
$(window).resize(function(){
	var diffleft = ($(window).width()-$('.topic-go').innerWidth())/2+'px';
	$('.topic-go').css('left',diffleft);
})



//点赞
$('.index-scroll .to-right').click(function(){
	var num = $(this).html();
	if (!$(this).hasClass('on')) {
		$(this).addClass("on");
		num++;
		$(this).html(num);
	} else{
		$(this).removeClass("on");
		num--;
		$(this).html(num);
	}
})

$('.details-scroll .to-right').click(function(){
	if (!$(this).hasClass('on')) {
		$(this).addClass("on");
	} else{
		$(this).removeClass("on");
	}
})



//发布
$('.issue-hua').click(function(){
	var issue = $(this).text();
	var val = $('textarea').val();
	val+=issue;
	$('textarea').val(val);
})
