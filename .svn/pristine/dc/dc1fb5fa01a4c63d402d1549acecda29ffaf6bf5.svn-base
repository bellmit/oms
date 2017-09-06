qyApp.controller('addwxShopSuccessController', function($stateParams,$state,$scope, $http, $compile, Upload) {
	if($stateParams.uiParams.type == "1"){
		$stateParams.uiParams.routeState.push({name:"addwxShopSuccess",level:"3"})
	}
	$scope.wxShopInfo = $stateParams.uiParams.routeParams;
	/*点击继续添加微店按钮*/
	$scope.addWxShop=function(){
		$stateParams.uiParams.routeState.splice($stateParams.uiParams.routeState.length-1,1);
		$state.go($stateParams.uiParams.routeState[$stateParams.uiParams.routeState.length-1].name,{
			uiParams:{
				routeState:$stateParams.uiParams.routeState,
			routeParams:$scope.jsonObject,
			type:"2"
			}
		})
	}
	var qrcode = new QRCode(document.getElementById("qrcodea"), {
		text: $scope.wxShopInfo.shopUrl,
		width: 114,
		height: 114,
		colorDark: "#000000",
		colorLight: "#ffffff",
		correctLevel: QRCode.CorrectLevel.H
	});
//	qrcode.makeCode($scope.wxShopInfo.shopUrl);
	/*下载二维码*/
		/*点击下载二维码*/
		//	单张图片下载 start
	$scope.downLoadQrCode = function() {
			var img = $("#qrcodea").find("img").attr("src");
			if(img == null) {
				alertmsg("请选择文件！", "error")
			}
			var brower = myBrowser();
			if(brower == "IE") {
				var imgURL = "";
				//如果隐藏IFRAME不存在，则添加  
				if(!document.getElementById("IframeReportImg" + $scope.dialogUrl))
					$('<iframe style="display:none;" id="IframeReportImg' + $scope.dialogUrl + '" name="IframeReportImg' + $scope.dialogUrl + '" onload="DoSaveAsIMG(' + $scope.dialogUrl + ');" width="0" height="0" src="about:blank"></iframe>').appendTo("body");
				//加载图片
				document.getElementById("IframeReportImg" + $scope.dialogUrl).src = img;
			} else if(brower == "DOWNLOAD") {
				var fileName = $scope.dialogShopName + ".png";
				var aLink = document.createElement('a');
				var evt = document.createEvent("HTMLEvents");
				evt.initEvent("click", false, false);
				aLink.download = fileName;
				aLink.href = img;
				//				aLink.dispatchEvent(evt);
				aLink.click();
			}
		}
		//判断浏览器类型
	function myBrowser() {
		if(!!window.ActiveXObject || "ActiveXObject" in window) {
			return "IE";
		}
		if('download' in document.createElement('a')) {
			return "DOWNLOAD";
		}
		return "OTHER";
	}
	var clipboard = new Clipboard('#copyurl');
    clipboard.on('success', function(e) {
        alertmsg("复制成功"+e.text)
    });
    clipboard.on('error', function(e) {
        console.log(e);
    });
    $scope.$on("$stateChangeStart",function(){
		clipboard.destroy();
    })
})