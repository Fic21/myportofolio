// event pada saat link di klik
$('.page-scroll').on('click', function(e){
	// console.log('ok');

// ambil isi href
	var tujuan = $(this).attr('href');
	// console.log(href);


 //tangkap element ybs 
	var elementTujuan = $(tujuan);
	// console.log(elementTujuan.offset().top);
	// console.log($('html,body').scrollTop());

//pindahkan scroll
	$('html,body').animate({
		scrollTop: elementTujuan.offset().top-50
	}, 1000,'easeInOutExpo'); //ada dua effek swing dan linier dari jquery..kalau bosan kita bisa pake transisi yang lain buka aa website query easig link: gsgd.com
	e.preventDefault();
});

// carousel interval
$('.carousel').carousel({
  interval: 4000
});
//akhir carousel interval

// //mengeksekusi ketika pertamakali load
// $(window).on('load',function(){
// 	$('.pKiri').addClass('pMuncul');
// 	$('.pKanan').addClass('pMuncul');
// });

//scroll
$(window).scroll(function(){
	var wScroll = $(this).scrollTop();
	$('.jumbotron img').css({
		'transform' :'translate(0px,'+wScroll/4+'%)'
	});

	$('.jumbotron h1').css({
		'transform' :'translate(0px,'+wScroll/2+'%)'
	});

	$('.jumbotron p').css({
		'transform' :'translate(0px,'+wScroll/1.5+'%)'
	});

	//portfolio
	if (wScroll>$('.work').offset().top-150){
		$('.work .thumbnail').each(function(i){
			setTimeout(function(){
				$('.work .thumbnail').eq(i).addClass('muncul');
				}, 300 * (i+1));
		});	
	}
	//about
	if (wScroll>$('.galeri').offset().top-100){
		$('.galeri').addClass('galeriMuncul');
	}
	if (wScroll>$('.about').offset().top-100){
		$('.pKiri').addClass('pMuncul');
		$('.pKanan').addClass('pMuncul');
	}
	if (wScroll>$('.skills').offset().top-100){
		$('.pSkills').addClass('pSkillsMuncul');
	}
		if (wScroll>$('.progress1').offset().top-170){
			$('.progress1').addClass('progress1Muncul');
		}
		if (wScroll>$('.progress2').offset().top-130){
			$('.progress2').addClass('progress2Muncul');
		}
		if (wScroll>$('.progress3').offset().top-170){
			$('.progress3').addClass('progress3Muncul');
		}
		if (wScroll>$('.progress4').offset().top-130){
			$('.progress4').addClass('progress4Muncul');
		}
		if (wScroll>$('.progress5').offset().top-170){
			$('.progress5').addClass('progress5Muncul');
		}
		if (wScroll>$('.progress6').offset().top-130){
			$('.progress6').addClass('progress6Muncul');
		}
		if (wScroll>$('.progress7').offset().top-170){
			$('.progress7').addClass('progress7Muncul');
		}
		if (wScroll>$('.progress8').offset().top-130){
			$('.progress8').addClass('progress8Muncul');
		}
		if (wScroll>$('.progress9').offset().top-170){
			$('.progress9').addClass('progress9Muncul');
		}
		if (wScroll>$('.progress10').offset().top-130){
			$('.progress10').addClass('progress10Muncul');
		}
	if (wScroll>$('.panel-group').offset().top-700){
		$('.panel-group').addClass('panel-groupMuncul');
	}
	if (wScroll>$('.experience1').offset().top-150){
		$('.experience1').addClass('experience1Muncul');
	}
	if (wScroll>$('.experience2').offset().top-150){
		$('.experience2').addClass('experience2Muncul');
	}
	if (wScroll>$('.experience3').offset().top-150){
		$('.experience3').addClass('experience3Muncul');
	}
	if (wScroll>$('.exli1').offset().top-150){
		$('.exli1').addClass('exli1Muncul');
	}
	if (wScroll>$('.exli2').offset().top-150){
		$('.exli2').addClass('exli2Muncul');
	}
	if (wScroll>$('.exli3').offset().top-150){
		$('.exli3').addClass('exli3Muncul');
	}


});




