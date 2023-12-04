import React from "react";
import Character from "./character";
import CharacterType from "../types";

const CharacterList = ({ list }: { list: CharacterType[] }) => {
  return (
    <div className="flex flex-col items-center">
      <p>Characters with you</p>
      <div className="flex flex-row items-center justify-center">
        {list.map((character, characterIndex) => {
          return (
            <Character
              id={characterIndex.toString()}
              src={character.src}
              name={character.name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CharacterList;
