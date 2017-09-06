<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

    
    <div class="wrapper" style="position: inherit;">

    <!--------------- Content start ----------------->
    <div class="content-wrapper" ng-hide="numA==1||numB==1">
    <div class="col-md-11 pageTitl">
    <h2 class="am-ft-16 fn-left">门店列表</h2>
    <a href="javascript:;" class="btn fn-right btn-primary addOderBtn" ng-click="toaddstore()">添加门店</a>
    </div>
    <div class="fn-clear"></div>
    <!-- Main content -->
    <div class="ManColTable col-lg-12">
    <form id="storeupdateForm">
    <div class="table-responsive PrivTable">
    <table class="table table-hover table-striped table-bordered">
    <tr>
    <th scope="col">门店编号</th>
    <th scope="col">门店名称</th>
    <th scope="col">门店简介</th>
    <th scope="col">授权码</th>
    <th scope="col">店铺面积</th>
    <th scope="col">门店负责人</th>
    <th scope="col">电话</th>
    <th scope="col">门店地址</th>
    <th scope="col" colspan="2" width="200">操作</th>
    </tr>
    <tr ng-repeat="n in shopList" count="{{n.count}}">
    <td><input type="text" ng-model="n.shopNum" name="shopNum" disabled /></td>
    <td><input type="text" ng-model="n.shopName" name="shopName" disabled /></td>
    <td><input type="text" ng-model="n.shopInfo" name="shopInfo" disabled /></td>
    <td>{{n.orgLicense}}</td>   
    <td><input type="text" ng-model="n.acreage" name="acreage" disabled /></td>
    <td><input type="text" ng-model="n.contacts" name="contacts" disabled /></td>
    <td><input type="text" ng-model="n.shopTel" name="shopTel" disabled /></td>
    <td>{{n.shopAddr}}</td>
    <td class="td_edit">
    <button type="button" name="alter" class="w50 line-btn fn-left alterBtn" am-bg="blue" ng-click="getStore(this)">编辑</button>
    <button type="button" class="w50 fn-left line-btn-delete" am-bg="white" onclick="dele(id)" id="{{n.orgId}}">删除</button>
    </td>
    <td class="td_editing" style="display:none">
    <button type="button" name="alter" class="line-btn fn-left alterBtn w50" am-bg="blue" ng-click="update(this)">保存</button>
    <button type="button" class="fn-left line-btn-delete w50" am-bg="white" onclick="cancel_btn(this)">取消</button>
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
    <div class="am-dialog EditDialog fn-hide">
    <form id="myform">
    <div class="am-dialog-wrap">
    <div class="am-dialog-header">
    <h3 class="am-ft-center">确定删除？</h3>
    </div>
    <div class="dialogBtn am-flexbox">
    <button type="button" class="am-flexbox-item btn am-button SavEdit deletGroup" am-bg="blue">确认</button>
    <button type="button" class="am-flexbox-item btn am-button" onclick="Dialhide()" am-bg="white">取消</button>
    <div class="fn-clear"></div>
    </div>
    </div>
    </form>
    </div>
    <!--弹窗 end-->

	<!-- 删除模态层 -->
    <div class="am-dialog addColordialog" id="deldialog">
        <div class="am-dialog-wrap">
            <div class="am-dialog-header">
                <h3 class="am-ft-center">是否删除</h3>
            </div>
            <div class="dialogBtn am-flexbox">
            	<input type="hidden" id="orgId">
                <button type="button" class="am-flexbox-item btn am-button alterOv1"
                        am-bg="blue" ng-click="del(this)">确定</button>
                <button type="button" class="am-flexbox-item btn am-button"
                        id="closeDialog" am-bg="white">取消</button>
                <input type="reset" name="reset" style="display: none;" />
                <div class="fn-clear"></div>
            </div>
        </div>
    </div>
    <!-- 工具提示 start-->
    <div class="alert alert-danger alert-dismissible fade in fn-hide" role="alert">
    <button type="button" class="close">
    <span>×</span>
    </button>
    <h4>保存失败!</h4>
    <p>输入的内容不能为空</p>
    </div>
    <!-- 工具提示 end -->
    
<!--门店的添加修改-->
<div class="default" ng-hide="numA==0" ng-init="numA=0" ng-show="numA==1">
	<jsp:include page="Store_add.jsp"/> 
</div> 
<div class="default" ng-hide="numB==0" ng-init="numB=0" ng-show="numB==1">
	<jsp:include page="Store_update.jsp" />
</div>
<!--门店的添加修改-->

<script>
	$(function(){
		var formArray=[];
    	formArray.push('{"storeupdateForm":"/shop/updateShop"}');
    	initValidate(formArray,pos);
	})
    //弹窗居中
    $('.EditDialog').center();
    //关闭工具提示
    $('.close').click(function() {
        $('.alert,.maskBg').hide();
    });

	//删除
    function dele(obj){
    	$("#orgId").val(obj);
        $('#deldialog').fadeIn();
        $('.maskBg').fadeIn();
    }
    $(".addColordialog").center();

    $('.alterBtn').click(function(){
        $('.maskBg,#userdialog').fadeIn();
    });
    $('#closeDialog,.alterOv,.alterOv1').click(function(){
        $('.maskBg,#userdialog,#deldialog').fadeOut();
    });
</script>
<!-- 尾部 -->
<jsp:include page="../../public/footstyle.jsp" />
