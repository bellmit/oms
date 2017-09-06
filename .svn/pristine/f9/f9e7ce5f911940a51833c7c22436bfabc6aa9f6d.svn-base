<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<%-- <!-- 头部 -->
<jsp:include page="../../public/headpage.jsp" /> --%>
<!--Ztree-->
<jsp:include page="../../public/ztreeStyle.jsp" />
<!--遮罩 start-->

<!--遮罩 end-->
<script type="text/javascript">
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
				idKey : "menuId", // id编号命名
				pIdKey : "pMenuId" // 父id编号命名
			},
			key : {
				name : "menuName"
			}
		},
		callback : {
			onRightClick : OnRightClick,
			onClick : OnClick
		}

	};

	function OnClick(event, treeId, treeNode, clickFlag) {
		$(".select_2").find("option[value="+treeNode.privId+"]").prop("selected",true).change();	
		if(treeNode.type == "org"){
			return true;
		}
		
		//点击树节点加载详细信息
		initInfo(treeNode);
		
		//loadRoles();
	}
	
	//点击菜单加载相详细信息
	function initInfo(treeNode) {
		var zNode = treeNode;
		var pNode = zNode.getParentNode();
		var a = zNode.menuName;
		$("#menuName").text(zNode.menuName);
		if( pNode == null ){
			$("#pMenuId").text("无");
			$("input[name=pMenuId]").val(zNode.menuId);
			$("input[name=pMenuName]").val(zNode.menuName);
		}else{
			$("#pMenuId").text(pNode.menuName);
			$("input[name=pMenuId]").val(pNode.menuId);
			$("input[name=pMenuName]").val(pNode.menuName);
		}
		$("input[name=privName]").val(zNode.privName);
		$("input[name=menuId]").val(zNode.menuId);
		$("input[name=privId]").val(zNode.privId);
		$("input[name=sortNo]").val(zNode.sortNo);
		$("input[name=menuName]").val(zNode.menuName);
		
		$("#sortNo").text(zNode.sortNo);
		$("#privId").text(zNode.privName);
		if (zNode.folderFlag == 'Y') {
			$("#turnOn1").prop("checked",true);
			$("#turnOn2").prop("checked",true);
		} else {
			$("#turnOn1").prop("checked",false);
			$("#turnOn2").prop("checked",false);
		}
		
	}
	//加载下拉框
    var loadSelect = function(url,obj,name,id){
		var data1 = "{}";
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
					text_s += "<option value='"+content[item][id]+"'>"+content[item][name]+"</option>";
					text += "<option value='"+content[item][id]+"'>"+content[item][name]+"</option>";
				}
					$("#role").append(text);
			},
			error : function(e) {
				console.log(e);
			}
		});
	}
	

	$(document).ready(function() {
		var url = cas + "menu/getMenus";
		var objs = "menuList";
		zTreeInit(url, objs);
		loadSelect(cas + "priv/getPrivs_select","privList_select","privName","privId");
	});
</script>

<select class="js-source-states2 fn-hide" id="rr">
	<optgroup label="组件" id="role">
	</optgroup>
</select>

