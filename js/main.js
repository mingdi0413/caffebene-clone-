// $(document).ready(function (){
//     var current = 0; 
//     var setIntervalId;
// $('.main_btn > li').eq(0).find('a').addClass('on');
//     var idx = 0;
//     console.log(idx);
// $('.main_btn > li').click(function (e) {
//     e.preventDefault();
//     var i = $(this).index();
//     console.log(i);
//     $('.main_btn > li').find('a').removeClass('on');
//     $(this).find('a').addClass('on');
//     move(i); 
//     });

//     $('.list li').on({
//         mouseover: function () {
//             clearInterval(setIntervalId);
//         },
//         mouseout: function () {
//             timer();
//         }
//     })
// })
// timer();
// function timer() {
// current = 0;
// setIntervalId = setInterval(function () {
//     var n = current + 1; 
//     if (n == 3) {
//         n = 0;
//     }

//     move(n);
// }, 5000)

// }
// function move(i) {
// if (i == current) return;

// var currentEl = $('.list li').eq(current);

// var nextEl = $('.list li').eq(i);

// currentEl.css({ top: 0 }).animate({ top: "720px" });
// nextEl.css({ top: "720px" }).animate({ top: "0" });
// current = i;

// $('.main_btn li').removeClass('on');
// $('.main_btn li').eq(i).addClass('on');
// }
