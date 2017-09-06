<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<%-- <!-- 头部 -->
<jsp:include page="../../public/headpage.jsp" /> --%>
<!--Ztree-->
<jsp:include page="../../public/ztreeStyle.jsp" />
<!--遮罩 start-->

<!--遮罩 end-->
<script type="text/javascript">

	//打开角色模态层
	var cas = localStorage.cas
		function open_roledialog(obj) {
		var nodes = zTree.getSelectedNodes();
			if (nodes && nodes.length>0) {
				if(nodes[0].type=="user"){
					$('#roledialog,.maskBg').fadeIn();
				}else{
					alertmsg("请选择一个用户");
				}
			}else{
				alertmsg("请选择一个用户");
			}
		}
	var loadRoles = function(userId){
		var data1 = "{\"userId\":\""+$("input[name=userId]").val()+"\"}";
		$.ajax({
			async : false,
			type : "post",
			url : cas+"user/getRolesAndPrivByUserId",
			data : {
				keyParams:getKeyParams(data1,keyParams),
				jsonObject:getJsonObject(data1)
			},
			success : function(data) {
				$("li[class='sc']").remove();
			
				var role_p="";//普通角色
				var role_s="";//授权角色
				var priv_p="";//普通权限
				var priv_s="";//授权权限
				
				var json = eval('(' + data + ')'); 
				var content = json.data.roleList;
				var index = "";
				for(var item in content){
					//alert(content[item].privId+"   "+content[item].privName);
					//判断是否是授权角色 0--是  1--不是
					
					if(content[item].roleGrantFlag == "0"){
						if(index == "" ||index != content[item].roleId){
							index =  content[item].roleId
							role_s += "<li class='sc' name='"+content[item].roleId+"'>"+content[item].roleName+"</li>";
						}
							priv_s += "<li class='sc' name='"+content[item].privId+"'>"+content[item].privName+"</li>";
						
					}else{
						if(index == "" ||index != content[item].roleId){
						index = content[item].roleId
						role_p += "<li class='sc' name='"+content[item].roleId+"'>"+content[item].roleName+"</li>";
						}
						priv_p += "<li class='sc' name='"+content[item].privId+"'>"+content[item].privName+"</li>";
					}
				}
				$("li[class=sc]").remove();
				$("#role_s").after(role_s);
				$("#priv_s").after(priv_s);
				$("#role_p").after(role_p);
				$("#priv_p").after(priv_p);
				
			},
			error : function(e) {
				console.log(e);
			}
		});
	}

	var setting = {
		view : {
			dblClickExpand : true
		},
		check : {
			enable : false
		},
		data : { // 必须使用data    
			simpleData : {
				enable : true,
				idKey : "userName", // id编号命名
				pIdKey : "orgId" // 父id编号命名
			},
			key : {
				name : "trueName"
			}
		},
		callback : {
			onRightClick : OnRightClick,
			onClick : OnClick
		}

	};


	function OnRightClick(event, treeId, treeNode) {
		if (!treeNode && event.target.tagName.toLowerCase() != "button" && $(event.target).parents("a").length == 0) {
			zTree.cancelSelectedNode();
			// showRMenu("root", event.clientX, event.clientY);
		}else if (treeNode && !treeNode.noR) {
			//alert(treeNode.userId);
			zTree.selectNode(treeNode);	
			if(treeNode.type=="user"){
					showRMenu("node", event.clientX, event.clientY);
				}			
			OnClick(event,treeId,treeNode);
		}
	}
	
	//加载下拉框
    var loadSelect = function(url,obj,name,id){
		var data1 = "{\"userId\":\""+$("input[name=userId]").val()+"\"}";
		$.ajax({
			async : false,
			type : "post",
			url : url,
			data : {
				keyParams:getKeyParams(data1,keyParams),
				jsonObject:getJsonObject(data1)
			},
			success : function(data) {
				//重置多选下拉
				var json = eval('(' + data + ')'); 
				var content = json.data[obj];
				var text = '';
				var text_s = '';
				for (var item in content){
				if(content[item].roleGrantFlag=="0"){
						text_s += "<option value='"+content[item][id]+"'>"+content[item][name]+"</option>";
					}else{
						text += "<option value='"+content[item][id]+"'>"+content[item][name]+"</option>";
					}
				}
					$("#role").append(text);
					$("#role_text").append(text_s);
				for(var item in content){
					if(content[item].type=="Y"){
						$(".select_2").find("option[value="+content[item][id]+"]").prop("selected",true).change();
					}
				}
			},
			error : function(e) {
				console.log(e);
			}
		});
	}


	function OnClick(event, treeId, treeNode, clickFlag) {			
		if(treeNode.type == "org"){
			return true;
		}
		var $exampleMulti = $(".js-example-programmatic-multi").select2();
		 $exampleMulti.val(null).trigger("change");
		$("#role option").remove();
		$("#role_text option").remove();
		//点击树节点加载详细信息
		initInfo(treeNode);
		//加载下拉
		loadSelect(cas+"user/getRolesByUserId_Select","roleList","roleName","roleId");
		//点击加载右侧角色信息
		loadRoles(treeNode.userName);
		//loadRoles();
	}
	
	//点击菜单加载相详细信息
	function initInfo(treeNode) {
		var zNode = treeNode;

		var orgId, orgName;
		if (zNode.type == "org") {
			orgId = zNode.userId;
			orgName = zNode.trueName;
		}

		if (zNode.type == "user") {
			loadformByNode(zNode);
			if (zNode.sex == "1") {
				$("#sex").html("男");
			} else {
				$("#sex").html("女");
			}
			if (zNode.status == "1") {
				$("#status").html("正常");
			} else {
				$("#status").html("锁定");
			}
			orgId = zNode.getParentNode().userName;
			orgName = zNode.getParentNode().trueName;
		}
		$("input[name=orgId]").val(orgId);
		$("input[name=org]").val(orgName);
		$("#orgName").html(orgName);
		
		$("input[name=userId]").val(zNode.userId);
		$("input[name=userName]").val(zNode.userName);
		$("input[name=trueName]").val(zNode.trueName);
		$("input[name=birthday]").val(zNode.birthday);
		$("input[name=telphone]").val(zNode.telphone);
	}
	
	

	$(document).ready(function() {
		var url = cas + "user/getUsers";
		var objs = "userList";
		zTreeInit(url, objs);
	});
