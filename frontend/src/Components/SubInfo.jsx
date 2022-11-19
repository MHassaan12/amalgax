import React from "react";

const SubInfo = (props) => {
  return (
    <div className="border text-sm border-custom-main px-5 py-2 font-light">
      {props.text}
    </div>
  );
};

export default SubInfo;
