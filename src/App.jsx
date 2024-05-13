import FighterCard from "./FighterCard";
import React,{useState} from 'react';

function App() {
  // const [fighterCards, setFighterCards] = useState([]);
  // const [event, setEvent] = useState("");
  // const [flag, setFlag] = useState("");

  const [fightersSelected, setFightersSelected] = useState([]);
  const [fighterName, setFighterName] = useState('');

  const fighters = [
  {name:"Islam Makhachev", country:" Russia ", weightClass:"Lightweight ", ufcDebut:"UFC 187"},
  {name:"Jon Jones", country:" USA ", weightClass:"Heavyweight ", ufcDebut:"UFC 87"},
  {name:"Leon Edwards", country:" England ", weightClass:"Welterweight ", ufcDebut:"UFC Fight Night: Shogun vs. Saint Preux"},
  {name:"Alex Pereira", country:" Brazil ", weightClass:"Light Heavyweight ", ufcDebut:"UFC 268"},
  {name:"Ilia Topuria", country:" Spain ", weightClass:"Featherweight ", ufcDebut:"UFC Fight Night: Moraes vs. Sandhagen"},
  {name:"Charles Oliveira", country:" Brazil ", weightClass:"Lightweight ", ufcDebut:"UFC Live: Jones vs. Matyushenko"},
  {name:"Alexander Volkanovski", country:" Australia ", weightClass:"Featherweight ", ufcDebut:"UFC Fight Night 101"},
  {name:"Sean O'Malley", country:" USA ", weightClass:"Bantamweight ", ufcDebut:"UFC 222"},
  {name:"Dricus Du Plessis", country:" South Africa ", weightClass:"Middleweight ", ufcDebut:"UFC Fight Night 179"},
  {name:"Alexandre Pantoja", country:" Brazil ", weightClass:"Flyweight ", ufcDebut:"UFC on Fox: Shevchenko vs. Peña"},
  ]

  const handleFighterNameChange = (e) => {
    setFighterName(e.target.value);
  }

  const selectFighter = () => {
    setFightersSelected(f => [fighters.find(obj => obj['name'] === fighterName), ...f]);
    setFighterName('');
  }

  const handleKeyDown = (e, fighterName) => {
    if (e.key === 'Enter') {
      selectFighter();
    }
  }

  
  return (
    <div>
      <input type='text' value={fighterName} onChange={handleFighterNameChange} placeholder='Type in name of Fighter' onKeyDown={handleKeyDown}></input>
      <button onClick={() => selectFighter()}>Enter</button>
      <h2>Fighters Selected</h2>
      <ul>
        {fightersSelected.map((fighter, index) =>
        <li key={index}>
        <FighterCard 
        name={fighter.name} 
        country={fighter.country} 
        weightClass={fighter.weightClass} 
        ufcDebut={fighter.ufcDebut}></FighterCard>
        </li>)}
      </ul>
    </div>
  );
};

export default App
