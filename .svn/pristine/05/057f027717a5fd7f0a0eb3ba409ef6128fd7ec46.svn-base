<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!---- Left side start ---->
    <aside class="main-sidebar fixed-main-sidebar">
        <!-- sidebar -->
        <section class="sidebar">
        <!-- sidebar menu -->
        <ul class="sidebar-menu fn-left" id="pMenu">
			       
        </ul>
       	 <ul class="inMenu-node sidebar fn-right" id="cMenu">
                   
        </ul>
        
        
        <!-- <ul class="sidebar-menu fn-left">
            <li class="treeview">
                <a href="#">
                    <i class="icon icon1"></i>
                    <span>系统管理</span>
                </a>
            </li>                 
        </ul>
        <ul class="inMenu-node sidebar fn-right">
            <li class="Menu-nodeTitl">商品中心</li>
            <li>
                <a href="#" class="secondNode">
                    <i class="fa fa-angle-down pull-left opacity0"></i>
                    <span>颜色管理</span>
                </a>                
            </li>
            <li>
                <a href="#">
                    <i class="fa fa-angle-down pull-left"></i>
                    <span>分类管理</span>
                </a>
                <ul class="secNode">
                    <li><a href="#">二级分类1</a></li>
                    <li><a href="#">二级分类2</a></li>
                    <li><a href="#">二级分类3</a></li>
                    <li><a href="#">二级分类4</a></li>
                </ul>
            </li>          
        </ul> -->
        
    </section>
</aside>

<script type="text/javascript">
	
	$(function(){
		var cMenuName;
		var pMenuName;		
		defMenuStatus(localStorage.menuId,localStorage.menuName,localStorage.nodeId);
	})
	
	//菜单默认状态
	function defMenuStatus(id,name,nodeId){
		loadPmenu();
		if(undefined!==id){
			secMenu(id,name);
			if(undefined!=nodeId){
				secNode(nodeId,0);	
			}	
		}
	}
	
	//加载一级菜单
	function loadPmenu(){		
		var html=[];
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
						html.push("<li class='treeview' id='"+menus[i].menuId+"'>");					
						html.push("<a href='javascript:void(0)' onclick='secMenu("+menus[i].menuId+",\""+menus[i].menuName+"\")'>");
						html.push("<i class='"+menus[i].icon+"'></i>");
						html.push("<span>"+menus[i].menuName+"</span>");
						html.push("</a></li>");			
					})
					$("#pMenu").append(html.join(""));
				}
		  	});	
	}
	
	//一级菜单点击事件
	function secMenu(id,name){
		localStorage.menuId=id;
		localStorage.menuName=name;
		$("#"+id).addClass('active').siblings().removeClass('active');   	 		 
 		loadCmenu(id,name);
 		pMenuName=$("#"+id).find("span").html();
 		$.ajax({
			async:true,
			type:"post",
			url:cas+"menu/getMenusByMenu",
			data : {keyParams:getKeyParams("{\"pMenuId\":\""+id+"\",\"appId\":\"1\"}",keyParams),
				jsonObject:getJsonObject("{\"pMenuId\":\""+id+"\",\"appId\":\"1\"}")},
			success : function(data) {
				var menus = eval("(" + data + ")").data["menuList"];
				if(menus.length>0){
					secNode(menus[0].menuId,menus[0].haschild);
				}
			}
	  	});
	}
	
	//加载二级菜单
	function loadCmenu(pMenuId,pMenuName){
		var html=[];
		var url=cas+"menu/getMenusByMenu";		
		$.ajax({
			async:false,
			type:"post",
			url:url,   				
			data : {
			keyParams:getKeyParams("{\"pMenuId\":\""+pMenuId+"\",\"appId\":\"1\"}",keyParams),
			jsonObject:getJsonObject("{\"pMenuId\":\""+pMenuId+"\",\"appId\":\"1\"}")},
			success : function(data) {
				var menus = eval("(" + data + ")").data["menuList"];					
				html.push("<li class='Menu-nodeTitl'>"+pMenuName+"</li>");
				$.each(menus,function(i,n){
					html.push("<li id='"+menus[i].menuId+"'>");
					html.push("<a href='#/"+menus[i].name+"' dataurl='"+menus[i].name+"' onclick='secNode("+menus[i].menuId+","+menus[i].haschild+")'>");
					if(menus[i].haschild!=0){
						html.push("<i class='fa fa-angle-down pull-left'></i>");
					}else{
						html.push("<i class='fa fa-angle-down pull-left opacity0'></i>");
					}						
					html.push("<span>"+menus[i].menuName+"</span>");
					html.push("</a></li>");
				})
				$("#cMenu").empty();			
				$("#cMenu").append(html.join(""));
			}
	  	});
	}
	
	//二级菜单点击事件
	function secNode(id,haschild){
		localStorage.nodeId=id;
		var cMenu=$("#"+id);
		cMenu.find(".secNode-current").removeClass('secNode-current');
		cMenu.find("a").addClass('secondNode');
		cMenu.siblings().find("a").removeClass('secondNode');		
  	 	cMenuName=cMenu.find("span").html();
  	 	loadBreadCrumb(pMenuName,cMenuName);			
		if(haschild==0){
			$("#breadcrumb3").hide();
			cMenu.find("a").attr("href","#/"+cMenu.find("a").attr("dataurl"));	        
			window.location.href="#/"+cMenu.find("a").attr("dataurl");			
		}else{
			$("#breadcrumb3").hide();			
			loadSmenu(id);
					
	        cMenu.find('i').toggleClass('fa-angle-down fa-angle-up');
	        cMenu.siblings().find('i').removeClass('fa-angle-up').addClass('fa-angle-down');						
		}		
	}
	
	//加载三级菜单
	function loadSmenu(pMenuId){
		var cMenu=$("#"+pMenuId);
		var html=[];
		var url=cas+"menu/getMenusByMenu";
		if(cMenu.find(".secNode").html()!=undefined){
			if(cMenu.find(".secNode").is(":hidden")==true){
				cMenu.find(".secNode").css("display","block");				
			}else{
				cMenu.find(".secNode").css("display","none");
			}
			//cMenu.find(".secNode").slideToggle();
		}else{
			$.ajax({
				async:true,
				type:"post",
				url:url,
				data : {keyParams:getKeyParams("{\"pMenuId\":\""+pMenuId+"\",\"appId\":\"1\"}",keyParams),jsonObject:getJsonObject("{\"pMenuId\":\""+pMenuId+"\"}")},
				success : function(data) {
					var menus = eval("(" + data + ")").data["menuList"];
					html.push("<ul class='secNode' style='display:block'>");
					$.each(menus,function(i,n){			
						html.push("<li id='"+menus[i].menuId+"'>");
						html.push("<a href='#/"+menus[i].name+"' dataurl='"+menus[i].name+"' onclick='sesNode("+menus[i].menuId+")'>"+menus[i].menuName+"</a></li>");	
					})
					html.push("</ul>");
					$("#"+pMenuId).find("ul").remove();			
					$("#"+pMenuId).append(html.join(""));
				}
		  	});
		  	
		}
		cMenu.siblings().find("ul").css("display","none");
	}
	
	//三级菜单点击事件
	function sesNode(id){
		$("#breadcrumb3").show();
		$("#"+id).addClass("secNode-current").siblings().removeClass("secNode-current");
		var sMenu=$("#"+id).find("a");
		sMenuName=sMenu.html();
		loadBreadSmenu(sMenuName);
		window.location.href="#/"+sMenu.attr("dataurl");
	}
</script>
