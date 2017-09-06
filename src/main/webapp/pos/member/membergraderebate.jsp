<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!--Ztree-->

<!--遮罩 start-->

<!--遮罩 end-->
<!--------------- Content start ----------------->
<div class="content-wrapper">
    <div class="col-md-11 pageTitl">
        <h2 class="am-ft-16 fn-left">会员卡类型折扣</h2>
    </div>
	<form id="memberGradeDisForm">
    <!-- Main content -->
    <div class="ManColTable col-lg-12">
            <div class="table-responsive PrivTable">
                <table class="table table-hover table-striped table-bordered">
                    <tr>
                        <th scope="col">卡类名称</th>
                        <th scope="col">折扣</th>
                        <th scope="col">操作</th>
                    </tr>
                    <tr ng-repeat="grade in gradeTypes ">
					<td><input type="text"  id="gradeId{{grade.gradeId}}"
						value="{{grade.gradeName}}" disabled/></td>
					<td><input type="text" name="discount" class="discount" id="gradeDis{{grade.gradeId}}"
						value="{{grade.discount}}" disabled/></td>
					<td class="td_edit">
						<button type="button" name="alter"
							class="line-btn" width="100%" am-bg="blue"
							onclick="edit_btn(this)" >编辑</button>
					</td>
					<td class="td_editing" style="display:none">
						<button type="button" name="alter"
							class="line-btn fn-left col-lg-6" am-bg="blue"
							ng-click="updateGrade(this,'discount')"  >保存</button>
						<button type="button" class="fn-left line-btn-delete col-lg-6" am-bg="white" ng-click="getMemberGrade()">取消</button>
					</td>
				</tr>
                </table>
            </div>
        <div class="fn-clear"></div>
    </div>
	</form>
</div>

</div>

<jsp:include page="../../public/footstyle.jsp" />

<script>
	$(function(){
		var formArray=[];
    	formArray.push('{"memberGradeDisForm":"/membergrade/updateMemberGrade"}');
    	initValidate(formArray,pos);
	})

	//编辑按钮
	function edit_btn(a) {
		$('.td_edit').show().next().hide().parent().find('.discount').prop(
				'disabled', true);
		$(a).parent().hide().next().show().parent().find('.discount').prop(
				'disabled', false);
	}
	//取消按钮
	function cancel_btn(a) {
		$(a).parent().hide().prev().show().parent().find('input,select').prop(
				'disabled', true);
	}
	
	//保存
	function save_btn(a) {
		$(a).parent().hide().prev().show().parent().find('input,select').prop(
				'disabled', true);
	}
	
</script>

