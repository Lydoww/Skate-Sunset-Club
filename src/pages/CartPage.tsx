import { useCart } from "../contexts/CartContext";
import CartItem from "../components/Cart/CartItem";
import CartSummary from "../components/Cart/CartSummary";
import EmptyCartMessage from "../components/Cart/EmptyCartMessage";
import Navbar from "@/components/Bars/Navbar";

export default function CartPage() {
  const { items } = useCart();

  return (
    <>
      <Navbar isProductDetailPage={true} scroll={false} />
      <div className="container mx-auto px-4 py-8 mt-24">
        {items.length === 0 ? (
          <EmptyCartMessage />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
            <div className="md:col-span-1">
              <CartSummary />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
