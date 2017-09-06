<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
    <style>
    .laydate_table{
        display: none;
    }
    .laydate_body .laydate_box{
        height: 68px;
        width: 266px;
    }
    .laydate_body .laydate_y {
        width: 123px;
    }
    .laydate_body .laydate_m {
        width: 100px;
    }
    .laydate_body .laydate_bottom .laydate_btn{
        right: 100px;
        top: 15px;
    }
    .laydate_body .laydate_bottom .laydate_btn .laydate_ok{
        padding: 2px 5px;
        height: 25px;
        width: 56px;
        text-align: center;
    }
    </style>
<!--Ztree-->
<!--------------- Content start ----------------->
<div class="content-wrapper kpi-wrapper">
    <div class="col-md-11 pageTitl">
        <h2 class="am-ft-16 fn-left">导购业绩指标设定</h2>
    </div>
    <div class="fn-clear"></div>
    <!-- search -->
    <div class="listSearch">
        <form class="form-horizontal">
            <div class="row">
                <div class="col-md-12">
                    <div class="form-group col-md-3" ng-if="orgType==1">
                        <label class="col-sm-4 control-label">店铺：</label>
                        <div class="col-md-9 form-group needValInfo">
                            <select class="col-md-12" ng-model="seletedshop" id="seletedshop" ng-options="a.orgId as a.shopName for a in shops" ng-change="oyhsokpi(seletedshop)">
                                <option value="">请选择</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group col-md-4">
                        <label class="col-sm-6 pr0 control-label">时间（年/月）：</label>
                        <div class="col-sm-6 pl0 pro-search">
                            <input class="laydate-icon form-control" type="text" id="planDate" name="createDate" value="{{primDate}}" placeholder="请选择时间" style="height: 34px;" />
                        </div>
                    </div>
                    <div class="col-md-4 fn-right monthKpi">
                        <p>店铺当月总指标：<strong>{{data.shopPlanAmount}}</strong>元</p>
                    </div>
                    <div class="fn-clear"></div>
                </div>
            </div>
        </form>
    </div>
    <!-- /search -->

    <!-- Main content -->
    <div class="ManColTable col-lg-12 kpi-tablebox">
        <form>
            <div class="table-responsive PrivTable">
                <table class="table table-hover table-striped table-bordered">
                    <tr>
                        <th scope="col" width="120">时间/导购员</th>
                        <th scope="col" width="120">店铺指标</th>
                        <th scope="col" width="120">平分指标</th>
                        <th scope="col" ng-repeat="m in data.salesPlanList[0].sales" salesid={{m.salesId}}>{{m.salesName}}</th>
                    </tr>
                    <tr ng-repeat="n in data.salesPlanList">
                        <td>{{n.planDate}}</td>
                        <td>{{n.planAmount}}</td>
                        <td><a href="javascript:;" ng-click="divideIndicators(this)">平分指标</a></td>
                        <td ng-repeat="v in n.sales"><input class="sales-amount" type="text" name="" placeholder="{{v.salesPlanAmount}}" ng-model="v.salesPlanAmount" /></td>
                    </tr>
                </table>
            </div>
        </form>
        <div class="status-btns">
            <a href="javascript:;" class="btn btn-primary fn-left" ng-click="saveOyshoKpi()">确认</a>
            <a href="javascript:;" class="line-btn fn-left mgl10" ng-click="reset()">重置</a>
        </div>
        <div class="fn-clear"></div>
    </div>

</div>

</div>

<!--弹窗 start-->
<div class="am-dialog EditDialog fn-hide">
    <form id="myform">
        <div class="am-dialog-wrap">
            <div class="am-dialog-header">
                <h3 class="am-ft-center">确定删除？</h3>
            </div>
            <div class="dialogBtn am-flexbox">
                <button type="button" class="am-flexbox-item btn am-button SavEdit deletGroup" am-bg="blue">确认</button>
                <button type="button" class="am-flexbox-item btn am-button" onclick="Dialhide()" am-bg="white">取消</button>
                <div class="fn-clear"></div>
            </div>
        </div>
    </form>
</div>
<!--弹窗 end-->


<!-- 尾部 -->
<jsp:include page="../../public/footstyle.jsp" />

<script>
    //弹窗居中
    $('.EditDialog').center();

</script>