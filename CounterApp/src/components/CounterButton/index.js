import react from 'react';
import './styles.css';

export default function CounterButton(props) {
    return (
        <button
            className={`counter-button ${props.type}`}
            onClick={props.click}
        >
            {props.label}
        </button>
    )
}
