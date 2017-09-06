<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!--Ztree-->

<!--遮罩 start-->

<!--遮罩 end-->

<!---- Content Wrapper start ---->
<div class="content-wrapper">
	<div class="col-md-11 pageTitl">
		<h2 class="am-ft-16 fn-left">商品详情</h2>
		<a href="javascript:;" class="line-btn fn-right" ng-click="goback()">返回</a>
	</div>
	<div class="fn-clear"></div>
	<form id="productForm">
		<!-- Main content -->
		<section class="container-fluid">
			<div class="row">
				<div class="prodet-nav prodet-content">
					<div class="prodet-box">
						<!----row1---->
						<!--<div class="row Pro-Sorts">
                    <div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>系列分类</div>
                    <div class="col-md-8 form-group" id="ProSorts">
                       <input type="text" class="col-md-3 text-overflow mgr5" ng-model="grandparentSortNameDetail" disabled/>
                       <input type="text" class="col-md-3 text-overflow mgr5" ng-model="parentSortNameDetail" disabled/>
                       <input type="text" class="col-md-3 text-overflow" ng-model="sortNameDetail" disabled/>
					</div>
                </div>-->
						<div class="row">
							<div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>商品品类：</div>
							<div class="col-md-8 form-group" id="ProSorts">
								<select class="col-md-3" disabled="disabled" ng-options="g.sortId as g.sortName for g in item0" ng-model="selectSortId0" ng-change="sortIdChange(selectSortId0,1)">
								</select>
								<!--<input type="text" class="col-md-8 text-overflow" ng-model="selectSortId0" disabled/>-->
								
							</div>
						</div>
						<div class="row">
							<div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>品类细分：</div>
							<div class="col-md-8 form-group" id="ProSorts">
								<select class="col-md-3 mgr5" disabled="disabled" ng-options="p.sortId as p.sortName for p in item1" ng-model="selectSortId1" ng-change="sortIdChange(selectSortId1,2)">
								</select>
								<!--<input type="text" class="col-md-8 text-overflow" ng-model="selectSortId1" disabled/>
								<input type="text" class="col-md-8 text-overflow"  ng-model="selectSortId2" disabled/>
								<input type="text" class="col-md-8 text-overflow" ng-model="selectSortId3" disabled/>-->
								
								<select class="col-md-3" ng-show="item2.length != 0" disabled="disabled" ng-options="s.sortId as s.sortName for s in item2" ng-model="selectSortId2" ng-change="sortIdChange(selectSortId2,'3')">
								</select>
								<select class="col-md-3" ng-show="item3.length != 0" disabled="disabled" ng-options="x.sortId as x.sortName for x in item3" ng-model="selectSortId3">
								</select>
							</div>
						</div>
						<!----row2---->
						<div class="row">
							<div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>所属品牌</div>
							<div class="col-md-2 form-group">
								<input type="text" class="col-md-8 text-overflow" ng-model="brandNameDetail" disabled/>
							</div>
							<div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>设计师</div>
							<div class="col-md-2 form-group">
								<input type="text" class="col-md-8 text-overflow" ng-model="designerDetail" disabled/>
							</div>
						</div>
						<!----row3---->
						<div class="row">
							<div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>商品名称</div>
							<div class="col-md-8 form-group">
								<input type="text" class="col-md-8 text-overflow" ng-model="proNameDetail" disabled/>
							</div>
						</div>
						<!----row4---->
						<div class="row">
							<div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>商品款号</div>
							<div class="col-md-2 form-group">
								<input type="text" class="col-md-8 text-overflow" ng-model="proModelnumDetail" disabled/>
							</div>
							<div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>计量单位</div>
							<div class="col-md-2 form-group">
								<input type="text" class="col-md-8 text-overflow" ng-model="proUomDetail" disabled/>
							</div>
						</div>
						<!----row5---->
						<div class="row">
							<div class="nowraps-text inprodet-titl am-ft-14">商品属性</div>
							<div class="col-md-10 form-group pro-property">
								<!--inner row1-->
								<div class="row">
									<div class="col-md-2 inprodet-titl am-ft-12"><em class="am-ft-red mgr5">*</em>年份</div>
									<div class="col-md-4 form-group">
										<input type="text" class="col-md-8 text-overflow" ng-model="proYearDetail" disabled/>
									</div>
								</div>
								<!--inner row2-->
								<div class="row">
									<div class="col-md-2 inprodet-titl am-ft-12"><em class="am-ft-red mgr5">*</em>季节</div>
									<div class="col-md-4 form-group">
										<input type="text" class="col-md-8 text-overflow" ng-model="proSeasonDetail" disabled/>
									</div>
								</div>
								<!--inner row3-->
								<div class="row">
									<div class="col-md-2 inprodet-titl am-ft-12"><em class="am-ft-red mgr5">*</em>性别</div>
									<div class="col-md-4 form-group">
										<input type="text" class="col-md-8 text-overflow" ng-if="proSexDetail == 'F' " value="男" disabled/>
										<input type="text" class="col-md-8 text-overflow" ng-if="proSexDetail == 'M' " value="女" disabled/>
										<input type="text" class="col-md-8 text-overflow" ng-if="proSexDetail == 'FM' " value="不限" disabled/>
									</div>
								</div>
								<!--inner row4-->
								<div class="row">
									<div class="col-md-2 inprodet-titl am-ft-12">波段</div>
									<div class="col-md-4 form-group">
										<input type="text" class="col-md-8 text-overflow" ng-model="proStageDetail" disabled/>
									</div>
								</div>
								<div class="row">
									<div class="col-md-2 inprodet-titl am-ft-12">系列</div>
									<div class="col-md-4 form-group">
										<input type="text" class="col-md-8 text-overflow" ng-model="proSeriesDetail" placeholder="" />
									</div>
								</div>
								<div class="row">
									<div class="col-md-2 inprodet-titl am-ft-12">风格</div>
									<div class="col-md-4 form-group">
										<input type="text" class="col-md-8 text-overflow" ng-model="proStyleDetail" placeholder="" />
									</div>
								</div>
								<!--inner row5-->
								<div class="row">
									<div class="col-md-2 inprodet-titl am-ft-12"><em class="am-ft-red mgr5">*</em>尺码组</div>
									<div class="col-md-4 form-group">
										<input type="text" class="col-md-8 text-overflow" ng-model="groupNameDetail" disabled/>
									</div>
								</div>
							</div>
						</div>
						<!----row6---->
						<div class="row">
							<div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>吊牌价格</div>
							<div class="col-md-2 form-group needValInfo">
								<input type="text" class="col-md-10 text-overflow" ng-model="proPriceDetail" disabled/>&nbsp;元
							</div>
						</div>
						<!----innerrow7 商品详情-->
						<div class="row">
							<div class="col-md-1 inprodet-titl">&nbsp;</div>
							<div class="col-md-10 form-group table-responsive corlorSizeTable" style="margin-left: 25px;max-height: 300px;overflow-y: auto;">
								<table width="100%" class="table table-condensed">
									<tr>
										<th scope="col">颜色</th>
										<th scope="col">尺寸</th>
										<th scope="col">价格</th>
										<th scope="col">商品条形码</th>
										<th scope="col">商品SKU编码</th>
									</tr>
									<tr ng-repeat="pro in productDetail">
										<td>{{pro.colorName}}</td>
										<td>{{pro.proSizeName}}</td>
										<td>{{pro.proSkuPrice}}</td>
										<td>{{pro.proInnerbc}}</td>
										<td>{{pro.proNum}}</td>
									</tr>
								</table>
							</div>

							<div class="fn-clear"></div>
						</div>
						<!----row8商品图片---->
						<div class="row proPic">
							<div class="nowraps-text inprodet-titl am-ft-14">商品图片</div>
							<div class="col-md-10">
								<p class="am-ft-red">(请上传700*700以上图片，小于3M)</p>
								<!--row1-->
								<div class="mainPhot">
									<div class="row">
										<p class="am-ft-darkgray mgb15 col-md-12">
											<span class="col-md-2">商品主图</span>
											<span class="col-md-9 mgl35">其他图<em class="line"></em></span>
										</p>
										<div class="col-md-3" style="width: 20%">
											<div class="photoBox">
												<div class="photoBg">
													<img alt="" src="http://static.qineasy.com/base/images/photobg.jpg" id="mainDetail1">
												</div>
											</div>
										</div>
										<div class="col-md-9">
											<div class="photoBox">
												<div class="photoBg">
													<img alt="" src="http://static.qineasy.com/base/images/photobg.jpg" id="mainDetail2">
												</div>
											</div>
											<div class="photoBox">
												<div class="photoBg">
													<img alt="" src="http://static.qineasy.com/base/images/photobg.jpg" id="mainDetail3">
												</div>
											</div>
											<div class="photoBox">
												<div class="photoBg">
													<img alt="" src="http://static.qineasy.com/base/images/photobg.jpg" id="mainDetail4">
												</div>
											</div>
											<div class="photoBox">
												<div class="photoBg">
													<img alt="" src="http://static.qineasy.com/base/images/photobg.jpg" id="mainDetail5">
												</div>
											</div>
										</div>
									</div>
								</div>
								<p class="am-ft-darkgray">颜色对应的商品图片<span class="am-ft-red">（*最多可传5张图片哦）</span></p>
								<!--row2-->
								<div class="mainPhot" ng_repeat="colors in ColorNumAndName">
									<p class="am-ft-darkgray mgb10 col-md-12">
										<span class="col-md-12">{{colors.colorName}}<em class="line"></em></span>
									</p>
									<div class="row">
										<div class="col-md-3" style="width: 20%">
											<div class="photoBox">
												<div class="photoBg">
													<img alt="" src="http://static.qineasy.com/base/images/photobg.jpg" id="{{colors.colorId+'Detail1'}}">
												</div>
											</div>
										</div>
										<div class="col-md-9">
											<div class="photoBox">
												<div class="photoBg">
													<img alt="" src="http://static.qineasy.com/base/images/photobg.jpg" id="{{colors.colorId+'Detail2'}}">
												</div>
											</div>
											<div class="photoBox">
												<div class="photoBg">
													<img alt="" src="http://static.qineasy.com/base/images/photobg.jpg" id="{{colors.colorId+'Detail3'}}">
												</div>
											</div>
											<div class="photoBox">
												<div class="photoBg">
													<img alt="" src="http://static.qineasy.com/base/images/photobg.jpg" id="{{colors.colorId+'Detail4'}}">
												</div>
											</div>
											<div class="photoBox">
												<div class="photoBg">
													<img alt="" src="http://static.qineasy.com/base/images/photobg.jpg" id="{{colors.colorId+'Detail5'}}">
												</div>
											</div>
										</div>
									</div>

								</div>
							</div>
						</div>
						<!--/商品图片-->

						<!--商品描述-->
						<!-- 加载编辑器的容器 -->
						<div class="row">
							<div class="nowraps-text inprodet-titl am-ft-14">商品描述</div>
							<div class="col-md-10">
								<span ng-bind-html="proDescriptionDetail"></span>
							</div>
						</div>

						<div class="fn-clear"></div>
					</div>
				</div>
			</div>
			<!-- /.row -->
		</section>
		<!-- /.content -->
	</form>
</div>
<!---- Content-wrapper end ---->

<!----------------- Content Wrapper end ------------------->
<!-- 尾部 -->
<jsp:include page="../../public/footstyle.jsp" />