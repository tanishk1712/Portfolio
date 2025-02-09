import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Versatile",
          "Creative",
          "Adaptive",
          "Tech-savvy",
          "Detail-oriented",
          "Passionate",
          "Resourceful",
          "Dynamic",
          "Responsive",
          "Collaborative",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
