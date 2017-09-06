<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<script type="text/javascript" src="http://static.qineasy.com/base/js/select2/js/select2.full.js"></script>
<script type="text/javascript" src="http://static.qineasy.com/base/js/select2/js/select2.js"></script>

<!-- 删除模态层 -->
<div class="am-dialog addColordialog" id="deldialog">
    <div class="am-dialog-wrap">
        <div class="am-dialog-header">
            <h3 class="am-ft-center">是否删除</h3>
        </div>
        <div class="dialogBtn am-flexbox">
				<button type="button" class="am-flexbox-item btn am-button alterOv"
					am-bg="blue" onClick="del()">确定</button>
				<button type="button" class="am-flexbox-item btn am-button"
					id="closeDialog" am-bg="white">取消</button>
					<input type="reset" name="reset" style="display: none;" />
				<div class="fn-clear"></div>
			</div>
    </div>
</div>

<script type="text/javascript">
    $(function () {
    	if(!cas||!pos){
    		console.log("WebUrl未定义");
    	}
		//工具提示
        $('[data-toggle="tooltip"]').tooltip();           
    })
</script>

<!-- 模态层 -->
<script type="text/javascript">
	jQuery.fn.center = function () {
        this.css({
        "position" :"fixed",
        "top" : 50 + "%",
        "marginTop" : ("-" + this.height() / 2) + "px",
        "left" : ( $(window).width() - this.width() ) / 2+$(window).scrollLeft() + "px"
        });
        return this;
    };
    
    $(".am-dialog").center();
    
    $('#closeDialog,.alterOv,.maskBg').click(function(){
        $('.am-dialog,.maskBg,#am-dialogBtn').fadeOut();
    });
    
    function delete_dialog(){
		$('#deldialog').fadeIn();
		$('.maskBg').fadeIn();
	};
</script>

<!--重新登录弹窗-->
<div class="am-dialog addColordialog re-login-wrapper">
	<form id="loginform">
	    <i class="fa fa-close closeDia"></i>
	    <div class="am-dialog-header">
	        <h3 class="am-ft-center">重新登录</h3>
	    </div>
	    <div class="am-dialog-body">
	        <div class="am-input-line">
	            <i class="fa fa-user"></i>
	            <input type="text" name="userName" placeholder="请输入用户名"/>
	        </div>
	        <div class="am-input-line">
	            <i class="fa fa-lock"></i>
	            <input type="password" name="passWord" placeholder="请输入密码"/>
	        </div>
	    </div>
	    <div class="dialogBtn am-flexbox">
	        <button type="button" class="am-flexbox-item btn am-button" am-bg="blue" onClick="reLogin()">登录</button>
	        <div class="fn-clear"></div>
	    </div>
    </form>
</div>

<!-- 登录浮层 -->
<script type="text/javascript">
	$('.re-login-wrapper').center();	
    $('.closeDia').click(function(){
        $('.re-login-wrapper,.maskBg').hide();
    });
  	function reLogin(){
    	var keyParams='{"timestamp":"","duid":"duid","token":"","userId":"","appKey":"aZ23dA4S4I","orgId":"","brandId":""}'; 		
        var url=cas+"user/userlogin";
        var jsonObject = $("#loginform").serializeJson();
		$.ajax({
			async:true,
			type:"post",
			url:url,
			data : {keyParams:getKeyParams(jsonObject,keyParams),
					jsonObject:getJsonObject(jsonObject)},
			success : function(data) {
				var json = $.parseJSON(data);	
				if(json.code=='1'){
					var object=json.data.user;
					var keyParams={"timestamp":object.timestamp,"duid":"duid","token":object.token,"userId":object.userId,"appKey":object.appKey,"orgId":object.orgId,"brandId":object.brandId};
	    			localStorage.keyParams=JSON.stringify(keyParams);
					localStorage.userInfo=JSON.stringify(object);
					reMenuRoute();
					location.reload();
				}else{
					alertmsg(json.msg);
				}
			},
			error:function(XMLHttpRequest, textStatus, errorThrown){
				 alert("系统异常!");
		    }
		})
    }
    
    function reMenuRoute(){
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
				sessionStorage.routeList=routeList;
			}								
			})
		} 
		//让弹出框的位置居中
jQuery.fn.centera=function(){
		var Height=this.height();
		var Width=this.width();
		var winWidth=document.documentElement.clientWidth;
		var winHeight=document.documentElement.clientHeight;
		 this.css({
		 	"position":"fixed",
			"left":(winWidth-Width)/2+"px",
			"top":(winHeight-Height)/2+"px"
		})
}
jQuery.fn.showName = function() {
		this.on("mousemove", ".storeName", function(event) {
			//		event.preventDefault();
			//		event.stopPropagation();
			//		if($(event.target).hasClass("storeName")) {
			var thisShopName = $(event.target).parent().find(".shopNameaa").html();
			var html = "<div id='showShopName'></div>";
			$(this).append(html);
			$("#showShopName").html(thisShopName).offset({}).css({
				"z-index": "2000",
				"position": "fixed",
				"left": event.pageX + 15 + "px",
				"top": event.pageY + 10 + "px"
			});
			//		}
		})
	}
	jQuery.fn.removeName = function() {
		this.on("mouseout", function() {
			$("#showShopName").remove();
		})
	}
</script>