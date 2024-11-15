import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

import { CartItem, CartContextType } from "@/types/CartTypes";

export const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

const SESSION_DURATION = 60 * 60 * 1000;

export function CartContextProvider({ children }: CartProviderProps) {
  const [items, setItems] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem("cartItems");
    const savedTimestamp = localStorage.getItem("cartTimestamp");

    if (savedCart && savedTimestamp) {
      const timestamp = parseInt(savedTimestamp, 10);
      const currentTime = Date.now();

      if (currentTime - timestamp < SESSION_DURATION) {
        return JSON.parse(savedCart);
      } else {
        localStorage.removeItem("cartItems");
        localStorage.removeItem("cartTimestamp");
      }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(items));
    localStorage.setItem("cartTimestamp", Date.now().toString());
  }, [items]);

  const addItem = (item: CartItem) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      }
      return [...prevItems, item];
    });
  };

  const removeItem = (id: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(0, quantity) } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
    localStorage.removeItem("cartItems");
    localStorage.removeItem("cartTimestamp");
  };

  const itemCount = items.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        itemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
