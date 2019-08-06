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
              last argument => is the time between each animation
        tips:
              .set([$projectTitle,$projectSubtitle,$pixel], {autoAlpha: 0}) => autoAlpha: 0 is mean set element invisible
    */
    /*
        * staggedFromTo()
              simply loops through the targets array and creates a fromTo()
              tween for each object and then inserts it at the appropriate place

    */
    tlProject
        .set([$projectTitle,$projectSubtitle,$pixel], {autoAlpha: 0}) // autoAlpha: 0 is mean set element invisible
        .fromTo($projectImage, 1,{autoAlpha: 0, xPercent: "-200"},{autoAlpha: 1, xPercent:"-10", ease: Power4.easeInOut}, 0)
        .add("imageIn") // add label just after the the precedent animation is finish
        .staggerFromTo($pixel, 0.2, {autoAlpha: 0, xPercent: "-=10"}, {autoAlpha: 1, x: "0", ease: Bounce.easeInOut, x: -10}, 0.20)
})(jQuery);
