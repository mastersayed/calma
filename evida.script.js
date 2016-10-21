$(document).ready(function() { 
   $("#sliderplus").carouFredSel({
	  auto : true,
	  scroll  : 2,
	  prev : "#sliderplus_prev",
	  next : "#sliderplus_next"
    });
   $("#sliderplus2").carouFredSel({
	  auto : true,
	  scroll  : 2,
	  prev : "#sliderplus1_prev",
	  next : "#sliderplus1_next"
    });

});

jQuery(document).ready(function() {  
	var menu = $('#header'),
		pos = menu.offset();
		
		$(window).scroll(function(){
			if($(this).scrollTop() > pos.top+menu.height() && menu.hasClass('default')){
				menu.fadeOut('fast', function(){
					$(this).removeClass('default').addClass('fixed').fadeIn('fast');
				});
			} else if($(this).scrollTop() <= pos.top && menu.hasClass('fixed')){
				menu.fadeOut('fast', function(){
					$(this).removeClass('fixed').addClass('default').fadeIn('fast');
				});
			}
		});

});



jQuery(document).ready(function() {  
         
			//Search form
			jQuery(".search_header .search_input").focusin(function(){
				jQuery(this).animate({"width" : "230"}, "fast");
			});
			jQuery(".search_header .search_input").focusout(function(){
				jQuery(this).animate({"width" : "70"}, "fast");
			});
});

$(document).ready(function() { 
	$('#social-01').tipsy({gravity: 'n'});
	$('#social-02').tipsy({gravity: 'n'});
	$('#social-03').tipsy({gravity: 'n'});
	$('#social-04').tipsy({gravity: 'n'});
	$('#social-05').tipsy({gravity: 'n'});
	$('#social-06').tipsy({gravity: 'n'});
	$('#user-01').tipsy({gravity: 'n'});
	$('#user-02').tipsy({gravity: 'n'});
	$('#user-03').tipsy({gravity: 'n'});
	$('#user-04').tipsy({gravity: 'n'});

	$('.i-lastdate').tipsy({gravity: 'n'});
	$('.i-lastpost').tipsy({gravity: 'n'});
	$('.down-typ').tipsy({gravity: 'n'});
		
	$('#sec-but').tipsy({gravity: 'n'});
	$('#signout').tipsy({gravity: 'e'});

});
