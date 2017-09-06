/*! 
 * QinYi webstocket.js
 * @Author yao
 */

var ws = null;

function wsConnect() {
	var url = msg+'hello';
	if (!url) {
		alert('URL未定义！');
		return;
	}

	ws = new SockJS(url);
	localStorage.ws=ws;

	ws.onopen = function() {
		//console.log('Info: connection opened.');
	};
	ws.onmessage = function(event) {
		$('#messages-info').addClass('animated pulse infinite');
		var event=JSON.parse(event.data);
		var currentdate=getNowDate();
		if(event.type=="2"){
			if(!localStorage.message){
				localStorage.message=event.content+"&"+currentdate;
			}else{
				localStorage.message=event.content+"&"+currentdate+"|"+localStorage.message;
			}		
						
			var messages=localStorage.message.split("|");
			
			if(messages.length>5){
				messages.pop();
				localStorage.message=messages.join("|");			
				$("#newsgroup").children().last().remove();
			}
			
			var html=[];
			html.push("<li>");
			html.push("<a href='javascript:;'><em class='news-time'>"+currentdate+"</em>"+event.content+"</a>");
			html.push("</li>");
			$("#newsmsg").after(html.join(""));
		}else{
			if(!localStorage.message2){
				localStorage.message2=event.content+"&"+currentdate;
			}else{
				localStorage.message2=event.content+"&"+currentdate+"|"+localStorage.message2;
			}
			var messages=localStorage.message2.split("|");
			
			if(messages.length>2){
				messages.pop();
				localStorage.message2=messages.join("|");			
				$("#ordergroup").children().last().remove();
			}
			var html=[];
			html.push("<li>");
			html.push("<div class='panelBox'>");
			html.push("<em class='news-time'>"+currentdate+"</em>");
			html.push("<p>"+event.content+"</p>");			
			html.push("<p><button type='button' class='btn btn-primary'>接单</button>&nbsp;");
			html.push("<button type='button' class='btn btn-default'>拒单</button></p>");
			html.push("</li>");
			$("#ordermsg").after(html.join(""));			
		}
		
		localStorage.msgCount=parseInt(localStorage.msgCount)+1;
		
		if(parseInt(localStorage.msgCount)){
			if(parseInt(localStorage.msgCount)<10){
				$("#msg").html(localStorage.msgCount);
			}else{
				$("#msg").html("10<em>+</em>");
			}
		}else{
			localStorage.msgCount=1;
			$("#msg").html(localStorage.msgCount);
		}
		
		
		
		//console.log('Received: ' + event.data);
	};
	ws.onclose = function(event) {
		//console.log('Info: connection closed.');
	};
	setTimeout('wsSend()','1000');
}

function wsSend(){
	if (ws != null) {		
		var userId=JSON.parse(keyParams).userId;
		var message = "用户"+userId+"上线啦！";
		//var jsonObject={"userId":["1","2"],"orgIds":["3","4"],"message":message};
		//jsonObject = JSON.stringify(jsonObject)
		ws.send("{'userId':'"+userId+"','status':'login'}");
//		$.ajax({
//			url : msg+'message/sendToUsers',
//			async : false,
//			type : "post",
//			data : {
//				keyParams:getKeyParams(jsonObject,keyParams),
//				jsonObject:getJsonObject(jsonObject)
//			}
//		});
	} else {
		alert('connection not established, please connect.');
	}
}

function wsSendToUser(){
	if (ws != null) {
		var message = "123";
		console.log('Sent: ' + message);
		var userId=JSON.parse(keyParams).userId;
		var jsonObject={"userId":["1","2"],"orgIds":["3","4"],"message":message};
		jsonObject = JSON.stringify(jsonObject)
		console.log(jsonObject);
		//ws.send("{'userId':'1','status':'login'}");
//		$.ajax({
//			url : msg+'message/sendToUsers',
//			async : false,
//			type : "post",
//			data : {
//				keyParams:getKeyParams(jsonObject,keyParams),
//				jsonObject:getJsonObject(jsonObject)
//			}
//		});
	} else {
		alert('connection not established, please connect.');
	}
}

function wsCloseConnect(){
	if (ws != null) {
		var userId=JSON.parse(keyParams).userId;
		ws.send("{'userId':'"+userId+"','status':'loginOut'}");
	}	
}
