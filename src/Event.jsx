function UFCEvent(props) {
    return (
        <div className="event" style = {{backgroundColor: props.ufcDebutColor}}>
            <p className="event-title">{props.ufcEvent}</p>
        </div>
    );
}

export default UFCEvent