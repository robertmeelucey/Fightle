import Picture from "./Picture"
import Flag from "./Flag";
import WeightClass from "./WeightClass";
import UFCEvent from "./Event";
import UFCDebutYear from './UFCDebutYear';
import Name from "./Name";
function FighterCard(props) {
    return(
        <div className="fighterCard">
            <Name name={props.name} nameColor={props.nameColor}/>
            <div className="card-body">
                <div className="left-half">
                    <Flag country={props.country} flag={props.flag} flagColor={props.countryColor}/>
                    <WeightClass weightClass={props.weightClass} weightClassColor={props.weightClassColor}/>
                    <UFCDebutYear ufcDebutYear={props.ufcDebutYear} ufcDebutYearColor={props.ufcDebutYearColor}></UFCDebutYear>
                </div>
                <div className="right-half">
                    <Picture name={props.name} nameColor={props.nameColor}/>
                </div>
            </div>
            {/* <div className="twoHalves">
                <div className="half">
                        <Picture name={props.name} nameColor={props.nameColor}/>
                    </div>
                    <div className="half">
                        <Flag country={props.country} flag={props.flag} flagColor={props.countryColor}/>
                        <WeightClass weightClass={props.weightClass} weightClassColor={props.weightClassColor}/>
                        <UFCDebutYear ufcDebutYear={props.ufcDebutYear} ufcDebutYearColor={props.ufcDebutYearColor}></UFCDebutYear>
                </div>
            </div> */}
        </div>
    );
}

export default FighterCard