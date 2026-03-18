function Clients() {

  const clients = [
    "MAERSK",
    "MSC",
    "CMA CGM",
    "COSCO",
    "Hapag-Lloyd",
    "Evergreen"
  ];

  return (

    <div className="bg-slate-50 min-h-screen">

      {/* HERO */}

      <section
        className="h-[50vh] flex items-center justify-center text-white text-center relative"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/753331/pexels-photo-753331.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <h1 className="relative z-10 text-4xl font-bold">
          Our Clients
        </h1>
      </section>

      {/* CLIENTS */}

      <div className="max-w-5xl mx-auto py-16 px-6 text-center">

        <h2 className="text-3xl font-bold mb-10">
          Trusted by Leading Shipping Companies
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {clients.map((client, index) => (

            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition text-lg font-semibold text-gray-600"
            >
              {client}
            </div>

          ))}

        </div>

      </div>

    </div>

  );

}

export default Clients;