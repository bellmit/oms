<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!--Ztree-->

<!--遮罩 start-->

<!--遮罩 end-->
<!--------------- Content start ----------------->
<div class="content-wrapper">
	<div class="col-md-11 pageTitl">
		<h2 class="am-ft-16 fn-left">会员卡类型设置</h2>
	</div>
	<form id="memberGradeForm">
	<!-- Main content -->
	<div class="ManColTable col-lg-12">
		<div class="table-responsive PrivTable">
			<table class="table table-hover table-striped table-bordered">
				<tr>
					<th scope="col">卡类名称<span style="color:red">(必填)</span></th>
					<th scope="col">等级</th>
					<th scope="col" colspan="2" width="200">操作</th>
				</tr>
				<tr ng-repeat="grade in gradeTypes ">
					<td><input name="gradeName" type="text" id="gradeId{{grade.gradeId}}"
						value="{{grade.gradeName}}" disabled/></td>
					<td><input name="level" type="text" id="gradeLevel{{grade.gradeId}}"
						value="{{grade.level}}" disabled/></td>
					<td class="td_edit">
						<button type="button" name="alter"
							class="line-btn fn-left alterBtn col-lg-6" am-bg="blue"
							onclick="edit_btn(this)">编辑</button>
						<button type="button" class="fn-left line-btn-delete col-lg-6"
							am-bg="white" ng-click="del_btn(this)" onclick="delete_btn(this)">删除</button>
					</td>
					<td class="td_editing" style="display:none">
						<button type="button" name="alter"
							class="line-btn fn-left alterBtn col-lg-6" am-bg="blue"
							ng-click="updateGrade(this,'grade')" >保存</button>
						<button type="button" class="fn-left line-btn-delete col-lg-6"
							am-bg="white" ng-click="getMemberGrade()">取消</button>
					</td>
				</tr>
				<tr class="addTr">
					<td colspan="3"><a href="javascript:;"
						class="fn-left addLineColor" ng-click="addgrad()">添加卡类型</a></td>
				</tr>
			</table>
		</div>
		<div class="fn-clear"></div>
	</div>
	</form>
</div>

</div>


<!--弹窗 start-->
<div class="am-dialog DelDialog fn-hide">
	<form id="myform">
		<div class="am-dialog-wrap">
			<div class="am-dialog-header">
				<h3 class="am-ft-center">确定删除？</h3>
			</div>
			<div class="dialogBtn am-flexbox">
				<button type="button"
					class="am-flexbox-item btn am-button SavEdit deletGroup"
					am-bg="blue" ng-click="delGrade()">确认</button>
				<button type="button" class="am-flexbox-item btn am-button"
					ng-click="cancelDel()" id="closeDialog" am-bg="white">取消</button>
				<input type="reset" name="reset" style="display: none;" />
				<div class="fn-clear"></div>
			</div>
		</div>
	</form>
</div>
<!--弹窗 end-->

<!-- 尾部 -->
<jsp:include page="../../public/footstyle.jsp" />

<script>
	$(function(){
		var formArray=[];
    	formArray.push('{"memberGradeForm":"/membergrade/addMemberGrade"}');
    	initValidate(formArray,pos);
	})
	
	//编辑按钮
	function edit_btn(a) {
		$('.td_edit').show().next().hide().parent().find('input,select').prop(
				'disabled', true);
		$(a).parent().hide().next().show().parent().find('input,select').prop(
				'disabled', false);
	}
	//取消按钮
	function cancel_btn(a) {
		$(a).parent().hide().prev().show().parent().find('input,select').prop(
				'disabled', true);
	}
	//删除
	function delete_btn(a) {
		$('.DelDialog,.maskBg').dialogShow();
	}
	//保存
	function save_btn(a) {
		$(a).parent().hide().prev().show().parent().find('input,select').prop(
				'disabled', true);
	}
	function remove_btn(a) {
		$(a).parents('tr').remove();
	}
	//弹窗居中及隐藏
	$('.DelDialog').center();
	$('.SavEdit,#closeDialog').click(function() {
		$('.DelDialog,.maskBg').dialogHide();
	});
</script>

