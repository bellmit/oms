<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!--Ztree-->

<!--遮罩 start-->

<!--遮罩 end-->

<!--------------- Content start ----------------->
<div class="content-wrapper" ng-hide="numA==1||numB==1">
    <div class="col-md-11 pageTitl">
        <h2 class="am-ft-16 fn-left">所有会员<span class="mgl5">({{size}})</span></h2>
        <a href="javascript:;" class="btn fn-right btn-primary addOderBtn" ng-click="toaddMember()">添加会员</a>
    </div>
    <div class="fn-clear"></div>
    <!-- search -->
    <div class="listSearch OderlistSearch">
        <form class="">
            <div class="row">
                <div class="col-md-11">
                    <div class="form-group col-md-5">
                        <label class="col-sm-2 control-label am-ft-12">会员号：</label>
                        <div class="col-sm-9 pro-search">
                            <input type="text" class="form-control mgt-8" ng-model="memberQuery.memberNo" placeholder="" />
                        </div>
                    </div>
                    <div class="form-group col-md-5">
                        <label class="col-sm-2 control-label am-ft-12">手机号：</label>
                        <div class="col-sm-9 pro-search">
                            <input type="text" class="form-control mgt-8" ng-model="memberQuery.telphone" placeholder="" />
                        </div>
                    </div>
                    <div class="col-md-1 am-ft-center searchBox">
                        <button type="button" ng-click="queryMember()" class="btn fn-left btn-primary mgt-8">查询</button>
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
                        <th scope="col">会员号</th>
                        <th scope="col">姓名</th>
                        <th scope="col">手机号</th>
                        <th scope="col">性别</th>
                        <th scope="col">生日</th>
                        <th scope="col">通讯地址</th>
                        <th scope="col">导购</th>
                        <th scope="col" colspan="2" width="200">操作</th>
                    </tr>
					<tr ng-repeat="member in members" ng-model="member" id="member{{member.memberId}}">
						
						<td><a href="javascript:;" class="detPanel" ng-click="getMemberDetail(this)" >{{member.memberNo}}<i class="fa fa-angle-down"></i></a></td>
						<td>{{member.name}}</td>
						<td>{{member.telphone}}</td>
						<td>{{member.sex=='M'?'男':'女'}}</td>
						<td>{{member.birthday}}</td>
						<td>{{member.address}}</td>
						<td>{{member.salesName}}</td>
						<td class="td_edit">
                            <button type="button" name="alter" class="line-btn fn-left alterBtn col-lg-6" am-bg="blue" ng-click="toupdateMember(this)">编辑</button>
                            <button type="button" ng-click="delMember_btn(this)" onclick="delete_btn(this)" class="fn-left line-btn-delete col-lg-6" am-bg="white">删除</button>
                        </td>
					</tr>
                </table>

            </div>

        </form>
        <div class="fn-clear"></div>
    </div>
    <!--分页 start-->
    <div class="pagelist priv-pagelist">
    	<div id="paging"></div>    
    </div>
    <!--分页 end-->
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
                <button type="button" class="am-flexbox-item btn am-button SavEdit deletGroup" am-bg="blue" ng-click="delMember()">确认</button>
                <button type="button" id="closeDialog" class="am-flexbox-item btn am-button" ng-click="cancelDelMember_btn(this)" am-bg="white">取消</button>
                <div class="fn-clear"></div>
            </div>
        </div>
    </form>
</div>
<!--弹窗 end-->

<!--会员的添加修改-->
<div class="default" ng-hide="numA==0" ng-init="numA=0" ng-show="numA==1">
	<jsp:include page="addmember.jsp"/> 
</div> 
<div class="default" ng-hide="numB==0" ng-init="numB=0" ng-show="numB==1">
	<jsp:include page="memberEdit.jsp" />
</div>
<!--会员的添加修改-->

<jsp:include page="../../public/footstyle.jsp" />
<script>
    //弹窗居中
    $('.EditDialog').center();

    //删除
    function delete_btn(a){
    	$('.DelDialog,.maskBg').dialogShow();
    }
    function addMember(){
    	window.location.href="#/addmember";
    }
	//弹窗居中及隐藏
	$('.DelDialog').center();
	$('.SavEdit,#closeDialog').click(function() {
		$('.DelDialog,.maskBg').dialogHide();
	});
	$(function(){
        //库存详情面板
       $('.detPanel').click(function(){
           var thisIcon = $(this).children('.fa');
           var thisPanel = $(this).parents('tr').next('.detPanel-info');
           thisPanel.toggle();
           thisPanel.siblings('.detPanel-info').hide();
           thisIcon.toggleClass('fa-angle-down fa-angle-up');
           $(this).parents('tr').siblings().find('.fa').removeClass('fa-angle-up').addClass('fa-angle-down');
       })

    })
</script>