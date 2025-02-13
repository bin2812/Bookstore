// rafce
const Banner = () => {
  return (
    <div className="bg-[#fbeae9ff] flex px-[16%] py-[5%] gap-10 items-center">
      <img
        className="pl-20"
        width="1000px"
        src="https://lh3.googleusercontent.com/qIQsreMdatacQVF6oxhqXG5xVgNPPLlpO5mY8NhTf9-YZ_mOhe6oF9zH5Yyqdw9qYdyLM-iZkUoFGajqV7MyJtoayEUoCeG7"
      />
      <div>
        <h2 className="text-[64px] text-[#2c3136] font-bold">
          Top 10 Books To Make It A Great Year
        </h2>
        <button className="bg-white px-6 py-2 rounded-3xl hover:bg-black hover:text-white transition-all duration-300 mt-4">
          Shop now
        </button>
      </div>
    </div>
  );
};

export default Banner;
