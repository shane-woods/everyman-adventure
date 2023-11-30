"use client";
import React from "react";
import { useState } from "react";
import Scene from "./components/scene";
import { numScenes } from "./constants";

export default function Home() {
  const [sceneIndex, setSceneIndex] = useState<number>(0);

  function handleTakeCharacter() {
    setSceneIndex((cur) => (cur + 1) % numScenes);
  }

  function handleReset() {
    setSceneIndex(0);
  }

  return (
    <div className="flex flex-col justify-evenly max-h-screen">
      <div className="flex justify-center items-center">
        <h1 className="text-5xl italic">"Everyman"</h1>
      </div>
      <div
        key={sceneIndex}
        className="flex flex-col justify-center gap-5 px-24 items-center"
      >
        <Scene sceneIndex={sceneIndex} />
        <div>
          <button
            onClick={handleTakeCharacter}
            className="border-2 rounded-lg py-2 px-10 text-xl"
          >
            Take Me with you
          </button>
          <button
            onClick={handleTakeCharacter}
            className="border-2 rounded-lg py-2 px-10 text-xl"
          >
            Leave me behind
          </button>
        </div>
        <button
          onClick={handleReset}
          className="border-2 rounded-lg py-2 px-10 text-xl"
        >
          Restart
        </button>
      </div>
    </div>
  );
}
