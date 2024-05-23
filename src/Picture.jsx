import ImageFetcher from "./ImageFetcher";
const assignImage = () => {
    

    let formattedName = lowerCaseName.replace(/\s+/g, '+');
    
    // return `https://www.ufc.com/athlete/${formattedName}`;

    return 'src/assets/FOLDER_NAME_ON_DESKTOP/Tom Aspinall.jpg';
}
function Picture(props) {
    const tom = `/FOLDER_NAME_ON_DESKTOP/${props.name}.jpg`;
    // const tom = <img src = "src/assets/FOLDER_NAME_ON_DESKTOP/Alex Pereira.jpg"></img>
    return(
        <div className="picture" style = {{backgroundColor: props.nameColor}}>
            {/* <img src ={tom} style = {{height: "400px"}}/> */}
                <div>
                    <img src={tom}/>
                </div>
        </div>
        // <>
        //     <img src ="src/assets/FOLDER_NAME_ON_DESKTOP/Brandon Moreno.jpg" style = {{height: "230px"}}/>
        // </>
    );
}

export default Picture