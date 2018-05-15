var $carousel = $('#carousel ul'),
    $pagination = $('#pagination'),
    //$prev = $('#prev'),
    //$next = $('#next'),
    interval;

var LEFT_DIRECTION = 'left',
    RIGHT_DIRECTION = 'right';


function changeSlide(direction) {
    var currentDotIndex = $pagination.find('li').index($pagination.find('li.active')),
        nextDotIndex = currentDotIndex,
        lastDotIndex = $pagination.find('li').length - 1;

    switch (direction) {
        case LEFT_DIRECTION:
            moveLastSlide();
            $carousel.animate({ marginLeft: 0 }, 1000);

            if (currentDotIndex === 0) {
                nextDotIndex = lastDotIndex;
            } else {
                nextDotIndex--;
            }

            break;
        case RIGHT_DIRECTION:
            $carousel.animate({ marginLeft: "-100%" }, 1000, moveFirstSlide);

            if (currentDotIndex === lastDotIndex) {
                nextDotIndex = 0;
            } else {
                nextDotIndex++;
            }

            break;
    }

    $pagination.find('li').removeClass('active').eq(nextDotIndex).addClass('active');
}

function moveFirstSlide() {
    // var first = $('#carousel ul li').first();
    var first = $carousel.find('li').first();
    var last = $carousel.find('li').last();

    last.after(first);
    $carousel.css({ marginLeft: 0 });
}

function moveLastSlide() {
    var first = $carousel.find('li').first();
    var last = $carousel.find('li').last();

    first.before(last);
    $carousel.css({ marginLeft: "-100%" });
}

interval = setInterval(function() {
    changeSlide(RIGHT_DIRECTION);
}, 2000);

$('#carousel').hover(
    function() {
        clearInterval(interval);
    },
    function() {
        interval = setInterval(function() {
            changeSlide(RIGHT_DIRECTION);
        }, 2000);
    }
);

/*
$prev.click(function(e) {
    e.preventDefault();
    changeSlide(LEFT_DIRECTION);
});

$next.click(function(e) {
    e.preventDefault();
    changeSlide(RIGHT_DIRECTION);
});

*/