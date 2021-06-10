import React from "react";

interface IFormDisplay {
  initialState: {};
  setFormDisplay: React.Dispatch<React.SetStateAction<{}>>;
}

const FormDisplay:React.FC<IFormDisplay> = ({initialState, setFormDisplay}) => {
  return (
    <div>
    <h4>Form Display</h4>
        <div className="well green-box centered">
            <label></label>
            <div className="ifrm"></div>
        </div>
    </div>
  );
}

export default FormDisplay;