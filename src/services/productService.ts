export const fetchProducts = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des produits");
    }
    return response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchProductById = async (id: string) => {
  try {
    console.log(`Fetching product by ID: ${id}`);
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    console.log(`Response status: ${response.status}`);
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération du produit");
    }
    return response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
