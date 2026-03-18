import PageContainer from "../components/PageContainer";
import { motion } from "framer-motion";
import { Target, Eye, ShieldCheck } from "lucide-react";

function About() {
  return (

    <PageContainer>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >

        {/* Title */}

        <h1 className="text-3xl font-bold mb-6 text-center">
          About Us
        </h1>

        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Professional Marine Services is a trusted maritime solutions provider,
          delivering high-quality ship supplies, provisions, and technical services
          across global ports. We ensure reliability, efficiency, and excellence
          in every service we provide.
        </p>


        {/* Mission + Vision */}

        <div className="grid md:grid-cols-2 gap-8 mb-12">

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white p-6 rounded-xl shadow"
          >

            <div className="flex items-center gap-2 mb-3 text-blue-600">
              <Target />
              <h3 className="text-xl font-bold">Our Mission</h3>
            </div>

            <p className="text-gray-600">
              To provide reliable and efficient maritime services that ensure
              seamless operations for vessels across all major ports worldwide.
            </p>

          </motion.div>


          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white p-6 rounded-xl shadow"
          >

            <div className="flex items-center gap-2 mb-3 text-blue-600">
              <Eye />
              <h3 className="text-xl font-bold">Our Vision</h3>
            </div>

            <p className="text-gray-600">
              To become a globally recognized maritime service provider known
              for quality, trust, and innovation in ship supply solutions.
            </p>

          </motion.div>

        </div>


        {/* Why Choose Us */}

        <div>

          <h2 className="text-2xl font-bold text-center mb-8">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow text-center"
            >

              <ShieldCheck className="mx-auto text-blue-600 mb-3" size={28} />

              <h3 className="font-bold mb-2">
                Trusted Services
              </h3>

              <p className="text-gray-600">
                Reliable and high-quality maritime solutions trusted worldwide.
              </p>

            </motion.div>


            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow text-center"
            >

              <ShieldCheck className="mx-auto text-blue-600 mb-3" size={28} />

              <h3 className="font-bold mb-2">
                Global Reach
              </h3>

              <p className="text-gray-600">
                Serving vessels across major international ports efficiently.
              </p>

            </motion.div>


            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow text-center"
            >

              <ShieldCheck className="mx-auto text-blue-600 mb-3" size={28} />

              <h3 className="font-bold mb-2">
                Fast Delivery
              </h3>

              <p className="text-gray-600">
                Timely delivery of supplies ensuring smooth vessel operations.
              </p>

            </motion.div>

          </div>

        </div>

      </motion.div>

    </PageContainer>

  );
}

export default About;