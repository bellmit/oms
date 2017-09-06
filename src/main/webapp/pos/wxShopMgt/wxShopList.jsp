<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<div ng-show="shopLists.length == 0">
		<jsp:include page="addwxShopTemplate.jsp" />
</div>
<div  ng-show="shopLists.length != 0">
		<jsp:include page="wxShopListTemplate.jsp" />
</div>
<!--微店列表页面-->