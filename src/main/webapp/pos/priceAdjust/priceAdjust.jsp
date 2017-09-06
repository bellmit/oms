<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!------------- Content start ----------------->
<div class="content-wrapper pricecontent-wrapper">
	<div class="col-lg-11 pricepageTitl fn-clear">
		<h2 class="am-ft-16 fn-left" ng-show="obj.showAddList">所有零售调价单&nbsp;<span>(&nbsp;{{priceListCount}}&nbsp;)</span></h2>
		<h2 class="am-ft-16 fn-left"  ng-hide="obj.showAddList||obj.resetflag == 'edit'">添加零售调价单</span></h2>
		<h2 class="am-ft-16 fn-left"  ng-hide="obj.showAddList||obj.resetflag != 'edit'">编辑零售调价单</span></h2>
		<a href="javascript:;" class="fn-right addList" ng-click="addList()" ng-show="obj.showAddList">添加零售调价单</a>
		<a href="javascript:;" class="fn-right goback" ng-click="goback()" ng-hide="obj.showAddList">返回</a>
	</div>
	<div class="col-lg-11 priceline">
	</div>
	<div class="allPriceList fn-clear" ng-show="obj.showAddList">
		<form action="" id="searchPriceForm" class="searchPriceForm col-lg-12 fn-clear">
			<div class="priceCode col-md-3 fn-left">
				<span>零售调价单号：</span>
				<input name="adjustNo" type="text"></input>
			</div>
			<div class="priceStatus col-md-2 fn-left">
				<span>状态：</span>
				<select name="status" id="">
					<option></option>
					<option value="1">已审核</option>
					<option value="0">未审核</option>
				</select>
			</div>
			<div class="startDate col-md-3 fn-left">
				<span class="fn-left">生效日期：</span>
				<input class="fn-left laydate-icon form-control" name="effectiveDate" type="text" id="data" onclick="laydate()" name="createDate" ng-value="createDate" ng-model="createDate" readonly="readonly" placeholder="选择时间" style="height:28px;padding-right:0px ;" />
			</div>
			<div class="searchbtn fn-left" href="javascript:;" ng-click="searchPriceList()">查询</div>
		</form>
		<div class="priceChangeList col-lg-11">
			<table class="table table-hover table-striped table-bordered">
				<tr>
					<th scope="col">零售调价单</th>
					<th scope="col">创建时间</th>
					<th scope="col">生效日期</th>
					<th scope="col">状态</th>
					<th scope="col">操作</th>
				</tr>
				<tr ng-repeat="adjustPrice in adjustPriceList">
					<td>{{adjustPrice.adjustNo}}</td>
					<!-- <td>2016-07-16&nbsp;10:30</td> -->
					<td>{{adjustPrice.createDate}}</td>
					<td>{{adjustPrice.effectiveDate}}</td>
					<td>{{adjustPrice.status}}</td>
					<td>
						<div class="notDone" ng-if="adjustPrice.status=='未审核'">
							<a href="javascript:;" ng-click="checkOrBackout(this,'1')">审核</a>
							<span>|</span>
							<a href="javascript:;" ng-click="editOrScan(this,'1')">编辑&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
						</div>
						<div class="done" ng-if="adjustPrice.status=='已审核'">
							<a href="javascript:;" ng-click="checkOrBackout(this,'0')">撤销</a>
							<span>|</span>
							<a href="javascript:;" ng-click="editOrScan(this,'0')">查看详情</a>
						</div>
						<div class="done" ng-if="adjustPrice.status=='已生效'">
							<a href="javascript:;" ng-click="editOrScan(this,'0')">查看详情</a>
						</div>
					</td>
				</tr>
			</table>
			<div class="pagelist priv-pagelist price-pagelist">
				<div id="paging"></div>
			</div>
		</div>
	</div>
	<div class="addPriceListWindow fn-clear" ng-hide="obj.showAddList">
		<div class="priceChangeTitle col-lg-11 fn-clear" ng-show="obj.showCode">
			<div class="addListTime fn-left">
				<span>创建时间:</span>
				<span>{{createDateA}}</span>
				<!-- <span>16:40</span> -->
			</div>
			<div class="addListCode fn-left">
				<span>零售调价单号:</span>
				<span>{{adjustNo}}</span>
			</div>
		</div>
		<div class="addListtSetting col-lg-11">
			<div class="settingFlag fn-clear">
				<div class="commonflag flagActive fn-left" ng-click="showSettingData()" ng-class="{true:'flagActive '}[obj.showSetPart=='a']">生效日期设置</div>
				<div class="commonflag fn-left" ng-click="showSettingShop()" ng-class="{true:'flagActive '}[obj.showSetPart=='b']">生效门店设置</div>
				<div class="commonflag fn-left" ng-click="showSettingPrice()" ng-class="{true:'flagActive '}[obj.showSetPart=='c']">门店零售调价</div>
			</div>
			<div class="settingcontent col-lg-12">
				<form action="" id="createDateTime">
					<div class="datasetting fn-clear" ng-show="obj.showSetPart=='a'">
						<span class="fn-left">生效日期:</span>
						<input ng-disabled="obj.scan" class="fn-left dataselect laydate-icon form-control" type="text" id="effectdatatime" name="effectiveDate" ng-value="createDateTime" ng-model="createDateTime" readonly="readonly" placeholder="选择时间" style="height:28px;padding-right:0px ;" />
					</div>
				</form>
				<div class="shopsetting col-lg-12" ng-show="obj.showSetPart=='b'">
					<table class="addpricelistTable table table-hover table-striped table-bordered">
						<tr>
							<th class="col-lg-4">门店编号</th>
							<th class="col-lg-4">门店名称</th>
							<th class="col-lg-4" ng-hide="obj.scan">操作</th>
						</tr>
						<tr ng-repeat="newShop in newShopInfoArr track by $index">
							<td>{{newShop.shopNum}}</td>
							<td ng-value="newShop.shopId">{{newShop.shopName}}</td>
							<td ng-hide="obj.scan">
								<button href="javascript:;" ng-class="{true:'disabledButton'}[obj.scan]" class="delButton" ng-click="deleteList(this,'shop')">删除</button>
							</td>
						</tr>
						<tr ng-hide="obj.scan">
							<td colspan="3" class="addadjustshop">
								<button href="javascript:;" ng-click="addShop()">添加门店</button>
								<!--<button href="javascript:;" ng-click="addShop()" ng-hide="obj.scan">添加门店</button>-->
							</td>
						</tr>
					</table>
					<!--分页-->
					<!--分页 start-->
					<div class="pagelist priv-pagelist price-pagelist">
						<div id="paging"></div>
					</div>
					<!--分页 end-->
				</div>
				<div class="pricesetting  col-lg-12" ng-show="obj.showSetPart=='c'">
					<table class="priceadjustTable table table-hover table-striped table-bordered">
						<tr>
							<th class="col-md-2">款号</th>
							<th class="col-md-4">商品名称</th>
							<th class="col-md-2">吊牌价</th>
							<th class="col-md-2">零售价格</th>
							<th class="col-md-2">操作</th>
						</tr>
						<tr ng-repeat="product in productArr">
							<td>{{product.proModelnum}}</td>
							<td>{{product.proName}}</td>
							<td>{{product.proPrice}}元</td>
							<td ng-if="product.minAdjustPrice != product.maxAdjustPrice">{{product.minAdjustPrice}}元-{{product.maxAdjustPrice}}元</td>
							<td ng-if="product.minAdjustPrice == product.maxAdjustPrice">{{product.minAdjustPrice}}元</td>
							<td class="fn-clear">
								<div style="width:100px;margin: 0 auto;">
									<button ng-hide="obj.scan" class="editButton fn-left" ng-click="editPrice(this)">编辑</button>
									<span class="fn-left" ng-hide="obj.scan">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
									<button ng-hide="obj.scan" class="delButton fn-left" ng-click="deleteList(this,'product')">删除</button>
									<button ng-show="obj.scan" class="editButton editButton " ng-click="editPrice(this)">查看详情</button>
								</div>
							</td>
						</tr>
						<tr>
							<td colspan="5" class="addadjustproduct" ng-hide="obj.scan">
								<button href="javascript:;" ng-click="addProduct('add')" >+添加商品</button>
							</td>
						</tr>
					</table>
					<!--分页-->
					<!--分页 start-->
					<div class="pagelist priv-pagelist price-pagelist">
						<div id="paging"></div>
					</div>
					<!--分页 end-->
				</div>
			</div>
		</div>
		<div class="pricesettingButton col-lg-12">
			<button class="priceSubmit fn-left" ng-click="createPriceList()" ng-hide="obj.scan">确认</button>
			<button class="priceReset fn-left" ng-click="reset()" ng-hide="obj.scan">重置</button>
		</div>
	</div>
