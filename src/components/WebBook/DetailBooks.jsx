import { useParams } from "react-router-dom";
import TabDetail from "./TabDetail";
import { categoryData } from "../../constants/categories.const";
import { useEffect, useState } from "react";

const DetailBooks = () => {
  let params = useParams();
  const [dataBook, setDataBook] = useState({}); // Khởi tạo state dataBook với giá trị ban đầu là object rỗng
  useEffect(() => {
    const dataBook = categoryData.find((item) => item.id == params.id);
    setDataBook(dataBook);
  }, [params.id]); // Chỉ chạy khi params.id thay đổi
  // useEffect: chạy sau khi giao diện được render
  // * 3 trường hợp:
  // 1. Không có tham số thứ 2: chạy mỗi khi render lại
  // 2. Có tham số thứ 2 là mảng rỗng: chạy 1 lần sau khi render
  // 3. Có tham số thứ 2 là 1 mảng: chạy mỗi khi 1 trong các phần tử trong mảng thay đổi
  return (
    <div className="px-[10%] py-24">
      <div className="flex gap-8 justify-between w-full">
        <div className="border-[1px] w-[500px] h-full border-[#00000024] border-solid p-5 rounded-xl">
          <img
            src={dataBook.imgUrl}
            alt=""
            className="object-contain h-full w-full"
          />
        </div>
        <div className="border-[1px] flex-1 h-fit border-[#00000024] border-solid p-5 rounded-xl flex-col flex gap-5">
          <h2 className="font-bold text-4xl">{dataBook.title}</h2>
          <p>
            <span className="text-gray-400 ">:Author:</span>{" "}
            {dataBook.authorName}
          </p>
          <hr className="w-2/3 " />
          <p className="text-red-500 text-2xl py-3 font-medium">
            ${dataBook.price}
          </p>
          <p className="text-slate-600 text-sm">{dataBook.description}</p>
          <hr className="w-2/3 py-2" />
          <button className="bg-red-600 text-white w-fit px-7 py-2 rounded-full">
            <i className="fa-solid fa-basket-shopping"></i>Buy Now
          </button>
        </div>
      </div>
      <TabDetail dataBook={dataBook} />
    </div>
  );
};

export default DetailBooks;
