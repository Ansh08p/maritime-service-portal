function Footer() {

  return (

    <footer className="bg-gray-900 text-white py-10 mt-12">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">

        {/* Company */}

        <div>
          <h2 className="font-bold text-lg mb-2">
            Professional Marine Services
          </h2>
          <p className="text-gray-400 text-sm">
            Where Loyalty Meets Quality At The Right Price
          </p>
        </div>

        {/* Contact */}

        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <p className="text-gray-400 text-sm">
            📞 +91 70487 07585
          </p>
          <p className="text-gray-400 text-sm">
            📧 professionalmarineservices1@gmail.com
          </p>
        </div>

        {/* Address */}

        <div>
          <h3 className="font-semibold mb-2">Address</h3>
          <p className="text-gray-400 text-sm">
            S.C.X.84, Ward-2A,
          </p>
          <p className="text-gray-400 text-sm">
            Adipur, Kachchh, Gujarat
          </p>
        </div>

      </div>

      <p className="text-center text-gray-500 text-xs mt-6">
        © 2026 Professional Marine Services
      </p>

    </footer>

  );

}

export default Footer;