</div>
</div>
<!--弹窗的代码-->
<div class="addadjustshopWindow" ng-show="obj.showAddShop=='show'">
	<div class="addshop" id="addshop">
		<div class="top fn-clear">
			<h4 class="fn-left">添加门店</h4>
			<div class="fn-right" ng-click="closeForm()">
				<img src="../static/base/images/closelogo.png" alt="" />
			</div>
		</div>
		<div class="content">
			<form class="searchShop fn-clear" id="searchShop" action="">
				<div class="shopCode fn-left">
					<span>门店编号:</span>
					<input name="shopNum" type="text"></input>
				</div>
				<div class="shopName fn-left">
					<span>门店名称:</span>
					<input name="shopName" type="text"></input>
				</div>
				<a href="javascript:;" class="searchShopBtn fn-left" ng-click="searchShop()">查询</a>
			</form>
			<form action="" id="shopList">
				<table class="shopListTable table table-hover table-striped table-bordered">
					<tr>
						<th class="col-lg-2">
							<input type="checkbox" ng-model="obj.check" />
						</th>
						<th class="col-lg-5">门店编号</th>
						<th class="col-lg-5">门店名称</th>
					</tr>
					<tr ng-repeat="addshopName in addshopdata">
						<td>
							<input type="checkbox" name="shopInfo" ng-value="[addshopName.shopNum,addshopName.shopName,addshopName.orgId]" ng-checked="obj.check" />
						</td>
						<td>{{addshopName.shopNum}}</td>
						<td ng-value="addshopName.orgId">{{addshopName.shopName}}</td>
					</tr>
				</table>
			</form>
			<!--分页 start-->
			<div class="pagelist priv-pagelist price-pagelist">
				<div id="paging"></div>
			</div>
			<div class="addShopSubmit fn-clear" style="position: absolute;bottom: 0px;">
				<a href="javascript:;" class="fn-left" ng-click="addShopInto()">添加门店</a>
				<a href="javascript:;" class="fn-left" ng-click="closeForm()">取消</a>
			</div>
			<!--分页 end-->
		</div>
	</div>
