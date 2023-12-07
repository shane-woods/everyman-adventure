import godsvg from "../public/svgs/cloud-svgrepo-com.svg";
import deathsvg from "../public/svgs/death-grim-reaper-svgrepo-com.svg";
import brainsvg from "../public/svgs/brain-svgrepo-com.svg";
import gooddeedssvg from "../public/svgs/handshake-skin-1-svgrepo-com.svg";
import strengthsvg from "../public/svgs/muscle-svgrepo-com.svg";
import everymansvg from "../public/svgs/man-medium-dark-skin-tone-beard-svgrepo-com.svg";
import beautysvg from "../public/svgs/lipstick-makeup-svgrepo-com.svg";
import fivewitssvg from "../public/svgs/lightbulb-svgrepo-com.svg";
import angelsvg from "../public/svgs/angel-god-gurdian-halloween-wing-svgrepo-com.svg";
import CharacterType from "./types";

type Scene = {
  characters: CharacterType[];
  isChoice: boolean;
  choiceIndex?: number;
  numLines: number;
};

const God: CharacterType = {
  src: godsvg,
  name: "God",
  lines: [
    "",
    "Go thou to Everyman, And show him in My name A pilgrimage he must on him take, Which he in no wise may escape;",
    "",
  ],
};

const Death: CharacterType = {
  src: deathsvg,
  name: "Death",
  lines: [
    "Almighty God, I am here at Your will, Your commandment to fulfill.",
    "",
    "Lord, I will in the world go run over all, and cruelly out-search both great and small.",
  ],
};

const Everyman: CharacterType = {
  src: everymansvg,
  name: "Everyman",
  lines: [
    "",
    "O Death, thou comest when I had thee least in mind.",
    "",
    "Alas, I may well weep with sighs deep: Now have I no manner of company to help me in my journey and me to keep",
  ],
};

const Death2: CharacterType = {
  src: deathsvg,
  name: "Death",
  lines: [
    "I am Death that no man dreadeth, For every man I ‘rest, and no man spareth",
    "",
    "See thou make thee ready shortly, For thou mayst say this is the day That no man living may ‘scape away",
  ],
};

const Everyman2: CharacterType = {
  src: everymansvg,
  name: "Everyman",
  lines: [
    "Oh, to whom shall I make my moan For to go with me in that heavy journay",
  ],
};

const Everyman3: CharacterType = {
  src: everymansvg,
  name: "Everyman",
  lines: [
    "",
    "O Good Deeds, I stand in fear: I must you pray of counsel, For help now should come right well.",
    "",
    "Good Deeds, I pray you help me in this need, Or else I am forever damned indeed.",
  ],
};

const GoodDeeds: CharacterType = {
  src: gooddeedssvg,
  name: "Good Deeds",
  lines: [
    "Here I lie, cold in the ground: Thy sins hath me sore bound",
    "",
    "I would full fain, but I cannot stand, verily.",
    "",
    "Everyman, I am sorry of your fall and fain would help you and I were able",
  ],
};

const Everyman4: CharacterType = {
  src: everymansvg,
  name: "Everyman",
  lines: [
    "",
    "In good condition I am now in everything, And am whole content with this good thing.",
  ],
};

const Knowledge: CharacterType = {
  src: brainsvg,
  name: "Knowledge",
  lines: [
    "Everyman, I will go with thee and be thy guide, In thy most need to go by thy side",
    "",
    "Now go we together livingly",
  ],
};

const Everyman5: CharacterType = {
  src: everymansvg,
  name: "Everyman",
  lines: [
    "Now blesse be Jesu, Mary's son, For now have I on true contrition. And let us go now without tarrying. Good Deeds, have we clear our reckoning",
    "",
    "Then I trust we need not fear. Now friends, let us not part in twain.",
    "",
    "Who should they be?",
    "",
  ],
};

const GoodDeeds2: CharacterType = {
  src: gooddeedssvg,
  name: "Good Deeds",
  lines: [
    "",
    "Yea, indeed, I have it here.",
    "",
    "Yet must thou lead with thee Three persons of great might",
    "",
    "Five-Wits and Strength they hight, and thy Beauty may not abide behind",
  ],
};

const Everyman6: CharacterType = {
  src: everymansvg,
  name: "Everyman",
  lines: [
    "My friends, come hither and be present, Strength, my Five-Wits, and Beauty!",
    "",
  ],
};

const Beauty: CharacterType = {
  src: beautysvg,
  name: "Beauty",
  lines: [
    "",
    "Here at your will we be all ready. What will ye that we should do?",
  ],
};

const Everyman7: CharacterType = {
  src: everymansvg,
  name: "Everyman",
  lines: ["", ""],
};

const Strength: CharacterType = {
  src: strengthsvg,
  name: "Strength",
  lines: [
    "I, Strength, will by you stand in distress, Though thou would in battle fight on the ground",
    "",
  ],
};

const Everyman8: CharacterType = {
  src: everymansvg,
  name: "Everyman",
  lines: ["", ""],
};

const FiveWits: CharacterType = {
  src: fivewitssvg,
  name: "Five-Wits",
  lines: [
    "And though it were through the world round, We will not depart for sweet ne sour",
    "",
  ],
};

const Everyman9: CharacterType = {
  src: everymansvg,
  name: "Everyman",
  lines: [""],
};

const Angel: CharacterType = {
  src: angelsvg,
  name: "Angel",
  lines: [
    "Everyman, you cannot enter Heaven with these companions, return with the correct ones and I will let you in",
    "Come, excellent elect spouse to Jesu! Here above thou shalt go Because of thy singular virtue. Now the soul is taken the body fro, Thy reckoning is crystal clear: Now shalt thou into the heavenly sphere",
  ],
};

const sceneData: Scene[] = [
  {
    characters: [God, Death],
    isChoice: false,
    numLines: 3,
  },
  {
    characters: [Everyman, Death2],
    isChoice: false,
    numLines: 4,
  },
  {
    characters: [Everyman2],
    isChoice: false,
    numLines: 1,
  },
  {
    characters: [Everyman3, GoodDeeds],
    isChoice: false,
    numLines: 5,
  },
  {
    characters: [Everyman4, Knowledge],
    isChoice: true,
    choiceIndex: 1,
    numLines: 3,
  },
  {
    characters: [Everyman5, GoodDeeds2],
    isChoice: true,
    choiceIndex: 1,
    numLines: 6,
  },
  {
    characters: [Everyman6, Beauty],
    isChoice: true,
    choiceIndex: 1,
    numLines: 2,
  },
  {
    characters: [Everyman7, Strength],
    isChoice: true,
    choiceIndex: 1,
    numLines: 2,
  },
  {
    characters: [Everyman8, FiveWits],
    isChoice: true,
    choiceIndex: 1,
    numLines: 2,
  },
  {
    characters: [Everyman9, Angel],
    isChoice: false,
    numLines: 1,
  },
];

const numScenes = sceneData.length;
export { sceneData, numScenes };
