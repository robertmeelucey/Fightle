import PropTypes from "prop-types";

function WeightClass(props) {
  return (
    <div
      className="weight-class"
      style={{ backgroundColor: props.weightClassColor }}
    >
      <h1>{props.weightClass}</h1>
    </div>
  );
}

WeightClass.propTypes = {
  weightClassColor: PropTypes.string,
  weightClass: PropTypes.string,
};

export default WeightClass;
