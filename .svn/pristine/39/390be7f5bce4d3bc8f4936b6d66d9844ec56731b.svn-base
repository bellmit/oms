<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
	<meta http-equiv="Access-Control-Allow-Origin" content="*">
	<!-- 头部 -->

	<head lang="zh">
		<jsp:include page="headstyle.jsp" />
		<title>勤易通全渠道零售管理平台</title>
	</head>
	<!-- web url -->
	<script type="text/javascript">
		var cas, pos, ss, msg, qineasy, vm, vip;
		$(function() {
			if(!cas || !pos || !ss || !msg || !qineasy || !vm || !vip || !stat) {
				getWebUrl();
			}
			cas = localStorage.cas;
			pos = localStorage.pos;
			ss = localStorage.ss;
			msg = localStorage.msg;
			qineasy = localStorage.qineasy;
			vm = localStorage.vm;
			vip = localStorage.vip;
			stat = localStorage.stat;
		})

		function getWebUrl() {
			var webName = document.location.pathname.split('/')[1];
			$.ajaxSettings.async = false;
			$.getJSON("/" + webName + "/public/web.json", function(data) {
				$.each(data, function(i, web) {
					if(web.name == "cas") {
						localStorage.cas = web.url + "cas-api/";
					} else if(web.name == "pos") {
						localStorage.pos = web.url + "pos-api/";
					} else if(web.name == "ss") {
						localStorage.ss = web.url + "ss-api/";
					} else if(web.name == "msg") {
						localStorage.msg = web.url + "msg-api/";
					} else if(web.name == "qineasy") {
						localStorage.qineasy = web.url;
					} else if(web.name == "vm") {
						localStorage.vm = web.url + "vm-api/";
					} else if(web.name == "vip") {
						localStorage.vip = web.url + "vip-api/";
					} else if(web.name == "stat") {
						localStorage.stat = web.url + "stat-api/";
					}
				})
			})
			$.ajaxSettings.async = true;
		}

		if(localStorage.keyParams) {
			var keyParams = localStorage.keyParams;
		}
	</script>

	<!-- 弹出框提示 start-->
	<div class="alert alert-success alert-dismissible fade in fn-hide" role="alert">
		<button type="button" class="close" onclick="closemsg()">
		<span>×</span>
	</button>
		<h4></h4>
	</div>

	<div class="alert alert-danger alert-dismissible fade in fn-hide" role="alert">
		<button type="button" class="close" onclick="closemsg('error')">
		<span>×</span>
	</button>
		<h4>操作失败!</h4>
		<p></p>
	</div>

	<!-- 窗口提示 -->
	<script type="text/javascript">
		var timeid1;
		var timeid2;

		function alertmsg(msg, type) {
			if(type == "error") {
				$(".alert-danger").show(1, msgtime("error"));
				$(".alert-danger").find("p").html(msg);
			} else {
				$(".alert-success").show(1, msgtime());
				$(".alert-success").find("h4").html(msg);
			}

		}

		//弹出提示3秒自动消失
		function msgtime(type) {
			if(type == "error") {
				timeid1 = setTimeout(function() {
					$(".alert-danger").hide();
				}, 1500);
			} else {
				timeid2 = setTimeout(function() {
					$(".alert-success").hide();
				}, 1500);
			}
		}

		function closemsg(type) {
			if(type == "error") {
				clearTimeout(timeid1);
				$(".alert-danger").hide();
			} else {
				clearTimeout(timeid2);
				$(".alert-success").hide();
			}
		}
		/*获得电脑屏幕的高度和宽度*/
		var screenHeight, screenWidth;
		screenHeight = window.screen.height;
		screenWidth = window.screen.width;
		$(window).resize(function() {
			screenHeight = window.screen.height;
			screenWidth = window.screen.width;
		})

		var winWidth = 0;
		var winHeight = 0;

		function findDimensions() //函数：获取尺寸 
		{
			//获取窗口宽度 
			if(window.innerWidth)
				winWidth = window.innerWidth;
			else if((document.body) && (document.body.clientWidth))
				winWidth = document.body.clientWidth;
			//获取窗口高度 
			if(window.innerHeight)
				winHeight = window.innerHeight;
			else if((document.body) && (document.body.clientHeight))
				winHeight = document.body.clientHeight;
			//通过深入Document内部对body进行检测，获取窗口大小 
			if(document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth) {
				winHeight = document.documentElement.clientHeight;
				winWidth = document.documentElement.clientWidth;
			}
			//结果输出至两个文本框 
		}
		findDimensions();
		/*获得电脑屏幕的高度和宽度*/
	</script>