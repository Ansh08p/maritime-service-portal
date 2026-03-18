import { useState } from "react";
import { useLocation } from "react-router-dom";
import API from "../services/api";
import toast from "react-hot-toast";

function Contact() {

  const location = useLocation();

  const selectedService = location.state?.service || "";

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: selectedService
      ? `I am interested in ${selectedService}`
      : ""
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      await API.post("/contact", form);

      toast.success("Message sent ✉️");

      setForm({ name: "", email: "", message: "" });

    } catch {
      toast.error("Failed to send");
    } finally {
      setLoading(false);
    }

  };

  return (

    <div className="bg-slate-50 min-h-screen">

      {/* HERO */}

      <section
        className="h-[40vh] flex items-center justify-center text-white relative"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/753331/pexels-photo-753331.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <h1 className="relative z-10 text-4xl font-bold">
          Contact Us
        </h1>

      </section>

      {/* CONTENT */}

      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">

        {/* FORM */}

        <div className="bg-white p-8 rounded-2xl shadow-md">

          <h2 className="text-2xl font-bold mb-4">
            Send a Message
          </h2>

          {/* AUTO-FILL SERVICE DISPLAY */}
          {selectedService && (
            <p className="mb-4 text-blue-600 font-medium">
              Service: {selectedService}
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              placeholder="Name"
              className="w-full border p-3 rounded"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full border p-3 rounded"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />

            <textarea
              placeholder="Message"
              className="w-full border p-3 rounded"
              rows="5"
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
            />

            <button
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>

        </div>

        {/* CONTACT INFO */}

        <div className="flex flex-col justify-center">

          <h2 className="text-2xl font-bold mb-4">
            Get in Touch
          </h2>

          <p className="text-gray-600 mb-6">
            We are available to support your vessel operations across global ports.
          </p>

          <div className="space-y-3 text-gray-700">

            <p>📞 +91 70487 07585</p>
            <p>📧 professionalmarineservices1@gmail.com</p>
            <p>📍 Adipur, Gujarat</p>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Contact;