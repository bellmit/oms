<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!--运费模板管理页面-->
<div class="content-wrapper  fn-clear">
	<div class="wx-content pdl20 fn-clear">
		<div class="wx-head freight-header col-md-10 mgb15 pl0 pr0 fn-clear">
			<div class="wx-title fn-left">添加运费模板</div>
			<button type="button" class="unionBriefReturn" ng-click="goback()">返回</button>
		</div>
		<div class="col-md-10 mgb15 pl0 pr0 freight-edit-content">
			<div class="freight-name freight-row">
				<span class="freight-info-item">模板名称:</span>
				<input type="text" ng-model="logiticTemplateName" />
				<span class="am-ft-gray">请在1-12个字内输入</span>
			</div>
			<div class="freight-type fn-clear freight-row">
				<span class="fn-left freight-info-item">计价方式:</span>
				<label for="count" class="fn-left" ng-if="calType=='1'">
					<!--<input type="radio" class="mg0"  value="1" ng-model="calType"  name="type" id="count"/>-->
					按件数
				</label>
				<label for="weight" class="fn-left " ng-if="calType=='0'">
					<!--<input type="radio" name="type" value="0" ng-model="calType" class="mg0" id="weight"/>-->
					按重量
				</label>
			</div>
			<div class="freight-name freight-row fn-clear">
				<span class="freight-info-item fn-left">运费设置:</span>
				<span class="am-ft-red">除限定城市区域外其他按默认运费</span>
			</div>
			<div class="freight-set-wraper col-md-12 pr0 mgb20" ng-show="calType=='1'">
				<div class="freight-set-content">
					<div class="freight-set-top mgb10">
						<span>默认运费：</span>
						<span>数量在</span>
						<input type="text" ng-model="details_default_count.baseAmount" />
						<span>件内</span>
						<input type="text" ng-model="details_default_count.basePrice" />
						<span>元运费，每增加</span>
						<input type="text" ng-model="details_default_count.addAmount" />
						<span>件加</span>
						<input type="text" ng-model="details_default_count.addPrice" />
						<span>元运费。</span>
					</div>
					<table class="table freight-set-table table-hover table-striped table-bordered mgb20">
						<tr>
							<th class="col-md-3">运送到</th>
							<th class="col-md-2">首件(个)</th>
							<th class="col-md-2">运费(元)</th>
							<th class="col-md-2">续件(个)</th>
							<th class="col-md-2">运费(元)</th>
							<th class="col-md-1">操作</th>
						</tr>
						<tr ng-repeat="detail in detail_countArr track by $index">
							<td>
								<div class="fn-left" ng-if="detail.locationArr.length!=0">
									<span ng-repeat="location in detail.locationArr track by $index">
										<span>{{location.locationName}}</span>
									<span ng-if="$index+1 != detail.locationArr.length">
									、
									</span>
									</span>
								</div>
								<div class="fn-left" ng-if="detail.locationArr.length==0">未添加地区</div>
								<div class="fn-right">
									<a href="javascript:;" ng-click="addArea($index)">编辑</a>
								</div>
							</td>
							<td>
								<input type="text" ng-model="detail.baseAmount" />
							</td>
							<td>
								<input type="text" ng-model="detail.basePrice" />
							</td>
							<td>
								<input type="text" ng-model="detail.addAmount" />
							</td>
							<td>
								<input type="text" ng-model="detail.addPrice" />
							</td>
							<td>
								<a href="javascript:;" ng-click="deletedetail_countArr($index)">删除</a>
							</td>
						</tr>
					</table>
					<a href="javascript:;" ng-click="addCity_count()">为指定地区城市设置运费</a>
				</div>
			</div>
			<div class="freight-set-wraper col-md-12 pr0 mgb20" ng-show="calType=='0'">
				<div class="freight-set-content">
					<div class="freight-set-top mgb10">
						<span>默认运费：</span>
						<span>重量在</span>
						<input type="text" ng-model="details_default_weight.baseAmount" />
						<span>KG内</span>
						<input type="text" ng-model="details_default_weight.basePrice" />
						<span>元运费，每增加</span>
						<input type="text" ng-model="details_default_weight.addAmount" />
						<span>KG加</span>
						<input type="text" ng-model="details_default_weight.addPrice" />
						<span>元运费。</span>
					</div>
					<table class="table freight-set-table table-hover table-striped table-bordered mgb20">
						<tr>
							<th class="col-md-3">运送到</th>
							<th class="col-md-2">首重(KG)</th>
							<th class="col-md-2">运费(元)</th>
							<th class="col-md-2">续重(KG)</th>
							<th class="col-md-2">运费(元)</th>
							<th class="col-md-1">操作</th>
						</tr>
						<tr ng-repeat="detail in detail_weightArr track by $index">
							<td>
								<div class="fn-left" ng-if="detail.locationArr.length!=0">
									<span ng-repeat="location in detail.locationArr track by $index">
										<span>{{location.locationName}}</span>
									<span ng-if="$index+1 != detail.locationArr.length">
									、
									</span>
									</span>
								</div>
								<div class="fn-left" ng-if="detail.locationArr.length==0">未添加地区</div>
								<div class="fn-right">
									<a href="javascript:;" ng-click="addArea($index)">编辑</a>
								</div>
							</td>
							<td>
								<input type="text" ng-model="detail.baseAmount" />
							</td>
							<td>
								<input type="text" ng-model="detail.basePrice" />
							</td>
							<td>
								<input type="text" ng-model="detail.addAmount" />
							</td>
							<td>
								<input type="text" ng-model="detail.addPrice" />
							</td>
							<td>
								<a href="javascript:;" ng-click="deletedetail_weightArr($index)">删除</a>
							</td>
						</tr>
					</table>
					<a href="javascript:;" ng-click="addCity_weight()">为指定地区城市设置运费</a>
				</div>
			</div>
			<div class=" freight-row fn-clear">
				<span class="freight-info-item fn-left">适用微店:</span>
				<div class="fn-left fn-clear col-md-11 pl0 pr0">
					<div class="fn-left fn-clear freight-useshop mgr20 mgb15" ng-repeat="shopList in shopLists">
						<input type="checkbox" ng-model="shopList.selected" class="mgr5 mgt0" ng-click="chooseOrgId(shopList.orgId)">
						<img ng-src="{{shopList.shopLogo}}" alt="" />
						<span class="mgl10">{{shopList.shopName}}</span>
					</div>
				</div>
			</div>
			<div style="padding-left: 70px;">
				<button type="button" class="btn btn-primary addBrandBtn mgl0" ng-click="saveFreightTemp()">保存</button>
				<button type="button" class="btn btn-default mgl10" ng-click="goback()">取消</button>
			</div>
		</div>
	</div>

	<!--选择区域的弹窗-->
	<div class="area-dialog-content" ng-show="showAreaDialog == 'show'">
		<!--<div class="area-dialog-content">-->
		<div class="area-dialog">
			<div class="area-dialog-top fn-clear">
				<span class="fn-left">选择区域</span>
				<a href="javascript:;" ng-click="closeDia()"><img src="../static/base/images/closelogo.png" alt="" class="fn-right" /></a>
			</div>
			<div class="area-list fn-clear" ng-repeat="arrList in areaArr track by $index">
				<div class="fn-left area-name">
					<input type="checkbox" ng-model="arrList.pArea.doSelect" ng-click="selectArea('1',arrList,$index)" />
					<span>
						<span>{{arrList.pArea.locationName}}

						</span>
					<!--<i class="fa fa-caret-down" ng-if="$index!=0" aria-hidden="true"></i>-->
					</span>
				</div>
				<div class="fn-left area-name" ng-repeat="arr in arrList.cArea track by $index">
					<input type="checkbox" ng-model="arr.doSelect" ng-click="selectArea('2',arrList,$index)" />
					<span ng-click="loadCity(arr,arrList,$event,$index)">
						<span>{{arr.locationName}}
							<em class="am-ft-red" ng-if="arr.selectCount != 0 ">({{arr.selectCount}})</em>
						</span>
					<i class="fa fa-caret-down" aria-hidden="true"></i>
					</span>
				</div>
			</div>
			<div class="area-list fn-clear" ng-repeat="specialArea in specialAreaArr">
				<div class="fn-left area-name">
					<input type="checkbox" ng-model="specialArea.pArea.doSelect" ng-click="selectArea('1',specialArea,$index)" />
					<span>{{specialArea.pArea.locationName}}</span>
					<!--<i class="fa fa-caret-down" ng-if="$index!=0" aria-hidden="true"></i>-->
				</div>
				<div class="fn-left area-name" ng-repeat="arr in specialArea.cArea">
					<input type="checkbox" ng-model="arr.doSelect" ng-click="selectArea('2',specialArea,$index)" />
					<span>{{arr.locationName}}</span>
				</div>
			</div>
			<div class="area-dialog-bottom">
				<!--显示城市的弹窗-->
				<div class="area-city-content fn-clear fn-hide" id="area-city-content">
					<div class="fn-clear">
						<div class="fn-left mgr15 mgb10" ng-repeat="cityList in cityLists track by $index">
							<input type="checkbox" ng-model="cityList.doSelect" ng-click="selectArea('3',cityList,$index)" />
							<span>{{cityList.locationName}}</span>
						</div>
					</div>
					<div class="fn-clear">
						<button class="fn-right" ng-click="closeCityDialog()">
					关闭
						</button>
					</div>
				</div>
				<div class="buttondiv">
					<button type="button" class="btn btn-primary addBrandBtn mgl0" ng-click="sureAddArea()">确认</button>
					<button type="button" class="btn btn-default mgl10" ng-click="closeDia()">取消</button>
				</div>
			</div>
		</div>

	</div>

	<!--选择区域的弹窗-->
</div>

</div>
<script>
	$(".area-dialog").center();
</script>
<!--添加运费模板页面-->

<!--添加运费模板页面-->