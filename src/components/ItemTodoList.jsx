import PropTypes from "prop-types";

const ItemTodoList = ({ id, text }) => {
  return (
    <div>
      <p className="italic font-mono font-semibold text-blue-600 text-center">
        {id}. {text}
      </p>
    </div>
  );
};

ItemTodoList.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
};

export default ItemTodoList;
