<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!-- Navbar Right Menu start -->
        <div class="navbar-custom-menu">
            <ul class="nav navbar-nav">
                <li id="orgName" class="loginTime"></li>
                <!-- User -->
                <li class="user user-menu">
                    <a href="javascript:;" class="dropdown-toggle lt" data-toggle="dropdown"><span id="trueName"></span><i class="fa fa-angle-down mgl10"></i></a>
                    <section class="dropdown-menu aside-xl animated fadeInUp">
                        <section class="panel bg-white mgb0">
                            <div class="list-group list-group-alt">
                                <a href="javascript:;" onclick="accountInfo()" class="media list-group-item mgt0">
                                    <span class="media-body block m-b-none">我的资料</span>
                                </a>
                                <a href="javascript:;" onclick="alterPassWord()" class="media list-group-item mgt0">
                                    <span class="media-body block m-b-none">修改密码</span>
                                </a>
                            </div>
                        </section>
                    </section>
                </li>
                <!-- messages Menu start -->
                <li class="notifications-menu">
                    <a href="javascript:;" class="messages-info" id="messages-info">
                        <i class="fa fa-bell-o"></i>
                        <span class="badge" id="msg"></span>
                    </a>
                </li>
                <!-- Exit -->
                <li>
                    <a href="javascript:void(0)" class="top-exit" onclick="loginOut()">退出登录</a>
                </li>
            </ul>
        </div>        		
        
        <script type="text/javascript"> 
        	console.log(window.location.href)
        	function loginOut(){
        		wsCloseConnect();        		 
        		window.location.href="/"+document.location.pathname.split('/')[1]+"/login.jsp";      		
        	}
        	function accountInfo(){
        		var location=window.location.href;
		     	var newlocation=location.substr(0, location.indexOf('oms/'));
		     	localStorage.menuId = "78";
		  		localStorage.menuName = "帐户资料";
				localStorage.nodeId="79";
		     	window.location.href=newlocation+"oms/public/home.jsp#/accountInfo";
		     	secMenus(390,'帐户资料');
		     	secNode(355,0);
        	}
        	
        	function alterPassWord(){
        		var location=window.location.href;
		     	var newlocation=location.substr(0, location.indexOf('oms/'));
		     	localStorage.menuId = "78";
		  		localStorage.menuName = "修改密码";
				localStorage.nodeId="80";
		     	window.location.href=newlocation+"oms/public/home.jsp#/alterPassword";
		     	secMenus(391,'用户设置');		     	
		     	secNode(356,0);
        	}       	
        	
        	$('.user-menu').click(function(){
		        $(this).find('i.fa').toggleClass('fa-angle-up')
		    })
        	$(function(){ 
        		var json=$.parseJSON(localStorage.userInfo);
        		if(json.trueName != null && json.trueName != ""){
	        		$('#trueName').text(json.trueName);
	        		$('#orgName').text(json.orgName);
        		}else{
        			$('#trueName').text("账户资料");
        		}
        		
        		//webstocket
        		wsConnect();
        		if(localStorage.msgCount){
        			if(parseInt(localStorage.msgCount)<10){
	        			if(parseInt(localStorage.msgCount)!=0){
	        				$("#msg").html(localStorage.msgCount);
	        			}		
					}else{
						$("#msg").html("10<em>+</em>");
					}
        		}       		        		
        		
				if(localStorage.message){
					var messages=localStorage.message.split("|");
					for(var k in messages){					
						var message=messages[k].split("&");
						var html=[];
						html.push("<li>");
						html.push("<a href='javascript:;'><em class='news-time'>"+message[1]+"</em>"+message[0]+"</a>");
						html.push("</li>");
						$("#newsmsg").after(html.join(""));						
					}  
				}
				if(localStorage.message2){
					var messages=localStorage.message2.split("|");
					for(var k in messages){					
						var message=messages[k].split("&");
						var html=[];
						html.push("<li>");
						html.push("<div class='panelBox'>");
						html.push("<em class='news-time'>"+message[1]+"</em>");
						html.push("<p>"+message[0]+"</p>");			
						html.push("<p><button type='button' class='btn btn-primary'>接单</button>&nbsp;");
						html.push("<button type='button' class='btn btn-default'>拒单</button></p>");
						html.push("</li>");
						$("#ordermsg").after(html.join(""));						
					}  
				}				      		  		      		
        	})
        	function reloadTrueName(){
        	    var json=$.parseJSON(localStorage.userInfo);
        		if(json.trueName != null && json.trueName != ""){
	        		$('#trueName').text(json.trueName);
	        		$('#orgName').text(json.orgName);
        		}else{
        			$('#trueName').text("账户资料");
        		}
        	}
		//一级菜单点击事件
		function secMenus(id,name){
			localStorage.menuId=id;
			localStorage.menuName=name;
			$("#"+id).addClass('active').siblings().removeClass('active');   	 		 
	 		loadCmenu(id,name);
	 		pMenuName=$("#"+id).find("span").html();
	 		$.ajax({
				async:true,
				type:"post",
				url:cas+"menu/getMenusByMenu",
				data : {keyParams:getKeyParams("{\"pMenuId\":\""+id+"\"}",keyParams),
					jsonObject:getJsonObject("{\"pMenuId\":\""+id+"\"}")},
				success : function(data) {
					var menus = eval("(" + data + ")").data["menuList"];
				}
		  	});
		}        	
        </script>
        
 <!-- webstock -->
 <jsp:include page="websocket.jsp" />
