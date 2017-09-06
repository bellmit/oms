<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>

<!--------------- Content start ----------------->

<div class="content-wrapper addtype-wrapper">
    <div class="col-md-11 pageTitl">
        <h2 class="am-ft-16 fn-left">选款添加</h2>
    </div>
    <!-- search -->
    <div class="listSearch OderlistSearch">
        <form class="form-horizontal">
            <div class="row">
                <div class="col-md-10">
                    <div class="form-group col-md-6 pl0">
                        <label class="col-sm-4 control-label">请输入选款号：</label>
                        <div class="col-sm-8 pro-search">
                            <input type="text" class="form-control" placeholder="" />
                        </div>
                    </div>
                    <div class="col-md-1 am-ft-center searchBox">
                        <button type="button" class="btn fn-left btn-primary">搜索</button>
                    </div>
                    <div class="fn-clear"></div>
                </div>
            </div>
        </form>
    </div>
    <!-- /search -->
    <p class="titlline"></p>
    <!-- Main content -->
    <div class="addtype-content fn-left">
        <ul class="media-list">
            <li class="media">
                <div class="media-left">
                    <a href="#">
                        <img class="media-object" src="images/large.png" width="80" alt="商品图片">
                    </a>
                </div>
                <div class="media-body">
                    <div class="editInvTit">
                        <p class="col-sm-12 media-heading">款名:<span>款名款名</span></p>
                        <p class="col-sm-12 media-heading">款号:<span>款号款号款号</span></p>
                        <p class="col-sm-2 media-heading">品类:<span>品类</span></p>
                        <p class="col-sm-2 media-heading">品牌:<span>品牌品牌</span></p>
                        <p class="col-sm-2 media-heading">年份:<span>2016</span></p>
                        <p class="col-sm-2 media-heading">季节:<span>春季</span></p>
                        <p class="col-sm-6 media-heading">吊牌价:<span>2000</span></p>
                    </div>
                </div>
            </li>
        </ul>
        <div class="ManColTable col-lg-12">
            <form>
                <div class="table-responsive PrivTable">
                    <table class="table table-hover table-striped table-bordered">
                        <tr>
                            <th width="80" scope="col">颜色/尺码</th>
                            <th scope="col">S</th>
                            <th scope="col">X</th>
                            <th scope="col">XL</th>
                        </tr>
                        <tr>
                            <th scope="row">红色</th>
                            <td><input class="input-mini" type="text" value="666" /></td>
                            <td><input class="input-mini" type="text" value="666" /></td>
                            <td><input class="input-mini" type="text" value="666" /></td>
                        </tr>
                        <tr>
                            <th scope="row">蓝色</th>
                            <td><input class="input-mini" type="text" value="666" /></td>
                            <td><input class="input-mini" type="text" value="666" /></td>
                            <td><input class="input-mini" type="text" value="666" /></td>
                        </tr>
                        <tr>
                            <th scope="row">绿色</th>
                            <td><input class="input-mini" type="text" value="666" /></td>
                            <td><input class="input-mini" type="text" value="666" /></td>
                            <td><input class="input-mini" type="text" value="666" /></td>
                        </tr>
                        <tr>
                            <th scope="row">小计</th>
                            <td>123</td>
                            <td>456</td>
                            <td>789</td>
                        </tr>
                        <tr>
                            <th scope="row">合计</th>
                            <td colspan="3">888</td>
                        </tr>
                    </table>
                    <div class="fn-clear"></div>
                </div>
                <div class="fn-clear"></div>

                <button type="button" class="mgl5 btn btn-primary">确认</button>
                <button type="button" class="btn btn-default mgl10">取消</button>

            </form>
        </div>
        <div class="fn-clear"></div>
    </div>
    <!-- /Main content -->

</div>

</div>



