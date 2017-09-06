<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>

<!--------------- Content start ----------------->


<div class="content-wrapper">
    <div class="col-md-11 pageTitl">
        <h2 class="am-ft-16 fn-left">零售管理</h2>
    </div>

    <!-- Main content -->
    <!-- Part1 -->
    <div class="ManColTable ManCol-orderTable col-lg-12">
        <form>
            <div class="table-responsive PrivTable">
                <table class="table table-hover table-striped table-bordered">
                    <tr>
                        <th scope="col">款号</th>
                        <th scope="col">款名</th>
                        <th scope="col">颜色</th>
                        <th scope="col">尺码</th>
                        <th scope="col">吊牌价</th>
                        <th scope="col">单价</th>
                        <th scope="col">折扣<a href="javascript:;" class="mgl5 Bulkditing">批量修改</a></th>
                        <th scope="col">数量</th>
                        <th scope="col">金额</th>
                        <th scope="col">操作</th>
                    </tr>
                    <tr ng-repeat="xs in odlist" id="{{xs.proNum}}" ng-if="xs.amount!=0" >
                        <td style="display: none" class="appId">{{xs.proNum}}</td>
                        <td>{{xs.proModelid}}</td>
                        <td>{{xs.proName}}</td>
                        <td>{{xs.proColorName}}</td>
                        <td>{{xs.proSizeName}}</td>
                        <td>{{xs.oldunitPrice| number:2}}</td>
                        <td><input class="input-mini" type="text" name="" value="{{xs.unitPrice| number:2}}" ng-change="change(xs.proModelid,xs.proColorId,xs.proSize,xs.unitPrice,'1')" ng-model="xs.unitPrice"/></td>
                        <td><input class="input-mini" type="text"  id="zk" name="" value="{{xs.discount}}" ng-change="change(xs.proModelid,xs.proColorId,xs.proSize,xs.discount,'2')"  ng-model="xs.discount"/></td>
                        <td><input class="input-mini" type="text" name="" value="{{xs.amount}}" ng-change="change(this)" ng-model="xs.amount"/></td>
                        <td>{{xs.oldunitPrice*xs.amount*xs.discount| number:2}}</td>
                        <td><a href="javascript:;" class="line-btn-delete" ng-click="deldetail(this)">删除</a></td>
                    </tr>
                    <tr>
                        <td colspan="10">
                            <a href="javascript:;" class="fn-left orderAdd-type" ng-click="show()">+&nbsp;选款添加</a>
                        </td>
                    </tr>
                </table>
                <div class="col-md-12 mgb15">
                    <div class="fn-right mgr5">
                        <span class="mgr5">数量：<strong>{{tatil}}件</strong></span>
                        <span>总计：<strong>{{tatilPrice| number:2}}元</strong></span>
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
        <form class="form-horizontal" id="myform1">
            <div class="form-group mgt15">
                <label class="col-sm-3 control-label">导购员:</label>
                <div class="col-sm-5">
                    <select class="form-control" name="daogou"   ng-model="selected">
                        <option ng-repeat="xs in dg"  value="{{xs.userId}}" >{{xs.trueName}}</option>
                    </select>
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-3 control-label" name="orderMemo">整单备注:</label>
                <div class="col-sm-7" >
                    <textarea style="height: 50px" class="mgb5" id="beizhu"></textarea>
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
                    <input type="text" id="pid" class="col-sm-9" placeholder="会员号/手机号">
                    <button class="btn btn-info retailInfo-search" ng-click="getmember()">搜索</button>
                </div>
            </div>
            <div class="col-sm-4">姓名：<strong>{{member.name}}</strong></div>
            <div class="col-sm-4">会员号：<strong id="huiyuan">{{member.memberNo}}</strong></div>
            <div class="col-sm-3">等级：<strong>{{member.gradeName}}</strong></div>
            <div class="col-sm-3 mgt10 mgb15">折扣：<strong>{{member.discount}}</strong></div>
            <div class="col-sm-3 mgt10 mgb15  col-sm-offset-1">积分：<strong>{{member.totalpoints}}</strong></div>
        </form>
    </div>
    <!-- /Part2 right -->

    <!-- Part3 left -->
    <div class="retailInfo retailInfo3 col-md-3">
        <form class="form-horizontal">
            <div class="col-sm-7">原价：<strong>{{oldunitPrice| number:2}}元</strong></div>
            <div class="col-sm-7">折扣：<strong>{{zk| number:2}}</strong></div>
            <div class="col-sm-7">现价：<strong>{{tatilPrice| number:2}}元</strong></div>
        </form>
    </div>
    <!-- /Part3 left -->

    <!-- Part3 right -->
    <div class="retailInfo retailInfo-account col-md-8">
        <form class="form-horizontal">
            <div class="col-sm-7">应收金额：</div>
            <div class="col-sm-12 account-num">{{tatilPrice| number:2}}元</div>
            <button class="btn btn-info account-btn" ng-click="add()">结算</button>
        </form>
    </div>
    <!-- /Part3 right -->

</div>

</div>

