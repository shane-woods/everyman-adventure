"use client";
import React from "react";
import { useState } from "react";
import Scene from "./components/scene";
import { sceneData, numScenes } from "./constants";
import CharacterType from "./types";
import CharacterList from "./components/characterlist";
import Button from "./components/button";

export default function Home() {
  const [sceneIndex, setSceneIndex] = useState<number>(0);
  const [characterList, setCharacterList] = useState<CharacterType[]>([]);

  function handleTakeCharacter(take: boolean) {
    const choiceIndex: number = sceneData[sceneIndex].choiceIndex;
    if (take) {
      setCharacterList([
        ...characterList,
        sceneData[sceneIndex].characters[choiceIndex],
      ]);
    }
    setSceneIndex((cur) => (cur + 1) % numScenes);
  }

  function handleNextScene() {
    setSceneIndex((cur) => (cur + 1) % numScenes);
  }

  function handleReset() {
    setCharacterList([]);
    setSceneIndex(0);
  }

  console.log("scene" + sceneIndex);

  return (
    <div className="flex flex-col justify-evenly max-h-screen">
      <div className="flex justify-center items-center">
        <h1 className="text-3xl italic">"Everyman"</h1>
      </div>
      <div
        key={sceneIndex}
        className="flex flex-col justify-center gap-5 px-24 items-center"
      >
        <Scene index={sceneIndex} nextScene={handleNextScene} />
        {sceneData[sceneIndex].isChoice ? (
          <div>
            <Button
              onClick={() => handleTakeCharacter(true)}
              label="Take me with you"
            />
            <Button
              onClick={() => handleTakeCharacter(false)}
              label="Leave me behind"
            />
          </div>
        ) : null}
        <Button onClick={handleReset} label="Restart" />
        {/* <CharacterList list={characterList} /> */}
      </div>
    </div>
  );
}
