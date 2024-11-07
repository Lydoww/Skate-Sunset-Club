import { Link } from 'react-router-dom';

export default function EmptyCartMessage() {
  return (
    <div className="text-center py-12">
      <h2 className="text-2xl font-semibold mb-4">Votre panier est vide</h2>
      <p className="text-gray-600 mb-8">Il semble que vous n'ayez pas encore ajouté d'articles à votre panier.</p>
      <Link to="/products" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200">
        Continuer vos achats
      </Link>
    </div>
  );
}