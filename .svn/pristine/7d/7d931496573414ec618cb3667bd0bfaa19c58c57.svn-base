<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!--Ztree-->

<!--遮罩 start-->

<!--遮罩 end-->

<!--------------- Content start ----------------->
<div class="content-wrapper commercia-content commercia-open-content">
    <div class="col-md-11 pageTitl">
        <h2 class="am-ft-16 fn-left">开通服务</h2>
    </div>
    <div class="fn-clear"></div>
    <div class="line"></div>
    <!-- search -->
    <div class="listSearch OderlistSearch commercia-note">
        <div class="row">
            <div class="col-md-8 mgt10">
                <p class="col-sm-4 control-label">现在的套餐：<span class="mgr5">体验版</span><a href="javascript:;" ng-click="warn()">去升级</a></p>
            </div>
            <div class="col-md-4 am-ft-right" style="padding-left: 46px;">
                <span>当前余额：<i>0.00</i></span>
                <button type="button" class="btn btn-danger mgl5 mgt-8" ng-click="warn()">充值</button>
            </div>
            <div class="fn-clear"></div>
        </div>
    </div>
    <!-- /search -->

    <!-- Main content -->
    <div class="ManColTable col-lg-12">
        <form>
            <div class="table-responsive PrivTable">
                <table class="table table-striped table-opServ">
                    <tr>
                        <th scope="col">服务名称</th>
                        <th scope="col">服务描述</th>
                        <th scope="col">用户数量</th>
                        <th scope="col">使用时间</th>
                        <th scope="col">费用</th>
                        <th scope="col">开通服务</th>
                    </tr>
                    <tr ng-repeat="service in services">
                        <td><label>{{service.name}}</label></td>
                        <td><label>{{service.serviceInfo}}</label></td>
                        <td><label>{{service.accountNum}}个</label></td>
                        <td><label>{{service.duration}}个月</label></td>
                        <td class="deline"><i class="mgr5" ng-hide="service.oriPrice==undefined||service.oriPrice==''||service.oriPrice=='0'">{{service.oriPrice}}元</i><span ng-hide="service.price==undefined||service.price==''">{{service.price}}元</span></td>
                        <td>
                        	<button type="button" class="btn btn-primary" ng-show="service.openNum==0&&(service.price==undefined||service.price==0||service.price=='')" ng-click="openServce(this)">立即免费开通</button>
                        	<button type="button" class="btn btn-primary" ng-hide="service.openNum>0||(service.price==undefined||service.price==0||service.price=='')" ng-click="openServce(this)">马上开通</button>
                        	<button type="button" class="btn alterBtn" ng-show="service.openNum>0" ng-click="openWarn()">已开通</button>
                        </td>
                    </tr>
                </table>

            </div>

        </form>
        <div class="fn-clear"></div>
    </div>
    <div class="fn-clear"></div>
</div>

</div>

<!-- 尾部 -->
<jsp:include page="../../public/footstyle.jsp" />