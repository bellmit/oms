<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!----- tree start ---->
<div class="treeMenu fn-left col-lg-2">
	<div class="zTreeDemoBackground left">
		<ul id="treeDemo" class="ztree"></ul>
	</div>
</div>
<!--右键菜单 start-->
<div id="rMenu">
	<ul>
		<li id="m_add" onClick="addTreeNode();">增加节点</li>
		<li id="m_del" onClick="removeTreeNode();">删除节点</li>
		<li id="m_check" onClick="checkTreeNode(true);">Check节点</li>
		<li id="m_unCheck" onClick="checkTreeNode(false);">unCheck节点</li>
		<li id="m_reset" onClick="resetTree();">恢复zTree</li>
	</ul>
</div>
<!--右键菜单 end-->
<!----- tree end ----->