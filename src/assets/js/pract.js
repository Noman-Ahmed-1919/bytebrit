/* eslint-disable */

import $ from 'jquery';
  function pract() {
    try{
          // Hook doAnimations on scroll, and trigger a scroll
          $(window).on("load resize scroll", function() {
            $(".frame6").each(function() {
                var windowTop = $(window).scrollTop();
                var elementTop = $(this).offset().top;
                var leftPosition = windowTop - elementTop;
                console.log("leftpos:", leftPosition)

                // Animate frame7 (right to left)
                $(this).find(".frame7").css({ 
                    right: -leftPosition <= 500 ? `${leftPosition - (leftPosition * 0.8)}%` : 1000 

                });

                // Animate frame7 (left to right)
                // $(this).find(".frame7").css({ 
                //     left: leftPosition <= 500 ? `${leftPosition - (leftPosition * 0.8)}%` : 0 
                // });
            });
        });

  
    }catch(err){
      console.log(err);
    }
      
  }

  export {pract}
  