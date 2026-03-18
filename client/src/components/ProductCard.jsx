import { Link } from "react-router-dom";
import Card from "./Card";

function ProductCard({ product }) {

  return (
    <Card>

      <h3 className="text-xl font-semibold mb-2">
        {product.name}
      </h3>

      <p className="text-gray-500 mb-2">
        Category: {product.category}
      </p>

      <p className="text-lg font-bold mb-4">
        ${product.price}
      </p>

      <Link
        to="/request-order"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Request Supply
      </Link>

    </Card>
  );

}

export default ProductCard;