<!--------------- Content start ----------------->
<div class="content-wrapper">
	<!-- Main content -->
	<section class="container-fluid">
		<div class="row">
			<!-------right content end--------->

			<!----- tree start ---->
			<div class="treeMenu fn-left">
				<div class="zTreeDemoBackground left">
					<ul id="treeDemo" class="ztree"></ul>
				</div>
			</div>

			<!----- tree end ----->
			<div class="nextTable col-lg-10 fn-right">
				<div class="rightNav-titl">
					<h2 class="am-ft-12 am-ft-darkgray fn-left">详细信息</h2>
					<p class="titlline"></p>
				</div>
				<div style="padding-left: 0">
					<div class="table-responsive PrivTable">
						<table class="table table-hover table-striped table-bordered">
							<tr>
								<th width="20%" align="center" valign="middle" bgcolor="#CCCCCC"
									scope="row">父节点</th>
								<td align="left" valign="middle" id="pMenuId"></td>
							</tr>
							<tr>
								<th align="center" valign="middle" scope="row">菜单名称</th>
								<td align="left" valign="middle" id="menuName"></td>
							</tr>
							<tr>
								<th align="center" valign="middle" scope="row">是否是菜单夹</th>
								<td align="left" valign="middle" id="birthday"><input
									id="folderFlag" name="folderFlag" type="hidden" /> <input
									type="checkbox" id="turnOn1" class="switch-input"
									disabled="disabled" /> <label for="turnOn1"></label></td>
							</tr>
							<tr>
								<th align="center" valign="middle" scope="row">排序号</th>
								<td align="left" valign="middle" id="sortNo"></td>
							</tr>
							<tr>
								<th align="center" valign="middle" scope="row">组件</th>
								<td align="left" valign="middle" id="privId"></td>
							</tr>
							<tr>
								<td colspan="3">
									<button type="button" class="btn btn-info fn-left"
										onclick="addMenu(this)">新增</button>
									<button type="button" class="btn btn-primary fn-left"
										onclick="editMenu(this)">修改</button>
									<button type="button" class="btn fn-left btn-danger"
										onclick="delMenu()">删除</button>
								</td>
							</tr>
						</table>
					</div>
				</div>

				<!-------right content end--------->
				<div class="fn-clear"></div>
			</div>
	</section>
</div>
<!--------------- Content start ----------------->
<!--右键菜单 start-->
<div id="rMenu">
	<ul>
		<li onClick="addMenu(this)">新增菜单</li>
		<li onClick="editMenu(this)">修改菜单</li>
		<li onClick="delMenu()">删除菜单</li>
	</ul>
</div>
<!--右键菜单 end-->
<!------------------用户新增修改 Dialog start--------------------->
<form id="myform" method="post">
	<div class="am-dialog addColordialog" id="menudialog">
		<div class="am-dialog-wrap">
			<div class="am-dialog-header">
				<h3 class="am-ft-center">菜单信息</h3>
			</div>
			<div class="am-input needValInfo">
				<label class="fn-left">父节点：</label> <input class="fn-left"
					type="text" name="pMenuName" value="" disabled="disabled"
					placeholder="父节点" /> <input type="hidden" value="" name="pMenuId" />
				<input type="hidden" value="" name="menuId" />
				<div class="fn-clear"></div>
			</div>
			<div class="am-input needValInfo">
				<label class="fn-left">菜单名称：</label> <input class="fn-left"
					type="text" name="menuName" value="" placeholder="菜单名称" />
				<div class="fn-clear"></div>
			</div>

			<div class="am-input needValInfo">
				<label class="fn-left">菜单夹：</label> <input id="folderFlag"
					name="folderFlag" type="hidden" /> <input type="checkbox"
					id="turnOn2" name="folderFlag" class="switch-input" /> <label
					style="width:56px" for="turnOn2"></label>
				</td>
				<div class="fn-clear"></div>
			</div>

			<div class="am-input needValInfo">
				<label class="fn-left">排序号：</label> <input class="fn-left"
					type="text" name="sortNo" value="" placeholder="升序排列" />
				<div class="fn-clear"></div>
			</div>

			<div class="am-input needValInfo">
				<label class="fn-left">组件：</label> <input class="fn-left"
					type="text" id="privName" disabled="disabled" value="一级组件" placeholder="一级组件" style="display: none" />
				<div class="s2-example s2-example2" style="display: none">
					<div class="am-input">
						<select
							class="js-example-programmatic-multi js-states form-control select_2"
							name="select"></select> <input type="hidden" name="privId" />
					</div>


					<div class="" fn-clear></div>
				</div>
				<div class="fn-clear"></div>
			</div>


			<div class="dialogBtn am-flexbox">
				<button type="button" class="am-flexbox-item btn am-button alterOv"
					id="msave" am-bg="blue" onClick="javascript:save(this)"></button>
				<button type="button" class="am-flexbox-item btn am-button"
					id="closeDialog" am-bg="white">取消</button>
				<input type="reset" name="reset" style="display: none;" />
				<div class="fn-clear"></div>
			</div>
		</div>
	</div>
</form>

