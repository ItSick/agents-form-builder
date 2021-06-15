import React, {useState} from "react";

const MTextField:React.FC = () => {
    const [InputValue, setInputValue] = useState('');
    return (
        <div>
            <input type="text" className="form-control space-up" value={InputValue} onChange={(event) => setInputValue(event.target.value)}/>   
        </div>
    );
}

export default MTextField;