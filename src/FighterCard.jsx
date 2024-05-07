import Picture from "./Picture"
import Flag from "./Flag";
import WeightClass from "./WeightClass";
import UFCEvent from "./Event";

function FighterCard() {
    return(
        <div className="card">
            <Picture/>
            <Flag/>
            <WeightClass/>
            <UFCEvent/>
        </div>
    );
}

export default FighterCard