import { useEffect } from "react";
import { useCartStore } from "../../stores/cart.store";
import { userCounter } from "../../stores/user.store";

const Cart = () => {
  const { user } = userCounter();
  const { items, loading, fetchCart, removeItem, updateQuantity } =
    useCartStore();

  useEffect(() => {
    if (user?.uid) {
      fetchCart(user.uid);
    }
  }, [user, fetchCart]);

  if (loading) return <div className="pt-32">Loading...</div>;

  return (
    <div className="container mx-auto p-6 pt-32">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.productId} className="flex items-center border p-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-cover"
              />
              <div className="ml-4 flex-grow">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-gray-600">${item.price}</p>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() =>
                      updateQuantity(
                        user.uid,
                        item.productId,
                        Math.max(0, item.quantity - 1)
                      )
                    }
                    className="px-2 py-1 border"
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    onClick={() =>
                      updateQuantity(
                        user.uid,
                        item.productId,
                        item.quantity + 1
                      )
                    }
                    className="px-2 py-1 border"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeItem(user.uid, item.productId)}
                    className="ml-4 text-red-500"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="mt-4 text-right">
            <p className="text-xl font-bold">
              Total: $
              {items
                .reduce((sum, item) => sum + item.price * item.quantity, 0)
                .toFixed(2)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
