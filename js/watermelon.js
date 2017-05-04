$(document).ready(function() {

    TweenLite.defaultEase = Linear.easeNone;
    var tl = new TimelineLite()

    var speedOptions = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
    var yOptions = [1150, 1200];
    var xOptions = [200, 320, 430, 740, 950, 160, 1270, 180, 590, 600, 710, 220, 130, 240, 900, 800];
    var delayOptions = [0, 1, 2, 3, 4, 5, 6, 8, 8, 10];

    // Append the objects
    for (i = 0; i < 5; i++) {
        $('#container').append('<img class="watermelon" src="img/watermelon.png"/>');
        $('#container').append('<img class="watermelon spin" src="img/watermelon.png"/>');
        $('#container').append('<img class="taurus" src="img/taurus.png"/>');
        $('#container').append('<img class="rose spin" src="img/rose.png"/>');
    }

    // Append the garmin
    for (i = 0; i < 1; i++) {
        $('#container').append('<img class="garmin" src="img/garm.png"/>');
    }

    function getRandom(myArray) {
        var rand = myArray[Math.floor(Math.random() * myArray.length)];
        return rand;
    }

    function animateObjects(targets){
        $(targets).each(function(index) {
            var randomNum = getRandom(xOptions);
            var delay = getRandom(delayOptions);
            $(this).css('left', randomNum);
            tl.to(this, getRandom(speedOptions), { y: 0, repeat: -1, yoyo: false })
                .to(this, getRandom(speedOptions), { y: getRandom(yOptions), repeat: -1, yoyo: false }, delay)
        });
    }

    animateObjects('.watermelon, .taurus, .rose, .spin');

    $('.spin').each(function(index) {
        var randomNum = getRandom(xOptions);
        var delay = getRandom(delayOptions);
        $(this).css('left', randomNum);
        tl.to(this, getRandom(speedOptions), { y: 0, repeat: -1, yoyo: false })
            .to(this, getRandom(speedOptions), { rotation: 180, y: getRandom(yOptions), repeat: -1, yoyo: false, }, delay)
    });

    $('.garmin').each(function(index) {
        var randomNum = getRandom(xOptions);
        var delay = getRandom(delayOptions);
        $(this).css('left', randomNum);
        tl.to(this, getRandom(speedOptions), { y: 0, repeat: 1, yoyo: false })
            .to(this, getRandom(speedOptions), { y: getRandom(yOptions), repeat: 5, yoyo: false }, 30)
    });
});
