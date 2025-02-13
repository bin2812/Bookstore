import { Link } from "react-router-dom";

const Support = () => {
  return (
    <footer className="bg-[#222] text-white flex justify-between items-start px-[10%] py-24">
      <div className="w-1/2">
        <h2 className="text-7xl font-semibold">Tempi</h2>
        <p>Peakview Tower, 36 Hoang Cau, Dong Da, Hanoi</p>
        <p>012.3344.566</p>
        <p>support@tempi.vn</p>
        <div style={{ display: "flex", gap: "15px", marginTop: "15px" }}>
          <Link
            target="_blank"
            to="https://facebook.com"
            style={{ color: "#fff" }}
          >
            <i className="fa-brands fa-facebook text-2xl"></i>
          </Link>
          <a href="#" style={{ color: "#fff" }}>
            <i className="fa-brands fa-youtube text-3xl"></i>
          </a>
          <a href="#" style={{ color: "#fff" }}>
            TikTok
          </a>
          <a href="#" style={{ color: "#fff" }}>
            Instagram
          </a>
          <a href="#" style={{ color: "#fff" }}>
            Zalo
          </a>
        </div>
      </div>

      <div className="w-1/2">
        <h3 style={{ marginBottom: "20px", fontSize: "24px" }}>Need Help?</h3>
        <form style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <input
            type="text"
            placeholder="Name"
            required
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "18px",
              width: "100%",
            }}
          />
          <input
            type="email"
            placeholder="Email"
            required
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "18px",
              width: "100%",
            }}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "18px",
              width: "100%",
            }}
          />
          <textarea
            placeholder="Leave us a message..."
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              resize: "none",
              fontSize: "18px",
              width: "100%",
              minHeight: "150px",
            }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: "#e74c3c",
              color: "#fff",
              border: "none",
              fontSize: "18px",
              cursor: "pointer",
            }}
            className="w-fit rounded-3xl px-6 py-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Support;