</script>



<select class="js-source-states2 fn-hide" id="rr">
    <optgroup label="业务角色" id="role">
    </optgroup>
    <optgroup label="授权角色" id="role_text">
    <option>111</option>
    </optgroup>
</select>
	
<div class="am-dialog addColordialog" id="roledialog">
<form id="selectForm">
    <div class="am-dialog-wrap">
        <div class="am-dialog-header">
            <h3 class="am-ft-center">分配角色</h3>
        </div>	
        <div class="s2-example">
           
            
            <div class="am-input">
                <select class="js-example-programmatic-multi js-states form-control select_2" name="roles" multiple="multiple"></select>
            </div>

            <div class="btn-group btn-group-sm" role="group" aria-label="Programmatic setting and clearing Select2 options">
                <button type="button" class="select_all btn btn-default">
                    全选
                </button>
            </div>

            <div class="btn-group btn-group-sm" role="group" aria-label="Programmatic setting and clearing Select2 options">
                <button type="button" name="selectReset" class="js-programmatic-multi-clear btn btn-default">
                    重置
                </button>
            </div>
			<div class=""fn-clear></div>
        </div>
        <div class="dialogBtn am-flexbox">
			<button type="button" class="am-flexbox-item btn am-button alterOv"
				am-bg="blue" onClick="javascript:save(this)">分配</button>
			<button type="button" class="am-flexbox-item btn am-button"
				id="closeDialog" am-bg="white">取消</button>				
		</div>
	</div>
	</form>
