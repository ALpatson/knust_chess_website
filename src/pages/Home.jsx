import { motion } from 'framer-motion';

const chessPieces = [
  { char: '♕', size: 'text-8xl' },
  { char: '♖', size: 'text-7xl' },
  { char: '♘', size: 'text-7xl' },
  { char: '♗', size: 'text-7xl' },
  { char: '♙', size: 'text-6xl' },
  { char: '♔', size: 'text-9xl' },
];

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Abstract chess board pattern background */}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%,#000),linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%,#000)] bg-[length:60px_60px] bg-[position:0_0,30px_30px]" />

          {/* Floating Chess Pieces Background */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  left: Math.random() * 100 + "%",
                  top: Math.random() * 100 + "%",
                  opacity: 0,
                  rotate: Math.random() * 360,
                  scale: 0.8 + Math.random() * 0.4
                }}
                animate={{
                  left: [
                    Math.random() * 100 + "%",
                    Math.random() * 100 + "%",
                    Math.random() * 100 + "%"
                  ],
                  top: [
                    Math.random() * 100 + "%",
                    Math.random() * 100 + "%",
                    Math.random() * 100 + "%"
                  ],
                  opacity: [0.1, 0.25, 0.1],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 40 + Math.random() * 60,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className={`absolute ${chessPieces[i % chessPieces.length].size} text-white/20 font-serif`}
              >
                {chessPieces[i % chessPieces.length].char}
              </motion.div>
            ))}
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-chess-black" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            MASTER THE <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-600">64 SQUARES</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-chess-accent mb-10 max-w-2xl mx-auto"
          >
            Welcome to the official KNUST Chess Club, home of the <strong>2025 GUSA Minor Games Champions</strong>. Join the intellectual elite, develop your strategy, and become part of our legacy.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className="bg-white text-black px-8 py-3 rounded-none font-semibold uppercase tracking-wider hover:bg-gray-200 transition-colors">
              Join the Club
            </button>
          </motion.div>
        </div>
      </section>

      {/* Meeting Details Section */}
      <section className="py-24 relative border-b border-white/5 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">

            {/* Left side text */}
            <div className="lg:w-1/2 space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-widest text-white">
                  Join The <br /><span className="text-chess-accent">Action</span>
                </h2>
                <p className="text-lg text-gray-400 max-w-lg leading-relaxed mt-6">
                  Ready to test your skills? Join us at our regular club meetings where we offer training lessons, host mini-tournaments, and play friendly games. All skill levels are welcome!
                </p>
              </div>
            </div>

            {/* Right side info blocks */}
            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
              <div className="border-l-2 border-white/20 pl-6 py-2 hover:border-chess-accent transition-colors group">
                <span className="text-3xl block mb-4 group-hover:scale-110 transition-transform origin-left">📍</span>
                <h4 className="font-bold uppercase tracking-wider text-sm text-white mb-1">Location</h4>
                <p className="text-chess-accent">Engineering Tent (PB Tent)</p>
              </div>

              <div className="border-l-2 border-white/20 pl-6 py-2 hover:border-chess-accent transition-colors group">
                <span className="text-3xl block mb-4 group-hover:scale-110 transition-transform origin-left">📅</span>
                <h4 className="font-bold uppercase tracking-wider text-sm text-white mb-1">Days</h4>
                <p className="text-chess-accent">Fridays & Saturdays</p>
              </div>

              <div className="border-l-2 border-white/20 pl-6 py-2 hover:border-chess-accent transition-colors group sm:col-span-2">
                <span className="text-3xl block mb-4 group-hover:scale-110 transition-transform origin-left">⏰</span>
                <h4 className="font-bold uppercase tracking-wider text-sm text-white mb-1">Time</h4>
                <p className="text-chess-accent flex items-center gap-4">
                  <span>4:30 PM - 8:00 PM</span>
                  <span className="h-1 w-1 bg-chess-accent rounded-full"></span>
                  <span className="uppercase text-xs tracking-widest text-white/50">Weekly</span>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Upcoming Event Section - Cardless & Creative */}
      <section className="py-24 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-chess-accent/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col mb-12">
            <h2 className="text-sm font-bold tracking-widest uppercase text-chess-accent mb-2">Upcoming Major Event</h2>
            <div className="h-px w-24 bg-gradient-to-r from-chess-accent to-transparent" />
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

            {/* Typography & Details */}
            <div className="lg:w-1/2 space-y-8 order-2 lg:order-1">
              <h3 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none text-white">
                Queens<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-chess-accent to-white">Tournament</span>
                <span className="block text-2xl tracking-widest text-white/50 mt-2">2026</span>
              </h3>

              <div className="pl-6 border-l-2 border-chess-accent/30 space-y-4">
                <p className="text-xl text-gray-300 font-light leading-relaxed">
                  An exclusive, highly competitive tournament strictly for females. Step up to the board, showcase your strategic brilliance, and compete for amazing prizes!
                </p>
                <div className="flex items-center gap-4 text-sm text-chess-accent uppercase tracking-widest font-bold">
                  <span>Prizes to be won</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  <span>Females Only</span>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfKtDGjfpwXVCWSYiwb34A3BdSHCVGqyQU-_zB2_vwZAwNjMg/viewform?usp=dialog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-transparent border-2 border-chess-accent overflow-hidden"
                >
                  <div className="absolute inset-0 w-0 transition-all duration-300 ease-out bg-chess-accent group-hover:w-full"></div>
                  <span className="relative uppercase tracking-widest text-sm group-hover:text-black">Register Now</span>
                </a>
              </div>
            </div>

            {/* Flyer/Visual Element - Floating without a heavy card */}
            <div className="lg:w-1/2 order-1 lg:order-2 w-full max-w-md mx-auto">
              <div className="relative group">
                <div className="absolute -inset-4 border border-white/10 translate-x-4 translate-y-4 -z-10 transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
                <div className="bg-gray-900 border border-white/5 overflow-hidden">
                  <img src="/events/Queens.jpeg" alt="Queens Tournament 2026 Flyer" className="w-full h-auto" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Champions Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest border-b border-white/10 inline-block pb-4">Our Champions</h2>
        </div>

        {/* Featured Challenger (Maiden Edition) */}
        <div className="mb-16">
          <div className="glass-panel p-8 md:p-12 border-t-4 border-t-chess-accent flex flex-col md:flex-row items-center text-center md:text-left gap-10 group hover:bg-white/5 transition-all duration-500 relative overflow-hidden">
            {/* Background Decorative Text */}
            <div className="absolute right-0 bottom-0 text-[5rem] md:text-[12rem] font-bold text-white/5 pointer-events-none select-none uppercase tracking-tighter leading-none">
              Maiden
            </div>

            <div className="w-64 h-64 bg-gray-800 rounded-full border-4 border-chess-accent/30 relative overflow-hidden flex-shrink-0 group-hover:border-chess-accent transition-colors duration-300">
              <img src="/legends/Luqman_Abubakar.jpeg" alt="Challenger's Champion" className="w-full h-full object-cover grayscale-0 md:grayscale md:group-hover:grayscale-0 transition-all duration-700 absolute z-10" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white/20">
                <span className="text-7xl mb-2">⚔️</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-20 pointer-events-none" />
            </div>

            <div className="space-y-6 relative z-10">
              <div>
                <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-chess-accent mb-2">KCC Challenger's Champion (2026)</h2>
                <h3 className="text-4xl md:text-6xl font-bold uppercase tracking-tight text-white leading-none">Luqman Abubakar</h3>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
                Emerged as the victor of the maiden edition of the KCC Challenger's Tournament. A tactical rising star whose dominance in the 2026 season has set a new standard for the club.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <span className="px-4 py-1 border border-chess-accent/30 rounded-full text-xs uppercase tracking-widest text-chess-accent">Maiden Edition</span>
                <span className="px-4 py-1 border border-chess-accent/30 rounded-full text-xs uppercase tracking-widest text-chess-accent">COS Team Member</span>
              </div>
            </div>
          </div>
        </div>

        {/* Other Major Champions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {/* Overall Champion */}
          <div className="glass-panel p-6 flex flex-col items-center text-center gap-6 group hover:bg-white/5 transition-colors border-t-2 border-t-white">
            <h2 className="text-[10px] font-bold tracking-widest uppercase text-chess-accent w-full border-b border-white/10 pb-3">Overall KNUST Champion (2025)</h2>
            <div className="w-32 h-32 bg-gray-800 rounded-full border border-white/10 relative overflow-hidden flex items-center justify-center group-hover:border-white transition-colors duration-300">
              <img src="/legends/KCC_Champ.jpeg" alt="Overall Champion" className="w-full h-full object-cover grayscale-0 md:grayscale md:group-hover:grayscale-0 transition-all duration-500 absolute z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-20 pointer-events-none" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold uppercase tracking-wide">Amoani Charles Antwi</h3>
              <p className="text-xs text-chess-accent leading-relaxed">Winner of the 2025 KNUST Championship.</p>
            </div>
          </div>

          {/* Runner Up */}
          <div className="glass-panel p-6 flex flex-col items-center text-center gap-6 group hover:bg-white/5 transition-colors border-t-2 border-t-gray-400">
            <h2 className="text-[10px] font-bold tracking-widest uppercase text-chess-accent w-full border-b border-white/10 pb-3">Challenger's Runner-up (2026)</h2>
            <div className="w-32 h-32 bg-gray-800 rounded-full border border-white/10 relative overflow-hidden flex items-center justify-center group-hover:border-gray-400 transition-colors duration-300">
              <img src="/legends/KCC_Champ2nd.jpeg" alt="KCC Runner-up" className="w-full h-full object-cover grayscale-0 md:grayscale md:group-hover:grayscale-0 transition-all duration-500 absolute z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-20 pointer-events-none" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold uppercase tracking-wide">Akwasi Poku</h3>
              <p className="text-xs text-chess-accent leading-relaxed">Second place in the maiden KCC Challenger's Tournament.</p>
            </div>
          </div>

          {/* 3rd Place / President */}
          <div className="glass-panel p-6 flex flex-col items-center text-center gap-6 group hover:bg-white/5 transition-colors border-t-2 border-t-gray-600">
            <h2 className="text-[10px] font-bold tracking-widest uppercase text-chess-accent w-full border-b border-white/10 pb-3">Challenger's 3rd Place (2026)</h2>
            <div className="w-32 h-32 bg-gray-800 rounded-full border border-white/10 relative overflow-hidden flex items-center justify-center group-hover:border-gray-600 transition-colors duration-300">
              <img src="/executives/president.jpeg" alt="3rd Place Winner" className="w-full h-full object-cover grayscale-0 md:grayscale md:group-hover:grayscale-0 transition-all duration-500 absolute z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-20 pointer-events-none" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold uppercase tracking-wide">Alexis Baffour Owusu Annor</h3>
              <p className="text-xs text-chess-accent leading-relaxed">Third place in the maiden KCC Challenger's Tournament.</p>
            </div>
          </div>

          {/* Fresher's Champion 2026 */}
          <div className="glass-panel p-6 flex flex-col items-center text-center gap-6 group hover:bg-white/5 transition-colors border-t-2 border-t-chess-accent">
            <h2 className="text-[10px] font-bold tracking-widest uppercase text-chess-accent w-full border-b border-white/10 pb-3">Fresher's Champion (2026)</h2>
            <div className="w-32 h-32 bg-gray-800 rounded-full border border-white/10 relative overflow-hidden flex items-center justify-center group-hover:border-chess-accent transition-colors duration-300">
              <img src="/events/freshers/fresher_champ.jpeg" alt="Fresher's Champion 2026" className="w-full h-full object-cover grayscale-0 md:grayscale md:group-hover:grayscale-0 transition-all duration-500 absolute z-10" onError={(e) => e.target.style.display = 'none'} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-20 pointer-events-none opacity-50" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold uppercase tracking-wide">Nana Adjei-Yeboah Otchere</h3>
              <p className="text-xs text-chess-accent leading-relaxed">Winner of the 2026 Fresher's Tournament.</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Home;
