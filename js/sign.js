

			var amoth = [31,28,31,30,31,30,31,31,30,31,30,31];
			var oDate = new Date();
			var iyear = oDate.getFullYear();
			var iday = oDate.getDate();
			
			var imonth = oDate.getMonth();
			var td = document.getElementById('box').getElementsByTagName('td');
			var seperator1 = "-";
			var month = imonth + 1;
			var currentdate = oDate.getFullYear() + seperator1 + month + seperator1 + iday;
			
			$('.tou-left span').html(currentdate);
			
			
			loadda();
			function loadda(){
				var iweek = new Date(iyear,imonth,1).getDay();
				var zgy = getamoth(iyear,imonth);
				var sgy = getamoth(iyear,imonth-1);
				var data = [];
				
				cler();
				
				for (var i = iweek-1; i >=0 ; i--) {
					data.push('<span>'+(sgy-i)+'</span>');
				}
				
				for (var i = 1; i <= zgy ; i++) {
					
					if (iday == i) {
						td[data.length].className = 'bj';
					}
					data.push(i);
				}
				
				
				var jifen = ($('.tou-right span').html())*1;
				//签到
				$('.sign-items a:last-child').click(function(){
					if  ($('table td').hasClass('bj')) {
	                    $('table td.bj').addClass('active');
	               }
					var newfen = jifen+5;
					$('.tou-right span').html(newfen);
				});
				
				
				
				var zuihou = td.length - data.length;
				for (var i = 1; i <= zuihou ; i++) {
					data.push('<span>'+(i)+'</span>');
				}
				
				
				for (var i = 0; i < data.length; i++) {
					td[i].innerHTML = data[i];
				}
			}
			
			
			//清除类名
			function cler(){
				for (var i = 0; i < td.length; i++) {
					td[i].className = '';
				}
			}
			
			//获取每月的天数
			function getamoth(y,m){
				if (m>11) {
					m = 0;
				}
				if (m<0) {
					m = 11;
				}
				if (m==1) {
					return ((y%4==0&&y%100==0)||y%400 ==0)?29:28;
				} else{
					return amoth[m];
				}
			}
			
		
			
		
		
		

