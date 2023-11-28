import React from "react";
import { animated } from "@react-spring/web";
import Image from "next/image";

const Character = (props) => {
  return (
    <div className="flex flex-col mb-10 items-center">
      <Image src={props.imageSrc} width={100} height={100} />
      <p className="font-bold">{props.name}</p>
    </div>
  );
};

export default Character;
