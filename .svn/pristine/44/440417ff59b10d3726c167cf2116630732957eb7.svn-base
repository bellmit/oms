<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!--------------- Content start ----------------->
<div class="content-wrapper content-integratRule-wrapper">
    <div class="col-md-11 pageTitl">
        <h2 class="am-ft-16 fn-left">设置积分规则</h2>
        <a href="javascript:;" class="line-btn fn-right" ng-click="cancelOrGoback('IntegrationRule')">返回</a>
    </div>
    <div class="fn-clear"></div>

    <div class="integratRule-top">
        <p>会员联盟：<span>唐狮会员联盟</span></p>
        <a href="javascript:;" class="btn btn-primary">保存</a>
        <div class="fn-clear"></div>
    </div>
    <!-- Main content -->
    <div class="ManColTable col-lg-12">
        <form>
            <div class="table-responsive PrivTable">
                <!--积分奖励-->
                <table class="table table-hover table-striped table-bordered">
                    <tr>
                    	<th width="120">积分奖励</th>
                    	<th>&nbsp;</th>
                    </tr>
                    <tr>
                        <td>基础规则</td>
                        <td>
                        	<p>每一笔订单消费每满<input type="text" placeholder="100" name="" value="" />元 ，获得<input type="text" placeholder="10" name="" value="" />个积分</p>
                            <p>新会员首次开卡获得<input type="text" placeholder="10" name="" value="" />个积分</p>
                        </td>
                    </tr>
                    <tr>
                        <td>额外奖励规则</td>
                        <td>
                        	<p>一次性消费满<input type="text" placeholder="500" name="" value="" />元，额外获得<input type="text" placeholder="30" name="" value="" />个积分</p>
                            <p>一次性消费满<input type="text" placeholder="500" name="" value="" />元，额外获得<input type="text" placeholder="30" name="" value="" />个积分
                                <i class="fa fa-trash" ng-click="deleteExtraRule($event)"></i>
                            </p>
                            <p class="addEatraRule-f">
                                <a href="javascript:;" class="addEatraRule fn-left line-btn" ng-click="addEatraRule()">+&nbsp;增加额外奖励规则</a>
                                <span>最多设置五个奖励规则，多个额外奖励规则不叠加</span>
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>推荐规则奖励</td>
                        <td>
                            <p>每推荐成功<input type="text" placeholder="1" name="" value="" />个会员，获得<input type="text" placeholder="10" name="" value="" />个积分</p>
                            <p>每推荐成功<input type="text" placeholder="2" name="" value="" />个会员，获得<input type="text" placeholder="30" name="" value="" />个积分
                                <i class="fa fa-trash" ng-click="deleteExtraRule($event)"></i>
                            </p>
                            <p class="addEatraRule-s">
                                <a href="javascript:;" class="addEatraRule fn-left line-btn" ng-click="addEatraRule2()">+&nbsp;增加推荐奖励规则</a>
                                <span>最多设置五个奖励规则，多个推荐奖励规则不叠加</span>
                            </p>
                        </td>
                    </tr>
                </table>
                <!--积分抵现-->
                <table class="table table-hover table-striped table-bordered">
                    <tr>
                        <th width="120">积分抵现</th>
                        <th>
                            <p class="fn-right">
                                <span>当前状态：已启用</span>
                                <a href="javascript:;" class="blueLine-group">停用</a>
                            </p>
                        </th>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <p><em>抵现规则</em><input type="text" placeholder="100" name="" value="" />分&nbsp;&nbsp;= &nbsp;&nbsp;1.00&nbsp;&nbsp;元<span>请填写大于0的整数</span></p>
                        </td>
                    </tr>
                </table>
                <!--积分清零-->
                <table class="table table-hover table-striped table-bordered">
                    <tr>
                        <th width="120">积分清零</th>
                        <th>
                            <p class="fn-right">
                                <span>当前状态：未启用</span>
                                <a href="javascript:;" class="blueLine-group">启用</a>
                            </p>
                        </th>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <p><em>清零规则</em><input type="text" placeholder="2" name="" value="" />年的最后一天12月31日<span>请填写大于0的整数</span></p>
                            <p class="clearType">清除
                                <label class="radio-inline">
                                    <input class="searchtp" type="radio" name="searchType" value="" checked="" /> 全部累计积分
                                </label>
                                <label class="radio-inline">
                                    <input class="searchtp" type="radio" name="searchType" value="" checked="" /> 前年累计积分
                                </label>
                            </p>
                        </td>
                    </tr>
                </table>
                <!--积分分润-->
                <table class="table table-hover table-striped table-bordered">
                    <tr>
                        <th width="120">积分分润</th>
                        <th>
                            <p class="fn-right">
                                <span>当前状态：已启用</span>
                                <a href="javascript:;" class="blueLine-group">停用</a>
                            </p>
                        </th>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <p><em>分润规则</em>会员在联盟内消费，发卡商户将获得<input type="text" placeholder="10" name="" value="" />个积分</p>
                        </td>
                    </tr>
                </table>
            </div>
        </form>
        <div class="fn-clear"></div>
    </div>
   
</div>
