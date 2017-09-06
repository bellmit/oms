<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!--------------- Content start ----------------->
<div class="content-wrapper content-integratRule-wrapper">
	<div class="col-md-11 pageTitl">
		<h2 class="am-ft-16 fn-left">会员卡类型升级设置</h2>
	</div>
	<div class="fn-clear"></div>
	<!-- Main content -->
	<div class="ManColTable col-lg-12 memberCardUpdataBox">
		<form>
			<div class="table-responsive PrivTable PrivTable-memUp">
				<table class="table table-hover table-striped table-bordered">
					<tr>
						<th colspan="2" width="120">自营门店会员联盟</th>
						<th colspan="2">
							<p class="fn-right">
								<span>当前状态：<em class="am-ft-yellowgreen">已启用</em></span>
							</p>
						</th>
					</tr>
					<tr class="innerTh">
						<td class="col-lg-2">卡类型名称</td>
						<td class="col-lg-3">升级后的卡类型</td>
						<td class="col-lg-4">满足条件<span class="am-ft-gray">（满足以下条件升级）</span></td>
						<td class="col-lg-3">操作</td>
					</tr>
					<tr ng-repeat="selfGrade in selfGrades">
						<td>{{selfGrade.gradeName}}</td>
						<td>
							<select ng-show="updataCardedit=='show'" style="border:1px solid #dedede" ng-options="memberGradeListsBa.gradeId as memberGradeListsBa.gradeName for memberGradeListsBa in memberGradeListsB" ng-disabled="selected=='unable'" ng-model="selfGrade.nextGradeId">
							</select>
							<span ng-show="updataCardshow=='show'">
								<span ng-hide="selfGrade.nextGradeId==''">{{selfGrade.nextGradeName}}</span>
								<span ng-show="selfGrade.nextGradeId==''">未定义</span>
							</span>
						</td>
						<td>
							<div ng-show="updataCardedit=='show'" class="fn-clear col-lg-12" style="margin: 0 auto;">
								累计消费：<input ng-disabled="selected=='unable'" type="text" name="" ng-value="selfGrade.upMoney" ng-model="upMoney" />元</div>
							<div ng-show="updataCardshow=='show'" class="fn-clear col-lg-12" style="margin: 0 auto;">
								累计消费：<span ng-hide="selfGrade.upMoney==''">{{selfGrade.upMoney}}</span>
								<span ng-show="selfGrade.upMoney==''">0</span>元</div>

						</td>
						<td class="td_edit">
							<div ng-show="updataCardshow=='show'">
								<button type="button" class="line-btn alterBtn" am-bg="blue" style="border: none;" ng-click="editCardUpdate(this)">编辑</button>
							</div>
							<div ng-show="updataCardedit=='show'">
								<a href="javascript:;" class="line-btn fn-left alterBtn col-md-5" am-bg="blue" ng-click="saveEdit(this,selfGrade.nextGradeId,upMoney)">保存</a>
								<a href="javascript:;" type="button" class="fn-left line-btn-delete col-md-5" am-bg="white" ng-click="cacelEdit(this)">取消</a>
							</div>
						</td>
					</tr>
				</table>
				<table class="table table-hover table-striped table-bordered" ng-repeat="unionGrade in unionGrades | filter:{memberUnionStatus:'!2'}">
					<tr>
						<th colspan="2" width="120">{{unionGrade.memberUnionName}}</th>
						<th colspan="2">
							<p class="fn-right" ng-if="unionGrade.memberUnionStatus=='0'">
								<span>当前状态：<em class="am-ft-yellowgreen">已启用</em></span>
								<!--<a href="javascript:;" class="blueLine-group">停用</a>-->
							</p>
							<p class="fn-right" ng-if="unionGrade.memberUnionStatus=='1'">
								<span>当前状态：<em class="am-ft-red">已停用</em></span>
								<!--<a href="javascript:;" class="blueLine-group">启用</a>-->
							</p>
						</th>
					</tr>
					<tr class="innerTh">
						<td class="col-lg-2">卡类型名称</td>
						<td class="col-lg-3">升级后的卡类型</td>
						<td class="col-lg-4">满足条件<span class="am-ft-gray">（满足以下条件升级）</span></td>
						<td class="col-lg-3" ng-hide="unionGrade.memberUnionStatus=='1'">操作</td>
					</tr>
					<tr ng-repeat="unionList in unionGrade.unionList">
						<td>{{unionList.gradeName}}</td>
						<td>
							<select ng-show="updataCardedit=='show'" style="border:1px solid #dedede" ng-disabled="selected=='unable'" ng-options="memberGradeList.gradeId as memberGradeList.gradeName for memberGradeList in memberGradeLists| filter:{memberUnionId:unionGrade.memberUnionId}" ng-model="unionList.nextGradeId">
							</select>
							<span ng-show="updataCardshow=='show'">
								<span ng-hide="unionList.nextGradeId==''">{{unionList.nextGradeName}}</span>
								<span ng-show="unionList.nextGradeId==''">未设置</span>
							</span>
						</td>
						<td>
							<!--<div class="fn-clear col-lg-12" style="margin: 0 auto;" ng-show="updataCardedit=='show'">-->
							<div ng-show="updataCardedit=='show'" class="fn-clear col-lg-12" style="margin: 0 auto;">
								累计消费：<input type="text" ng-value="unionList.upMoney" ng-model="upmoney" ng-disabled="selected=='unable'" />元
							</div>
							<div ng-show="updataCardshow=='show'" class="fn-clear col-lg-12" style="margin: 0 auto;">
								累计消费：<span ng-hide="unionList.upMoney==''">{{unionList.upMoney}}</span>
								<span ng-show="unionList.upMoney==''">0</span>元
							</div>
						</td>
						<td class="td_edit" ng-hide="unionGrade.memberUnionStatus=='1'">
							<div ng-show="updataCardshow=='show'">
								<button type="button" class="line-btn alterBtn" am-bg="blue" style="border: none;" ng-click="editCardUpdate(this)">编辑</button>
							</div>
							<div ng-show="updataCardedit=='show'">
								<a href="javascript:;" class="line-btn fn-left alterBtn col-md-5" am-bg="blue" ng-click="saveUnionCardEdit(this,unionList.nextGradeId,upmoney)">保存</a>
								<a href="javascript:;" type="button" class="fn-left line-btn-delete col-md-5" am-bg="white" ng-click="cacelEdit(this)">取消</a>
							</div>
						</td>
					</tr>
				</table>
			</div>
		</form>
		<div class="fn-clear"></div>
	</div>
</div>