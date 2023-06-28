jQuery(document).ready(function () {
  var ventana_ancho = jQuery(window).width();

  /*open menu mobile*/
  if(ventana_ancho <= 1100){
    jQuery('.main-menu .has-submenu .submenu-toggle .icon-arrow-down').each(function() {
      jQuery(this).click(function(){
          jQuery(this).toggleClass('open');
          jQuery(this).parent().parent().find('.submenu-content').slideToggle();
      });
    });
  }

  /*open menu*/
  jQuery('.toggle-mobile').click(function(){
    jQuery('.home-page').removeClass("header-white");
    jQuery(this).toggleClass('opened');
    jQuery('header .main-menu .menu-list').toggleClass('open');
  });

  /*scroll background home menu*/
  var scrollTop = jQuery(window).scrollTop();
  if (scrollTop > 100){  
      jQuery('.home-page').removeClass("header-white");
  }
  else{
      jQuery('.home-page').addClass("header-white");
  }
  jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() > 100){  
        jQuery('.home-page').removeClass("header-white");
    }
    else{
        jQuery('.home-page').addClass("header-white");
    }
  });

  /*scroll to section projects*/
  jQuery('.banner-search__bottom .arrow-bottom').click(function(){
    jQuery('html,body').animate({
      scrollTop: jQuery("#projects").offset().top - 200
    }, 'slow');
  });

  /*scroll to page top*/
  jQuery('.scroll-top').click(function(){
    jQuery('html,body').animate({
      scrollTop: jQuery("html").offset().top
    }, 'slow');
  });


  /*modal detail gallery*/ 
  var sliders = jQuery('.top-gallery').html();
  jQuery('#modalTopGallery .gallery-item .slider-tab').html(sliders);

  /*slider top-gallery*/
  jQuery('.detail-element .top-gallery').each(function() {
    jQuery(this).slick({
        arrows: true,
        dots:false,
        infinite:true,
        slidesToShow: 1,
        variableWidth: true
    });
  }); 


  jQuery('.top-gallery .show-zoom').each(function(){
    jQuery(this).click(function(){
      var index = jQuery(this).attr("data-index");
      jQuery('#modalTopGallery .slider-tab').slick('slickGoTo', index);
    });
  }) 

  /*carrusel home*/ 
  jQuery('.banner-search .images').slick({
    arrows: true,
    dots:false,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          arrows:false
        },
      },
    ]
  });
  

  /*carrusel products*/
  jQuery(".intercalate__success .container").slick({
      arrows: true,
      dots:true,
      infinite:false,
      slidesToShow: 1,
      slidesToScroll: 1
  });

  /*carrusel blog*/
  jQuery(".blog .gallery").slick({
      arrows: true,
      dots:true,
      infinite:true,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true
  });

  /*open form fixed lateral*/
  jQuery(".fixedform .fixedform__title").click(function(){
      jQuery(this).toggleClass('open');
      jQuery(".fixedform").toggleClass('open');
  });

  /*Accordions*/
  jQuery(".accordions .item__header").click(function(){
    jQuery(this).toggleClass('open');
    jQuery(this).parent().find(".item__content").slideToggle();
  });

  /*submenu faq*/
  var text = "SELECCIONAR";
  jQuery(".filter-menu .toggle-faq").click(function(){
    jQuery(this).toggleClass('open');
    jQuery('.filter-menu .submenu').slideToggle();
  });

  jQuery(".filter-menu .submenu li").each(function(){
    jQuery(this).click(function(){
      text = jQuery(this).text();
      var selected = jQuery(this).attr('data-selected');
      jQuery('.accordions').addClass('fade-item');
      jQuery('#' + selected).removeClass('fade-item');
      jQuery(".filter-menu .toggle-faq").text(text);
      jQuery('.filter-menu .submenu').slideUp();
    });
  })



  

  /*carrusel main history*/
  jQuery(".main-slider .main-slider__content").slick({
    arrows: true,
    dots:false,
    infinite:true,
    slidesToShow: 1,
    centerMode: false,
    variableWidth: true,
    prevArrow: '.left-arrow',
    nextArrow: '.left-right'
  });

  /*carrusel intercalated*/
  jQuery(".slider-intercalate .item__slider").each(function() {
      jQuery(this).find(".item__right").slick({
          arrows: true,
          dots:false,
          infinite:true,
          slidesToShow: 1,
          variableWidth: true,
          asNavFor: jQuery(this).find('.item__texts')
      });

      jQuery(this).find(".item__texts").slick({
        arrows: false,
        dots:true,
        infinite:true,
        slidesToShow: 1,
        appendDots: jQuery(this).find('.slick-slider-dots'),
        asNavFor: jQuery(this).find('.item__right')
      });
  });

  /*slider detail*/ 
  jQuery('.slider-detail').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider-detail-nav'
  });

  jQuery('.slider-detail-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-detail',
    dots: true,
    focusOnSelect: true
  });

  jQuery('.slider-tab').each(function() {
      jQuery(this).slick({
          arrows: true,
          adaptiveHeight: true,
          dots:true,
          infinite:true,
          slidesToShow: 1
      });
  });

  jQuery('body').scrollspy({ target: '#nav-bar-spy' });

  /*refresh slicks in tab*/
  jQuery('a[data-toggle="tab"]').on('shown.bs.tab', function() {   
    jQuery('.slider-tab').slick('refresh');
  }).first().trigger('shown.bs.tab');

  /*refresh slicks in modals*/ 
  jQuery('.modal').on('shown.bs.modal', function (e) {
    jQuery('.slider-detail').slick('refresh');
    jQuery('.slider-detail-nav').slick('refresh');
    jQuery('.slider-tab').slick('refresh');
  });

  /*scroll to page slow*/
  jQuery('#nav-bar-spy a').click(function(){
    var link = jQuery(this).attr('href');
    jQuery('html,body').animate({
      scrollTop: jQuery(link).offset().top + 100
    }, 'slow');
  });

});

$( document ).ready(function() {
  $("#block-3").css("display", "none");
});

setTimeout(function() {$("#block-3").css("display", "none");}, 3000);

$('#entry-title').html('Lo siento');
