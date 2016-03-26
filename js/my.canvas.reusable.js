(function(){
	function highlightMenu(){
	var url = $(location).attr('href');
	var arr = url.split('/');			
	var pageName = arr[arr.length-1];
	$('#primary-menu li').removeClass('current');
	$('#primary-menu li').each(function(index, element){
		var a = $(this).children();				
		if(a.attr('href') === pageName){					
			$(this).addClass('current');
		}
	});
}
window.mycan={};
window.mycan.highlightMenu = highlightMenu;

}())