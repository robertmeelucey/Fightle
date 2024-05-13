import Picture from "./Picture"
import Flag from "./Flag";
import WeightClass from "./WeightClass";
import UFCEvent from "./Event";

function FighterCard(props) {
    return(
        <div className="card">
            <Picture name={props.name}/>
            <Flag flag={props.country}/>
            <WeightClass weightClass={props.weightClass}/>
            <UFCEvent ufcEvent={props.ufcDebut}/>
        </div>
    );
}

export default FighterCard