import React, { useState } from 'react';

function Message({ number }) {
    if (number === null || isNaN(number)) return null;
    
    if (number === 0) return <p>Число равно нулю</p>;

    return (
        <p>
            {number > 0 ? 'Число больше нуля' : 'Число меньше нуля'}
        </p>
    );
}

export default function InputNumber() {
    const [value, setValue] = useState(null);

    const handleChange = (event) => {
        const inputValue = event.target.value;
        
        if (inputValue === '') {
            setValue(null);
        } else {
            setValue(Number(inputValue));
        }
    };

    return (
        <div style={{ marginTop: '20px' }}>
            <input 
                type="number" 
                placeholder="Введите число..." 
                onChange={handleChange} 
            />
            <Message number={value} />
        </div>
    );
}
