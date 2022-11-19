import React from "react";

const Info = (props) => {
  return (
    <div className="px-3 m-5 flex flex-col items-center">
      <div className="flex h-20 w-20 p-5 items-center justify-center rounded-full border-2 border-custom-main text-5xl text-custom-secondary">
        {props.icon}
      </div>
      <div>
        <p className="text-center mt-2 text-xs font-medium">{props.text}</p>
      </div>
    </div>
  );
};

export default Info;
