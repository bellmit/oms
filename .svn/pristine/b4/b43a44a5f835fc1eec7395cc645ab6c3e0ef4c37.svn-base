<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!--遮罩 start-->

<!--遮罩 end-->

<!--------------- Content start ----------------->
<div class="content-wrapper fn-clear">
   	<div class="col-md-11 pageTitl">
		<h2 class="am-ft-16 fn-left">
		尺码管理
		</h2>
	</div>
    <!-- Main content -->
     
    <div class="ManColTable col-lg-12">
            <div id="group" class="table-responsive PrivTable manasizeTable">
            <form id="sizeForm">
                <table class="table table-hover table-striped table-bordered" ng-repeat="n in grouplist">
                    <tr>
                        <th scope="col" colspan="4" class="am-ft-left">
                            <input class="groupTitlName" type="text" value="{{n.groupName}}" ng-model="n.groupName" name="groupName" disabled />
                            <div class="sizeTitl">
                                <a href="javascript:;" class="sizeTitl-edit" onclick="editTitl(this)">编辑</a>
                                <a href="javascript:;" class="sizeTitl-save fn-hide" ng-click="editGroupname(n.groupId,n.groupName)">保存</a>
                                <a href="javascript:;" class="sizeTitl-cancel fn-hide" onclick="cancelTitl(this)">取消</a>
                            </div>
                            <a href="javascript:;" class="del-group fn-right" ng-click="deletSizeGroup(n.groupId)">删除组</a>
                        </th>
                    </tr>
                   
                    <tr>
                        <td>尺码名称<span class="am-ft-red">(必填)</span></td>
                        <td>编码（用于SKU编码）<span class="am-ft-red">(必填)</span></td>
                        <td>排序</td>
                        <td colspan="2">操作</td>
                    </tr>
                    <tr ng-if="n.sizes[0].sizeId!=''&&n.sizes[0].sizeId!=null" ng-repeat="v in n.sizes" sizeindex="{{v.sizeIndex}}" sizeid="{{v.sizeId}}" >
                        <td><input type="text" class="sizename" ng-model="v.sizeName" name="sizeName" disabled /></td>
                        <td><input type="text" class="sizenum" value="v.sizeNum" ng-model="v.sizeNum" name="sizeNum" disabled /></td>
                        <td><input type="text" class="sizeindex" value="v.sizeIndex" ng-model="v.sizeIndex" name="sizeIndex" disabled /></td>
                        <td class="td_edit">
                            <button type="button" name="alter" class="line-btn fn-left alterBtn col-md-6" am-bg="blue" onclick="editBtn(this)">编辑</button>
                            <button type="button" class="fn-left line-btn-delete col-md-6" am-bg="white" ng-click="deletSize(v.sizeId)">删除</button>
                        </td>
                        <td class="td_editing" style="display:none">
                            <a href="javascript:;" name="alter" class="line-btn fn-left alterBtn col-md-6" am-bg="blue" ng-click="editSize(v.sizeId,v.sizeName,v.sizeNum,v.sizeIndex)">保存</a>
                            <a href="javascript:;" type="button" class="fn-left line-btn-delete col-md-6" am-bg="white" onclick="cancel_btn(this)">取消</a>
                        </td>
                    </tr>
                    <tr class="{{n.groupId}}">
                        <td colspan="4">
                            <a href="javascript:;" class="fn-left addLineColor" ng-click="addNewSize(n.groupId)">+&nbsp;增加尺码</a>
                        </td>
                    </tr>
                </table>
			</form>
            </div>
            <button type="button" class="btn btn-info addSizeGroup" ng-click="addNewGroup()">增加尺码组</button>
        
        <div class="fn-clear"></div>
    </div>


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
                <button type="button" class="am-flexbox-item btn am-button SavEdit" id="deletGroup" am-bg="blue">确认</button>
                <button type="button" class="am-flexbox-item btn am-button" onclick="Dialhide()" am-bg="white">取消</button>
                <div class="fn-clear"></div>
            </div>
        </div>
    </form>
</div>
<!--弹窗 end-->

<!-- 工具提示 start-->
<div class="alert alert-danger alert-dismissible fade in fn-hide" role="alert">
    <button type="button" class="close">
        <span>×</span>
    </button>
    <h4>操作失败!</h4>
    <p>输入的内容不能为空</p>
</div>
<!-- 工具提示 end -->

<script>
	$(function(){
		var formArray=[];
    	formArray.push('{"sizeForm":"/size/updateSize"}');
    	initValidate(formArray,pos);
    	
	})
//弹窗居中
$('.EditDialog').center();
//关闭提示框
$('.close').click(function(){
    $('.alert').hide();
    Dialhide();
});
//弹窗显示/隐藏
function Dialshow(){
    $('.EditDialog,.maskBg').dialogShow();
};

function Dialhide(){
    $('.EditDialog,.maskBg').dialogHide();
};

function deleteNewGroup(e){
	$(e).parents("#sizeGroupForm").remove();
}
</script>
