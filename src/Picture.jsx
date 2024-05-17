import ImageFetcher from "./ImageFetcher";
const assignImage = (name) => {
    let lowerCaseName = name.toLowerCase();
    

    let formattedName = lowerCaseName.replace(/\s+/g, '-');
    
    return `https://www.ufc.com/athlete/${formattedName}`;
}

function Picture(props) {
    return(
        <div className="picture" style = {{backgroundColor: props.nameColor}}>
            <ImageFetcher url={assignImage(props.name)} className="hero-profile__image"/>
            {/* <p>Picture goes of {props.name} goes here</p> */}
        </div>
    );
}

export default Picture