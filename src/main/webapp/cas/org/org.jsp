<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>

<!--Ztree-->
<jsp:include page="../../public/ztreeStyle.jsp" />
<!--遮罩 start-->

<!--遮罩 end-->

<!--------------- Content start ----------------->
<div class="content-wrapper">
	<!-- Main content -->
	<section class="container-fluid">
		<div class="row">
			<!----------------- Left node start ------------------>
			<!----- tree start ---->
			<div class="treeMenu orgTreeMenu fn-left ">
				<div class="zTreeDemoBackground left">
					<ul id="treeDemo" class="ztree"></ul>
				</div>
			</div>

			<!----- tree end ---
			-->
			<!----------------- Left node end ------------------>

			<!----------------- Rightnav start ------------------>


			<div class="nextTable orgNextTable  col-lg-10 fn-right">
				<div class="rightNav-titl">
					<h2 class="am-ft-12 am-ft-darkgray fn-left">详细信息</h2>
					<p class="titlline"></p>
				</div>
				<div class="table-responsive PrivTable">
					<table class="table table-hover table-striped table-bordered">
						<tr ng-model="items">
							<th width="20%" align="center" bgcolor="#CCCCCC" valign="middle"
								scope="row">上级单位</th>
							<td width="80%" align="left" valign="middle" id="pOrgName">
								<!-- {{items.parentorg.name}} -->
							</td>
						</tr>

						<tr ng-model="items">
							<th align="center" valign="middle" scope="row">单位名称</th>
							<td align="left" valign="middle" id="name">
								<!-- {{items.org.name}} -->
							</td>
						</tr>
						<tr ng-model="items">
							<th align="center" valign="middle" scope="row">单位类型</th>
							<td align="left" valign="middle" id="orgType">
								<!-- {{items.org.name}} -->
							</td>
						</tr>
						<input class="fn-left" type="hidden" name="children"
							placeholder="xxxx" id="children" value="" />
						<tr class="partTr">
							<!-- 							<td colspan="3">
								<button type="button" class="btn fn-right btn-danger"
									id="delete">删除</button>
								<button type="button" class="btn fn-left btn-danger "
									id="update">修改</button>
							</td> -->
							<td colspan="3">
								<button type="button" class="btn btn-primary fn-left"
									id="update"">修改</button>
								<button type="button" class="btn fn-left btn-danger"
									onClick="removeOrg(this);">删除</button>
							</td>

						</tr>
					</table>
					<!-- </div>
					<div class="handleBtn am-flexbox">
						<button type="button" class="am-flexbox-item btn am-button "
							am-bg="blue" id="update">修改</button>
						<button type="button" class="am-flexbox-item btn am-button"
							am-bg="white" id="delete">删除</button>
						<div class="fn-clear"></div>
					</div>
				</div> -->
					<!----------------- Rightnav end ------------------>

					<div class="fn-clear"></div>
				</div>
			</div>
	</section>
	<!--------------------- Right content end  ------------------------->



	<!------------------右键菜单 start--------------------->
	<div id="rMenu">
		<ul>
			<li id="m_add" onClick="open_dialog(this);">新增单位</li>
			<li id="m_del" onClick="removeOrg(this);">删除单位</li>
			<li id="m_check" onClick="updateOrg(this);" id="delete">修改单位</li>
	</div>
</div>
<!------------------右键菜单 end--------------------->

<!------------------Dialog start--------------------->
<form id="myform" method="post">
	<div class="am-dialog addColordialog" id="userdialog">
		<div class="am-dialog-wrap">
			<div class="am-dialog-header">
				<h3 class="am-ft-center">单位修改</h3>
			</div>
			<div class="am-input needValInfo">
				<label class="fn-left">上级单位 </label> <select name="pOrgId">
					<option ng-repeat="xs in x" value="{{xs.orgId}}">{{xs.name}}</option>
				</select>
				<div class="fn-clear"></div>
			</div>
            <small class="errowTip">⨯&nbsp;&nbsp;您填写的格式错误，请重新输入</small>

			<div class="am-input needValInfo">
				<label class="fn-left">单位名称 </label> <input class="fn-left"
					type="text" name="name" value="" id="name" placeholder="说明信息" />
				<div class="fn-clear"></div>
			</div>
            <small class="errowTip">⨯&nbsp;&nbsp;您填写的格式错误，请重新输入</small>

			<div class="am-input needValInfo">
				<label class="fn-left">单位类型 </label> <select name="orgType">
					<option value="1">店铺</option>
					<option value="2">总公司</option>
					<option value="3">一级代理</option>
					<option value="4">二级代理</option>
					<option value="5">仓库</option>
				</select>
				<div class="fn-clear"></div>
			</div>

			<input class="fn-left" type="hidden" name="orgId" placeholder="xxxx"
				id="orgId" value="" />
			<div class="dialogBtn am-flexbox">
				<button type="button" class="am-flexbox-item btn am-button alterOv"
					am-bg="blue" id="msave" ng-click="save(this)">确认</button>
				<!-- onclick="javascript:save(this)" -->
				<button type="button" class="am-flexbox-item btn am-button"
					id="closeDialog" am-bg="white">取消</button>
				<input type="reset" name="reset" style="display: none;" />
				<div class="fn-clear"></div>
			</div>
		</div>
	</div>
</form>
</div>
<!---------------------Dialog end-------------------->
<script>
	function removeOrg(Object) {
		var zNode = zTree.getSelectedNodes()[0];
		var children=zNode.children==null?0:zNode.children;
			
		if (children.length>0) {
		alertmsg("该单位有下级单位无法删除");
		return
		}
		$("#orgId").val("" + zNode.orgId);
		delete_dialog(Object);		

	}
	function updateOrg(Object) {
		var zNode = zTree.getSelectedNodes()[0];
		$("#orgId").val("" + zNode.orgId);
		$("input[name=orgType]").val(zNode.orgType);
		$("input[name=name]").val(zNode.name);
		open_dialog(Object)
	}
