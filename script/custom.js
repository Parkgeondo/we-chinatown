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

  $(function(){ 

    $(".figure3").click(function(){
      $(".modal_3").fadeIn();
    });
    
    $(".back").click(function(){
      $(".modal_3").fadeOut();
    });
    
  });


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

