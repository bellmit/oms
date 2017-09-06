<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!--------------- Content start ----------------->
    <div class="content-wrapper content-wrapper-commerciaInfo mgb15">
        <div class="col-md-11 pageTitl">
            <h2 class="am-ft-16 fn-left">编辑人员信息</h2>
            <a href="javascript:;" class="line-btn fn-right" ng-click="goback()">返回</a>
        </div>
        <div class="fn-clear"></div>

        <div class="ManColTable col-lg-12">
            <div class="commercia-info mgb20">
                <!-- row1 -->
                <div class="row">
                    <div class="nowraps-text inprodet-titl am-ft-14">手机号：</div>
                    <p class="morenote">{{telphone}}</p>
                </div>
                <!-- row2 -->
                <div class="row">
                    <div class="nowraps-text inprodet-titl am-ft-14">职位：</div>
                    <p class="morenote">{{roleName}}</p>
                </div>
                <!-- row3 -->
                <div class="row">
                    <div class="nowraps-text inprodet-titl am-ft-14"><em class="am-ft-red mgr5">*</em>昵称：</div>
                    <div class="col-md-3 form-group needValInfo">
                        <input type="text" class="col-md-8 text-overflow" name="" placeholder="{{trueName}}" value="" ng-model="trueName" />
                    </div>
                </div>
                <!-- row4 -->
                <div class="row">
                    <div class="nowraps-text inprodet-titl am-ft-14">邮箱：</div>
                    <div class="col-md-3 form-group needValInfo">
                        <input type="text" class="col-md-8 text-overflow" name="" placeholder="{{email}}" value="" ng-model="email">
                    </div>
                </div>

                <div class="fn-clear"></div>
            </div>
            <button type="button" class="btn btn-primary addBrandBtn" ng-click="SaveEditUser()">保存</button>
            <button type="button" class="btn btn-default mgl10" ng-click="goback()">取消</button>
            <div class="fn-clear"></div>
        </div>
        <div class="fn-clear"></div>
    </div>

