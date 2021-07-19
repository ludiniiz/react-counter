import react, { useEffect, useState } from 'react';
import CounterButton from '../CounterButton';
import CounterInput from '../CounterInput';
import './styles.css';

export default function Counter({ counterName, valueChange }) {
    const [value, setValue] = useState(0);

    function add() {
        setValue(value + 1);
    }

    function sub() {
        setValue(value - 1);
    }

    function reset() {
        setValue(0);
    }

    useEffect(() => {
        valueChange(value);
    }, [value])

    return (
        <div>
            <h2 className="counter-name">{counterName}</h2>
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