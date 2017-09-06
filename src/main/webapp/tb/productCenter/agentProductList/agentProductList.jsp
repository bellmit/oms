<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!--商户管理主页-->
<!--------------- Content start ----------------->
<div class="content-wrapper content-member-wrapper sku-content-wrapper content-forward-wrapper">
    <div class="ManColTable col-lg-12">
        <div class="col-lg-12 pl0 pr0">
            <h2 class="am-ft-16 fn-left">商品中心（共{{count}}条记录）</h2>
            <div class="OderlistSearch skulistSearch mgt0 fn-right " ng-if="count>0">
				<!--<div class="">-->
					<div class="fn-clear pl0 pr0" style="width:350px">
						<a href="javascript:;" style="line-height: 14px;" class="fn-right search-button" ng-click="search(shopName)">查询</a>
						<input type="text" class="col-sm-8  fn-right agentSearch" ng-model="shopName" placeholder="请输入商户名称查询" value="" />
					</div>
					<div class="fn-clear"></div>
				<!--</div>-->
			</div>
            
            
        </div>
        <div class="fn-clear"></div>

        <!--缺省-->
		<div class="col-md-12 dafaultWapper" ng-if="count==0">
			<div class="loadingFormal">
				<img src="../static/base/images/icon_wait.png" />
				<span style="font-size: 16px;">暂无记录</span>
			</div>
		</div>
        <!-- 商户列表 -->
        <div class="col-lg-12" style="padding: 0;">
            <div class="productCenterInfo">
                <table class="table table-hover table-striped productTable" ng-if="count>0">
                    <tr>
                        <th width="40%" colspan="2">商户</th>
                        <th width="10%">全部商品</th>
                        <th width="10%">未发布商品</th>
                        <!-- <th width="10%">素材图片</th>
                        <th width="10%">正式图库</th> -->
                        <!--<th width="10%">运营人员</th>-->
                        <!-- <th width="10%">操作</th> -->
                    </tr>
                    <!--未分配-->
                    <tr ng-repeat="orgManage in orgManageList" ng-model="orgManage">
                        <td class="orgManageProImgC">
                           <img ng-if="orgManage.shopLogo!=''" ng-click="showPostProductList(this,'1')" ng-src="{{orgManage.shopLogo}}" class="productImg" title="" alt="" />
                           <img ng-if="orgManage.shopLogo==''" ng-click="showPostProductList(this,'1')" src="http://static.qineasy.com/base/images/img_default_company.png" class="productImg" title="" alt="" />
                        <td class="comProducInfo">
                            <a href="javascript:;" class="productTitl" ng-click="showPostProductList(this,'1')">{{orgManage.shopName}}</a>
                            <!--<p class="am-ft-black">店铺数：<a href="javascript:;" ng-click="showStoreAmount(this)">{{orgManage.shopNum}}个</a></p>-->
                            <p>联系电话：{{orgManage.shopTel}}</p>
                            <p>详细地址：{{orgManage.province}}{{orgManage.city}}{{orgManage.district}}{{orgManage.shopAddr}}</p>
                        </td>
                        <td><a href="javascript:;" ng-click="showPostProductList(this,'1')">{{orgManage.allPublishNum}}个</a></td>
                        <td><a href="javascript:;"  ng-click="showPostProductList(this,'3')">{{orgManage.unPublishNum}}个</a></td>
                        <!-- <td><a href="javascript:;" ng-click="showProMateriaPic(this)">素材图片</a></td>
                        <td><a href="javascript:;" ng-click="showFormalPics(this)">正式图库</a></td> -->
                        <!--<td ng-if="orgManage.userName==''"><a href="javascript:;" class="allotOprate" ng-click="slecetUser(this)">分配</a></td>
                        <td ng-if="orgManage.userName!=''">{{orgManage.userName}}</td>-->
                        <!-- <td><a href="javascript:;" class="am-ft-red deloperateList">删除</a></td> -->
                    </tr>
                </table>
                 <!--分页 start-->
			    <div class="pagelist priv-pagelist">
			    	<div id="pagingMain"></div>    
			    </div>
			    <!--分页 end-->
            </div>
            <div class="fn-clear"></div>
        </div>
        <!-- /商品列表 -->
    </div>
    <div class="fn-clear"></div>
</div>


<!-- 分配运营人员弹窗  -->
<div class="am-dialog forwardMgt-Dialog fn-hide" id="forwardMgt-Dialog">
    <i class="fa fa-close closeDia" id="closeDia"></i>
    <div class="am-dialog-wrap">
        <div class="am-dialog-header">
            <h3>选择运营人员</h3>
        </div>
        <div class="note-Dialog">请选择<strong>“{{selectShopName}}”</strong>的运营人员：</div>
        <div class="am-dialog-body">
            <div class="table-responsive forwComMgt-table">
                <table class="table table-striped addInvinfo" style="max-height:300px;overflow-y:auto">
                    <tr>
                        <th scope="col" width="50">&nbsp;</th>
                        <th scope="col">手机号</th>
                        <th scope="col">昵称</th>
                        <th scope="col">负责商户</th>
                        <th scope="col">已完成商品</th>
                        <th scope="col">未完成商品</th>
                    </tr>
                    <tr ng-repeat="user in userList" ng-click="clickUser(this)">
                        <td><i class="fa fa-line-check-white"></i></td>
                        <td>{{user.telphone}}</td>
                        <td>{{user.trueName}}</td>
                        <td>{{user.orgNum}}个</td>
                        <td>{{user.doneProNum}}个</td>
                        <td>{{user.unDoProNum}}个</td>
                    </tr>
                </table>
            </div>
            <div class="fn-clear"></div>

        </div>
        <div class="am-dialog-footer">
            <a href="javascript:;" class="btn btn-default closedialog">取消</a>
            <a href="javascript:;" class="btn btn-primary mgl20" ng-click="doOrgManage()">确定</a>
        </div>
    </div>
</div>
<!-- /分配运营人员弹窗  -->

<!--删除弹窗-->
<div class="am-dialog DelDialog fn-hide">
    <div class="am-dialog-wrap">
        <div class="am-dialog-body">
            <h2 class="am-dialog-brief">是否确定删除</h2>
        </div>
        <div class="dialogBtn am-flexbox">
            <button type="button" class="am-flexbox-item btn am-button" am-bg="blue">确认</button>
            <button type="button" class="am-flexbox-item btn am-button closedialog" am-bg="white">取消</button>
            <div class="fn-clear"></div>
        </div>
    </div>
</div>
<!--/删除弹窗-->
