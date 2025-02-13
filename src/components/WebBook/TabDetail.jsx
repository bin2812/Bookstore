import PropTypes from "prop-types";
import { useState } from "react";
import TabReviews from "./TabReviews";

const TabDetail = ({ dataBook }) => {
  const [tab, setTab] = useState("description");
  console.log(dataBook);
  return (
    <div className="px-[10%] mt-14 py-4 border-[1px] border-[#00000024] border-solid">
      <div className="flex items-center justify-center gap-5 mb-5">
        <buton
          className={`border-b-2 cursor-pointer border-solid border-transparent ${
            tab === "description" && "border-[#e04943]"
          } hover:border-[#e04943] transform transition-all duration-150`}
          onClick={() => setTab("description")}
        >
          Description
        </buton>
        <buton
          onClick={() => setTab("reviews")}
          className={`border-b-2 cursor-pointer border-solid border-transparent ${
            tab === "reviews" && "border-[#e04943]"
          } hover:border-[#e04943] transform transition-all duration-150`}
        >
          Reviews
        </buton>
      </div>
      <div className="text-slate-600 text-sm">
        {tab === "description" ? (
          dataBook.description
        ) : (
          <TabReviews reviews={dataBook.review} />
        )}
      </div>
    </div>
  );
};

TabDetail.propTypes = {
  dataBook: PropTypes.shape({
    description: PropTypes.string.isRequired,
    review: PropTypes.array.isRequired,
  }).isRequired,
};

export default TabDetail;
