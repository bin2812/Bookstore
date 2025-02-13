const Stats = () => {
  const statsData = [
    {
      value: "20,000+",
      label: "TOTAL BOOKS",
      icon: "/book-icon.png", // Đường dẫn đến hình ảnh biểu tượng
      backgroundColor: "bg-pink-200",
    },
    {
      value: "1,000+",
      label: "AUTHORS",
      icon: "/avatar.png", // Đường dẫn đến hình ảnh biểu tượng
      backgroundColor: "bg-blue-200",
    },
    {
      value: "8,000+",
      label: "BOOKS SOLD",
      icon: "https://cdn-icons-png.flaticon.com/512/1942/1942770.png", // Đường dẫn đến hình ảnh biểu tượng
      backgroundColor: "bg-yellow-100",
    },
    {
      value: "97%",
      label: "HAPPY CUSTOMER",
      icon: "https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/stars-color-icon.png", // Đường dẫn đến hình ảnh biểu tượng
      backgroundColor: "bg-red-200",
    },
  ];

  return (
    <div className="flex justify-between gap-8 pb-24 px-[10%]">
      {statsData.map((stat, index) => (
        <div
          key={index}
          className="bg-transparent border-[1px] border-solid border-[#00000024] p-12 rounded-lg shadow-md w-[280px] flex items-center gap-4"
        >
          <div className={`p-4 rounded-full ${stat.backgroundColor}`}>
            <img src={stat.icon} alt={stat.label} className="w-10 h-10" />{" "}
          </div>
          {/* Hình ảnh biểu tượng */}
          <div>
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="text-sm text-gray-500">{stat.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
