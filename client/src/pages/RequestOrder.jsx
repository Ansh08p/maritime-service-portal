import { useEffect, useState } from "react";
import API from "../services/api";
import PageContainer from "../components/PageContainer";
import Card from "../components/Card";
import { motion } from "framer-motion";

function RequestOrder() {

  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [shipName, setShipName] = useState("");
  const [port, setPort] = useState("");

  useEffect(() => {

    const fetchProducts = async () => {
      const res = await API.get("/products");
      setProducts(res.data);
    };

    fetchProducts();

  }, []);

  const handleOrder = async (e) => {

    e.preventDefault();

    try {

      const token = localStorage.getItem("token");

      await API.post(
        "/orders",
        {
          shipName,
          port,
          items: [
            {
              product: selectedProduct,
              quantity: Number(quantity)
            }
          ]
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      alert("Order submitted successfully");

    } catch (error) {

      console.error(error);
      alert("Failed to create order");

    }

  };

  return (

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >

      <PageContainer>

        <div className="flex justify-center">

          <div className="w-full max-w-md">

            <Card>

              <h2 className="text-2xl font-bold mb-6 text-center">
                Request Ship Supplies
              </h2>

              <form onSubmit={handleOrder} className="space-y-4">

                <input
                  type="text"
                  placeholder="Ship Name"
                  className="w-full border p-2 rounded"
                  value={shipName}
                  onChange={(e) => setShipName(e.target.value)}
                  required
                />

                <input
                  type="text"
                  placeholder="Port"
                  className="w-full border p-2 rounded"
                  value={port}
                  onChange={(e) => setPort(e.target.value)}
                  required
                />

                <select
                  className="w-full border p-2 rounded"
                  value={selectedProduct}
                  onChange={(e) => setSelectedProduct(e.target.value)}
                  required
                >

                  <option value="">
                    Select Product
                  </option>

                  {products.map((product) => (
                    <option key={product._id} value={product._id}>
                      {product.name}
                    </option>
                  ))}

                </select>

                <input
                  type="number"
                  className="w-full border p-2 rounded"
                  value={quantity}
                  min="1"
                  onChange={(e) => setQuantity(e.target.value)}
                  required
                />

                <button
                  className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                >
                  Submit Request
                </button>

              </form>

            </Card>

          </div>

        </div>

      </PageContainer>

    </motion.div>

  );

}

export default RequestOrder;