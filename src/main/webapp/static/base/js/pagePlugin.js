/**
 * 分页插件  must:必传参数,option:可选参数
 */
var pagePlugin = {
    renderTo:null, // 渲染容器 must
    total:0,  // 总记录数       must
    pageSize:20, // 每页记录数  must
    isShowPrePageBtn:true, // 是否显示上一页按钮 option
    isShowNextPageBtn:true, // 是否显示下一页按钮 option
    isShowTotalPage:true,    // 是否显示总页数   option
    isShowTotalRecords:true,  // 是否显示总记录  option
    isGoPage:true               // 是否显示跳转框  option
};
pagePlugin.createPaging = function(param){
    var me = this;
    var config = $.extend({
        pages:0,  // 总页数
        currentPage:0, // 当前页
        showPages: 5, // 每次最多展示7页
        //intervalPages:0, // 间隔页数
        plugin: null,  // 插件容器
        inited: false, // 是否已初始化
        prePage: 1,    // 上一页
        nextpage: 1,   // 下一页
        hasPrv : false,
        hasNext : false,
        lang : {
            firstPageText			: '首页',
            firstPageTipText		: '首页',
            lastPageText			: '尾页',
            lastPageTipText			: '尾页',
            prePageText				: '上一页',
            prePageTipText			: '上一页',
            nextPageText			: '下一页',
            nextPageTipText			: '下一页',
            totalPageBeforeText		: '共',
            totalPageAfterText		: '页',
            totalRecordsAfterText	: '条数据',
            gopageBeforeText		: '转到',
            gopageButtonOkText		: '确定',
            gopageAfterText			: '页',
            buttonTipBeforeText		: '第',
            buttonTipAfterText		: '页'
        }
    },param);

    for(var key in config){
        this[key]=config[key];
    }

    var method = {
        /**
         *  init plugin
         */
        init:function(){
            me.validateParams();
            me.getPlugin();	//$('#'+me.renderTo)
            var html = me.pagingHtml();
            me.plugin.append(html);
            me.pageClickListener(); //监听页数点击事件
        },
        /**
         *  validate params correct
         */
        validateParams:function(){
            me.currentPage = isNaN(me.currentPage) ? 1 : me.currentPage; // 当前页
            me.pageSize = isNaN(me.pageSize) ? 1 : me.pageSize; // 每页记录数
            me.total = isNaN(me.total) ? 0 : me.total; // 总记录数
            me.currentPage = me.currentPage < 1 ? 1 : me.currentPage;
            me.pages = Math.ceil( me.total / me.pageSize); // 计算总页数
            me.pages = (me.pages <= 1) ? 1: me.pages;
            me.currentPage =  me.currentPage > me.pages ? me.pages : me.currentPage;
            me.prePage = ( me.currentPage <= 2) ? 1 : ( me.currentPage - 1);
            me.nextpage = (me.currentPage >=  me.pages - 1) ? me.pages : (me.currentPage + 1);
            me.hasPrv = (me.currentPage > 1);  // 判断当前页是否大于第一页，是返回true
            me.hasNext = (me.currentPage < me.pages); // 判断当前页是否小于最后一页，是返回true
            me.inited = true;
        },
        /*
         *  plugin container
         * */
        getPlugin:function(){
            me.plugin = $('#'+me.renderTo);
        },
        /*
         *  caculate pages
         * */
        countPages:function(){
            me.pages = Math.ceil( me.count / me.pageSize);
        },
        /**
         *  渲染分页html
         */
        renderPageHtml:function(counts,currentpage,showpages){
            var html = me.pagingHtml(counts,currentpage,showpages);
            me.plugin.html(html); //$('#'+me.renderTo).html(html);
        },
        /**
         * paging html
         * @param pages
         * @param currentPage
         * @param showPages
         * @returns {string}
         */
        pagingHtml:function(){
            var  html = [];
            html.push('<div class="base-paging-area">');
            html.push('<ul class="p-num">');
            if(me.isShowPrePageBtn){
                html.push('<li class="pn-prev '+(me.hasPrv ? '' : 'disabled')+'" title="'+me.lang.prePageText+'"><i><</i><em>上一页</em></li>');
            }
            var dot = '<li class="more">...</li>';
            if(me.pages <= me.showPages){
                for(var i = 1;i<= me.pages;i++){
                    html.push('<li class="num '+(me.currentPage == i ? 'curr': '')+'" title="'+(me.currentPage == i ? '' : me.lang.buttonTipBeforeText + i + me.lang.buttonTipAfterText)+'">'+i+'</li>');
                }
            }else{
                if(me.currentPage <=  me.showPages -2 ){
                    for(var i = 1;i<=  me.showPages;i++){
                        html.push('<li class="num '+(me.currentPage == i ? 'curr': '')+'" title="'+(me.currentPage == i ? '' : me.lang.buttonTipBeforeText + i + me.lang.buttonTipAfterText)+'">'+i+'</li>');
                    }
                    html.push(dot);
                }else{
                    html.push( '<li class="num" title="'+( me.lang.buttonTipBeforeText + 1 + me.lang.buttonTipAfterText)+'">1</li>');
                    html.push( '<li class="num" title="'+( me.lang.buttonTipBeforeText + 2 + me.lang.buttonTipAfterText)+'">2</li>');
                    html.push(dot);

                    var begin = me.currentPage - 2;
                    var end = me.currentPage + 2;
                    if(end > me.pages){
                        end = me.pages;
                        begin = end - 4;
                        if(me.currentPage - begin < 2){
                            begin = begin-1;
                        }
                    }else if(end + 1 == me.pages){
                        end = me.pages;
                    }
                    for(var i=begin;i<=end;i++){
                        html.push('<li class="num '+(me.currentPage == i ? 'curr': '')+'" title="'+(me.currentPage == i ? '' : me.lang.buttonTipBeforeText + i + me.lang.buttonTipAfterText)+'">'+i+'</li>');
                    }
                    if(end != me.pages){
                        html.push(dot);
                    }
                }
            }
            if(me.isShowNextPageBtn){
                html.push('<li class="pn-next '+(me.hasNext ? '' : 'disabled')+'" title="'+me.lang.nextPageText+'"><em>下一页</em><i>></i></li>');
            }
            html.push('</ul>');
            html.push('<ul class="p-skip">');
            if(me.isShowTotalRecords){
                html.push('<li><em>共<b>'+me.pages+'</b>页&nbsp;&nbsp;到第</em></li>');
            }
            if(me.isGoPage){
                html.push('<li><input class="input-txt" type="text" style="margin-top:4px;" value="'+me.currentPage+'" onkeydown="javascript:if(event.keyCode==13){return false;}"></li>');
                html.push('<li><em>页</em></li>');
                html.push('<li><a class="btn btn-default" onclick="" href="javascript:;">确定</a></li>');
            }
            html.push('</ul>');
            html.push('</div>');
            return html.join('');
        },
        /**
         *  click page listener
         */
        pageClickListener:function(){

            me.plugin.find('.base-paging-area').find('.num').click(function(){
                if($(this).hasClass('curr')){
                    return false;
                }
                me.currentPage = parseInt($(this).text());
                me.reRenderPlugin();
                var from = (me.currentPage -1) * me.pageSize + 1;
                var to =  me.currentPage * me.pageSize;
                me.goPage(from,to);
            });
            me.plugin.find('.base-paging-area').find('.btn-default').click(function(){
                var value = me.plugin.find('.base-paging-area').find('.input-txt').val();
                if(isNaN(value)){
                    alert('请输入数字!');
                    return false;
                }
                me.currentPage = parseInt(value);
                me.reRenderPlugin();
                var from = (me.currentPage -1) * me.pageSize + 1;
                var to =  me.currentPage * me.pageSize;
                me.goPage(from,to);
            });
            me.plugin.find('.base-paging-area').find('.pn-prev').click(function(){
                if($(this).hasClass('disabled')){
                    return false;
                }
                me.currentPage = me.currentPage -1;
                me.reRenderPlugin();
                var from = (me.currentPage -1) * me.pageSize + 1;
                var to =  me.currentPage * me.pageSize;
                me.goPage(from,to);
            });
            me.plugin.find('.base-paging-area').find('.pn-next').click(function(){
                if($(this).hasClass('disabled')){
                    return false;
                }
                me.currentPage = me.currentPage + 1;
                me.reRenderPlugin();
                var from = (me.currentPage -1) * me.pageSize + 1;
                var to =  me.currentPage * me.pageSize;
                me.goPage(from,to);
            });
        },
        //渲染容器
        reRenderPlugin:function(){
            me.validateParams();
            me.plugin.html( me.pagingHtml());
            me.pageClickListener();
        },
        //分页,from从第几条,to到第几条
        goPage:function(from,to){

        }
    };
    for(var key in method){
        this[key]=method[key];
    }
    me.init();
    return me;
};
