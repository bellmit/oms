<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!--------------- Content start ----------------->
  <!--------------- Content start ----------------->
    <div class="content-wrapper content-wrapper-commerciaInfo mgb15">
        <div class="col-md-11 pageTitl">
            <h2 class="am-ft-16 fn-left">帐户资料</h2>
            <a href="javascript:;" class="btn btn-primary fn-right" ng-click="editUserInfo()">编辑</a>
        </div>
        <div class="fn-clear"></div>

        <div class="ManColTable col-lg-12">
            <div class="commercia-info">
                <!-- row1 -->
                <div class="row">
                    <div class="nowraps-text inprodet-titl am-ft-14">帐户：</div>
                    <p style="margin-bottom: 10px;">{{userInfos.userName}}</p>
                </div>
                <!-- row2 -->
                <div class="row">
                    <div class="nowraps-text inprodet-titl am-ft-14" >昵称：</div>
               		<p style="margin-bottom: 10px;">{{userInfos.trueName}}</p>
                </div>
                <!-- row3 -->
                <div class="row">
                    <div class="nowraps-text inprodet-titl am-ft-14">邮箱：</div>
                		<p>{{userInfos.email}}</p>
                </div>
                <!-- row3 -->
                <div class="row">
                    <div class="nowraps-text inprodet-titl am-ft-14">职位：</div>
                		<p>{{userInfos.roleName}}</p>
                </div>
                <!-- row3 -->
                <div class="row">
                    <div class="nowraps-text inprodet-titl am-ft-14">部门：</div>
                		<p>{{userInfos.departNameTree}}</p>
                </div>
                <!-- row3 -->
                <div class="row">
                    <div class="nowraps-text inprodet-titl am-ft-14">公司：</div>
                		<p>{{orgName}}</p>
                </div>
                <div class="fn-clear"></div>
            </div>
        </div>
        <div class="fn-clear"></div>
    </div>

</div>
