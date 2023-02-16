$(document).ready(function (){
	
	$('#aboutapp-button').on('click', function (){
		$.mobile.navigate('#aboutapp')	
	})	
	$('#dev-button').on('click', function (){
		$.mobile.navigate('#developers')	
	})
	$('#instruct-button').on('click', function (){
		$.mobile.navigate('#instruct')	
	})
	$('.home-button').on('click', function (){
		$.mobile.navigate('#home')	
	})
	$('#firstaid-button').on('click', function (){
		$.mobile.navigate('#firstaid')	
	})
	$('#next').on('click', function (){
		$.mobile.navigate('#doctoradvice')	
	})
	$('#back1').on('click', function (){
		$.mobile.navigate('#results')	
	})
	$('#back2').on('click', function (){
		$.mobile.navigate('#firstaid')	
	})	

})