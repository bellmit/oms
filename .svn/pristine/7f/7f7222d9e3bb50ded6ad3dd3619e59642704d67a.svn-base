/**
 * 移动端富文本编辑器
 * @author ganzw@gmail.com
 * @url    https://github.com/baixuexiyang/artEditor
 */
$.fn.extend({
	_opt: {
		placeholader: '',
		limitSize: 3,
		showServer: false,
		imgTar: '#imageUpload',
		uploadUrl: '',
		data: {},
		uploadField: 'image',
		placeholader: '',
		validHtml: ["<br/>"],
		formInputId: 'target',
		uploadSuccess: function(res) {
			// return img url
			return res.path;
		},
		uploadError: function(res) {
			// something error
			console.log(res);
		},
	},
	artEditor: function(options) {
		var _this = this,
			styles = {
				"-webkit-user-select": "text",
				"user-select": "text",
				"overflow-y": "auto",
				"text-break": "brak-all",
				"outline": "none",
				"cursor": "text",
			};
		$(this).css(styles).attr("contenteditable", true);
		_this._opt = $.extend(_this._opt, options);
		try {
			$(_this._opt.imgTar).on('click', function(e) { /*当上传图片的INPUT发生变化*/
				for(var i = 0; i < _this._opt.imgArr.length; i++) {
					var img = '<img src="' + _this._opt.imgArr[i] + '" style="width:98%;" />';
					_this.insertImage(img,_this._opt.cursorIndex);
				}
				_this.placeholderHandler();
				_this.pasteHandler();
			});
		} catch(e) {
			console.log(e);
		}
		if(_this._opt.formInputId && $('#' + _this._opt.formInputId)[0]) {
			$(_this).on('input', function() {
				$('#' + _this._opt.formInputId).val(_this.getValue());
			});
		}
	},
	insertImage: function(src,cursorIndex) {
		$(this).focus();
		var selection = window.getSelection ? window.getSelection() : document.selection;
//		var range = selection.createRange ? selection.createRange() : selection.getRangeAt(0);
		var range = selection.createRange ? selection.createRange() :cursorIndex;
		if(!window.getSelection) {
			range.pasteHTML(src);
			range.collapse(false);
			range.select();
		} else {
			range.collapse(false);
			var hasR = range.createContextualFragment(src);
			var hasLastChild = hasR.lastChild;
			while(hasLastChild && hasLastChild.nodeName.toLowerCase() == "br" && hasLastChild.previousSibling && hasLastChild.previousSibling.nodeName.toLowerCase() == "br") {
				var e = hasLastChild;
				hasLastChild = hasLastChild.previousSibling;
				hasR.removeChild(e);
			}
			range.insertNode(range.createContextualFragment("<br/>"));
			range.insertNode(hasR);
			if(hasLastChild){
				range.setEndAfter(hasLastChild);
				range.setStartAfter(hasLastChild);
			}
			selection.removeAllRanges();
			selection.addRange(range);
		}
		if(this._opt.formInputId && $('#' + this._opt.formInputId)[0]) {
			$('#' + this._opt.formInputId).val(this.getValue());
		}
	},
	pasteHandler: function() {
		var _this = this;
		$(this).on("paste", function(e) {
			var content = $(this).html();
			valiHTML = _this._opt.validHtml;
			content = content.replace(/_moz_dirty=""/gi, "").replace(/\[/g, "[[-").replace(/\]/g, "-]]").replace(/<\/ ?tr[^>]*>/gi, "[br]").replace(/<\/ ?td[^>]*>/gi, "&nbsp;&nbsp;").replace(/<(ul|dl|ol)[^>]*>/gi, "[br]").replace(/<(li|dd)[^>]*>/gi, "[br]").replace(/<p [^>]*>/gi, "[br]").replace(new RegExp("<(/?(?:" + valiHTML.join("|") + ")[^>]*)>", "gi"), "[$1]").replace(new RegExp('<span([^>]*class="?at"?[^>]*)>', "gi"), "[span$1]").replace(/<[^>]*>/g, "").replace(/\[\[\-/g, "[").replace(/\-\]\]/g, "]").replace(new RegExp("\\[(/?(?:" + valiHTML.join("|") + "|img|span)[^\\]]*)\\]", "gi"), "<$1>");
			if(!/firefox/.test(navigator.userAgent.toLowerCase())) {
				content = content.replace(/\r?\n/gi, "<br>");
			}
			$(this).html(content);
		});
	},
	placeholderHandler: function() {
		var _this = this;
		$(this).on('focus', function() {
				if($.trim($(this).html()) === _this._opt.placeholader) {
					$(this).html('');
				}
			})
			.on('blur', function() {
				if(!$(this).html()) {
					$(this).html(_this._opt.placeholader);
				}
			});

		if(!$.trim($(this).html())) {
			$(this).html(_this._opt.placeholader);
		}
	},
	getValue: function() {
		return $(this).html();
	},
	setValue: function(str) {
		$(this).html(str);
	}
});