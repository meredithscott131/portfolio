import styles from "./Code.module.css";

export const CodeProjects = () => {

  const racereplay = {
    title: "Race Replay [Ongoing]",
    subtitle: "TypeScript, React, Python, FastF1 API, Product Design",
    github: "https://github.com/meredithscott131/f1-race-replay/tree/react-setup",
    media: [
      { type: "image", src: "/assets/code/RaceReplay/Screenshot.png" }
    ],
    bullets: [
      "Refactoring a Python application for web to reach broader F1 audience, conducting user research to identify accessibility barriers and transforming a developer-only tool into a zero-setup web platform",
      "Creating responsive canvas-based layout with intuitive playback controls, real-time telemetry display, and a live leaderboard enabling users to analyze 140k+ frames from 20 drivers across full F1 seasons (2018-2025)",
      "Architecting client-server system to support web constraints, implementing intelligent caching and efficient data delivery strategy to achieve smooth 60 FPS rendering",
      "Designing professional visual identity in Figma, matching F1 branding with team colors and logos"
    ],
    contributors: null,
    category: "Software Development"
  }

  const renderstack = {
    title: "RenderStack: 3D Artist Forum",
    subtitle: "TypeScript, React, Three.js, MongoDB, CI/CD",
    github: "https://github.com/neu-cs4530/fall25-project-group-201",
    media: [
      { type: "video", src: "/assets/code/RenderStack/ViewportDemo.mp4" },
      { type: "image", src: "/assets/code/RenderStack/Gallery.png" },
      { type: "image", src: "/assets/code/RenderStack/GalleryPost.png" },
      { type: "image", src: "/assets/code/RenderStack/Logo.png" }
    ],
    bullets: [
      "Transformed a question forum website into a collaborative hub for 3D artists and graphics programmers; most notably through modern media embeddings and a native 3D model viewport into the question, community, and user profile pages.",
      "Engineered robust 3D Viewport features using Three.js, including model loading, orbit controls, perspective/orthographic camera toggling, HDRI lighting presets, and metadata display.",
      "Directed the development of the 3D viewport and Three.js integration into the site, gallery page sorting and filtering, drag-and-drop uploading, and the gallery post page component.",
      "Spearheaded the UI and branding of the site, designing the logo in Figma and conducting extensive front-end testing in Cypress."
    ],
    contributors: "Catherine Azelby, Natasha Mishra Daas, Erika Ding",
    category: "Software Development"
  };

  const bookGenerator = {
    title: "Procedural Book Generator HDA",
    subtitle: "Houdini, VEX, Python, Procedural Content Generation",
    github: "https://github.com/meredithscott131/BookGenerator",
    media: [
      { type: "video", src: "/assets/code/BookGenerator/Walkthrough.mp4" },
      { type: "image", src: "/assets/code/BookGenerator/Stills2.png" },
      { type: "image", src: "/assets/code/BookGenerator/UI1.png" },
      { type: "image", src: "/assets/code/BookGenerator/UI2.png" }
    ],
    bullets: [
      "Constructed a fully procedural system in Houdini to generate books with randomized dimensions, colors, and orientations for environment and prop design.",
      "Implemented parameterized controls like book width, height, rotation, and offset, enabling flexible customization and scalable asset generation.",
      "Utilized VEX and node-based workflows to automate material variation, hue shifts, and spatial alignment using Match Size and Copy to Points nodes."
    ],
    contributors: null,
    category: "Pipeline Tools"
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
        contributors: null,
        category: "Pipeline Tools"
  };

  const productionPlan = {
    title: "Animation Production Plan Generator",
    subtitle: "TypeScript, JavaScript, React, OpenAI API, Figma",
    github: "https://github.com/Abby-Dennin/Animation-Production-Plan-Generator",
    media: [
      { type: "image", src: "/assets/code/Production-Plan/top_view.png" },
      { type: "image", src: "/assets/code/Production-Plan/bottom_view.png" },
      { type: "video", src: "/assets/code/Production-Plan/full_demo.mp4" },
      { type: "image", src: "/assets/code/Production-Plan/Redesign1.png" },
      { type: "image", src: "/assets/code/Production-Plan/Redesign2.png" }
    ],
    bullets: [
      "Collaborated with a team to design and implement a web application that generates customized animation production plans using the OpenAI API.",
      "Integrated features like CSV export, project history tracking, and custom spreadsheet styling.",
      "Interviewed animation capstone students to understand frustrations and improve the prototype.",
      <>
        Reimagined the UI/UX design in Figma for enhanced usability and aesthetic appeal in{" "}
        <a
          href="https://www.figma.com/proto/E2FEV1HJpAcNzJq74dbDRY/Tempo---Prototype?node-id=0-1&t=lERsB8ohuRCvVdvb-1"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          this project
        </a>.
      </>
    ],
    contributors: "Abby Dennin, Natasha Mishra Daas, Sophia Allen",
    category: "Software Development"
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
    contributors: "Thomas Yi",
    category: "Graphics Programming"
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
    contributors: null,
    category: "Graphics Programming"
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
    contributors: null,
    category: "Software Development"
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

  const gestures = {
    title: "AR Gesture Prototype Series",
    subtitle: "C#, Unity, MRTK, Microsoft HoloLens 2",
    github: null,
    media: [
      {
        type: "video",
        src: "/assets/code/Gestures/OpenBook.mp4",
        caption: "Open Book Gesture"
      },
      {
        type: "video",
        src: "/assets/code/Gestures/Slinky.mp4",
        caption: "Pull Gesture"
      },
      {
        type: "video",
        src: "/assets/code/Gestures/FingerGun.mp4",
        caption: "Finger Gun Gesture"
      },
      {
        type: "video",
        src: "/assets/code/Gestures/RotationDemo.mp4",
        poster: "/assets/code/Gestures/demo_thumb.png",
        caption: "Movement Demo"
      }
    ],
    logLine: (
      <>
        Under the Northeastern{" "}
        <a
          href="https://realitydesign.sites.northeastern.edu/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Reality Design Studio
        </a>{" "}
        research group, this project investigates the potential of single-handed
        gesture controls to enhance mobility and immersion in augmented reality
        spaces. As the student investigator, my responsibilities included:
      </>
    ),
    bullets: [
      "Developed high-fidelity augmented reality prototypes in Unity through extensive design research and rapid prototype ideation.",
      "Leveraged the Mixed Reality Toolkit (MRTK) Unity package to program and deploy prototypes to the Microsoft HoloLens 2.",
      "Conducted usability testing and user interviews, applying gesture elicitation frameworks to identify and resolve prototype issues."
    ],
    contributors: null,
    category: "Graphics Programming"
  };

  return [
    racereplay,
    renderstack,
    bookGenerator,
    krita,
    raytracer,
    productionPlan,
    website,
    gestures,
  ];
};