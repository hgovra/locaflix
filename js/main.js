const generateShows = () => {
    for (i = 0; i <= $('.sub-section').length; i++) {
        let section = $('.sub-section:eq(' + i + ')');

        for (j = 0; j <= 11; j++) {
            let randNumber = Math.floor(Math.random() * 18) + 1;
            let finalNumber = ('0' + randNumber).slice(-2);

            let gen = '<div class="show"><img src="img/shows/' + finalNumber + '.jpg" alt=""></div>';

            section.find('.owl-carousel').append(gen);
        }
    }
};

$(window).on('load', function() {
    let startGen = new Promise((resolve) => {
        resolve(
            generateShows()
        );
    });

    startGen.then(function() {
        $('.owl-carousel').owlCarousel({
            margin: 20,
            loop: true,
            dots: false,
            responsive: {
                0: {
                    items: 6
                }
            }
        });
    })
});

$(window).on('load scroll', function() {
    if ($(this).scrollTop() > 10) {
        $('#header>.header-scroll').fadeIn(200)
    } else {
        $('#header>.header-scroll').fadeOut(200);
    }
});