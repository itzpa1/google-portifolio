
//// disable inspect mode --------------------

document.onkeydown = (e) => {
    if (e.key == 123) {
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.key == 'I') {
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.key == 'C') {
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.key == 'J') {
        e.preventDefault();
    }
    if (e.ctrlKey && e.key == 'U') {
        e.preventDefault();
    }
};

////  Title changer 

var pageTitle = document.title;

window.onload = function () {

    var attentionMessage = '*Come Back 😒!';
    var blinkEvent = null;

    document.addEventListener('visibilitychange', function (e) {
        var isPageActive = !document.hidden;

        if (!isPageActive) {
            blink();
        } else {
            document.title = pageTitle;
            clearInterval(blinkEvent);
        }
    });

    function blink() {
        blinkEvent = setInterval(function () {
            if (document.title === attentionMessage) {
                document.title = pageTitle;
            } else {
                document.title = attentionMessage;
            }
        }, 100);
    }
};


//// Share control

var share = document.getElementById('share');

share.addEventListener('click', (event)=> {
    if(navigator.share){
      navigator.share({
        title: pageTitle,
        url: window.location.href,
    })  
    } else {
        alert("Your browser doesn't Share API!")
    }
    
})
