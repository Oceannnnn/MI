
/*<!--限时购部分-->*/
var swiper = new Swiper('.time-swiper', {
	slidesPerView: 5,
	paginationClickable: true,
	nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
});




//链接后台
$(document).ready(function(){
//	var img_src = $('.act-box .lazy').attr("src");
	$.ajax({ //一个Ajax过程
            type: "POST", //以post方式与后台沟通
            url : "http://192.168.1.212:8080/MI/bannerOfAPP!toDetail.action", //与此页面沟通
            dataType:'jsonp',//返回的值以 jsonp方式 解释
            contentType:"application/x-www-form-urlencoded",
//          jsonp: "callbackparam",//服务端用于接收callback调用的function名的参数 
//			jsonpCallback:"success_jsonpCallback",
            data: {//发给页面的数据
            	txnType : 'Lodingindex',
            	phoneMun: 1234421412,
            	sign: 'ocXOj1uSwVee14w0B6wJ4wR5rc59nyS8'
            	},
            success: function(){//如果调用成功
              alert('a'); 
            },
             error: function(XMLHttpRequest, textStatus, errorThrown) {
             	console.log(XMLHttpRequest.status);
             	console.log(XMLHttpRequest.readyState);
             	console.log(textStatus);
            },
        });
})