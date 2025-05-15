import React from "react";
import "../../App.css";

function Intro() {
  return (
    <>
      <div className="absolute top-1/2 -left-1/2 z-20 aspect-[1/0.7] w-[200%]">
        <div className="absolute inset-0 rounded-[100%] bg-black/80"></div>
        <div
          className="absolute inset-0 overflow-hidden rounded-[100%]"
          style={{
            background: "transparent",
            boxShadow: "inset 0 2px 20px #fff, 0 -10px 50px 1px #ffffff6e"
          }}
        >
          <div
            className="absolute top-0 right-[25%] left-[25%] h-[3px] bg-gradient-to-r from-transparent via-white to-transparent"
            style={{
              boxShadow: "rgba(255, 255, 255, 0.85) 0px 0px 17.5055px 4.0022px"
            }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default Intro;
