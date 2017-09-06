<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!--------------- Content start ----------------->
<div class="content-wrapper content-wrapper-itemshow content-wrapper-itemshow2">
	<div class="col-lg-12">
		<div class="col-md-11 storeProBox publicImgBox">
			<div class="col-md-12 fodderMainRow fodderMainRow3">
				<!--新建文件夹-->
				<div class="fodderMain fodderMain-default" ng-if="userInfo.roleId == 1" id="addFolder" ng-click="addFolder()">
					<div class="fodderMainImg">
						<img src="http://static.qineasy.com/base/images/icon_addfolder.png" />
					</div>
					<a href="javascript:;">新建文件夹</a>
				</div>
				<div class="fodderMain" ng-repeat="attr in attrList" ng-model="attr">
					<div class="fodderMainImg " ng-click="getImagesList(attr.proAttrId)">
						<img src="http://static.qineasy.com/base/images/icon_newfolder.png" />
						<div class="cover" ng-if="userInfo.roleId == 1">
							<a href="javascript:;" class="delete am-ft-white mgr20" ng-click="delFolder(attr.proAttrId,$event)">删除</a>
						</div>
						<input id="" type="hidden" class="code_checkbox" />
					</div>
					<div class="fodderMainInfo">
						<input type="text" value="{{attr.proAttrFilePath}}" class="fodderMainTitle fodderPubEdit" ng-model="attr.proAttrFilePath" placeholder="" ng-blur='updateFolder(this)' />
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="fn-clear"></div>
	<!--------------- /Content end ----------------->
</div>
