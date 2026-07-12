import styles from "./Code.module.css";

/**
 * Each project is defined as:
 * {
 *   title, slug, subtitle, blurb, github?, contributors?,
 *   sections: [ { type: "...", ...typeSpecificFields }, ... ]
 * }
 *
 * `github` and `contributors` are rendered once, consistently, in the
 * detail page header (skill tags → contributors → GitHub link) — they
 * do not need their own sections anymore.
 *
 * Supported section types (see ProjectSection.jsx for renderers):
 *   - gallery    { media: [{ type: "image"|"video", src, poster?, caption? }] }
 *   - image      { src, caption? }
 *   - video      { src, poster?, caption? }
 *   - paragraph  { heading?, body }            <- standard text structure
 *                  body: string/JSX, or an array of them for multiple paragraphs
 *   - list       { heading?, items, ordered? } <- standard list structure
 *                  ordered: true for numbered, otherwise bulleted
 *   - quote      { text, cite? }
 *   - links      { heading?, extra?: [{ label, href }], items? } <- for any
 *                  *extra* (non-GitHub) links a project needs
 *
 * Adding/removing a section is just editing the array below —
 * no component changes needed. Adding/removing a whole project
 * is just adding/removing it from the returned array at the bottom.
 */

export const CodeProjects = () => {

  const racereplay = {
    title: "Race Replay",
    slug: "race-replay",
    subtitle: "TypeScript, React, Python, FastF1 API, Product Design",
    blurb: "Refactored an open-sourced F1 race replay Python app for the web to reach a broader user audience.",
    github: "https://github.com/meredithscott131/f1-race-replay",
    sections: [
      {
        type: "gallery",
        media: [
          { type: "image", src: "/assets/code/RaceReplay/race-dashboard.png" },
          { type: "image", src: "/assets/code/RaceReplay/race-selection.png"}
        ]
      },
      {
        type: "list",
        heading: "Highlights",
        items: [
          "Refactored a Python application for web to reach broader F1 audience, conducting user research to identify accessibility barriers and transforming a developer-only tool into a zero-setup web platform",
          "Created responsive canvas-based layout with intuitive playback controls, real-time telemetry display, and a live leaderboard enabling users to analyze 140k+ frames from 20 drivers across full F1 seasons (2018-2025)",
          "Architected client-server system to support web constraints, implementing intelligent caching and efficient data delivery strategy to achieve smooth 60 FPS rendering",
          "Designed professional visual identity in Figma, matching F1 branding with team colors and logos"
        ]
      }
    ],
    category: "Software Development"
  };

  const renderstack = {
    title: "RenderStack: 3D Artist Forum",
    slug: "renderstack",
    subtitle: "TypeScript, React, Three.js, MongoDB, CI/CD",
    blurb: "Community forum for 3D artists, complete with a native in-browser model viewer.",
    github: "https://github.com/neu-cs4530/fall25-project-group-201",
    contributors: "Catherine Azelby, Natasha Mishra Daas, Erika Ding",
    sections: [
      {
        type: "gallery",
        media: [
          { type: "video", src: "/assets/code/RenderStack/ViewportDemo.mp4"},
          { type: "image", src: "/assets/code/RenderStack/Gallery.png" },
          { type: "image", src: "/assets/code/RenderStack/GalleryPost.png" },
          { type: "image", src: "/assets/code/RenderStack/Logo.png" }
        ]
      },
      {
        type: "list",
        heading: "Highlights",
        items: [
          "Transformed a question forum website into a collaborative hub for 3D artists and graphics programmers; most notably through modern media embeddings and a native 3D model viewport into the question, community, and user profile pages.",
          "Engineered robust 3D Viewport features using Three.js, including model loading, orbit controls, perspective/orthographic camera toggling, HDRI lighting presets, and metadata display.",
          "Directed the development of the 3D viewport and Three.js integration into the site, gallery page sorting and filtering, drag-and-drop uploading, and the gallery post page component.",
          "Spearheaded the UI and branding of the site, designing the logo in Figma and conducting extensive front-end testing in Cypress."
        ]
      }
    ],
    category: "Software Development"
  };

  const bookGenerator = {
    title: "Procedural Book Generator HDA",
    slug: "book-generator",
    subtitle: "Houdini, VEX, Python, PCG",
    blurb: "Houdini digital asset that procedurally generates variations of book props with parameter customization.",
    github: "https://github.com/meredithscott131/BookGenerator",
    sections: [
      {
        type: "gallery",
        media: [
          { type: "video", src: "/assets/code/BookGenerator/Walkthrough.mp4" },
          { type: "image", src: "/assets/code/BookGenerator/Stills2.png" },
          { type: "image", src: "/assets/code/BookGenerator/UI1.png" },
          { type: "image", src: "/assets/code/BookGenerator/UI2.png" }
        ]
      },
      {
        type: "list",
        heading: "Highlights",
        items: [
          "Constructed a fully procedural system in Houdini to generate books with randomized dimensions, colors, and orientations for environment and prop design.",
          "Implemented parameterized controls like book width, height, rotation, and offset, enabling flexible customization and scalable asset generation.",
          "Utilized VEX and node-based workflows to automate material variation, hue shifts, and spatial alignment using Match Size and Copy to Points nodes."
        ]
      }
    ],
    category: "Pipeline Tools"
  };

  const krita = {
    title: "Image to Palette Krita Plugin",
    slug: "image-to-palette",
    subtitle: "Python, PyQt, Krita API",
    blurb: "Krita plugin for generating custom color palettes straight from images files.",
    github: "https://github.com/meredithscott131/ImageToPalette",
    sections: [
      {
        type: "gallery",
        media: [
          { type: "image", src: "/assets/code/Image-To-Palette/interface.png" },
          { type: "video", src: "/assets/code/Image-To-Palette/dragndrop_demo.mp4", caption: "Generating a Palette" },
          { type: "video", src: "/assets/code/Image-To-Palette/saving_demo.mp4", caption: "Saving a Palette" }
        ]
      },
      {
        type: "paragraph",
        heading: "The Problem",
        body: (
          <>
            Before I was a programmer, I was (and still am) a digital artist!
            One of my favorite parts of the art process is coloring, but I’ve
            witnessed first hand how difficult choosing a color palette can
            be, especially for beginners with limited color theory knowledge.
            To solve this, I thought of a simple image to color palette tool.
            I drew inspiration from the digital art app Procreate’s{" "}
            <a
              href="https://help.procreate.com/procreate/handbook/colors/colors-palettes"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Palette Capture
            </a>{" "}
            feature—a tool that allows users to extract a color palette from
            an image to use as a stepping stone in their creative process.
          </>
        )
      },
      {
        type: "list",
        heading: "Highlights",
        items: [
          "Developed a Krita docker plugin for generating color palettes from images, enhancing digital artists' workflows.",
          "Implemented functionality to load, regenerate, save, and display color palettes, including drag-and-drop image support.",
          "Managed JSON file conversion to support color palette saving and recent palette history across Krita sessions.",
          "Utilized PyQt5 and Krita’s API for a dynamic and intuitive user interface."
        ]
      },
    ],
    category: "Pipeline Tools"
  };

  const productionPlan = {
    title: "AI Animation Production Plan Generator",
    slug: "production-plan-generator",
    subtitle: "OpenAI API, TypeScript, React, Figma, User Research",
    blurb: "AI-assisted web tool for generating tailored animation production plans.",
    github: "https://github.com/Abby-Dennin/Animation-Production-Plan-Generator",
    contributors: "Abby Dennin, Natasha Mishra Daas, Sophia Allen",
    sections: [
      {
        type: "gallery",
        media: [
          { type: "image", src: "/assets/code/Production-Plan/top_view.png" },
          { type: "image", src: "/assets/code/Production-Plan/bottom_view.png" },
          { type: "video", src: "/assets/code/Production-Plan/full_demo.mp4" },
          { type: "image", src: "/assets/code/Production-Plan/Redesign1.png" },
          { type: "image", src: "/assets/code/Production-Plan/Redesign2.png" }
        ]
      },
      {
        type: "list",
        heading: "Highlights",
        items: [
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
        ]
      }
    ],
    category: "Software Development"
  };

  const gestures = {
    title: "AR Gesture Prototype Series",
    slug: "ar-gesture-prototypes",
    subtitle: "C#, Unity, MRTK, Usability Testing, UX Research, Microsoft HoloLens 2",
    blurb: "Exploration of single-handed AR gesture controls for enhanced mobility and immersion in AR spaces.",
    sections: [
      {
        type: "gallery",
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
        ]
      },
      {
        type: "paragraph",
        heading: "Overview",
        body: (
          <>
            Under the Northeastern{" "}
            <a
              href="https://realitydesign.sites.northeastern.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Reality Design
            </a>{" "}
            research group, this project investigates the potential of single-handed
            gesture controls to enhance mobility and immersion in augmented reality
            spaces. As the student investigator, my responsibilities included:
          </>
        )
      },
      {
        type: "list",
        heading: "Highlights",
        items: [
          "Developed high-fidelity augmented reality prototypes in Unity through extensive design research and rapid prototype ideation.",
          "Leveraged the Mixed Reality Toolkit (MRTK) Unity package to program and deploy prototypes to the Microsoft HoloLens 2.",
          "Conducted usability testing and user interviews, applying gesture elicitation frameworks to identify and resolve prototype issues."
        ]
      }
    ],
    category: "Graphics Programming"
  };

  return [
    krita,
    bookGenerator,
    productionPlan,
    racereplay,
    renderstack,
    gestures,
  ];
};

/**
 * Pulls a thumbnail (type + src + poster) for the preview card
 * from a project's first media-bearing section.
 */
export const getPreviewMedia = (project) => {
  for (const section of project.sections) {
    if (section.type === "gallery" && section.media?.length) {
      return section.media[0];
    }
    if (section.type === "image") {
      return { type: "image", src: section.src };
    }
    if (section.type === "video") {
      return { type: "video", src: section.src, poster: section.poster };
    }
  }
  return null;
};