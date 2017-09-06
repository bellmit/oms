<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!--------------- Content start ----------------->
<div class="content-wrapper">
    <div class="col-md-11 pageTitl">
        <h2 class="am-ft-16 fn-left">联盟管理</h2>
    </div>
    <div class="fn-clear"></div>

    <!-- Main content -->
    <div class="ManColTable col-lg-12 union-tablebox">
        <form>
            <div class="table-responsive PrivTable">
                <table class="table table-hover table-striped table-bordered">
                    <tr>
                        <th scope="col">联盟名称</th>
                        <th scope="col">品牌</th>
                        <th scope="col">创建商户</th>
                        <th scope="col">接单率</th>
                        <th scope="col">接单状态</th>
                        <th scope="col">操作</th>
                        <th scope="col">设置</th>
                    </tr>
                    <tr ng-repeat="union in unionList track by $index">
                        <td>{{union.cloudName}}</td>
                        <td>{{union.brandName}}</td>
                        <td>
                            <p>{{union.shopName}}</p>
                            <p>{{union.createDate}}</p>
                        </td>
                        <td>-</td>
                        <td>
                        <span ng-if="union.isReceived == 0">正在接单中</span>
                        <span ng-if="union.isReceived == 1"  class="am-ft-red">停止接单</span>
                        </td>
                        <td>
                            <p ng-if="union.isReceived == 0">
                            <a href="javascript:;" class="am-ft-red" ng-model="union" ng-click="updateReceived(this,'1')">停止接单</a>
                            </p>
                            <p ng-if="union.isReceived == 1">
                            <a href="javascript:;" ng-model="union" ng-click="updateReceived(this,'0')">开始接单</a>
                            </p>
                            <p><a href="javascript:;" class="exitUnionBtn" ng-model="union" ng-click="exit(this)">退出联盟</a></p>
                        </td>
                        <td>                         
                            <p><a href="javascript:;" ng-click="shopProductManege(this.union)">商品管理</a></p>
                            <p><a href="javascript:;" ng-click="rulesSet(union.cloudId,union.orgId)">查看派单配置</a></p>
                        </td>
                    </tr>
                </table>
            </div>
        </form>
        <div class="fn-clear"></div>
    </div>

</div>

</div>

<!-- 退出联盟提示弹窗 -->
<div class="am-dialog addColordialog exitUnion-dialog" id="exitUnionshop-dialog">
    <i ng-click="closedialog()" class="fa fa-close closeDia"></i>
    <div class="am-dialog-wrap">
        <div class="am-dialog-header">
            <h3 class="am-ft-left">退出联盟</h3>
        </div>
        <div class="am-dialog-body">
            <h5 class="am-dialog-brief mgb20">您正在将'{{orgName}}'退出'{{cloudName}}'！</h5>
            <h5 class="am-dialog-brief">请选择退出原因：</h5>
            <form id="exitUnionReason">
                <div class="am-dialog-brief">
                    <div class="col-sm-4 checkbox">
                        <label>
                            <input type="checkbox" name="causeContent" value="接单率太低">
                            接单率太低
                        </label>
                    </div>
                    <div class="col-sm-4 checkbox">
                        <label>
                            <input type="checkbox" name="causeContent" value="结算价太低">
                            结算价太低
                        </label>
                    </div>
                    <div class="col-sm-4 checkbox">
                        <label>
                            <input type="checkbox" name="causeContent" value="云仓商品太少">
                            云仓商品太少
                        </label>
                    </div>
                    <div class="col-sm-4 checkbox">
                        <label>
                            <input type="checkbox" name="causeContent" value="门店位置较偏僻">
                            门店位置较偏僻
                        </label>
                    </div>
                    <div class="col-sm-4 checkbox">
                        <label>
                            <input type="checkbox" name="causeContent" value="云仓库存太少">
                            云仓库存太少
                        </label>
                    </div>
                    <div class="fn-clear"></div>

                </div>
                <div class="am-dialog-brief other-reason">
                    <label class="fn-left">其他原因:</label>
                    <input type="text" class="fn-left" name="causeContent" placeholder="请输入...">
                    <div class="fn-clear"></div>
                </div>
            </form>
        </div>
    </div>
    <div class="am-dialog-footer">
        <a href="javascript:;" class="btn btn-primary" id="quitBtn">确定</a>
        <a href="javascript:;" class="btn btn-default close-log mgl10" ng-click="closedialog()">取消</a>
    </div>
</div>
