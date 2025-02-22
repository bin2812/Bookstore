import { create } from "zustand";

export const userCounter = create((set) => ({
  user: null,
  resetUser: () => set({ user: null }),
  updateUser: (newUsers) => set({ user: newUsers }),
}));
