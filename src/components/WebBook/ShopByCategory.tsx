import React from "react";
import { categoryData } from "../../constants/categories.const";
import { useNavigate } from "react-router-dom";

const ShopByCategory = () => {
  const navigate = useNavigate();
  return (
    <div className="py-24 px-[10%]">
      <div className="flex flex-row justify-start items-center gap-x-24">
        <h2 className="text-4xl font-bold">Shop by Category</h2>
        <span className="h-[1px] ml-12 w-1/2 bg-gray-400"></span>
      </div>
      <div className="grid grid-cols-3 gap-16 mt-12 px-5">
        {categoryData.map((category) => (
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
                <p className="text-gray-500 text-xs line-clamp-4">
                  {category.description}
                </p>
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopByCategory;
