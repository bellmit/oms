<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<jsp:include page="public/headpage.jsp" />

<!--遮罩 start-->

<body class="loginBody">
<!-- Top -->
<div class="topBan">
    <div class="content-section">
        <a href="index.html" class="logo">
            <img class="img-responsive" src="static/base/images/register_logo.png" alt="勤易科技" />
        </a>
         <a href="index.jsp" class="returnHome">返回首页</a>
    </div>
</div>
<!-- /Top -->
<!---- Content start ---->
<div class="contentNav">
    <div class="content-section">
        <form class="form-horizontal">
            <div class="reg-wrap">
                <h2 class="regSucess">注册帐户成功</h2>
                <p class="text-primary text-center">尊敬的用户，您好！</p>
                <p class="text-primary text-center">您已经成功注册帐户，现在您可以免费开通商户：</p>
                <button type="button" onClick="goCommercia()" class="center-block btn btn-primary reg-sbtn">立即开通商户</button>
                <a href="index.jsp" class="center-block text-center text-muted">点击这里直接返回首页</a>
                <div class="fn-clear"></div>
            </div>
        </form>
    </div>
</div>

<!---- Content end ---->

<!---- Foot start ---->
<div class="loginfooter">Copyright 2016, 杭州勤易科技有限公司， 浙ICP备15019091号</div>
<!---- Foot end ---->
<jsp:include page="/public/footstyle.jsp" />
<!---- JS ---->
<script src="register.js"></script>
<script type="text/javascript">
	$(function(){  
		var keyParams='{"timestamp":"","duid":"duid","token":"","userId":"","appKey":"aZ23dA4S4I"}'; 		
        var url=cas+"user/userlogin";
        var jsonObject = localStorage.userLogin;
        $.post(url,{keyParams:getKeyParams(jsonObject,keyParams),jsonObject:getJsonObject(jsonObject)},function(data){
			var json = $.parseJSON(data);
			if(json.code=='1'){
				var object=json.data.user;
				var keyParams={"timestamp":object.timestamp,"duid":"duid","token":object.token,"userId":object.userId,"appKey":object.appKey};
    			localStorage.keyParams=JSON.stringify(keyParams);
    			localStorage.userInfo=JSON.stringify(object);
    			delete localStorage.userLogin;  
    			loadMenuRoute();
			}else{
				alert(json.msg);
			}
        })
     })
	function loadMenuRoute(){
		$.ajax({
			async:false,			
			type:"post",
			url:cas+"priv/getRoute",
			data : {
				keyParams:getKeyParams("{}",localStorage.keyParams),
				jsonObject:getJsonObject("{}")
			},
			success : function(data) {
				var jsonObj=JSON.parse(data);	
				var routeList=JSON.stringify(jsonObj.data.routeList);
				localStorage.routeList=routeList;
			}								
			})
		}
     
     function goCommercia(){
/*      	var url="public/home.jsp#/commercia";  
		  localStorage.menuId = "55";
		  localStorage.menuName = "商户管理";
		  localStorage.nodeId="72";
		  window.location.href=url; */
        		var location=window.location.href;
		     	var newlocation=location.substr(0, location.indexOf('page/'));
		     	localStorage.menuId = "55";
		  		localStorage.menuName = "商户管理";
				localStorage.nodeId="72";
		     	window.location.href=newlocation+"page/public/home.jsp#/commercia";
		     	secMenus(55,'商户开通');
		     	secNode(72,0);		  
/*   		  secMenus(55,'商户开通');		     	
     	  secNode(72,0); */
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
</body>
