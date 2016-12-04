$( document ).ready(function() {

    TweenLite.defaultEase = Linear.easeNone;
    var tl = new TimelineLite()
    
    var speedOptions = [13,14,15,16,17,18,19,20,21,22,23,24];
    var yOptions = [1150, 1200];
    var xOptions = [200, 320, 430, 740, 950, 160, 1270, 180, 590, 600, 710, 220, 130, 240, 900, 800 ];
    var delayOptions = [0, 1, 2, 3, 4, 5, 6, 8, 8, 10];

    function getRandom(myArray){
        var rand = myArray[Math.floor(Math.random() * myArray.length)];
        return rand;
    }

    // DAPINEAPPLE
    for (i = 0; i < 5; i++) {
        $('#container').append('<img class="slice" src="img/pineapple-slice.png"/>');
        $('#container').append('<img class="spin" src="img/pineapple-slice.png"/>');
        $('#container').append('<img class="cocktail" src="img/cocktail.png"/>');
    }

    for (i = 0; i < 5; i++) {
        $('#container').append('<img class="pineapple" src="img/pineapple.png"/>');
        $('#container').append('<img class="big-pineapple" src="img/pineapple.png"/>');
    }

    for (i = 0; i < 1; i++) {
        $('#container').append('<img class="garmin" src="img/garm.png"/>');
    }

    $('.pineapple, .slice, .cocktail, .big-pineapple, .spin').each(function( index ) {
        var randomNum = getRandom(xOptions);
        var delay = getRandom(delayOptions);
        $( this ).css('left', randomNum);
        tl.to(this, getRandom(speedOptions), {y:0, repeat:-1, yoyo:false})
            .to(this, getRandom(speedOptions), {y:getRandom(yOptions), repeat:-1, yoyo:false}, delay)
    });

     $('.spin').each(function( index ) {
        var randomNum = getRandom(xOptions);
        var delay = getRandom(delayOptions);
        $( this ).css('left', randomNum);
        tl.to(this, getRandom(speedOptions), {y:0, repeat:-1, yoyo:false})
            .to(this, getRandom(speedOptions), {rotation: 180, y:getRandom(yOptions), repeat:-1, yoyo:false, }, delay)
    });

    $('.garmin').each(function( index ) {
        var randomNum = getRandom(xOptions);
        var delay = getRandom(delayOptions);
        $( this ).css('left', randomNum);
        tl.to(this, getRandom(speedOptions), {y:0, repeat:1, yoyo:false})
        .to(this, getRandom(speedOptions), {y:getRandom(yOptions), repeat:5, yoyo:false}, 30)
    });
});
