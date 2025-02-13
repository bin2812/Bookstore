// rafce
// string: kiểu chữ
// number: kiểu số
// boolean: kiểu true/false
// array: kiểu mảng
// object: kiểu đối tượng
import PropTypes from "prop-types";

const ItemHobby = ({ stt, icon, title }) => {
  return (
    <li className="italic font-mono font-semibold text-blue-700">
      {stt}.{icon} ~ {title}
    </li>
  );
};

ItemHobby.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  stt: PropTypes.number,
};

export default ItemHobby;
