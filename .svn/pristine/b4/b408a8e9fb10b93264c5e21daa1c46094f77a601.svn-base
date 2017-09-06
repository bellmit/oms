<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!--------------- Content start ----------------->
<div class="content-wrapper content-wrapper-itemshow fn-clear content-wrapper-itemshow2">
	<div class="forwardTop-content fn-left" ng-if="userInfo.orgType == '6'">
		<div class="forwardTop-left">
			<img ng-src="{{orgInfo.shopLogo}}" ng-if="orgInfo.shopLogo != '' " />
			<img src="http://static.qineasy.com/base/images/img_default_company.png" ng-if="orgInfo.shopLogo == '' " />
		</div>
		<div class="forwardTop-right">
			<div class="forwardTop-righttop">
				<p href="javascript:;" class="forwardTop-rightTitl">{{orgInfo.shopName}}</p>
				<div class="fn-clear"></div>
			</div>
			<p class="am-ft-black">
				<span class="stores-count">店铺数：<a href="javascript:;">{{orgInfo.shopNum}}个</a></span>
				<span class="mgl10">运营人员：{{orgInfo.userName}}<!-- <a href="javascript:;"
						class="mgl5 allotOprate">更换</a> --></span>
			</p>
			<p>联系电话：{{orgInfo.shopTel}}</p>
			<p>
				<span class="fn-left">详细地址：{{orgInfo.province}}{{orgInfo.city}}{{orgInfo.district}}{{orgInfo.shopAddr}}</span>
				<span class="fn-right am-ft-gray">商户添加时间：{{orgInfo.openDate}}</span>
			</p>
		</div>
	</div>
	<div class="col-lg-12">

		<div class="fn-clear"></div>
		<div class="col-md-11 publicImgTitle">
			<div class="col-md-11">
				<p class="am-ft-16 mgt10">公用图片/宣传海报图</p>
			</div>
			<div class="col-md-1">
				<button class="whiteGroundBlueBtn mgb10" ng-click="gobackByRoute()">返回</button>
			</div>
		</div>
		<div class="fn-clear"></div>

		<div class="col-md-11 storeProBox publicImgBox">
			<!---- 移动弹窗 ---->
			<div class="handleDialog moveDialog fn-hide">
				<h3>移动到<i class="fa fa-close closeHandle"></i></h3>
				<ul>
					<li ng-repeat="attr in attrListMove" ng-click="moveImages(attr.proAttrId)"><i class="fa fa-folder"></i>{{attr.proAttrFilePath}}</li>
				</ul>
			</div>
			<!---- /移动弹窗 ---->
			
			<!---- 分享弹窗 ---->
			<div class="handleDialog shareDialog fn-hide">
				<h3>分享至<i class="fa fa-close closeHandle"></i></h3>
				<ul>
					<li ng-repeat="fol in attrListFolder" ng-click="shareImages(fol.proAttrId)"><i class="fa fa-folder"></i>{{fol.proAttrFilePath}}</li>
				</ul>
			</div>
			<!---- /分享弹窗 ---->
		
			<div class="col-md-12 mgb10 select-wrap">
				<label class="storeProLabel"> 
				<input type="checkbox" id="selectAllS" ng-click="selectAll('S')" /> 
				<span>全选</span>
				</label>
				<a href="javascript:;" class="mgl10" ng-click="downLoadPic()">
					<i class="downLoad-icon">
					<img src="http://static.qineasy.com/base/images/icon_download.png" />
				</i> 下载
				</a>
				<span class="divline" ng-if="userInfo.orgType == '6'">|</span>
				<a href="javascript:;" class="mgl15 mgr15" ng-click="postImg('imgs',this.attr)" ng-if="userInfo.orgType == '6'">
					<i class="downLoad-icon">
						<img src="../static/base/images/post_icon.png" />
					</i> &nbsp;发布
				</a>
				<span class="divline" ng-if="userInfo.orgType == '6'">|</span>
				<a href="javascript:;" class="morehandles shareHandle" ng-click="getShareFolder()"> 
					<i class="fa fa-share-alt"></i>
					共享
				</a>
				<a href="javascript:;" class="morehandles moveHandle" ng-click="getMoveDialog()"> 
					<i class="fa fa-exchange"></i>
					移动
				</a>
				<a href="javascript:;" ng-click="delImages()" class="mgl15 mgr15" style="color:#888888" ng-if="userInfo.orgType == '6'">
					<i class="fa fa-home fa-trash"></i> &nbsp;删除
				</a>
			</div>
			<div class="col-md-12 fodderMainRow fodderMainRow5">
				<!--上传文件-->
				<div class="fodderMain fodderMain-default" ng-if="userInfo.roleId == '1' || userInfo.roleId == '2'">
					<div class="fodderMainImg">
						<img src="http://static.qineasy.com/base/images/icon_addimg.png" />
					</div>
					<a href="javascript:;">上传文件</a>
					<input type="file" ngf-select="addFiles($files)" ngf-multiple="true" />
				</div>
				<!--文件-->
				<div class="fodderMain" index="{{$index}}" foldtype="proimg" ng-repeat="attr in attrList" ng-model="attr" id="material{{attr.proAttrId}}S">
					<div class="fodderMainImg " ng-click="doSelect(this,'S')">
						<img ng-src="{{attr.proAttrValue}}" />
						<div class="cover" ng-if="userInfo.orgType == '1'">
							<a href="javascript:;" class="scan am-ft-white a-dis">预览</a>
							<a href="javascript:;" class="am-ft-white a-dis" ng-click="downloadone(this.attr)">下载</a>
						</div>
						<div class="cover" ng-if="userInfo.orgType == '6'">
							<a href="javascript:;" class="scan am-ft-white mgr20">预览</a>
							<a href="javascript:;" class="am-ft-white mgr20" ng-click="downloadone(this.attr)">下载</a>
							<a href="javascript:;" class="delete am-ft-white" ng-click="postImg('img',this.attr)">发布</a>
						</div>
						<input id="materialcheck{{attr.proAttrId}}S" type="checkbox" class="code_checkbox" ng-show="false" />
					</div>
					<input id="" type="hidden" class="code_checkbox" />
					<div class="fodderMainInfo">
						<input type="text" value="{{attr.proAttrFilePath}}" class="fodderMainTitle fodderPubEdit" placeholder="" ng-model="attr.proAttrFilePath" ng-blur='updateFolder(this)' />
					</div>
				</div>
			</div>
		</div>
		<div class="fn-clear"></div>
		<!--分页 start-->
		<div class="pagelist priv-pagelist">
			<div id="pagingPubSingle"></div>
		</div>
		<!--分页 end-->
	</div>
	<div class="fn-clear"></div>
	<!--------------- /Content end ----------------->
