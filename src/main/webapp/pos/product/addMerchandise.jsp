<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!--Ztree-->

<!--遮罩 start-->

<!--遮罩 end-->

<!---- Content Wrapper start ---->
<div class="content-wrapper">
	<!-- Main content -->
	<div class="col-md-11 pageTitl">
		<h2 class="am-ft-16 fn-left">添加商品</h2>
		<!-- <a href="javascript:;" class="line-btn fn-right" ng-click="goback()">返回</a> -->
	</div>
	<div class="fn-clear"></div>
	<form id="addproductForm">
		<section class="container-fluid">
			<div class="row">
				<div class="prodet-nav prodet-content">
					<div class="prodet-box">
						<!----row1---->
						<!--<div class="row Pro-Sorts">

							<div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>系列分类</div>

							<div class="col-md-8 form-group" id="ProSorts">

								<select class="col-md-3" ng-options="m.sortId as m.sortName for m in items" ng-model="pGrandparentSort" ng-change="sortIdChange(pGrandparentSort,1)">

								</select>

								<select class="col-md-3" ng-options="c.sortId as c.sortName for c in item1" ng-model="pParentSortId" ng-change="sortIdChange(pParentSortId,2)">

								</select>

								<select class="col-md-3" ng-options="g.sortId as g.sortName for g in item2" ng-model="pSortId">

								</select>

								<input type="hidden" name="proSortId" value="{{pSortId}}" />

								<input type="hidden" name="proParentSortId" value="{{pParentSortId}}" />

								<input type="hidden" name="proGrandparentSortId" value="{{pGrandparentSort}}" />

							</div>

						</div>-->
						<div class="row">
							<div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>商品品类：</div>
							<div class="col-md-8 form-group" id="ProSorts">
								<select class="col-md-3" ng-options="g.sortId as g.sortName for g in item0" ng-model="selectSortId0" ng-change="sortIdChange(selectSortId0,1)">
								</select>
							</div>
						</div>
						<div class="row">
							<div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>品类细分：</div>
							<div class="col-md-8 form-group" id="ProSorts">
								<select class="col-md-3 mgr5" ng-options="p.sortId as p.sortName for p in item1" ng-model="selectSortId1" ng-change="sortIdChange(selectSortId1,2)">
								</select>
								<select class="col-md-3" ng-show="item2.length != 0" ng-options="s.sortId as s.sortName for s in item2" ng-model="selectSortId2" ng-change="sortIdChange(selectSortId2,'3')">
								</select>
								<select class="col-md-3" ng-show="item3.length != 0" ng-options="x.sortId as x.sortName for x in item3" ng-model="selectSortId3">
								</select>
							</div>
						</div>
						<!----row2---->
						<div class="row">
							<div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>所属品牌</div>
							<div class="col-md-2 form-group">
								<select class="col-md-12" ng-options="m.brandName for m in itemsb" ng-model="brandIds">
									<input type="hidden" name="brandId" value="{{brandIds.brandId}}" />
								</select>
							</div>
							<div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>设计师</div>
							<div class="col-md-2 form-group">
								<input type="text" class="text-overflow" name="designer" placeholder="" />
							</div>
						</div>
						<!----row3---->
						<div class="row">
							<div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>商品名称</div>
							<div class="col-md-8 form-group">
								<input type="text" class="col-md-8 text-overflow" name="proName" placeholder="" />
							</div>
						</div>
						<!----row4---->
						<div class="row">
							<div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>商品款号</div>
							<div class="col-md-2 form-group">
								<input type="text" class="text-overflow" name="proModelnum" placeholder="" ng-model="styleNumber" />
							</div>
							<div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>计量单位</div>
							<div class="col-md-2 form-group">
								<input type="text" class="text-overflow" name="proUom" placeholder="" />
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
										<select name="proYear" class="col-md-8">
											<option value="{{year}}" ng-repeat="year in years" ng-selected="year==proYear">{{year}}</option>
										</select>
									</div>
								</div>
								<!--inner row2-->
								<div class="row">
									<div class="col-md-2 inprodet-titl am-ft-12"><em class="am-ft-red mgr5">*</em>季节</div>
									<div class="col-md-4 form-group">
										<select name="proSeason" class="col-md-8">
											<option value="春">春</option>
											<option value="夏">夏</option>
											<option value="秋">秋</option>
											<option value="冬">冬</option>
											<option value="四季">四季</option>
										</select>
									</div>
								</div>
								<!--inner row3-->
								<div class="row">
									<div class="col-md-2 inprodet-titl am-ft-12"><em class="am-ft-red mgr5">*</em>性别</div>
									<div class="col-md-4 form-group">
										<select name="proSex" class="col-md-8">
											<option value="F">男</option>
											<option value="M">女</option>
											<option value="FM">不限</option>
										</select>
									</div>
								</div>
								<!--inner row4-->
								<div class="row">
									<div class="col-md-2 inprodet-titl am-ft-12">波段</div>
									<div class="col-md-4 form-group">
										<input type="text" class="col-md-8 text-overflow" name="proStage" placeholder="" />
									</div>
								</div>
								<div class="row">
									<div class="col-md-2 inprodet-titl am-ft-12">系列</div>
									<div class="col-md-4 form-group">
										<input type="text" class="col-md-8 text-overflow" name="proSeries" placeholder="" />
									</div>
								</div>
								<div class="row">
									<div class="col-md-2 inprodet-titl am-ft-12">风格</div>
									<div class="col-md-4 form-group">
										<input type="text" class="col-md-8 text-overflow" name="proStyle" placeholder="" />
									</div>
								</div>
								<!--inner row5-->
								<div class="row">
									<div class="col-md-2 inprodet-titl am-ft-12"><em class="am-ft-red mgr5">*</em>尺码组</div>
									<div class="col-md-4 form-group">
										<select class="col-md-8" ng-options="c.groupId as c.groupName for c in itemsGroup" ng-model="selectedGroup" ng-change="groupIdChange()">
											<input type="hidden" name="groupId" value="{{selectedGroup}}" />
										</select>
									</div>
								</div>
							</div>
						</div>
						<!----row6---->
						<div class="row">
							<div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>吊牌价格</div>
							<div class="col-md-2 form-group needValInfo">
								<input type="text" class="col-md-10 text-overflow" name="proPrice" placeholder="" value="" ng-model="proPrice" />&nbsp;元
							</div>

						</div>
						<!----row7商品规格---->
						<div class="row">
							<div class="nowraps-text inprodet-titl am-ft-14">商品规格</div>
							<!----innerrow7-1 选择颜色---->
							<div class="col-md-10 form-group pro-property">
								<!--inner row1-->
								<div class="col-md-8 am-ft-12 am-ft-left">请选择本商品的所有颜色</div>
								<!--色系Tab-->
								<div class="AddproTabnav col-md-10">
									<div class="tab-item col-md-2" data-tab="" ng-repeat="system in itemsColorList" ng-click="getColBySys(this.system.colorSystem)" name="{{system.colorSystem}}">{{system.colorSystem}}</div>
								</div>
								<!--色系TabContent-->
								<div class="AddproTabInfo col-md-12">
									<div class="proSize-info">
										<div class="row">
											<div class="col-sm-2" ng-repeat="color in colors">
												<input type="checkbox" ng-model="x" ng-checked="isSelected(color.colorId)" ng-click="chkColor(color.colorId,x,color.colorName,color.colorNum)" name="colorId" value="{{color.colorId}}" id="cl{{color.colorId}}" />
												<label for="cl{{color.colorId}}">{{color.colorName}}</label>
											</div>
										</div>
									</div>
								</div>
								<!--选择所有尺寸-->
								<div class="col-md-8 am-ft-left ProSizeTitl">请选择本商品的所有尺寸</div>
								<div class="col-md-12 ProSize">
									<div class="proSize-info">
										<div class="row">
											<div class="col-sm-2" ng-repeat="size in sizes">
												<input type="checkbox" ng-model="s" ng-checked="isSelectedSize(size.sizeId)" ng-click="chkSize(size.sizeId,s,size.sizeName,size.sizeNum)" name="sizeId" value="{{size.sizeId}}" id="sz{{size.sizeId}}" />
												<label for="sz{{size.sizeId}}">{{size.sizeName}}</label>
											</div>
										</div>
										<!--                                     <a href="javascript:;" class="fn-right openDl">添加已选尺码详细说明（对应尺寸）</a>-->
									</div>
								</div>
							</div>
							<div class="AddproTabInfo col-md-12 fn-hide">
								<div class="proSize-info">
									<div class="row">
										<div class="col-lg-2">
											<input type="checkbox" name="innerpro2" value="" checked />
											<label>浅绿色</label>
										</div>
										<div class="col-lg-2">
											<input type="checkbox" name="innerpro2" value="" />
											<label>黄绿色</label>
										</div>
										<div class="col-lg-2">
											<input type="checkbox" name="innerpro2" value="" />
											<label>草绿色</label>
										</div>
										<div class="col-lg-2">
											<input type="checkbox" name="innerpro2" value="" />
											<label>深绿色</label>
										</div>
										<div class="col-lg-2">
											<input type="checkbox" name="innerpro2" value="" />
											<label>深绿色</label>
										</div>
										<div class="col-lg-2">
											<input type="checkbox" name="innerpro2" value="" />
											<label>军绿色</label>
										</div>
										<div class="col-lg-2">
											<input type="checkbox" name="innerpro2" value="" />
											<label>墨绿色</label>
										</div>
										<div class="col-lg-2">
											<input type="checkbox" name="innerpro2" value="" />
											<label>橄榄绿</label>
										</div>
										<div class="col-lg-2">
											<input type="checkbox" name="innerpro2" value="" />
											<label>乳白绿</label>
										</div>
									</div>
								</div>
								<!--选择所有尺寸-->
								<div class="col-md-8 am-ft-left ProSizeTitl">请选择本商品的所有尺寸</div>
								<div class="col-md-12 ProSize">
									<div class="proSize-info">
										<div class="row">
											<div class="col-lg-2">
												<input type="checkbox" name="innerproNumber" value="" checked />
												<label>x</label>
											</div>
											<div class="col-lg-2">
												<input type="checkbox" name="innerproNumber" value="" />
												<label>xl</label>
											</div>
											<div class="col-lg-2">
												<input type="checkbox" name="innerproNumber" value="" />
												<label>xxl</label>
											</div>
											<div class="col-lg-2">
												<input type="checkbox" name="innerproNumber" value="" />
												<label>s</label>
											</div>
											<div class="col-lg-2">
												<input type="checkbox" name="innerproNumber" value="" />
												<label>m</label>
											</div>
											<div class="col-lg-2">
												<input type="checkbox" name="innerproNumber" value="" />
												<label>xs</label>
											</div>
										</div>
										<!--     <a href="javascript:;" class="fn-right">添加已选尺码详细说明（对应尺寸）</a>-->
									</div>
								</div>
							</div>
							<div class="AddproTabInfo col-md-12 fn-hide">
								<div class="proSize-info">
									<div class="row">
										<div class="col-lg-2">
											<input type="checkbox" name="innerpro3" value="" checked />
											<label>驼色</label>
										</div>
										<div class="col-lg-2">
											<input type="checkbox" name="innerpro3" value="" />
											<label>黄色</label>
										</div>
										<div class="col-lg-2">
											<input type="checkbox" name="innerpro3" value="" />
											<label>黑色</label>
										</div>
										<div class="col-lg-2">
											<input type="checkbox" name="innerpro3" value="" />
											<label>白色</label>
										</div>
										<div class="col-lg-2">
											<input type="checkbox" name="innerpro3" value="" />
											<label>红色</label>
										</div>
										<div class="col-lg-2">
											<input type="checkbox" name="innerproNumber" value="" />
											<label>蓝色</label>
										</div>
									</div>
								</div>
								<!--选择所有尺寸-->
								<div class="col-md-8 am-ft-left ProSizeTitl">请选择本商品的所有尺寸</div>
								<div class="col-md-12 ProSize">
									<div class="proSize-info">
										<div class="row">
											<div class="col-lg-2">
												<input type="checkbox" name="innerproNumber" value="" checked />
												<label>x</label>
											</div>
											<div class="col-lg-2">
												<input type="checkbox" name="innerproNumber" value="" />
												<label>xl</label>
											</div>
											<div class="col-lg-2">
												<input type="checkbox" name="innerproNumber" value="" />
												<label>xxl</label>
											</div>
											<div class="col-lg-2">
												<input type="checkbox" name="innerproNumber" value="" />
												<label>s</label>
											</div>
											<div class="col-lg-2">
												<input type="checkbox" name="innerproNumber" value="" />
												<label>m</label>
											</div>
											<div class="col-lg-2">
												<input type="checkbox" name="innerproNumber" value="" />
												<label>xs</label>
											</div>
										</div>
										<!--  <a href="javascript:;" class="fn-right">添加已选尺码详细说明（对应尺寸）</a>-->
									</div>
								</div>
							</div>
							<!--/色系TabContent-->

							<!----innerrow7-2 颜色尺寸联动---->
							<div class="col-md-1 inprodet-titl">&nbsp;</div>
							<div class="col-md-10 form-group table-responsive corlorSizeTable" style="margin-left: 25px;">
								<table width="100%" class="table table-condensed">
									<tr>
										<th scope="col">颜色</th>
										<th scope="col">尺寸</th>
										<!-- <th scope="col">价格</th> -->
										<th scope="col">商品条形码</th>
										<th scope="col">商品SKU编码</th>
									</tr>
									<tr ng-repeat="colors in ColorNumAndName">
										<td>{{colors.colorName}}</td>
										<td>
											<div ng-repeat="sizes in SizeNumAndName" class="mgb10 color-size">{{sizes.sizeName}}
												<input type="hidden" name="sizeName" value="{{sizes.sizeName}}" />
											</div>
										</td>
