import FighterCard from "./FighterCard";
import Modal from "./Modal";
import React,{useEffect, useState} from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
//https://www.npmjs.com/package/react-search-autocomplete?activeTab=readmeg
import logo from './assets/fightle.logo.jpg'
import fighters from "./Fighters";
import flagMap from "./FlagMaps";
import ImageFetcher from './ImageFetcher';

function App() {


  //Declaring variables
  const [fightersSelected, setFightersSelected] = useState([]);
  const [fighterName, setFighterName] = useState('');
  const [answer, setAnswer] = useState(fighters[Math.floor(Math.random() * fighters.length)]);
  const [guesses, setGuesses] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [inputSearchString, setInputSearchString] = useState('');
  const items = fighters.map((fighter, index) => {
    return { id: index, name: fighter.name };
  });
  const reset = '';



  
  //answer in console so i actually now when i'm testing lol
  console.log(answer.name);







  //determining colors of parts of fightercard
  const nameColor = (fighter) => {
    if (fighter.name === answer.name) {
      return 'rgb(83,141,78)';
    } else {
      return 'rgb(58, 58, 60)';
    }
  }
  const countryColor = (fighter) => {
    if (fighter.country === answer.country) {
      return 'rgb(83,141,78)';
    } else if (fighter.continent === answer.continent){
      return 'rgb(178,159,77)'
    } else {
      return 'rgb(58, 58, 60)';
    }
  }
  const weightClassColor = (fighter) => {
    if (fighter.weightClass === answer.weightClass) {
      return 'rgb(83,141,78)';
    } else {
      return 'rgb(58, 58, 60)';
    }
  }
  const ufcDebutColor = (fighter) => {
    if (fighter.ufcDebut === answer.ufcDebut) {
      return 'rgb(83,141,78)';
    } else {
      return 'rgb(58, 58, 60)';
    }
  }
  const ufcDebutYearColor = (fighter) => {
    const difference = Math.abs(fighter.ufcDebutYear - answer.ufcDebutYear);
    if (difference === 0) {
        return 'rgb(83,141,78)'; // Green for exact match
    } else if (difference <= 3) {
        return 'rgb(181,159,60)'; // Yellow for +/- 3 years difference
    } else {
        return 'rgb(58, 58, 60)'; // Grey for others
    }
}






  const handleFighterNameChange = (e) => {
    setFighterName(e.target.value);
  }
  const handleGuessChange = () => {
    setGuesses(g => g + 1);
  }
  const selectFighter = () => {
    setFightersSelected(f => [fighters.find(obj => obj['name'] === fighterName), ...f]);
    setFighterName('');
  }
  // const handleKeyDown = (e) => {
  //   if (e.key === 'Enter') {
  //     handleGuessChange();
  //     selectFighter();
  //   }
  // }

  const handleOnSelect = (item) => {
    // the item selected
    setFightersSelected(f => [fighters.find(obj => obj['name'] === item.name), ...f]);
    handleGuessChange();

    setInputSearchString('12345'); // if i remove this line, search stops auto clearing
  }


  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
      </>
    )
  }

  useEffect(() => {
    setInputSearchString('');
  }, [guesses])
  
  
  return (
    <div className="fullscreen">
    <img src={logo} style={{width: 130, marginBottom: 20, borderRadius: 15}}/>
      {/* {openModal && <Modal closeModal={setOpenModal}/>} */}
      <div style={{ width: 400 }}>
          <ReactSearchAutocomplete
            items={items}
           
            placeholder='Search...'
            inputSearchString={inputSearchString}
            onSelect={handleOnSelect}
            autoFocus
            showNoResults
            formatResult={formatResult}
          />
        </div>
      {/* <input type='search' value={fighterName} onChange={handleFighterNameChange} placeholder='Search...' onKeyDown={handleKeyDown} className="searchBar"></input> */}
      {/* <button onClick={() => {selectFighter(), handleGuessChange()}}>Enter</button>
      <button onClick={() => setOpenModal(true)}>??Help??</button> */}
      <h1> Guesses: {guesses}/10</h1>
      <ul className="list">
        {fightersSelected.map((fighter, index) =>
        <li key={index}>
        <FighterCard 

        name={fighter.name} 
        nameColor={nameColor(fighter)}
        country={fighter.country}
        countryColor={countryColor(fighter)}
        weightClass={fighter.weightClass} 
        weightClassColor={weightClassColor(fighter)}
        ufcDebut={fighter.ufcDebut}
        ufcDebutColor={ufcDebutColor(fighter)}
        ufcDebutYear={fighter.ufcDebutYear}
        ufcDebutYearColor={ufcDebutYearColor(fighter)}
        flag={flagMap[fighter.country.trim()]}

        ></FighterCard>
        </li>)}
      </ul>
    </div>
  );
};

export default App

// TODO
// Fix formatting issues
// Add more fighters 
// Add pics of fighters
// Dropdown search
// Not allow illegal search
// Add winning screen
// Add losing screen
