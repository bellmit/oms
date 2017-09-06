<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!--Ztree-->

<!--遮罩 start-->

<!--遮罩 end-->
<!--------------- Content start ----------------->
  <div class="content-wrapper">
    <div class="col-md-11 pageTitl">
        <h2 class="am-ft-16 fn-left">退货管理</h2>
    </div>
    <!-- search -->
    <div class="listSearch OderlistSearch">
        <div class="row">
            <div class="col-md-9 mgt10">
                <label class="pull-left control-label mgl10">请输入订单号：</label>
                <div class="col-sm-3">
                    <input type="text" class="col-sm-12 form-control mgt-8" placeholder="" id="orderId" />
                </div>
                <button type="button" class="btn btn-primary mgt-10 addStyle" ng-click="getOrder()">搜索</button>
            </div>
            <div class="fn-clear"></div>
        </div>
    </div>
    <!-- /search -->

    <!-- Main content -->
    <!-- Part1 -->
    <div class="ManColTable col-lg-12">
        <form>
            <div class="table-responsive PrivTable">
                <table class="table table-hover table-striped table-bordered">
                    <tr>
                        <th scope="col">款号</th>
                        <th scope="col">款名</th>
                        <th scope="col">颜色</th>
                        <th scope="col">尺码</th>
                        <th scope="col">数量</th>
                        <th scope="col">原价</th>
                        <th scope="col">现价</th>
                        <th scope="col">折扣</th>
                        <th scope="col">金额</th>
                    </tr>
                    <tr ng-repeat="orderDetail in orderDetails" ng-if="orderDetail.amount != 0 ">
                        <td>{{orderDetail.proModelid}}</td>
                        <td>{{orderDetail.proName}}</td>
                        <td>{{orderDetail.proColorName}}</td>
                        <td>{{orderDetail.proSizeName}}</td>
                        <td>{{orderDetail.amount}}</td>
                        <td>{{orderDetail.unitPrice}}</td>
                        <td>{{orderDetail.prePrice}}</td>
                        <td>{{orderDetail.discount}}</td>
                        <td>{{orderDetail.totalPrice}}</td>
                    </tr>

                </table>
                <div class="col-md-12 mgb15">
                    <div class="fn-right mgr5"  >
                        <span class="mgr5">数量：<strong>{{order.orderQuantity}}件</strong></span>
                        <span>总计：<strong>{{order.totalPrice}}元</strong></span>
                    </div>
                </div>
            </div>
        </form>

        <div class="fn-clear"></div>
    </div>
    <!-- /Part1 -->

    <div class="fn-clear"></div>
    <!-- Part2 left-->
    <div class="retailInfo retailInfo1 col-md-5">
        <form class="form-horizontal">
            <div class="form-group mgt15">
                <span class="col-sm-3 control-label">导购员:</span>
                <div class="col-sm-5 mgt5 pl0">
                    <strong>{{guide.trueName}}</strong>
                </div>
            </div>
            <div class="form-group">
                <span class="col-sm-3 control-label">整单备注:</span>
                <div class="col-sm-7 mgt5 pl0">
                    <strong>{{order.orderMemo}}</strong>
                </div>
            </div>
        </form>
    </div>
    <!-- /Part2 left -->
    <!-- Part2 right -->
    <div class="retailInfo retailInfo2 col-md-6">
        <form class="form-horizontal">
            <div class="form-group mgt15">
                <div class="col-sm-10 mgl10">
                    <p class="retailInfo-titl">会员信息</p>
                </div>
            </div>
            <div class="col-sm-4">姓名：<strong>{{member.name}}</strong></div>
            <div class="col-sm-4">会员号：<strong>{{member.memberNo}}</strong></div>
            <div class="col-sm-3">等级：<strong>{{member.gradeName}}</strong></div>
            <div class="col-sm-3 mgt10 mgb15">折扣：<strong>{{member.discount}}</strong></div>
            <div class="col-sm-3 mgt10 mgb15  col-sm-offset-1">积分：<strong>{{member.totalpoints}}</strong></div>
        </form>
    </div>
    <!-- /Part2 right -->

    <!-- Part3 left -->
    <div class="retailInfo retailInfo3 col-md-3">
        <form class="form-horizontal">
            <div class="col-sm-7">原价：<strong>{{originalPrice}}元</strong></div>
            <div class="col-sm-7">折扣：<strong>{{discount}}</strong></div>
            <div class="col-sm-7">现价：<strong>{{order.totalPrice}}元</strong></div>
        </form>
    </div>
    <!-- /Part3 left -->

    <!-- Part3 right -->
    <div class="retailInfo retailInfo-account col-md-8">
        <form class="form-horizontal">
            <div class="col-sm-7">应退金额：</div>
            <div class="col-sm-12 account-num">{{order.totalPrice}}元</div>
            <button class="btn btn-info account-btn" onclick = "dele()">退款</button>
        </form>
    </div>
    <!-- /Part3 right -->
    <!-- /Main content -->

</div>

</div>


<!--弹窗 start-->
<!-- 删除模态层 -->
    <div class="am-dialog addColordialog" id="deldialog">
        <div class="am-dialog-wrap">
            <div class="am-dialog-header">
                <h3 class="am-ft-center">是否退款？</h3>
            </div>
            <div class="dialogBtn am-flexbox">
            	<input type="hidden" id="colorId">
                <button type="button" class="am-flexbox-item btn am-button alterOv1"
                        am-bg="blue" ng-click="returns(this)">确定</button>
                <button type="button" class="am-flexbox-item btn am-button"
                        id="closeDialog" am-bg="white">取消</button>
                <input type="reset" name="reset" style="display: none;" />
                <div class="fn-clear"></div>
            </div>
        </div>
    </div>
<!--弹窗 end-->
<script type="text/javascript">
	//删除
    function dele(obj){
        $('#deldialog').fadeIn();
        $('.maskBg').fadeIn();
    }
    
    $(".addColordialog").center();

        $('.alterBtn').click(function(){
            $('.maskBg,#userdialog').fadeIn();
        });
        $('#closeDialog,.alterOv,.alterOv1').click(function(){
            $('.maskBg,#userdialog,#deldialog').fadeOut();
        });
</script>
<!-- 尾部 -->
<jsp:include page="../../public/footstyle.jsp" /> 