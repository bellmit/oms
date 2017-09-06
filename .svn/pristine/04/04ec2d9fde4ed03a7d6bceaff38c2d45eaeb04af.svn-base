<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!-- 主要 -->
<div class="wrapper" style="position: inherit;">
<!--------------- Content start ----------------->
    <!--<div class="content-wrapper" ng-hide="numA==1||numB==1||numC==1">-->
    <div class="content-wrapper" >
        <div class="col-md-11 pageTitl">
            <h2 class="am-ft-16 fn-left">分类列表</h2>
        </div>
        <div class="fn-clear"></div>
          <div class="productSearch productSearch-type2 voucherList-search"  style="margin-left: 14px;" ng-if="1==2">
                        <div class="row">
                        	<div class="fn-left">
                                    <span class="">所属门店：</span>
                                    <select>
                                    	<option>城西银泰店</option>
                                    	<option>城西银泰店</option>
                                    	<option>城西银泰店</option>
                                    </select>
                            </div>
                            <div class="fn-left mgl20">
                                <button type="button" class="grey-btn mgr20" ng-click="">查询</button>
                            </div>
                        </div>
           </div>
        <!-- content info start -->
        <section class="container-fluid">
           <div class="proList-nav classifyList-nav mgl0">
            <div class="proTop">
                <span class="fn-left">分类列表(共{{count}}条记录)</span>
                <button  type="button" class="line-btn fn-right width100" ng-click="addClassifyPro()">添加分类</button>
                <div class="fn-clear"></div>
            </div>
                <table width="100%" class="mgb0 table-hover table-condensed productTable" id='classifyAdd'> 
                  <tr>
                    <th scope="col">分类名称</th>
                    <th width="20%" scope="col" class="tip-th">
                    	<p>分类图片</p>
                    	<p class=" am-ft-red">
                    		<i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                    		<span class="am-ft-12">图片大小要求750*400</span>
                    	</p>
                    </th>
                    <th scope="col">商品数量</th>
                    <th scope="col">添加时间</th>
                    <th scope="col">操作</th>
                    <th scope="col">位置</th>
                  </tr>
                 <tr  ng-repeat='modelGroup in modelGroupList | orderBy:sortGroupIndex'>
                   <td >
                  	<div class="editClassifyName" ng-if='modelGroup.edit!=undefined'>
	                   	<input type="text" id="" data="" ng-model="editModelGroupObj.groupName" name="modelId" class="code_checkbox " value="" /><br />
	                   	<span class="am-ft-d4" ng-click='saveUpdate()'>保存</span>
	                   	<span  class="am-ft-d4" ng-click="cancelEdit($index)">取消</span>
                   	</div>
                   	<div class=""  ng-if='modelGroup.edit==undefined'>
                   		<span>{{modelGroup.groupName}}</span>
                   		<img src="../static/base/images/icon_edit.png" ng-click='editModelGroup($index)'/>
                   	</div>
                   </td>
                   <td>
	                   	<div class="uploadPicBox" ng-if='modelGroup.groupLogo==""||modelGroup.groupLogo==undefined'>
	                   		<input type="file" ngf-select="uploadWork($files,modelGroup)" name="files"/>
	                   		<img src="http://base-static.oss-cn-hangzhou.aliyuncs.com/base%2Fimages%2Fadd_1.png" />
	                   	</div>
	                   	<div class="selectPic " ng-if='modelGroup.groupLogo!=""&&modelGroup.groupLogo!=undefined'>
	                   		<img ng-src="{{modelGroup.groupLogo}}" />
	                   		<button ng-click='deletePic(modelGroup)'>删除</button>
	                   	</div>
<!--                   		
                   	 	<div class="proType_details">
							<div class="checkContractInfo fn-clear">-->
								<!--<div class="checkContractInfoUpload">-->
								<!--<div class="checkContractInfoUpload" ng-if='fileName1!=""&&fileName1!=undefined'>-->
									<!--<img src="../static/base/images/icon_file.png" />
									<span class="mgl5" id="fileName" >附件.jpg</span>-->
									<!--<span class="mgl5" id="fileName1" ng-if="fileName1.length<8">{{fileName1}}</span>
									<span class="mgl5" id="fileName1" ng-if="fileName1.length>=8">{{fileName1 |limitTo:8}}...</span>-->
									<!--<img src="../static/base/images/icon_download1.png"/>-->
								<!--</div>-->
								<!--<div class="checkContractInfoFile checkContractInfoFile_data">
									<input ngf-select="uploadWork($files,'1')" name="files" type="file" value="" />
									<button class="addFileBtn am-ft-20">+</button>
								</div>
							</div>
						</div>-->
                   </td>
                    <td >
                        {{modelGroup.modelCount}}个
                   </td>
                    <td >
                        {{modelGroup.createTime}}
                    </td>
                    <td>
                    	<span class="am-ft-d4 mgr15 cursor-pointer" ng-click='setClassifyPro(this)'>设置</span>
                    	<span class="am-ft-gray cursor-pointer" ng-dblclick="deleteModelGroup($index)">删除</span>
                    </td>
                    <td class="uptodown">
                    	<img src='../static/base/images/Combined Shape1.png'  ng-click="uptodown('1',$index)"/>
                    	<img src='../static/base/images/Combined Shape Copy 2.png' ng-click="uptodown('2',$index)"/>
                    	<img src='../static/base/images/Combined Shape Copy 3.png' ng-click="uptodown('3',$index)"/>
                    	<img src='../static/base/images/Combined Shape Copy 4.png' ng-click="uptodown('4',$index)"/>
                    </td>
                  </tr>
                  <tr ng-if='addFlag'>
                   <td >
                  	<div class="editClassifyName">
	                   	<input type="text" id="" data="" ng-model="addModelGroupObj.groupName" class="code_checkbox " value="" /><br />
	                   	<span class="am-ft-d4" ng-click='addModelGroup()'>保存</span>
	                   	<span  class="am-ft-d4" ng-click='closeDia()'>取消</span>
                   	</div>
                   </td>
                    <td >
                        --个
                   </td>
                    <td >
                        
                    </td>
                    <td>
                    </td>
                    <td class="uptodown">
                    </td>
                  </tr>
              </table>
              <!-- List end -->
            <div class="fn-clear"></div>
        </div>
        </section>
	    <!--分页 start-->
	    <div class="pagelist priv-pagelist" style="width: 92.5% !important;">
	    	<div id="paging"></div>    
	    </div>
	    <!--分页 end-->
   </div>
<script type="text/javascript">
    //搜索方式
    $(".isTipsFrame").center();
  //二维码尺寸滑块选择
    $('.set-codeSize').click(function(){
        $('.codeSize-dialog').toggle();
    });
    function DoSaveAsIMG(proModelid) {  
        if (document.getElementById("IframeReportImg"+proModelid).src != "about:blank")  
            document.frames["IframeReportImg"+proModelid].document.execCommand("SaveAs",true,"C://Users//时爽//Downloads//123.png");          
    }
	/* $('.searchtp').change(function(){
	        if($(this).prop('checked') && $(this).attr('num')==1){
	            $('.productSearch-type1').show();
	            $('.productSearch-type2').hide();
	        }else if($(this).prop('checked') && $(this).attr('num')==2 ){
	            $('.productSearch-type2').show();
	            $('.productSearch-type1').hide();
	        }
	 }); */
</script>
