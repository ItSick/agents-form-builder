import React, {useState} from "react";

const MDatePicker:React.FC = () => {
    const [InputValue, setInputValue] = useState('');
    return (
        <div>
            <input id="birthday" name="birthday" type="date" className="form-control space-up" value={InputValue} onChange={(event) => setInputValue(event.target.value)}/> 
        </div>
    );
}

export default MDatePicker;