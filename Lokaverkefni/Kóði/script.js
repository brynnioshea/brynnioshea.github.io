$(document).ready(function(){


    $('.btn-menu').click(function(){
        $('#nav1').slideToggle(400);
    });

    $(window).scroll(function(){

        if( $('html').scrollTop() > 300 ){
            
            $('#nav1').addClass('navscroll');
        } else {
            $('#nav1').removeClass('navscroll');
        }

    });




    $('#flower-right').click(PrevSlide);
    $('#flower-left').click(NextSlide);
    $('#spiral-right').click(PrevSlide);
    $('#spiral-left').click(NextSlide);
    $('#climb-right').click(PrevSlide);
    $('#climb-left').click(NextSlide);

  

    function NextSlide(){
        let $currentSlide = $('#Slider').find('figure:first');
        let width = $currentSlide.width();

        $currentSlide.animate({marginLeft: -width}, 1000, function(){
            let $lastSlide = $('#Slider').find('figure:last');
            $lastSlide.after($currentSlide);
            $currentSlide.css({marginLeft: 0});
        });
    }
    

    function PrevSlide(){
        let $currentSlide = $('#Slider').find('figure:first');
        let width = $currentSlide.width();
        let $previousSlide = $('#Slider').find('figure:last');

        $previousSlide.css({marginLeft: -width});
        $currentSlide.before($previousSlide);

        $previousSlide.animate({marginLeft: 0}, 1000);
    }
    
    

 



  
});