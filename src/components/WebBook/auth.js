import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase/firebase-config";
import { toast } from "react-toastify";

export const register = async ({ email, password }) => {
  try {
    const resp = await createUserWithEmailAndPassword(auth, email, password);
    return resp.user;
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
};

export const login = async ({ email, password }) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    localStorage.setItem("user", JSON.stringify(res.user));
    return res.user;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
    localStorage.removeItem("user");
    toast.success("Logout successfully", {
      position: "top-center",
    });
    return true;
  } catch (error) {
    console.error("Logout error:", error);
    throw error;
  }
};