</div>	
<!--------------- Content start ----------------->
<div class="content-wrapper">
	<!-- Main content -->
	<section class="container-fluid">
		<div class="row">
			<!-------right content end--------->

			<!----- tree start ---->
			<div class="treeMenu userTreeMenu fn-left">
				<div class="zTreeDemoBackground left">
					<ul id="treeDemo" class="ztree"></ul>
				</div>
			</div>
			<!--右键菜单 start-->
			<div id="rMenu">
				<ul>
					<li onClick="open_psdialog(this)">修改密码</li>
					<li onClick="lock(this)">用户锁定</li>
					<li onClick="lock(this)">用户解锁</li>
					<li onClick="open_roledialog(this)">分配角色</li>
					<li onClick="addUser(this)">用户新增</li>
					<li onClick="editUser(this)">用户修改</li>
					<li onClick="delUser()">用户删除</li>
				</ul>
			</div>
			<!--右键菜单 end-->
			<!------------------改密 Dialog start--------------------->
	<form id="passwordform" method="post">
		<div class="am-dialog fn-hide" id="password_dialog">

			<div class="am-input needValInfo">
				<label class="fn-left">新密码：</label> <input class="fn-left" type="password"
					name="newPassWord" value="" placeholder="新密码" />
				<div class="fn-clear"></div>
			</div>

			<div class="am-input needValInfo">
				<label class="fn-left">确认密码：</label> <input class="fn-left"
					type="password" name="newPassWord2" value="" placeholder="确认密码" />
				<div class="fn-clear"></div>
			</div>

			<div class="dialogBtn am-flexbox">
				<button type="button" class="am-flexbox-item btn am-button alterOv"
					am-bg="blue" onClick="editPassWord()"></button>
				<button type="button" class="am-flexbox-item btn am-button"
					id="closeDialog" am-bg="white">取消</button>
				<div class="fn-clear"></div>
			</div>
		</div>
	</form>
	<script type="text/javascript">
		//打开密码模态层
		function open_psdialog(obj) {
			var nodes = zTree.getSelectedNodes();
			if(nodes&&nodes.length>0&&nodes[0].type=='org'){
				alertmsg("您选择的是单位,请选择一个用户!");
				return null;
			} 
			$('#password_dialog,.maskBg').fadeIn();
			$('.alterOv').html(obj.innerHTML);
		}
		function editPassWord(){
		var nodes = zTree.getSelectedNodes();
			var data1 = "{\"newPassWord\":\""+$("input[name=newPassWord]").val()+
			"\",\"newPassWord2\":\""+$("input[name=newPassWord2]").val()+
			"\",\"userName\":\""+$("input[name=userName]").val()+"\"}";
			var url = cas+"user/editPassWord";
			$.ajax({
				async : true,
				type : "post",
				url : url,
				data : {
					keyParams:getKeyParams(data1,keyParams),
					jsonObject:getJsonObject(data1)
				},
				success : function(data) {
					hideRMenu();
					alertmsg("操作成功！");						
				}
			});
		}
		
		
		//锁定 解锁用户
		function lock(obj){
			var data1 = "{\"userId\":\""+$("input[name=userName]").val()+"\"}";
			var url;
			if(obj.innerHTML=='锁定'){
				url=cas + "user/userlock";
			}
			if(obj.innerHTML=='解锁'){
				url=cas + "user/userunlock";
			}
			var nodes = zTree.getSelectedNodes();
			if(nodes&&nodes.length>0&&nodes[0].type=='org'){
				alertmsg("您选择的是单位,请选择一个用户!");
				return null;
			} 
			
			
			$.ajax({
				async : false,
				type : "post",
				url : url,
				data : {
					keyParams:getKeyParams(data1,keyParams),
					jsonObject:getJsonObject(data1)
				},
				success : function(data) {
					hideRMenu();
					alertmsg("操作成功！");	
					var url = cas + "user/getUsers";
					var objs = "userList";
					//重新加载树
					zTreeInit(url, objs);
					//加载树节点，选中状态不变
					setTimeout("initZtreeSelect('userId','"+nodes[0].userId+"')",100);					
				}
			});
			
			
		}	
	</script>
	<!---------------------Dialog end-------------------->
			<!----- tree end ----->

			<div class="nextTable userNextTable  col-lg-10 fn-right">
				<div class="rightNav-titl">
					<h2 class="am-ft-12 am-ft-darkgray fn-left">详细信息</h2>
					<p class="titlline"></p>
				</div>
				<div class="col-lg-8" style="padding-left: 0">
					<div class="table-responsive PrivTable">
						<table class="table table-hover table-striped table-bordered">
							<tr>
							<th width="20%" align="center" valign="middle" bgcolor="#CCCCCC"
								scope="row">用户名</th>
							<td align="left" valign="middle" id="userName"></td>
						</tr>
						<tr>
							<th align="center" valign="middle" scope="row">真实姓名</th>
							<td align="left" valign="middle" id="trueName"></td>
						</tr>
						<tr>
							<th align="center" valign="middle" scope="row">性别</th>
							<td align="left" valign="middle" id="sex"></td>
						</tr>
						<tr>
							<th align="center" valign="middle" scope="row">出生日期</th>
							<td align="left" valign="middle" id="birthday"></td>
						</tr>
						<tr>
							<th align="center" valign="middle" scope="row">联系方式</th>
							<td align="left" valign="middle" id="telphone"></td>
						</tr>
						<tr>
							<th align="center" valign="middle" scope="row">注册时间</th>
							<td align="left" valign="middle" id="registTime"></td>
						</tr>
						<tr>
							<th align="center" valign="middle" scope="row">单位</th>
							<td align="left" valign="middle" id="orgName"></td>
						</tr>
						<tr>
							<th align="center" valign="middle" scope="row">状态</th>
							<td align="left" valign="middle" id="status"></td>
						</tr>
							<tr>
								<td colspan="3">
									<button type="button" class="btn btn-info fn-left" onclick="addUser(this)">新增</button>
									<button type="button" class="btn btn-primary fn-left" onclick="editUser(this)">修改</button>
									<button type="button" class="btn fn-left btn-danger" onclick="delUser()">删除</button>
								</td>
							</tr>
						</table>
					</div>
				</div>
				<div class="col-lg-4 allotRole">
					<!-- tab start-->
					<div class="am-tab Tabnav">
						<div class="am-tab-item" data-tab="selected">业务角色</div>
						<div class="am-tab-item" data-tab="">授权角色</div>
					</div>

					<div id="in-nav1" class="TabnavInfo fn-show">
						<ul>
							<li class="tabnavTitl" id='role_p'><span class="fn-left">角色</span><a href="javascript:;"
								class="fn-right" id="addrole" onclick="open_roledialog(this)">分配角色</a></li>
							
							<li class="tabnavTitl" id='priv_p'>拥有权限</li>
							
							<li class="fn-clear"></li>
						</ul>
					</div>
					<div id="in-nav2" class="TabnavInfo fn-hide">
						<ul>
							<li class="tabnavTitl" id='role_s'><span class="fn-left">授权角色</span><a href="javascript:;"
								class="fn-right" onclick="open_roledialog(this)">分配角色</a></li>
							
							<li class="tabnavTitl" id='priv_s'>授权角色拥有权限</li>
							
							<li class="fn-clear"></li>
						</ul>
					</div>
					<div class="fn-clear"></div>
				</div>
				<div class="fn-clear"></div>
			</div>
			<!-------right content end--------->
			<div class="fn-clear"></div>
		</div>
	</section>
