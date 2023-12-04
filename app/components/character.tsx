import React from "react";
import { animated } from "@react-spring/web";
import Image from "next/image";

type Character = {
  id: string;
  src: string;
  name: string;
};

const Character = (character: Character) => {
  return (
    <div key={character.id} className="flex flex-col mb-10 items-center">
      <Image
        alt="image of a character"
        src={character.src}
        width={100}
        height={100}
      />
      <p className="font-bold">{character.name}</p>
    </div>
  );
};

export default Character;