<!-- 										<td>
											<div ng-repeat="sizes in SizeNumAndName" class="mgb10">
												<input id="{{colors.colorId+sizes.sizeId+'2'}}" name="proSkuPrice" type="text" value="{{proPrice}}" />
											</div>
										</td> -->
										<td>
											<div ng-repeat="sizes in SizeNumAndName" class="mgb10">
												<input id="{{colors.colorId+sizes.sizeId}}" name="proInterbc" type="text" />
											</div>
										</td>
										<td>
											<div ng-repeat="sizes in SizeNumAndName" class="mgb10 color-size">
												{{styleNumber}}{{colors.colorNum}}{{sizes.sizeNum}}
												<input id="{{colors.colorId+sizes.sizeId+'1'}}" name="proInnerbc" type="hidden" value="{{styleNumber}}{{colors.colorNum}}{{sizes.sizeNum}}" />
											</div>
										</td>
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
													<input type="file" name="files" ngf-select="uploadMain($files,'main1','1')" value="" />
													<img alt="" src="http://static.qineasy.com/base/images/photobg.jpg" id="main1">
												</div>
												<div class="phoboxbt">
													<a ng-click="clearImage('main1')"><i class="fa fa-close"></i></a>
													<a ng-click="moveImage('main1','main2','')"><i class="fa fa-chevron-right"></i></a>
													<a href="javascript:;" class="fn-hide"><i class="fa fa-chevron-left"></i></a>
												</div>
											</div>
										</div>
										<div class="col-md-9">
											<div class="photoBox">
												<div class="photoBg">
													<input type="file" name="files" ngf-select="uploadMain($files,'main2','1')" value="" />
													<img alt="" src="http://static.qineasy.com/base/images/photobg.jpg" id="main2">
												</div>
												<div class="phoboxbt">
													<a ng-click="clearImage('main2')"><i class="fa fa-close"></i></a>
													<a ng-click="moveImage('main2','main3','')"><i class="fa fa-chevron-right"></i></a>
													<a ng-click="moveImage('main1','main2','')"><i class="fa fa-chevron-left"></i></a>
												</div>
											</div>
											<div class="photoBox">
												<div class="photoBg">
													<input type="file" name="files" ngf-select="uploadMain($files,'main3','1')" value="" />
													<img alt="" src="http://static.qineasy.com/base/images/photobg.jpg" id="main3">
												</div>
												<div class="phoboxbt">
													<a ng-click="clearImage('main3')"><i class="fa fa-close"></i></a>
													<a ng-click="moveImage('main3','main4','')"><i class="fa fa-chevron-right"></i></a>
													<a ng-click="moveImage('main2','main3','')"><i class="fa fa-chevron-left"></i></a>
												</div>
											</div>
											<div class="photoBox">
												<div class="photoBg">
													<input type="file" name="files" ngf-select="uploadMain($files,'main4','1')" value="" />
													<img alt="" src="http://static.qineasy.com/base/images/photobg.jpg" id="main4">
												</div>
												<div class="phoboxbt">
													<a ng-click="clearImage('main4')"><i class="fa fa-close"></i></a>
													<a ng-click="moveImage('main4','main5','')"><i class="fa fa-chevron-right"></i></a>
													<a ng-click="moveImage('main3','main4','')"><i class="fa fa-chevron-left"></i></a>
												</div>
											</div>
											<div class="photoBox">
												<div class="photoBg">
													<input type="file" name="files" ngf-select="uploadMain($files,'main5','1')" value="" />
													<img alt="" src="http://static.qineasy.com/base/images/photobg.jpg" id="main5">
												</div>
												<div class="phoboxbt">
													<a ng-click="clearImage('main5')"><i class="fa fa-close"></i></a>
													<a ng-click="moveImage('main5','main1','')"><i class="fa fa-chevron-right"></i></a>
													<a ng-click="moveImage('main4','main5','')"><i class="fa fa-chevron-left"></i></a>
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
													<input type="file" name="" ngf-select="uploadMain($files,colors.colorId+'1','1')" value="" />
													<img alt="" src="http://static.qineasy.com/base/images/photobg.jpg" id="{{colors.colorId+'1'}}">
												</div>
												<div class="phoboxbt">
													<a ng-click="clearImage(colors.colorId+'1')"><i class="fa fa-close"></i></a>
													<a ng-click="moveImage(colors.colorId+'1',colors.colorId+'2','')"><i class="fa fa-chevron-right"></i></a>
													<a href="javascript:;" class="fn-hide"><i class="fa fa-chevron-left"></i></a>
												</div>
											</div>
										</div>
										<div class="col-md-9">
											<div class="photoBox">
												<div class="photoBg">
													<input type="file" name="" ngf-select="uploadMain($files,colors.colorId+'2','1')" value="" />
													<img alt="" src="http://static.qineasy.com/base/images/photobg.jpg" id="{{colors.colorId+'2'}}">
												</div>
												<div class="phoboxbt">
													<a ng-click="clearImage(colors.colorId+'2')"><i class="fa fa-close"></i></a>
													<a ng-click="moveImage(colors.colorId+'2',colors.colorId+'3','')"><i class="fa fa-chevron-right"></i></a>
													<a ng-click="moveImage(colors.colorId+'1',colors.colorId+'2','')"><i class="fa fa-chevron-left"></i></a>
												</div>
											</div>
											<div class="photoBox">
												<div class="photoBg">
													<input type="file" name="" ngf-select="uploadMain($files,colors.colorId+'3','1')" value="" />
													<img alt="" src="http://static.qineasy.com/base/images/photobg.jpg" id="{{colors.colorId+'3'}}">
												</div>
												<div class="phoboxbt">
													<a ng-click="clearImage(colors.colorId+'3')"><i class="fa fa-close"></i></a>
													<a ng-click="moveImage(colors.colorId+'3',colors.colorId+'4','')"><i class="fa fa-chevron-right"></i></a>
													<a ng-click="moveImage(colors.colorId+'2',colors.colorId+'3','')"><i class="fa fa-chevron-left"></i></a>
												</div>
											</div>
											<div class="photoBox">
												<div class="photoBg">
													<input type="file" name="" ngf-select="uploadMain($files,colors.colorId+'4','1')" value="" />
													<img alt="" src="http://static.qineasy.com/base/images/photobg.jpg" id="{{colors.colorId+'4'}}">
												</div>

												<div class="phoboxbt">
													<a ng-click="clearImage(colors.colorId+'4')"><i class="fa fa-close"></i></a>
													<a ng-click="moveImage(colors.colorId+'4',colors.colorId+'5','')"><i class="fa fa-chevron-right"></i></a>
													<a ng-click="moveImage(colors.colorId+'3',colors.colorId+'4','')"><i class="fa fa-chevron-left"></i></a>
												</div>
											</div>
											<div class="photoBox">
												<div class="photoBg">
													<input type="file" name="" ngf-select="uploadMain($files,colors.colorId+'5','1')" value="" />
													<img alt="" src="http://static.qineasy.com/base/images/photobg.jpg" id="{{colors.colorId+'5'}}">
												</div>
												<div class="phoboxbt">
													<a ng-click="clearImage(colors.colorId+'5')"><i class="fa fa-close"></i></a>
													<a ng-click="moveImage(colors.colorId+'5',colors.colorId+'1','')"><i class="fa fa-chevron-right"></i></a>
													<a ng-click="moveImage(colors.colorId+'4',colors.colorId+'5','')"><i class="fa fa-chevron-left"></i></a>
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
						<!--<div class="row">
                    <div class="nowraps-text inprodet-titl am-ft-14">商品描述</div>
                    <div class="col-md-10">
                        <script type="text/plain" id="myAddEditor"></script>
                        <div class="errowTipnav">
                           <!--  <small class="errowTip">&Cross;&nbsp;&nbsp;输入不能为空</small> -->
						<!--</div>
                    </div>-->
						<!--</div>-->
						<div class="row">
							<div class="nowraps-text inprodet-titl am-ft-14">商品描述</div>
							<div class="col-md-10">
								<script type="text/plain" id="editoraa"></script>
								<!--<div class="errowTipnav">-->
								<!--  <small class="errowTip">&Cross;&nbsp;&nbsp;输入不能为空</small> 
                        <!--</div>-->

							</div>
						</div>
						<div class="fn-clear"></div>
					</div>
				</div>
			</div>
			<!-- /.row -->
			<button type="button" class="btn btn-primary postProInfo" ng-click="saveProduct(this)">发布</button>

		</section>
	</form>
	<!-- /.content -->
