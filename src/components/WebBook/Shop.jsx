import React from "react";
import SideFilterBooks from "./SideFilterBooks";
import ResultFilterBook from "./ResultFilterBook";
import { categoryData } from "../../constants/categories.const";

const Shop = () => {
  const [bookList, setBookList] = React.useState(categoryData);
  return (
    <div className="pt-32 pb-24 px-[10%] flex flex-row min-h-screen">
      <SideFilterBooks setBookList={setBookList} />
      <ResultFilterBook bookList={bookList} />
    </div>
  );
};

export default Shop;
