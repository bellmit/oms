<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!-- 头部 -->
<jsp:include page="../public/headpage.jsp" />
<!--ueditor--> 
 <script type="text/javascript" src="../static/base/ueditor1_4_3_3-utf8-jsp/utf8-jsp/ueditor.config.js"></script>
 <script type="text/javascript" src="//static.qineasy.com/base/ueditor1_4_3_3-utf8-jsp/utf8-jsp/ueditor.all.js"></script>
 <script type="text/javascript" src="../static/base/ueditor1_4_3_3-utf8-jsp/utf8-jsp/lang/zh-cn/zh-cn.js"></script>
 <link href="../static/base/ueditor1_4_3_3-utf8-jsp/utf8-jsp/themes/default/css/ueditor.css" rel="stylesheet" type="text/css" /> 
 <link href="../static/base/artEditor-master/example/css/style.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="../static/base/artEditor-master/artEditor.js"></script>
<script type="text/javascript" src="../static/base/js/html2canvas.js"></script>
		 <!--<script src="//cdn.bootcss.com/javascript-canvas-to-blob/3.6.0/js/canvas-to-blob.min.js"></script>--> 
<!--ueditor--> 
<script src="qyApp.js"></script>

<!-- 主要 -->
<body class="skin-blue sidebar-mini" data-ng-app="qyApp">

<div class="wrapper" style="position: inherit;">

 	<!-- top -->
	<jsp:include page="../public/top.jsp" />
	
	<!--------------- Content start ----------------->

   	<!-- Left Menu -->
	<jsp:include page="../public/menupage.jsp" />
	
	<!-- breadcrumb -->
    <jsp:include page="../public/breadcrumb.jsp" />
	
	<script type="text/javascript" language="javascript">		
		function loadBreadCrumb(param1,param2){
			$("#breadcrumb1").html(param1);
			$("#breadcrumb2").html(param2);								
		}
		
		function loadBreadSmenu(param){
			$("#breadcrumb3").html(param);
		}				
			
	</script>	
	
	<div ng-if="loading">		
		<img class="loading rotate" src="//static.qineasy.com/base/images/loading.png" />
	</div>
	
	<div class="maskBg fn-hide"></div>
	
    <div>
         <div data-ui-view=""/>
    </div>
</div>
<!--------------- Content end ----------------->

<!------------- 尾部 --------------->
<jsp:include page="../public/footstyle.jsp" />

</body>
</html>
