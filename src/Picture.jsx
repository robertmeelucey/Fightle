function Picture(props) {
    return(
        <div className="picture" style = {{backgroundColor: props.nameColor}}>
            <img src="https://mmajunkie.usatoday.com/wp-content/uploads/sites/91/2024/02/Ilia-Topuria-def.-Alexander-Volkanovski-UFC-298-421.jpg?w=1000&h=600&crop=1"></img>
            {/* <p>Picture goes of {props.name} goes here</p> */}
        </div>
    );
}

export default Picture