</div>

<!--授权提示弹窗-->
<div class="show-depotdia" style="display: none;">
	<div class="accredit-content">
		<div class="warn">
			请确认店铺
			<span>[小悠悠服饰]</span> 是否授权完成！
		</div>
		<div class="buttonbox fn-clear">
			<button class="yes fn-left">是</button>
			<button class="no fn-left">否</button>
		</div>
	</div>

</div>

<!--授权提示弹窗-->
<!--发布商品弹窗-->
<!--发布商品弹框-->
<div class="show-depotdia" ng-show="depotdia=='show'">
	<div class="setDayTargeta fn-clear pb20" id="depotdia">
		<div class="setDayTargetTitle publishTitle fn-clear">
			<p class="fn-left">请选择要发布的店铺</p>
			<img class="closeDia fn-right" ng-click="closePostDia('depotdia')" src="http://static.qineasy.com/base/images/closelogo.png" />
		</div>
		<div class="setDayTargetContent">
			<div class="allStoreName fn-clear" style="border: none;overflow: initial;">
				<div ng-click="postImgAlbum(this.x)" ng-repeat="x in publishInfoList" class="poststore" ng-if="x.authInfoId != ''">
					<div class="storeName selec-stores {{x.orgId}}">
						<input type="hidden" value="{{x.orgId}}" />
						<span>{{x.shopName}}</span>
						<img ng-if="x.shopType == 4" src="../static/base/images/icon_logo_tmall.png" />
						<img ng-if="x.shopType == 3" src="../static/base/images/icon_logo_taobao.png" />
						<img ng-if="x.shopType == 5" src="../static/base/images/icon_logo_jindong.png" />
						<img ng-if="x.shopType=='0'" src="../static/base/images/icon_1688.png" />
						<img ng-if="x.shopType=='1'" src="../static/base/images/icon_AliExpress.png" />
						<img ng-if="x.shopType=='2'" src="../static/base/images/icon_amazon.png" />
						<img src="../static/base/images/icon_selected.png" class="iconSelect fn-hide" />
					</div>
				</div>
				<div class="fn-clear"></div>
			</div>
		</div>
	</div>
