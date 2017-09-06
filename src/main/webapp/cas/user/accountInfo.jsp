<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!--Ztree-->

<!--遮罩 start-->

<!--遮罩 end-->

<!--------------- Content start ----------------->
<div class="content-wrapper">
    <div class="col-md-11 pageTitl">
        <h2 class="am-ft-16 fn-left">帐户资料</h2>
    </div>
    <div class="fn-clear"></div>
	<form id="accountInfoForm">
    <!-- Main content -->
    <section class="container-fluid">
        <div class="row">
            <div class="prodet-nav prodet-content">
                <div class="prodet-box pl0">
                    <!-- row1 -->
                    <div class="row">
                        <div class="col-md-1 inprodet-titl am-ft-14">帐号:</div>
                        <div class="col-md-3 form-group">
                        	<label class="fn-left" disable/>{{accountInfo.userName}}</label>
						</div>
                    </div>
                    <!-- row2 -->
                    <div class="row">
                        <div class="col-md-1 inprodet-titl am-ft-14">昵称:</div>
                        <div class="col-md-3 form-group needValInfo">
                            <input type="text" class="col-md-9 text-overflow" name="trueName" placeholder="昵称" ng-model="accountInfo.trueName"/>
                        </div>
                    </div>
                    <!--row3-->
                    <div class="row">
                        <div class="col-md-1 inprodet-titl am-ft-14">邮箱:</div>
                        <div class="col-md-3 form-group needValInfo">
                            <input type="text" class="col-md-9 text-overflow" name="email" placeholder="电子邮箱" ng-model="accountInfo.email"/>
                        </div>
                    </div>
                    <!-- row4 -->
                    <div class="row">
                        <div class="col-md-1 mgb0 inprodet-titl am-ft-14">性别:</div>
                        <div class="col-md-3 form-group mgb0 needValInfo">
                            <div class="col-md-5">
                                <input type="radio" class="col-md-4 text-overflow"  value="M" name="sex" ng-model="accountInfo.sex"/>
                                <label>男</label>
                            </div>
                            <div class="col-md-5">
                                <input type="radio" class="col-md-4 text-overflow" value="F" name="sex" ng-model="accountInfo.sex"/>
                                <label>女</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button type="button" class="btn btn-primary postProInfo fn-left" ng-click="updateAccountInfo()">修改帐户资料</button>
    </section>
	</form>
</div>

</div>


<!-- 尾部 -->
<jsp:include page="../../public/footstyle.jsp" />
<script>
	 $(function(){
		var formArray=[];
    	formArray.push('{"accountInfoForm":"/user/updateUser"}');
    	initValidate(formArray,cas);
	})
</script>
