import { motion } from "framer-motion";

import msc from "../assets/clients/msc.png";
import maersk from "../assets/clients/maersk.png";
import cosco from "../assets/clients/cosco.png";
import oldendorff from "../assets/clients/oldendorff.png";
import anglo from "../assets/clients/angloeastern.png";
import bsm from "../assets/clients/bsm.png";

function Clients() {

  const clients = [
    { name: "MSC", logo: msc },
    { name: "Maersk", logo: maersk },
    { name: "COSCO Shipping", logo: cosco },
    { name: "Oldendorff Carriers", logo: oldendorff },
    { name: "Anglo Eastern", logo: anglo },
    { name: "Bernhard Schulte", logo: bsm }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">

      <section className="bg-slate-900 text-white text-center py-20">
        <h1 className="text-4xl font-bold">Our Clients</h1>
        <p className="text-gray-400 mt-2">
          Trusted by global maritime leaders
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

        {clients.map((client, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow hover:shadow-xl flex items-center justify-center"
          >
            <img
              src={client.logo}
              alt={client.name}
              className="h-14 object-contain"
            />
          </motion.div>
        ))}

      </div>

    </div>
  );
}

export default Clients;