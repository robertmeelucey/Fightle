import PropTypes from "prop-types";

function Picture(props) {
  const tom = `/FOLDER_NAME_ON_DESKTOP/${props.name}.jpg`;
  return (
    <div className="picture" style={{ backgroundColor: props.nameColor }}>
      <div>
        <img src={tom} style={{ marginTop: "-113px", marginLeft: "-10px" }} />
      </div>
    </div>
  );
}

Picture.propTypes = {
  name: PropTypes.string,
  nameColor: PropTypes.string,
};

export default Picture;
