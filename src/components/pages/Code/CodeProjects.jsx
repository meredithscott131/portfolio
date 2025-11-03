export const CodeProjects = () => {
    
  const bookGenerator = {
        title: "Procedural Book Generator HDA [Ongoing]",
        subtitle: "Houdini, VEX, Python, Procedural Content Generation",
        github: "https://github.com/meredithscott131/BookGenerator",
        media: [
          { type: "video", src: "/assets/code/BookGenerator/Row_Loop.mp4" },
          { type: "video", src: "/assets/code/BookGenerator/Stack_Loop.mp4" },
          { type: "image", src: "/assets/code/BookGenerator/Interface.png" },
          { type: "image", src: "/assets/code/BookGenerator/Stills.png" }
        ],
        bullets: [
          "Developing a fully procedural system in Houdini to generate books with randomized dimensions, colors, and orientations for environment and prop design.",
          "Implementing parameterized controls like book width, height, rotation, and offset, enabling flexible customization and scalable asset generation.",
          "Utilizing VEX and node-based workflows to automate material variation, hue shifts, and spatial alignment using Match Size and Copy to Points nodes.",
          "Optimizing geometry instancing to ensure efficient viewport performance and seamless integration into larger procedural scene setups."
        ],
        contributors: null
  };

  const gestures = {
        title: "AR Gesture Prototype Series [Ongoing]",
        subtitle: "C#, Unity, MRTK, Microsoft HoloLens 2",
        github: "https://github.com/meredithscott131/BookGenerator",
        media: [
          { type: "image", src: "/assets/code/Image-To-Palette/interface.png" },
          { type: "video", src: "/assets/code/Image-To-Palette/dragndrop_demo.mp4" },
          { type: "video", src: "/assets/code/Image-To-Palette/saving_demo.mp4" }
        ],
        bullets: [
          "Developed a Krita docker plugin for generating color palettes from images, enhancing digital artists' workflows.",
          "Implemented functionality to load, regenerate, save, and display color palettes, including drag-and-drop image support.",
          "Managed JSON file conversion to support color palette saving and recent palette history across Krita sessions.",
          "Utilized PyQt5 and Krita’s API for a dynamic and intuitive user interface."
        ],
        contributors: null
  };
  
  const krita = {
        title: "Image to Palette Krita Plugin",
        subtitle: "Python, PyQt, Krita API",
        github: "https://github.com/meredithscott131/ImageToPalette",
        media: [
          { type: "image", src: "/assets/code/Image-To-Palette/interface.png" },
          { type: "video", src: "/assets/code/Image-To-Palette/dragndrop_demo.mp4" },
          { type: "video", src: "/assets/code/Image-To-Palette/saving_demo.mp4" }
        ],
        bullets: [
          "Developed a Krita docker plugin for generating color palettes from images, enhancing digital artists' workflows.",
          "Implemented functionality to load, regenerate, save, and display color palettes, including drag-and-drop image support.",
          "Managed JSON file conversion to support color palette saving and recent palette history across Krita sessions.",
          "Utilized PyQt5 and Krita’s API for a dynamic and intuitive user interface."
        ],
        contributors: null
      };

      const productionPlan = {
        title: "Animation Production Plan Generator",
        subtitle: "TypeScript, JavaScript, React, OpenAI API",
        github: "https://github.com/Abby-Dennin/Animation-Production-Plan-Generator",
        media: [
          { type: "image", src: "/assets/code/Production-Plan/top_view.png" },
          { type: "image", src: "/assets/code/Production-Plan/bottom_view.png" },
          { type: "video", src: "/assets/code/Production-Plan/full_demo.mp4" }
        ],
        bullets: [
          "Collaborated with a team to develop a web application that generates tailored production plans for animation students and creatives using the OpenAI API.",
          "Integrated features like CSV export, project history tracking, and custom spreadsheet styling.",
          "Interviewed capstone students to understand frustrations and improve the prototype."
        ],
        contributors: "Abby Dennin, Natasha Mishra Daas, Sophia Allen"
      };

      const raytracer = {
        title: "Raytracer",
        subtitle: "C++, OpenGL, MVC Pattern, Object-Oriented Programming",
        github: "https://github.com/meredithscott131/RayTracer",
        media: [
          { type: "image", src: "/assets/code/Raytracer/Final.png" },
          { type: "image", src: "/assets/code/Raytracer/Comparison.png" }
        ],
        bullets: [
          "Engineered a custom raytracer in C++ using vector math and OpenGL for 3D rendering.",
          "Utilized a scenegraph-based hierarchical structure with the visitor pattern for scene modeling.",
          "Implemented support for various primitive shapes, including spheres, boxes, and cylinders.",
          "Added advanced features like texture mapping, lights, shadows, transparency, and reflections.",
        ],
        contributors: "Thomas Yi"
      };

      const spirograph = {
        title: "Spirograph Animation",
        subtitle: "C++, OpenGL, MVC Pattern",
        github: "https://github.com/meredithscott131/Spirograph",
        media: [
          { type: "video", src: "/assets/code/Spirograph/Spirograph.mp4" }
        ],
        bullets: [
          "Developed an interactive spirograph animation with OpenGL that dynamically visualizes patterns using custom 2D mesh generation.",
          "Enabled real-time keyboard input to adjust circle radius and toggle curve visualization."
        ],
        contributors: null
      };

      const website = {
        title: "This Website!",
        subtitle: "JavaScript, React, CSS, HTML, Adobe Suite, Blender",
        github: "https://github.com/meredithscott131/Portfolio",
        media: [
          { type: "video", src: "/assets/code/Website/home_page.mp4" }
        ],
        bullets: [
          "Built a portfolio website showcasing programming and animation projects using JavaScript and Vite.",
          "Utilized React, Three.js, Bootstrap, and MUI for dynamic animations, 3D graphics, and interactions.",
          "Created and edited all media for the site using Adobe Suite and Blender.",
          "Deployed via GitHub Pages using GitHub Actions Workflows."
        ],
        contributors: null
      };

      const quizzy = {
        title: "\"Quizzy\" Database",
        subtitle: "Python, MySQL, REST API, Docker, Appsmith",
        github: "https://github.com/nicolesorial/quizzy",
        media: [
          { type: "image", src: "/assets/code/Quizzy/diagram.png" },
          { type: "video", src: "/assets/code/Quizzy/full_demo.mp4" }
        ],
        bullets: [
          "Conceptualized and implemented a database for a quiz platform with a team.",
          "Supported user profiles with functionality to create, edit, and delete quizzes.",
          "Managed API implementation to optimize quiz statistics retrieval and user management.",
          "Adapted backend to a local Appsmith server with sample data."
        ],
        contributors: "Nicole Sorial, Jenna Sigman"
      };
      
      const bulletJournal = {
        title: "Bullet Journal",
        subtitle: "Java, JavaFX, MVC Pattern",
        github: "https://github.com/meredithscott131/bullet-journal",
        media: [
          { type: "image", src: "/assets/code/Bullet-Journal/main_view.png" },
          { type: "image", src: "/assets/code/Bullet-Journal/start_screen.png" }
        ],
        bullets: [
          "Collaborated to create a bullet journal app supporting event/task management, ordering, file saving, and theme customization.",
          "Directed .bujo file saving using JSON conversion.",
          "Structured project with model-view-controller (MVC) pattern.",
          "Implemented JavaFX graphics using Scene Builder."
        ],
        contributors: "Aspen Tabar, Zeynep Lal Celikbilek"
      };
    
    return [bookGenerator, krita, raytracer, productionPlan, website];
}