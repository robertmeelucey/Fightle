import Picture from "./Picture";
import Flag from "./Flag";
import WeightClass from "./WeightClass";
import UFCDebutYear from "./UFCDebutYear";
import Name from "./Name";
import PropTypes from "prop-types";
function FighterCard(props) {
  return (
    <div className="fighterCard">
      <Name name={props.name} nameColor={props.nameColor} />
      <div className="twoHalves">
        <div className="half">
          <Picture name={props.name} nameColor={props.nameColor} />
        </div>
        <div className="half">
          <Flag
            country={props.country}
            flag={props.flag}
            flagColor={props.countryColor}
          />
          <WeightClass
            weightClass={props.weightClass}
            weightClassColor={props.weightClassColor}
          />
          <UFCDebutYear
            ufcDebutYear={props.ufcDebutYear}
            ufcDebutYearColor={props.ufcDebutYearColor}
          ></UFCDebutYear>
        </div>
      </div>
    </div>
  );
}

FighterCard.propTypes = {
  name: PropTypes.string,
  nameColor: PropTypes.string,
  country: PropTypes.string,
  flag: PropTypes.string,
  countryColor: PropTypes.string,
  weightClass: PropTypes.string,
  weightClassColor: PropTypes.string,
  ufcDebutYear: PropTypes.number,
  ufcDebutYearColor: PropTypes.string,
};

export default FighterCard;
