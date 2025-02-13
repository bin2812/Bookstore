import PropTypes from "prop-types";

const ItemCalculator = ({ num1, num2 }) => {
  const result = num1 + num2;
  return (
    <div>
      <p className="italic font-mono font-semibold text-blue-700">{`Operation: ${num1} + ${num2}`}</p>
      <p className="italic font-mono font-semibold text-blue-700">{`Result: ${result}`}</p>
    </div>
  );
};

ItemCalculator.propTypes = {
  num1: PropTypes.number.isRequired,
  num2: PropTypes.number.isRequired,
};

export default ItemCalculator;
