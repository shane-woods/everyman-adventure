import React, { useEffect, useState } from "react";
import { animated } from "@react-spring/web";
import Image from "next/image";
import TextBubble from "./textbubble";

type Character = {
  id: string;
  index: number;
  src: string;
  name: string;
  lines: string[];
  nextScene?: () => void;
};

const Character = (character: Character) => {
  const [lineIndex, setLineIndex] = useState<number>(0);
  console.log("line index " + lineIndex);
  console.log("character's lines length " + character.lines.length);
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (lineIndex === character.lines.length && character.nextScene) {
        // Invoke the callback when reaching the last line
        console.log("GETS HERE");
        character.nextScene();
      }
      setLineIndex((index) => index + 1);
    }, 200000);

    return () => clearInterval(intervalId);
  }, [lineIndex]);

  if (lineIndex === character.lines.length - 1) {
    console.log("gets here?");
  }

  return (
    <div key={character.id} className="flex flex-col mb-10 items-center">
      <Image
        alt="image of a character"
        src={character.src}
        width={100}
        height={100}
      />
      <p className="font-bold">{character.name}</p>
      <TextBubble key={character.id} text={character.lines[lineIndex]} />
    </div>
  );
};

export default Character;
