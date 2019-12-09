let projects = [
    {
        "name": "Music Visualizer",
        "href": "sound_vizualizer/index.html",
        "description": "using p5's webgl functionality to render a 3d grid. Adding Z axis. Moves Origin",
        "repo": "https://github.com/laurelmachak/p5_stuff/tree/master/sound_vizualizer"
    },

    {
        "name": "periodic table",
        "href": "periodic_table/index.html",
        "description": "TODO",
        "repo": "https://github.com/laurelmachak/p5_stuff/tree/master/periodic_table"
    },

    {
        "name": "Sine Wave",
        "href": "sine_wave/index.html",
        "description": "todo",
        "repo": "https://github.com/laurelmachak/p5_stuff/tree/master/sine_wave"
    },

    {
        "name": "Sprite Animation",
        "href": "sprite_animation/index.html",
        "description": "todo",
        "repo": "https://github.com/laurelmachak/p5_stuff/tree/master/sprite_animation"
    },

    {
        "name": "Code Craft",
        "href": "code_craft/index.html",
        "description": "todo (also tbh add instructions in code craft html)",
        "repo": "https://github.com/laurelmachak/p5_stuff/tree/master/code_craft"
    },

    {
        "name": "Vectors Attempt",
        "href": "nature_of_code/vectors/index.html",
        "description": "todo",
        "repo": "https://github.com/laurelmachak/p5_stuff/tree/master/nature_of_code/vectors"
    }


];

let projects_container = document.getElementById("projects_container");

projects.forEach(function(proj){
    var project_template = document.querySelector("#project_template");
    var project_clone = document.importNode(project_template.content, true);

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