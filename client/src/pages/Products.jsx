import { useEffect, useState } from "react";
import API from "../services/api";
import toast from "react-hot-toast";
import Loader from "../components/Loader";

function Products() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const [form, setForm] = useState({
    shipName: "",
    port: "",
    quantity: 1
  });

  useEffect(() => {
    API.get("/products").then(res => {
      setProducts(res.data);
      setLoading(false);
    });
  }, []);

  const handleSubmit = async () => {

    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("Please login to place order");
      return;
    }

    if (!form.shipName || !form.port) {
      toast.error("Fill all details");
      return;
    }

    try {

      setSubmitting(true);

      await API.post(
        "/orders",
        {
          shipName: form.shipName,
          port: form.port,
          items: [
            {
              product: selectedProduct._id,
              quantity: form.quantity
            }
          ]
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      toast.success("Order placed 🚢");

      setSelectedProduct(null);
      setForm({ shipName: "", port: "", quantity: 1 });

    } catch {
      toast.error("Failed to place order");
    } finally {
      setSubmitting(false);
    }

  };

  return (

    <div className="min-h-screen bg-slate-50">

      <h1 className="text-4xl font-bold text-center py-10">
        Ship Supplies
      </h1>

      {loading ? (
        <Loader />
      ) : (

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 pb-20">

          {products.map(p => (

            <div key={p._id} className="bg-white p-5 rounded-2xl shadow-md">

              <h3 className="font-semibold">{p.name}</h3>
              <p className="text-sm text-gray-500">{p.category}</p>
              <p className="text-blue-600 font-bold my-3">₹{p.price}</p>

              <button
                onClick={() => setSelectedProduct(p)}
                className="w-full bg-blue-500 text-white py-2 rounded"
              >
                Request Supply
              </button>

            </div>

          ))}

        </div>
      )}

      {/* MODAL */}

      {selectedProduct && (

        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">

          <div className="bg-white p-6 rounded-xl w-full max-w-md">

            <h2 className="font-bold mb-4">
              Request {selectedProduct.name}
            </h2>

            <input
              placeholder="Ship Name"
              className="w-full border p-2 mb-3"
              value={form.shipName}
              onChange={(e) => setForm({ ...form, shipName: e.target.value })}
            />

            <input
              placeholder="Port"
              className="w-full border p-2 mb-3"
              value={form.port}
              onChange={(e) => setForm({ ...form, port: e.target.value })}
            />

            <input
              type="number"
              min="1"
              className="w-full border p-2 mb-3"
              value={form.quantity}
              onChange={(e) => setForm({ ...form, quantity: e.target.value })}
            />

            <div className="flex justify-between">

              <button onClick={() => setSelectedProduct(null)}>
                Cancel
              </button>

              <button
                onClick={handleSubmit}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                {submitting ? "Submitting..." : "Submit"}
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default Products;