import ImageFetcher from "./ImageFetcher";
import alex from './assets/FOLDER_NAME_ON_DESKTOP/Alex Pereira.jpg'
const assignImage = () => {
    

    let formattedName = lowerCaseName.replace(/\s+/g, '+');
    
    // return `https://www.ufc.com/athlete/${formattedName}`;

    return 'src/assets/FOLDER_NAME_ON_DESKTOP/Tom Aspinall.jpg';
}
function Picture(props) {
    const tom = `src/assets/FOLDER_NAME_ON_DESKTOP/${props.name}.jpg`;
    return(
        <div className="picture" style = {{backgroundColor: props.nameColor}}>
            {/* <ImageFetcher url={assignImage(props.name)} className="hero-profile__image"/> */}
            {/* <p>Picture goes of {props.name} goes here</p> */}
            {/* <img src={alex}/> */}
            <div>
                <img src={tom} style = {{marginTop: '-113px', marginLeft: '-10px'}}/>
            </div>
        </div>
    );
}

export default Picture