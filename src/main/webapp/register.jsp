<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<jsp:include page="public/headpage.jsp" />
<!--遮罩 start-->

<body class="loginBody">
<!-- Top -->
<div class="topBan">
    <div class="content-section">
        <a href="login.jsp" class="logo">
            <img class="img-responsive" src="static/base/images/register_logo.png" alt="勤易科技" />
        </a>
    </div>
</div>
<!-- /Top -->
<!---- Content start ---->
<div class="contentNav" ng-cloak ng-app="register" ng-controller="registerController" style="padding-bottom: 50px;">
    <div class="content-section">
        <form class="form-horizontal" id="registerForm" >
            <div class="reg-wrap">
                <div class="regTitl">
                    <span>新帐户注册</span>
                    <p>已有帐户？<a href="login.jsp">马上登录</a></p>
                </div>
                 <div class="form-group">
                    <label class="col-sm-2 control-label">姓 名：</label>
                    <div class="col-sm-3 needValInfo">
                        <input type="text" name="trueName" ng-model="registerForm.trueName"  class="form-control" placeholder="请输入姓名" required>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-2 control-label">手机号：</label>
                    <div class="col-sm-3 needValInfo">
                        <input type="text" name="userName" ng-blur="checkUserName()" ng-model="registerForm.userName"  class="form-control" placeholder="请输入手机号" required>
                    </div>
                    <small class="error" ng-show="userNameWarn">该用户已存在！</small>
                </div>
                <div class="form-group needValInfo">
                    <label class="col-sm-2 control-label">设置密码：</label>
                    <div class="col-sm-3">
                        <input type="password" name="password" ng-model="registerForm.password"  class="form-control" placeholder="请设置密码"  required>
                    </div>
                </div>
                <div class="form-group needValInfo">
                	<label class="col-sm-2 control-label">确认密码：</label>
                    <div class="col-sm-3">
                        <input type="password" ng-blur="checkPassword()" name="newPassword" ng-model="registerForm.newPassword" class="form-control" placeholder="请确认密码"  required>
                    </div>
                    <small class="error" ng-show="repassWarn">请确认密码保持一致！</small>
                </div>
                <div class="form-group needValInfo">
                    <label for="inputEmail3" class="col-sm-2 control-label">邮箱地址：</label>
                    <div class="col-sm-3">
                        <input type="email" name="email" ng-model="registerForm.email" class="form-control" id="inputEmail3" placeholder="请输入邮箱">
                    </div>
                </div>
                 <div class="form-group needValInfo">
                    <label for="inputEmail3" class="col-sm-2 control-label">验证码：</label>
                    <div class="col-sm-4">
                        <input type="text" name="verticationCode" ng-model="verticationCode" class="col-sm-5"  placeholder="请输入验证码">
                   		<button ng-click="getVerticationCode()"  class="verticationCode-btn" ng-class="{'verticationCode-btn-disabled':vertical}" ng-disabled="vertical">
                   			<span ng-if="!vertical">获取验证码</span>
                   			<span ng-if="vertical">{{timeCountDown}}后重新获取</span>
                   		</button>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-offset-2 col-sm-10">
                        <div class="checkbox">
                            <label>
                                <input type="checkbox" class="readFlag" id="readFlag">我已阅读并同意用户协议
                            </label>
                        </div>
                    </div>
                </div>
                <div class="fn-clear"></div>
            </div>
            <div class="col-sm-offset-2 col-sm-10 regBtn">
                <button type="button" ng-click="regist()"  class="btn btn-primary">注册</button>
            </div>
        </form>
    </div>
    <div class="fn-clear"></div>
</div>

<!---- Content end ---->

<!---- Foot start ---->
<div class="loginfooter">Copyright 2016, 杭州勤易科技有限公司， 浙ICP备15019091号</div>
<!---- Foot end ---->
<!-- 尾部 -->
<!---- JS ---->
<script src="register.js"></script>
<script type="text/javascript">
	$(function(){
		var formArray=[];
    	formArray.push('{"registerForm":"/user/addUser"}');
    	initValidate(formArray,cas);
	})
</script>
</body>
