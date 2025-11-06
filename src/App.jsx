import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-blue-950 text-white font-sans antialiased">
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-8 py-16 overflow-hidden">
        {/* feather background from /public */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 animate-pulse"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/feather-bg.png)`,
          }}
        />

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
              href="https://app.pulsex.com/swap?outputCurrency=0x71769F8F268D4ee21b4749d00Ebe86b734A85389&chain=pulsechain"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full font-bold hover:shadow-lg hover:shadow-teal-500/50 transition-all"
            >
              View on PulseX
            </a>
            <a
              href="https://dexscreener.com/pulsechain/0x97946a52c78effc09774d6dccd098982105d6449"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full font-bold hover:shadow-lg hover:shadow-yellow-500/50 transition-all"
            >
              Chart
            </a>
            <a
              href="https://t.me/Peacock_MasterCock_Cards"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full font-bold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
            >
              Join Telegram
            </a>
          </div>
        </div>

        <div className="z-10 md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img
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

      {/* Feather Divider */}
      <div
        className="h-40 bg-cover bg-center my-8 opacity-60"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/feather-bg.png)`,
        }}
      ></div>

      {/* ABOUT */}
      <section className="px-8 py-16 text-center">
        <h2 className="text-4xl font-bold mb-8 text-teal-400">About $PMC</h2>
        <div className="max-w-3xl mx-auto text-lg leading-relaxed">
          <p className="mb-6">
            $PMC is the core token of the Peacock MasterCock Card Ecosystem —
            bonded on Pump.Tires and tradable on PulseX.
          </p>
          <p>
            Swap $PMC for reward token and earn ecosystem rewards (
            <b>$PCOCK</b> + <b>$PHEN</b>).
          </p>
        </div>
        <blockquote className="text-2xl font-semibold mt-8 text-yellow-400 italic">
          “Yield. Grow. Earn.”
        </blockquote>
      </section>

      {/* REWARD TOKEN */}
      <section className="px-8 py-16 bg-blue-900/30 text-center">
        <h2 className="text-4xl font-bold mb-4 text-teal-400">
          Coming Soon: Reward Token Built on $PMC Bonding
        </h2>
        <p className="text-lg opacity-90">
          Announcing soon on Telegram — stay tuned. (Placeholder: $YIELD)
        </p>
      </section>

      {/* HOW TO BUY */}
      <section className="px-8 py-16 text-center">
        <h2 className="text-4xl font-bold mb-8 text-teal-400">
          How to Buy / Trade
        </h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center text-center">
          <div>
            <div className="text-5xl mb-2">🔗</div>
            <p>Step 1: Connect Wallet</p>
          </div>
          <div>
            <div className="text-5xl mb-2">🔄</div>
            <p>Step 2: Swap PLS → $PMC</p>
          </div>
          <div>
            <div className="text-5xl mb-2">🔥</div>
            <p>Step 3: Buy Rewards Token</p>
          </div>
        </div>
        <div className="mt-8">
          <a
            href="https://app.pulsex.com/swap?outputCurrency=0x71769F8F268D4ee21b4749d00Ebe86b734A85389&chain=pulsechain"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full font-bold hover:shadow-lg hover:shadow-teal-500/50 transition-all"
          >
            Buy on PulseX
          </a>
        </div>
      </section>

      {/* TOKEN DETAILS */}
      <section className="px-8 py-16 bg-blue-900/30 text-center">
        <h2 className="text-4xl font-bold mb-8 text-teal-400">
          Token Details
        </h2>
        <p className="text-lg mb-2">
          Contract:{" "}
          <code className="bg-black/30 px-2 py-1 rounded">
            0x71769F8F268D4ee21b4749d00Ebe86b734A85389
          </code>
        </p>
        <p className="text-lg">
          <a
            href="https://dexscreener.com/pulsechain/0x97946a52c78effc09774d6dccd098982105d6449"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 underline"
          >
            DexScreener
          </a>{" "}
          |{" "}
          <a
            href="https://app.pulsex.com/swap?outputCurrency=0x71769F8F268D4ee21b4749d00Ebe86b734A85389&chain=pulsechain"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 underline"
          >
            PulseX
          </a>{" "}
          |{" "}
          <a
            href="https://scan.pulsechain.com/address/0x71769F8F268D4ee21b4749d00Ebe86b734A85389"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 underline"
          >
            Explorer
          </a>
        </p>
      </section>

      {/* COMMUNITY LINKS */}
      <section className="px-8 py-16 text-center">
        <h2 className="text-4xl font-bold mb-8 text-teal-400">
          Community Links
        </h2>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="https://t.me/Peacock_MasterCock_Cards"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all"
          >
            Telegram 🔗
          </a>
          <a
            href="https://x.com/PcockM5954?t=cUCE2vXZ_AAtPIS1aeXuXg&s=09"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-indigo-600 rounded-full hover:shadow-lg hover:shadow-indigo-500/50 transition-all"
          >
            Twitter/X 🐦
          </a>
          <a
            href="https://dexscreener.com/pulsechain/0x97946a52c78effc09774d6dccd098982105d6449"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-teal-600 rounded-full hover:shadow-lg hover:shadow-teal-500/50 transition-all"
          >
            DexScreener 📊
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-8 py-10 text-center bg-black/50">
        <p className="opacity-80">
          © {new Date().getFullYear()} Peacock Ecosystem — The Bonded Bird That
          Burns to Earn.
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-4 text-teal-300">
          <a href="#" className="underline underline-offset-4">
            Home
          </a>
          <a
            href="https://app.pulsex.com/swap?outputCurrency=0x71769F8F268D4ee21b4749d00Ebe86b734A85389&chain=pulsechain"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4"
          >
            Buy
          </a>
          <a
            href="https://t.me/Peacock_MasterCock_Cards"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4"
          >
            Telegram
          </a>
          <a
            href="https://x.com/PcockM5954?t=cUCE2vXZ_AAtPIS1aeXuXg&s=09"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4"
          >
            Twitter
          </a>
          <a
            href="https://dexscreener.com/pulsechain/0x97946a52c78effc09774d6dccd098982105d6449"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4"
          >
            Chart
          </a>
        </div>
        <div className="mt-6 text-2xl animate-spin-slow">🦚</div>
      </footer>
    </div>
  );
}
