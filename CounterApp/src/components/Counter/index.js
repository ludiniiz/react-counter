import react, { useState } from 'react';
import CounterButton from '../CounterButton';
import CounterInput from '../CounterInput';

export default function Counter() {
    const [value, setValue] = useState(0);

    function add() {
        setValue(value + 1);
    }

    function sub() {
        setValue(value - 1);
    }

    function reset() {
        setValue(0); }
    

    return (
        <div>
            <CounterInput
                value={value}
                type="number"
                setValue={setValue}
            />
            <CounterButton label="+" type="primary" click={add} />
            <CounterButton label="-" type="secondary" click={sub} />
            <CounterButton label="Reset" type="reset" click={reset} />           
        </div>
    );
}