</div>
<!--------------- Content start ----------------->

<!------------------用户新增修改 Dialog start--------------------->
<form id="myform" method="post">
<div class="am-dialog addColordialog" id="userdialog">
    <div class="am-dialog-wrap">
        <div class="am-dialog-header">
            <h3 class="am-ft-center">用户修改</h3>
        </div>
        <div class="am-input">
				<label class="fn-left">用户名：</label> <input class="fn-left"
					type="text" id = "userName" name="userName" value="" placeholder="用户名" />
					<input class="fn-left" name="userId" type="hidden"/>
				<div class="fn-clear"></div>
			</div>
			<p class="errowNote am-ft-red am-ft-12 fn-hide">
				<span class="fn-left fn-block">*</span>您填写的格式错误，请重新输入
			</p>
			<div class="am-input">
				<label class="fn-left">真实姓名：</label> <input class="fn-left"
					type="text" name="trueName" value="" placeholder="真实姓名" />
				<div class="fn-clear"></div>
			</div>
			<p class="errowNote am-ft-red am-ft-12 fn-hide">
				<span class="fn-left fn-block">*</span>您填写的格式错误，请重新输入
			</p>

			<div class="am-input">
				<label class="fn-left">出生日期：</label> <input class="fn-left"
					type="text" name="birthday" onclick="laydate()" readonly="readonly" value="" placeholder="出生日期" />
				<div class="fn-clear"></div>
			</div>
			<p class="errowNote am-ft-red am-ft-12 fn-hide">
				<span class="fn-left fn-block">*</span>您填写的格式错误，请重新输入
			</p>

			<div class="am-input">
				<label class="fn-left">性别：</label>
				<select name = 'sex' style="width:200px">
					<option value = "1">男</option>
					<option value = "0">女</option>
				</select>
				<div class="fn-clear"></div>
			</div>

			<div class="am-input">
				<label class="fn-left">联系方式：</label> <input class="fn-left"
					type="text" name="telphone" value="" placeholder="联系方式" />
				<div class="fn-clear"></div>
			</div>

			<div class="am-input">
				<label class="fn-left">单位：</label> <input class="fn-left"
					type="text" name="org" value="" placeholder="单位" disabled="disabled"/>
					<input class="fn-left"
					type="text" name="orgId" value="" style="display:none"/>
				<div class="fn-clear"></div>
			</div>

			<div class="dialogBtn am-flexbox">
				<button type="button" id="usave" class="am-flexbox-item btn am-button alterOv"
					am-bg="blue" onClick="javascript:save(this)"></button>
				<button type="button" class="am-flexbox-item btn am-button"
					id="closeDialog" am-bg="white">取消</button>
					<input type="reset" name="reset" style="display: none;" />
				<div class="fn-clear"></div>
			</div>
    </div>
</div>
</form>

