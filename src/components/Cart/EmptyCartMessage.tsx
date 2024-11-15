import { Link } from 'react-router-dom';
import Footer from '../Bars/FootBar';

export default function EmptyCartMessage() {
  return (
    <>
    <div className="flex flex-col items-center justify-center">
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
        <p className="text-gray-600 mb-8">It seems you haven’t added any items to your cart yet.</p>
        <Link to="/products" className="bg-yellow-700 text-black py-2 px-4 rounded hover:bg-yellow-800 transition duration-200">
          Continue shopping
        </Link>
      </div>
    </div>
    </>
  );
}