<script type="text/javascript">
		//用户新增、修改表单提交
		function save(obj) {
			var value = $("select[name=select]").val().toString() ;
			$("input[name=privId]").val(value);
			var msg = obj.innerHTML;
			var url = '';
			if (msg.indexOf('新增')>=0) {
				url = cas+"menu/addMenu";
			}
			if(msg.indexOf('修改')>=0) {
				url = cas+"menu/updateMenu";
			}
			var data1 = $("#myform").serializeJson();
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
						var url = cas+"menu/getMenus";
						//重新加载树
						zTreeInit(url, "menuList");
						var menuName =eval('(' + data1 + ')').menuName;
						//加载树节点，选中状态不变
						setTimeout("initZtreeSelect('menuName','"+menuName+"')",100);
					}
					alertmsg(json.msg);							
				}
			});
		}
		
		
	</script>
<!-------end--------->

<script type="text/javascript">
	//打开新增修改模态层
	function open_dialog(obj){
		 $('#menudialog').fadeIn();
		 $('.maskBg').fadeIn();
		 $('#msave').html(obj.innerHTML);
	}
	
	function addMenu(obj){
		var nodes = zTree.getSelectedNodes();		
		$("input[type=reset]").trigger("click");
		if(nodes&&nodes.length>0){
			var zNode = nodes[0];
			var pNode = nodes[0].getParentNode();
			var level=nodes[0].level;
			
			if(level==0){
				$("input[name=pMenuId]").val(zNode.menuId);
				$("input[name=pMenuName]").val(zNode.menuName);
			}else if(level==1){
				$("input[name=pMenuId]").val(zNode.menuId);
				$("input[name=pMenuName]").val(zNode.menuName);
			}else{
				$("input[name=pMenuId]").val(pNode.menuId);
				$("input[name=pMenuName]").val(pNode.menuName);
			}
			
			$("input[name=privName]").val(zNode.privName);
			$("input[name=privId]").val(zNode.privId);
			$(".s2-example2").show();
			$("#privName").hide();
			open_dialog(obj);
		}else{
			$("input[name=pMenuId]").val(0);
			$("input[name=pMenuName]").val("一级菜单");
			$("input[name=privId]").val(0);
			$("#privName").show();
			$(".s2-example2").hide();
			open_dialog(obj);
		}
	}
	
	function editMenu(obj){
		var nodes = zTree.getSelectedNodes();
		$(".s2-example2").show();
		$("#privName").hide();
		if(nodes&&nodes.length>0){			
			initInfo(nodes[0]);
			open_dialog(obj);
		}else{
			alertmsg("请选择一个节点");
		}
	}
	
	function delMenu(){
		var nodes = zTree.getSelectedNodes();
		if(nodes&&nodes.length>0){
			delete_dialog();		
		}else{
			alertmsg("请选择树节点");	
		}
	}
	
	function del(){
		var nodes = zTree.getSelectedNodes();
		if(nodes&&nodes.length>0){
			if(nodes[0].children!=null&&nodes[0].children.length>0){
				alertmsg("存在子节点删除失败!");
			}else{
				var url = cas+"menu/deleteMenu";
				$.post(url,{
					keyParams:getKeyParams("{\"menuId\":\""+nodes[0].menuId+"\"}",keyParams),
					jsonObject:getJsonObject("{\"menuId\":\""+nodes[0].menuId+"\"}")
				},function(data){
				var url = cas+"menu/getMenus";
				//重新加载树
				zTreeInit(url, "menuList");
				var json=$.parseJSON(data);
				alertmsg(json.msg);
			})
			}			
		}else{
			alertmsg("请选择树节点");	
		}
	}
</script>


<jsp:include page="../../public/footstyle.jsp" />

<script>
	//tab
	$('.Tabnav').children('.am-tab-item').eq(0).click(function() {
		$(this).attr({
			'data-tab' : 'selected'
		}).siblings('.am-tab-item').removeAttr('data-tab');
		$('#in-nav1').show();
		$('#in-nav2').hide();
	});
	$('.Tabnav').children('.am-tab-item').eq(1).click(function() {
		$(this).attr({
			'data-tab' : 'selected'
		}).siblings('.am-tab-item').removeAttr('data-tab');
		$('#in-nav2').show();
		$('#in-nav1').hide();
	});
</script>

<!-- 尾部 -->
<jsp:include page="../../public/footstyle.jsp" />
