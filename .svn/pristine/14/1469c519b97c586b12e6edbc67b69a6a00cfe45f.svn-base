<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!--------------- Content start ----------------->
<div class="content-wrapper">
    <div class="col-md-11 pageTitl mgb0">
        <h2 class="am-ft-16 fn-left">联盟管理</h2>
    </div>
    <div class="fn-clear"></div>
    <!-- search -->
    <div class="listSearch">
        <div class="row">
            <div class="col-md-12">
                <div class="col-md-4 fn-right unionTop">
                    <p><a href="javascript:;" ng-click="createNewUnion()">创建联盟</a>或<a href="javascript:;" ng-click="JoinNewUnion()">加入联盟</a></p>
                </div>
                <div class="fn-clear"></div>
            </div>
        </div>
    </div>
    <!-- /search -->

    <!-- Main content -->
    <div class="ManColTable col-lg-12 union-tablebox">
        <form>
            <div class="table-responsive PrivTable">
                <table class="table table-hover table-striped table-bordered">
                    <tr>
                        <th scope="col">类型</th>
                        <th scope="col">联盟名称</th>
                        <th scope="col">品牌</th>
                        <th scope="col">创建商户</th>
                        <th scope="col">已加入成员</th>
                        <th scope="col">未加入成员</th>
                        <th scope="col">状态</th>
                        <th scope="col">操作</th>
                        <th scope="col">设置</th>
                    </tr>
                    <tr ng-repeat="list in unionList" ng-class="{'':list.cloudStatus==0,'tr-use':list.cloudStatus==1,'tr-dissolve':list.cloudStatus==2}">
                        <td ng-if="orgid!=list.orgId&&list.cloudStatus!=2">已加入</td>
                        <td ng-if="orgid==list.orgId&&list.cloudStatus!=2">已创建</td>
                        <td ng-if="orgid==list.orgId&&list.cloudStatus==2">已解散</td>
                        <td ng-value="{{list.cloudId}}">{{list.cloudName}}</td>
                        <td ng-value="{{list.brandId}}">{{list.brandName}}</td>
                        <td ng-value="{{list.orgId}}" ng-if="orgid==list.orgId&&list.cloudStatus!=2">
                            <p>{{list.shopName}}</p>
                            <p>创建时间：{{list.createDate}}</p>
                        </td>
                        <td ng-value="{{list.orgId}}" ng-if="orgid!=list.orgId&&list.cloudStatus!=2">
                            <p>{{list.shopName}}</p>
                            <p>加入时间：{{list.jionDate}}</p>
                        </td>
                        <td ng-value="{{list.orgId}}" ng-if="orgid==list.orgId&&list.cloudStatus==2">
                            <p>{{list.shopName}}</p>
                            <p>{{list.createDate}}</p>
                        </td>
                        <td ng-if="list.cloudStatus!=2">
                            <a href="javascript:;" ng-click="getJoinedmembers(list)">{{list.addedCount}}个</a>
                        </td>
                        <td ng-if="list.cloudStatus==2">&nbsp;</td>
                        <td ng-if="list.cloudStatus!=2">
                            <a href="javascript:;" ng-click="getUnjoinedmembers(list.cloudId,list.cloudName,list.brandName,list.brandId,list.shopName,list.createDate)">{{list.notAddedCount}}个</a>
                        </td>
                        <td ng-if="list.cloudStatus==2">&nbsp;</td>
                        <td ng-if="list.cloudStatus==0">已启用</td>
                        <td ng-if="list.cloudStatus==1" class="am-ft-red">已停用</td>
                        <td ng-if="list.cloudStatus==2">已解散</td>
                        <td ng-if="orgid==list.orgId&&list.cloudStatus==0">
                            <p><a href="javascript:;" class="am-ft-red" ng-click="stopUse(list.cloudId)">停用</a></p>
                            <p>
                                <a href="javascript:;" class="exitUnionBtn" ng-click="dismissUnion(list.cloudId,list.cloudName)">解散联盟</a>
                            </p>
                        </td>
                        <td ng-if="orgid!=list.orgId&&list.cloudStatus!=2">
                            <p><a href="javascript:;" class="exitUnionBtn" ng-click="quitUnion(list.cloudId,list.cloudName,list.orgId,list.brandId)">退出联盟</a></p>
                        </td>
                        <td ng-if="orgid==list.orgId&&list.cloudStatus==1">
                            <p><a href="javascript:;" ng-click="beginUse(list.cloudId)">启用</a></p>
                            <p><a href="javascript:;" class="exitUnionBtn" ng-click="quitUnion(list.cloudId,list.cloudName,list.orgId)">解散联盟</a></p>
                        </td>
                        <td ng-if="orgid==list.orgId&&list.cloudStatus==2">
                            &nbsp;
                        </td>
                        <td ng-if="orgid==list.orgId&&list.cloudStatus!=2">
                            <p><a href="javascript:;" ng-click="proManagerSet(this.list)">商品管理</a></p>
                            <p><a href="javascript:;" ng-click="rulesSet(list.cloudId,list.orgId)">派单配置</a></p>
                        </td>
                        <td ng-if="orgid!=list.orgId&&list.cloudStatus!=2">

                            <p><a href="javascript:;" ng-click="rulesSet(list.cloudId,list.orgId)">查看派单配置</a></p>
                        </td>
                        <td ng-if="orgid==list.orgId&&list.cloudStatus==2">&nbsp;</td>
                    </tr>
                </table>
            </div>
        </form>
        <div class="fn-clear"></div>
    </div>

</div>

</div>

<!-- 退出、解散联盟提示弹窗 -->
<div class="am-dialog addColordialog exitUnion-dialog" id="dismissUnion-dialog">
    <i ng-click="closedialog()" class="fa fa-close closeDia"></i>
    <div class="am-dialog-wrap">
        <div class="am-dialog-header">
            <h3 class="am-ft-left">解散联盟</h3>
        </div>
        <div class="am-dialog-body">
            <h5 class="am-dialog-brief mgb20" id="exitTitl">您正在解散‘柒牌云仓联盟’！</h5>
            <h5 class="am-dialog-brief" id="exitSelectrs">请选择解散原因：</h5>
            <form id="reasonVal">
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
                <p class="am-ft-red qnote">解散联盟后会清除此联盟所有记录，请谨慎操作！</p>
            </form>
        </div>
    </div>
    <div class="am-dialog-footer">
        <a href="javascript:;" class="btn btn-primary confmBtn" id="">确定</a>
        <a href="javascript:;" class="btn btn-default close-log mgl10" ng-click="closedialog()">取消</a>
    </div>
</div>
<!-- /退出、解散联盟提示弹窗 -->

