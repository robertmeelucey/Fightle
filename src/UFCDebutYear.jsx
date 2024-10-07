import PropTypes from "prop-types";

function UFCDebutYear(props) {
  return (
    <div
      className="ufcDebutYear"
      style={{ backgroundColor: props.ufcDebutYearColor }}
    >
      <h1>{props.ufcDebutYear}</h1>
    </div>
  );
}

UFCDebutYear.propTypes = {
  ufcDebutYearColor: PropTypes.string,
  ufcDebutYear: PropTypes.number,
};

export default UFCDebutYear;
