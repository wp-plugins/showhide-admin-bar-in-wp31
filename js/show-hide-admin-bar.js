jQuery(document).ready(
	function(){
		jQuery("#wpadminbar").css({'top':'-28px'}).append("<a class='showbar' href='#'><span>Show</span> Admin Bar</a>");
		jQuery(".showbar").css({'position':'absolute', 'top':'28px', 'right':'218px', 'width':'107px', 'text-align':'center', 'line-height':'22px', 'background':'#666666', 'color':'#ffffff'});
		jQuery(".hidebar").live('click',
			function(e){
				e.preventDefault();
				jQuery("#wpadminbar").stop(true, true).animate({'top':'-28px'}, 'slow');
				jQuery(this).removeClass("hidebar").addClass("showbar");
				jQuery(this).children('span').text('Show');
			}
		);
		jQuery(".showbar").live('click',
			function(e){
				e.preventDefault();
				jQuery("#wpadminbar").stop(true, true).animate({'top':'0px'}, 'slow');
				jQuery(this).removeClass("showbar").addClass("hidebar");
				jQuery(this).children('span').text('Hide');
			}
		);
	}
);