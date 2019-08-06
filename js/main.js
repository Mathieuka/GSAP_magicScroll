(function($) {
    // Variables
    let $projects = $(".projects"); // Project container
    let $project  = $(".project");  // individual project
    let $projectImageBefore = CSSRulePlugin.getRule(".project-image:before"); // decoration
    let $projectImageAfter = CSSRulePlugin.getRule(".project-image:after");   // decoration
    let tlProjects, tlProject; // tl mean timeline
        tlProject = new TimelineMax({repeat: -1, repeatDelay: 2}); // repeat: -1 mean repeat infinitely.

        let projectClass = $project.attr("class").split(' ')[1]; // the attr() function get the attributes of the $project element. => log>"project01"

        let $pixel = $project.find(".pixel"); // get every pixel class in DOM in array
        let $pixels = $project.find(".project-pixels"); // get the pixel container
        let $projectTitle = $project.find(".project-title");
        let $projectSubtitle = $project.find(".project-subtitle");
        let $projectImage = $project.find(".project-image");

    // Create a project timeline
    /*
        params :
              $projectImage => domElement
              0.5           => speed of animation move
              autoAlpha     => visibility of image when the animation start
              xPercent      => the point of start displacement of the element about to its X axis origin

    */
    tlProject.fromTo($projectImage, 0.5, {autoAlpha: 0, xPercent: "-200", yPercent: "-100"}, {autoAlpha: 1, xPercent:"-10", yPercent: "-20"})
    tlProject.fromTo($projectImage, 0.5,  {autoAlpha: 1, xPercent:"-10", yPercent: "-20"}, {autoAlpha: 0, xPercent: "-200", yPercent: "-100"})

})(jQuery);