</div>
<!--弹窗的代码-->
<!--弹窗的代码-->
<div class="addadjustproductWindow fn-clear" ng-show="obj.showAddProduct=='show'">
	<div class="addproduct" id="addproduct">
		<div class="top fn-clear">
			<h4 class="fn-left">添加商品</h4>
			<div class="fn-right" ng-click="closeForm()"><img src="../static/base/images/closelogo.png" alt="" /></div>
		</div>
		<div class="content">
			<form id="searchProduct" class="searchProduct  fn-clear" action="">
				<div class="fn-clear firstPart col-lg-12">
					<div class="productName  fn-left">
						<span>  &nbsp;&nbsp;&nbsp;品牌:</span>
						<select name="brandId">
							<option value="">请选择</option>
							<option ng-value="queryBrand.brandId" ng-repeat="queryBrand in queryBrands">{{queryBrand.brandName}}</option>
						</select>
					</div>
					<div class="productyear  fn-left">
						<span>  &nbsp;&nbsp;&nbsp;年份:</span>
						<select name="proYear">
							<option value="">请选择</option>
							<option ng-repeat="queryYear in queryYears">{{queryYear.proYear}}</option>
						</select>
					</div>
					<div class="productseason  fn-left">
						<span>  &nbsp;&nbsp;&nbsp;季节:</span>
						<select name="proSeason">
							<option value="">请选择</option>
							<option ng-repeat="season in seasons">{{season.proSeason}}</option>
						</select>
					</div>
				</div>
				<div class="fn-clear secondPart col-lg-12">
					<div class="productBigSort fn-left">
						<span>大品类:</span>
						<select name="proGrandparentSortId" ng-model="grandparentSort.proGrandparentSortId" ng-change="getParentSort(this)">
							<option value="">请选择</option>
							<option ng-value="grandparentSort.proGrandparentSortId" ng-repeat="grandparentSort in grandparentSorts">{{grandparentSort.grandparentSortName}}</option>
						</select>
					</div>
					<div class="productMiddleSort  fn-left">
						<span>中品类:</span>
						<select name="proParentSortId" ng-model="parentSort.proParentSortId" ng-change="getSort()">
							<option value="">请选择</option>
							<option value="裤子" ng-value="{{parentSort.proParentSortId}}" ng-repeat="parentSort in parentSorts">{{parentSort.parentSortName}}</option>
						</select>
					</div>
					<div class="productSmallSort fn-left">
						<span>小品类:</span>
						<select name="proSortId" ng-value="sort.proSortId">
							<option value="">请选择</option>
							<option ng-value="sort.proSortId" ng-repeat="sort in sorts">{{sort.sortName}}</option>
						</select>
					</div>
				</div>
				<div href="javascript:;" class="searchProductBtn fn-left" ng-click="searchProduct()">查询</div>
			</form>
			<div class="col-lg-12 tablecontent" style="height: 260px;overflow-y: auto;">
				<form action="" id="productTable">
					<table class="shopListTable table table-hover table-striped table-bordered">
						<tr>
							<th class="col-md-1">
							</th>
							<th class="col-md-2">款号</th>
							<th class="col-md-3">商品名称</th>
							<th class="col-md-2">品牌</th>
							<th class="col-md-2">品类</th>
							<th class="col-md-1">年份</th>
							<th class="col-md-1">季节</th>
						</tr>
						<tr ng-repeat="productInfo in productLists">
							<td>
								<input type="checkbox" name="productInfo" ng-value="[productInfo.proModelnum,productInfo.proName,productInfo.brandName,productInfo.grandparentSortName,productInfo.parentSortName,productInfo.sortName,productInfo.proYear,productInfo.proSeason,productInfo.proPrice,productInfo.brandId]" ng-checked="obj.checkedA" />
							</td>
							<td>{{productInfo.proModelnum}}</td>
							<td>{{productInfo.proName}}</td>
							<td>{{productInfo.brandName}}</td>
							<td>{{productInfo.grandparentSortName}}/{{productInfo.parentSortName}}/{{productInfo.sortName}}</td>
							<td>{{productInfo.proYear}}</td>
							<td>{{productInfo.proSeason}}</td>
						</tr>
					</table>
				</form>
			</div>
			<div class="selectallProduct col-lg-12 fn-clear mgb10" style="margin-left: 8px;">
				<input type="checkbox" ng-model="obj.checkedA" name="selectAll" id="selectAll" class="fn-left" value="" />
				<label for="selectAll" class="fn-left" style="padding-top: 14px;">全选</label>
			</div>
			<div class="addShopSubmit fn-clear">
				<a href="javascript:;" class="fn-left" ng-click="addProductInfo()">添加商品</a>
				<a href="javascript:;" class="fn-left" ng-click="closeForm()">取消</a>
			</div>
		</div>
	</div>
