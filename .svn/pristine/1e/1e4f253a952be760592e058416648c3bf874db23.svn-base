<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!--Ztree-->

<!--遮罩 start-->

<!--遮罩 end-->
<!--------------- Content start ----------------->
<div class="content-wrapper fn-clear">
	<div class="col-md-11 pageTitl">
		<h2 class="am-ft-16 fn-left">
		颜色管理
		</h2>
	</div>
	<!-- Main content -->
	<div class="ManColTable col-md-12">
		<div class="col-md-12 checkType">
			<a href="javascript:;" class="activeItem" ng-click="getAllColor()">所有颜色</a>
			<a href="javascript:;" ng-click="getSystem(this)">按色系查看</a>
		</div>
		<form id="colorForm">
			<div class="table-responsive PrivTable">
				<div class="checkTypeInfo">
					<table class="table table-hover table-striped table-bordered">
						<tr>
							<th scope="col">颜色</th>
							<th scope="col">名称<span class="am-ft-red">(必填)</span></th>
							<th scope="col">所属色系<span class="am-ft-red">(必填)</span></th>
							<th scope="col">编码（用于SKU编码）<span class="am-ft-red">(必填)</span></th>
							<th scope="col">RGB颜色</th>
							<th scope="col">潘通色</th>
							<th scope="col" colspan="2" width="130">操作</th>
						</tr>
						<tr ng-repeat="item in items">
							<td style="display: none" class="colorId">{{item.colorId}}</td>
							<td>
								<!-- <div class="button" ngf-select="uploadFilesUpdate($files,item.colorId)" ngf-multiple="true"> -->
								<div class="uploadNav" onmouseover="mouseOver(this)" onmouseout="mouseOut(this)">
									<input type="file" ngf-select="uploadFilesUpdate($files,item.colorId)" disabled />
									<img class="uploadImg" alt="颜色图片" ng-src="{{item.imagesPath}}" id="color{{item.colorId}}" ng-model="item.imagesPath">
									<i class="fa fa-close close-del icon-hide" onclick="delImage(this)"></i>
								</div>
								<!-- </div> -->
							</td>
							<td><input type="text" name="colorName" value="{{item.colorName}}" ng-model="item.colorName" disabled /></td>
							<td>
								<input type="text" name="colorSystem" value="{{item.colorSystem}}" ng-model="item.colorSystem" disabled />
							</td>
							<td><input type="text" name="colorNum" value="{{item.colorNum}}" ng-model="item.colorNum" disabled /></td>
							<td><input type="text" name="colorRgbvalue" value="{{item.colorRgbvalue}}" ng-model="item.colorRgbvalue" disabled /></td>
							<td><input type="text" name="pantone" value="{{item.pantone}}" ng-model="item.pantone" disabled /></td>
							<td class="td_edit">
								<button type="button" name="alter" class="line-btn fn-left alterBtn col-md-6" am-bg="blue" onclick="edit_btn(this)">编辑</button>
								<button type="button" class="fn-left line-btn-delete col-md-6" am-bg="white" onclick="dele(id)" id="{{item.colorId}}">删除</button>
							</td>
							<td class="td_editing" style="display:none">
								<button type="button" name="alter" class="line-btn fn-left alterBtn col-md-6" am-bg="blue" ng-click="update(this,item.colorId)">保存</button>
								<button type="button" class="fn-left line-btn-delete col-md-6" am-bg="white" onclick="cancel_btn(this)">取消</button>
							</td>
						</tr>
						<tr class="addTr">
							<td colspan="8">
								<a href="javascript:;" class="fn-left addLineColor" ng-click="addtr()">+&nbsp;增加颜色</a>
							</td>
						</tr>
					</table>
				</div>
				<div class="checkTypeInfo">
					<div class="AddproTabnav col-md-10">
						<div class="tab-item" data-tab="" ng-repeat="system in systems" ng-click="getColBySys(this)" ng-model="system.colorSystem" name="{{system.colorSystem}}">{{system.colorSystem}}</div>
					</div>
					<table class="table table-hover table-striped table-bordered syscolor">
						<tr>
							<th scope="col">颜色</th>
							<th scope="col">名称<span class="am-ft-red">(必填)</span></th>
							<th scope="col">编码（用于SKU编码）<span class="am-ft-red">(必填)</span></th>
							<th scope="col">RGB颜色</th>
							<th scope="col">潘通色</th>
							<th scope="col" colspan="2">操作</th>
						</tr>
						<tr ng-repeat="color in items">
							<td style="display: none"><input type="text" name="colorSysSystem" id="colorSysSystem" value="{{color.colorSystem}}" /></td>
							<td style="display: none" class="colorId">{{color.colorId}}</td>
							<td>
								<!--  <div class="button" ngf-select="uploadFilesSysUpdate($files,color.colorId)" ngf-multiple="true">
							 <img alt="颜色图片" ng-src="{{color.imagesPath}}" id="system{{color.colorId}}" ng-model="color.imagesPath" >
							 </div> -->
								<div class="uploadNav" onmouseover="mouseOver(this)" onmouseout="mouseOut(this)">
									<input type="file" ngf-select="uploadFilesSysUpdate($files,color.colorId)" disabled/>
									<img class="uploadImg" alt="颜色图片" ng-src="{{color.imagesPath}}" id="system{{color.colorId}}" ng-model="color.imagesPath">
									<i class="fa fa-close close-del icon-hide" onclick="delImage(this)"></i>
								</div>
							</td>
							<td><input type="text" name="colorName" value="{{color.colorName}}" ng-model="color.colorName" disabled /></td>
							<td><input type="text" name="colorNum" value="{{color.colorNum}}" ng-model="color.colorNum" disabled /></td>
							<td><input type="text" name="colorRgbvalue" value="{{color.colorRgbvalue}}" ng-model="color.colorRgbvalue" disabled /></td>
							<td><input type="text" name="pantone" value="{{color.pantone}}" ng-model="color.pantone" disabled /></td>
							<td class="td_edit">
								<button type="button" name="alter" class="line-btn fn-left alterBtn col-md-6" am-bg="blue" onclick="edit_btn(this)">编辑</button>
								<button type="button" class="fn-left line-btn-delete col-md-6" am-bg="white" id="{{color.colorId}}" onclick="deleSys(id)">删除</button>
							</td>
							<td class="td_editing" style="display:none">
								<button type="button" name="alter" class="line-btn fn-left alterBtn col-md-6" am-bg="blue" ng-click="updateSys(this)">保存</button>
								<button type="button" class="fn-left line-btn-delete col-md-6" am-bg="white" onclick="cancel_btn(this)">取消</button>
							</td>

						</tr>
						<tr class="addTrSys">
							<td colspan="7">
								<a href="javascript:;" class="fn-left addLineColor" ng-click="addSystr()">+&nbsp;增加颜色</a>
							</td>
						</tr>
					</table>
				</div>
				<div class="fn-clear"></div>
			</div>
		</form>
		<div class="fn-clear"></div>
		<!--分页 start-->
		<div class="pagelist priv-pagelist">
			<div id="paging"></div>
		</div>
		<!--分页 end-->
	</div>

