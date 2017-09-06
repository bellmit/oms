<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<title>Document</title>
		<link href="http://static.qineasy.com/base/css/reset_tb.css" rel="stylesheet" type="text/css" />

		<script src="http://static.qineasy.com/base/js/jQuery-2.1.4.min.js"></script>
		<style>
			img {
				vertical-align: top;
			}
		</style>
	</head>

	<body>
		<div id="previewContent">

		</div>

	</body>

</html>
<script type="text/javascript">
	console.log(localStorage.previewCode)
	$("#previewContent").append(localStorage.previewCode);
</script>