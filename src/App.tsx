import React, { Component, ReactElement, useContext, useEffect, useState } from 'react';
import { FilledInput, FormControl, InputLabel, MenuItem, OutlinedInput, Select, TextField } from '@material-ui/core';
import  InputMetaData  from './consts/InputMetaData';
import FormDisplay from  './components/FormDisplay';
import './App.css';

import formService from './formService';

import { MyProvider, FormsContext } from './FormsContext';
import  MTextField from './componentsLibrary/MTextField';
import MDatePicker from './componentsLibrary/MDatePicker';
import { setTimeout } from 'timers';

function App() {
  const formTemplate = {
    name: "",
    description: "",
    createdBy: "",
    updatedBy: "",
    hostingApps: [],
    category:"",
    fields: [{
      name: "",
      label:"",
      type:"",
      order: '0',
      mandatory: false,
      attributes: [{
        key: "",
        value:""
      }],
      style: [{
        key: "",
        value:""
      }],
      validation: [{
        regex: "",
        name:""
      }]
    }]
  };

  //form details events
  const handleNameChangeEvent = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    formTemplate.name = event.target.value;
  }
  const handleCategoryChangeEvent = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    formTemplate.category = event.target.value;
  }
  const handleDescriptionChangeEvent = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    formTemplate.description = event.target.value;
  }

  
  //element events
  
  const handleFieldNameChangeEvent = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    formTemplate.fields[0].name = event.target.value;
  }

  const handleFieldValueSelectEvent = (event: React.ChangeEvent<{name?: any; value: unknown; }>) => {
    console.log(event.target.value);
    if(typeof event.target.value === 'string'){
      formTemplate.fields[0].type = event.target.value;
    }
    setCurrentType(String(event.target.value));
  }

  const handleAttributeNameSelectEvent = (event: React.ChangeEvent<{name?: any; value: unknown; }>) => {
    if(typeof event.target.value === 'string'){
      formTemplate.fields[0].attributes[0].key = event.target.value;
    }
  }

  const handleAttributeNameChangeEvent = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    formTemplate.fields[0].attributes[0].value = event.target.value;
  }


  const handleStylePropertySelectEvent = (event: React.ChangeEvent<{name?: any; value: unknown; }>) => {
    if(typeof event.target.value === 'string'){
      formTemplate.fields[0].style[0].key = event.target.value;
    }
  }

  const handleStyleValueChangeEvent = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    formTemplate.fields[0].style[0].value = event.target.value;
  }
  


  const handleValidationSelectEvent = (event: React.ChangeEvent<{name?: any; value: unknown; }>) => {
    if(typeof event.target.value ===  'string'){
        formTemplate.fields[0].validation[0].name = event.target.value;
    }
  }

  const [currentComp, setCurrentComp] = useState<ReactElement<{}>[]>([]);
  const [currentType, setCurrentType] = useState('text');

  const handleAddFieldBtnClickEvent = (fieldType: string) => {
    //add field to form
    console.log(fieldType)
   switch(fieldType){
    case "text": setCurrentComp([...currentComp ,<MTextField />]) ;
      break;
    case "datePicker": setCurrentComp([...currentComp ,<MDatePicker />]) ;
       break;
   }

    //send to formDisplay
  }
  const handleAddAttrClickEvent = () => {
    //add attributes to field
  }
  const handleAddStyleClickEvent = () => {
    //add style to field
    
  }
  const handleAddValidationClickEvent = () => {
    //add validation type to field
    
  }

  const handleCreateFormClickEvent = async () => {
    //add field to form
    const response = await formService.createForm(formTemplate);
    console.log(response);
  }

  // const getComponent = () => {

  // }

  return (
    <MyProvider>
    <div className="App container">
      <h1>Form Generator</h1>
      <p>Forms Builder Tool - Easy to use!</p>
      <hr className="green-box"/>
      <div className="row">
        <div className="col-md">
        <div>
          <h4>Form Details</h4>
            <FormControl fullWidth>
              <InputLabel children="Form Name:" />
              <FilledInput fullWidth name="name" onChange={(event) => handleNameChangeEvent(event)} />
            </FormControl>
            <FormControl fullWidth className="space-up">
              <InputLabel children="Category:" />
              <FilledInput fullWidth name="category" onChange={(event) => handleCategoryChangeEvent(event)} />
            </FormControl>
            <FormControl fullWidth className="space-up">
              <InputLabel children="Description:" />
              <FilledInput fullWidth name="description" onChange={(event) => handleDescriptionChangeEvent(event)} />
            </FormControl>
        </div>

    
        <div className="space-up">
          <h4>Add Elements</h4>
          <FormControl fullWidth className="space-up">
            <InputLabel children="Field Name:" />
            <FilledInput fullWidth name="fieldName" onChange={(event) => handleFieldNameChangeEvent(event)} />
          </FormControl>

          <FormControl fullWidth className="space-up">
            <InputLabel children="Fields Type:" />
            <Select  name="fieldType" onChange={(event) => handleFieldValueSelectEvent(event)}>
              {InputMetaData.fields.map((field, index) => {
                return <MenuItem key={index} value={field}>{field}</MenuItem >
              })}
            </Select>
          </FormControl>




          <FormControl fullWidth className="space-up white-text">
            <InputLabel children="Add Attributes Name:" />
            <Select  name="attributeName" onChange={(event) => handleAttributeNameSelectEvent(event)}>
              {InputMetaData.attributes.map((attr, index) => {
                return <MenuItem key={index} value={attr}>{attr}</MenuItem >
              })}
            </Select>
          </FormControl>

          <FormControl fullWidth className="space-up">
            <InputLabel children="Add Attributes Value:" />
            <FilledInput fullWidth name="attributeValue" onChange={(event) => handleAttributeNameChangeEvent(event)} />
          </FormControl>

          <button type="button" className="btn btn-primary space-up fullwidth" onClick={() => handleAddAttrClickEvent()}>Add Attribute</button>


          <FormControl fullWidth className="space-up white-text">
            <InputLabel children="Add Style Property:" />
            <Select  name="styleProp" onChange={(event) => handleStylePropertySelectEvent(event)}>
              {InputMetaData.style.map((prop, index) => {
                return <MenuItem key={index} value={prop}>{prop}</MenuItem >
              })}
            </Select>
          </FormControl>

          <FormControl fullWidth className="space-up">
            <InputLabel children="Add Style Value:"  />
            <FilledInput fullWidth name="styleValue" onChange={(event) => handleStyleValueChangeEvent(event)} />
          </FormControl>

          <button type="button" className="btn btn-primary space-up fullwidth" onClick={() => handleAddStyleClickEvent()}>Add Style</button>


          <FormControl fullWidth className="space-up">
            <InputLabel children="Add Validation Type:" />
            <Select  name="validation" onChange={(event) => handleValidationSelectEvent(event)}>
              {InputMetaData.validations.map((validation, index) => {
                return <MenuItem key={index} value={validation}>{validation}</MenuItem>
              })}
            </Select>
          </FormControl>
          
          <button type="button" className="btn btn-primary space-up fullwidth" onClick={() => handleAddValidationClickEvent()}>Add Validation</button>
        </div>
        <button type="button" className="btn btn-danger space-up fullwidth" onClick={() => handleAddFieldBtnClickEvent(currentType)}>Add Field</button>
      </div>
        <div className="col-md">
          <FormDisplay  components={currentComp} /> 
        </div>
    </div> 
    <div className="row">
      <button type="button" className="btn btn-success space-up" onClick={() => handleCreateFormClickEvent()}>Create Form</button> 
    </div>
    </div>
    </MyProvider>
  );
}

export default App;