</div>
<!---- Content-wrapper end ---->

<!-------弹出框 start--------->
<div class="am-dialog addColordialog sizeInfodialog">
	<div class="am-dialog-wrap">
		<div class="am-dialog-header">
			<h3 class="am-ft-center">添加已选尺码详细说明（对应尺寸）</h3>
		</div>
		<div class="am-dialog-body">
			<div class="am-dialog-brief">

				<div class="form-group">
					<table width="100%" class="table table-condensed">
						<tr>
							<th scope="col">尺码</th>
							<th scope="col"><input type="checkbox" name="" />适合身高(cm)</th>
							<th scope="col"><input type="checkbox" name="" />适合胸围(cm)</th>
							<th scope="col"><input type="checkbox" name="" />适合腰围(cm)</th>
							<th scope="col"><input type="checkbox" name="" />适合体重(kg)</th>
							<th scope="col"><input type="checkbox" name="" />适合臀围(cm)</th>
							<th scope="col"><input type="checkbox" name="" />适合肩宽(cm)</th>
						</tr>
						<tr>
							<td>S</td>
							<td>
								<input name="" type="text" value="123" />&nbsp;-&nbsp;
								<input name="" type="text" value="123" />
							</td>
							<td>
								<input name="" type="text" value="123" />&nbsp;-&nbsp;
								<input name="" type="text" value="123" />
							</td>
							<td>
								<input name="" type="text" value="123" />&nbsp;-&nbsp;
								<input name="" type="text" value="123" />
							</td>
							<td>
								<input name="" type="text" value="123" />&nbsp;-&nbsp;
								<input name="" type="text" value="123" />
							</td>
							<td>
								<input name="" type="text" value="123" />&nbsp;-&nbsp;
								<input name="" type="text" value="123" />
							</td>
							<td>
								<input name="" type="text" value="123" />&nbsp;-&nbsp;
								<input name="" type="text" value="123" />
							</td>
						</tr>
						<tr>
							<td>xs</td>
							<td>
								<input name="" type="text" value="123" />&nbsp;-&nbsp;
								<input name="" type="text" value="123" />
							</td>
							<td>
								<input name="" type="text" value="123" />&nbsp;-&nbsp;
								<input name="" type="text" value="123" />
							</td>
							<td>
								<input name="" type="text" value="123" />&nbsp;-&nbsp;
								<input name="" type="text" value="123" />
							</td>
							<td>
								<input name="" type="text" value="123" />&nbsp;-&nbsp;
								<input name="" type="text" value="123" />
							</td>
							<td>
								<input name="" type="text" value="123" />&nbsp;-&nbsp;
								<input name="" type="text" value="123" />
							</td>
							<td>
								<input name="" type="text" value="123" />&nbsp;-&nbsp;
								<input name="" type="text" value="123" />
							</td>
						</tr>
						<tr>
							<td>m</td>
							<td>
								<input name="" type="text" value="123" />&nbsp;-&nbsp;
								<input name="" type="text" value="123" />
							</td>
							<td>
								<input name="" type="text" value="123" />&nbsp;-&nbsp;
								<input name="" type="text" value="123" />
							</td>
							<td>
								<input name="" type="text" value="123" />&nbsp;-&nbsp;
								<input name="" type="text" value="123" />
							</td>
							<td>
								<input name="" type="text" value="123" />&nbsp;-&nbsp;
								<input name="" type="text" value="123" />
							</td>
							<td>
								<input name="" type="text" value="123" />&nbsp;-&nbsp;
								<input name="" type="text" value="123" />
							</td>
							<td>
								<input name="" type="text" value="123" />&nbsp;-&nbsp;
								<input name="" type="text" value="123" />
							</td>
						</tr>
						<tr>
							<td>xl</td>
							<td>
								<input name="" type="text" value="123" />&nbsp;-&nbsp;
								<input name="" type="text" value="123" />
							</td>
							<td>
								<input name="" type="text" value="123" />&nbsp;-&nbsp;
								<input name="" type="text" value="123" />
							</td>
							<td>
								<input name="" type="text" value="123" />&nbsp;-&nbsp;
								<input name="" type="text" value="123" />
							</td>
							<td>
								<input name="" type="text" value="123" />&nbsp;-&nbsp;
								<input name="" type="text" value="123" />
							</td>
							<td>
								<input name="" type="text" value="123" />&nbsp;-&nbsp;
								<input name="" type="text" value="123" />
							</td>
							<td>
								<input name="" type="text" value="123" />&nbsp;-&nbsp;
								<input name="" type="text" value="123" />
							</td>
						</tr>
					</table>
				</div>

			</div>
		</div>
		<div class="am-dialog-footer">
			<button type="button" class="btn btn-primary savSiz">保存</button>
			<div class="fn-clear"></div>
		</div>
	</div>
