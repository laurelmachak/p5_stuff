let projects = [
    {
        "name": "Music Visualizer",
        "href": "sound_vizualizer/index.html",
        "description":
            "A 3d music visualization of a song's frequencies, mapped to a grid. This project uses webgl and p5's Audio library. (DESKTOP ONLY)",
        "repo": "https://github.com/laurelmachak/p5_stuff/tree/master/sound_vizualizer",
        "img": "pics/music_vizualizer.png"
    },

    {
        "name": "Floating Particles",
        "href": "floating_particles/index.html",
        "description":
            "Based on CodePen user @mamboleoo's 'How To Tutorial': 'Connected Vertices'",
        "repo": "https://github.com/laurelmachak/p5_stuff/tree/master/floating_particles",
        "img": "pics/floating_particles.png"
    },

    {
        "name": "Periodic Table",
        "href": "periodic_table/index.html",
        "description":
            "An interactive periodic table drawn from a set of json data. You can click on each element to display it's name in the output below. I am planning on displaying the descriptions in that output as well.",
        "repo": "https://github.com/laurelmachak/p5_stuff/tree/master/periodic_table",
        "img": "pics/periodic_table.png"
    },

    {
        "name": "Sine Wave",
        "href": "sine_wave/index.html",
        "description":
            "A simple animation where a group of circles move along a sine wave. This is one of my first attempts at using tranformations, and learning p5's push and pop methods to move the origin for each circle.",
        "repo": "https://github.com/laurelmachak/p5_stuff/tree/master/sine_wave",
        "img": "pics/sine_wave.png"
    },

    {
        "name": "Sprite Animation",
        "href": "sprite_animation/index.html",
        "description":
            "A set of re-usable scripts and classes to load and use a sprite sheet.",
        "repo": "https://github.com/laurelmachak/p5_stuff/tree/master/sprite_animation",
        "img": "pics/sprite_animation.png"
    },

    {
        "name": "Code Craft",
        "href": "code_craft/index.html",
        "description": 
        "A tiny grid based game where you collect resources! Resources are randomly placed on the grid on each load.",
        "repo": "https://github.com/laurelmachak/p5_stuff/tree/master/code_craft",
        "img": "pics/code_craft.png"
    },

    {
        "name": "Follow the Mouse",
        "href": "nature_of_code/vectors/index.html",
        "description": 
        "A little dot follows the mouse using the p5Vector object.",
        "repo": "https://github.com/laurelmachak/p5_stuff/tree/master/nature_of_code/vectors",
        "img": "pics/vectors.png"
    },
    {
        "name": "Snap to Grid",
        "href": "snap_to_grid/index.html",
        "description": 
        "A set of reusable scripts that allow you to build drag and drop interfaces that snap an object to a grid of specified unit size.",
        "repo": "https://github.com/laurelmachak/p5_stuff/tree/master/snap_to_grid",
        "img": "pics/snap_to_grid.png"
    },

    {
        "name": "Mini Paint",
        "href": "mini_paint/index.html",
        "description": "a tiny paint program",
        "repo": "https://github.com/laurelmachak/p5_stuff/tree/master/mini_paint",
        "img": "pics/mini_paint.png"
    },

    {
        "name": "Flower Generator",
        "href": "flower_generator/index.html",
        "description": "Generates random flower shapes where mouse is clicked",
        "repo": "https://github.com/laurelmachak/p5_stuff/tree/master/flower_generator",
        "img": "pics/flower_generator.png"
    }

];

let projects_container = document.getElementById("projects_container");

projects.forEach(function (proj) {
    var project_template = document.querySelector("#project_template");
    var project_clone = document.importNode(project_template.content, true);

    var project_screenshot = project_clone.querySelector('.project_screenshot');
    project_screenshot.setAttribute('src', proj.img);

    var demo_link = project_clone.querySelector(".demo_link");
    demo_link.setAttribute("href", proj.href);

    var repo_link = project_clone.querySelector(".repo_link");
    repo_link.setAttribute("href", proj.repo);

    var project_title = project_clone.querySelector('.project_title');
    project_title.textContent = proj.name;

    var project_description = project_clone.querySelector('.project_description');
    project_description.textContent = proj.description;

    projects_container.appendChild(project_clone);

})