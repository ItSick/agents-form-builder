import React, {useState} from "react";
import { Button } from '@material-ui/core';

const MButton:React.FC = () => {
    const [InputValue, setInputValue] = useState('');
    return (
        <div>
           <Button variant="contained" color="primary" href="#contained-buttons"></Button>
        </div>
    );
}

export default MButton;