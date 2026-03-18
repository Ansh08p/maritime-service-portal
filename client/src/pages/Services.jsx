import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Services() {

  const navigate = useNavigate();

  const services = [
    {
      title: "Provisions",
      desc: "Fresh food, beverages, and daily essentials for vessel crew.",
      img: "https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg"
    },
    {
      title: "Bonded Stores",
      desc: "Duty-free items including tobacco, alcohol, and luxury goods.",
      img: "https://images.pexels.com/photos/6169056/pexels-photo-6169056.jpeg"
    },
    {
      title: "Deck & Engine Stores",
      desc: "Tools, spare parts, and equipment for ship maintenance.",
      img: "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg"
    },
    {
      title: "Safety Equipments",
      desc: "Certified safety gear and emergency equipment.",
      img: "https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg"
    },
    {
      title: "Sludge & Garbage Removal",
      desc: "Efficient and compliant waste disposal services.",
      img: "https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg"
    }
  ];

  return (

    <div className="bg-slate-50 min-h-screen">

      {/* HERO */}
      <section
        className="h-[50vh] flex items-center justify-center text-white text-center relative"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/163726/belgium-antwerp-shipping-container-163726.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <h1 className="relative z-10 text-4xl font-bold">
          Our Services
        </h1>
      </section>

      {/* SERVICES GRID */}

      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">

        {services.map((service, index) => (

          <motion.div
            key={index}
            whileHover={{ y: -6 }}
            onClick={() =>
              navigate("/contact", {
                state: { service: service.title }
              })
            }
            className="cursor-pointer bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition"
          >

            <img
              src={service.img}
              className="h-40 w-full object-cover"
            />

            <div className="p-5">

              <h3 className="font-semibold text-lg mb-2">
                {service.title}
              </h3>

              <p className="text-sm text-gray-600">
                {service.desc}
              </p>

              <p className="text-blue-600 text-sm mt-3 font-medium">
                Request Service →
              </p>

            </div>

          </motion.div>

        ))}

      </div>

    </div>

  );

}

export default Services;