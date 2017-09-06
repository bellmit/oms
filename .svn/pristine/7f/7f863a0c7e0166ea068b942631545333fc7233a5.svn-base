<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!--------------- Content start ----------------->
<div class="content-wrapper content-memgrade-wrapper">
	<div class="col-md-11 pageTitl">
		<h2 class="am-ft-16 fn-left">会员卡类型设置</h2>
	</div>	
	<div class="col-md-11 offsetMargin">
	<!-- Main content -->
	<div class="col-md-12 typeTitle">
		<span>直营门店会员联盟</span>
		<!--<button>会员卡类型设置</button>-->
	</div>
    <form id="memberGradeForm">
	<div class="col-md-12 setVipType">
		<div class="table-responsive cardTypeSet">
			<table class="table table-hover table-striped cardTypeSetbig table-bordered">
				<tr>
                    <th scope="col" width="20%">卡类型名称</th>
                    <th scope="col" width="5%">等级</th>
                    <th scope="col" width="14%">已参与会员</th>
                    <th scope="col" width="25%">品牌</th>
                    <th scope="col" width="20%">折扣(范围0-10)</th>
                    <th scope="col" width="20%" ng-if="userInfo.orgType != 4">操作</th>
				</tr>
				<tr ng-repeat="directInfo in directInfos | orderBy:'level'">
					<td>
                        <input type="text" placeholder="" name="gradeName" ng-value="directInfo.gradeName" disabled="disabled"/>
                    </td>
					<td>
                        <input type="text" placeholder="1" name="level" ng-value="directInfo.level" disabled="disabled"/>
                    </td>
					<td>{{directInfo.countMember}}个</td>
					<td class="nufourtd">
						<table class="cardTypeSetsmall">
							<tr ng-repeat="brandList in directInfo.brandList">
								<td id="{{brandList.brandId}}">{{brandList.brandName}}</td>
							</tr>
						</table>
					</td>
					<td class="nufourtd">
						<table class="cardTypeSetsmall">
							<tr ng-repeat="brandList in directInfo.brandList">
								<td>
                                    <input type="text" name="brandDiscount" ng-value="brandList.discount|number:1" disabled="disabled"/>
                                </td>
							</tr>
						</table>
					</td>
                    <td class="td_edit" ng-if="userInfo.orgType != 4">
                        <a href="javascript:;" class="delTypeBtn am-ft-blue" onclick="edit_btn(this)">编辑</a>
                        <span>|</span>
                        <a href="javascript:;" class="delTypeBtn am-ft-red" ng-click="deleteMemrGrade(directInfo.gradeId)">删除</a>
                    </td>
                    <td class="td_editing fn-hide" ng-if="userInfo.orgType != 4">
                        <a href="javascript:;" class="delTypeBtn am-ft-blue" ng-click="saveEditMemrGrade(directInfo)">保存</a>
                        <span>|</span>
                        <a href="javascript:;" class="delTypeBtn am-ft-red" onclick="cancel_btn(this)">取消</a>
                    </td>
				</tr>
				<tr ng-if="userInfo.orgType != 4">
				   <td colspan="6">
						<button class="addCardType" ng-click="addMemberCardType($event)">+添加卡类型</button>
					</td>
				</tr>
			 </table>			
			</div>
		</div>
	 </form>
		<div class="fn-clear"></div>
	</div>
    <!--------- 会员联盟 --------->
    <div class="col-md-11 offsetMargin" brandid="{{unionInfo.brandId}}" memid="{{unionInfo.memberUnionId}}" orgid="{{unionInfo.orgId}}" ng-repeat="unionInfo in unionInfos" ng-if="unionInfo.memberUnionStatus != 2">
	<!-- Main content -->
        <div class="col-md-12 typeTitle">
            <span>{{unionInfo.memberUnionName}}</span>
        </div>
        <form id="memberCloudGradeForm{{unionInfo.memberUnionId}}">
        <div class="col-md-12 setVipType">
            <div class="table-responsive">
                <table class="table table-hover table-striped table-bordered cardTypeDetil">
                    <tr>
                        <th scope="col" style="width:20%;">卡类型名称</th>
                        <th scope="col" style="width: 5%;">等级</th>
                        <th scope="col" style="width: 20%;">已参与会员</th>
                        <th scope="col" style="width: 20%;">折扣(范围0-10)</th>
                        <th scope="col" style="width: 20%;" ng-if="unionInfo.orgId==orgId">操作</th>
                    </tr>
                    <tr ng-repeat="unionlist in unionInfo.unionList | orderBy:'level'" ng-if="unionlist.gradeId!=undefind">
                        <td><input type="text" name="gradeName" ng-value="unionlist.gradeName" disabled="disabled"/></td>
                        <td><input type="text" name="level" ng-value="unionlist.level" disabled="disabled"/></td>
                        <td>{{unionlist.countMember}}个</td>
                        <td><input type="text" name="discount" ng-value="unionlist.discount|number:1" disabled="disabled"/></td>
                        <td class="td_edit" ng-if="unionInfo.orgId==orgId">
                            <a href="javascript:;" class="delTypeBtn am-ft-blue" onclick="edit_btn(this)">编辑</a>
                            <span>|</span>
                            <a href="javascript:;" class="delTypeBtn am-ft-red" ng-click="deleteMemrGrade(unionlist.gradeId)">删除</a>
                        </td>
                        <td class="td_editing fn-hide" ng-if="unionInfo.orgId==orgId">
                            <a href="javascript:;" class="delTypeBtn am-ft-blue" ng-click="saveEditMemrCloudGrade(unionlist,unionInfo.brandId)">保存</a>
                            <span>|</span>
                            <a href="javascript:;" class="delTypeBtn am-ft-red" onclick="cancel_btn(this)">取消</a>
                        </td>
                    </tr>
                    <tr ng-if="unionInfo.orgId==orgId">
                       <td colspan="6">
                            <button class="addCardType" ng-click="addCloudMemberCardType($event)">+添加卡类型</button>
                        </td>
                    </tr>
                 </table>
                </div>
            </div>
         </form>
            <div class="fn-clear"></div>
        </div>
    </div>

<!--弹窗 start-->
<div class="am-dialog DelDialog fn-hide">
		<div class="am-dialog-wrap">
			<div class="am-dialog-header">
				<h3 class="am-ft-center">确定删除？</h3>
			</div>
			<div class="dialogBtn am-flexbox">
				<button type="button" class="am-flexbox-item btn am-button SavEdit" am-bg="blue">确认</button>
				<button type="button" class="am-flexbox-item btn am-button" id="closeDialog" am-bg="white">取消</button>
				<input type="reset" name="reset" style="display: none;" />
				<div class="fn-clear"></div>
			</div>
		</div>
</div>
<!--弹窗 end-->

<!-- 尾部 -->
<jsp:include page="../../public/footstyle.jsp" />

<script>
	$(function(){
		var formArray=[];
    	formArray.push('{"memberGradeForm":"/membergrade/addMemberGrade"}');
    	initValidate(formArray,pos);
	});
	
	//编辑按钮
	function edit_btn(a) {
		$('.td_edit').show().next().hide().parent().find('input,select').prop('disabled',true);
		$(a).parent().hide().next().show().parents('tr').find('input,select').prop('disabled',false);
	}
	//取消按钮
	function cancel_btn(a) {
		$(a).parent().hide().prev().show().parents('tr').find('input,select').prop('disabled',true);
	}

	//弹窗居中及隐藏
	$('.DelDialog').center();
    $(function(){
        $('#closeDialog').click(function(){
            $('.DelDialog,.maskBg').hide();
        });
    });

</script>

