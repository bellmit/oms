<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<div class="content-wrapper kip-content content-forwardAdd-wrapper pb20">
	<div class="col-md-11 mgl20 pl0 pageTitl">
		<h2 class="am-ft-16 fn-left">店铺业绩目标设定</h2>
	</div>
	<div class="col-md-9 mgl20 mgb20 pl0">
		<span>选择年份：</span>
		<select name="" class="year-select" ng-model="year" ng-options="item.year as item.year for item in yearDateArr" ng-change="searchShopPlan()">
		</select>
	</div>
	<div class="col-md-9 mgl20 mgb20 pl0  ">
		<div class="col-md-12 pl0 pr0 month-list">
			<ul>
				<li class="col-md-1 pl0 pr0" ng-class="{'month-select':month=='01'}" ng-click="setMonth('01')">01月</li>
				<li class="col-md-1 pl0 pr0" ng-class="{'month-select':month=='02'}" ng-click="setMonth('02')">02月</li>
				<li class="col-md-1 pl0 pr0" ng-class="{'month-select':month=='03'}" ng-click="setMonth('03')">03月</li>
				<li class="col-md-1 pl0 pr0" ng-class="{'month-select':month=='04'}" ng-click="setMonth('04')">04月</li>
				<li class="col-md-1 pl0 pr0" ng-class="{'month-select':month=='05'}" ng-click="setMonth('05')">05月</li>
				<li class="col-md-1 pl0 pr0" ng-class="{'month-select':month=='06'}" ng-click="setMonth('06')">06月</li>
				<li class="col-md-1 pl0 pr0" ng-class="{'month-select':month=='07'}" ng-click="setMonth('07')">07月</li>
				<li class="col-md-1 pl0 pr0" ng-class="{'month-select':month=='08'}" ng-click="setMonth('08')">08月</li>
				<li class="col-md-1 pl0 pr0" ng-class="{'month-select':month=='09'}" ng-click="setMonth('09')">09月</li>
				<li class="col-md-1 pl0 pr0" ng-class="{'month-select':month=='10'}" ng-click="setMonth('10')">10月</li>
				<li class="col-md-1 pl0 pr0" ng-class="{'month-select':month=='11'}" ng-click="setMonth('11')">11月</li>
				<li class="col-md-1 pl0 pr0" ng-class="{'month-select':month=='12'}" ng-click="setMonth('12')">12月</li>
			</ul>
		</div>
		<table class="table table-hover center-align table-striped table-bordered kpi-table">
			<tr>
				<th class="col-md-3">店铺</th>
				<th class="col-md-4">月目标（元）</th>
				<th class="col-md-5">操作</th>
			</tr>
			<tr ng-repeat="shopPlanList in shopPlanLists track by $index">
				<td>{{shopPlanList.shopName}}</td>
				<td>
					<div ng-show="shopPlanList.edit==false">
						<span>{{shopPlanList.planAmount}}</span>
						<a href="javascript:;"><i class="fa fa-pencil mgl5" aria-hidden="true" ng-click="editShopPlan($index)"></i></a>
					</div>
					<div ng-show="shopPlanList.edit==true">
						<!--<input type="text" name="" id="" ng-change="inputPlanAmount($index,shopPlanList.planAmount)" ng-model="shopPlanList.planAmount"/>-->
						<input type="text" name="" id="" ng-model="shopPlanList.planAmount" />
						<a href="javascript:;" class="mgl5" ng-click="saveShopPlan($index)">保存</a>
						<a href="javascript:;" class="mgl5" ng-click="cancelEdit($index)">取消</a>
					</div>
				</td>
				<td>
					<div class="kpi-deal fn-clear">
						<a href="javascript:;" class="fn-left am-ft-blue" ng-click="setDailyKpi(shopPlanList)">设置日目标</a>
						<a href="javascript:;" class="fn-right am-ft-blue" ng-click="setGuideKpi(shopPlanList)">导购业绩设定</a>
					</div>
				</td>
			</tr>
			<tr>
				<td colspan="3">
					<div style="position: relative;">
						<div class="setUnionSaveBox" ng-show="showDialog" style="top:0px;left:130px;width:400px">
							<span>统一设置月目标为：</span>
							<input type="number" ng-model="togetherPlanAmount" class="ng-pristine ng-untouched ng-valid">&nbsp;
							<button class="batchSet" ng-click="setMonthPlanTogether()">设置</button>
							<button class="batchSetConsel" ng-click="cancelSetTogether()">取消</button>
						</div>
						<button class="selectNotSaleProduct fn-left" ng-click="toSetAllPlan()">统一设置月目标</button>
					</div>
				</td>
			</tr>
		</table>
	</div>
</div>