import React, { useState } from "react";
import {
  Shield,
  Mail,
  X,
  Menu,
  ArrowRight,
} from "lucide-react";

export default function App() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const roster = [
    "Ardian Dardovski",
    "Jeton Balla",
    "Arben Dardovski",
    "Nedeem Aliu"
  ];

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10 bg-black">

        <div className="absolute top-[-200px] left-[-100px] w-[600px] h-[600px] bg-red-700/20 blur-[150px] rounded-full"></div>

        <div className="absolute bottom-[-200px] right-[-100px] w-[600px] h-[600px] bg-red-700/10 blur-[150px] rounded-full"></div>

      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/60 border-b border-red-950">

        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center gap-4">

            <img
              src="/logo.png"
              alt="Hellbanianz FC"
              className="w-14 h-14 object-contain drop-shadow-[0_0_20px_rgba(255,0,0,0.7)]"
            />

            <div>

              <h1 className="text-2xl font-black tracking-[4px]">
                HELLBANIANZ
              </h1>

              <p className="text-red-600 text-xs uppercase tracking-[4px]">
                Football Club
              </p>

            </div>

          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-10 uppercase tracking-[3px] text-sm font-semibold">

            <a
              href="#home"
              className="text-zinc-400 hover:text-red-500 transition"
            >
              Home
            </a>

            <a
              href="#logo"
              className="text-zinc-400 hover:text-red-500 transition"
            >
              Our Logo
            </a>

            <a
              href="#roster"
              className="text-zinc-400 hover:text-red-500 transition"
            >
              Squad
            </a>

            <a
              href="#tryout"
              className="bg-red-600 hover:bg-red-700 transition px-5 py-3 rounded-xl text-white shadow-[0_0_25px_rgba(255,0,0,0.35)]"
            >
              Try Out
            </a>

          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="md:hidden"
          >

            {mobileMenu ? <X /> : <Menu />}

          </button>

        </div>

        {/* MOBILE MENU */}
        {mobileMenu && (
          <div className="md:hidden bg-black border-t border-red-950 px-6 py-6 flex flex-col gap-6 uppercase tracking-[3px] text-sm">

            <a href="#home">Home</a>
            <a href="#logo">Our Logo</a>
            <a href="#roster">Squad</a>
            <a href="#tryout">Try Out</a>

          </div>
        )}

      </nav>

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative min-h-screen flex items-center pt-32"
      >

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT SIDE */}
          <div>

            <div className="inline-flex items-center gap-3 border border-red-900 bg-red-950/20 rounded-full px-5 py-2 mb-8">

              <Shield className="text-red-500" size={18} />

              <span className="uppercase tracking-[4px] text-xs text-zinc-300">
                Albanian Owned Football Club
              </span>

            </div>

            <h1 className="text-6xl md:text-8xl font-black leading-none">

              HELLBANIANZ

              <span className="block text-red-600">
                FC
              </span>

            </h1>

            <p className="mt-8 text-zinc-400 text-xl leading-10 max-w-2xl">

              More than a football team.
              Hellbanianz FC is a brotherhood built on pride,
              loyalty, culture, and passion for the game.

            </p>

            {/* MOTIVATION */}
            <div className="mt-10 border-l-4 border-red-600 pl-6">

              <p className="text-2xl italic font-semibold text-white leading-10">

                  “Play for the badge.
                Represent your culture with pride.”

              </p>

            </div>

            {/* BUTTONS */}
            <div className="mt-14 flex flex-wrap gap-6">

              <a
                href="#tryout"
                className="group bg-red-600 hover:bg-red-700 transition-all duration-300 px-8 py-5 rounded-2xl font-bold text-lg flex items-center gap-3 shadow-[0_0_35px_rgba(255,0,0,0.4)]"
              >

                Try Out For The Team

                <ArrowRight
                  className="group-hover:translate-x-1 transition"
                  size={20}
                />

              </a>

              <a
                href="#logo"
                className="border border-zinc-700 hover:border-red-600 hover:bg-red-600/10 transition px-8 py-5 rounded-2xl font-bold text-lg"
              >
                View Our Logo
              </a>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex justify-center">

            <div className="absolute w-[500px] h-[500px] bg-red-700/20 blur-[120px] rounded-full"></div>

            <div className="relative bg-white/5 border border-red-900/30 backdrop-blur-2xl rounded-[40px] p-10 shadow-[0_0_60px_rgba(255,0,0,0.15)]">

              <img
                src="/logo.png"
                alt="Hellbanianz FC"
                className="w-[420px] object-contain drop-shadow-[0_0_40px_rgba(255,0,0,0.7)]"
              />

            </div>

          </div>

        </div>

      </section>

      {/* LOGO SECTION */}
      <section
        id="logo"
        className="py-28 border-y border-zinc-900 bg-[#070707]"
      >

        <div className="max-w-6xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[5px] text-red-500 text-sm mb-4">
            Our Identity
          </p>

          <h2 className="text-6xl font-black">
            The Hellbanianz Crest
          </h2>

          <p className="max-w-3xl mx-auto mt-8 text-zinc-500 text-lg leading-9">

            The Hellbanianz FC logo represents strength,
            unity, Albanian pride, and the mentality to compete.
            Every detail symbolizes loyalty to the badge and passion for football.

          </p>

          <div className="mt-16 flex justify-center">

            <div className="bg-black border border-red-900 rounded-[40px] p-10 shadow-[0_0_60px_rgba(255,0,0,0.2)]">

              <img
                src="/logo.png"
                alt="Hellbanianz Logo"
                className="w-[420px] object-contain"
              />

            </div>

          </div>

        </div>

      </section>

      {/* ROSTER */}
      <section
        id="roster"
        className="py-28"
      >

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">

            <p className="uppercase tracking-[5px] text-red-500 text-sm mb-4">
              Current Squad
            </p>

            <h2 className="text-6xl font-black">
              Active Roster
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-10">

            {roster.map((player, index) => (
              <div
                key={index}
                className="group bg-[#0a0a0a] border border-zinc-900 rounded-[35px] p-12 hover:border-red-700 transition-all duration-300"
              >

                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-red-600 to-red-900 flex items-center justify-center text-4xl font-black mx-auto shadow-[0_0_35px_rgba(255,0,0,0.35)]">

                  {player.charAt(0)}

                </div>

                <h3 className="text-3xl font-bold text-center mt-8">
                  {player}
                </h3>

                <p className="text-zinc-500 uppercase tracking-[3px] text-sm text-center mt-4">
                  Hellbanianz FC Player
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* TRYOUT SECTION */}
      <section
        id="tryout"
        className="py-28 bg-[#070707] border-t border-zinc-900"
      >

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[5px] text-red-500 text-sm mb-4">
              Recruitment
            </p>

            <h2 className="text-6xl font-black">
              Try Out For Hellbanianz FC
            </h2>

            <p className="text-zinc-500 text-lg mt-8 max-w-3xl mx-auto leading-9">

              This is more than just football.
              We are looking for players with passion,
              discipline, and the mentality to represent
              Hellbanianz FC with pride every matchday.

            </p>

          </div>

          {/* GOOGLE FORM */}
          <div className="bg-black border border-red-950 rounded-[40px] p-8 shadow-[0_0_60px_rgba(255,0,0,0.12)]">

            <iframe
              src="https://forms.gle/FWyWeWSssxg3p7XTA"
              width="100%"
              height="850"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              className="rounded-[25px] bg-white"
              title="Hellbanianz FC Registration"
            >
              Loading…
            </iframe>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-900 py-14 bg-black">

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">

          <div className="flex items-center gap-5">

            <img
              src="/logo.png"
              alt="Hellbanianz FC"
              className="w-14 h-14 object-contain"
            />

            <div>

              <h2 className="text-2xl font-black tracking-[4px]">
                HELLBANIANZ FC
              </h2>

              <p className="text-zinc-500 mt-1">
                Albanian Owned Football Club
              </p>

            </div>

          </div>

          <div className="flex items-center gap-3 text-zinc-400">

            <Mail size={18} />

            <span>hellbanianzfc@gmail.com</span>

          </div>

        </div>

      </footer>

    </div>
  );
}