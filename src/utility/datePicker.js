import React, { useRef, useState } from 'react';

export default function DatePicker() {
    const [date, setDate] = useState('');
    const dateInputRef = useRef(null);

    const labelStyle = { fontSize: '16px', width: '250px', color: '#464646' };
    const inputStyle = { fontSize: '18px', width: '155px'  };

    const handleChange = (e) => {
        setDate(e.target.value);
        return date;
    };

    return (
        <div>
            <input style={inputStyle} className='form-control' type='date'
                onChange={handleChange} ref={dateInputRef} />
        </div>
    );
};
