$(window).scroll(function() {
    $('.skill, .skill-title, .skill-text').each(function() {
        const imagePos = $(this).offset().top;

        const topOfWindow = $(window).scrollTop();
        if(imagePos < topOfWindow+650) {
            $(this).addClass("fadeInLeft");
        }
    })
})
$(window).scroll(function() {
    $('.skill-worth, .skill-title .skill-text').each(function() {
        const imagePos = $(this).offset().top;

        const topOfWindow = $(window).scrollTop();
        if(imagePos < topOfWindow+650) {
            $(this).addClass("fadeInRight");
        }
    })
})
$(window).scroll(function() {
    $('.skill-work, .skill-title, .skill-text').each(function() {
        const imagePos = $(this).offset().top;

        const topOfWindow = $(window).scrollTop();
        if(imagePos < topOfWindow+650) {
            $(this).addClass("fadeInUp");
        }
    })
})
$(window).scroll(function() {
    $('.section-title').each(function() {
        const imagePos = $(this).offset().top;

        const topOfWindow = $(window).scrollTop();
        if(imagePos < topOfWindow+650) {
            $(this).addClass("fadeInUp");
        }
    })
})

$(window).scroll(function() {
    $('.mail').each(function() {
        const imagePos = $(this).offset().top;

        const topOfWindow = $(window).scrollTop();
        if(imagePos < topOfWindow+250) {
            $(this).addClass("fadeInDown");
        }
    })
})


