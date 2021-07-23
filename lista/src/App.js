import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [personName, setPersonName] = useState("");
  const [favoriteFoods, setFavoritesFood] = useState("");
  const [personAge, setPersonAge] = useState(0);
  const [people, setPeople] = useState([]);

  const addName = () => {
    if (!personName) {
      return alert('Nome da pessoa está vazio');
    }
    if (personName.length < 1) {
      return alert('Nome do contador deve possuir mais de 3 caracteres');
    }  

    let existe=false;

    people.forEach(c => {
      if (c.name == personName){
        existe = true;
      }
      
    } );

    if (existe!=true){
    setPeople([...people, { name: personName, age: personAge, foods: favoriteFoods.split(",")}]);
    setPersonAge(0);
    setPersonName('');
    setFavoritesFood('');
    }
  }

  return (
    <div className="App">
    <h1>Lista de Nomes</h1>
    <div className="addPerson">
      <label>
        <span>Nome completo:</span>
        <input type="text" value={personName} onChange={e => setPersonName(e.target.value)}
         />
      </label>
     
     <label>
       <span>Idade: </span>
        <input placeholder="Idade" type="number" value={personAge} onChange={e => setPersonAge(e.target.value)}/>
      </label> 

      <label>
       <span>Comidas Favoritas: </span>
        <input type="text" value={favoriteFoods} onChange={e => setFavoritesFood(e.target.value)}/>
      </label> 

      <button onClick={addName} > Adicionar </button>
    </div>
  
   {people.map((person) => (

     <div className= "person">
      <p>Nome completo: {person.name}</p>
      <p>Idade: {person.age}</p>
      
      <p> Comidas: </p>
      <ul>  
      {person.foods.map((food) => (
      <li>{food}</li>
      
   ))} </ul>

      </div>
      ))}  

  </div>
  );
}

export default App;
