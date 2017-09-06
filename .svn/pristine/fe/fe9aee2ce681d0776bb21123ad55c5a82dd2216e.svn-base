<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<a href="javascript:;" class="line-btn forwardTop-goBack" ng-click="goback('productBaseInfo')">返回</a>
<div class="content-wrapper content-wrapper-order">
	<div class="col-md-11 pageTitl removeBottom storeBasicInfo">
		<div class="col-md-8 storeProLeft">
			<div class="storeProLeftImg fn-left">
				<img ng-src="{{model.mainPic}}" ng-if="model.mainPic != '' " />
				<img src="http://static.qineasy.com/base/images/img_default_goods.png" ng-if="model.mainPic == '' " />
			</div>
			<div class="storeProLeftDetil fn-left">
				<p>{{model.proName}}</p>
				<p class="inDetil">款号：{{model.proModelnum}}</p>
				<span class="">吊牌价：{{model.proPrice}}元</span>
				<span class="mgr5 mgl20">品类：{{model.sortName}}</span>
			</div>
		</div>
		<div class="col-md-4 storeProRight">
			<p>未发布</p>
			<button class="storeProRightEdit" ng-click="editProDetInfo()">编辑基本信息</button>
			<button class="storeProRightPublish" ng-click="getShop1();">发布</button>
		</div>
	</div>
	<div class="col-md-11 storeProNavBar fn-clear">
		<div ng-class="{true:'storeSetBackground'}[tabFlag=='1']" ng-click="shiftTab('1')">基本信息</div>
		<div ng-class="{true:'storeSetBackground'}[tabFlag=='2']" ng-click="shiftTab('2')">素材图片</div>
		<div ng-class="{true:'storeSetBackground'}[tabFlag=='3']" ng-click="shiftTab('3')">正式图片库</div>
		<div ng-class="{true:'storeSetBackground'}[tabFlag=='4']" ng-click="shiftTab('4')">pc端标准详情</div>
		<div ng-class="{true:'storeSetBackground'}[tabFlag=='5']" ng-click="shiftTab('5')">手机端标准详情</div>
		<div ng-class="{true:'storeSetBackground'}[tabFlag=='6']" ng-click="shiftTab('6')">发布店铺</div>
	</div>
	<div class="col-md-11 storeProBox">
		<div ng-show="tabFlag=='1'">
			<div class="col-md-12 mgb10">
				<div class="col-md-4">
					<span class="colorGery">品牌：</span>
					<span class="colorBack">{{model.brandName}}</span>
				</div>
				<div class="col-md-4">
					<span class="colorGery">年份：</span>
					<span class="colorBack">{{model.proYear}}</span>
				</div>
				<div class="col-md-4">
					<span class="colorGery">季节：</span>
					<span class="colorBack">{{model.proSeason}}</span>
				</div>
			</div>
			<div class="col-md-12 mgb10">
				<div class="col-md-4">
					<span class="colorGery">系列：</span>
					<span class="colorBack">{{model.proSeries}}</span>
				</div>
				<div class="col-md-4">
					<span class="colorGery">风格：</span>
					<span class="colorBack">{{model.proStyle}}</span>
				</div>
				<div class="col-md-4">
					<span class="colorGery">波段：</span>
					<span class="colorBack">{{model.proStage}}</span>
				</div>
			</div>
			<div class="col-md-12 mgt10">
				<table class="table table-hover table-striped table-bordered storeProSKU">
					<tr>
						<th scope="col">颜色</th>
						<th scope="col">尺码</th>
						<!-- <th scope="col">商品条形码</th> -->
						<th scope="col">商品SKU编码</th>
					</tr>
					<tr ng-repeat="a in proColorList">
						<td rowspan="{{index1}}" ng-if="$index == 0 && index1 != 1">{{a.proColorName}}</td>
						<td rowspan="{{index1}}" ng-if="($index != 0 && ($index+1) % index1 == 1) || (index1 ==1)">{{a.proColorName}}</td>
						<!-- <td rowspan="{{proColorList[$index].index}}" ng-if = "proColorList[$index-1].proColorId != proColorList[$index].proColorId">{{a.proColorName}}</td> -->
						<td>{{a.proSizeName}}</td>
						<!-- <td>{{a.proNum}}</td> -->
						<td>{{a.proNum}}</td>
					</tr>
				</table>
			</div>
			<div ng-if="userInfo.orgType == '1'">
				<div class="col-md-12 storeProImgBox" ng-if="topPic.proAttrValue!=''||mainList.length!=0">
					<div class="col-md-2 storeProImgMain">商品主图</div>
					<div class="col-md-10" ng-if="mainList.length!=0">
						<div class="col-md-1 storeProImgDetail">细节图</div>
						<div class="storeProline col-md-10"></div>
					</div>
				</div>
				<div class="col-md-12 storeProImgBox storeProImgDel">
					<div class="col-md-2 storeProImgMain mgr20 ">
						<img ng-src='{{topPic.proAttrValue}}' ng-if="topPic.proAttrValue !='' " />
					</div>
					<div class="col-md-9 storeProImgs">
						<img ng-repeat="x in mainList" ng-src="{{x.proAttrValue}}" />
					</div>
				</div>
				<p class="paddingleft20" ng-if="colorCount.length!=0">颜色对应的商品图片</p>
				<div ng-repeat="xc in colorCount">
					<div class="col-md-12 storeProImgBox">
						<div class="col-md-1 storeProImgDetail">{{xc.colorName}}</div>
						<div class="storeProline col-md-10"></div>
					</div>
					<div class="col-md-12 storeProImgBox storeProImgDel">
						<div ng-repeat="xl in colorList" ng-if="xl.proAttrIndex == 1 && xl.proAttrName == xc.proAttrName" class="col-md-2 storeProImgMain mgr20 ">
							<img ng-src="{{xl.proAttrValue}}" />
						</div>
						<div class="col-md-9 storeProImgs">
							<img ng-repeat="xl in colorList" ng-if="xl.proAttrName == xc.proAttrName" ng-src="{{xl.proAttrValue}}" />
						</div>
					</div>
				</div>
			</div>
		
		<div ng-if="userInfo.orgType == '6'">
			<div class="col-md-12 mgb10 mgt10">
				<span class="am-ft-14">商品图片</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="am-ft-red">(请上传700*700以上图片，小于3M)</span>
			</div>
			<div class="col-md-12 storeProImgBox">
				<div class="col-md-2 storeProImgMain storeProImgMainForwar">商品主图</div>
				<div class="col-md-10">
					<div class="col-md-2 storeProImgDetail">细节图</div>
					<div class="storeProline col-md-10"></div>
				</div>
			</div>
			<div class="col-md-12 storeProImgBox storeProImgDel">
				<div class="col-md-3 photoBoxMain" style="width: 20%">
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
				<div class="col-md-9 photoBoxDetil">
					<div class="photoBox photoBox_tb">
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
					<div class="photoBox photoBox_tb">
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
					<div class="photoBox photoBox_tb">
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
					<div class="photoBox photoBox_tb">
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
			<div class="col-md-12 mgb10 mgt10">
				<span class="am-ft-14 mgl35">颜色对应的商品图片</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="am-ft-red">(最多可传5张图片哦)</span>
			</div>
			<div ng_repeat="colors in ColorNumAndName">
				<div class="col-md-12 storeProImgBox">
					<div class="col-md-1 storeProImgDetail">{{colors.colorName}}</div>
					<div class="storeProline col-md-10"></div>
				</div>
				<div class="col-md-12 storeProImgBox storeProImgDel">
					<div class="col-md-3 photoBoxMain" style="width: 20%">
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
					<div class="col-md-9 photoBoxDetil">
						<div class="photoBox photoBox_tb">
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
							<div class="photoBg photoBox_tb">
								<input type="file" name="" ngf-select="uploadMain($files,colors.colorId+'3','1')" value="" />
								<img alt="" src="http://static.qineasy.com/base/images/photobg.jpg" id="{{colors.colorId+'3'}}">
							</div>
							<div class="phoboxbt">
								<a ng-click="clearImage(colors.colorId+'3')"><i class="fa fa-close"></i></a>
								<a ng-click="moveImage(colors.colorId+'3',colors.colorId+'4','')"><i class="fa fa-chevron-right"></i></a>
								<a ng-click="moveImage(colors.colorId+'2',colors.colorId+'3','')"><i class="fa fa-chevron-left"></i></a>
							</div>
						</div>
						<div class="photoBox photoBox_tb">
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
						<div class="photoBox photoBox_tb">
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
			<div class="forwarderBasicBtn">
				<button class="forwarderBasicSave" ng-click="saveImages()">保存</button>
				<button class="forwarderBasicCancel" ng-click="goback('commercialInfo')">取消</button>
			</div>
		</div>
