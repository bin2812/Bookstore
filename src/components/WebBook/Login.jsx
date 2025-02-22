import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import TextFieldCustom from "../../common/TextFieldCustom";
import { login } from "./auth";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const validateForm = () => {
    const newErrors = {};
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        setIsLoading(true);
        const user = await login({
          email: formData.email,
          password: formData.password,
        });
        console.log("user login successfully", user);
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/");
        toast.success("Login successful", {
          position: "top-center",
        });
      } catch (error) {
        console.error("Login error:", error);
        if (error.code === "auth/invalid-email") {
          setErrors({ ...errors, email: "Invalid email address" });
        } else {
          setErrors({
            ...errors,
            submit: "Email or password is incorrect",
          });
        }
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className=" flex h-screen">
      <div className="w-1/2 flex justify-center pl-[5%] pr-[5%] flex-col ">
        <h2 className="text-3xl font-bold text-[#e04943] ">
          Login to Unlock Possibilities!
        </h2>
        <p className="text-gray-500 py-10">
          Welcome back! Please login to your account.
        </p>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <TextFieldCustom
            id="email"
            label="Email"
            name="email"
            variant="filled"
            value={formData.email}
            onChange={(e) => handleChange(e)}
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextFieldCustom
            id="password"
            label="Password"
            name="password"
            variant="filled"
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={(e) => handleChange(e)}
            error={!!errors.password}
            helperText={errors.password}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? "hide the password" : "display the password"
                  }
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
          {errors.submit && (
            <p className="text-red-500 text-sm mt-2">{errors.submit}</p>
          )}
          <div className="flex flex-row gap-5 mt-10">
            <button
              type="submit"
              disabled={isLoading}
              className="py-3 px-4 bg-[#e04943] text-white rounded hover:bg-[#c13f39] transition-colors disabled:opacity-50"
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>
      </div>
      <div className="w-1/2 bg-[#E5E5E569] flex items-center justify-center">
        <img src="/Bike.png" alt="Placeholder" />
      </div>
    </div>
  );
};

export default Login;
