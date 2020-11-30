$(document).ready(function(){


    



    $('#cursor-right').click(PrevSlide);
    $('#cursor-left').click(NextSlide);
    

  

    function NextSlide(){
        let $currentSlide = $('#slider').find('figure:first');
        let width = $currentSlide.width();

        $currentSlide.animate({marginLeft: -width}, 1000, function(){
            let $lastSlide = $('#slider').find('figure:last');
            $lastSlide.after($currentSlide);
            $currentSlide.css({marginLeft: 0});
        });
    }
    

    function PrevSlide(){
        let $currentSlide = $('#slider').find('figure:first');
        let width = $currentSlide.width();
        let $previousSlide = $('#slider').find('figure:last');

        $previousSlide.css({marginLeft: -width});
        $currentSlide.before($previousSlide);

        $previousSlide.animate({marginLeft: 0}, 1000);
    }
    
    

 



  
});