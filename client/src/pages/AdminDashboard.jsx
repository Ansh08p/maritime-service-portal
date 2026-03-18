import { useEffect, useState } from "react";
import API from "../services/api";
import toast from "react-hot-toast";
import Loader from "../components/Loader";
import StatusBadge from "../components/StatusBadge";

function AdminDashboard() {

  const [orders, setOrders] = useState([]);
  const [messages, setMessages] = useState([]);
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  const [productForm, setProductForm] = useState({
    name: "",
    category: "",
    price: ""
  });

  const [editingId, setEditingId] = useState(null);

  const token = localStorage.getItem("token");

  // FETCH ALL DATA
  const fetchData = async () => {

    try {

      const ordersRes = await API.get("/orders", {
        headers: { Authorization: `Bearer ${token}` }
      });

      const msgRes = await API.get("/contact");

      const productRes = await API.get("/products");

      setOrders(ordersRes.data);
      setMessages(msgRes.data);
      setProducts(productRes.data);

    } catch {
      toast.error("Failed to fetch data");
    } finally {
      setLoading(false);
    }

  };

  useEffect(() => {
    fetchData();
  }, []);

  // ADD OR UPDATE PRODUCT
  const handleProduct = async () => {

    if (!productForm.name || !productForm.category || !productForm.price) {
      toast.error("Fill all fields");
      return;
    }

    try {

      if (editingId) {

        await API.put(
          `/products/${editingId}`,
          productForm,
          {
            headers: { Authorization: `Bearer ${token}` }
          }
        );

        toast.success("Product updated");

      } else {

        await API.post(
          "/products",
          productForm,
          {
            headers: { Authorization: `Bearer ${token}` }
          }
        );

        toast.success("Product added");

      }

      setProductForm({ name: "", category: "", price: "" });
      setEditingId(null);

      fetchData();

    } catch {
      toast.error("Operation failed");
    }

  };

  // DELETE PRODUCT
  const deleteProduct = async (id) => {

    try {

      await API.delete(`/products/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      toast.success("Deleted");

      fetchData();

    } catch {
      toast.error("Delete failed");
    }

  };

  // EDIT PRODUCT
  const editProduct = (product) => {

    setProductForm({
      name: product.name,
      category: product.category,
      price: product.price
    });

    setEditingId(product._id);
  };

  // UPDATE ORDER STATUS
  const updateStatus = async (id, status) => {

    try {

      await API.put(
        `/orders/${id}/status`,
        { status },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      toast.success("Status updated");

      fetchData();

    } catch {
      toast.error("Update failed");
    }

  };

  return (

    <div className="min-h-screen bg-slate-50 px-6 py-10">

      <h1 className="text-3xl font-bold mb-8">
        Admin Dashboard
      </h1>

      {loading ? <Loader /> : (

        <>
          {/* PRODUCT MANAGEMENT */}

          <h2 className="text-2xl font-semibold mb-4">
            Manage Products
          </h2>

          <div className="bg-white p-6 rounded-2xl shadow-md mb-6">

            <div className="grid md:grid-cols-3 gap-4">

              <input
                placeholder="Product Name"
                className="border p-2 rounded"
                value={productForm.name}
                onChange={(e) =>
                  setProductForm({ ...productForm, name: e.target.value })
                }
              />

              <input
                placeholder="Category"
                className="border p-2 rounded"
                value={productForm.category}
                onChange={(e) =>
                  setProductForm({ ...productForm, category: e.target.value })
                }
              />

              <input
                type="number"
                placeholder="Price"
                className="border p-2 rounded"
                value={productForm.price}
                onChange={(e) =>
                  setProductForm({ ...productForm, price: e.target.value })
                }
              />

            </div>

            <button
              onClick={handleProduct}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
            >
              {editingId ? "Update Product" : "Add Product"}
            </button>

          </div>

          {/* PRODUCT LIST */}

          <div className="space-y-4 mb-10">

            {products.map(p => (

              <div
                key={p._id}
                className="bg-white p-4 rounded shadow flex justify-between items-center"
              >

                <div>
                  <p className="font-semibold">{p.name}</p>
                  <p className="text-sm text-gray-500">{p.category}</p>
                  <p className="text-blue-600">₹{p.price}</p>
                </div>

                <div className="flex gap-3">

                  <button
                    onClick={() => editProduct(p)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteProduct(p._id)}
                    className="bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>

                </div>

              </div>

            ))}

          </div>


          {/* ORDERS */}

          <h2 className="text-2xl font-semibold mb-4">
            Orders
          </h2>

          <div className="space-y-6">

            {orders.map(order => (

              <div key={order._id} className="bg-white p-6 rounded shadow">

                <div className="flex justify-between mb-4">

                  <div>
                    <h3>{order.shipName}</h3>
                    <p className="text-sm text-gray-500">{order.port}</p>
                  </div>

                  <StatusBadge status={order.status} />

                </div>

                {order.items.map(item => (
                  <p key={item._id}>
                    {item.product.name} — Qty: {item.quantity}
                  </p>
                ))}

                <div className="flex gap-3 mt-3">

                  <button onClick={() => updateStatus(order._id, "approved")} className="bg-green-600 text-white px-2 py-1 rounded">Approve</button>
                  <button onClick={() => updateStatus(order._id, "rejected")} className="bg-red-600 text-white px-2 py-1 rounded">Reject</button>
                  <button onClick={() => updateStatus(order._id, "delivered")} className="bg-blue-600 text-white px-2 py-1 rounded">Delivered</button>

                </div>

              </div>

            ))}

          </div>


          {/* CONTACT */}

          <h2 className="text-2xl font-semibold mt-10 mb-4">
            Contact Messages
          </h2>

          {messages.map(msg => (

            <div key={msg._id} className="bg-white p-4 mb-3 rounded shadow">

              <p className="font-semibold">{msg.name}</p>
              <p className="text-sm">{msg.email}</p>
              <p>{msg.message}</p>

            </div>

          ))}

        </>
      )}

    </div>
  );
}

export default AdminDashboard;