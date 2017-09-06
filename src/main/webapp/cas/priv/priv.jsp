<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

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
				idKey : "privId", // id编号命名
				pIdKey : "pPrivId" // 父id编号命名
			},
			key : {
				name : "privName"
			}
		},
		callback : {
			onRightClick : OnRightClick,
			onClick : OnClick
		}
	};
	
	function OnClick(event, treeId, treeNode, clickFlag) {
		console.log(" 节点id是：" + treeNode.privId + ", 节点文本是："
						+ treeNode.privName);	
		
		//点击树节点加载详细信息
		initInfo(treeNode);
		
		//loadRoles();
	}
	
	//点击菜单加载相详细信息
	function initInfo(treeNode) {
		var zNode = treeNode;
		var pNode = zNode.getParentNode();
			if(zNode.menu=='Y'){
				$("#menu").prop("checked",true);
			}else{
				$("#menu").prop("checked",false);
			}
			if(zNode.business=='Y'){
				$("#business").prop("checked",true);
			}else{
				$("#business").prop("checked",false);
			}
		$("#privName").html(zNode.privName);
		$("#privId").html(zNode.privId);
		$("#pPrivId").html(zNode.pPrivId);
		if(pNode == null){
			$("#pName").html("");
		}else{
			$("#pName").html(pNode.privName);
		}
		$("#url").html(zNode.pUrl);
		$("#appId").html(zNode.appName);
		console.log(zNode.appId);
		console.log(zNode.appName);
	}
	
	$(document).ready(function() {
		var url = cas +"priv/getPrivs";
		var objs = "privList";
		zTreeInit(url, objs);
	});
