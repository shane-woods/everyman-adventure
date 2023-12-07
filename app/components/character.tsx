import React, { useEffect, useState } from "react";
import { animated } from "@react-spring/web";
import Image from "next/image";
import TextBubble from "./textbubble";

type Character = {
  id: string;
  index: number;
  src: string;
  name: string;
  line?: string;
};

const Character = (character: Character) => {
  return (
    <div key={character.id} className="flex flex-col mb-10 items-center">
      {character.line === "NOLINE" ? (
        <Image
          alt="image of a character"
          src={character.src}
          width={50}
          height={50}
        />
      ) : (
        <Image
          alt="image of a character"
          src={character.src}
          width={100}
          height={100}
        />
      )}
      <p className="font-bold">{character.name}</p>
      {character.line !== "NOLINE" ? (
        <TextBubble id={character.id} text={character.line} />
      ) : null}
    </div>
  );
};

export default Character;
