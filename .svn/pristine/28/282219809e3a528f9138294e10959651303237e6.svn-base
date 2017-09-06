<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!--Ztree-->

<!--遮罩 start-->

<!--遮罩 end-->
<!--------------- Content start ----------------->
<div class="content-wrapper commercia-content commercia-open-content">
    <div class="col-md-11 pageTitl">
        <h2 class="am-ft-16 fn-left">开通记录</h2>
    </div>
    <div class="fn-clear"></div>
    <div class="line"></div>
    <!-- search -->
    <div class="listSearch OderlistSearch commercia-note">
        <div class="row">
            <div class="col-md-8 mgt10">
                <p class="col-sm-4 control-label">现在的套餐：<span class="mgr5">体验版</span><a href="javascript:;" ng-click="warn()">去升级</a></p>
            </div>
            <div class="col-md-4 am-ft-right">
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
                <table class="table table-striped table-opServ table-opServ-record">
                    <tr>
                        <th scope="col">开通日期</th>
                        <th scope="col">有效期</th>
                        <th scope="col">服务名称</th>
                        <th scope="col">用户数量</th>
                        <th scope="col">费用</th>
                        <th scope="col">期限</th>
                        <th scope="col">状态</th>
                    </tr>
                    <tr ng-repeat="serviceOrder in serviceOrders">
                        <td><label>{{serviceOrder.createTime}}</label></td>
                        <td><label>{{serviceOrder.createTime}}~{{serviceOrder.endTime}}</label></td>
                        <td><label>{{serviceOrder.name}}</label></td>
                        <td><label>{{serviceOrder.accountNum}}个</label></td>
                        <td><label>{{serviceOrder.oriPrice}}元</label></td>
                        <td><label>{{serviceOrder.duration}}个月</label></td>
                        <td><label>{{serviceOrder.status}}</label></td>
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