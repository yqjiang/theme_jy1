/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


(function ($, Drupal, window, document, undefined) {


// To understand behaviors, see https://drupal.org/node/756722#behaviors
    Drupal.behaviors.my_custom_behavior = {
        attach: function(context, settings) {

            // Place your code here.

            var height = $(window).height();
            $('.sidebar').css("height", height);
            $(window).scroll(function() {
                rightScroll();
            });
            
            function rightScroll() {
                var wH = $(window).height(),
                        sH = $(window).scrollTop();
                var dH1 = $("#content").height();
                var dH2 = $(document).height();
                var dH = dH1 > dH2 ? dH1 : dH2;
                if ((sH + wH) > dH)
                {
                    $(".sidebar").css("margin-top", dH - wH);
                }
                else
                {
                    $(".sidebar").css("margin-top", sH);
                }

                $('.sidebar').css("height", wH);
            }
        }
};


})(jQuery, Drupal, this, this.document);