</div>
		<div ng-show="tabFlag=='2'">
			<!--素材管理-->
			<jsp:include page="productPictures.jsp" />
		</div>
		<div ng-show="tabFlag=='3'">
			<!--正式图库-->
			<jsp:include page="productFormalFodderImg.jsp" />
		</div>
		<div ng-show="tabFlag=='5'">
			<!--手机端详情-->
			<jsp:include page="productMobileDet.jsp" />
		</div>
		<div ng-show="tabFlag=='4'">
			<!--电脑端详情-->
			<jsp:include page="productPcDet.jsp" />
		</div>
		<div ng-show="tabFlag=='6'">
			<!--发布店铺-->
			<jsp:include page="productStorePost.jsp" />
		</div>
	</div>
</div>
<!--</div>-->
<!--发布商品弹框-->
<div id="showShops1" class="showshopName setDayTargetL publishPro fn-hide">
	<div class="setDayTargetTitle publishTitle">
		<span>发布商品</span>
		<img class="closeDia" src="http://static.qineasy.com/base/images/closelogo.png" />
	</div>
	<div class="setDayTargetContent">
		<p class="willPublishStore">请选择要发布的店铺</p>
		<div class="allStoreName fn-clear">
			<div ng-repeat="x in publishInfoList" ng-click="chooseShopPublish(x.orgId,x.shopType)" ng-if="x.publishStatus!= '已发布'">
				<div class="storeName selec-stores {{x.orgId}}">
					<input type="hidden" value="{{x.orgId}}" />
					<img class="typelogo" ng-if="x.shopType == 3" src="../static/base/images/icon_logo_tmall.png" />
					<img class="typelogo" ng-if="x.shopType == 2" src="../static/base/images/icon_logo_taobao.png" />
					<img class="typelogo" ng-if="x.shopType == 4" src="../static/base/images/icon_logo_jindong.png" />
                    <img class="typelogo" ng-if="x.shopType=='0'"src="../static/base/images/icon_1688.png" />
                    <img  class="typelogo" ng-if="x.shopType=='1'"src="../static/base/images/icon_AliExpress.png" />
                    <img  class="typelogo" ng-if="x.shopType=='5'"src="../static/base/images/icon_amazon.png" />
					<img src="../static/base/images/icon_selected.png" class="iconSelect fn-hide" />
					<span class="shopNameaa">{{x.shopName}}</span>
				</div>
			</div>
		</div>
	</div>
	<div class="publishFrame">
		<button type="button" class="surePublishFrame" ng-click="goRoute2()">发布</button>
		<button type="button" class="publishFrameReset" ng-click="selectReset($event)">重置</button>
	</div>
