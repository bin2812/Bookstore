import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./Header";
import { userCounter } from "../../stores/user.store";

const LayoutRoute: React.FC = () => {
  const { updateUser } = userCounter() as {
    updateUser: (user: any) => void;
  };
  const location = useLocation();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      updateUser(JSON.parse(userData));
    }
  }, [location.pathname]);

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default LayoutRoute;
