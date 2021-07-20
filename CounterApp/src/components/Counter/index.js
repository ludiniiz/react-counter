import react, { useEffect, useState } from 'react';
import CounterButton from '../CounterButton';
import CounterInput from '../CounterInput';
import './styles.css';

export default function Counter({ counterName, valueChange, excluirCounter, nameChange}) {
    const [value, setValue] = useState(0);
    const [name, setName] = useState(counterName);

    function add() {
        setValue(value + 1);
    }

    function sub() {
        setValue(value - 1);
    }

    function reset() {
        setValue(0);
    }

    function excluir(){
        excluirCounter();
    }

    useEffect(() => {
        valueChange(value);
    }, [value])

    useEffect(() => {
        nameChange(name);
    }, [name])

    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)}
           />
            <CounterInput
                value={value}
                type="number"
                setValue={setValue}
            />
            <CounterButton label="+" type="primary" click={add} />
            <CounterButton label="-" type="secondary" click={sub} />
            <CounterButton label="Reset" type="primary" click={reset} />     
            <CounterButton label="Excluir" type="primary" click={excluir} />         
        </div>
    );
}