import godsvg from "../public/svgs/cloud-svgrepo-com.svg";
import deathsvg from "../public/svgs/death-grim-reaper-svgrepo-com.svg";
import brainsvg from "../public/svgs/brain-svgrepo-com.svg";
import gooddeedssvg from "../public/svgs/handshake-skin-1-svgrepo-com.svg";
import strengthsvg from "../public/svgs/muscle-svgrepo-com.svg";
import CharacterType from "./types";

type Scene = {
  characters: CharacterType[];
  isChoice: boolean;
  choiceIndex: number;
};

const God: CharacterType = {
  src: godsvg,
  name: "God",
  lines: [
    "",
    "Go thou to Everyman, And show him in My name A pilgrimage he must on him take, Which he in no wise may escape;",
  ],
};

const Death: CharacterType = {
  src: deathsvg,
  name: "Death",
  lines: [
    "Almighty God, I am here at Your will, Your commandment to fulfill.",
    "",
  ],
};

const Knowledge: CharacterType = {
  src: brainsvg,
  name: "Knowledge",
  lines: ["", "I am smart"],
};

const GoodDeeds: CharacterType = {
  src: gooddeedssvg,
  name: "Good Deeds",
  lines: ["Hello I am Good Deeds!"],
};

const Strength: CharacterType = {
  src: strengthsvg,
  name: "Strength",
  lines: ["Hello I am Strength!"],
};

const sceneData: Scene[] = [
  {
    characters: [God, Death],
    isChoice: false,
    choiceIndex: 0,
  },
  {
    characters: [Knowledge, GoodDeeds],
    isChoice: false,
    choiceIndex: 0,
  },
  {
    characters: [Strength],
    isChoice: true,
    choiceIndex: 0,
  },
];

const numScenes = sceneData.length;
export { sceneData, numScenes };
