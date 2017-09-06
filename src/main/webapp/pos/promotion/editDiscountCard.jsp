<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!--------------- Content start ----------------->
<div class="content-wrapper content-wrapper-order">
	<div class="col-md-11 newDisCountBox">
		<div class="col-md-12 newDisCountComon fn-clear" >
			<div>卡券样式:</div>
			<div class="disCountCardBox disCountCardBoxStep" style="background:{{colorValue}}">
				<div class="disCountCardR1 fn-clear">
					<div class="fn-left disCountAmount disCountAmountStep disCountAmountStep2 " ng-show="couponModality=='1'&&amount1=='1'">
						<span class="am-ft-24">￥</span>
						<span class="am-ft-46">{{fixedLimit1 |number:0}}</span>
					</div>
					<div class="fn-left disCountAmount disCountAmountStep disCountAmountStep2" ng-show="couponModality=='1'&&amount1=='0'">
						<span class="am-ft-24">￥</span>
						<span class="am-ft-34 randomLineheight">{{randomMIn1 | number:0}}&nbsp;-</span>
						<span class="am-ft-34">{{randomMax1 | number:0}}</span>	
					</div>
					<div class="fn-left disCountAmount disCountAmountStep " ng-show="couponModality=='0'">
						<span class="am-ft-46">{{discount1 |number:1}}</span>
						<span class="am-ft-18">折</span>
					</div>
					<div class="fn-left disCountCondition">
						<p class="am-ft-20 disCountCardP">{{couponName}}</p>
						<p class="am-ft-12 anytimeUseP" ng-show="!notFullAmount">满{{fullAmounta}}元使用</p>
						<p class="am-ft-12 anytimeUseP" ng-show="notFullAmount">无门槛使用</p>
					</div>
				</div>
				<p>{{activeTime}}&nbsp;00:00&nbsp;至&nbsp;{{lapsedTime}}&nbsp;24:00</p>
			</div>
		</div>
		<div class="col-md-12 newDisCountComon fn-clear">
			<div>卡券名称:</div>
			<div>
				<input type="text" ng-model="couponName" name='couponName' ng-maxlength="8" />
			</div>
		</div>
		<div class="col-md-12 newDisCountComon fn-clear">
			<div>卡券形式:</div>
			<div>
				<select class="discountType" ng-model="couponModality" ng-change="changeType()" name="couponModality">
					<option value="1">优惠券</option>
					<option value="0">折扣券</option>
				</select>
			</div>
		</div>
		<div class="col-md-12 newDisCountComon fn-clear" ng-show="showDiscountType=='1'">
			<div>卡券额度:</div>
			<div>
				<label class="checkbox-inline">
									<input type="radio" class="" value="1"  ng-model="amount1" id="fixedLimit" name="amount1" ng-click="setLimit('1')">固定额度
							</label>
				<label class="checkbox-inline">
									<input type="radio" class="" id="randomLimit" value="0"  ng-model="amount1" name="amount1" ng-click="setLimit('2')">随机额度
							</label>
				<div ng-show="isLimitshow=='1'">
					<input type="text" class="inputSize" ng-value="" ng-model="fixedLimit1" name="fixedLimit" ng-change="isNum('2')" />&nbsp;元
					<span ng-show="showmess2=='1'" class="am-ft-red">*请输入合理数字</span>
				</div>
				<div ng-show="isLimitshow=='0'">
					<input type="text" class="inputSize" ng-value="" ng-model="randomMIn1" name="randomMIn" />&nbsp;元&nbsp;
					<span class="limitLine">——</span>
					<input type="text" class="inputSize" ng-value="" ng-model="randomMax1" name="randomMax" ng-change="isNum('3')" />&nbsp;元
					<span ng-show="showmess3=='1'" class="am-ft-red">*请输入合理数字</span>
					<span ng-show="showmess3=='2'" class="am-ft-red">*随机最大值不能小于最小值</span>
				</div>
			</div>

		</div>
		<div class="col-md-12 newDisCountComon fn-clear" ng-show="showDiscountType=='0'">
			<div>折扣力度:</div>
			<div>
				<input type="text" class="inputWidth" ng-model="discount" name="discount" placeholder="0-10" value="" ng-change="isNum('5')"/>&nbsp;折&nbsp;
				<span ng-show="showmess5=='1'" class="am-ft-red">*请输入0-10范围数字</span>
			</div>

		</div>
		<div class="col-md-12 newDisCountComon fn-clear">
			<div>满额条件:</div>
			<div>
				<span>满</span>
				<input type="text" id="fullAmount" class="inputSize" name="fullAmounta" ng-model="fullAmounta" ng-change="isNum('1')" />
				<span>元使用</span>
				<label class="checkbox-inline mgl10">
								<input type="checkbox" id="notfullAmount"  ng-model="notFullAmount" />
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;无门槛使用
							</label>
				<span ng-show="showmess1=='1'" class="am-ft-red">*请输入合理数字</span>
			</div>
		</div>
		<div class="col-md-12 newDisCountComon fn-clear">
			<div>有效时间:</div>
			<div class="setEffectTime">
				<input class="laydate-icon " placeholder="开始时间" type="text" id="start" ng-model="activeTime" name="activeTime" style="height: 31px;" />
				<span>——</span>
				<input class="laydate-icon " placeholder="结束时间" name="lapsedTime" ng-model="lapsedTime" type="text" id="end" style="height: 31px;" />
			</div>
		</div>
		<div class="col-md-12 newDisCountComon fn-clear">
			<div>会员限领:</div>
			<div>
				<input type="text" class="inputSize" ng-value="" name="limitCollar" ng-model="limitCollar" ng-change="isNum('4')" />&nbsp;份
				<span ng-show="showmess4=='1'" class="am-ft-red">*请输入合理数字</span>
			</div>
		</div>
		<div class="col-md-12 newDisCountComon fn-clear" ng-show="showDiscountType=='1'">
			<div class="">可否叠加:</div>
			<div class="">
				<label class="checkbox-inline" style="width: 162px;">
								<input type="radio" id="isAdd" name="superposition" ng-model="superposition"  value="y"/>可以与促销活动叠加
							</label >
				<label class="checkbox-inline" style="width: 162px;">
								<input type="radio"  id="notAdd"  ng-model="superposition"  name="superposition" value="n"/>不可与促销活动叠加

							</label>
			</div>
		</div>
		<div class="col-md-12 newDisCountComon fn-clear">
			<div class="">卡券类型:</div>
			<div class="">
				<label class="checkbox-inline">
								<input type="radio" ng-model="couponType" id="virtual" value="0" name="couponType"/>虚拟券
							</label>
				<label class="checkbox-inline">
								<input type="radio" id="object" ng-model="couponType"  name="couponType" value="1"/>实物券
							</label>
			</div>
		</div>
		<div class="col-md-12 newDisCountComon fn-clear" ng-if="couponType=='0'">
			<div class="">是否自动发放:</div>
			<div class="">
				<label class="checkbox-inline">
								<input type="radio"  value="y" id="virtual" ng-model="autoProviding"  name="autoProviding"/>是
							</label>
				<label class="checkbox-inline">
								<input type="radio" id="object" value="n" ng-model="autoProviding" name="autoProviding"/>否
							</label>
			</div>
		</div>
		<div class="col-md-12 newDisCountComon fn-clear">
			<div>发放数量:</div>
			<div>
				<input type="text" id="couponCount" class="inputSize" ng-model="couponCounta" />
				<span>张</span>
				<label class="checkbox-inline mgl10" ng-if="couponType=='0'">
					<input type="checkbox" id="notCouponCount" value="-1"  ng-model="notCouponCount"/>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;不限量
				</label>
			</div>
		</div>
		<div class="col-md-12 newDisCountComon fn-clear">
			<div>适用对象:</div>
			<div>
				<select name="memberScope" ng-model="memberScope1" ng-change="changeMemberScope()">
					<option value="allPeople">所有人</option>
					<option value="1">限定会员</option>
					<option value="allMember">所有会员</option>
				</select>
				<select ng-show="showMemberScope" ng-model="memberScope">
					<option value="{{gradeType.gradeId}}" ng-repeat="gradeType in memberGradeList">{{gradeType.memberUnionName}}&nbsp;{{gradeType.gradeName}}会员</option>
				</select>
			</div>
		</div>
		<div class="col-md-12 newDisCountComon fn-clear">
			<div>适用商品:</div>
			<div class="addStore">
				<select name="productScope" ng-model="productScope1" ng-change="changeProductScope()">
					<option value="0">所有商品</option>
					<option value="1">限定商品</option>
				</select>
				<img class="hasAddProImge" ng-show="showProductScope=='1'" src="../static/base/images/addProWord.png" ng-click="showFrame('1')" />
				<p class="am-ft-16 " ng-show="showProductScope=='2'">已选限定商品<span class="am-ft-d4 am-cursor" ng-click="showFrame('2')">{{countPro}}</span>款
					<img class="addProImge" src="../static/base/images/addProWord.png" ng-click="showFrame('1')" />
				</p>
			</div>
		</div>
		<div class="col-md-12 newDisCountComon fn-clear">
			<div>适用门店:</div>
			<div class="addStore">
				<select name="orgScope" ng-model="orgScope1" ng-change="changeOrgScope()">
					<option value="0">所有门店</option>
					<option value="1">限定门店</option>
				</select>
				<img class="hasAddProImge " ng-show="showChangeOrgScope=='1'" ng-click="showFrame('3')" src="../static/base/images/addStoreWords.png" />
				<p class="am-ft-16 " ng-show="showChangeOrgScope=='2'">已选限定门店<span class="am-ft-d4 am-cursor" ng-click="showFrame('4')">{{countShop}}</span>家
					<img class="addProImge" src="../static/base/images/addStoreWords.png" ng-click="showFrame('3')" />
				</p>
			</div>
		</div>
		<div class="col-md-12 newDisCountComon fn-clear">
			<div class="col-md-2"></div>
			<div class="col-md-10 discountNextBtn">
				<button class="upStep whiteGroundBlueBtn mgr5" ng-click="goback()">取消</button>
				<button class="complete blueGroundWhiteBtn" ng-click="editSave()" ng-show="editOrNew=='1'">保存</button>
				<button class="complete blueGroundWhiteBtn" ng-click="newdisCount()" ng-show="editOrNew=='2'">新建优惠券</button>
			</div>
		</div>

	</div>
