<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!--------------- Content start ----------------->
<div class="content-wrapper content-member-wrapper content-forward-wrapper">
    <div class="ManColTable col-lg-12">
        <div class="col-md-11 pageTitl">
            <h2 class="am-ft-16 fn-left">人员详情</h2>
            <a href="javascript:;" class="line-btn fn-right" ng-click="goback()">返回</a>
        </div>
        <div class="fn-clear"></div>

        <!-- 商户列表 -->
        <div class="ManColTable forwardMembTable col-md-12">
            <span class="forwardMemb-note am-ft-14">{{memberInfo.trueName}}</span><span class="am-ft-14 mgl10">{{memberInfo.telphone}}</span>
            <p class="forwardMemb-note"><span>职位：{{memberInfo.roleName}}</span><span class="mgl20">邮箱：{{memberInfo.email}}</span></p>
            
            <div class="listSearch OderlistSearch forwardSearch">

                <p class="col-md-3 am-ft-black searchTitle color666">商户列表（<span class="am-ft-14">{{count}}个</span>）</p>

                <div class="col-md-4 searchBox fn-right">
                    <input type="text" class="col-sm-10 mgt-8" ng-model="shopName"  placeholder="商户名称" value="" />
                    <a href="javascript:;" class="fn-left search-icon" ng-click="search()">查询</a>
                </div>
                <div class="fn-clear"></div>
            </div>
            <div class="productCenterInfo">
                <table class="table table-hover table-striped productTable">
                    <tr>
                        <th colspan="2">商户</th>
                        <th>全部商品</th>
                        <th>已发布商品</th>
                        <th>未发布商品</th>
                        <!-- <th width="10%">操作</th> -->
                    </tr>
                    <tr ng-repeat="orgManage in orgManageList">
                        <td class="orgManageProImg">
                            <img ng-if="orgManage.shopLogo!=''" ng-src="{{orgManage.shopLogo}}" class="productImg" title="" alt="" />
                            <img ng-if="orgManage.shopLogo==''" src="http://static.qineasy.com/base/images/img_default_company.png" class="productImg" title="" alt="" />
                        </td>
                        <td class="comProducInfo" width="30%">
                            <!-- <a href="javascript:;" class="productTitl"> --><p class="productTitl mgb0">{{orgManage.shopName}}</p><!-- </a> -->
                            <p><span class="am-ft-black">店铺数：</span><!-- <a href="javascript:;"> -->{{orgManage.shopNum}}个<!-- </a> --></p>
                            <p>联系电话：{{orgManage.shopTel}}</p>
                            <p>详细地址：{{orgManage.province}}{{orgManage.city}}{{orgManage.district}}{{orgManage.shopAddr}}</p>
                        </td>
                        <td><!-- <a href="javascript:;"> -->{{orgManage.allProNum}}个<!-- </a> --></td>
                        <td><!-- <a href="javascript:;"> -->{{orgManage.doneProNum}}个<!-- </a> --></td>
                        <td><!-- <a href="javascript:;"> -->{{orgManage.unDoProNum}}个<!-- </a> --></td>
                        <!-- <td><a href="javascript:;">查看详情</a></td> -->
                    </tr>
                </table>
                 <!--分页 start-->
			    <div class="pagelist priv-pagelist">
			    	<div id="paging"></div>    
			    </div>
			    <!--分页 end-->
            </div>
            <div class="fn-clear"></div>
        </div>
        <!-- /商品列表 -->
    </div>
    <div class="fn-clear"></div>
</div>
<div class="fn-clear"></div>
