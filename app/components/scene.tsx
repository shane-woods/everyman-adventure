import React, { useEffect, useState } from "react";
import Character from "./character";
import { sceneData } from "../constants";
import Button from "./button";

type SceneProps = {
  index: number;
  nextScene: () => void;
  numLines: number;
  handleIsLastLine?: (boolean) => void;
  isChoice: boolean;
  lastSceneIndex?: number;
  isLastScene?: boolean;
};

const Scene = (scene: SceneProps) => {
  const [lineIndex, setLineIndex] = useState<number>(0);

  function handleNextLine() {
    if (lineIndex === scene.numLines - 1) {
      scene.nextScene();
    } else if (lineIndex === scene.numLines - 2) {
      if (scene.isChoice) {
        scene.handleIsLastLine(true);
      }
    }
    setLineIndex((index) => (index + 1) % scene.numLines);
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-center gap-24 mb-5 items-center">
        {sceneData[scene.index].characters.map((character, characterIndex) => (
          <div
            key={characterIndex}
            className="flex flex-col items-center justify-center"
          >
            {scene.isLastScene ? (
              <Character
                id={characterIndex.toString()}
                index={characterIndex}
                src={character.src}
                name={character.name}
                line={character.lines[scene.lastSceneIndex]}
              />
            ) : (
              <Character
                id={characterIndex.toString()}
                index={characterIndex}
                src={character.src}
                name={character.name}
                line={character.lines[lineIndex]}
              />
            )}
          </div>
        ))}
      </div>
      <Button label="Continue" onClick={handleNextLine} />
    </div>
  );
};

export default Scene;
