import React, { ReactElement, useContext, useEffect } from "react";

import Input from "../componentsLibrary/MTextField"
import { FormsContext } from "../FormsContext";

interface IFormDisplay {
  components:  React.ReactElement<{}, string | React.JSXElementConstructor<any>>[]
}


const FormDisplay:React.FC<IFormDisplay> = ({components}) => {
  const context = useContext(FormsContext)
  //useEffect(() => {setInterval(() => console.log(component), 2000)},[])
  return (
    <div>
    <h4>Form Display</h4>
        <div className="well green-box centered">
            <div id="canvas" >
            {components.map((component) => {
               return <div>{component}</div>
              })}

            </div>
        </div>
    </div>
  );
}

export default FormDisplay;