</div>
<!-- 删除模态层 -->
<div class="am-dialog addColordialog" id="deldialog">
	<div class="am-dialog-wrap">
		<div class="am-dialog-header">
			<h3 class="am-ft-center">是否删除</h3>
		</div>
		<div class="dialogBtn am-flexbox">
			<input type="hidden" id="colorId">
			<button type="button" class="am-flexbox-item btn am-button alterOv1" am-bg="blue" ng-click="del(this)">确定</button>
			<button type="button" class="am-flexbox-item btn am-button" id="closeDialog" am-bg="white">取消</button>
			<input type="reset" name="reset" style="display: none;" />
			<div class="fn-clear"></div>
		</div>
	</div>
</div>
<!-- 删除模态层 (按色系)-->
<div class="am-dialog addColordialog" id="deldialogSys">
	<div class="am-dialog-wrap">
		<div class="am-dialog-header">
			<h3 class="am-ft-center">是否删除</h3>
		</div>
		<div class="dialogBtn am-flexbox">
			<input type="hidden" id="colorSysId">
			<button type="button" class="am-flexbox-item btn am-button alterOv1" am-bg="blue" ng-click="delSys(this)">确定</button>
			<button type="button" class="am-flexbox-item btn am-button" id="closeDialog" am-bg="white">取消</button>
			<input type="reset" name="reset" style="display: none;" />
			<div class="fn-clear"></div>
		</div>
	</div>
</div>
</div>

<script>
	function mouseOver(k) {
		$(k).children('.close-del').removeClass('icon-hide');
	}

	function mouseOut(k) {
		$(k).children('.close-del').addClass('icon-hide');
	}

	$(function() {
		var formArray = [];
		formArray.push('{"colorForm":"/color/updateColor"}');
		initValidate(formArray, pos);
	})

	//编辑按钮
	function edit_btn(a) {
		$('.td_edit').show().next().hide().parent('tr').find('input,select').prop('disabled', true);
		$(a).parent().hide().next().show().parent('tr').find('input,select').prop('disabled', false);
	}
	//取消按钮
	function cancel_btn(a) {
		$(a).parent().hide().prev().show().parent('tr').find('input,select').prop('disabled', true);
	}
	//删除
	function dele(obj) {
		$("#colorId").val(obj);
		$('#deldialog').fadeIn();
		$('.maskBg').fadeIn();
	}

	function deleSys(obj) {
		$("#colorSysId").val(obj);
		$('#deldialogSys').fadeIn();
		$('.maskBg').fadeIn();
	}

	//取消
	function delete_btn(a) {
		$(a).parents('tr').remove();
	}

	function delImage(obj) {
		$(obj).prev().attr("src", "http://static.qineasy.com/base/images/default_color.png");
	}

	$(function() {
		//弹窗居中及隐藏
		$('.EditDialog').center();
		$('.td_edit .line-btn-delete').click(function() {
			$('.EditDialog,.maskBg').dialogShow();
		});
		$('.SavEdit,#closeDialog').click(function() {
			$('.EditDialog,.maskBg').dialogHide();
		});
		//tab切换
		$('.checkTypeInfo').eq(0).show();
		$('.checkType').children('a').click(function() {
			$(this).addClass('activeItem').siblings().removeClass('activeItem');
			$('.checkTypeInfo').hide();
			$('.checkTypeInfo').eq($(this).index()).show();
		});
		//二级tab
		var tabItem = $('.AddproTabnav').children('.tab-item');
		tabItem.click(function() {
			$(this).attr({
				"data-tab": "selected"
			}).siblings().attr({
				"data-tab": ""
			});
			$('.AddproTabInfo').hide();
			$('.AddproTabInfo').eq($(this).index()).show();
		});
		/* $('.uploadNav').hover(
            function () {
                //$(this).children('.close-del').removeClass('icon-hide');
                console.info(11);
            },
            function () {
                //$(this).children('.close-del').addClass('icon-hide');
                console.info(22);
            }
        );  */

	})
</script>
<script>
	$(".addColordialog").center();

	$('.alterBtn').click(function() {
		$('.maskBg,#userdialog').fadeIn();
	});
	$('#closeDialog,.alterOv,.alterOv1').click(function() {
		$('.maskBg,#userdialog,#deldialog,#deldialogSys').fadeOut();
	});
</script>
<!-- 尾部 -->