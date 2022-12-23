$(document).ready(function(){
    var current = 0; 
    var setIntervalId;
    $('.m_btn li').eq(0).addClass('on');

    $(".m_btn li").click(function (e){
        e.preventDefault();
       
        var i = $(this).index();
        move(i);

      

    })

    $('#main_img').on({
        mouseover: function (){
            clearInterval(setIntervalId);
        },
        mouseout: function () {
            timer ()
        }
    })

    timer();
    function timer(){
       
       setIntervalId = setInterval(function (){
            var n = current + 1; 
            if (n == 3) {
            n = 0;
        }
        move(n); 
    
        },3000);
    }
    function move(i) {
     
        if(i == current) return;

         
        var currentEl =  $('.list ul li').eq(current);

       
        var nextEl = $('.list ul li').eq(i);

        currentEl.css({left : '0%'}).animate({left : '-100%'})
        nextEl.css({left : '100%'}).animate({left : '0%'})
        current = i;
      
        $('.m_btn li a').removeClass('on')
        $('.m_btn li a').eq(i).addClass('on')
    }
});