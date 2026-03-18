import { useEffect, useState } from "react";
import API from "../services/api";
import Loader from "../components/Loader";
import StatusBadge from "../components/StatusBadge";

function Orders() {

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const token = localStorage.getItem("token");

    API.get("/orders", {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => {
      setOrders(res.data);
      setLoading(false);
    });

  }, []);

  return (

    <div className="min-h-screen bg-slate-50">

      <section className="py-12 text-center">
        <h1 className="text-3xl font-bold">
          Your Orders
        </h1>
      </section>

      <div className="max-w-5xl mx-auto px-6 pb-20">

        {loading ? (
          <Loader />
        ) : (

          <div className="space-y-6">

            {orders.map(order => (

              <div
                key={order._id}
                className="bg-white p-6 rounded-2xl shadow-md"
              >

                <div className="flex justify-between mb-4">

                  <div>
                    <h3 className="font-semibold text-lg">
                      {order.shipName}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      {order.port}
                    </p>
                  </div>

                  <StatusBadge status={order.status} />

                </div>

                {order.items.map(item => (
                  <p key={item._id} className="text-gray-600">
                    {item.product.name} — Qty: {item.quantity}
                  </p>
                ))}

              </div>

            ))}

          </div>

        )}

      </div>

    </div>

  );

}

export default Orders;