</div>
<!--------------- Content end ----------------->
<!--弹框-->
<!-----------------添加限定产品---------------->
<div class="addGoodsAndStoreCover" ng-show="showtype!='0'">
	<div class="AddGoodsAndStoreItem fn-clear " ng-show="showtype=='1'">
		<div class="addItemTitle">
			<span>添加限定商品</span>
			<div>
				<img src="../static/base/images/closelogo.png" ng-click="closeDia()" />
			</div>
		</div>
		<div class="col-md-12 AddsGoodsscreeningConditionBox ">
			<div class="col-md-4 AddsGoodsscreeningCondition">
				<div>大品类：</div>
				<select ng-options="large.sortId as large.sortName for large in largeSorts" ng-model="large" ng-change="getParentSort(this)">
					<option value="">请选择</option>
				</select>
			</div>
			<div class="col-md-4 AddsGoodsscreeningCondition">
				<div>中品类：</div>
				<select ng-options="middle.sortId as middle.sortName for middle in parentSorts" ng-model="middle" ng-change="getSort(this)">
					<option value="">请选择</option>
				</select>
			</div>
			<div class="col-md-4 AddsGoodsscreeningCondition">
				<div>小品类：</div>
				<select ng-options="little.sortId as little.sortName for little in sorts" ng-model="little">
					<option value="">请选择</option>
				</select>
			</div>
			<div class="col-md-4 AddsGoodsscreeningCondition">
				<div>品牌：</div>
				<select ng-options="queryBrand.brandId as queryBrand.brandName for queryBrand in queryBrands" ng-model="queryBrand" ng-change="getConditions()">
					<option value="">请选择</option>
				</select>
			</div>
			<div class="col-md-4 AddsGoodsscreeningCondition">
				<div>年份：</div>
				<select ng-options="queryYear.proYear for queryYear in queryYears" ng-model="year">
					<option value="">请选择</option>
				</select>
			</div>
			<div class="col-md-4 AddsGoodsscreeningCondition">
				<div>季节：</div>
				<select ng-options="season.proSeason for season in seasons" ng-model="season">
					<option value="">请选择</option>
				</select>
			</div>
			<div class="col-md-4 AddsGoodsscreeningCondition">
				<div>款号：</div>
				<input type="text" name="proModelid" ng-model="proModelid" />
			</div>
			<div class="col-md-4 AddsGoodsscreeningCondition">
				<button ng-click="getStock()">查询</button>
			</div>
		</div>
		<div class="col-md-12 addGoodsTableBox">
			<form id="proInfo">
				<table class="addGoodsTable">
					<tr>
						<th scope="col" width="7%"></th>
						<th scope="col" width="15%">款号</th>
						<th scope="col" width="19%">商品名称</th>
						<th scope="col" width="16%">品牌</th>
						<th scope="col" width="20%">品类</th>
						<th scope="col" width="10%">年份</th>
						<th>季节</th>
					</tr>
					<tr ng-repeat="pro in products">
						<td>
							<input type="checkbox" name="productInfo" ng-checked="pro.getChecked" ng-click="selectProduct(this,'1')" />
						</td>
						<td>{{pro.proModelnum}}</td>
						<td>{{pro.proName | limitTo:8}}<span ng-if="pro.proName.length>8">...</span></td>
						<td>{{pro.brandName}}</td>
						<td>{{pro.grandparentSortName}}/{{pro.parentSortName}}/{{pro.sortName}}</td>
						<td>{{pro.proYear}}</td>
						<td>{{pro.proSeason}}</td>
					</tr>
				</table>
			</form>
		</div>
		<div class="col-md-12 checkAllBar">
			<label>
					<input  type="checkbox" ng-model="currentPage" ng-checked="currentPage" ng-click="selectProduct(products,'2')"/>
					全选当前页
				</label>
			<label>
					<input type="checkbox" ng-model="allPage" ng-checked="allPage"/>
					全选所有页
				</label>
			<div class="priv-pagelist fn-left" style="margin: 0;width: 64%;">
				<div id="paging"></div>
			</div>
		</div>
		<div class="fn-clear"></div>
		<div class="AddsGoodsItemBoundary"></div>
		<div class="AddsGoodsBtnBox">
			<button ng-click="closeDia()">取消</button>
			<button ng-click="addPro()">确定</button>
		</div>
	</div>
	<!-----------------查看已选限定产品----------------------------->
	<div class="AddGoodsAndStoreItem fn-clear" ng-show="showtype=='2'">
		<div class="addItemTitle">
			<span>已选限定商品（{{countPro}}款）</span>
			<div>
				<img src="../static/base/images/closelogo.png" ng-click="closeDia()" />
			</div>
		</div>
		<div class="col-md-12 AddsGoodsscreeningConditionBox">
			<!--<div class="col-md-4 AddsGoodsscreeningCondition">
					<div>大品类：</div>
					<select  ng-options="large.sortId as large.sortName for large in largeSorts" ng-model="large" ng-change="getParentSort(this)">
						<option value="">请选择</option>
					</select>
				</div>
				<div class="col-md-4 AddsGoodsscreeningCondition">
					<div>中品类：</div>
					<select  ng-options="middle.sortId as middle.sortName for middle in parentSorts" ng-model="middle" ng-change="getSort(this)" >
						<option value="">请选择</option>
					</select>
				</div>
				<div class="col-md-4 AddsGoodsscreeningCondition">
					<div>小品类：</div>
					<select ng-options="little.sortId as little.sortName for little in sorts" ng-model="little"  >
						<option value="">请选择</option>
					</select>
				</div>-->
			<div class="col-md-4 AddsGoodsscreeningCondition">
				<div>品牌：</div>
				<select ng-options="queryBrand.brandId as queryBrand.brandName for queryBrand in queryBrands" ng-model="queryBrand" ng-change="getConditions()">
					<option value="">请选择</option>
				</select>
			</div>
			<!--<div class="col-md-4 AddsGoodsscreeningCondition">
					<div>年份：</div>
					<select ng-options="queryYear.proYear for queryYear in queryYears" ng-model="year">
						<option value="">请选择</option>
					</select>
				</div>-->
			<!--<div class="col-md-4 AddsGoodsscreeningCondition">
					<div>季节：</div>
					<select ng-options="season.proSeason for season in seasons" ng-model="season" >
						<option value="">请选择</option>
					</select>
				</div>-->
			<div class="col-md-4 AddsGoodsscreeningCondition">
				<div>款号：</div>
				<input type="text" name="proModelid1" ng-model="proModelid1" />
			</div>
			<div class="col-md-4 AddsGoodsscreeningCondition">
				<button ng-click="query(queryBrand,proModelid1)">查询</button>
			</div>
		</div>
		<div class="col-md-12 addGoodsTableBox">
			<table class="addGoodsTable">
				<tr>
					<th scope="col" width="15%">款号</th>
					<th scope="col" width="19%">商品名称</th>
					<th scope="col" width="16%">品牌</th>
					<th scope="col" width="20%">品类</th>
					<th scope="col" width="10%">年份</th>
					<th scope="col" width="8%">季节</th>
					<th>操作</th>
				</tr>
				<tr ng-repeat="pro in showSelectSaveProArr">
					<td>{{pro.proModelnum}}</td>
					<td>{{pro.proName | limitTo:8}}<span ng-if="pro.proName.length>8">...</span></td>
					<td>{{pro.brandName}}</td>
					<td>{{pro.grandparentSortName}}/{{pro.parentSortName}}/{{pro.sortName}}</td>
					<td>{{pro.proYear}}</td>
					<td>{{pro.proSeason}}</td>
					<td>
						<a href="javascript:;" ng-click="deleteObj(this,'1')">移除</a>
					</td>
				</tr>
			</table>
			<!--<div class="pagelist priv-pagelist">
    				<div id="paging1"></div>    
			 </div>-->
		</div>
		<div class="fn-clear"></div>
		<!--<div class="AddsGoodsItemBoundary"></div>
			<div class="AddsGoodsBtnBox">
				<button ng-click="closeDia()">取消</button>
				<button  ng-click="saveProNum()">确定</button>
			</div>-->
		<div class="DelDialog deletePro" ng-if="showDelDialog=='1'">
			<div class="am-dialog-wrap">
				<div class="am-dialog-header deleteProWord">
					<span class="am-ft-center">确定要移除该商品吗？</span>
				</div>
				<div class="dialogBtn deleteProBtnBox am-flexbox">
					<button type="button" class="cancel_btn am-button" ng-click="cancelFrame()">取消</button>
					<button type="button" class="sure_btn SavEdit" ng-click="deletePro()">确认</button>
					<input type="reset" name="reset" style="display: none;" />
					<div class="fn-clear"></div>
				</div>
			</div>
			</div>
	</div>
	<!-------------添加限定门店----------------------->
	<div class="AddGoodsAndStoreItem fn-clear " id="addLimitStore" ng-show="showtype=='3'">
		<div class="addItemTitle">
			<span>添加限定门店</span>
			<div>
				<img src="../static/base/images/closelogo.png" ng-click="closeDia()" />
			</div>
		</div>
		<div class="col-md-12 AddsGoodsscreeningConditionBox AddsGoodsBox2">
			<div class="col-md-4 AddStoreScreeningCondition">
				<div>门店编号：</div>
				<input name="shopOrgId" type="text" ng-model="shopOrgId" placeholder="请输入门店编号">
			</div>
			<div class="col-md-4 AddStoreScreeningCondition">
				<div>门店名称：</div>
				<input name="shopName" type="text" ng-model="shopName" placeholder="请输入门店名称">
			</div>
			<div class="col-md-4 AddsGoodsscreeningCondition">
				<button ng-click="getShop()">查询</button>
			</div>
		</div>
		<div class="col-md-12 addGoodsTableBox">
			<table class="addGoodsTable">
				<tr>
					<th scope="col" width="12%"></th>
					<th scope="col" width="32%">门店编号</th>
					<th scope="col">门店名称</th>

				</tr>
				<tr ng-repeat="shop in orgList">
					<td>
						<input type="checkbox" name="shop" ng-checked="shop.getChecked" ng-click="selectShop(this,'1')" />
					</td>
					<td>{{shop.shopNum}}</td>
					<td>{{shop.shopName}}</td>

				</tr>

			</table>
		</div>
		<!--<div class="col-md-12 checkAllBar checkAllBar2">
				<label >
					<input  type="checkbox" ng-model="allShop" ng-checked="allShop" ng-click="selectShop(shop,'2')"/>
					全选当前页
				</label>
				<label >
					<input type="checkbox"/>
					全选所有页
				</label>
				<div class="pagelist priv-pagelist">
    				<div id="paging2"></div>    
   				 </div>
			</div>-->
		<div class="fn-clear"></div>
		<div class="AddsGoodsItemBoundary"></div>
		<div class="AddsGoodsBtnBox">
			<button ng-click="closeDia()">取消</button>
			<button ng-click="addShop()">确定</button>
		</div>
	</div>
	<!-------------已选限定门店----------------------->
	<div class="AddGoodsAndStoreItem fn-clear " ng-show="showtype=='4'">
		<div class="addItemTitle">
			<span>已选限定门店（{{countShop}}个）</span>
			<div>
				<img src="../static/base/images/closelogo.png" ng-click="closeDia()" />
			</div>
		</div>
		<div class="col-md-12 AddsGoodsscreeningConditionBox AddsGoodsBox2">
			<div class="col-md-4 AddStoreScreeningCondition">
				<div>门店编号：</div>
				<input name="shopOrgId" type="text" ng-model="shopOrgId" placeholder="请输入门店编号">
			</div>
			<div class="col-md-4 AddStoreScreeningCondition">
				<div>门店名称：</div>
				<input name="shopName" type="text" ng-model="shopName" placeholder="请输入门店名称">
			</div>
			<div class="col-md-4 AddsGoodsscreeningCondition">
				<button ng-click="queryShop(shopOrgId,shopName)">查询</button>
			</div>
		</div>
		<div class="col-md-12 addGoodsTableBox">
			<table class="addGoodsTable">
				<tr>
					<th width="32%">门店编号</th>
					<th width="54%">门店名称</th>
					<th>操作</th>

				</tr>
				<tr ng-repeat="shop in showSelectSaveShopArr">
					<td>{{shop.shopNum}}</td>
					<td>{{shop.shopName}}</td>
					<td>
						<a href="javascript:;" ng-click="deleteObj(this,'2')">移除</a>
					</td>
				</tr>

			</table>
			<!--<div class="pagelist priv-pagelist">
    				<div id="paging4"></div>    
   				 </div>-->
		</div>
		<div class="col-md-12 checkAllBar checkAllBar2">
		</div>
		<div class="fn-clear"></div>
		<!--<div class="AddsGoodsItemBoundary"></div>-->
		<!--<div class="AddsGoodsBtnBox">
				<button ng-click="closeDia()">取消</button>
				<button ng-click="saveShopOrgId()">确定</button>
			</div>-->
		<div class="DelDialog deleteShop" ng-if="showDelDialog=='2'">
			<div class="am-dialog-wrap">
				<div class="am-dialog-header deleteProWord">
					<span class="am-ft-center">确定要移除该门店吗？</span>
				</div>
				<div class="dialogBtn deleteProBtnBox  am-flexbox">
					<button type="button" class=" cancel_btn am-button" ng-click="cancelFrame()">取消</button>
					<button type="button" class="sure_btn SavEdit"  ng-click="deleteShop()">确认</button>
					<input type="reset" name="reset" style="display: none;" />
					<div class="fn-clear"></div>
				</div>
			</div>
		</div>	
	</div>
</div>

<script>
	$(function() {
		$("#fullAmount").click(function() {
			$("#notfullAmount").removeAttr("checked");
		});
		$("#notfullAmount").click(function() {
			$("#fullAmount").val("");
		})
		$("#couponCount").click(function() {
			$("#notCouponCount").removeAttr("checked");
		});
		$("#notCouponCount").click(function() {
			$("#couponCount").val("");
		});
		$('.addGoodsAndStoreCover').click(function(e) {
		if(e.target.className == "addGoodsAndStoreCover ng-scope") {
			$('.addGoodsAndStoreCover').hide();
		}
		});
	})
</script>