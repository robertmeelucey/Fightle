import FighterCard from "./FighterCard";
import { useEffect, useState } from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
//https://www.npmjs.com/package/react-search-autocomplete?activeTab=readmeg
import logo from "./assets/fontbolt.png";
import fighters from "./Fighters";
import flagMap from "./FlagMaps";

function App() {
  const [fightersSelected, setFightersSelected] = useState([]);
  const [answer] = useState(
    fighters[Math.floor(Math.random() * fighters.length)]
  );
  const [guesses, setGuesses] = useState(0);

  const [inputSearchString, setInputSearchString] = useState("");
  const items = fighters.map((fighter, index) => {
    return { id: index, name: fighter.name };
  });

  const [isDisabled, setIsDisabled] = useState(false);

  //answer in console so i actually know
  console.log(answer.name);

  const nameColor = (fighter) => {
    if (fighter.name === answer.name) {
      return "rgb(83,141,78)";
    } else {
      return "rgb(58, 58, 60)";
    }
  };

  const countryColor = (fighter) => {
    if (fighter.country === answer.country) {
      return "rgb(83,141,78)";
    } else if (fighter.continent === answer.continent) {
      return "rgb(178,159,77)";
    } else {
      return "rgb(58, 58, 60)";
    }
  };

  const weightClassColor = (fighter) => {
    if (fighter.weightClass === answer.weightClass) {
      return "rgb(83,141,78)";
    } else {
      return "rgb(58, 58, 60)";
    }
  };

  const ufcDebutColor = (fighter) => {
    if (fighter.ufcDebut === answer.ufcDebut) {
      return "rgb(83,141,78)";
    } else {
      return "rgb(58, 58, 60)";
    }
  };

  const ufcDebutYearColor = (fighter) => {
    const difference = Math.abs(fighter.ufcDebutYear - answer.ufcDebutYear);
    if (difference === 0) {
      return "rgb(83,141,78)"; // Green for exact match
    } else if (difference <= 3) {
      return "rgb(181,159,60)"; // Yellow for +/- 3 years difference
    } else {
      return "rgb(58, 58, 60)"; // Grey for others
    }
  };

  const handleGuessChange = () => {
    setGuesses((g) => g + 1);
  };

  const handleOnSelect = (item) => {
    setFightersSelected((f) => [
      fighters.find((obj) => obj["name"] === item.name),
      ...f,
    ]);
    handleGuessChange();

    setInputSearchString("     "); // if removed, input stops clearing
  };

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: "block", textAlign: "left" }}>{item.name}</span>
      </>
    );
  };

  useEffect(() => {
    setInputSearchString("");
    if (guesses == 10) {
      setIsDisabled(true);
    } else if (guesses != 0) {
      let str1 = fightersSelected[0].name;
      let str2 = answer.name;
      if (str1 == str2) {
        setIsDisabled(true);
      }
    }
  }, [guesses, answer.name, fightersSelected]);

  return (
    <div className="fullscreen">
      <img
        src={logo}
        style={{ width: 130, marginBottom: 20, borderRadius: 15 }}
      />
      <div style={{ width: 400, pointerEvents: isDisabled ? "none" : "auto" }}>
        <ReactSearchAutocomplete
          items={items}
          showIcon={false}
          placeholder="Search..."
          inputSearchString={inputSearchString}
          onSelect={handleOnSelect}
          autoFocus
          formatResult={formatResult}
          className="searchbar"
        />
      </div>
      <h1 className="guesses"> Guesses: {guesses}/10</h1>
      <ul className="list">
        {fightersSelected.map((fighter, index) => (
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
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

// TODO
// Add images for all fighters
// Potentially remove all fighters who don't have an image ??
// Experiment with making pic container taller and bringing the left side of name container in
// Pop up when user guesses correctly
// Add help button
