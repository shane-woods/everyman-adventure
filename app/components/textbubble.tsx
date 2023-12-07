import React from "react";

type TextProp = {
  id: string;
  text: string;
};

const TextBubble = (t: TextProp) => {
  return (
    <div key={t.id} className=" flex overflow-hidden max-w-sm">
      <div className="text-center w-[200px] h-[100px]">{t.text}</div>
    </div>
  );
};

export default TextBubble;
