import { bookList } from "../../constants/books.const";
import BookItem from "./BookItem";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const BookList = () => {
  return (
    <div className="px-[10%] py-[5%] bg-[#fff7f0]">
      <h2 className="text-[36px] text-[#2c3136] font-bold text-center mb-8">
        Featured Books
      </h2>
      <div className="flex mx-[2%] px-15 relative">
        <Swiper
          spaceBetween={100}
          slidesPerView={4}
          onSwiper={(swiper) => console.log(swiper)}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          modules={[Autoplay, Navigation]}
        >
          {bookList.map((book) => (
            <SwiperSlide key={book.id}>
              <BookItem book={book} />
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          className="custom-prev w-10 h-10 hover:shadow-lg absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-[#2c3136] text-white p-2 rounded-full"
          aria-label="Previous"
        >
          {/* Replace this icon with any desired one */}
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button
          className="custom-next w-10 h-10 hover:shadow-lg absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-[#2c3136] text-white p-2 rounded-full"
          aria-label="Next"
        >
          {/* Replace this icon with any desired one */}
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default BookList;
