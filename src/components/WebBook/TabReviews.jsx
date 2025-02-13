import PropTypes from "prop-types";

const TabReviews = ({ reviews }) => {
  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.map((review) => (
          <li
            key={review.id}
            style={{ marginBottom: "20px", listStyleType: "none" }}
          >
            <strong>{review.name}</strong>

            <p>{review.review}</p>

            <div>
              {"⭐".repeat(review.rating)} {"❌".repeat(5 - review.rating)}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

TabReviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      review: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default TabReviews;