</div>
<!-------弹出框 end--------->

<!-- 工具提示 start-->
<!--<div class="alert alert-success alert-dismissible fade in fn-hide" role="alert">
    <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span>
    </button>
    <strong>发布成功!</strong>
</div>-->
<!-- 工具提示 end -->
<!----------------- Content Wrapper end ------------------->
<!-- 尾部 -->
<jsp:include page="../../public/footstyle.jsp" />
<script>
	$(function() {
			var formArray = [];
			formArray.push('{"addproductForm":"/product/addProduct"}');
			initValidate(formArray, pos, 'blur');
		})
		/*     $(function(){
		        //弹窗
		        $('.sizeInfodialog').center();
		        $('.openDl').click(function(){
		            $('.sizeInfodialog,.maskBg').dialogShow();
		        });
		        $('.savSiz').click(function(){
		            $('.sizeInfodialog,.maskBg').dialogHide();
		        });
		        //弹窗内容选中、取消
		        var input = $(".sizeInfodialog").find('input[type=checkbox]');
		        var td = $(".sizeInfodialog").find('tr td');

		        //默认全选
		        input.prop("checked", function(i, v) {
		            return !v;
		        });

		        input.click(function(){
		            var index = $(this).parent('th').index();

		            if($(this).is(':checked')){
		                $(".sizeInfodialog").find('tr').each(function(k,v){
		                    $(v).children('td:eq('+index+')').children().show();
		                })
		            }else{
		                $(".sizeInfodialog").find('tr').each(function(k,v){
		                    $(v).children('td:eq('+index+')').children().hide();
		                })
		            }

		        });

		    }) */
</script>
<script>
	/*     $(function(){
	        $('input[type=text]').blur(function(){
	            $(this).addClass('error');
	            $(this).parent().next('.errowTip').show();
	        });
	    }) */
</script>