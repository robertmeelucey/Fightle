function Picture(props) {
    return(
        <div className="picture">
            {/* <img src="https://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/4705658.png&w=350&h=254"></img> */}
            <p>Picture goes of {props.name} goes here</p>
        </div>
    );
}

export default Picture