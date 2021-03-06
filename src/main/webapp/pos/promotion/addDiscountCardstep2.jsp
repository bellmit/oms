<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
	<!--------------- Content start ----------------->
			<div class="content-wrapper content-wrapper-order disCountCard-content-wrapper">
			  	<div class="col-md-11  addDiscountNav">
			  		<div class="addDiscountNav2_01 fn-left">
			  			<span class="discound_nav">卡券信息输入</span>
			  		</div>
				    <div class="addDiscountNav2_02">
			  			<span class="discound_nav">卡券数量及范围数量</span>
				    </div>
				    <div class="addDiscountNav2_03">
			  			<span class="discound_nav">添加成功</span>
				    </div>
			    </div>
			    <div class="fn-clear"></div>
				<div class="col-md-11 newDisCountBox fn-clear">
					<form id="step2">
					<div class="col-md-12 newDisCountComon fn-clear">
						<div>卡券样式:</div>
						<div id="bgcolor" class="disCountCardBox disCountCardBoxStep">
							<div class="disCountCardR1 fn-clear">
								<div class="fn-left disCountAmount disCountAmountStep disCountAmountStep2 paddinglr10" ng-show="couponModality=='1'&&amount=='1'">
									<span class="am-ft-24">￥</span>
									<span class="am-ft-46">{{fixedLimit | number:0}}</span>
								</div>
								<div class="fn-left disCountAmount disCountAmountStep disCountAmountStep2" ng-show="couponModality=='1'&&amount=='0'">
										<span class="am-ft-24">￥</span>
										<span class="am-ft-34 randomLineheight">{{randomMIn | number:0}}&nbsp;-</span>
										<span class="am-ft-34">{{randomMax | number:0}}</span>	
									
								</div>
								<div class="fn-left disCountAmount disCountAmountStep disCountAmountStep2 paddinglr10"  ng-show="couponModality=='0'">
									<span class="am-ft-46">{{discount| number:1}}</span>
									<span class="am-ft-18">折</span>
								</div>
								<div class="fn-left disCountCondition">
									<p class="am-ft-20 disCountCardP">{{disCountName}}</p>
									<p class="am-ft-12 anytimeUseP" ng-show="fullAmount!='0'">满{{fullAmount}}元使用</p>
									<p class="am-ft-12 anytimeUseP" ng-show="fullAmount=='0'">无门槛使用</p>
								</div>
							</div>
							<p>{{activeTime}}&nbsp;00:00&nbsp;至&nbsp;{{lapsedTime}}&nbsp;24:00</p>
						</div>
					</div>
					<div class="col-md-12 newDisCountComon fn-clear">
						<div >发放数量:</div>
						<div >
							<input type="text" id="couponCount" class="inputSize"  ng-model="couponCounta"  ng-change="isNum('1')"/>
							<span>张</span>
							<label class="checkbox-inline mgl10" ng-if="couponType=='0'">
								<input type="checkbox" id="notCouponCount"  ng-model="notCouponCount" ng-change="isNum('2')"/>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;不限量
							</label>
							<span ng-show="showmess1=='1'" class="am-ft-red">*请输入发放数量</span>
						</div>
					</div>
					<div class="col-md-12 newDisCountComon fn-clear">
						<div>适用对象:</div>
						<div >
							<select name="memberScope" ng-model="memberScope" ng-change="changeMemberScope()">
								<option value="AllPeople">非会员可用</option>
								<option value="1">限定会员</option>
								<option value="AllMember">所有会员</option>
							</select>
							<select ng-show="showMemberScope" ng-model="vipGsradeId">
								<option value="{{gradeType.gradeId}},{{gradeType.memberUnionId}},{{gradeType.memberUnionName}},{{gradeType.gradeName}}" ng-repeat="gradeType in memberGradeList">{{gradeType.memberUnionName}}&nbsp;{{gradeType.gradeName}}会员</option>
							</select>
						</div>
					</div>
					<div class="col-md-12 newDisCountComon fn-clear">
						<div >适用商品:</div>
						<div class="addStore">
							<select name="productScope" ng-model="productScope" ng-change="changeProductScope()">
								<option value="0">所有商品</option>
								<option value="1">限定商品</option>
							</select>
							<div class="addImage_step" ng-show="showProductScope=='1'" ng-click="showFrame('1')">
								<span>添加适用商品</span>
							</div>
							<div ng-show="showProductScope=='2'">
								<div class="fn-left am-ft-16 am-cursor mgr15" ng-click="showFrame('2')">已选限定商品<span class="am-ft-d4 " >{{countPro}}</span>款
								</div>
								<div class="fn-left addImage_step" ng-click="showFrame('1')">
									<span>添加适用商品</span>
								</div>
							</div>
								<!--<img class="addProImge" src="../static/base/images/addProWord.png" ng-click="showFrame('1')"/>-->
						</div>
					</div>
					<div class="col-md-12 newDisCountComon fn-clear">
						<div >适用门店:</div>
						<div class="addStore">
							<select name="orgScope" ng-model="orgScope" ng-change="changeOrgScope()">
								<option value="0">所有门店</option>
								<option value="1">限定门店</option>
							</select>
							<div class="addImage_step" ng-show="showChangeOrgScope=='1'" ng-click="showFrame('3')">
								<span>添加适用门店</span>
							</div>
							<div ng-show="showChangeOrgScope=='2'">
								<div class="fn-left am-ft-16 am-cursor mgr15" ng-click="showFrame('4')">已选限定门店<span class="am-ft-d4 " >{{countShop}}</span>家
								</div>
								<div class="fn-left addImage_step" ng-click="showFrame('3')">
									<span>添加适用门店</span>
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-12 newDisCountComon fn-clear">
						<div class="col-md-2"></div>
						<div class="col-md-10 discountNextBtn">
							<button class="upStep whiteGroundBlueBtn mgr5" ng-click="goBack()">上一步</button>
							<button class="complete blueGroundWhiteBtn" ng-click="nextStep('2')">完成</button>
						</div>
					</div>
					</form>
				</div>
			</div>
		<!--------------- Content end ----------------->
		<!--弹框-->
			<!-----------------添加限定产品---------------->
	<div class="addGoodsAndStoreCover" ng-show="showtype!='0'" >
		<div class="AddGoodsAndStoreItem fn-clear " ng-show="showtype=='1'">
			<div class="addItemTitle">
				<span>添加限定商品</span>
				<div>
					<img src="../static/base/images/closelogo.png" ng-click="closeDia()"/>
				</div>	
			</div>
			<div class="col-md-12 AddsGoodsscreeningConditionBox ">
				<div class="col-md-4 AddsGoodsscreeningCondition">
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
				</div>
				<div class="col-md-4 AddsGoodsscreeningCondition">
					<div>品牌：</div>
					<select  ng-options="queryBrand.brandId as queryBrand.brandName for queryBrand in queryBrands" ng-model="queryBrand" ng-change="getConditions()">
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
					<select ng-options="season.proSeason for season in seasons" ng-model="season" >
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
						<th >季节</th>
					</tr>
					<tr ng-repeat="pro in products">
						<td >
							<input type="checkbox"  name="productInfo" ng-checked="pro.getChecked" ng-click="selectProduct(this,'1')" />
						</td>
						<td >{{pro.proModelnum}}</td>
						<td >{{pro.proName | limitTo:8}}<span ng-if="pro.proName.length>8">...</span></td>
						<td >{{pro.brandName}}</td>
						<td >{{pro.grandparentSortName}}/{{pro.parentSortName}}/{{pro.sortName}}</td>
						<td >{{pro.proYear}}</td>
						<td>{{pro.proSeason}}</td>
					</tr>
				</table>
				</form>
			</div>
			<div class="col-md-12 checkAllBar">
				<label >
					<input  type="checkbox" ng-model="currentPage" ng-checked="currentPage" ng-click="selectProduct(products,'2')"/>
					全选当前页
				</label>
				<label >
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
		<div class="AddGoodsAndStoreItem fn-clear" ng-show="showtype=='2'" >
			<div class="addItemTitle">
				<span>已选限定商品（{{countPro}}款）</span>
				<div>
					<img src="../static/base/images/closelogo.png" ng-click="closeDia()"/>
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
					<select  ng-options="queryBrand.brandId as queryBrand.brandName for queryBrand in queryBrands" ng-model="queryBrand" ng-change="getConditions()">
						<option value="">请选择</option>
					</select>
				</div>
				<!--<div class="col-md-4 AddsGoodsscreeningCondition">
					<div>年份：</div>
					<select ng-options="queryYear.proYear for queryYear in queryYears" ng-model="year">
						<option value="">请选择</option>
					</select>
				</div>
				<div class="col-md-4 AddsGoodsscreeningCondition">
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
						<th >操作</th>
					</tr>
					<tr ng-repeat="pro in showSelectSaveProArr track by $index">
						<td >{{pro.proModelnum}}</td>
						<td >{{pro.proName | limitTo:8}}<span ng-if="pro.proName.length>8">...</span></td>
						<td >{{pro.brandName}}</td>
						<td >{{pro.grandparentSortName}}/{{pro.parentSortName}}/{{pro.sortName}}</td>
						<td >{{pro.proYear}}</td>
						<td>{{pro.proSeason}}</td>
						<td><a href="javascript:;" ng-click="deleteObj(this,'1')">移除</a></td>
					</tr>
				</table>
			<!--<div class="pagelist priv-pagelist">
    				<div id="paging2"></div>    
			 </div>-->
			</div>
			<div class="fn-clear"></div>
			<div class="AddsGoodsItemBoundary"></div>
			<!--<div class="AddsGoodsBtnBox">
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
		<div class="AddGoodsAndStoreItem fn-clear " id="addLimitStore" ng-show="showtype=='3'" >
			<div class="addItemTitle">
				<span>添加限定门店</span>
				<div>
					<img src="../static/base/images/closelogo.png" ng-click="closeDia()"/>
				</div>	
			</div>
			<div class="col-md-12 AddsGoodsscreeningConditionBox AddsGoodsBox2">
				<div class="col-md-4 AddStoreScreeningCondition">
					<div>门店编号：</div>
					<input name="shopNum" type="text" ng-model="shopNum" placeholder="请输入门店编号">
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
						<td >
							<input type="checkbox"  name="shop" ng-checked="shop.getChecked" ng-click="selectShop(this,'1')"/>
						</td>
						<td>{{shop.orgId}}</td>
						<td >{{shop.shopName}}</td>
						
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
			<!--<div class="AddsGoodsItemBoundary"></div>-->
			<div class="AddsGoodsBtnBox">
				<button ng-click="closeDia()">取消</button>
				<button ng-click="addShop()">确定</button>
			</div>
		</div>
		<!-------------已选限定门店----------------------->
		<div class="AddGoodsAndStoreItem fn-clear " ng-show="showtype=='4'" >
			<div class="addItemTitle">
				<span>已选限定门店（{{countShop}}个）</span>
				<div>
					<img src="../static/base/images/closelogo.png" ng-click="closeDia()"/>
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
						<th >操作</th>
						
					</tr>
					<tr ng-repeat="shop in showSelectSaveShopArr">
						<td>{{shop.orgId}}</td>
						<td >{{shop.shopName}}</td>
						<td><a href="javascript:;" ng-click="deleteObj(this,'2')">移除</a></td>
					</tr>
					
				</table>
				<div class="pagelist priv-pagelist">
    				<div id="paging4"></div>    
   				 </div>
			</div>
			<div class="col-md-12 checkAllBar checkAllBar2">
			</div>
			<div class="fn-clear"></div>
			<div class="AddsGoodsItemBoundary"></div>
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
	
	<script>
				$(function(){
					//选择限量
					$("#couponCount").click(function(){
						$("#notCouponCount").removeAttr("checked");
					});
					//选择限量
					$("#notCouponCount").click(function(){
						$("#couponCount").val("");
					})
					 
					$('.addGoodsAndStoreCover').click(function(e) {
					if(e.target.className == "addGoodsAndStoreCover ng-scope") {
						$('.addGoodsAndStoreCover').hide();
					}
					});
				})
			</script>