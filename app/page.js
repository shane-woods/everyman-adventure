"use client";
import Link from "next/link";
import { useState } from "react";
import scenesData from "./constants";
import Scene from "./components/scene";

export default function Home() {
  const [sceneIndex, setSceneIndex] = useState(0);

  function handleNextScene() {
    setSceneIndex((cur) => (cur + 1) % scenesData.length);
  }

  return (
    <div className="grid grid-cols-1 grid-rows-3 justify-evenly">
      <div className="flex row-span-1 justify-center items-center">
        <h1 className="text-5xl italic">"Everyman"</h1>
      </div>
      <div className="flex flex-col row-span-1 justify-center gap-5 px-24 items-center">
        <Scene
          characterSrc={scenesData[sceneIndex].characterSrc}
          name={scenesData[sceneIndex].name}
          text={scenesData[sceneIndex].text}
        />
        <button
          onClick={handleNextScene}
          className="border-2 rounded-lg py-2 px-10 text-xl"
        >
          Next Scene
        </button>
      </div>
    </div>
  );
}
