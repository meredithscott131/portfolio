export const AnimationProjects = () => {
  const hair = {
    name: "XGen Groom",
    hero: {
      src: "/assets/animation/Hair/Demo.mp4",
      poster: "/assets/animation/Hair/Thumbnail.png"
    },
    description: {
      subtitle: "Maya, XGen, Adobe After Effects",
      bullets: [
        "Explored hair grooming, dynamics, and rendering techniques using Maya's XGen.",
        "Utilized nDynamics to simulate realistic hair movement and interactions.",
        "Rendered using Arnold with attention to lighting and shading for realism."
      ]
    },
    content: [
      { src: 'Hair/Turnaround.mp4', poster: '/assets/animation/Hair/Thumbnail2.png', title: 'Turnaround' },
      { src: 'Hair/Back.png', poster: null, title: 'Back View' },
      { src: 'Hair/Eyebrows.png', poster: null, title: 'Eyebrows' },
      { src: 'Hair/Back_Right.png', poster: null, title: 'Back Right View' },
      { src: 'Hair/Front_Left.png', poster: null, title: 'Front Left View' }
    ],
    contributors: null
  };

  const cloth = {
    name: "Cloth Simulation",
    hero: {
      src: "/assets/animation/Cloth/Animation.mp4",
      poster: "/assets/animation/Cloth/Thumbnail.png",
    },
    description: {
      subtitle: "Marvelous Designer, Maya, Adobe After Effects",
      bullets: [
        "Created a dynamic cloth simulation inspired by TikTok Autumn Aesthetic trends.",
        "Experimented with different fabric properties in Marvelous Designer to achieve realistic movement and interaction.",
        "Rendered the simulation using Arnold in Maya."
      ]
    },
    content: [
      {src: 'Cloth/Turnaround.mp4', poster: '/assets/animation/Cloth/Thumbnail2.png', title: 'Maya Turnaround' },
      { src: 'Cloth/Marvelous.png', poster: null, title: 'Marvelous Still 1' },
      { src: 'Cloth/Marvelous2.png', poster: null, title: 'Marvelous Still 2' },
      { src: 'Cloth/Marvelous3.png', poster: null, title: 'Marvelous Still 3' }
    ],
    contributors: null
  }

  const basics = {
      name: "Talent Show",
      hero: {
        src: "/assets/animation/Basics/basics_final.mp4",
        poster: "/assets/animation/Basics/basics_final_thumb.png"
      },
      description: {
        subtitle: "Maya, Animation, Adobe Suite",
        logLine: "How high can a singer go before they reach their limit?",
        bullets: [
          "Created a short animation in Maya, showcasing knowledge on animation principles, staging, and simple storytelling.",
          "Modeled, textured, and designed an original character inspired by my own beloved debug duck.",
          "Utilized Maya’s blend shape feature to animate the character.",
          "Edited all content in Adobe Premiere Pro and After Effects.",
          "Rendered in Arnold."
        ]
      },
      content: [
        { src: 'Basics/concept_art.PNG', poster: null, title: 'Concept Art' },
        { src: 'Basics/turnaround.png', poster: null, title: 'Turnaround' },
        { src: 'Basics/animatic.mp4', poster: '/assets/animation/Basics/animatic_thumb.png', title: 'Animatic' },
        { src: 'Basics/blend_shapes_demo.mp4', poster: '/assets/animation/Basics/blend_shapes_demo_thumb.png', title: 'Blend Shapes Demo' }
      ],
      contributors: null
    }; 

  const anim1 = {
    name: "The Trespassers",
    hero: {
      src: "/assets/animation/Anim1/anim1_final.mp4",
      poster: "/assets/animation/Anim1/anim1_final_thumb.png"
    },
    description: {
      subtitle: "Maya, Substance Painter, Rigging, Animation",
      logLine: "After a boy sneaks into the astronomy exhibit after hours, he realizes he might not be alone.",
      bullets: [
        "Independently created a short film over the course of four months with the goal of conveying the relationship between a character and room.",
        "Modeled and lit all room objects in Maya and textured content in Substance Painter.",
        "Rigged character model using Advanced Skeleton.",
        "Composited scenes in Adobe After Effects.",
        "Rendered in Arnold."
      ]
    },
    content: [
      { src: 'Anim1/concept_art.png', poster: null, title: 'Concept Art' },
      { src: 'Anim1/room_fly_through.mp4', poster: '/assets/animation/Anim1/room_fly_through_thumb.png', title: 'Room Flythrough' },
      { src: 'Anim1/neil_turnaround.mp4', poster: '/assets/animation/Anim1/neil_turnaround_thumb.png', title: 'Turnaround' },
      { src: 'Anim1/neil_rig.png', poster: null, title: 'Character Rig' },
      { src: 'Anim1/progress_shot.mp4', poster: '/assets/animation/Anim1/progress_shot_thumb.png', title: 'Progress Shot' }
    ],
    contributors: null
  };

  const char = {
    name: "Animal Hybrid Sculpt",
    hero: {
      src: "/assets/animation/Character/CharAnim.mp4",
      poster: "/assets/animation/Character/Still.png"
    },
    description: {
      subtitle: "ZBrush, Maya, Substance Painter, Mixamo",
      logLine: "What if a beaver lived in the artic, and was also part... penguin?",
      bullets: [
        "Designed and sculpted in ZBrush, converting the model to low poly for Maya import and texturing.",
        "Rigged and animated via Mixamo, refining the animation in Maya.",
        "Configured sculpt in ZBrush for 3D printing.",
        "Rendered in Arnold."
      ]
    },
    content: [
      { src: 'Character/concept_art.png', poster: null, title: 'Concept Art' },
      { src: 'Character/Turnaround.mp4', poster: '/assets/animation/Character/Turnaround_Still.png', title: 'Turnaround' },
      { src: 'Character/rig.mp4', poster: '/assets/animation/Character/Rig_Still.png', title: 'Mixamo Rig' },
      { src: 'Character/Print.png', poster: null, title: '3D Print' }
    ],
    contributors: null
  };
  
  const environment = {
    name: "Coastal Town",
    hero: {
      src: "/assets/animation/Environment/Demo.mp4",
      poster: "/assets/animation/Environment/screenshot2.png"
    },
    description: {
      subtitle: "Unity, Maya, ZBrush, Substance Painter",
      logLine: null,
      bullets: [
        "Collaborated with a team to create a stylized, playable environment in Unity.",
        "Modeled houses using modular building techniques in Maya.",
        "Textured buildings and props using texture atlases.",
        "Sculpted and textured leaves in ZBrush and Substance Painter, consructing the final plant in Maya using image planes.",
        "Additional assets by Boki, Edenity, and SpaceZeta from the Unity Asset Store."
      ]
    },
    content: [
      { src: 'Environment/modularBuilding.png', poster: null, title: 'Modular Breakdown' },
      { src: 'Environment/Lighthouse.mp4', poster: '/assets/animation/Environment/Lighthouse_Still.png', title: 'Lighthouse Modeling' },
      { src: 'Environment/Bush.mp4', poster: '/assets/animation/Environment/Bush_Still.png', title: 'Plant Modeling' },
      { src: 'Environment/screenshot1.png', poster: null, title: 'Town Screenshot' },
      { src: 'Environment/screenshot4.png', poster: null, title: 'Lighthouse Screenshot' }
    ],
    contributors: 'Joshua Goldman, Erin Lewis, Thomas Yi'
  };

  return [hair, cloth, char, anim1];
}
