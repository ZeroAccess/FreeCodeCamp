/**
 * Created by robertsg on 2/3/2016.
 */
$(window).load(function(){
    $('#myCarousel').bind('mousewheel', function(e){
        if(e.originalEvent.wheelDelta /120 > 0) {
            $(this).carousel('prev');
        }
        else{
            $(this).carousel('next');
        }
    });
});
