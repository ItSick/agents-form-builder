import React, { ReactElement, useContext, useEffect, ReactDOM } from "react";
import { FormsContext } from "../FormsContext";
import {DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { v4 as uuidv4 } from 'uuid';


interface IFormDisplay {
  components:  React.ReactElement<{}, string | React.JSXElementConstructor<any>>[],
  formName: string,
  category: string,
  description: string
}


const FormDisplay:React.FC<IFormDisplay> = ({components,formName,category,description}) => {
  const context = useContext(FormsContext)
  //useEffect(() => {setInterval(() => console.log(component), 2000)},[]);
  // a little function to help us with reordering the result
  //@ts-ignore
  const reorder =  (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };
    //@ts-ignore
  const onDragEnd = (result) => {
    //reorder
  }
  return (
    
    <div>
    <h4>Form Display</h4>
    <h5>{formName}</h5>
    <h6>{category}</h6>
    <p>{description}</p>
    <DragDropContext onDragEnd = { onDragEnd }>
      <Droppable droppableId={uuidv4()}>
        {(provided) => (
          <div className="well pad centered">
              {components.map((component, index) => <Draggable draggableId={index}><div ref={provided.innerRef}>{component}</div></Draggable>)}
          </div>
        )}
      </Droppable>
    </DragDropContext>
    </div>
  );
}

export default FormDisplay;