<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!--全选下载-->
<div class="content-wrapper-itemshow2 mgl20 mgr20" ng-if="imgListCount > 0">
	<div class="col-md-12 mgb10 select-wrap">
		<label class="storeProLabel">
		<input type="checkbox" id="selectAllP" ng-click="selectAll(imgList,'selectAllP')"> 
		<span>全选</span>
		</label> 
		<a href="javascript:;" class="mgl10" ng-click="downLoadPic()"> 
			<i class="downLoad-icon">
				<img src="http://static.qineasy.com/base/images/icon_download.png">
			</i>
			下载选中
		</a>
	</div>
</div>
			
<!--全选下载-->
<!--素材管理-->
<div class="col-md-12 mgb15 mgt20 " id="appendFolder" ng-if="userInfo.orgType == '1' && imgListCount > 0">
	<input type="file" ngf-select="uploadHeadpicPath($files)" ngf-multiple="true" class="fn-left loadImgFolder"  />
	<button class="blueGroundWhiteBtn mgr5">上传文件</button>
</div>
<!--缺省-->
<div class="col-md-12" ng-if="imgListCount==0 && userInfo.orgType == '1'">
	<div class="loadingFormal" >
		<img src="../static/base/images/icon_wait.png" />
		<span style="font-size:16px;">您还没有上传素材图片</span>
		<div class="col-md-12 mgt20">
			<input style="left:216px" type="file" ngf-select="uploadHeadpicPath($files)" ngf-multiple="true" class="fn-left loadImgFolder"  />
			<button class="blueGroundWhiteBtn mgr5">立即上传</button>	
		</div>
	</div>	
</div>
<div class="col-md-12" ng-if="imgListCount==0 && userInfo.orgType == '6'">
	<div class="loadingFormal" >
		<img src="../static/base/images/icon_wait.png" />
		<span style="font-size:16px;">商户还没有上传素材图片</span>
	</div>	
</div>
<!--缺省-->
<div class="col-md-12 fodderMainRow paddingleft20 fodderMainRow7">
    <!-- <div class="fodderMain" foldtype="folder" ng-repeat = "x in fileList" onmouseover="mOver(this)" onmouseout="mOut(this)">
        <div class="fodderMainImg">
            <img class="imgFodder" src="../static/base/images/icon_folder.png" ng-click = "loadFile(x)"/>
        </div>
        <div class="fodderMainInfo">
            <input type="text" class="fodderMainTitle" placeholder="{{x}}" /><br />
        </div>
    </div> -->
    <div class="fodderMain" index="{{$index}}" ng-click="doSelect(this)" onmouseover="mOver(this)" onmouseout="mOut(this)" foldtype="proimg" id="material{{x.proAttrId}}" ng-repeat = "x in imgList">
        <div class="fodderMainImg" >
            <img ng-src="{{x.proAttrValue}}" />            
            <div class="cover" ng-if="userInfo.orgType == '6'">
                <a href="javascript:;" class="scan am-ft-white a-dis">预览</a>
                <a href="javascript:;" class="am-ft-white a-dis" ng-click="downloadone(this.x)">下载</a>
            </div>
            <div class="cover" ng-if="userInfo.orgType == '1'">
                <a href="javascript:;" class="scan am-ft-white mgr20">预览</a>
                <a href="javascript:;" class="am-ft-white mgr20" ng-click="downloadone(this.x)">下载</a>
                <a href="javascript:;" class="delete am-ft-white" ng-click="delPic(x.proAttrId)">删除</a>
            </div>
        </div>
        <div class="fodderMainInfo">
            <input name="{{x.proAttrId}}" type="text" class="fodderMainTitle " placeholder="{{x.proAttrFilePath}}" ng-blur="updateFileName(x.proAttrId)" />
        </div>
    </div>
    <div class="pagelist priv-pagelist">
        <div id="productPicturePage"></div>
    </div>

</div>
<script type="text/javascript">
		function mOver(obj) {
	$(obj).css({
		"border": "1px solid #00afd4"
	});
	$(obj).find("div.fodderMainInfo").css({
		"background": "#00afd4",
		"border": "1px solid #00afd4"
	});
	$(obj).find("input").css({
		"background": "#00afd4",
		"border": "1px solid #00afd4",
		"color": "#ffffff"
	})
}

