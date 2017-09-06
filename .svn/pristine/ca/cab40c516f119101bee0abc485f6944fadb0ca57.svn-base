<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<div class="content-wrapper fn-clear">
    <div class="col-md-11 pageTitl">
        <h2 class="am-ft-16 fn-left">创建云仓分享联盟</h2>
    </div>
    <div class="col-md-12 joinNav">
        <div class="joinUion01 col-md-4">
           <span class="joinUNav1">1</span>
            <span class="joinUNav2">创建联盟</span>
        </div> 
        <div class="joinUion02 col-md-4">
            <span class="joinUNav1">2</span>
            <span class="joinUNav2">选择成员</span>
        </div> 
        <div class="joinUion03 col-md-4 joinUion03active">
           <span class="joinUNav1 activespan">3</span>
            <span class="joinUNav2">完成</span>    
        </div>          
    </div>
    <div class="fn-clear"></div>
    <!-- Main content -->
    <div class="chooseMemberContent col-md-11 ">
        <div class="fn-clear chooseMemberTitle" >
            <div class="fn-left"><span class="unionNameTitle fn-left">成功创建云仓分享联盟：</span><span class="unionName">{{cloudName}}</span></div>
            <div class="fn-left"><span class="brandNameTitle fn-left">品牌：</span><span class="brandName">{{brandName}}</span></div>
        </div>
        <div class="menberSum" ng-if="addMemberType=='selected'"><span>共加入{{unionListCount}}个成员，</span><a class="lookMember" href="javascript:;" ng-click="scanJoinedMember()">查看加入会员</a></div>
        <div class="menberSum" ng-if="addMemberType=='all'"><span>共加入{{cloudUnionCount}}个成员，</span><a class="lookMember" href="javascript:;" ng-click="scanJoinedMember()">查看加入会员</a></div>
        <div class="unionOperation">
            <div  class="unionOperationA unionOperationlist"><span>您还没有配置派单规则，</span><a href="javascript:;">立即配置派单规则</a></div>
            <div  class="unionOperationB unionOperationlist"><span>您还没有设置商品的限价，</span><a href="javascript:;">立即设置限价</a></div>
            <div  class="unionOperationC unionOperationlist"><span>您还可以管理云仓商品，</span><a href="javascript:;">立即前往</a></div>
        </div>
    </div>
</div>
