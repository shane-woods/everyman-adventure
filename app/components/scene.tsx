import React from "react";
import Character from "./character";
import TextBubble from "./textbubble";
import { sceneData } from "../constants";

type SceneProps = {
  index: number;
};

const Scene = (scene: SceneProps) => {
  return (
    <div className="flex flex-row justify-center gap-24 mb-5 items-center">
      {sceneData[scene.index].characters.map((character, characterIndex) => (
        <div
          key={characterIndex}
          className="flex flex-col items-center justify-center"
        >
          <Character
            id={characterIndex.toString()}
            src={character.src}
            name={character.name}
          />
          <TextBubble key={characterIndex.toString()} text={character.text} />
        </div>
      ))}
    </div>
  );
};

export default Scene;
