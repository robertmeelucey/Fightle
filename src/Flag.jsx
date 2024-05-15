function Flag(props) {
    return(
        <div className="flag" style = {{backgroundColor: props.flagColor}}>
            <img src={props.flag} style={{ width: '200px', height: 'auto' }}></img>
            {/* <p>flag of {props.country} goes here</p>
            <p>flag url {props.flag}</p> */}
        </div>
    );
}

export default Flag