<script>
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
</script>
<script type="text/javascript">
		
		function findUserName(userName){
			var flag = true ; 
			var url1 = cas + "user/getUsers";
				$.ajax({
				async : false,
				type : "post",
				url : url1,
				data : {
					keyParams:getKeyParams("{}",keyParams),
					jsonObject:getJsonObject("{}")
				},
				success : function(data) {
					var json=$.parseJSON(data);
					var array = json.data.userList;
					for (var key in array){
						if(array[key].type == "user" && userName == array[key].userName){
							flag = false
						}
					}
					
				}
			});
			return flag;
		}
		
		function del(){
			$("#deldialog,.maskBg").fadeOut();
			var data1 = "{\"userName\":\""+$("input[name=userName]").val()+"\"}";
				console.log(data1);
				$.ajax({
					async : true,
					type : "post",
					url : cas+"user/deleteUserById",
					data : {
						keyParams:getKeyParams(data1,keyParams),
						jsonObject:getJsonObject(data1)
					},
					success : function(data) {
						var json=$.parseJSON(data);
						if(json.code==1){						
							var url = cas+"user/getUsers";
							//重新加载树
							zTreeInit(url, "userList");
							var userName =eval('(' + data1 + ')').userName;
							//加载树节点，选中状态不变
							setTimeout("initZtreeSelect('userName','"+userName+"')",100);
						}
					alertmsg("操作成功！");										
					},
					error : function(e) {
						console.log(e);
					}
				});
		}
		//用户新增、修改表单提交
		function save(obj) {
			var msg = obj.innerHTML;
			var url = '';
			if (msg == '新增') {
				url = cas+"user/addUser";
				var a = findUserName($("input[name = userName]").val());
				if(!findUserName($("input[name = userName]").val())){
					alertmsg("用户名已经被使用");
					return null;
				}
			} else {
				url = cas+"user/updateUser";
			}
			var data1 = $("#myform").serializeJson();
			if(msg=="分配"){
				//重置多选下拉
				var roleIds = $("select[name=roles]").val();
				if( roleIds == null){
					alert("请选择角色！");
					return null;
				}
				var roleId = roleIds.toString();
				var userId=$("input[name=userId]").val();
				data1 = "{\"roleIds\":\""+roleId+"\",\"userId\":\""+userId+"\",\"userName\":\""+$("input[name=userName]").val()+"\"}";
				url=cas+"user/insertRoleForUser";
			}
			
			$.ajax({
				async : true,
				type : "post",
				url : url,
				data : {
					keyParams:getKeyParams(data1,keyParams),
					jsonObject:getJsonObject(data1)
				},
				success : function(data) {
					var json=$.parseJSON(data);
					if(json.code==1){						
						var url = cas+"user/getUsers";
						//重新加载树
						zTreeInit(url, "userList");
						var userName =eval('(' + data1 + ')').userName;
						//加载树节点，选中状态不变
						setTimeout("initZtreeSelect('userName','"+userName+"')",100);
					}
					alertmsg("操作成功！");								
				}
			});
		}				
	</script>
<!-------end--------->

<script type="text/javascript">
	//打开新增修改模态层
	function open_userDialog(obj){
		 $('#userdialog').fadeIn();
		 $('.maskBg').fadeIn();
		 $('#usave').html(obj.innerHTML);
	}
	
	function addUser(obj){
		$("input[name=userName]").removeAttr("disabled");
		var nodes = zTree.getSelectedNodes();
		if(nodes&&nodes.length>0){
			if(nodes[0].type == "org"){
				$("input[name=orgId]").val(nodes[0].userName);
				$("input[name=org]").val(nodes[0].trueName);
			}else{
				$("input[type=reset]").trigger("click");
				$("input[name=orgId]").val(nodes[0].getParentNode().userName);
				$("input[name=org]").val(nodes[0].getParentNode().trueName);
			}
			open_userDialog(obj);
		}else{
			alertmsg("请选择用户");			
		}
	}
	
	function editUser(obj){
		$("input[name=userName]").attr("disabled","disabled");
		var nodes = zTree.getSelectedNodes();
		if(nodes&&nodes.length>0){
			if(nodes[0].type=='user'){
				initInfo(nodes[0]);
				open_userDialog(obj);
			}else{
				alertmsg("您选择的是单位，请选择用户修改");
			}
			
		}else{
			alertmsg("请选择用户");
		}
	}
	
	function delUser(){
		var nodes = zTree.getSelectedNodes();
		if(nodes&&nodes.length>0){
			delete_dialog();		
		}else{
			alertmsg("请选择树节点");	
		}
	}
</script>

<!-- 尾部 -->
<jsp:include page="../../public/footstyle.jsp" />