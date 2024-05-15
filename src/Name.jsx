function Name(props) {
    return(
        <div className="name" style={{backgroundColor: props.nameColor}}>
            <h1>{props.name}</h1>
        </div>
    );
}

export default Name