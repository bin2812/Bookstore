import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";
import { categoryData } from "../../constants/categories.const";

const SideFilterBooks = (props) => {
  const { setBookList } = props;
  const [searchParams, setSearchParams] = useSearchParams();
  const [filter, setFilter] = useState({
    author: searchParams.get("author")
      ? searchParams.get("author").split(",")
      : [],
    price: searchParams.get("price") || "",
    rating: searchParams.get("rating") || "",
  });

  const handleAuthorFilter = (value) => {
    setFilter((prevFilter) => {
      const isExist = prevFilter.author.includes(value);
      const updatedAuthor = isExist
        ? prevFilter.author.filter((item) => item !== value)
        : [...prevFilter.author, value];

      return {
        ...prevFilter,
        author: updatedAuthor,
      };
    });
  };

  useEffect(() => {
    const authorQuery = searchParams.get("author");
    const priceQuery = searchParams.get("price");
    const ratingQuery = searchParams.get("rating");

    if (!authorQuery && !priceQuery && !ratingQuery) return;

    const resultFilter = categoryData.filter((item) => {
      const matchAuthor = authorQuery
        ? authorQuery.split(",").includes(item.authorName)
        : true;
      const splitPriceRange = priceQuery ? priceQuery.split(",") : [];
      const convertFormPrice = Number(splitPriceRange[0]);
      const convertToPrice = splitPriceRange[1]
        ? Number(splitPriceRange[1])
        : Infinity;
      console.log(
        "Giá bắt đầu: ",
        convertFormPrice,
        "Giá kết thúc",
        convertToPrice
      );
      const matchPrice =
        item.price < convertFormPrice || item.price > convertToPrice
          ? false
          : true;
      return matchAuthor && matchPrice;
    });

    setBookList(resultFilter);
  }, [searchParams, setBookList]);

  const handleApplyFilter = () => {
    console.log("Apply filter");
    console.log(filter);
    const params = {
      ...(filter.author.length > 0 && { author: filter.author.join(",") }),
      ...(filter.price && { price: filter.price }),
      ...(filter.rating && { rating: filter.rating }),
    };
    setSearchParams(params);
  };

  return (
    <div className="w-1/5 flex flex-col gap-4">
      <div>
        <h3 className="font-semibold">Tác giả</h3>
        <div className="flex flex-wrap flex-row gap-4 mt-3">
          {categoryData.map((item, index) => (
            <div className="cursor-pointer" key={item.id}>
              <input
                className="w-4 h-4 mr-2"
                type="checkbox"
                id={item.authorName + index}
                checked={filter.author.includes(item.authorName)}
                onClick={() => handleAuthorFilter(item.authorName)}
              />
              <label
                className="cursor-pointer"
                htmlFor={item.authorName + index}
              >
                {item.authorName}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-semibold">Giá</h3>
        <div className="flex flex-wrap flex-row gap-2 mt-3">
          <div
            className={`cursor-pointer border-2 border-solid border-[#fbeae9] hover:bg-[#fbeae9] ${
              filter.price === "0,100" && "bg-[#fbeae9]"
            } text-center px-4 py-2 rounded-3xl`}
            onClick={() => setFilter({ ...filter, price: "0,100" })}
          >
            💵 dưới 100$
          </div>
          <div
            className={`cursor-pointer border-2 border-solid border-[#fbeae9] hover:bg-[#fbeae9] ${
              filter.price === "100,500" && "bg-[#fbeae9]"
            } text-center px-4 py-2 rounded-3xl`}
            onClick={() => setFilter({ ...filter, price: "100,500" })}
          >
            💵 100$-500$
          </div>
          <div
            className={`cursor-pointer border-2 border-solid border-[#fbeae9] hover:bg-[#fbeae9] ${
              filter.price === "500,1000" && "bg-[#fbeae9]"
            } text-center px-4 py-2 rounded-3xl`}
            onClick={() => setFilter({ ...filter, price: "500,1000" })}
          >
            💵 500$-1000$
          </div>
          <div
            className={`cursor-pointer border-2 border-solid border-[#fbeae9] hover:bg-[#fbeae9] ${
              filter.price === "1000," && "bg-[#fbeae9]"
            } text-center px-4 py-2 rounded-3xl`}
            onClick={() => setFilter({ ...filter, price: "1000," })}
          >
            💵 trên 1000$
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-semibold">Đánh giá</h3>
        <div className="flex flex-wrap flex-row gap-4 mt-3">
          <div className="cursor-pointer">
            <input
              className="w-4 h-4 mr-2"
              type="checkbox"
              id="s1"
              checked={filter.rating.includes("5")}
            />
            <label className="cursor-pointer" htmlFor="s1">
              Từ 5 ⭐
            </label>
          </div>
          <div className="cursor-pointer">
            <input
              className="w-4 h-4 mr-2"
              type="checkbox"
              id="s2"
              checked={filter.rating.includes("4")}
            />
            <label className="cursor-pointer" htmlFor="s2">
              Từ 4 ⭐
            </label>
          </div>
          <div className="cursor-pointer">
            <input
              className="w-4 h-4 mr-2"
              type="checkbox"
              id="s3"
              checked={filter.rating.includes("3")}
              // onClick={() => setFilter({ ...filter, rating: "3" })}
            />
            <label className="cursor-pointer" htmlFor="s3">
              Từ 3 ⭐
            </label>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <button
          onClick={handleApplyFilter}
          className="border-[#ff6860] hover:bg-[#fbeae9] text-[#ff6860] border-solid border-2 mt-4 rounded-lg py-2 px-5 w-fit"
        >
          Áp dụng
        </button>
        <button
          onClick={() => {
            setSearchParams({});
            setFilter({
              author: [],
              price: "",
              rating: "",
            });
            setBookList(categoryData);
          }}
          className="border-[#ff6860] bg-[#ff6860] text-[#fbeae9] hover:opacity-85 border-solid border-2 rounded-lg py-2 px-5 w-fit"
        >
          Xóa bộ lọc
        </button>
      </div>
    </div>
  );
};
SideFilterBooks.propTypes = {
  setBookList: PropTypes.func.isRequired,
};

export default SideFilterBooks;
