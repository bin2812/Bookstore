const Bookstore = () => {
  const stores = [
    {
      city: "Hanoi",
      address: "Peakview Tower, 36 Hoang Cau, Dong Da, Hanoi",
      phone: "012.3344.566",
      email: "support@tempi.vn",
      workingHours: "Open: 8:00AM – Close: 18:00PM\nSaturday – Sunday: Close",
      image: "https://library.hust.edu.vn/sites/default/files/th0107200244.jpg",
    },
    {
      city: "Hanoi",
      address: "Peakview Tower, 36 Hoang Cau, Dong Da, Hanoi",
      phone: "012.3344.566",
      email: "support@tempi.vn",
      workingHours: "Open: 8:00AM – Close: 18:00PM\nSaturday – Sunday: Close",
      image:
        "https://chaohanoi.com/wp-content/uploads/2020/05/Mao-bookstore-2.jpg",
    },
    {
      city: "Hanoi",
      address: "Peakview Tower, 36 Hoang Cau, Dong Da, Hanoi",
      phone: "012.3344.566",
      email: "support@tempi.vn",
      workingHours: "Open: 8:00AM – Close: 18:00PM\nSaturday – Sunday: Close",
      image:
        "https://cafefcdn.com/203337114487263232/2023/7/20/xaj6i2854-scaledjpgpagespeedicmiiy8dmtt-1689892107138778357799-1689866426727-168986642681496055251.jpg",
    },
  ];

  return (
    <div className="bookstore">
      <h1 className="bookstore-title">Our Bookstore</h1>
      <div className="bookstore-container">
        {stores.map((store, index) => (
          <div key={index} className="bookstore-card">
            <img
              src={store.image}
              alt={`Bookstore ${store.city}`}
              className="bookstore-image"
            />
            <h2 className="bookstore-city">{store.city}</h2>
            <p className="bookstore-address">{store.address}</p>
            <p className="bookstore-contact">{store.phone}</p>
            <p className="bookstore-email">{store.email}</p>
            <p className="bookstore-hours">{store.workingHours}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookstore;
