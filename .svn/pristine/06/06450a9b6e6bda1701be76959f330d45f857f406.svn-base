<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!--遮罩 start-->

<!--------------- Content start ----------------->
<div class="content-wrapper"  ng-hide="numA==1||numB==1">
    <div class="col-md-11 pageTitl">
        <h2 class="am-ft-16 fn-left">所有人员<span class="mgl5">（{{size}}）</span></h2>
        <button type="button" ng-click="toaddUser()" class="btn fn-right btn-primary">+&nbsp;&nbsp;添加人员</button>
    </div>
    <div class="fn-clear"></div>
    <!-- search -->
    <div class="listSearch">
        <form class="form-horizontal">
            <div class="row">
                <div class="col-md-10">
                    <div class="form-group col-md-8">
                        <label class="col-sm-2 control-label am-ft-12">单位：</label>
                        <div class="col-sm-3 pro-search pl0 mgl-20">
                            <select class="col-sm-12" ng-model="query.orgId">
                                <option value=""></option>
                                <option ng-repeat="org in orgList" value="{{org.orgId}}">{{org.shopName}}</option>
                            </select>
                        </div>
                        <label class="col-sm-2 control-label pr0 am-ft-12">手机号：</label>
                        <div class="col-sm-5 pro-search pl0">
                            <input type="text" class="form-control"  ng-model="query.userName">
                        </div>
                    </div>
                    <div class="col-md-1 am-ft-center searchBox">
                        <button type="button" class="btn fn-left btn-primary" ng-click="queryManagers()">查询</button>
                    </div>
                    <div class="fn-clear"></div>
                </div>
            </div>
        </form>
    </div>

    <!-- /search -->

    <!-- Main content -->
    <div class="ManColTable col-lg-12">
        <form>
            <div class="table-responsive PrivTable">
                <table class="table table-hover table-striped table-bordered">
                    <tr>
                        <th scope="col">手机号</th>
                        <th scope="col">姓名</th>
                        <th scope="col">职位</th>
                        <th scope="col">店铺</th>
                        <th scope="col">权限分配</th>
                        <th scope="col">操作</th>
                    </tr>
                    <tr ng-repeat="manager in managers" ng-model="manager">
                        <td><input type="text"  value="{{manager.userName}}" disabled /></td>
                        <td><input type="text"  value="{{manager.trueName}}" disabled /></td>
                        <td><input type="text"  value="{{manager.roleName}}" disabled /></td>
                        <td><input type="text"  value="{{manager.orgName}}" disabled /></td>
                        <td><a href="javascript:;">权限分配</a></td>
                        <td>
                            <button type="button" class="w50 line-btn fn-left" am-bg="blue" ng-click="toupdateUser(this)">编辑</button>
                            <button type="button" class="w50 fn-left line-btn-delete" am-bg="white" ng-click="del_btn(this)" onclick="del(id)" id="{{manager.userId}}">删除</button>
                        </td>
                    </tr>

                </table>

            </div>
			<!--分页 start-->
		    <div class="pagelist priv-pagelist">
		    	<div id="paging"></div>    
		    </div>
		    <!--分页 end-->
        </form>
        <div class="fn-clear"></div>
    </div>

</div>

</div>

<!--弹窗 start-->
<div class="am-dialog DelDialog fn-hide">
    <form id="myform">
        <div class="am-dialog-wrap">
            <div class="am-dialog-header">
                <h3 class="am-ft-center">确定删除？</h3>
            </div>
            <div class="dialogBtn am-flexbox">
            	<input type="hidden" id="userId">
                <button type="button" class="am-flexbox-item btn am-button SavEdit deletGroup" am-bg="blue" ng-click="delManagerUser()">确认</button>
                <button type="button" class="am-flexbox-item btn am-button" id="closeDialog" am-bg="white" ng-click="cancelBtn()" >取消</button>
                <div class="fn-clear"></div>
            </div>
        </div>
    </form>
</div>
<!--弹窗 end-->

<!--人员管理的添加修改-->
<div class="default" ng-hide="numA==0" ng-init="numA=0" ng-show="numA==1">
	<jsp:include page="managerUserAdd.jsp"/> 
</div> 
<div class="default" ng-hide="numB==0" ng-init="numB=0" ng-show="numB==1">
	<jsp:include page="managerUserEdit.jsp" />
</div>
<!--人员管理的添加修改-->

<!-- 尾部 -->
<jsp:include page="../../public/footstyle.jsp" />
<script>
	//编辑界面
	function add(){
		window.location.href="#/managerUserAdd";
	}
	function del(id){
		console.log(id);
		$("#userId").val(id)
		//删除
    	$('.DelDialog,.maskBg').dialogShow();
	}
	//弹窗居中及隐藏
	$('.DelDialog').center();
	$('.SavEdit,#closeDialog').click(function() {
		$('.DelDialog,.maskBg').dialogHide();
	});
</script>