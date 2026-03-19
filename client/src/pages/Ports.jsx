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
  img: "https://images.pexels.com/photos/34358847/pexels-photo-34358847.jpeg"
},
{
  country: "U.A.E",
  ports: "Fujairah, Jebel Ali, Khor Fakkan",
  img: "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg"
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
        className="h-[55vh] flex items-center justify-center text-white text-center relative"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/163726/belgium-antwerp-shipping-container-163726.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/60"></div>

        <div className="relative z-10">

          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Global Ports Coverage
          </h1>

          <p className="text-gray-300 text-sm md:text-base">
            Delivering maritime services across major international ports
          </p>

        </div>

      </section>

      {/* PORTS GRID */}

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        {ports.map((item, index) => (

          <motion.div
            key={index}
            whileHover={{ y: -6 }}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition duration-300"
          >

            {/* IMAGE */}

            <div className="relative">

              <img
                src={item.img}
                className="h-48 w-full object-cover"
              />

              {/* IMAGE OVERLAY */}
              <div className="absolute inset-0 bg-black/20"></div>

              {/* COUNTRY TAG */}
              <div className="absolute bottom-3 left-3 bg-black/70 text-white px-3 py-1 text-xs rounded">
                {item.country}
              </div>

            </div>

            {/* CONTENT */}

            <div className="p-5">

              <h2 className="text-lg font-semibold mb-2">
                {item.country}
              </h2>

              <p className="text-gray-600 text-sm leading-relaxed">
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