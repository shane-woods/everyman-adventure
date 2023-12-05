import React, { useEffect, useState } from "react";
import Character from "./character";
import { sceneData } from "../constants";

type SceneProps = {
  index: number;
  nextScene?: () => void;
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
            index={characterIndex}
            src={character.src}
            name={character.name}
            lines={character.lines}
            nextScene={scene.nextScene}
          />
        </div>
      ))}
    </div>
  );
};

export default Scene;
