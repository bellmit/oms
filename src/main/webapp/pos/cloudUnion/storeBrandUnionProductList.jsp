<%@ page contentType="text/html; charset=utf-8" language="java" import="java.util.*" errorPage="" %>
<!--------------- Content start ----------------->
<!--云仓商品列表(门店)-->
<div class="content-wrapper content-wrapper-order" ng-hide="showPro==1" ng-init="showPro=0">
	<div class="col-md-11 pageTitl removeBottom">
		<div class="unionBrief ">
			<h2 class="am-ft-16 ">{{cloudNameD}}</h2>
			<p>
				<span class="descriColor1">品牌：</span><span class="descriColor2">{{brandNameD}}&nbsp;&nbsp;</span>
				<span class="descriColor1">创建者：</span><span class="descriColor2">{{shopNameD}}&nbsp;&nbsp;</span>
				<span class="descriColor1">状态：</span><span class="descriColor2">已加入</span>
			</p>
		</div>
		<button type="button" class="unionBriefReturn" ng-click="gobackA()">返回</button>
	</div>
	<div class="fn-clear"></div>
	<!-- search -->
	<div class="col-md-11 codeSelect">
		<span>所有商品（共{{storeStockCount}}条记录）</span>
		<div class="codeSelectRight">
			<input type="text" placeholder="款号查询" ng-model='proNumA'/>
			<button class="codeSelectBtn" ng-click="searchProduct('proNum')">查询</button>
			<button class="tidySelectBtn" ng-click="showFilterAdition()">精简筛选条件</button>
		</div>
	</div>
	<div class="col-md-11 tidySelect tidySelectStore" ng-show="defaultObj.moreFiltAdition=='show'">
		<div class="tidySelectRow1">
			<div>
				<span>年份：</span>
				<select class="selectYear" ng-model="proYear">
					<option selected="selected" value="">请选择</option>
					<option ng-value="queryYear.proYear" ng-repeat="queryYear in queryYears">{{queryYear.proYear}}</option>
				</select>
			</div>
			<div>
				<span>季节：</span>
				<select class="selectSeason" ng-model="proSeason">
					<option selected="selected" value="">请选择</option>
					<option ng-value="season.proSeason" ng-repeat="season in seasons">{{season.proSeason}}</option>
				</select>
			</div>
		</div>
		<div class="tidySelectRow2">
			<div>
				<span>大品类：</span>
				<select class="selectBig" ng-model="proGrandparentSortId" ng-change="getParentSort()">
					<option selected="selected" value="">请选择</option>
					<option ng-value="grandparentSort.proGrandparentSortId" ng-repeat="grandparentSort in grandparentSorts">{{grandparentSort.grandparentSortName}}</option>
				</select>
			</div>
			<div>
				<span>中品类：</span>
				<select class="selectMid" ng-model="proParentSortId" ng-change="getSort()">
					<option selected="selected" value="">请选择</option>
					<option ng-value="parentSort.proParentSortId" ng-repeat="parentSort in parentSorts">{{parentSort.parentSortName}}</option>
				</select>
			</div>
			<div>
				<span>小品类：</span>
				<select class="selectSmall" ng-model="proSortId">
					<option selected="selected" value="">请选择</option>
					<option ng-value="sort.proSortId" ng-repeat="sort in sorts">{{sort.sortName}}</option>
				</select>
			</div>
		</div>
		<div class="tidySelectRow3">
			<div class="setUnionSave fn-clear">
				<span class="fn-left">云仓库存：</span>
				<select class="fn-left" ng-model="status">
					<option selected="selected" value="">全部</option>
					<option value="1">已设置云仓库存</option>
					<option value="2">未设置云仓库存</option>
					<option value="3">已设置云仓库存未设置O2O最低价</option>
				</select>
			</div>
			<div class="unionSave">
				<span>云仓库存小于：</span>
				<input type="text"  ng-model="cloudStock"/>&nbsp;件
			</div>
			<div class="storeSave">
				<span>实际库存大于：</span>
				<input type="text"  ng-model="stock"/>&nbsp;件
			</div>

			<button class="tidySelectButton" ng-click="searchProduct('filter')">查询</button>
		</div>
	</div>
	<!-- /search -->
	<!-- Main content -->
	<div class="col-md-11" style="margin-left:20px;padding: 0;">
		<form>
			<div class="ordersTable o2o-ordersTable ">
				<table class="table unoinListTable">
					<tr>
						<th scope="col">商品</th>
						<th scope="col">吊牌价</th>
						<th scope="col">O2O结算价</th>
						<th scope="col">实际库存</th>
						<th scope="col">云仓库存</th>
						<th scope="col">操作</th>
					</tr>
					<tr ng-repeat="storeStockList in storeStockLists" ng-class="{true:'td-notset',false:'td-set'}[storeStockList.minPrice=='' && storeStockList.maxPrice=='' && storeStockList.cloudStock=='0']">
						<td>
							<div class="goodsDesc fn-clear">
								<input type="checkbox" ng-checked="storeStockList.getCheckedB" ng-click="chooseProduct(this,storeStockList,'one')" class="selectcheckbox fn-left">
								<div class="goodsImg">
									<img ng-src="{{storeStockList.proPic}}" />
								</div>
								<div class="goodsDetil">
									<p>{{storeStockList.proName}}</p>
									<p>款号：{{storeStockList.proModelnum}}</p>
									<p>柒牌 &nbsp;{{storeStockList.grandparentSortName}}/{{storeStockList.parentSortName}}/{{storeStockList.sortName}} &nbsp;{{storeStockList.proYear}}年&nbsp;{{storeStockList.proSeason}}</p>
								</div>
							</div>
						</td>
						<td>{{storeStockList.proPrice}}元</td>
						<td>
							<p ng-if="storeStockList.minPrice==''&&storeStockList.maxPrice==''">未设置</p>
							<p ng-if="storeStockList.minPrice!=''||storeStockList.maxPrice!=''">
								<span ng-if="storeStockList.minPrice==storeStockList.maxPrice">{{storeStockList.minPrice}}元</span>
								<span ng-if="storeStockList.minPrice!=storeStockList.maxPrice">{{storeStockList.minPrice}}元-{{storeStockList.maxPrice}}元</span> 
							</p>	
							<img ng-if="storeStockList.allowPrice!=''" src="../static/base/images/icon_limit.png" alt="" style="height:30px;height:16px" />
						</td>
						<td>
							<span ng-if='storeStockList.stock==""'>未设置</span>
							<span ng-if='storeStockList.stock!=""'>{{storeStockList.stock}}件</span>
						</td>
						<td class="ofont">
							<span ng-if='storeStockList.cloudStock==""'>未设置</span>
							<span ng-if='storeStockList.cloudStock!=""'>{{storeStockList.cloudStock}}件</span>
						</td>
						<td class="unionProductListOperation" id="unionProductListOperation">
							<a class="operationa" href="javascript:;" ng-click="getEditeFrame('1',this)" >编辑结算价</a>
							<a class="operationb" href="javascript:;" ng-click="getEditeFrame('2',this)">编辑云仓库存</a>
						</td>
					</tr>
				</table>
			</div>
		</form>
		<!-- 分页 -->
		<!--分页 start-->
		<div class="fn-clear storeUnionPage col-lg-12">
			<div class="fn-left fn-clear storeUnionPaging">
				<input type="checkbox" class="fn-left" id="selectCurrentPro" ng-model="notSaleGetchecked" ng-click="chooseProduct(this,storeStockLists,'thisPage')" />
				<label for="selectCurrentPro" class="fn-left" >全选当前页</label>
				<input type="checkbox" class="fn-left" id="selectAllPro" ng-model="selectedAllPage"/>
				<label for="selectAllPro" class="fn-left">全选所有页</label>
				<button class="selectNotSaleProduct fn-left" ng-click="setBatch('1')">批量设置云仓库存</button>
				<button class="selectNotSaleProduct fn-left" ng-click="setBatch('2')">批量设置O2O结算价</button>
				<div class="setUnionSaveBox" ng-show="defaultObj.setBatchFrame=='show'">
					<span ng-if="showStock">批量设置  <em ng-if="selectedAllPage">所有款</em> <em ng-if="!selectedAllPage">{{selectedPromodelNumArrlength}}款</em>云仓商品的云仓库存为：</span>
					<span ng-if="!showStock">批量设置 <em ng-if="selectedAllPage">所有款</em> <em ng-if="!selectedAllPage">{{selectedPromodelNumArrlength}}款</em>云仓商品的 O2O结算价：</span>
					<span ng-if="showStock">实际库存x</span>
					<span ng-if="!showStock">吊牌价x</span>
					<input type="text"  ng-model="setNum" />&nbsp;%
					<button class="batchSet" ng-click="setPriceOrStock()">批量设置</button>
					<button class="batchSetConsel" ng-click="cancelBatch()">取消</button>
				</div>
			</div>
			<div class="page-wrapper fn-right">
				<div id="productListPageA"></div>
			</div>

		</div>
		<!--分页 end-->
		<!-- /分页 -->
		<div class="fn-clear"></div>

	</div>
