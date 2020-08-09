(function (window) {
    var byeSpeaker = {};
    byeSpeaker.speak = function (names) {
        console.log("Goodbye "+ " " +names);
    }
    window.byeSpeaker = byeSpeaker;
})(window);