</div>
<!--弹窗的代码-->
<div class="setPriceMask" ng-show="obj.showSetPrice=='show'">
	<div class="setPrice" id="setPrice">
		<div class="setPriceTitle fn-clear">
			<span class="fn-left">设置商品零售价</span>
			<span ng-click="closeForm()" class="fn-right">
    		<img src="../static/base/images/closelogo.png">
    	</span>
		</div>
		<div class="clothCategory fn-clear">
			<div class="tupian">
				<img ng-src="{{productImg}}" alt="" />
			</div>
			<div class="clothCate">
				<p>
					<span class="className">款名:</span>
					<span class="classExp">{{productDetail.proName}}</span>
				</p>
				<p>
					<span class="className">款号:&nbsp;</span>
					<span class="classExp">{{productDetail.proModelnum}}</span>
				</p>
				<p>
					<span class="className">品类:&nbsp;</span><span class="classExp classNameOffset">{{productDetail.grandparentSortName}}/{{productDetail.parentSortName}}/{{productDetail.sortName}}</span>&nbsp;&nbsp;&nbsp;
					<span class="className ">品牌:&nbsp;</span><span class="classExp classNameOffset">{{productDetail.brandName}}</span>&nbsp;&nbsp;&nbsp;
					<span class="className">年份:&nbsp;</span><span class="classExp">{{productDetail.proYear}}</span>
				</p>
				<p>
					<span class="className">季节:&nbsp;</span><span class="classExp classNameOffset">{{productDetail.proSeason}}</span>&nbsp;&nbsp;&nbsp;
					<span class="className">吊牌价:&nbsp;</span><span class="classExp">{{productDetail.proPrice}}</span>
				</p>
			</div>
		</div>
		<div ng-hide="obj.scan">
			<button href="javascript:;" class="setpricetogether mgl25" ng-click="setpriceTogether()" ng-show="obj.showSetpriceTogether=='show'">统一设置零售价</button>
			<div class="setpricetogether-input " ng-hide="obj.showSetpriceTogether=='show'">
				<span>设置统一零售价:</span>
				<input type="text" ng-model="setAllPrice">
				<a href="javascript:;" ng-click="sureSetpriceTogether()">确定</a>
				<span>|</span>
				<a href="javascript:;" ng-click="cancelSetpriceTogether()">取消</a>
			</div>
		</div>
		<div class="fn-clear clothSize">
			<form id="setPriceForm">
				<table class="table table-striped table-bordered addInvinfo">
					<tr>
						<th width="80" scope="col" id="size">颜色/尺码</th>
						<th scope="col" ng-repeat="size in sizes">{{size}}</th>
					</tr>
					<tr id="addSumRow">
					</tr>
				</table>
			</form>
		</div>
		<div class="setPriceBtn fn-clear" style="position: absolute;bottom: 0;">
			<button type="button" class="setPriceBtny" ng-class="{true:'option-status'}[obj.scan]" ng-click="sureSetPrice()" ng-disabled="obj.scan">确认</button>
			<button type="button" class="setPriceBtny setPriceBtnn" ng-click="closeForm()">取消</button>
		</div>
	</div>
