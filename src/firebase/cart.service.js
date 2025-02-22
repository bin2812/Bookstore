import { db } from "./firebase-config";
import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";

export const cartService = {
  // Khởi tạo giỏ hàng cho user mới
  async createCart(userId) {
    const cartRef = doc(db, "carts", userId);
    await setDoc(cartRef, {
      items: [],
      updatedAt: new Date().toISOString(),
    });
  },

  // Lấy thông tin giỏ hàng
  async getCart(userId) {
    const cartRef = doc(db, "carts", userId);
    const cartSnap = await getDoc(cartRef);
    return cartSnap.exists() ? cartSnap.data() : null;
  },

  // Thêm sản phẩm vào giỏ hàng
  async addToCart(userId, product) {
    const cartRef = doc(db, "carts", userId);
    const cart = await this.getCart(userId);

    if (!cart) {
      // Nếu giỏ hàng chưa tồn tại, tạo mới với sản phẩm đầu tiên
      await setDoc(cartRef, {
        items: [
          {
            productId: product.id,
            title: product.title,
            price: product.price,
            quantity: 1,
            image: product.image,
          },
        ],
        updatedAt: new Date().toISOString(),
      });
    } else {
      // Nếu giỏ hàng đã tồn tại, thêm sản phẩm vào
      await updateDoc(cartRef, {
        items: arrayUnion({
          productId: product.id,
          title: product.title,
          price: product.price,
          quantity: 1,
          image: product.image,
        }),
        updatedAt: new Date().toISOString(),
      });
    }
  },

  // Xóa sản phẩm khỏi giỏ hàng
  async removeFromCart(userId, productId) {
    const cartRef = doc(db, "carts", userId);
    const cart = await this.getCart(userId);
    if (!cart) return;

    const itemToRemove = cart.items.find(
      (item) => item.productId === productId
    );

    await updateDoc(cartRef, {
      items: arrayRemove(itemToRemove),
      updatedAt: new Date().toISOString(),
    });
  },

  // Cập nhật số lượng sản phẩm
  async updateQuantity(userId, productId, quantity) {
    const cartRef = doc(db, "carts", userId);
    const cart = await this.getCart(userId);
    if (!cart) return;

    const updatedItems = cart.items.map((item) =>
      item.productId === productId ? { ...item, quantity } : item
    );

    await updateDoc(cartRef, {
      items: updatedItems,
      updatedAt: new Date().toISOString(),
    });
  },
};
