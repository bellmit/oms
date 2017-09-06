<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!--------------- Content start ----------------->
<div class="content-wrapper">
    <div class="col-md-11 pageTitl">
        <h2 class="am-ft-16 fn-left">联盟管理</h2>
        <a href="javascript:;" class="line-btn fn-right" ng-click="gobackComercia()">返回</a>
    </div>
    <div class="fn-clear"></div>
    <!-- search -->
    <div class="listSearch OderlistSearch mgt0 pb0">
        <div class="row">
            <div class="col-md-12 mgl20">
                <p class="col-sm-3 control-label mgb10">联盟名称：<span>{{cloudName}}</span></p>
                <p class="col-sm-7 control-label mgb10">品牌：<span>{{brandName}}</span></p>
                <p class="col-sm-3 control-label mgb10">创建商户：<span>{{shopName}}</span></p>
                <p class="col-sm-3 control-label">创建时间：<span>{{createDate}}</span></p>
            </div>
            <div class="fn-clear"></div>
        </div>
    </div>
    <!-- /search -->

    <!-- Main content -->
    <div class="ManColTable col-lg-12">
        <div class="unionShow-detTitl">
            <span class="fn-left">成员共计 {{count}} 个：</span>
            <a href="javascript:;" class="btn fn-right btn-primary" ng-click="addMember()">添加成员</a>
        </div>
        <form>
            <div class="table-responsive PrivTable">
                <table class="table table-hover table-striped table-bordered">
                    <tr>
                        <th scope="col">成员编号</th>
                        <th scope="col">成员名称</th>
                        <th scope="col">成员类型</th>
                        <th scope="col">地址</th>
                        <th scope="col">接单率</th>
                        <th scope="col">接单状态</th>
                        <th scope="col">操作</th>
                    </tr>
                    <tr ng-repeat="memblist in unionMemberList">
                        <td>{{memblist.shopNum}}</td>
                        <td ng-value="memblist.orgId">{{memblist.shopName}}</td>
                        <td>
                        	<span ng-if="memblist.orgType=='1'">商户</span>
                        	<span ng-if="memblist.orgType=='4'">店铺</span>
                        </td>
                        <td><p>{{memblist.province}}{{memblist.city}}{{memblist.district}}{{memblist.shopAddr}}</p></td>
                        <td>-</td>
                        <td ng-if="memblist.isReceived==0">正常接单</td>
                        <td ng-if="memblist.isReceived==1" class="am-ft-red">停止接单</td>
                        <td><a href="javascript:;" class="exitUnionBtn" ng-click="menbQuitUnion(memblist)">退出</a></td>
                    </tr>

                </table>
            </div>
        </form>
        <!-- 分页 -->
        <div class="pagelist priv-pagelist fn-left price-pagelist">
            <div id="joinpaging">分页</div>
        </div>
        <!-- /分页 -->
        <div class="fn-clear"></div>
    </div>

</div>

</div>


<!-- 退出、解散联盟提示弹窗 -->
<div class="am-dialog addColordialog exitUnion-dialog" id="exitUnion-dialog">
    <i ng-click="closedialog()" class="fa fa-close closeDia"></i>
    <div class="am-dialog-wrap">
        <div class="am-dialog-header">
            <h3 class="am-ft-left">退出联盟</h3>
        </div>
        <div class="am-dialog-body">
            <h5 class="am-dialog-brief mgb20" id="exitTitl">您正在退出‘柒牌云仓联盟’！</h5>
            <h5 class="am-dialog-brief" id="exitSelectrs">请选择退出原因：</h5>
            <form id="quitreasonVal">
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
        <a href="javascript:;" class="btn btn-primary confirmBtn" id="quitBtn">确定</a>
        <a href="javascript:;" class="btn btn-default close-log mgl10" ng-click="closedialog()">取消</a>
    </div>
</div>
<!-- /退出、解散联盟提示弹窗 -->

