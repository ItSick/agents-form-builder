import React, { useEffect, useState } from 'react';
import AddElements from './components/AddElements';
import FormDetails from './components/FormDetails';
import FormDisplay from  './components/FormDisplay';
import './App.css';
import { useStore } from 'react-stores';
import { formStore } from './store';

function App() {
  const [formDetails, setFormDetails] = useState({})
  const [addElements, setAddElements] = useState({attributes:{name:'attributes',value:''},validation:{name:'validations',value:''},fields:{name:'fields',value:''}})
  const [formDisplay, setFormDisplay] = useState({})

  const myStoreState = useStore(formStore);

  useEffect(() => {
    console.log('hello itsik');
  },[formDetails, addElements]);
  
  return (
    <div className="App container">
     <h1>Form Generator</h1>
          <p>Forms Builder Tool - Easy to use!</p>
          <hr className="green-box"/>
      <div className="row">
        <div className="col-md">
          <FormDetails initialState={formDetails} setFormDetails={setFormDetails}/>
          <AddElements initialState={addElements} setAddElements={setAddElements} />
        </div>
        <div className="col-md">
          <FormDisplay initialState={formDisplay} setFormDisplay={setFormDisplay}/>
        </div>
      </div> 
      <div className="row">
        <button type="button" className="btn btn-success space-up ">Create Form</button> 
      </div>
    </div>
  );
}

export default App;
