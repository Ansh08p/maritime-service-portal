import { motion } from "framer-motion";

function Ports() {

  const ports = [
  {
    country: "India",
    ports: "Mumbai, Kandla, Mundra, Chennai, Visakhapatnam, Kochi, Kolkata",
    img: "https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg"
  },
  {
    country: "Singapore",
    ports: "Singapore",
    img: "https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg"
  },
  {
    country: "U.A.E",
    ports: "Fujairah, Jebel Ali, Khor Fakkan",
    img: "https://images.pexels.com/photos/327540/pexels-photo-327540.jpeg"
  },
  {
    country: "South Africa",
    ports: "Durban, Cape Town, Port Elizabeth",
    img: "https://images.pexels.com/photos/912050/pexels-photo-912050.jpeg"
  },
  {
    country: "Brazil",
    ports: "Santos, Paranagua, Rio Grande",
    img: "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg"
  },
  {
    country: "Vietnam",
    ports: "Hai Phong, Ho Chi Minh, Vung Tau",
    img: "https://images.pexels.com/photos/163726/belgium-antwerp-shipping-container-163726.jpeg"
  }
];

  return (

    <div className="bg-slate-50 min-h-screen">

      {/* HERO */}

      <section
        className="h-[50vh] flex items-center justify-center text-white text-center relative"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <h1 className="relative z-10 text-4xl font-bold">
          Global Ports Coverage
        </h1>
      </section>

      {/* CONTENT */}

      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">

        {ports.map((item, index) => (

          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden"
          >

            <img
              src={item.img}
              className="h-48 w-full object-cover"
            />

            <div className="p-6">

              <h2 className="text-xl font-bold mb-2">
                {item.country}
              </h2>

              <p className="text-gray-600 text-sm">
                Ports: {item.ports}
              </p>

            </div>

          </motion.div>

        ))}

      </div>

    </div>

  );

}

export default Ports;