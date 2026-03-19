import { motion } from "framer-motion";

function About() {

  return (

    <div className="bg-slate-50 text-slate-800">

      {/* HERO */}

      <section
        className="h-[70vh] flex items-center justify-center text-center text-white relative"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/163726/belgium-antwerp-shipping-container-163726.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        <div className="absolute inset-0 bg-black/70"></div>

        <motion.div
          className="relative z-10 max-w-3xl px-6"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
        >

          <h1 className="text-5xl font-bold mb-4">
            About Us
          </h1>

          <p className="text-gray-300 text-lg">
            Delivering trusted maritime solutions with reliability, speed, and precision.
          </p>

        </motion.div>

      </section>

      {/* COMPANY STORY */}

      <section className="py-24 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <motion.img
          src="https://images.pexels.com/photos/262353/pexels-photo-262353.jpeg"
          className="rounded-2xl shadow-xl"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
        />

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
        >

          <h2 className="text-4xl font-bold mb-6">
            Our Story
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Professional Marine Services was established with a vision to provide
            reliable and efficient ship chandling solutions across global ports.
            With years of experience in the maritime industry, we understand the
            urgency and precision required to support vessels.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Our commitment is simple — deliver quality, build trust, and ensure
            every vessel receives the best service possible.
          </p>

        </motion.div>

      </section>

      {/* MISSION & VISION */}

      <section className="bg-gray-100 py-24">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >

            <h3 className="text-2xl font-semibold mb-4">
              Our Mission
            </h3>

            <p className="text-gray-600">
              To deliver reliable maritime services with speed, quality, and
              professionalism while ensuring customer satisfaction at every level.
            </p>

          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >

            <h3 className="text-2xl font-semibold mb-4">
              Our Vision
            </h3>

            <p className="text-gray-600">
              To become a globally trusted maritime service provider known for
              excellence, reliability, and innovation.
            </p>

          </motion.div>

        </div>

      </section>

      {/* WHY CHOOSE US */}

      <section className="py-24 max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-3 gap-10 text-center">

          {[
            "Global Port Coverage",
            "Fast & Reliable Delivery",
            "24/7 Customer Support",
            "High Quality Supplies",
            "Experienced Team",
            "Trusted by Industry Leaders"
          ].map((item, i) => (

            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="bg-white p-6 rounded-xl shadow"
            >

              <h3 className="font-semibold text-lg">
                {item}
              </h3>

            </motion.div>

          ))}

        </div>

      </section>

      {/* STATS */}

      <section className="bg-[#0A2540] text-white py-20">

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center gap-8">

          {[
            ["50+", "Ports"],
            ["100+", "Clients"],
            ["24/7", "Support"],
            ["100%", "Commitment"]
          ].map(([num, label], i) => (

            <div key={i}>
              <h3 className="text-3xl font-bold">{num}</h3>
              <p className="text-gray-300">{label}</p>
            </div>

          ))}

        </div>

      </section>

      {/* CTA */}

      <section className="py-24 text-center">

        <h2 className="text-4xl font-bold mb-4">
          Let’s Work Together
        </h2>

        <p className="text-gray-600 mb-6">
          Partner with us for reliable maritime solutions.
        </p>

        <a
          href="/contact"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Contact Us
        </a>

      </section>

    </div>

  );

}

export default About;