</script>
<!--表单提交 -->
<!-- <script>
	//用户新增、修改表单提交
	function save(obj) {
		var msg = obj.innerHTML
		var url
		var msg1
		if (msg == '新增') {
			url = cas + "org/addOrg";
			msg1 = "新增成功"
		}
		if (msg == '新增单位') {
			url = cas + "org/addOrg";
			msg1 = "新增成功"
		}
		if (msg == '修改') {
			var id = $("#orgId").val();
			url = cas + "org/updateOrg";
			msg1 = "修改成功"
		}
		if (msg == '修改单位') {
			var id = $("#orgId").val();
			url = cas + "org/updateOrg";
			msg1 = "修改成功"
		}
		if (msg == '删除') {
			url = cas + "org/deleteOrg";
			msg1 = "删除成功"
		}

		var data1 = $("#myform").serializeJson();

		console.log(data1);
		$.ajax({
			async : false,
			type : "post",
			url : url,
			data : {
				jsonObject : getJsonObject(data1),
				keyParams : getKeyParams(data1, keyParams)
			},
			success : function(data) {
				//showmsgbox(4);
				var url = cas + "org/orgs";
				var objs = "orgs";
				zTreeInit(url, objs);
				var orgId = eval('(' + data1 + ')').orgId;
				//加载树节点，选中状态不变
				setTimeout("initZtreeSelect('orgId','" + orgId + "')", 100);
			},
			error : function(e) {
				console.log(e);
			}
		});
	}
</script> -->
<!--提示 -->
<script>
	$(function() {
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

	})

	$(function() {
		$("#update").click(function() {
			open_dialog(this);
			/* loadform1($("#myform").serializeJson(), cas
					+ "org/findOrgtow", "content"); */
		})
		$("#delete").click(function() {
			delete_dialog();
		})

		/* $("#deletTrue").click(function() {
			var data1 = $("#myform").serializeJson();
			console.log(data1.orgId);

			$.ajax({
				async : false,
				type : "post",
				url : cas + "org/deleteOrg",
				data : {
					jsonObject : getJsonObject(data1),
					keyParams : getKeyParams(data1, keyParams)
				},
				success : function(data) {
					var url = cas + "org/orgs";
					var objs = "orgs";
					zTreeInit(url, objs);
					var msg = eval('(' + data + ')').msg;
					alertmsg(msg);
				},
				error : function(e) {
					console.log(e);
				}
			});
		})
 */
	})
</script>
<!------------------Dialog 确定取消 start--------------------->

<!-- 删除模态层 -->
<div class="am-dialog addColordialog" id="deldialog">
	<div class="am-dialog-wrap">
		<div class="am-dialog-header">
			<h3 class="am-ft-center">是否删除</h3>
		</div>
		<div class="dialogBtn am-flexbox">
			<button type="button" class="am-flexbox-item btn am-button alterOv"
				am-bg="blue" ng-click="del(this)">确定</button>
			<button type="button" class="am-flexbox-item btn am-button"
				id="closeDialog" am-bg="white">取消</button>
			<input type="reset" name="reset" style="display: none;" />
			<div class="fn-clear"></div>
		</div>
	</div>
</div>

<!------------------Dialog 确定取消 end----------------------->



<!--动态加载树  start-->
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
				idKey : "orgId", // id编号命名
				pIdKey : "pOrgId" // 父id编号命名
			},
			key : {
				name : "name"
			}
		},
		callback : {
			onRightClick : OnRightClick,
			onClick : OnClick
		}

	};
	var org;
	//单击树
	function OnClick(event, treeId, treeNode, clickFlag) {
		console.log(" 节点id是：" + treeNode.orgId + ", 节点文本是：" + treeNode.name);
		var org = treeNode;
		//console.log(menu);
		$("#orgId").val("" + treeNode.orgId);
		for ( var key in org) {
			//alert(org[key]);
			$("#" + key).html(org[key]);
			//alert(key); alert(menu[key]);
		}
	}

	$(document).ready(function() {
		var url = cas + "org/orgs";
		zTreeInit(url, "orgs");
	});
</script>
<script type="text/javascript">
	//打开新增修改模态层
	function open_dialog(obj) {
		var msg = obj.innerHTML;
		if (msg == "新增") {
			$("input[type=reset]").trigger("click");
		}
		if (msg == "新增单位") {
			$("input[type=reset]").trigger("click");
		}
		$('#userdialog').fadeIn();
		$('.maskBg').fadeIn();
		$('#msave').html(obj.innerHTML);
	}

	function delUser() {
		var nodes = zTree.getSelectedNodes();
		if (nodes && nodes.length > 0) {
			delete_dialog();
		} else {
			alert("请选择树节点");
		}
	}
</script>
<script>
	//添加颜色/修改弹窗
	jQuery.fn.center = function() {
		this.css({
			"position" : "fixed",
			"top" : 50 + "%",
			"marginTop" : ("-" + this.height() / 2) + "px",
			"left" : ($(window).width() - this.width()) / 2
					+ $(window).scrollLeft() + "px"
		});
		return this;
	};
	$(".addColordialog").center();

	$('.alterBtn').click(function() {
		$('.maskBg,.addColordialog').fadeIn();
	});
	$('.alterOv,#closeDialog').click(function() {
		$('.maskBg,.addColordialog').fadeOut();
	});
</script>

<!--动态加载树  end-->

<!-- 尾部 -->
<jsp:include page="../../public/footstyle.jsp" />