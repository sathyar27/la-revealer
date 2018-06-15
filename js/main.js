var warehouse = function(){	
	$('.clickLabel').click(function(e) {
		e.preventDefault();
		$(this).parent('div').addClass('ready');
	})
	$('.login .btn').click(function(e) {
		e.preventDefault();
		if(($('input[name="username"]').val()) == "") {
			$('.error').text("Please enter username").addClass('active');
			$('input[name="username"]').addClass('hasError');
			setTimeout(function(){$('.error').text("").removeClass('active')},1000);
		}
		else if(($('input[name="password"]').val()) == "") {
			$('.error').text("Please enter password").addClass('active');
			setTimeout(function(){$('.error').text("").removeClass('active')},1000);
			$('input[name="password"]').addClass('hasError');
		}
		else {
			$('input').removeClass("hasError")
			$('.error').text('Logged in Successfully..').addClass('active success');
			setTimeout(function(){$('.error').text("").removeClass('active success') },1000);
			setTimeout(function(){$('.login').removeClass('ready')},500);
			setTimeout(function(){$('#loginForm')[0].reset()},700);					
		}
	});
	$('.socialNav a').click(function(e) {
		e.preventDefault();
		$(this).parents('div').removeClass('ready');
	});
	$('.newsLetter .btn').click(function(e){
		e.preventDefault();
		if(($('input[name="email"]').val()) == "") {
			$('.error').text("Please enter email").addClass('active');
			$('input[name="email"]').addClass('hasError');
			setTimeout(function(){$('.error').text("").removeClass('active')},1000);
			setTimeout(function(){$('#shareForm')[0].reset()},700);					
		}
		else {																							
			$('.error').text("Y've joined..").addClass('active success');
			$('input[name="email"]').removeClass('hasError');
			setTimeout(function(){$('.error').text("").removeClass('active success')},1000);
			setTimeout(function(){$('.newsLetter').removeClass('ready')},500);
			setTimeout(function(){$('#newsForm')[0].reset()},700);					
		}
	});
}

var eyelid = function() {
	var x,y;
	$('.clickLabel').click(function(e){
		e.preventDefault();
		$(this).addClass("active");
		x = $(this);
		setTimeout(function(){x.parent('div').find('section').addClass('active'); x.addClass('inActive')},450);
	});

	$('.socialNav a').click(function(e){
		e.preventDefault();
		y = $(this);
		$(this).parents(".formGroup").find(".clickLabel, section").removeClass("active");
		setTimeout(function(){y.parents('div').find('.clickLabel').removeClass('inActive')},450);
	});	

	$('.login .btn').click(function(e){
		if(($('input[name="username"]').val()) == "") {
			$('.error').text("Please enter username").addClass('active');
			$('input[name="username"]').addClass('hasError');
			setTimeout(function(){$('.error').text("").removeClass('active')},1000);
		}
		else if(($('input[name="password"]').val()) == "") {
			$('.error').text("Please enter password").addClass('active');
			setTimeout(function(){$('.error').text("").removeClass('active')},1000);
			$('input[name="password"]').addClass('hasError');
		}
		else {
			$('input').removeClass("hasError")
			y = $(this);
			$('.error').text('Logged in Successfully..').addClass('active success');
			$(this).parents(".formGroup").find(".clickLabel, section").removeClass('active');
			setTimeout(function(){y.parents('div').find('.clickLabel').removeClass('inActive')},450);
			setTimeout(function(){$('.error').text("").removeClass('active success') },1000);
		}
	})

	$('.newsLetter .btn').click(function(e){
		if(($('input[name="email"]').val()) == "") {
			$('.error').text("Please enter email").addClass('active');
			$('input[name="email"]').addClass('hasError');
			setTimeout(function(){$('.error').text("").removeClass('active')},1000);
		}
		else {																							
			$('.error').text("Y've joined..").addClass('active success');
			$('input[name="email"]').removeClass('hasError');
			setTimeout(function(){$('.error').text("").removeClass('active success')},1000);
			y = $(this);
			$(this).parents(".formGroup").find(".clickLabel, section").removeClass('active');
			setTimeout(function(){y.parents('div').find('.clickLabel').removeClass('inActive')},450);
		}
	})
}

var burst = function(){
	var x;
	$('.clickLabel').click(function(e){
		e.preventDefault();
		$(this).addClass("active");
		//$(this).parent('div').addClass("open");
		x = $(this);
		x.parent('.newsLetter').find('.clickLabel i').text('join');
		setTimeout(function(){x.addClass('bRadius')},30);																				
		setTimeout(function(){x.parent('.formGroup').find('section').addClass('active'); 
			x.parent('div').addClass("open"); x.addClass('inActive')},350);
	});

	$('#loginForm').on('click', '.login.open i', function(e){
		if(($('input[name="username"]').val()) == "") {
			$('.error').text("Please enter username").addClass('active');
			$('input[name="username"]').focus().addClass('hasError');

			setTimeout(function(){$('.login .clickLabel').addClass('bRadius')},30);
			setTimeout(function(){$('.error').text("").removeClass('active')},1000);
		}
		else if(($('input[name="password"]').val()) == "") {
			$('.error').text("Please enter password").addClass('active');
			setTimeout(function(){$('.error').text("").removeClass('active')},1000);
			$('input[name="password"]').focus().addClass('hasError');

			setTimeout(function(){$('.login .clickLabel').addClass('bRadius')},30);
		}
		else {																											
			$('.login input').removeClass("hasError")
			$('.error').text('Logged in Successfully..').addClass('active success');
			setTimeout(function(){$('.login .clickLabel').removeClass('bRadius')},40);
			setTimeout(function(){$('.login section').removeClass('active')},360);
			$('.login .clickLabel').removeClass('active');

			setTimeout(function(){$('.login .clickLabel').removeClass('inActive')},450);

			setTimeout(function(){$('.error').text("").removeClass('active success') },1000);
			setTimeout(function(){$('#loginForm')[0].reset()},700);
			setTimeout(function(){$('.login').removeClass('open')},700);
		}
	});	

	$('#newsForm').on('click', '.open i', function(e){
		if(($('input[name="email"]').val()) == "") {
			$('.error').text("Please enter email").addClass('active');
			$('input[name="email"]').focus().addClass('hasError');
			setTimeout(function(){$('.newsLetter .clickLabel').addClass('bRadius')},30);
			setTimeout(function(){$('.error').text("").removeClass('active')},1000);
		}
		else {																							
			$('.error').text("Y've joined..").addClass('active success');
			$('input[name="email"]').removeClass('hasError');
			setTimeout(function(){$('.newsLetter .clickLabel').removeClass('bRadius')},40);
			setTimeout(function(){$('.newsLetter section').removeClass('active')},360);

			setTimeout(function(){$('.error').text("").removeClass('active success')},1000);

			$(".newsLetter .clickLabel").removeClass('active');

			setTimeout(function(){$(".newsLetter .clickLabel").removeClass('inActive')},450);

			setTimeout(function(){$('.newsLetter').removeClass('open')},700);
			setTimeout(function(){$('#newsForm')[0].reset()},700);							
		}
	});

	$('.socialNav a').click(function(e){
		e.preventDefault();
		$(".share .clickLabel,.share section").removeClass("active");

		setTimeout(function(){$('.share .clickLabel').removeClass('bRadius')},50);
		setTimeout(function(){$('.share .clickLabel').removeClass('inActive')},450);
	});
}

$(document).ready(function(){
	$('.tabs a').on('click', function(){
		$('.tabs a').removeClass('active');
		$(this).addClass('active');
	})
})