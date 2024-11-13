export interface CartItem {
    id: number;
    title: string;
    price: number;
    quantity: number;
    image: string;
  }
  
  export interface CartContextType {
    items: CartItem[];
    addItem: (item: CartItem) => void;
    removeItem: (id: number) => void;
    updateQuantity: (id: number, quantity: number) => void;
    clearCart: () => void;
    itemCount: number;
  }
  