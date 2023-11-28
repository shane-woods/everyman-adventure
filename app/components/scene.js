import React from "react";
import Character from "./character";
import TextBubble from "./textbubble";

const Scene = (props) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Character imageSrc={props.characterSrc} name={props.name} />
      <TextBubble text={props.text} />
    </div>
  );
};

export default Scene;
