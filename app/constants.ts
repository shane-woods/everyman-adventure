import godsvg from "../public/svgs/cloud-svgrepo-com.svg";
import deathsvg from "../public/svgs/death-grim-reaper-svgrepo-com.svg";
import brainsvg from "../public/svgs/brain-svgrepo-com.svg";
import gooddeedssvg from "../public/svgs/handshake-skin-1-svgrepo-com.svg";
import strengthsvg from "../public/svgs/muscle-svgrepo-com.svg";
import Character from "./types";

type Scene = {
  characters: Character[];
  isChoice: boolean;
  choiceIndex: number;
};

const sceneData: Scene[] = [
  {
    characters: [
      {
        src: godsvg,
        name: "God",
        text: "Hello I am god",
      },
      {
        src: deathsvg,
        name: "Death",
        text: "Hello I am death",
      },
    ],
    isChoice: false,
    choiceIndex: 0,
  },
  {
    characters: [
      {
        src: brainsvg,
        name: "Knowledge",
        text: "Hello I am Knowledge!",
      },
      {
        src: gooddeedssvg,
        name: "Good Deeds",
        text: "Hello I am Good Deeds!",
      },
    ],
    isChoice: false,
    choiceIndex: 0,
  },
  {
    characters: [
      {
        src: strengthsvg,
        name: "Strength",
        text: "Hello I am Strength!",
      },
    ],
    isChoice: false,
    choiceIndex: 0,
  },
];

const numScenes = sceneData.length;
export { sceneData, numScenes };