</div>
<script type="text/javascript">
	$(function() {
		//$(".storeProRightPublish").click(function() {
		//	$('.setDayTargetL').center().show();
		//	$('.maskBg').show();
		//})
		$('.closeDia,.maskBg').click(function() {
			$('.setDayTargetL,.maskBg').hide();
		});
		//关闭弹窗
		$('.closedialog').click(function() {
			$('#updateFile,.maskBg').hide();
			$('.fodderMainTitle').val("")
		})
		/*图片渲染完成*/
		/*图片渲染完成*/
	})
</script>

<div class="am-dialog DelDialog fn-hide" id="updateFile">
	<div class="am-dialog-wrap">
		<div class="am-dialog-body">
			<h2 class="am-dialog-brief">是否确认操作？</h2>
		</div>
		<div class="dialogBtn am-flexbox">
			<button type="button" class="am-flexbox-item btn am-button confirmExecute" am-bg="blue">确认</button>
			<button type="button" class="am-flexbox-item btn am-button closedialog" am-bg="white">取消</button>
			<div class="fn-clear"></div>
		</div>
	</div>
</div>

<!--图片预览蒙层-->
<div class="showScanImg" id="showScanImg">
	<div style="position: relative;overflow-y: auto;width:100%;height:100%">
	<i class="fa fa-times-circle" id="closeScanImg" style="position:fixed; top:40px;right:40px;z-index:2"></i>
	<i class="fa fa-angle-left" id="prevImg" style="z-index: 2;"></i>
	<img src="" alt="" id="showImg"/>
	<i class="fa fa-angle-right" id="nextImg" style="z-index: 2;"></i>
	</div>
</div>
<!--/图片预览蒙层-->
