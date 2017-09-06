<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!--Ztree-->

<!--遮罩 start-->

<!--遮罩 end-->

<!---- Content Wrapper start ---->
<div class="content-wrapper">
	<!-- Main content -->
	<div class="col-md-11 pageTitl">
		<h2 class="am-ft-16 fn-left">编辑品类</h2>
		<a href="javascript:;" class="line-btn fn-right" ng-click="goback()">返回</a>
	</div>
	<div class="fn-clear"></div>
		<section class="container-fluid">
			<div class="row">
				<div class="prodet-nav prodet-content">
					<div class="prodet-box">
					<form id="addproductForm">
						<!--row1-->
						<div class="row">
							<div class="nowraps-text inprodet-titl am-ft-14 color666">
								品类名称：
							</div>
							<div class="col-md-2 form-group am-ft-14">
								<span class="color333">{{sortInfo.sortName}}</span>
							</div>
						</div>
						<!----row2---->
						<div class="row">
							<div class="nowraps-text inprodet-titl am-ft-14 color666">
								品类规格：
							</div>
							<div class="col-md-5 form-group am-ft-14" ng-if="sortInfo.sortId=='130906331'">
								<div class="addCategoryBox fn-clear pb0">
									<div class="fn-left fn-clear addCategory_main">
										<div class="paddingl10" ng-click="shiftCategoryTab('1')" ng-class="{false:'addBg_fa'}[model.isTab=='1']">
											<span>颜色</span>
										</div>
										<div  class="paddingl10" ng-click="shiftCategoryTab('2')" ng-class="{false:'addBg_fa'}[model.isTab=='2']">
											<span>尺码</span>	
										</div>
									</div>
									<div class="fn-left addCategory_detail" ng-if="model.isTab=='1'">
										<div class="mgb10" ng-repeat="color in colorList" ng-if="color.colorId!=''">
											<span>{{color.colorName}}</span>
										</div>
										<div class="mgb10" ng-repeat="color in colorList" ng-if="color.colorId==''">
											<input type="text" placeholder="" ng-model="color.colorName" class="width120"/>
										</div>
										<button class="" ng-click="addColor()">＋添加颜色</button>
									</div>
									<div class="fn-left addCategory_detail" ng-if="model.isTab=='2'">
										<div class="mgb10" ng-repeat="size in sizeList" ng-if="size.sizeId!=''">
											<span>{{size.sizeName}}</span>
										</div>
										<div class="mgb10" ng-repeat="size in sizeList" ng-if="size.sizeId==''">
											<input type="text" placeholder="" ng-model="size.sizeName" class="width120"/>
										</div>
										<button class="" ng-click="addSize()">＋添加尺码</button>
									</div>
								</div>
							</div>
							<div class="col-md-5 form-group am-ft-14" ng-if="sortInfo.sortId!='130906331'">
								<div class="addCategoryBox fn-clear pb0">
									<div class="fn-left fn-clear addCategory_main">
										<div class="paddingl10" ng-repeat="productSpec in productSpecGroup" ng-click="shiftCategoryTab(productSpec.specGroupIndex)" ng-class="{false:'addBg_fa'}[model.isTab==productSpec.specGroupIndex]">
											<input type="text" placeholder="" ng-model="productSpec.specGroupName" class="width120"/>
										</div>
										<div class="addCategory_btn paddl0" ng-if="productSpecGroup.length<3">
											 <button ng-click="addProductSpec()">＋添加规格</button>
										</div>
									</div>
									<div class="fn-left addCategory_detail" ng-if="model.isTab=='0'">
										<div class="mgb10" ng-repeat="spec in productSpecGroup[0].productSpec" ng-if="spec.productSpecId!=''">
											<span>{{spec.specName}}</span>
										</div>
										<div class="mgb10" ng-repeat="spec in productSpecGroup[0].productSpec" ng-if="spec.productSpecId==''">
											<input type="text" placeholder="" ng-model="spec.specName" class="width120"/>
										</div>
										<button class="" ng-click="addSpec(0)">＋添加规格属性</button>
									</div>
									<div class="fn-left addCategory_detail" ng-if="model.isTab=='1'">
										<div class="mgb10" ng-repeat="spec in productSpecGroup[1].productSpec" ng-if="spec.productSpecId!=''">
											<span>{{spec.specName}}</span>
										</div>
										<div class="mgb10" ng-repeat="spec in productSpecGroup[1].productSpec" ng-if="spec.productSpecId==''">
											<input type="text" placeholder="" ng-model="spec.specName" class="width120"/>
										</div>
										<button class="" ng-click="addSpec(1)">＋添加规格属性</button>
									</div>
									<div class="fn-left addCategory_detail" ng-if="model.isTab=='2'">
										<div class="mgb10" ng-repeat="spec in productSpecGroup[2].productSpec" ng-if="spec.productSpecId!=''">
											<span>{{spec.specName}}</span>
										</div>
										<div class="mgb10" ng-repeat="spec in productSpecGroup[2].productSpec" ng-if="spec.productSpecId==''">
											<input type="text" placeholder="" ng-model="spec.specName" class="width120"/>
										</div>
										<button class="" ng-click="addSpec(2)">＋添加规格属性</button>
									</div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="nowraps-text inprodet-titl am-ft-14" style="height: 1px;"></div>
							<div class="col-md-10">
								<button type="button" class="btn btn-primary mgr10" ng-click="save()">保存</button>
								<button type="button" class="btn btn-primary cancel_btna" ng-click="goback()">取消</button>
							</div>
						</div>
						<div class="fn-clear"></div>
					</div>
				</div>
			</div>
			<!-- /.row -->
		</section>
	
	<!-- /.content -->
</div>
<!----------------- Content Wrapper end ------------------->
