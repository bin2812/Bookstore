import { create } from "zustand";
import { cartService } from "../firebase/cart.service";

interface CartItem {
  productId: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartStore {
  items: CartItem[];
  loading: boolean;
  error: string | null;
  fetchCart: (userId: string) => Promise<void>;
  addItem: (userId: string, product: any) => Promise<void>;
  removeItem: (userId: string, productId: string) => Promise<void>;
  updateQuantity: (
    userId: string,
    productId: string,
    quantity: number
  ) => Promise<void>;
}

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  loading: false,
  error: null,

  fetchCart: async (userId) => {
    try {
      set({ loading: true });
      const cart = await cartService.getCart(userId);
      console.log("cart", cart);
      set({ items: cart?.items || [], loading: false });
    } catch (error) {
      set({ error: "Failed to fetch cart", loading: false });
    }
  },

  addItem: async (userId, product) => {
    try {
      set({ loading: true });
      await cartService.addToCart(userId, product);
      const cart = await cartService.getCart(userId);
      set({ items: cart?.items || [], loading: false });
    } catch (error) {
      set({ error: "Failed to add item", loading: false });
    }
  },

  removeItem: async (userId, productId) => {
    try {
      set({ loading: true });
      await cartService.removeFromCart(userId, productId);
      const cart = await cartService.getCart(userId);
      set({ items: cart?.items || [], loading: false });
    } catch (error) {
      set({ error: "Failed to remove item", loading: false });
    }
  },

  updateQuantity: async (userId, productId, quantity) => {
    try {
      set({ loading: true });
      await cartService.updateQuantity(userId, productId, quantity);
      const cart = await cartService.getCart(userId);
      set({ items: cart?.items || [], loading: false });
    } catch (error) {
      set({ error: "Failed to update quantity", loading: false });
    }
  },
}));
