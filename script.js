$(document).ready(function() {
    // Hide the loading screen after 3 seconds
    setTimeout(function() {
        $('#loading').fadeOut('slow');
    }, 3000);

    // Smooth scrolling for anchor links
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();
        var target = this.hash;
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 800, function() {
            window.location.hash = target;
        });
    });

    // Add animation classes to sections on scroll
    $(window).on('scroll', function() {
        $('.animate__animated').each(function() {
            if ($(this).isInViewport()) {
                $(this).addClass('animate__fadeIn');
            }
        });
    });

    // Check if element is in viewport
    $.fn.isInViewport = function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
        return elementBottom > viewportTop && elementTop < viewportBottom;
    };
});
