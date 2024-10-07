import PropTypes from "prop-types";

function Name(props) {
  return (
    <div className="name" style={{ backgroundColor: props.nameColor }}>
      <h1 className="textright">{props.name}</h1>
    </div>
  );
}

Name.propTypes = {
  nameColor: PropTypes.string,
  name: PropTypes.string,
};

export default Name;
