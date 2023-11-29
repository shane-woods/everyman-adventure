import godsvg from "../public/svgs/cloud-svgrepo-com.svg";
import deathsvg from "../public/svgs/death-grim-reaper-svgrepo-com.svg";
import brainsvg from "../public/svgs/brain-svgrepo-com.svg";
import gooddeedssvg from "../public/svgs/handshake-skin-1-svgrepo-com.svg";
import strengthsvg from "../public/svgs/muscle-svgrepo-com.svg";

const scenesData = [
  {
    characters: [
      {
        characterSrc: godsvg,
        name: "God",
        prompt: "",
      },
      {
        characterSrc: deathsvg,
        name: "Death",
        text: "",
      },
    ],
  },
  {
    characters: [
      {
        characterSrc: brainsvg,
        name: "Knowledge",
        text: "Hello I am Knowledge!",
      },
      {
        characterSrc: gooddeedssvg,
        name: "Good Deeds",
        text: "Hello I am Good Deeds!",
      },
    ],
  },
  {
    characters: [
      {
        characterSrc: strengthsvg,
        name: "Strength",
        text: "Hello I am Strength!",
      },
    ],
  },
];

export default scenesData;
