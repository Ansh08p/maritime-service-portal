import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="bg-slate-50 text-slate-800">

      {/* HERO */}

      <section
        className="h-[95vh] flex items-center justify-center text-center text-white relative"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        <div className="absolute inset-0 bg-black/70"></div>

        <motion.div
          className="relative z-10 max-w-4xl px-6"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Professional Marine Services
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Where Loyalty Meets Quality At The Right Price. Delivering trusted
            ship chandling and maritime solutions across global ports.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">

            <Link
              to="/services"
              className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
            >
              Explore Services
            </Link>

            <Link
              to="/contact"
              className="bg-blue-600 px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
            >
              Contact Us
            </Link>

          </div>

        </motion.div>

      </section>

      {/* STATS */}

      <section className="bg-white py-10 border-b">

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center gap-6">

          <div>
            <h3 className="text-2xl font-bold text-blue-600">50+</h3>
            <p className="text-gray-500">Ports Covered</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-blue-600">100+</h3>
            <p className="text-gray-500">Clients Served</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-blue-600">24/7</h3>
            <p className="text-gray-500">Support</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-blue-600">Fast</h3>
            <p className="text-gray-500">Delivery</p>
          </div>

        </div>

      </section>


      {/* ABOUT */}

      <section className="py-20 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        <img
          src="https://images.pexels.com/photos/262353/pexels-photo-262353.jpeg"
          className="rounded-2xl shadow-lg"
        />

        <div>

          <h2 className="text-3xl font-bold mb-4">
            About Our Company
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            Professional Marine Services provides high-quality ship supplies,
            provisions, and maritime support services across major global ports.
            Our commitment is to deliver reliable, efficient, and timely services.
          </p>

          <Link
            to="/about"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg"
          >
            Learn More
          </Link>

        </div>

      </section>


      {/* SERVICES */}

      <section className="bg-gray-100 py-20">

        <h2 className="text-3xl font-bold text-center mb-12">
          Our Services
        </h2>

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">

          {[
            {
              title: "Ship Provisions",
              img: "https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg"
            },
            {
              title: "Engine Stores",
              img: "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg"
            },
            {
              title: "Port Logistics",
              img: "https://images.pexels.com/photos/163726/belgium-antwerp-shipping-container-163726.jpeg"
            }
          ].map((item, i) => (

            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
            >

              <img src={item.img} className="h-52 w-full object-cover" />

              <div className="p-6 text-center">

                <h3 className="font-semibold text-xl mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm">
                  Premium maritime solutions for efficient vessel operations.
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </section>


      {/* PORTS PREVIEW */}

      <section className="py-20 text-center">

        <h2 className="text-3xl font-bold mb-6">
          Global Port Coverage
        </h2>

        <p className="text-gray-600 mb-8">
          Serving major ports across Asia, Middle East, Africa & South America.
        </p>

        <Link
          to="/ports"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          View All Ports
        </Link>

      </section>


      {/* CTA */}

      <section className="bg-[#0A2540] text-white py-20 text-center">

        <h2 className="text-3xl font-bold mb-4">
          Ready to Work With Us?
        </h2>

        <p className="text-gray-300 mb-6">
          Contact us today and get reliable maritime services.
        </p>

        <Link
          to="/contact"
          className="bg-white text-black px-6 py-3 rounded-lg font-semibold"
        >
          Contact Now
        </Link>

      </section>

    </div>
  );
}

export default Home;