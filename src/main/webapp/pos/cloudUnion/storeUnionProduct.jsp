<%@ page contentType="text/html; charset=utf-8" language="java" import="java.util.*" errorPage="" %>
<!--------------- Content start ----------------->
<!--云仓商品管理（联盟列表主页）-->
<div ng-show="defaultObj.storeUnionProductList=='show'">
	<jsp:include page="storeUnionProductList.jsp" />
</div>
<!--云仓联盟的云仓商品列表(门店)-->
<div ng-show="defaultObj.storeBrandUnionProductList=='show'">
	<jsp:include page="storeBrandUnionProductList.jsp" />
</div>

