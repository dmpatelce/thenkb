"function"!=typeof Object.create&&(Object.create=function(e){function n(){}return n.prototype=e,new n}),function(e,n,t,i){var o={init:function(n,t){var i=this;if(i.elem=t,i.$elem=e(t),i.newsTagName=i.$elem.find(":first-child").prop("tagName"),i.newsClassName=i.$elem.find(":first-child").attr("class"),i.timer=null,i.resizeTimer=null,i.animationStarted=!1,i.isHovered=!1,"string"==typeof n)throw console&&console.error("String property override is not supported"),"String property override is not supported";i.options=e.extend({},e.fn.bootstrapNews.options,n),i.prepareLayout(),i.options.autoplay&&i.animate(),i.options.navigation&&i.buildNavigation(),"function"==typeof i.options.onToDo&&i.options.onToDo.apply(i,arguments)},prepareLayout:function(){var t=this;e(t.elem).find("."+t.newsClassName).on("mouseenter",function(){t.onReset(!0)}),e(t.elem).find("."+t.newsClassName).on("mouseout",function(){t.onReset(!1)}),e.map(t.$elem.find(t.newsTagName),function(n,i){i>t.options.newsPerPage-1?e(n).hide():e(n).show()}),t.$elem.find(t.newsTagName).length<t.options.newsPerPage&&(t.options.newsPerPage=t.$elem.find(t.newsTagName).length);var i=0;e.map(t.$elem.find(t.newsTagName),function(n,o){o<t.options.newsPerPage&&(i=parseInt(i)+parseInt(e(n).height())+10)}),e(t.elem).css({"overflow-y":"hidden",height:i}),e(n).resize(function(){null!==t.resizeTimer&&clearTimeout(t.resizeTimer),t.resizeTimer=setTimeout(function(){t.prepareLayout()},200)})},findPanelObject:function(){for(var e=this.$elem;e.parent()!==i;)if((e=e.parent()).parent().hasClass("panel"))return e.parent();return i},buildNavigation:function(){var n=this.findPanelObject();if(n){var t='<ul class="pagination pull-right" style="margin: 0px;"><li><a href="#" class="prev"><span class="glyphicon glyphicon-chevron-down"></span></a></li><li><a href="#" class="next"><span class="glyphicon glyphicon-chevron-up"></span></a></li></ul><div class="clearfix"></div>',i=e(n).find(".panel-footer")[0];i?e(i).append(t):e(n).append('<div class="panel-footer">'+t+"</div>");var o=this;e(n).find(".prev").on("click",function(e){e.preventDefault(),o.onPrev()}),e(n).find(".next").on("click",function(e){e.preventDefault(),o.onNext()})}},onStop:function(){},onPause:function(){var e=this;e.isHovered=!0,this.options.autoplay&&e.timer&&clearTimeout(e.timer)},onReset:function(e){var n=this;n.timer&&clearTimeout(n.timer),n.options.autoplay&&(n.isHovered=e,n.animate())},animate:function(){var e=this;e.timer=setTimeout(function(){e.options.pauseOnHover||(e.isHovered=!1),e.isHovered||("up"===e.options.direction?e.onNext():e.onPrev())},e.options.newsTickerInterval)},onPrev:function(){var n=this;if(n.animationStarted)return!1;n.animationStarted=!0;var t="<"+n.newsTagName+' style="display:none;" class="'+n.newsClassName+'">'+e(n.$elem).find(n.newsTagName).last().html()+"</"+n.newsTagName+">";e(n.$elem).prepend(t),e(n.$elem).find(n.newsTagName).first().slideDown(n.options.animationSpeed,function(){e(n.$elem).find(n.newsTagName).last().remove()}),e(n.$elem).find(n.newsTagName+":nth-child("+parseInt(n.options.newsPerPage+1)+")").slideUp(n.options.animationSpeed,function(){n.animationStarted=!1,n.onReset(n.isHovered)}),e(n.elem).find("."+n.newsClassName).on("mouseenter",function(){n.onReset(!0)}),e(n.elem).find("."+n.newsClassName).on("mouseout",function(){n.onReset(!1)})},onNext:function(){var n=this;if(n.animationStarted)return!1;n.animationStarted=!0;var t="<"+n.newsTagName+' style="display:none;" class='+n.newsClassName+">"+e(n.$elem).find(n.newsTagName).first().html()+"</"+n.newsTagName+">";e(n.$elem).append(t),e(n.$elem).find(n.newsTagName).first().slideUp(n.options.animationSpeed,function(){e(this).remove()}),e(n.$elem).find(n.newsTagName+":nth-child("+parseInt(n.options.newsPerPage+1)+")").slideDown(n.options.animationSpeed,function(){n.animationStarted=!1,n.onReset(n.isHovered)}),e(n.elem).find("."+n.newsClassName).on("mouseenter",function(){n.onReset(!0)}),e(n.elem).find("."+n.newsClassName).on("mouseout",function(){n.onReset(!1)})}};e.fn.bootstrapNews=function(e){return this.each(function(){Object.create(o).init(e,this)})},e.fn.bootstrapNews.options={newsPerPage:4,navigation:!0,autoplay:!0,direction:"up",animationSpeed:"normal",newsTickerInterval:4e3,pauseOnHover:!0,onStop:null,onPause:null,onReset:null,onPrev:null,onNext:null,onToDo:null}}(jQuery,window,document);