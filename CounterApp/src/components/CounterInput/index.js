import react, { useState } from 'react';

export default function CounterInput({
    setValue,
    type,
    value
}) {
    function handleChange(e) {
        setValue(Number(e.target.value));
    }

    return (
        <>
            <input type={type} value={value} onChange={handleChange} />
        </>
    )
}
