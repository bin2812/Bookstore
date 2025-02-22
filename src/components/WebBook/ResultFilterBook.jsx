import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../../stores/cart.store";
import { userCounter } from "../../stores/user.store";
import { toast } from "react-toastify";

const ResultFilterBook = (props) => {
  const { bookList } = props;
  const navigate = useNavigate();
  const { user } = userCounter();
  const { addItem } = useCartStore();

  const handleAddToCart = async (book) => {
    if (!user) {
      toast.error("Please login to add items to cart", {
        position: "top-center",
      });
      navigate("/login");
      return;
    }

    try {
      await addItem(user.uid, {
        id: book.id,
        title: book.title,
        price: book.price,
        image: book.imgUrl,
      });
      toast.success("Added to cart successfully", {
        position: "top-center",
      });
    } catch (error) {
      console.error("Error adding to cart:", error);
      toast.error("Failed to add item to cart", {
        position: "top-center",
      });
    }
  };

  return (
    <div className="w-4/5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 px-5">
        {bookList.map((category) => (
          <div className="flex flex-row gap-8 w-full" key={category.id}>
            <div className="w-1/2 h-full overflow-hidden rounded-md">
              <img
                src={category.imgUrl}
                alt=""
                className="object-cover scale-100 hover:scale-105 transform rounded-md transition-all duration-150 ease-in-out w-full h-full"
              />
            </div>
            <div className="w-1/2 flex flex-col justify-evenly">
              <div>
                <h3 className="font-semibold">{category.title}</h3>
                <p className="text-xs italic">{category.authorName}</p>
                <p className="text-gray-500 text-xs line-clamp-2">
                  {category.description}
                </p>
                <p className="text-red-500 text-xs font-semibold">
                  {category.price}$
                </p>
                {/* {(<i className="fa-solid fa-star bg-yellow-500"></i>).repeat(
                  category.rating
                )} */}
                {/* {(<i className="fa-solid fa-star bg-slate-600"></i>).repeat(
                  5 - category.rating
                )} */}
                {Array.from({ length: category.rating }).map((_, i) => (
                  <i
                    key={i}
                    className="fa-solid fa-star text-yellow-400 text-sm"
                  ></i>
                ))}
                {Array.from({ length: 5 - category.rating }).map((_, i) => (
                  <i
                    key={i}
                    className="fa-regular fa-star text-yellow-400 text-sm"
                  ></i>
                ))}
              </div>
              <button
                onClick={() => {
                  navigate(`/${category.id}`);
                }}
                className="text-sm w-fit group p-2"
              >
                View more{" "}
                <i className="fa-solid fa-angle-right text-orange-600 group-hover:ml-3 transform transition-all duration-200 ease-in-out"></i>
              </button>
              <button
                onClick={() => handleAddToCart(category)}
                className="mt-4 bg-[#e04943] text-white px-4 py-2 rounded hover:bg-[#c13f39] transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
ResultFilterBook.propTypes = {
  bookList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      imgUrl: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      authorName: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ResultFilterBook;
