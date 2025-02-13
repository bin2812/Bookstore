import PropTypes from "prop-types";

const BookItem = (props) => {
  const book = props.book;
  return (
    <div className="flex h-full flex-col items-center">
      <div className="w-full overflow-hidden">
        <img src={book.imgUrl} className="w-full h-full object-contain" />
      </div>
      <p className="font-bold text-[20px] mt-4 text-center">{book.title}</p>
      <p className="text-gray-600 text-center">{book.author}</p>
      <p className="text-[#2c3136] font-bold mt-2">${book.price}</p>
      <div className="flex justify-center items-center mt-2">
        {"⭐".repeat(book.rating)}
        {"❌".repeat(5 - book.rating)}
      </div>
      <button className="bg-[#2c3136] text-white px-4 py-2 rounded-lg mt-4 hover:bg-black transition-all duration-300">
        Buy Now
      </button>
    </div>
  );
};
BookItem.propTypes = {
  book: PropTypes.shape({
    imgUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default BookItem;
