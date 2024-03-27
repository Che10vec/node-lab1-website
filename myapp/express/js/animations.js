document.addEventListener("DOMContentLoaded", function() {
    // Animation 1: Slide in from left for band members(and apparently for a tour locations)
    var bandMembers = document.querySelectorAll(".w3-third");
    bandMembers.forEach(function(member) {
        member.style.opacity = 0;
        member.style.transform = "translateX(-50px)";
        member.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    });

    window.addEventListener("scroll", function() {
        bandMembers.forEach(function(member) {
            var scrollPosition = window.scrollY + window.innerHeight;
            var bandSection = member.offsetTop + member.clientHeight;
            if (scrollPosition > bandSection) {
                member.style.opacity = 1;
                member.style.transform = "translateX(0)";
            }
        });
    });

    // Animation 2: Button inflation when hover over
    var buttons = document.querySelectorAll(".w3-button");
    buttons.forEach(function(button) {
        button.addEventListener("mouseenter", function() {
            button.style.transform = "scale(1.1)";
            button.style.transition = "transform 0.5s ease";
        });
        button.addEventListener("mouseleave", function() {
            button.style.transform = "scale(1)";
            button.style.transition = "transform 0.5s ease";
        });
    });


    // Animation 3: Fade in for contact information
    var contactInfo = document.querySelectorAll("#contact .w3-col");
    contactInfo.forEach(function(info) {
        info.style.opacity = 0;
        info.style.transition = "opacity 1s ease";
    });

    window.addEventListener("scroll", function() {
        contactInfo.forEach(function(info) {
            if (isElementInViewport(info)) {
                info.style.opacity = 1;
            }
        });
    });

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
});