</div>
<!--弹窗的代码-->
<div class="maskBg" ng-show="obj.showSure=='show'"></div>
<div class="am-dialog " id="DelDialog" ng-show="obj.showSure=='show'">
	<form id="" class="ng-pristine ng-valid">
		<div class="am-dialog-wrap">
			<div class="am-dialog-header">
				<h3 class="am-ft-center">确定删除？</h3>
			</div>
			<div class="dialogBtn am-flexbox">
				<button type="button" class="am-flexbox-item btn am-button SavEdit deletGroup" am-bg="blue" ng-click="delGrade()">确认</button>
				<button type="button" class="am-flexbox-item btn am-button" ng-click="closeForm()" id="closeDialog" am-bg="white">取消</button>
				<div class="fn-clear"></div>
			</div>
		</div>
	</form>
</div>

<!--审核 生效时间-->
<div class="maskBg" ng-show="obj.showCheckTimeFrame=='show'"></div>
<div class="am-dialog joinUnionDialog" id="DelDialoga" ng-show="obj.showCheckTimeFrame=='show'">
	<div class="top fn-clear checkTimeTop">
		<span class="fn-left checkTimeTopTitle">审核</span>
		<span class="fn-right checkTimeTopClose" ng-click="concelCheckTime()"><img src="http://static.qineasy.com/base/images/closelogo.png" ng-click="closeForm('3')"></span>
	</div>
	<div class="contenta fn-clear checkTimeFrameContent">
		<div class="fn-left sureIcon checkSureIcon" style="width: 11%;">
			<span>!</span>
		</div>
		<div class="fn-left  fn-clear checkSureText" style="width: 78%;" ng-show="isShow">
			<p class="am-ft-14">当前零售单的生效时间为{{effectiveDatea}},</p>
			<p class="am-ft-14 am-ft-red">确认审核后，商品零售调价将会立即生效，请谨慎操作！</p>
		</div>
		<div class="fn-left  fn-clear checkSureText" style="width: 78%;" ng-show="!isShow">
			<p class="am-ft-14">确认审核后,</p>
			<p class="am-ft-14">商品零售调价将于{{effectiveDatea}}&nbsp; 00:00:00&nbsp;&nbsp;自动生效!</p>
		</div>
	</div>
	<div class="diaLogButton fn-clear fn-right checkTimeFrameBtn">
		<button class="checkTimeBtn" ng-click="sureCheckPass()">确认</button>
		<button class="checkTimeConcel" ng-click="concelCheckTime()">取消</button>
	</div>
</div>

<script>
	//弹窗居中
	//$('#DelDialoga').center();
	$('#DelDialog').center();
	//  $('#setPrice').center();
</script>