//获取验证码

var InterValObj; //timer变量，控制时间
var count = 60; //间隔函数，1秒执行
var curCount;//当前剩余秒数
var code = $(".reg");
function sendMessage() {
  　curCount = count;
　　//设置button效果，开始计时
     code.attr("disabled", "true").text("("+curCount + ")s").css('color','#C7C7C7');
     InterValObj = window.setInterval(SetRemainTime, 1000); //启动计时器，1秒执行一次
}
code.click(function(){
	sendMessage();
})
//timer处理函数
function SetRemainTime() {
    if (curCount == 0) {                
        window.clearInterval(InterValObj);//停止计时器
        code.removeAttr("disabled").text("重新发送");//启用按钮
    }
    else {
        curCount--;
       	code.text("("+curCount + ")s");
    }
}

//向后台发送处理数据
$(document).ready(function(){
	var code_1 = $(".reg").val();
	var phone = $('.phone').val();
	var pass = $('.pass').val();
	var data = {
		phoneNum:phone,
		phoneCode:code_1,
		password:pass,
		agreement:1,
		sign:'ocXOj1uSwVee14w0B6wJ4wR5rc59nyS8'
	}
	$('.submit').click(function(){
		//向后台发送处理数据
       $.ajax({
       　　type: "POST", //用POST方式传输
       　　dataType: "json", //数据格式:JSON
       　　url: 'http://192.168.1.211:8080/MI/regAndLoginOfAPP!submitData.action', //目标地址
      　　 data: data,
      　　 error: function (XMLHttpRequest, textStatus, errorThrown) {
	      	alert('错误')
	      },
       　　success: function (msg){ 
       	alert('成功')
       }
       });
	})











//复选 是否同意
$('.checkbox').click(function(){
	if ($(this).hasClass('on')) {
		$(this).removeClass('on')
	}else{
		$(this).addClass('on')
	}
})
