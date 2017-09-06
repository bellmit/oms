<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!--------------- Content start ----------------->
<div class="content-wrapper">
    <div class="col-md-11 pageTitl">
        <h2 class="am-ft-16 fn-left">盘点单明细</h2>
        <a href="javascript:;" class="line-btn fn-right" ng-click="returnlist();">返回</a>
    </div>
    <!-- search -->
    <div class="listSearch OderlistSearch">
        <div class="row">
            <div class="col-md-12">
                <p class="col-sm-12 control-label mgb10 mgl20">盘点时间：<span>{{viewCreateDate | date:'yyyy-MM-dd'}}</span></p>
                <p class="col-sm-12 control-label mgb10 mgl20">盘点单号：<span>{{viewInventoryId}}</span></p>
                <p class="col-sm-12 control-label mgl20">盘点人：<span>{{viewUserName}}</span></p>
            </div>
            <div class="fn-clear"></div>
        </div>
    </div>
    <!-- /search -->

    <!-- Main content -->
    <div class="ManColTable col-lg-12">
        <form>
            <div class="PrivTable">
                <table class="table table-hover table-striped table-bordered">
                    <tr>
                        <th scope="col">SKU编码</th>
                        <th scope="col">款名</th>
                        <th scope="col">品类</th>
                        <th scope="col">品牌</th>
                        <th scope="col">年份</th>
                        <th scope="col">季节</th>
                        <th scope="col">库存</th>
                        <th scope="col">盘点数</th>
                        <th scope="col">差异</th>
                    </tr>
                    <tr ng-repeat="inventoryDetail in inventoryDetails" ng-if="inventoryDetail.invtNum != 0 ">
                    	<td>{{inventoryDetail.proNum}}</td>
                        <td>{{inventoryDetail.proName}}</td>
                        <td>{{inventoryDetail.sortName}}</td>
                        <td>{{inventoryDetail.brandName}}</td>
                        <td>{{inventoryDetail.proYear}}</td>
                        <td>{{inventoryDetail.proSeason}}</td>
                        <td>{{inventoryDetail.stkNum}}</td>                       
                        <td><a href="javascript:;" class="seetNum">{{inventoryDetail.invtNum}}</a></td>
                        <td><i class="am-ft-red">{{inventoryDetail.diffNum}}</i></td>
                    </tr>

                </table>

            </div>

        </form>
        <div class="fn-clear"></div>
    </div>

</div>

<!-- 修改盘点数弹窗 -->
<div class="am-dialog editInvDialog InvDialog-max fn-hide">
    <i class="fa fa-close closeDia"></i>
    <div class="am-dialog-wrap">
        <ul class="media-list">
            <li class="media">
                <div class="media-left">
                    <a href="#">
                        <img class="media-object" src="page/../../static/base/images/large.png" width="80" alt="商品图片">
                    </a>
                </div>
                <div class="media-body">
                    <div class="editInvTit">
                        <p class="col-sm-12 media-heading">款名:<span>款名款名</span></p>
                        <p class="col-sm-12 media-heading">款号:<span>款号款号款号</span></p>
                        <p class="col-sm-3 media-heading">品类:<span>品类</span></p>
                        <p class="col-sm-3 media-heading">品牌:<span>品牌品牌</span></p>
                        <p class="col-sm-3 media-heading">年份:<span>2016</span></p>
                        <p class="col-sm-3 media-heading">季节:<span>春季</span></p>
                        <p class="col-sm-4 media-heading">吊牌价:<span>300.00元</span></p>
                    </div>
                </div>
            </li>
        </ul>
        <div class="ManColTable col-lg-12">
            <form>
                <div class="PrivTable" style="max-height:300px;overflow:auto;">
                    <table class="table table-hover table-striped table-bordered">
                        <tr>
                            <th scope="col">SKU编码</th>
                            <th scope="col">颜色</th>
                            <th scope="col">尺码</th>
                            <th scope="col">库存</th>
                            <th scope="col">盘点数</th>
                            <th scope="col">差异</th>
                        </tr>
                        <tr>
                            <td>123456</td>
                            <td>蓝色</td>
                            <td>M</td>
                            <td>10</td>
                            <td>10</td>
                            <td><span class="am-ft-red">-3</span></td>
                        </tr>

                    </table>

                </div>

            </form>
            <div class="fn-clear"></div>
        </div>
    </div>
</div>
<!-- /修改盘点数弹窗 -->

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

<script>
    //弹窗居中
//  $('.EditDialog,.addInvDialog').center();
//  $('.editInvDialog').center();
    $(function(){
        //盘点数
//      $('.editInvDialog').center();

        $('.seetNum').click(function(){
            $('.editInvDialog,.maskBg').show();
        });
        //关闭弹窗
        $('.closeDia').click(function(){
            $('.addInvDialog,.maskBg').hide();
        });

    })

</script>
