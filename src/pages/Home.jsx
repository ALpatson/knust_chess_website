import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, CalendarDays, Clock, Users, Brain, Crown, Target } from 'lucide-react';

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
            <Link
              to="/join"
              className="inline-block bg-white text-black px-8 py-3 rounded-none font-semibold uppercase tracking-wider hover:bg-gray-200 transition-colors"
            >
              Join the Club
            </Link>
          </motion.div>
        </div>
      </section>


      {/* Meeting Details Section */}
      <section className="py-12 md:py-16 relative border-b border-white/5 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

            {/* Left side text */}
            <div className="lg:w-1/2 space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-widest text-white">
                  Join The <br /><span className="text-chess-accent">Action</span>
                </h2>
                <p className="text-base md:text-lg text-gray-400 max-w-lg leading-relaxed mt-4">
                  Ready to test your skills? Join us at our regular club meetings where we offer training lessons, host mini-tournaments, and play friendly games. All skill levels are welcome!
                </p>

                <div className="mt-6 pt-2">
                  <p className="text-sm text-gray-400 mb-2 italic">Want to know more about the inspiring journeys behind the board?</p>
                  <Link to="/blog" className="text-chess-accent font-bold uppercase tracking-widest text-sm hover:text-white transition-colors flex items-center gap-2 group w-max">
                    Discover Club Stories <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right side info blocks */}
            <div className="lg:w-1/2 grid grid-cols-2 gap-4 sm:gap-8 w-full">
              <div className="border-l-2 border-white/20 pl-4 sm:pl-6 py-2 hover:border-chess-accent transition-colors group">
                <span className="text-chess-accent block mb-2 sm:mb-4 group-hover:scale-110 transition-transform origin-left">
                  <MapPin size={28} strokeWidth={1.5} />
                </span>
                <h4 className="font-bold uppercase tracking-wider text-xs sm:text-sm text-white mb-1">Location</h4>
                <p className="text-xs sm:text-base text-gray-400">Engineering Tent (PB Tent)</p>
              </div>

              <div className="border-l-2 border-white/20 pl-4 sm:pl-6 py-2 hover:border-chess-accent transition-colors group">
                <span className="text-chess-accent block mb-2 sm:mb-4 group-hover:scale-110 transition-transform origin-left">
                  <CalendarDays size={28} strokeWidth={1.5} />
                </span>
                <h4 className="font-bold uppercase tracking-wider text-xs sm:text-sm text-white mb-1">Days</h4>
                <p className="text-xs sm:text-base text-gray-400">Fridays & Saturdays</p>
              </div>

              <div className="border-l-2 border-white/20 pl-4 sm:pl-6 py-2 hover:border-chess-accent transition-colors group col-span-2">
                <span className="text-chess-accent block mb-2 sm:mb-4 group-hover:scale-110 transition-transform origin-left">
                  <Clock size={28} strokeWidth={1.5} />
                </span>
                <h4 className="font-bold uppercase tracking-wider text-xs sm:text-sm text-white mb-1">Time</h4>
                <p className="text-xs sm:text-base text-gray-400 flex items-center gap-3 sm:gap-4">
                  <span>4:30 PM - 8:00 PM</span>
                  <span className="h-1 w-1 bg-chess-accent rounded-full"></span>
                  <span className="uppercase text-[10px] sm:text-xs tracking-widest text-white/50">Weekly</span>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Membership Benefits Section */}
      <section className="py-12 md:py-16 relative border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-xs sm:text-sm font-bold tracking-widest uppercase text-chess-accent mb-2">Why Join Us</h2>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-chess-accent to-transparent mx-auto mb-4" />
            <h3 className="text-2xl md:text-4xl font-bold uppercase tracking-widest text-white">
              Membership Benefits
            </h3>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {/* Benefit 1 */}
            <div className="glass-panel p-4 sm:p-8 border-t-2 border-t-white/10 hover:border-t-chess-accent transition-all duration-300 group">
              <div className="text-chess-accent mb-3 sm:mb-6 group-hover:scale-110 transition-transform origin-left">
                <Brain className="w-7 h-7 sm:w-10 sm:h-10" strokeWidth={1.5} />
              </div>
              <h4 className="text-sm sm:text-lg font-bold uppercase tracking-wide text-white mb-2 sm:mb-3">Cognitive Mastery</h4>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                Improve focus, strategic thinking, and problem-solving skills to give you an edge in your academic pursuits.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="glass-panel p-4 sm:p-8 border-t-2 border-t-white/10 hover:border-t-chess-accent transition-all duration-300 group">
              <div className="text-chess-accent mb-3 sm:mb-6 group-hover:scale-110 transition-transform origin-left">
                <Crown className="w-7 h-7 sm:w-10 sm:h-10" strokeWidth={1.5} />
              </div>
              <h4 className="text-sm sm:text-lg font-bold uppercase tracking-wide text-white mb-2 sm:mb-3">Varsity Representation</h4>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                Get the chance to represent KNUST at the prestigious GUSA Games and other major inter-university tournaments.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="glass-panel p-4 sm:p-8 border-t-2 border-t-white/10 hover:border-t-chess-accent transition-all duration-300 group">
              <div className="text-chess-accent mb-3 sm:mb-6 group-hover:scale-110 transition-transform origin-left">
                <Users className="w-7 h-7 sm:w-10 sm:h-10" strokeWidth={1.5} />
              </div>
              <h4 className="text-sm sm:text-lg font-bold uppercase tracking-wide text-white mb-2 sm:mb-3">Elite Networking</h4>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                Join an exclusive community of smart, like-minded individuals and build connections across all colleges.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="glass-panel p-4 sm:p-8 border-t-2 border-t-white/10 hover:border-t-chess-accent transition-all duration-300 group">
              <div className="text-chess-accent mb-3 sm:mb-6 group-hover:scale-110 transition-transform origin-left">
                <Target className="w-7 h-7 sm:w-10 sm:h-10" strokeWidth={1.5} />
              </div>
              <h4 className="text-sm sm:text-lg font-bold uppercase tracking-wide text-white mb-2 sm:mb-3">Weekly Training</h4>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                Access to challenging puzzles, theory masterclasses, and simul exhibitions with top-rated university players.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Event Section - Blitz Royale */}
      <section className="py-12 md:py-16 relative overflow-hidden border-b border-white/5">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-chess-accent/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col mb-8">
            <h2 className="text-xs sm:text-sm font-bold tracking-widest uppercase text-chess-accent mb-2">Upcoming Major Event • High-Speed Battle</h2>
            <div className="h-px w-24 bg-gradient-to-r from-chess-accent to-transparent" />
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            {/* Details */}
            <div className="lg:w-1/2 space-y-6">
              <h3 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none text-white">
                Blitz<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-chess-accent to-white">Royale</span>
              </h3>

              <div className="pl-6 border-l-2 border-chess-accent/30 space-y-4">
                <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed">
                  Speed, precision, and nerves of steel. 11 rounds of pure adrenaline where the clock is as much an opponent as the player across the board.
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-chess-accent uppercase tracking-widest font-bold">
                  <span>Date: 08 / 08 / 2026</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  <span>Cash Prizes</span>
                </div>
              </div>

            </div>

            {/* Event Stats Card */}
            <div className="lg:w-1/2 w-full glass-panel p-6 sm:p-8 border-l-4 border-chess-accent">
              <div className="grid grid-cols-2 gap-6 border-b border-white/10 pb-6">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-gray-500 block mb-1">Time Control</span>
                  <span className="text-xl sm:text-2xl font-bold text-white">5 + 0 Blitz</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-gray-500 block mb-1">Rounds</span>
                  <span className="text-xl sm:text-2xl font-bold text-white">11 Rounds</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-gray-500 block mb-1">Entry Fee</span>
                  <span className="text-xl sm:text-2xl font-bold text-white">30 GHS</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-gray-500 block mb-1">Date</span>
                  <span className="text-xl sm:text-2xl font-bold text-chess-accent">08 / 08 / 26</span>
                </div>
              </div>
              <div className="pt-4 text-center">
                <span className="text-xs uppercase tracking-[0.3em] font-bold text-chess-accent block mb-1">Tournament Rewards</span>
                <span className="text-2xl sm:text-3xl font-black text-white italic tracking-tight">CASH PRIZES TO BE WON</span>
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

        {/* 3 Featured Champions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* KCC Champion 2026 - Akwasi Poku */}
          <div className="glass-panel p-6 md:p-8 border-t-4 border-t-chess-accent flex flex-col items-center text-center gap-6 group hover:bg-white/5 transition-all duration-500 relative overflow-hidden h-full">
            <div className="absolute right-0 bottom-0 text-[5rem] font-bold text-white/5 pointer-events-none select-none uppercase tracking-tighter leading-none">
              KCC
            </div>

            <div className="w-32 h-32 md:w-40 md:h-40 bg-gray-800 rounded-full border-4 border-chess-accent/40 relative overflow-hidden flex-shrink-0 group-hover:border-chess-accent transition-colors duration-300 shadow-lg shadow-amber-500/10">
              <img src="/legends/akwasi_champion.jpeg" alt="KCC Champion" className="w-full h-full object-cover grayscale-0 md:grayscale md:group-hover:grayscale-0 transition-all duration-700 absolute z-10" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white/20">
                <span className="text-4xl mb-2">🏆</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-20 pointer-events-none" />
            </div>

            <div className="space-y-3 relative z-10 flex flex-col justify-between h-full w-full">
              <div>
                <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-chess-accent mb-2">KCC Champion (2026)</h2>
                <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white leading-tight mb-3">Akwasi Poku</h3>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                  Crowned Champion of the KNUST Chess Club. A master of tactical calculation and strategic poise under pressure.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 justify-center pt-2">
                <span className="px-3 py-1 border border-chess-accent/40 rounded-full text-[10px] uppercase tracking-widest text-chess-accent bg-chess-accent/10">🥇 KCC Champion</span>
                <span className="px-3 py-1 border border-white/20 rounded-full text-[10px] uppercase tracking-widest text-gray-300">2026 Season</span>
              </div>
            </div>
          </div>

          {/* Queen's Tournament Champion 2026 - Jubilee Roxsanne Bleboo */}
          <div className="glass-panel p-6 md:p-8 border-t-4 border-t-chess-accent flex flex-col items-center text-center gap-6 group hover:bg-white/5 transition-all duration-500 relative overflow-hidden h-full">
            <div className="absolute right-0 bottom-0 text-[5rem] font-bold text-white/5 pointer-events-none select-none uppercase tracking-tighter leading-none">
              Queens
            </div>

            <div className="w-32 h-32 md:w-40 md:h-40 bg-gray-800 rounded-full border-4 border-chess-accent/40 relative overflow-hidden flex-shrink-0 group-hover:border-chess-accent transition-colors duration-300">
              <img src="/executives/Jubilee_Roxsanne_Bleboo.jpeg" alt="Queen's Tournament Champion" className="w-full h-full object-cover grayscale-0 md:grayscale md:group-hover:grayscale-0 transition-all duration-700 absolute z-10" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white/20">
                <span className="text-4xl mb-2">♕</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-20 pointer-events-none" />
            </div>

            <div className="space-y-3 relative z-10 flex flex-col justify-between h-full w-full">
              <div>
                <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-chess-accent mb-2">Queen's Tournament Champion (2026)</h2>
                <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white leading-tight mb-3">Jubilee Roxsanne Bleboo</h3>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                  Crowned 1st Place Champion in the maiden edition of the KNUST Queen's Tournament. Financial Secretary & dominant competitor.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 justify-center pt-2">
                <span className="px-3 py-1 border border-chess-accent/40 rounded-full text-[10px] uppercase tracking-widest text-chess-accent bg-chess-accent/10">♕ Queen's Champion</span>
                <span className="px-3 py-1 border border-white/20 rounded-full text-[10px] uppercase tracking-widest text-gray-300">Maiden Edition</span>
              </div>
            </div>
          </div>

          {/* Fresher's Champion 2026 - Nana Adjei-Yeboah Otchere */}
          <div className="glass-panel p-6 md:p-8 border-t-4 border-t-chess-accent flex flex-col items-center text-center gap-6 group hover:bg-white/5 transition-all duration-500 relative overflow-hidden h-full">
            <div className="absolute right-0 bottom-0 text-[5rem] font-bold text-white/5 pointer-events-none select-none uppercase tracking-tighter leading-none">
              Freshers
            </div>

            <div className="w-32 h-32 md:w-40 md:h-40 bg-gray-800 rounded-full border-4 border-chess-accent/40 relative overflow-hidden flex-shrink-0 group-hover:border-chess-accent transition-colors duration-300">
              <img src="/events/freshers/fresher_champ.jpeg" alt="Fresher's Champion" className="w-full h-full object-cover grayscale-0 md:grayscale md:group-hover:grayscale-0 transition-all duration-700 absolute z-10" onError={(e) => e.target.style.display = 'none'} />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white/20">
                <span className="text-4xl mb-2">♔</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-20 pointer-events-none" />
            </div>

            <div className="space-y-3 relative z-10 flex flex-col justify-between h-full w-full">
              <div>
                <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-chess-accent mb-2">Fresher's Champion (2026)</h2>
                <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white leading-tight mb-3">Nana Adjei-Yeboah Otchere</h3>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                  Winner of the 2026 Fresher's Tournament, showcasing remarkable strategic vision and an undefeated run.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 justify-center pt-2">
                <span className="px-3 py-1 border border-chess-accent/40 rounded-full text-[10px] uppercase tracking-widest text-chess-accent bg-chess-accent/10">🏆 Fresher's Champion</span>
                <span className="px-3 py-1 border border-white/20 rounded-full text-[10px] uppercase tracking-widest text-gray-300">2026 Season</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
