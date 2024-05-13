function Flag(props) {
    return(
        <div className="flag">
            {/* <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1200px-Flag_of_Brazil.svg.png"
            style={{ width: '200px', height: 'auto' }}></img> */}
            <p>flag of {props.flag} goes here</p>
        </div>
    );
}

export default Flag