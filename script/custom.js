const prevButton = document.querySelector('.prev'); 
const nextButton = document.querySelector('.next'); 
const carousel = document.querySelector('.carousel');
const span = document.querySelector('.Carousel_bar span');


$(function(){ 

    $(".figure1").click(function(){
      $(".modal").fadeIn();
    });
    
    $(".back").click(function(){
      $(".modal").fadeOut();
    });
    
  });

  $(function(){ 

    $(".figure2").click(function(){
      $(".modal_2").fadeIn();
    });
    
    $(".back").click(function(){
      $(".modal_2").fadeOut();
    });
    
  });

/*지도 표시*/
  $(function(){ 

    $(".figure3").click(function(){
      $(".modal_3").fadeIn();
    });
    
    $(".back").click(function(){
      $(".modal_3").fadeOut();
    });
    
  });



/*첫번째 버튼*/ 

  $(function(){ 

    $(".label_1").click(function(){
      $(".map1").fadeIn();
    });
    
    $(".label_1").click(function(){
      $(".map2").fadeOut();
    });

    $(".label_1").click(function(){
      $(".map3").fadeOut();
    });
    
  });


/*두번째 버튼*/ 


  $(function(){ 

    $(".label_2").click(function(){
      $(".map2").fadeIn();
    });
    
    $(".label_2").click(function(){
      $(".map1").fadeOut();
    });

    $(".label_2").click(function(){
      $(".map3").fadeOut();
    });
    
  });

  /*세번째 버튼*/ 


  $(function(){ 

    $(".label_3").click(function(){
      $(".map3").fadeIn();
    });
    
    $(".label_3").click(function(){
      $(".map1").fadeOut();
    });

    $(".label_3").click(function(){
      $(".map2").fadeOut();
    });
    
  });

$('.button_item').click(function(){
  $(this).addClass('active')
  $(this).siblings().removeClass('active')

  $('.event_img').removeClass('active')
  $('#' + $(this).attr('data-alt')).addClass('active')
})

$('.sub-btn div').click(function(){
  $(this).addClass('active')
  $(this).siblings().removeClass('active')
})











let index = 0; 
prevButton.addEventListener('click', () => { 
    if (index === 0) return;
    index -= 1;
    carousel.style.transform = `translate3d(-${1223 * index}px, 0, 0)`;
}); 
nextButton.addEventListener('click', () => { 
    if (index === 2) return;
    index += 1;
    carousel.style.transform = `translate3d(-${1223 * index}px, 0, 0)`;
});

