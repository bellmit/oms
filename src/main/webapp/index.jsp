<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!-- 头部 -->
<jsp:include page="public/headpage.jsp" />

<!-- 主要 -->
<body class="indexbody">

    <!-- Top start -->
    <header class="main-header">
    <!-- Header Navbar start -->
    <nav class="navbar navbar-static-top" role="navigation">
        <!-- loginmsg -->
        <jsp:include page="public/loginmsg.jsp" />        
    </nav>
</header>
    <!-- Top end -->

    <!-- banner start-->
    <div class="bannerBox">
         <img src="static/base/images/index-banner.png" class="bannerNav clearfix animated bounceIn" alt="勤易零售分销管理平台" title="勤易零售分销管理平台" />
    </div>
    <!-- banner end -->

     <!---- Content start ---->
    <div class="dexContent clearfix">
        <!---- 行一 ---->
        <div class="container-fluid row animated bounceInRight" id="row1">
            
        </div>
        <!---- 行二 ---->
        <div class="container-fluid row animated fadeInLeftBig" id="row2">
            
        </div>
        <!---- 行三 ---->
        <div class="container-fluid row animated fadeInUp" id="row3">
            
        </div>
    </div>
	
	<script type="text/javascript">
	
     $(function(){
     	loadRowMenu();
     	loadMenuRoute();    		
     })
     
     function loadRowMenu(){
        var html1=[];
        var html2=[];
        var html3=[];
		var url=cas+"menu/getPMenus";    	

        	$.ajax({
				async:false,			
				type:"post",
				url:url,
				data : {
					keyParams:getKeyParams("{\"pMenuId\":\"0\",\"appId\":\"1\"}",keyParams),
					jsonObject:getJsonObject("{\"pMenuId\":\"0\",\"appId\":\"1\"}")
				},
				success : function(data) {
					var menus = eval("(" + data + ")").data["menuList"];
					$.each(menus,function(i,n){
						if(i<2){
							html1.push("<a href='javascript:void(0)' onclick='redirectPage("+menus[i].menuId+",\""+menus[i].menuName+"\")' class='col-xs-3 typeInfo'>");
							html1.push("<div class='"+menus[i].icon2+"'></div>");
							html1.push("<div class='text-info'>");
							html1.push("<span class='typeTitl'>"+menus[i].menuName+"</span>");
							html1.push("</div></a>");
							html1.push("<a href='javascript:void(0)' class='col-xs-3 typeInfo'>&nbsp;</a>");
						}else if(i<6){
							html2.push("<a href='javascript:void(0)' onclick='redirectPage("+menus[i].menuId+",\""+menus[i].menuName+"\")' class='col-xs-3 typeInfo'>");
							html2.push("<div class='"+menus[i].icon2+"'></div>");
							html2.push("<div class='text-info'>");
							html2.push("<span class='typeTitl'>"+menus[i].menuName+"</span></div>");					
							html2.push("<div class='typeNews'>");
							if(i==5){
								html2.push("<span class='badge'></span>");
							}		
							html2.push("</div></a>");
						}else{
							html3.push("<a href='javascript:void(0)' onclick='redirectPage("+menus[i].menuId+",\""+menus[i].menuName+"\")' class='col-xs-3 typeInfo'>");
							html3.push("<div class='"+menus[i].icon2+"'></div>");
							html3.push("<div class='text-info'>");
							html3.push("<span class='typeTitl'>"+menus[i].menuName+"</span></div>");
							html3.push("<div class='typeNews'>");
							if(i==6){
								html3.push("<span class='badge'></span>");
							}		
							html3.push("</div></a>");
						}								
					})
					$(".container-fluid").empty();
					$("#row1").append(html1.join(""));
					$("#row2").append(html2.join(""));
					$("#row3").append(html3.join(""));					
				}
		  	});
		  }
		  
	function loadMenuRoute(){
		$.ajax({
			async:false,			
			type:"post",
			url:cas+"priv/getRoute",
			data : {
				keyParams:getKeyParams("{\"appId\":\"1\"}",keyParams),
				jsonObject:getJsonObject("{\"appId\":\"1\"}")
			},
			success : function(data) {
				var jsonObj=JSON.parse(data);	
				var routeList=JSON.stringify(jsonObj.data.routeList);
				sessionStorage.routeList=routeList;
			}								
			})
		}
      </script>
    <!---- Content end ---->
    <!---- Foot start ---->
    <div class="indexFooter dexfoot">Copyright 2016, 杭州勤易科技有限公司， 浙ICP备15019091号</div>
    <!---- Foot end ---->
	<script type="text/javascript">
		var isFirst=true;
		function redirectPage(id,name){
		  var url="public/home.jsp";  
		  localStorage.menuId = id;
		  localStorage.menuName = name;
		  window.location.href=url;
		}
	</script>

</body>
</html>
