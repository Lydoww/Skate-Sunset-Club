import { useCart } from '../../contexts/CartContext';

export default function CartSummary() {
  const { items } = useCart();

  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
  const tax = subtotal * 0.2;
  const total = subtotal + tax;

  return (
    <div className="bg-gray-100 p-6 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Résumé du panier</h2>
      <div className="flex justify-between mb-2">
        <span>Sous-total</span>
        <span>{subtotal.toFixed(2)} €</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>TVA (20%)</span>
        <span>{tax.toFixed(2)} €</span>
      </div>
      <div className="flex justify-between font-semibold text-lg mb-4">
        <span>Total</span>
        <span>{total.toFixed(2)} €</span>
      </div>
      <button className="w-full bg-yellow-700 text-black py-2 px-4 rounded hover:bg-yellow-800 transition duration-200">
        Procéder au paiement
      </button>
    </div>
  );
}