<!-- 选款添加弹窗 -->
<div class="am-dialog editInvDialog InvDialog-max fn-hide">
    <i class="fa fa-close closeDia"></i>
    <div class="am-dialog-wrap">
        <!-- search -->
        <div class="listSearch OderlistSearch">
            <form class="form-horizontal">
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group col-md-10 pl0">
                            <label class="col-sm-3 control-label">请输入选款号：</label>
                            <div class="col-sm-8 pro-search mgl-20">
                                <input type="text" id="id" class="form-control" placeholder="" />
                            </div>
                        </div>
                        <div class="col-md-2 am-ft-center searchBox">
                            <button type="button" class="btn fn-left btn-primary" ng-click="getproduct()">搜索</button>
                        </div>
                        <div class="fn-clear"></div>
                    </div>
                    <input type="reset" name="reset" style="display: none;" />
                </div>
            </form>
        </div>
        <!-- /search -->
        <ul class="media-list">
            <li class="media">
                <div class="media-left">
                    <a href="#">
                        <img id="proUrl" class="media-object" src="../static/base/images/large.png" width="80" alt="商品图片">
                    </a>
                </div>
                <div class="media-body">
                    <div class="editInvTit">
                        <p class="col-sm-12 media-heading">款名:<span>{{mdladd.proName}}</span></p>
                        <p class="col-sm-12 media-heading">款号:<span>{{mdladd.proModelnum}}</span></p>
                        <p class="col-sm-3 media-heading">品类:<span>{{mdladd.sortName}}</span></p>
                        <p class="col-sm-4 media-heading">品牌:<span>{{mdladd.brandName}}</span></p>
                        <p class="col-sm-3 media-heading">年份:<span>{{mdladd.proYear}}</span></p>
                        <p class="col-sm-3 media-heading">季节:<span>{{mdladd.proSeason}}</span></p>
                        <p class="col-sm-4 media-heading">吊牌价:<span>{{mdladd.proPrice}}</span></p>

                        <div class="fn-clear"></div>
                    </div>
                </div>
            </li>
        </ul>
           <div class="ManColTable col-lg-12" style="width: 99%!important;">
            <form id="myform">
                <div class="table-responsive PrivTable" style="max-height:300px;overflow:auto;">
                    <table class="table table-hover table-striped table-bordered">
                        <tr>
                            <th width="80" scope="col">颜色/尺码</th>
                            <th scope="col" ng-repeat="xs in cm">{{xs}}</th>
                        </tr >
                    
                        <tr id="tr">
<!--                             <th scope="row">合计</th>
                            <td colspan="3">888</td>
 -->                        </tr> 
                    </table>

                </div>

            </form>
            <div class="fn-clear"></div>
        </div>
    </div>
    <div class="dialogBtn am-flexbox">
        <button type="button" class="am-flexbox-item btn am-button" am-bg="blue" ng-click="updata()">确认</button>
        <button type="button" class="am-flexbox-item btn am-button closeDia2"  am-bg="white">取消</button>
        <div class="fn-clear"></div>
    </div>
</div>
<!-- /选款添加弹窗 -->

<!-- 批量修改弹窗 -->
    <div class="am-dialog addColordialog Bulkditing-dialog fn-hide">
        <i class="fa fa-close closeDia"></i>
        <div class="am-dialog-wrap">
            <div class="am-dialog-header">
                <h3 class="am-ft-center">批量修改折扣</h3>
            </div>
            <div class="am-input needValInfo">
                <label class="fn-left">修改折扣：</label>
                <input class="fn-left am-ft-center" type="text" name="disWarehName" id="bulkDiscount" placeholder=""><br>
                <div class="fn-clear"></div>
            </div>
            <div class="dialogBtn am-flexbox">
                <button type="button" class="am-flexbox-item btn am-button" am-bg="blue" ng-click="updataDiscount()">确认</button>
                <button type="button" class="am-flexbox-item btn am-button closeDialog" am-bg="white">取消</button>
                <div class="fn-clear"></div>
            </div>
        </div>
    </div>
<!-- /批量修改弹窗 -->


<!--弹窗 start-->
<div class="am-dialog EditDialog fn-hide">
    <form id="myform">
        <div class="am-dialog-wrap">
            <div class="am-dialog-header">
                <h3 class="am-ft-center">确定删除？</h3>
            </div>
            <div class="dialogBtn am-flexbox">
                <button type="button" class="am-flexbox-item btn am-button SavEdit deletGroup" am-bg="blue">确认</button>
                <button type="button" class="am-flexbox-item btn am-button closeDia" onclick="Dialhide()" am-bg="white">取消</button>
                <div class="fn-clear"></div>
            </div>
        </div>
    </form>
</div>
<!--弹窗 end-->

<script>
    //弹窗居中
    $('.EditDialog,.editInvDialog').center();
    $('.Bulkditing-dialog').center();
    //选款添加
    $('.orderAdd-type').click(function(){
    	$("input[type=reset]").trigger("click");
        $('.editInvDialog,.maskBg').show();
    });
    //关闭弹窗
    $('.closeDia,.closeDialog').click(function(){
        $('.editInvDialog,.Bulkditing-dialog,.maskBg').hide();
    });
   $('.closeDia2').click(function(){
        $('.editInvDialog,.maskBg').hide();
    });
    //
    $('.Bulkditing').click(function(){
    $('.Bulkditing-dialog,.maskBg').show();
    });
</script>
