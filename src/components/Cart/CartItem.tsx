import { useCart } from "../../contexts/CartContext";
import { Trash2, Plus, Minus } from "lucide-react";

interface CartItemProps {
  item: {
    id: number;
    title: string;
    price: number;
    quantity: number;
    image: string;
  };
}

export default function CartItem({ item }: CartItemProps) {
  const { removeItem, updateQuantity } = useCart();

  return (
    <div className="flex items-center border-b border-gray-200 py-4">
      <img
        src={item.image}
        alt={item.title}
        className="w-20 h-20 object-cover mr-4"
      />
      <div className="flex-grow">
        <h3 className="text-lg font-semibold">{item.title}</h3>
        <p className="text-gray-600">{item.price.toFixed(2)} €</p>
        <div className="flex items-center mt-2">
          <button
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            className="text-gray-500 focus:outline-none focus:text-gray-600"
          >
            <Minus className="h-5 w-5" />
          </button>
          <span className="text-gray-700 mx-2">{item.quantity}</span>
          <button
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="text-gray-500 focus:outline-none focus:text-gray-600"
          >
            <Plus className="h-5 w-5" />
          </button>
        </div>
      </div>
      <div className="text-right">
        <p className="text-lg font-semibold">
          {(item.price * item.quantity).toFixed(2)} €
        </p>
        <button
          onClick={() => removeItem(item.id)}
          className="text-red-500 focus:outline-none focus:text-red-600"
        >
          <Trash2 className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
