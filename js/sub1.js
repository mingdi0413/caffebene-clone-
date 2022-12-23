$(document).ready(function (){
        var current = 0; 
        var setIntervalId;

        $('.btn > li').eq(0).find('a').addClass('on');
            var idx = 0;
            console.log(idx);
        $('.btn > li').click(function (e) {
            e.preventDefault();
            var i = $(this).index();
            console.log(i);
            // $('.btn > li').find('a').removeClass('on');
            // $(this).find('a').addClass('on');
            move(i); 
            });

        $('.slides').on({
            mouseover: function () {
                clearInterval(setIntervalId);
            },
            mouseout: function () {
                timer();
            }
        })


        timer();
        function timer() {
            current = 0;
            setIntervalId = setInterval(function () {
                var n = current + 1; 
                if (n == 4) {
                    n = 0;
                }

                move(n);
            }, 4000)

        }

        function move(i) {
            if (i == current) return;

            var currentEl = $('.slides li').eq(current);

            var nextEl = $('.slides li').eq(i);

            currentEl.css({ top: 0 }).animate({ top: "-820px" });
            nextEl.css({ top: "820px" }).animate({ top: "0" });
            current = i;

            $('.btn li').removeClass('on');
            $('.btn li').eq(i).addClass('on');
        }




        
})

