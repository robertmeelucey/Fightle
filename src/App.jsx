import FighterCard from "./FighterCard";
import Modal from "./Modal";
import React,{useEffect, useState} from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
//https://www.npmjs.com/package/react-search-autocomplete?activeTab=readmeg
import logo from './assets/fontbolt.png'
import fighters from "./Fighters";
import flagMap from "./FlagMaps";
import ImageFetcher from './ImageFetcher';
import Popup from "./Popup";

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
  const [isDisabled, setIsDisabled] = useState(false);



  
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

  const handleOpenPopup = () => {
    modal.classList.add("open");
  }

  const handleClosePopup = () => {
    modal.classList.remove("open");
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
    if (guesses == 10) {
      setIsDisabled(d => d = true);
    }
    if (guesses != 0) {
      let str1 = fightersSelected[0].name;
      let str2 = answer.name;
      if (str1 == str2) {
        setIsDisabled(d => d = true);
      }
    }
  }, [guesses]);

  
  const containerStyle = {
    width: 400,
    pointerEvents: isDisabled ? 'none' : 'auto',
  };
  
  return (
    <div className="fullscreen">
    {/* <Popup/> */}
    <div className="header">
      <img src={logo} style={{width: 130, marginBottom: 20, borderRadius: 15}}/>
    </div>
      {/* {openModal && <Modal closeModal={setOpenModal}/>} */}
      <div style={{width: 340, pointerEvents: isDisabled ? 'none' : 'auto'}}>
          <ReactSearchAutocomplete
            items={items}
            showIcon={false}
            placeholder='Search...'
            inputSearchString={inputSearchString}
            onSelect={handleOnSelect}
            autoFocus
            formatResult={formatResult}
            className="searchbar"
          />
        </div>
      {/* <input type='search' value={fighterName} onChange={handleFighterNameChange} placeholder='Search...' onKeyDown={handleKeyDown} className="searchBar"></input> */}
      {/* <button onClick={() => {selectFighter(), handleGuessChange()}}>Enter</button>
      <button onClick={() => setOpenModal(true)}>??Help??</button> */}
      <h1 className="guesses"> Guesses: {guesses}/10</h1>
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
        flag={flagMap[fighter.country]}

        ></FighterCard>
        </li>)}
      </ul>
    </div>
  );
};

export default App;

// TODO
// Add featherweights ✅
// Add bantamweights ✅
// Add flyweights ✅
// Add images for all fighters ✅
// Potentially remove all fighters who don't have an image ?? ✅
// Fix font size formatting for Name, Weightclass, UfcDebutEvent ✅
// Experiment with making pic container taller and bringing the left side of name container in ✅
// Pop up when user guesses correctly
// Prevent user from submitting anymore answers when they have guessed correctly ✅
// Pop up when users run out of answers ✅
// Add help button
// remove npc's ✅