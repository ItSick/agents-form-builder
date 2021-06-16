import React, {useState} from "react";
import { Button } from '@material-ui/core';

interface ICustomButton {    
    fieldName: string
}

const CustomButton:React.FC<ICustomButton> = ({fieldName}) => {
    const [InputValue, setInputValue] = useState('');
    return (
        <div>
           <Button variant="contained" color="primary" value={fieldName} href="#contained-buttons"></Button>
        </div>
    );
}

export default CustomButton;