</script>

	<!--------------------- Right content start  ------------------------->
	<div class="content-wrapper">
		<section class="container-fluid">
		<div class="row">
		
			<!----- tree start ---->
			<div class="treeMenu fn-left">
				<div class="zTreeDemoBackground left">
					<ul id="treeDemo" class="ztree"></ul>
					<div class="fn-clear"></div>
				</div>
				<div class="fn-clear"></div>
			</div>
			<!----- tree end ---->
			<!------------------右键菜单 start--------------------->
			<div id="rMenu">
				<ul>
					<li onClick="add_dialog(this)">新增组件</li>
					<li onClick="remove_priv(this)">删除组件</li>
					<li onClick="update(this)">修改组件</li>
				</ul>
			</div>
			<!------------------右键菜单 end--------------------->
			
			<!----------------- Left node start ------------------>
			<!-- <div class="leftMenu">
				<div class="zTreeDemoBackground left">
					<ul id="treeDemo" class="ztree"></ul>
				</div>
			</div> -->
			<!----------------- Left node end ------------------>

			<!----------------- Rightnav start ------------------>
			<div class="nextTable col-lg-10 fn-right">
				<div class="rightNav-titl">
					<h2 class="am-ft-12 am-ft-darkgray fn-left">组件信息</h2>
					<p class="titlline"></p>
				</div>
				<div class="col-lg-10" style="padding-left: 0">
					<div class="table-responsive PrivTable">
					<table class="table table-hover table-striped table-bordered">
						<tr>
							<th width="20%" align="center" valign="middle" bgcolor="#CCCCCC"
								scope="row">菜单项</th>
							<td width="80%" align="left" valign="middle">
							<input name="turnOn1" id="treeId" type="hidden"/>
							<input type="checkbox" id="menu" class="switch-input"  disabled="disabled" />
							<label for="menu"></label></td>
						</tr>
						<tr>
							<th width="20%" align="center" valign="middle" bgcolor="#CCCCCC"
								scope="row">普通业务项</th>
							<td width="80%" align="left" valign="middle">
							<input type="checkbox" id="business" class="switch-input" disabled="disabled"/>
							<label for="business"></label></td>
						</tr>
						<tr>
							<th align="center" valign="middle" scope="row">父节点</th>
							<td align="left" valign="middle" id="pPrivId" style="display: none"></td>
							<td align="left" valign="middle" id="pName"></td>
						</tr>
						<tr>
							<th align="center" valign="middle" scope="row">应 用</th>
							<td align="left" valign="middle" id="appId"></td>
						</tr>
						<tr>
							<th align="center" valign="middle" scope="row">路 径</th>
							<td align="left" valign="middle" id="url"></td>
						</tr>
						<tr>
							<th align="center" valign="middle" scope="row">名 称</th>
							<td align="left" valign="middle" id="privName"></td>
						</tr>
						<tr>
							<td colspan="2">
								<button type="button" class="btn btn-primary fn-left alterBtn" onclick="update(this)">修改</button>
                                <button type="button" class="btn fn-left btn-danger" id="delete">删除</button>
							</td>
						</tr>
					</table>
					</div>
				</div>
				<div class="fn-clear"></div>
			</div>
			<!----------------- Rightnav end ------------------>
			</div>
		</section>
	</div>

	<!------------------用户新增修改 Dialog start--------------------->
	<form id="myform" method="post">
		<div class="am-dialog addColordialog" id="userdialog">
			<div class="am-dialog-wrap">
			<div class="am-dialog-header">
            	<h3 class="am-ft-center">应用信息</h3>
       		</div>
			<div class="am-input needValInfo">
				<input name="privId" type="hidden"/>
				<label class="fn-left">菜单项</label> <input type="checkbox"
					id="turnOn3" name="privAttrValue1" class="switch-input" id="menu"/>
					<label class="swichInput" for="turnOn3"></label>
			</div>
			<div class="am-input needValInfo">
				<label class="fn-left">普通业务项</label> <input name="privAttrValue2" type="checkbox"
					id="turnOn4" class="switch-input" id="business" />
					<label class="swichInput" for="turnOn4"></label>
			</div>
			<div class="am-input needValInfo">
				<label class="fn-left">父节点</label> <input class="fn-left"
					type="hidden" name="pPrivId" value=""  placeholder="父节点"/>
					<input type="text" value="" name="pName" disabled="disabled" />
				<div class="fn-clear"></div>
			</div>

			<div class="am-input needValInfo">
				<label class="fn-left">应 用</label> 
				<!-- <input class="fn-left" type="text" name="appId" value="" placeholder="应 用"/> -->
				<select name="appId">
					<option ng-repeat="item in items" value="{{item.appId}}" >{{item.appName}}</option>
				</select>
				<div class="fn-clear"></div>
			</div>

			<div class="am-input needValInfo">
				<label class="fn-left">路 径</label> <input class="fn-left"
					type="text" name="url" value="" placeholder="路 径"/>
				<div class="fn-clear"></div>
			</div>

			<div class="am-input needValInfo">
				<label class="fn-left">名 称</label> <input class="fn-left"
					type="text" name="privName" value="" placeholder="名 称"/>
				<div class="fn-clear"></div>
			</div>

			<div class="dialogBtn am-flexbox">
				<button type="button" class="am-flexbox-item btn am-button alterOv"
					am-bg="blue" onclick="javascript:save(this)"></button>
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
			var msg = obj.innerHTML
			var url = '';
			if (msg == '新增' || msg == '新增组件') {
				url = cas+"priv/addPriv";
			} else{
				url = cas+"priv/updatePrivAttrByPrivId";
			}
			var jsonObject = $("#myform").serializeJson();
			$.ajax({
				async : true,
				type : "post",
				url : url,
				data : {
					keyParams:getKeyParams(jsonObject,keyParams),
					jsonObject:getJsonObject(jsonObject)
				},
				success : function(data) {
					var json=$.parseJSON(data);
					if(json.code==1){						
						var url = cas+"priv/getPrivs";
						//重新加载树
						zTreeInit(url, "privList");
						var privId =eval('(' + jsonObject + ')').privId;
						//加载树节点，选中状态不变
						setTimeout("initZtreeSelect('privId','"+privId+"')",100);
					}
					alertmsg(json.msg);
				}
			});
		}
		
		function del(obj) {
			var msg = obj.innerHTML
			var url = cas+"priv/deletePrivByPrivId";
			var nodes = zTree.getSelectedNodes()[0].privId;
			$.ajax({
				async : true,
				type : "post",
				url : url,
				data : {
					keyParams:getKeyParams("{\"privId\":\""+nodes+"\"}",keyParams),
					jsonObject:getJsonObject("{\"privId\":\""+nodes+"\"}")
				},
				success : function(data) {
					var json=$.parseJSON(data);
					var url = cas +"priv/getPrivs";
					var objs = "privList";
					zTreeInit(url, objs);
					
					$("#menu").prop("checked",false);
					$("#business").prop("checked",false);
					$("#privName").html("");
					$("#privId").html("");
					$("#pPrivId").html("");
					$("#url").html("");
					$("#appId").html("");		
					alertmsg(json.msg);			
				}
			});
		}
	</script>
	<!---------------------Dialog end-------------------->
