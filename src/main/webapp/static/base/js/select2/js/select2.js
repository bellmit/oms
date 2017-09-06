
    //第二个下拉框
    var $states = $(".js-source-states2");
    var statesOptions = $states.html();
    $states.remove();
    $(".select_2").append(statesOptions);

    
  //tab
	$('.Tabnav').children('.am-tab-item').eq(0).click(function() {
		$(this).attr({
			'data-tab' : 'selected'
		}).siblings('.am-tab-item').removeAttr('data-tab');
		$('#in-nav1').show();
		$('#in-nav2').hide();
	});
	$('.Tabnav').children('.am-tab-item').eq(1).click(function() {
		$(this).attr({
			'data-tab' : 'selected'
		}).siblings('.am-tab-item').removeAttr('data-tab');
		$('#in-nav2').show();
		$('#in-nav1').hide();
	});
	//下拉多选
        var $example = $(".js-example-programmatic").select2();
        var $exampleMulti = $(".js-example-programmatic-multi").select2();
        $(".js-programmatic-multi-clear").on("click", function () { $exampleMulti.val(null).trigger("change"); });
        //全选
        $('.select_all').on("click",function(){
            $('.select_2').find('option').prop('selected',true).change();
        });
	