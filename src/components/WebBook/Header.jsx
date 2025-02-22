// Mỗi element sẽ tương ứng với 1 cái box,
// padding là khoảng cách từ nội dung đến viền,
// border là viền,
// margin là khoảng cách từ box này đến box khác
import { Button } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logout } from "./auth";
import { userCounter } from "../../stores/user.store";
export function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, resetUser } = userCounter();
  const menuLink = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About us",
      href: "/about-us",
    },
    {
      name: "Shop",
      href: "/shop",
    },
    {
      name: "Contact",
      href: "/contact",
    },
    {
      name: "Cart",
      href: "/cart",
    },
  ];
  return (
    <div className="flex fixed bg-white z-50 w-full justify-between px-40 py-6 items-center shadow-md">
      <div>
        <img src="https://lh3.googleusercontent.com/bhg6FoxZPA5S6q50_Gmu6YgMt2GcKxpjsbnaRvvHUwSV9JSnAj83TpbJEHIJjgKnbNoZmM7Mnx0pBlUau5CG2yIOG5v7rGc=w100-rw" />
      </div>
      <ul className="flex gap-8">
        {menuLink.map((item, index) => (
          <li
            key={index}
            className={`cursor-pointer ${
              location.pathname === item.href
                ? "text-[#e04943ff]"
                : "hover:text-[#e04943ff]"
            }`}
          >
            <Link to={item.href}>{item.name}</Link>
          </li>
        ))}
        {user ? (
          <>
            <p>{user.email}</p>
            <li className="cursor-pointer hover:text-[#e04943ff]}">
              <Button
                onClick={async () => {
                  const status = await logout();
                  if (status) {
                    navigate("/login");
                    resetUser();
                  }
                }}
              >
                Logout
              </Button>
            </li>
          </>
        ) : (
          <>
            <li
              className={`cursor-pointer ${
                location.pathname === "/login"
                  ? "text-[#e04943ff]"
                  : "hover:text-[#e04943ff]"
              }`}
            >
              <Link to="/login">Login</Link>
            </li>
            <li
              className={`cursor-pointer ${
                location.pathname === "/register"
                  ? "text-[#e04943ff]"
                  : "hover:text-[#e04943ff]"
              }`}
            >
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}
