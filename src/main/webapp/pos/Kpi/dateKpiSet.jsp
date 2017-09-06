<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!--店铺日目标设定-->
<div class="content-wrapper kip-content content-forwardAdd-wrapper pb20">
	<div class="col-md-11 mgl20 pl0 pageTitl">
		<h2 class="am-ft-16 fn-left">店铺日目标设定</h2>
        <a href="javascript:;" class="line-btn fn-right" ng-click="goback()">返回</a>
	</div>
	<div class="col-md-9 mgl20 mgb10 pl0 fn-clear">
		<div class="fn-left ">
			<span>日期：</span>
			<span>{{dataInfo.year}}年{{dataInfo.month}}月</span>
		</div>
		<div class="fn-left pdl15">
			<span>店铺：</span>
			<span>{{dataInfo.shopName}}</span>
		</div>
		<div class="fn-left pdl15">
			<span>月目标：</span>
			<span>{{dataInfo.planAmount}}元</span>
		</div>
		<div class="fn-right">
			<a href="javascript:;" ng-click="dividePlanAmount()">平分日目标</a>
		</div>
	</div>
	<div class="col-md-9 mgl20 mgb5 pl0">
		<table class="table table-hover center-align table-striped table-bordered kpi-table mgb0">
			<tr>
				<th class="col-md-3">日期</th>
				<th class="col-md-4">日目标(元)</th>
				<th class="col-md-5">占比率</th>
			</tr>
		</table>
		<div class="scroll-table">
			<table class="table table-hover center-align table-striped table-bordered kpi-table mgb0">
				<tr ng-repeat="shopPlanList in shopPlanLists">
					<td>{{shopPlanList.planDate}}日</td>
					<td>
						<input type="text" ng-model="shopPlanList.planAmount" ng-change="editDatePlan($index,shopPlanList.planAmount)"/>
					</td>
					<td>
						{{shopPlanList.rate | number : 2}}%
					</td>
				</tr>
			</table>
		</div>
		
	</div>
	<div class="col-md-9 mgl20 mgb10 pl0 fn-clear">
		<div class="fn-left">
			<span>当月合计：</span>
			<span>{{amount|number:2}}元</span>
		</div>
	</div>
	<div class="col-md-9 mgl20 mgb10 pl0 fn-clear mgt30">
			<button class="selectNotSaleProduct fn-left mgl0" style="background-color: #00AFD4;color:#fff; font-size:14px;padding: 0 20px;" ng-click="saveDatePlan()">确认</button>
			<button class="selectNotSaleProduct fn-left" style="font-size:14px;padding: 0 20px;" ng-click="reset()">重置</button>
	</div>
	
</div>