import React from "react";

type TextProp = {
  key: string;
  text: string;
};

const TextBubble = (t: TextProp) => {
  return (
    <div key={t.key} className=" flex overflow-hidden max-w-sm">
      <p className="text-center">{t.text}</p>
    </div>
  );
};

export default TextBubble;
