<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!--遮罩 start-->

<!--------------- Content start ----------------->
<div class="content-wrapper"  ng-hide="numA==1||numB==1">
    <div class="col-md-11 pageTitl">
        <h2 class="am-ft-16 fn-left">人员审核<span class="mgl5"></span></h2>
    </div>
    <div class="fn-clear"></div>

    <!-- Main content -->
    <div class="ManColTable col-lg-12">
        <form>
            <div class="table-responsive PrivTable">
                <table class="table table-hover table-striped table-bordered">
                    <tr>
                        <th scope="col">用户名</th>
                        <th scope="col">真实姓名</th>
                        <th scope="col">审核状态</th>
                        <th scope="col">操作</th>
                    </tr>
                    <tr ng-repeat="apply in applys" ng-model="apply">
                        <td>
                        <input type="hidden"  value="{{apply.userId}}" disabled />
                        	{{apply.userName}}
                        </td>
                        <td>
							{{apply.trueName}}
						</td>
                        <td>
                        	<input type="text"  value="待审核" ng-if="apply.applyStatus == 1" style="color:blue;" disabled />
                       		<input type="text"  value="已通过" ng-if="apply.applyStatus == 2" disabled />
                       		<input type="text"  value="已拒绝" ng-if="apply.applyStatus == 3" style="color:red;" disabled />
                        </td>
                        <td ng-if="apply.applyStatus == 1">
                            <button type="button" class="w50 line-btn fn-left" am-bg="blue" ng-click="adopted(this)">通过</button>
                            <button type="button" class="w50 fn-left line-btn-delete" am-bg="white" ng-click="refused(this)">拒绝</button>
                        </td>
                        <td ng-if="apply.applyStatus != 1">
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