</div>
<!--发布商品弹窗-->
<!--选择发布的相册-->
<div class="show-depotdia" ng-show="album_dia=='show'">
	<div class="album-dia publishPro" id="album_dia">
		<div class="setDayTargetTitle publishTitle fn-clear">
			<p class="fn-left">选择发布的相册({{postshopName}})</p>
			<img class="closeDia fn-right" src="http://static.qineasy.com/base/images/closelogo.png" ng-click="closePostDia('album_dia')" />
		</div>
		<div class="album-dia-content fn-clear">
			<div class="album-dia-left fn-left" style="overflow-y:auto;">
				<h1>相册目录</h1>
				<!----- tree start ---->
				<div class="content_wrap">
					<div class="zTreeDemoBackground left">
						<ul id="treeDemo" class="ztree"></ul>
					</div>
				</div>
				<div id="rMenu">
					<ul>
						<li id="m_add" onclick="addTreeNode();">增加节点</li>
						<li id="m_del" onclick="removeTreeNode();">删除节点</li>
						<li id="m_check" onclick="checkTreeNode(true);">Check节点</li>
						<li id="m_unCheck" onclick="checkTreeNode(false);">unCheck节点</li>
						<li id="m_reset" onclick="resetTree();">恢复zTree</li>
					</ul>
				</div>
				<!--右键菜单 end-->
				<!----- tree end ----->
			</div>
			<div class="album-dia-right fn-left">
				<div class="dia-right-top fn-clear">
					<div class="bread-path fn-left">
						<span class="selectedpath">相册目录</span>
						<!--<span class="selectedpath">首页图库</span> >-->
						<span ng-if="albumName!=undefined">></span>
						<span>{{albumName}}</span>
					</div>
					<button class="fn-right" id="addLeaf">新建相册</button>
				</div>
				<div class="album-content fn-clear">
					<div class="albumfile fn-left" data-folderType="img" ng-repeat="albumPic in albumPics">
						<img ng-src="{{albumPic.url}}" alt="" />
						<p class="pt15">{{albumPic.photoName}}</p>
					</div>

				</div>
			</div>
		</div>
		<div class="album-dia-bottom fn-clear">
			<div class="buttonbox fn-right mgr20">
				<button class="fn-left" ng-click="closePostDia('album_dia')">取消</button>
				<button class="fn-left" ng-click="postPictures()">发布</button>
			</div>
		</div>
	</div>
</div>
<!--选择发布的相册-->

<!--图片预览蒙层-->
<div class="showScanImg" id="showScanImg">
	<div style="position: relative;overflow-y: auto;width:100%;height:100%">
		<i class="fa fa-times-circle" id="closeScanImg" style="position:fixed; top:40px;right:40px;z-index:2"></i>
		<i class="fa fa-angle-left" id="prevImg" style="z-index: 2;"></i>
		<img src="" alt="" id="showImg" />
		<i class="fa fa-angle-right" id="nextImg" style="z-index: 2;"></i>
	</div>
</div>
<!--/图片预览蒙层-->
<script type="text/javascript">
	//关闭分享、移动弹窗
	$('.closeHandle').click(function(){
		$('.handleDialog').hide();
	});
</script>