</div>

<!--------------- Content end ----------------->

<!--弹框-->

<!--设置结算价-->
<div class="setPriceMask" ng-show="defaultObj.showSetPrice=='show'">
	<div class="setPrice fn-clear" id="setPrice">
		<div class="setPriceTitle ">
			<span class="fn-left">设置商品O2O结算价</span>
			<span ng-click="closeForm()" class="fn-right">
    		<img src="http://static.qineasy.com/base/images/closelogo.png" ng-click="closeForm('1')">
    	</span>
		</div>
		<div class="clothCategory fn-clear">
			<div class="tupian">
				<img ng-src="{{proPicw}}" alt="" />
			</div>
			<div class="clothCate">
				<p>
					<span class="className">款名:</span>
					<span class="classExp">{{proNamew}}</span>
				</p>
				<p>
					<span class="className">款号:&nbsp;</span>
					<span class="classExp">{{thisProModelNum}}</span>
				</p>
				<p>
					<span class="className">品类:&nbsp;</span><span class="classExp classNameOffset">{{sortNamew}}</span>
					<span class="className ">品牌:&nbsp;</span><span class="classExp classNameOffset">{{brandNamew}}</span>
					<span class="className">年份:&nbsp;</span><span class="classExp">{{proYearw}}</span>
				</p>
				<p>
					<span class="className">季节:&nbsp;</span><span class="classExp classNameOffset">{{proSeasonw}}</span>
					<span class="className">吊牌价:&nbsp;</span><span class="classExp">{{proPricew}}</span>
				</p>
			</div>
		</div>
		<div class="setUnoinSaveL fn-clear">
			 <div>
			<button  class="setpricetogether" ng-click="setTogether()">统一设置结算价</button>
			</div>
			<div ng-if="isShowBtn" class="setpricetogether-input mgt5 mgl0">
				<span>统一设置结算价:</span>
				<input type="text" ng-model="setAllPrice">
				<a href="javascript:;" ng-click="sureSetpriceTogether(setAllPrice)">确定</a>
				<span>|</span>
				<a href="javascript:;" ng-click="cancelUnify()">取消</a>
			</div>
		</div>
		<div class=" clothSize">
			<form id="setPriceFormA">
				<table class="table table-striped table-bordered addInvinfo">
					<tr>
						<th width="80" scope="col" id="size">颜色/尺码</th>
						<th scope="col" ng-repeat="size in sizes">{{size}}</th>
					</tr>
					<tr id="addInputRowA">
					</tr>
				</table>
			</form>
		</div>
		<div class="setPriceBtn" style="position: absolute;bottom:0px">
			<button type="button" class="setPriceBtny" ng-click="sureSetPrice()">确认</button>
			<button type="button" class="setPriceBtny setPriceBtnn" ng-click="closeForm('1')">取消</button>
		</div>
	</div>
