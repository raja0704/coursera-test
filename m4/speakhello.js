( function (window) {
    var helloSpeaker = {};
    helloSpeaker.speak = function (names) {
        console.log("hello" + " "+ names);
    }
    window.helloSpeaker = helloSpeaker;
}

)(window);