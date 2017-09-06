<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!-- 右侧消息提示伸缩框 -->
		<div class="news-content-wrapper">
		    <h3 class="news-wrapper-title">新消息提醒</h3>
		    <div class="news-wrapper-content">
		        <ul class="news-group" id="newsgroup">
		            <li class="news-item-titl" id="newsmsg">公告信息</li>
		            <!-- <li>
		                <a href="javascript:;"><em class="news-time">2016-07-22 10:20:30</em>本系统将于明日早上八点进行系统升级，如对您造成不便请谅解！</a>
		            </li>
		            <li>
		                <a href="javascript:;" class="text-ellipsis"><em class="news-time">2016-07-22 10:12:04</em>本系统将于明日早上八点进行系统升级，如对您造成不便请谅解！</a>
		            </li> -->
		        </ul>
		        <ul class="news-group" id="ordergroup">
		            <li class="news-item-titl" id="ordermsg">订单信息</li>
		            <!-- <li>
		                <div class="panelBox">
		                    <em class="news-time">2016-07-22 10:20:30</em>
		                    <p>说明文字说明文字</p>
		                    <p>
		                        <button type="button" class="btn btn-primary">接单</button>
		                        <button type="button" class="btn btn-default">拒单</button>
		                    </p>
		                </div>
		            </li>
		            <li>
		                <div class="panelBox">
		                    <em class="news-time">2016-07-22 10:20:30</em>
		                    <p>说明文字说明文字</p>
		                    <p>
		                        <button type="button" class="btn btn-primary">接单</button>
		                        <button type="button" class="btn btn-default">拒单</button>
		                    </p>
		                </div>
		            </li> -->
		        </ul>
		
		    </div>
		    <div class="fn-clear"></div>
		</div>
<!-- /右侧消息提示伸缩框 -->

<script type="text/javascript">
	    var isOut = true;
	    $('.messages-info').click(function(){
	    	isOut = false;	    	
	        $('.news-content-wrapper').toggleClass('news-content-wrapper-open');	        
	        $('#messages-info').removeClass('animated pulse infinite');	        	
        	localStorage.msgCount=0;
        	$("#msg").html("");	        	        
	    });
	    
	    $('.news-content-wrapper').click(function(){
	    	isOut = false;
	    });
	    
	    $('body').click(function(){
	    	if(isOut){
	            $('.news-content-wrapper').removeClass('news-content-wrapper-open');
	            $('#messages-info').removeClass('animated pulse infinite');
	            localStorage.msgCount=0;
	        	$("#msg").html("");
	        }
	         isOut = true;
	    });
</script>