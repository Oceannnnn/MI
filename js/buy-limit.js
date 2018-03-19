
var oDate = new Date();
var Hours = oDate.getHours(); //获取系统时，
var Minutes = oDate.getMinutes(); //分
var Seconds = oDate.getSeconds();
if (Hours<15) {
	$('.buy_items').eq(0).addClass('on').siblings('.buy_items').removeClass('on');
	$('.buy_items').eq(0).find('.gone').html('抢购中').parents('.buy_items').siblings('.buy_items').find('.gone').html('即将开始');
}
if (Hours>=15&&Hours<16) {
	$('.buy_items').eq(1).addClass('on').siblings('.buy_items').removeClass('on');
	$('.buy_items').eq(1).find('.gone').html('抢购中').parents('.buy_items').siblings('.buy_items').find('.gone').html('即将开始');
	$('.buy_items').eq(0).find('.gone').html('已抢完');
}
if (Hours>=16&&Hours<18) {
	$('.buy_items').eq(2).addClass('on').siblings('.buy_items').removeClass('on');
	$('.buy_items').eq(2).find('.gone').html('抢购中').parents('.buy_items').siblings('.buy_items').find('.gone').html('即将开始');
	$('.buy_items').eq(0).find('.gone').html('已抢完');
	$('.buy_items').eq(1).find('.gone').html('已抢完');
}
if (Hours>=18&&Hours<20) {
	$('.buy_items').eq(3).addClass('on').siblings('.buy_items').removeClass('on');
	$('.buy_items').eq(3).find('.gone').html('抢购中').parents('.buy_items').siblings('.buy_items').find('.gone').html('已抢完');
	$('.buy_items').eq(4).find('.gone').html('即将开始');
}
if (Hours>=20) {
	$('.buy_items').eq(4).addClass('on').siblings('.buy_items').removeClass('on');
	$('.buy_items').eq(4).find('.gone').html('抢购中').parents('.buy_items').siblings('.buy_items').find('.gone').html('已抢完');
}
var mtext = parseInt($('.buy_items.on p.buy-time').parents('.buy_items').next('.buy_items').find('.buy-time').html())*60*60*1000;
var intDiff =  parseInt(mtext - (Hours*60*60+Minutes*60+Seconds)*1000);
if (intDiff<0) {
	intDiff = -parseInt(mtext - (Hours*60*60+Minutes*60+Seconds)*1000);
}
    var kk = setInterval(function () {
    	var day = 0,
    	hour=0,
        minute=0,
        second=0;
		hour = parseInt(intDiff / (60*60*1000));
        minute = parseInt(intDiff / (60*1000)) - (hour * 60);
        second = parseInt(intDiff/1000) - (hour * 60 * 60) - (minute * 60);
    	intDiff-=1000;
    	if (hour<=9){
     		hour = '0' + hour;
	    };
        if (minute<=9){
     		minute = '0' + minute;
	    };
    	if (second <= 9) {
    		second = '0' + second;
    	};
          if (second==0) {
            second = 59;
            minute--;
            if (minute<=9){
     		minute = '0' + minute;
	    };
          }
          if (minute==0) {
            minute = 59;
            hour--;
            if (hour<=9){
     		hour = '0' + hour;
	    };
          }
          if (intDiff==0) {
            clearInterval(kk);
          };
          $('.hours').html(hour);
          $('.min').html(minute);
          $('.second').html(second);
          
    	},1000)
    

