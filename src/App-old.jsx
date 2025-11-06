import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-blue-950 text-white font-sans antialiased">
      <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-8 py-16 overflow-hidden">
        <div
  className="absolute inset-0 bg-cover bg-center opacity-20 animate-pulse"
  style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/feather-bg.png)` }}
></div>

        <div className="z-10 text-center md:text-left md:w-1/2">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-500 drop-shadow-lg">
            🦚 $PMC — Peacock Master Cock
          </h1>
          <p className="text-2xl md:text-3xl font-semibold mb-2">
            Bonded on PUMP.TIRES • Live on PulseX
          </p>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            “The Bonded Bird That Burns to Earn.”
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#"
              className="px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full font-bold hover:shadow-lg hover:shadow-teal-500/50 transition-all"
            >
              View on PulseX
            </a>
            <a
              href="#"
              className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full font-bold hover:shadow-lg hover:shadow-yellow-500/50 transition-all"
            >
              Chart
            </a>
            <a
              href="#"
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full font-bold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
            >
              Join Telegram
            </a>
          </div>
        </div>

        <div className="z-10 md:w-1/2 flex justify-center mt-10 md:mt-0">
            src={`${process.env.PUBLIC_URL}/peacock-card.png`}
  alt="Peacock Master Card"

            className="w-72 sm:w-80 md:w-96 rounded-xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-300"
            style={{
              boxShadow:
                "0 0 25px rgba(45,212,191,0.45), 0 0 50px rgba(234,179,8,0.25)",
            }}
          
          />
        </div>
      </section>
    </div>
  );
}