</div>
<!--设置结算价/-->
<!--设置云仓库存-->
<div class="setPriceMask" ng-show="defaultObj.showSetStock=='show'">
	<div class="setPrice fn-clear" id="setPricea">
		<div class="setPriceTitle fn-clear">
			<span class="fn-left">设置商品的云仓库存</span>
			<span ng-click="closeForm()" class="fn-right">
    		<img src="http://static.qineasy.com/base/images/closelogo.png" ng-click="closeForm('2')">
    	    </span>
		</div>
		<div class="clothCategory fn-clear">
			<div class="tupian">
				<img ng-src="{{proPicw}}" alt="" />
			</div>
			<div class="clothCate">
				<p>
					<span class="className">款名:</span>
					<span class="classExp">{{proNamew}}</span>
				</p>
				<p>
					<span class="className">款号:&nbsp;</span>
					<span class="classExp">{{thisProModelNum}}</span>
				</p>
				<p>
					<span class="className">品类:&nbsp;</span><span class="classExp classNameOffset">{{sortNamew}}</span>
					<span class="className ">品牌:&nbsp;</span><span class="classExp classNameOffset">{{brandNamew}}</span>
					<span class="className">年份:&nbsp;</span><span class="classExp">{{proYearw}}</span>
				</p>
				<p>
					<span class="className">季节:&nbsp;</span><span class="classExp classNameOffset">{{proSeasonw}}</span>
					<span class="className">吊牌价:&nbsp;</span><span class="classExp">{{proPricew}}</span>
				</p>
			</div>
		</div>
		<div class="setUnoinSaveL fn-clear">
			<div class="setUnifyBtn">
				<button  class="setpricetogether" ng-click="setTogether()">统一设置云仓库存</button>				
			</div>
			<div  class="setpricetogether-input setUnifyBtn1 mgt5 mgl0" ng-if="isShowBtn">
				<span>统一设置云仓库存为实际库存的:</span>
				<input type="text" ng-model="setAllStock"/>&nbsp;%
				<a href="javascript:;" ng-click="setUnifystock(setAllStock)">确定</a>
				<span>|</span>
				<a href="javascript:;" ng-click="cancelUnify()">取消</a>
			</div>
		</div>
		<div class="clothSize">
			<form id="setPriceForm">
				<table class="table table-striped table-bordered addInputRowA addInvinfo">
					<tr>
						<th width="80" scope="col" id="size">颜色/尺码</th>
						<th scope="col" ng-repeat="size in sizes">{{size}}</th>
					</tr>
					<tr id="addInputRowB">
					</tr>
				</table>
			</form>
		</div>
		<div class="setPriceBtn" style="position: absolute;bottom:0px">
			<button type="button" class="setPriceBtny" ng-click="saveEditStock()">确认</button>
			<button type="button" class="setPriceBtny setPriceBtnn" ng-click="closeForm('2')">取消</button>
		</div>
	</div>
</div>
<!--设置库存/-->
<script>
 
	// $("#setPrice").centera();
	// $("#setPricea").centera();
</script>
	
