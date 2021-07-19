import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import CounterButton from './components/CounterButton';
import { useState } from 'react';

function App() {

  const [counterName, setCounterName] = useState("");
  const [counters, setCounters] = useState([]);

  const addCounter = () => {
    if (!counterName) {
      return alert('Nome do contador vazio');
    }
    if (counterName.length < 3) {
      return alert('Nome do contador deve possuir mais de 3 caracteres');
    }
    setCounters([...counters, { name: counterName, value: 0 }]);
  }

  const handleCounterValue = (index, value) => {
    const _counters = counters.slice();
    const counter = _counters.find((c, i) => i === index);
    if (counter) {
      counter.value = value;
    }
    setCounters(_counters);
  }

  const sumAllCountersValues = () => {
    let total = 0;
    counters.forEach((c) => total += c.value);
    return total;
  }

  return (
    <div className="App">
      <h1>CONTADOR</h1>
      <div className="form-counter">
        <label>
          <span>Nome do contador:</span>
          <input type="text" value={counterName} onChange={e => setCounterName(e.target.value)} />
        </label>
        <CounterButton label="Adicionar" type="primary" click={addCounter} />
      </div>
      <h1>Soma dos contadores: {sumAllCountersValues()}</h1>
      <p style={{ color: 'white'}}>
        {JSON.stringify(counters)}
      </p>
      {
        counters.map((counter, index) => (
          <Counter
            key={index}
            counterName={counter.name}
            valueChange={_value => handleCounterValue(index, _value)}
          />
        ))
      }
    </div>
  );
}

export default App;