<script type="text/javascript">
	//打开新增修改模态层
	function open_dialog(obj){
		 $('#userdialog').fadeIn();
		 $('.maskBg').fadeIn();
		 $('.alterOv').html(obj.innerHTML);
	}
	
	$(function() {
		$("#delete").click(function() {
			var zNode = zTree.getSelectedNodes()[0];
				var children=zNode.children==null?0:zNode.children;
					
				if (children.length>0) {
					alertmsg("存在下级组件，请先删除下级所有组件");
					return
				}
			delete_dialog();				
		})
	})
	
	function remove_priv(obj){
				var zNode = zTree.getSelectedNodes()[0];
				var children=zNode.children==null?0:zNode.children;
					
				if (children.length>0) {
					alertmsg("存在下级组件，请先删除下级所有组件");
					return
				}
				delete_dialog();
			}
	
	function update(obj){
					var nodes = zTree.getSelectedNodes();
						if(nodes&&nodes.length>0){
								initInfo(nodes[0]);
								var zNode = nodes[0];
								var pNode = nodes[0].getParentNode()
								if(zNode.menu=='Y'){
									$("#turnOn3").prop("checked",true);
								}else{
									$("#turnOn3").prop("checked",false);
								}
								if(zNode.business=='Y'){
									$("#turnOn4").prop("checked",true);
								}else{
									$("#turnOn4").prop("checked",false);
								}
								$("input[name='privName']").val(zNode.privName);
								$("input[name='privId']").val(zNode.privId);
								$("input[name='pPrivId']").val(zNode.pPrivId);
								if(pNode == null){
									$("input[name='pName']").val("");
								}else{
									$("input[name='pName']").val(pNode.privName);
								}
								$("input[name='url']").val(zNode.pUrl);
								$("input[name='appId']").val(zNode.appName);
								open_dialog(obj);
						}else{
							alert("请选择用户");			
						}
	}
	function add_dialog(obj){
				var nodes = zTree.getSelectedNodes();
				var zNode = nodes[0];
				$("input[name='pPrivId']").val(zNode.privId);
				$("input[name='pName']").val(zNode.privName);
				$("#turnOn3").prop("checked",false);
				$("#turnOn4").prop("checked",false);
				$("input[name='url']").val("");
				$("input[name='privName']").val("");
				open_dialog(obj);
			}
</script>
<!-- 删除模态层 -->
<div class="am-dialog addColordialog" id="deldialog">
    <div class="am-dialog-wrap">
        <div class="am-dialog-header">
            <h3 class="am-ft-center">是否删除</h3>
        </div>
        <div class="dialogBtn am-flexbox">
				<button type="button" class="am-flexbox-item btn am-button alterOv1"
					am-bg="blue" onclick="javascript:del(this)">确定</button>
				<button type="button" class="am-flexbox-item btn am-button"
					id="closeDialog" am-bg="white">取消</button>
					<input type="reset" name="reset" style="display: none;" />
				<div class="fn-clear"></div>
			</div>
    </div>
</div>
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
        $(".addColordialog").center();

        $('.alterBtn').click(function(){
            $('.maskBg,#userdialog').fadeIn();
        });
        $('#closeDialog,.alterOv,.alterOv1').click(function(){
            $('.maskBg,#userdialog,#deldialog').fadeOut();
        });
        
        $('html,body').niceScroll({
	        cursorcolor: "rgb(165, 171, 179)",
	        cursoropacitymax: 1,
	        touchbehavior: false,
	        cursorwidth: "10px",
	        cursorborder: "0",
	        cursorborderradius: "5px",
	        autohidemode: false
	    });
</script>

<!-- 尾部 -->
<jsp:include page="../../public/footstyle.jsp" />
