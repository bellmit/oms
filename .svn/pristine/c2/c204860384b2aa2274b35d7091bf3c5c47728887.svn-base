<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!--导购业绩指标设定-->
<div class="content-wrapper kip-content content-forwardAdd-wrapper pb20">
	<div class="col-md-11 mgl20 pl0 pageTitl">
		<h2 class="am-ft-16 fn-left">导购业绩目标设定</h2>
        <a href="javascript:;" class="line-btn fn-right" ng-click="goback()">返回</a>
	</div>
	<div class="col-md-9 mgl20 mgb20 pl0">
		<span>店铺：</span>
		<select name="" class="year-select" ng-model="shopId" ng-change="setShop()" ng-options="shopList.orgId as shopList.shopName for shopList in shopLists">
		</select>
		<span class="pdl20">选择年份：</span>
		<select name="" class="year-select" ng-model="year" ng-change="setYear()" ng-options="item.year as item.year for item in yearDateArr">
		</select>
	</div>
	<div class="col-md-11 mgl20 mgb20 pl0  pr0">
		<div class="col-md-10 pl0 pr0 month-list">
			<ul>
				<li class="col-md-1 pl0 pr0" ng-class="{'month-select':month=='01'}" ng-click="setMonth('01')">01月</li>
				<li class="col-md-1 pl0 pr0" ng-class="{'month-select':month=='02'}"  ng-click="setMonth('02')">02月</li>
				<li class="col-md-1 pl0 pr0" ng-class="{'month-select':month=='03'}" ng-click="setMonth('03')">03月</li>
				<li class="col-md-1 pl0 pr0" ng-class="{'month-select':month=='04'}"  ng-click="setMonth('04')">04月</li>
				<li class="col-md-1 pl0 pr0" ng-class="{'month-select':month=='05'}"  ng-click="setMonth('05')">05月</li>
				<li class="col-md-1 pl0 pr0" ng-class="{'month-select':month=='06'}"  ng-click="setMonth('06')">06月</li>
				<li class="col-md-1 pl0 pr0" ng-class="{'month-select':month=='07'}"  ng-click="setMonth('07')">07月</li>
				<li class="col-md-1 pl0 pr0" ng-class="{'month-select':month=='08'}"  ng-click="setMonth('08')">08月</li>
				<li class="col-md-1 pl0 pr0" ng-class="{'month-select':month=='09'}"  ng-click="setMonth('09')" >09月</li>
				<li class="col-md-1 pl0 pr0" ng-class="{'month-select':month=='10'}"  ng-click="setMonth('10')">10月</li>
				<li class="col-md-1 pl0 pr0" ng-class="{'month-select':month=='11'}"  ng-click="setMonth('11')">11月</li>
				<li class="col-md-1 pl0 pr0" ng-class="{'month-select':month=='12'}"  ng-click="setMonth('12')">12月</li>
			</ul>
		</div>
		<div class="guide-kpi-default col-md-10 pl0 pr0" ng-show = "notSetMonthPlan">
			<div class="guide-kpi-default-data">
				店铺当月总指标：{{planAmount}}元
			</div>
			<div class="guide-kpi-default-operate fn-clear">
				<div class="default-warm fn-left">
					您还没有设置导购月指标
				</div>
				<button class="selectNotSaleProduct fn-left mgl0" style="background-color: #00AFD4;color:#fff; font-size:14px;padding: 0 20px;" ng-click="setGuidePlan()" >立即分解店铺指标至导购</button>
			</div>
		</div>
		<div class="guide-kpi-default guide-month-kpi col-md-12" ng-show = "showGuideKpi">
			<div class="guide-month-title mgb20">
				<span>店铺当月总指标：</span>
				<span>{{planAmount}}元</span>
			</div>
			<div class="guide-kpi-data fn-clear">
				<div class="mgl20 fn-left mgb10" ng-repeat="guideList in guideLists track by $index">
					<span class="mgr5">
						{{guideList.salesName}}
					</span>
					<input type="text" class="data-input" ng-model="guideList.planAmount" ng-change="inputGuideAmount($index,guideList.planAmount)"/>
				</div>
			</div>
			<div class="guide-kpi-data fn-clear">
				<span class="fn-right" style="color:#333">当月合计：{{planAmount_a}}元</span>
			</div>
			<div class="mgt30">
				<button type="button" class="btn btn-primary addBrandBtn mgl20" ng-click="saveGuidePlan()">保存</button>
				<button type="button" class="btn btn-default mgl10" ng-click="cancelEdit()">取消</button>
			</div>
		</div>

		<!--导购业绩指标设定，每个人每个星期-->
		<div class="guide-kpi-default guide-kpi-daily pl0 pr0 col-md-12" ng-show = "notSetMonthPlan_a">
			<div class="guide-month-title  guide-daily-title  paddingb20 pdl20 pt20 ">
				<span>店铺当月总指标：</span>
				<span>{{planAmount}}元</span>
			</div>
			<div class="fn-clear">
				<div class="col-md-2 pl0 pr0 kpi-guide-list">
					<div class="kpi-guide-header">
						导购（当月指标）
						<a href="javascript:;" class="mgl5" ng-click="editGuideMonthPlan()">编辑</a>
					</div>
					<ul>
						<li ng-class="{'active':guideList.selected}" ng-repeat="guideList in guideLists track by $index" ng-click="chooseGuide(guideList.salesId,$index)">
							<span>{{guideList.salesName}}</span>
							<span>{{guideList.planAmount}}</span>
						</li>
					</ul>
				</div>
				<div class="col-md-10 pl0 pr0">
					<div class="date-head">
						<ul class="fn-clear">
							<li>周日</li>
							<li>周一</li>
							<li>周二</li>
							<li>周三</li>
							<li>周四</li>
							<li>周五</li>
							<li>周六</li>
						</ul>
					</div>
					<div class="datacontent mgb20 fn-clear">
						<!--设置每个月头几天空了几天-->
						<div class="date fn-left" ng-repeat="date in nullDate track by $index">
						</div>
						<div class="date fn-left" ng-repeat = "planList in planLists track by $index">
							<p class="mgt10 mgb10">{{planList.planDate}}日</p>
							<p>
								<input class="daily-kpi" type="text" ng-model = "planList.planAmount" ng-change="inputGuideDatePlan()"/>
							</p>
						</div>
					</div>
					<div class="paddingb20 mgl10 pt20" style="color:#333;font-size: 14px;">
						<span>合计：</span>
						<span>{{guideMonthPlanAmount}}元</span>
					</div>
					<button type="button" class="btn btn-primary mgl10" ng-click = "saveGuideDatePlan()">保存</button>
					<button type="button" class="btn btn-default mgl10" ng-click="reset()" >重置</button>
				</div>
			</div>
		</div>
	</div>
</div>