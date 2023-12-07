"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import Scene from "./components/scene";
import { sceneData, numScenes } from "./constants";
import CharacterType from "./types";
import CharacterList from "./components/characterlist";
import Button from "./components/button";

export default function Home() {
  const [sceneIndex, setSceneIndex] = useState<number>(0);
  const [characterList, setCharacterList] = useState<CharacterType[]>([]);
  const [isLastLine, setIsLastLine] = useState<boolean>(false);

  function handleTakeCharacter(take: boolean) {
    const choiceIndex: number = sceneData[sceneIndex].choiceIndex;
    if (take) {
      setCharacterList([
        ...characterList,
        sceneData[sceneIndex].characters[choiceIndex],
      ]);
    }
    setIsLastLine(false);
  }

  function handleNextScene() {
    setSceneIndex((cur) => (cur + 1) % numScenes);
  }

  const handleIsLastLine = (isLastLine: boolean) => {
    setIsLastLine(isLastLine);
  };

  function handleReset() {
    setCharacterList([]);
    setSceneIndex(0);
  }

  function renderLastScene(): React.JSX.Element {
    if (characterList.length === 0) {
      return (
        <Scene
          index={sceneIndex}
          nextScene={handleNextScene}
          numLines={sceneData[sceneIndex].numLines}
          handleIsLastLine={handleIsLastLine}
          isChoice={sceneData[sceneIndex].isChoice}
          lastSceneIndex={0}
          isLastScene={true}
        />
      );
    } else if (characterList.length === 1) {
      if (characterList[0].name == "Good Deeds") {
        return (
          <Scene
            index={sceneIndex}
            nextScene={handleNextScene}
            numLines={sceneData[sceneIndex].numLines}
            handleIsLastLine={handleIsLastLine}
            isChoice={sceneData[sceneIndex].isChoice}
            lastSceneIndex={1}
            isLastScene={true}
          />
        );
      }
    }

    return (
      <Scene
        index={sceneIndex}
        nextScene={handleNextScene}
        numLines={sceneData[sceneIndex].numLines}
        handleIsLastLine={handleIsLastLine}
        isChoice={sceneData[sceneIndex].isChoice}
        lastSceneIndex={0}
        isLastScene={true}
      />
    );
  }

  return (
    <div className="flex flex-col justify-evenly min-w-[750px] max-h-screen">
      <div className="flex justify-center items-center">
        <h1 className="text-3xl italic">"Everyman"</h1>
      </div>
      <div
        key={sceneIndex}
        className="flex flex-col justify-center gap-5 px-24 items-center"
      >
        {sceneIndex === sceneData.length - 1 ? (
          renderLastScene()
        ) : (
          <Scene
            index={sceneIndex}
            nextScene={handleNextScene}
            numLines={sceneData[sceneIndex].numLines}
            handleIsLastLine={handleIsLastLine}
            isChoice={sceneData[sceneIndex].isChoice}
          />
        )}
        {sceneData[sceneIndex].isChoice && isLastLine ? (
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
        <CharacterList list={characterList} />
      </div>
    </div>
  );
}
