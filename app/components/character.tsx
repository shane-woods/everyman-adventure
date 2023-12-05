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
  handleNextScene: () => void;
};

const Character = (character: Character) => {
  const [lineIndex, setLineIndex] = useState<number>(0);
  console.log(lineIndex);
  useEffect(() => {
    if (lineIndex === character.lines.length - 1) {
      console.log("gets here?");
      character.handleNextScene();
      return () => clearInterval(intervalId);
    }

    const intervalId = setInterval(() => {
      setLineIndex((index) => index + 1);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [character.lines, character.index]);

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
