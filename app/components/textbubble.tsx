import React from "react";

type TextProp = {
  key: string;
  text: string;
};

const TextBubble = (t: TextProp) => {
  return (
    <div key={t.key} className="">
      <p>{t.text}</p>
    </div>
  );
};

export default TextBubble;
