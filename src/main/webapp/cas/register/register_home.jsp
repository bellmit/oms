<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!--遮罩 start-->  

<div class="contentNav">
    <div class="content-section">
    	<div class="content content-register-success" >
    	  	<div class="register-success">
    		<h3>恭喜您注册成功</h3>
    		   <p>尊敬的用户：<b class="register-success-user">{{showUserInfo.userName}}</b><b class="register-success-user">[{{showUserInfo.trueName}}]</b>，您好！</p>
    		   <p>您已经成功注册帐户，您可以选择加入商户或者注册新商户:</p>
    		</div>	
    	<div class="content-register-box clearfix" >
	        <div class="content-left">
	        	<div class="user-logo">
	        		<img src="../static/base/images/register-icon-01h.png">
	        	</div>
	        	<div class="text-bz">
	        		<span>如果您已经有隶属的商户，</span><br />
	        		<span>请输入商户提供的8位商户授权码：</span>
	        	</div>
	        	<div class="showorgname">
	        		<input type="text" ng-model="brandLicense" ng-mouseleave="showBrandName()"  />
	        		<p>{{name.name}}</p>
	        	</div>
	        	<div class="">
	        		<a href="#/join_commercial">
	        		<a class="join-commercial" ng-click="joinCompany()">加入商户</a>
	        		</a>
	        	</div>
	        	
	        </div>
	         <div class="content-right">
	        	<div class="user-logo">
	        		<img src="http://static.qineasy.com/base/images/register-icon-02h.png">
	        	</div>
	        	<div class="text-bz  ">
	        		<span>如果您还没有创建过商户，</span><br />
	        		<span>请您重新注册新商户</span>
	        	</div>
	        	<div class="regrister-new">
	        			<a class="join-commercial join-commercial-right"  ng-click="registerNewShop()">注册新商户</a>
	        	</div>

	        	
	        </div>
	    </div>
	    </div>

	        <!--<div class="fn-clear"></div>-->
        </div>
   </div>
</div>


<!---- JS ---->
<!---- Content end ---->
<!--弹框-->
	<div class="maskBg" ng-show="show"></div>
	<div class="sure-to-join" ng-show="show">
		<div class="top clearfix">
			<div class="warning">提示</div>
			<div class="close-log" ng-click="close()">
				<img src="http://static.qineasy.com/base/images/closelogo.png"/>
			</div>
		</div>
		<div class="middle clearfix">
			<img src="http://static.qineasy.com/base/images/light.png" alt="" />
			<p>授权商户为“{{organization}}”，您确认加入吗？</p>
		</div>
		<div class="middle-line"></div>
		<div class="join-bottom clearfix">
			<a href="javascript:;" class="accept" ng-click="sureToJoin()">加入</a>
			<a href="javascript:;" class="reject" ng-click="close()">拒绝</a>
		</div>
	</div>




