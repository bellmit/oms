<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!--------------- Content start ----------------->
<div class="content-wrapper content-wrapper-order">
    <div class="col-md-11 pageTitl">
        <h2 class="am-ft-16 fn-left">派单配置</h2>
        <a ng-if="nodeId!=27" href="javascript:;" class="line-btn fn-right mgt5" ng-click="callback()">返回</a>
    </div>
    <div class="fn-clear"></div>

    <!-- Main content -->
    <div class="ManColTable col-lg-12">
        <form id="rulesInfo">
            <div class="row rules-set-row">
                <div class="inprodet-titl">联盟：</div>
                <div class="col-md-3 form-group needValInfo">
                    <select class="col-md-12" ng-model="seletedCloudId" ng-options="a.cloudId as a.cloudName for a in unionList" ng-change="getUnionsRules(this)">
                    </select>
                </div>
            </div>

            <div class="row rules-set-row rules-set-row-line" ng-if="UnionOrgid==orgid">
                <div class="inprodet-titl">接单超时时间：</div>
                <div class="col-md-3 needValInfo">
                    <input id="rulesTimeset" type="text" value="{{timeOut}}" name="" placeholder="{{timeOut}}" /> 分钟
                </div>
                <a href="javascript:;" class="col-md-1 fn-right btn btn-primary" ng-click="saveRules()">保存</a>
            </div>
            <div class="row rules-set-row" ng-if="UnionOrgid!=orgid">
                <div class="inprodet-titl">接单超时时间：{{timeOut}} 分钟</div>
            </div>

            <div class="table-responsive PrivTable ruleSetTable">
            <!-- 身份为创建联盟者 -->

                    <table class="table table-hover table-bordered" ng-if="UnionOrgid==orgid">
                        <tr>
                            <th scope="col" width="15%">优先次序</th>
                            <th scope="col" width="30%">分单规则</th>
                            <th scope="col" width="35%">描述</th>
                            <th scope="col">操作</th>
                        </tr>
                        <tr ng-repeat="list in cloudRuleList">
                            <td>
                                <div class="order-set" num="{{$index+1}}">{{$index+1}}</div>
                                <input type="hidden" name="sortNo" value="{{$index+1}}" />
                            </td>
                            <td>
                                <select ng-model="list.ruleId" name="ruleId" ng-options="list.ruleId as list.ruleName for list in ruleList" ng-change="changeRuleMemo(list.ruleId,this)">
                                </select>
                            </td>
                            <td>{{list.ruleMemo}}</td>
                            <td class="lasttd">
                                <a href="javascript:;" class="am-ft-red" ng-click="deletRules($index,$event)">删除</a>
                            </td>
                        </tr>
                        <tr class="addRuleTr">
                            <td colspan="4">
                                <a href="javascript:;" class="fn-left addLineColor mgl20" ng-click="addNewrules($event)">+&nbsp;添加规则</a>
                            </td>
                        </tr>
                    </table>

                <!-- /身份为创建联盟者 -->
          
                <!-- 身份为加入联盟者 -->
                <table class="table table-hover table-bordered" ng-if="UnionOrgid!=orgid">
                    <tr>
                        <th scope="col">优先次序</th>
                        <th scope="col">分单规则</th>
                        <th scope="col">描述</th>
                    </tr>
                    <tr ng-repeat="list in cloudRuleList">
                        <td>
                            <div class="order-set">{{$index+1}}</div>
                        </td>
                        <td>{{list.ruleName}}</td>
                        <td>{{list.ruleMemo}}</td>
                    </tr>
                </table>
                <!-- /身份为加入联盟者 -->
            </div>
        </form>
        <!-- /Main content -->
    
    </div>

</div>


