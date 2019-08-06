(function($) {
    // Variables
    let $projects = $(".projects"); // Project container
    let $project  = $(".project");  // individual project
    let $projectImageBefore = CSSRulePlugin.getRule(".project-image:before"); // decoration
    let $projectImageAfter = CSSRulePlugin.getRule(".project-image:after");   // decoration
    let tlProjects, tlProject; // tl mean timeline

        let projectClass = $project.attr("class").split(' ')[1]; // the attr() function get the attributes of the $project element. => log>"project01"

        let $pixel = $project.find(".pixel"); // get every pixel class in DOM in array
        let $pixels = $project.find(".project-pixels"); // get the pixel container
        let $projectTitle = $project.find(".project-title");
        let $projectSubtitle = $project.find(".project-subtitle");
        let $projectImage = $project.find(".project-image");

    // Create a new TimelineMax
    /*
        params :
                repeat      =>  -1 mean repeat infinitely.
                repeatDelay =>   is a delay between 2 animation.
    */
    tlProject = new TimelineMax({repeat: -1, repeatDelay: 2});


    // Create a project timeline
    /*
        Info/Utils => // Ease Visualizer https://greensock.com/ease-visualizer
        * fromTo()
        params :
              $projectImage => domElement
              0.5           => speed of animation move.
              autoAlpha     => visibility of image when the animation start.
              xPercent      => the point of start displacement of the element about to its X origin axis.
              YPercent      => the point of start displacement of the element about to its Y origin axis.
              Ease          => the animation effect see https://greensock.com/ease-visualizer.
              last argument => is the time between each animation is can be positive or negative number
        tips:
              .set([$projectTitle,$projectSubtitle,$pixel], {autoAlpha: 0}) => autoAlpha: 0 is mean set element invisible
    */
    /*
        * staggedFromTo()
              simply loops through the targets array elements and creates a fromTo()
              tween for each object and then inserts it at the appropriate place

    */
    /*
        * add()
            function add("label") is like a
            https://greensock.com/docs/TimelineMax/add
    */
    tlProject
        .set([$projectTitle,$projectSubtitle,$pixel], {autoAlpha: 0}) // IMPORTANT: autoAlpha: 0 is mean set element invisible when the application start
        .fromTo($projectImage, 0.4,{autoAlpha: 0, xPercent: "-200"},{autoAlpha: 1, xPercent: "-10", ease: Power4.easeInOut})
        .add("imageIn") // add label just after the precedent animation is finish
        .staggerFromTo($pixel, 0.3, {autoAlpha: 0, xPercent: "-=10"}, {autoAlpha: 1, x: "0", ease: Power4.easeInOut}, 0.02, "-=0.2") //0.02 is the time defined between every pixel animation and "-=0.2" is the time when defined for the pixel appear just after $projectImage
        .add("pixelsIn")
        .fromTo($projectTitle, 0.7, {autoAlpha: 0, xPercent: "-50"}, {autoAlpha: 1, xPercent: "-5", ease:  Power4.easeInOut, x: 0}, "-=0.4")
        .fromTo($projectSubtitle, 0.7, {autoAlpha: 0, xPercent: "-50"}, {autoAlpha: 1, xPercent: "-2", ease: Power4.easeInOut}, "-=0.5")
        .add("titleIn")
        .to($projectTitle, 4.3, {xPercent: "+=5", ease: Linear.easeNone}, "titleIn-=0.1")     // "titleIn-=0.1" mean this tween happen 0.1 second earlier before .add("titleIn") is defined
        .to($projectSubtitle, 4.3, {xPercent: "+=2", ease: Linear.easeNone}, "titleIn-=0.2") // "titleIn-=0.1" mean this tween happen 0.1 second earlier before .add("titleIn") is defined
        .add("titleOut")
        .to($projectImage,3 , {xPercent: "+=10", ease: Linear.easeNone}, "imageIn") // start to slide to the right at the moment when the label "imageIn" is defined
        .add("imageOut")
        .to($pixels, 3, {x: "-15", ease:Linear.easeNone}, "pixelsIn") // start to slide to the left at the moment when the label "pixelIn" is defined
        .to([$projectTitle, $projectSubtitle], 0.5, {autoAlpha: 0, xPercent: "+=10", ease: Power4.easeInOut},"titleOut") // manipulate two element with an array
        .to($projectImage, 0.4, {autoAlpha: 0, xPercent: "+=80", ease: Power4.easeInOut},"imageOut"); // manipulate two element with an array
})(jQuery);