function mOut(obj) {
	$(obj).css({
		"border": "1px solid #dfdfdf"
	});
	$(obj).find("div.fodderMainInfo").css({
		"background": "#ffffff",
		"border": "1px solid #ffffff"
	});
	$(obj).find("input").css({
		"background": "#ffffff",
		"border": "1px solid #ffffff",
		"color": "#888"
	});
}

	
	$(function(){
		//增加文件夹
		/* var html = '';
		html += "<div class='fodderMain' foldtype='folder'>";
		html += "<div class='fodderMainImg'><img class='imgFodder' src='../static/base/images/icon_folder.png' ng-click = 'loadFile(11)'/></div>";
		html += "<div class='fodderMainEditTitle'><input type='text' class='fodderMainTitle' placeholder='文件夹名字' disabled='disabled' /></div>"
		html += "</div>";


		$("#addFolder").click(function() {
				$(".fodderMain").eq(0).before(html);
			}) */
			//鼠标点击图片下面的主图,使其变为Input框
		$(".fodderMain").on("click", ".fodderMainEditTitle", function() {
			$(".fodderMainDescript input").prop("disabled", true).css({
				"border": "none",
			});
			$(".fodderMainEditTitle input").prop("disabled", true).css({
				"border": "none",
			})
			$(this).children().prop("disabled", false).css({
				"border": "1px solid #00afd4",
			})

/* 			$(".fodderMain").eq(0).before(html); */

		});
//		  $(".storeProBox").on("click", ".scan", function(event) {          
//          var imgSrc = $(this).parent().prev().attr("src");
//          $(".showScanImg").show();
//          $(".showScanImg img").attr("src", imgSrc).center();
//          
//          var imgindex = $(event.target).parents('.fodderMain').attr("index");
//          $(".showScanImg img").attr('index',imgindex);
//          if($(this).parents('.fodderMain').index()==0){
//          	$('#prevImg').hide();
//          	$('#nextImg').show();
//          }else if($(this).parents('.fodderMain').index() == $('.fodderMain').length-1){
//          	$('#prevImg').show();
//          	$('#nextImg').hide();
//          }
//      });
//      
//      //图片预览切换 
//     //点击预览按钮
//		$(".storeProBox").on("click", ".scan", function(event) {
//			var imgSrc = $(this).parent().prev().attr("src");
//			$(".showScanImg").show();
//			$(".showScanImg img").attr("src", imgSrc).center();
//			
//			var imgindex = $(event.target).parents('.fodderMain').attr("index");
//          $(".showScanImg img").attr('index',imgindex);
//          if($(this).parents('.fodderMain').index()==0){
//          	$('#prevImg').hide();
//          	$('#nextImg').show();
//          }else if($(this).parents('.fodderMain').index() == $('.fodderMainRow7').children('.fodderMain').not('.fodderMain-default').length-1){
//          	$('#prevImg').show();
//          	$('#nextImg').hide();
//          }
//		})
//		//图片预览切换 
//      var w=0;
//      //上一张
//    	$('#prevImg').on("click",function(e){  
//    		//获取点击次数   
//          var i = ++w;
//          var imgSrc;
//          var showIndex = parseInt($(".showScanImg img").attr('index'));
//          $('#nextImg').show();
//			if(Math.abs(showIndex-1)==0 || showIndex==1){
//				$(".showScanImg img").attr('index',Math.abs(showIndex-1));
//				imgSrc = $('.fodderMainRow7').children('.fodderMain').not('.fodderMain-default').eq(Math.abs(showIndex-1)).find('img').attr("src");
//          	$(".showScanImg img").attr("src", imgSrc).center();
//				$('#prevImg').hide();  				
//			}else if(showIndex-1<0){
//          	e.stopPropagation();           	
//          }else{
//          	$(".showScanImg img").attr('index',Math.abs(showIndex-1));
//          	imgSrc = $('.fodderMainRow7').children('.fodderMain').not('.fodderMain-default').eq(Math.abs(showIndex-1)).find('img').attr("src");
//          	$(".showScanImg img").attr("src", imgSrc).center();           	
//          } 	
//      });
//      //下一张
//      $('#nextImg').on("click",function(e){  
//    		//获取点击次数   
//          var i = ++w;
//          var imgSrc;
//          var showIndex = parseInt($(".showScanImg img").attr('index'));
//          var fodLen = $('.fodderMain').not('.fodderMain-default').length;
//			$('#prevImg').show();			
//			if(showIndex+1==fodLen){ 	
//				$(".showScanImg img").attr('index',showIndex+1);
//          	imgSrc = $('.fodderMainRow7').children('.fodderMain').not('.fodderMain-default').eq(showIndex+1).find('img').attr("src");
//          	$(".showScanImg img").attr("src", imgSrc).center();
//          	$('#nextImg').hide();
//          }else if(showIndex+1 > fodLen){
//          	e.stopPropagation();
//          	$(".showScanImg img").attr('index',fodLen-1);           	
//          }else{
//          	$(".showScanImg img").attr('index',showIndex+1);
//          	imgSrc = $('.fodderMainRow7').children('.fodderMain').not('.fodderMain-default').eq(showIndex+1).find('img').attr("src");
//          	$(".showScanImg img").attr("src", imgSrc).center();
//          }
//      });
//      //关闭预览弹窗
//      $("#closeScanImg").click(function($event) {
//          $(".showScanImg").hide();
//          w=0
//      });
	})
</script>