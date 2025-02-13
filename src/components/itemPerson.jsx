import PropTypes from "prop-types";

const ItemPerson = ({ name, age, city }) => {
  return (
    <div>
      <p className="italic font-mono font-semibold text-blue-700">{name}</p>
      <p className="italic fontli-mono font-semibold text-blue-700">{age}</p>
      <p className="italic font-mono font-semibold text-blue-700">{city}</p>
    </div>
  );
};

ItemPerson.propTypes = {
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  age: PropTypes.number,
};

export default ItemPerson;
