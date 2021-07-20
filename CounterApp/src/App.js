import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import CounterButton from './components/CounterButton';
import { useState } from 'react';

function App() {

  const [counterName, setCounterName] = useState("");
  const [counters, setCounters] = useState([]);
  const [countExcluir, setCounterExcluir] = useState("");

  const addCounter = () => {
    if (!counterName) {
      return alert('Nome do contador vazio');
    }
    if (counterName.length < 3) {
      return alert('Nome do contador deve possuir mais de 3 caracteres');
    }

    let existe=false;

    counters.forEach(c => {
      if (c.name == counterName){
        existe = true;
      }
      
    });

    if (existe){
      return alert('Já existe um contador com esse nome!')
    }

    setCounters([...counters, { name: counterName, value: 0 }]);
    setCounterName('');
  }


  const handleCounterValue = (index, value) => {
    const _counters = counters.slice();
    const counter = _counters.find((c, i) => i === index);
    if (counter) {
      counter.value = value;
    }
    setCounters(_counters);

  }

  const handleCounterName = (index, name) => {
    const _counters = counters.slice();
    const counter = _counters.find((c, i) => i === index);
    if (counter) {
      counter.name = name;
    }
    setCounters(_counters);

  }

  const excluirCounter = index => {
    const _counters = counters.slice();
    _counters.splice(index, 1);
    setCounters(_counters);
  }

  const excluirNome = () => {
    const _counters = counters.slice();

    let index=-1;

    counters.forEach((c, i)=> {
      if (c.name == countExcluir){
        index = i;
      }
    })

    if(index!=-1){
      _counters.splice(index, 1);
      setCounters(_counters);
    }
    else {
      alert("Não encontrado!")}
   
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
          <input type="text" value={counterName} onChange={e => setCounterName(e.target.value)}
           />
        </label>
        <CounterButton label="Adicionar" type="primary" click={addCounter} />

        <label>
          <span>Nome do contador que deseja excluir:</span>
          <input type="text" value={countExcluir} onChange={e => setCounterExcluir(e.target.value)}
           />
        </label>
        <CounterButton label="Excluir" type="primary" click={excluirNome} />
        
      </div>
      <h1>Soma dos contadores: {sumAllCountersValues()}</h1>
     
     {counters.map((counter) => (
       <h2>contador: {counter.name}</h2>
        ))}

      {counters.map((counter) => (
            <h2>Valor: {counter.value}</h2>
          ))}

      {
        counters.map((counter, index) => (
          <Counter
            key={index}
            counterName={counter.name}
            valueChange={_value => handleCounterValue(index, _value)}
            excluirCounter={()=> {
              excluirCounter(index)
            }}
            nameChange={_name => handleCounterName(index, _name)}
          />
        ))
      }
    </div>
  );
}

export default App;
