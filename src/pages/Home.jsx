import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Abstract chess board pattern background */}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%,#000),linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%,#000)] bg-[length:60px_60px] bg-[position:0_0,30px_30px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-chess-black" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            MASTER THE <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-600">64 SQUARES</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-chess-accent mb-10 max-w-2xl mx-auto"
          >
            Welcome to the official KNUST Chess Club. Join the intellectual elite, develop your strategy, and become part of our legacy.
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
                  Join The <br/><span className="text-chess-accent">Action</span>
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
              <div className="relative aspect-[3/4] group">
                <div className="absolute -inset-4 border border-white/10 translate-x-4 translate-y-4 -z-10 transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
                <div className="absolute inset-0 bg-gray-900 border border-white/5 overflow-hidden">
                  <img src="/events/queens_flyer.jpg" alt="Queens Tournament 2026 Flyer" className="w-full h-full object-cover grayscale-0 md:grayscale md:group-hover:grayscale-0 transition-all duration-700 absolute z-10" onError={(e) => e.target.style.display = 'none'} />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white/20">
                     <span className="text-6xl mb-4">♕</span>
                     <span className="text-xs uppercase tracking-widest text-center px-4">Flyer Coming Soon</span>
                  </div>
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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Overall Champion */}
          <div className="glass-panel p-8 md:p-10 border-t-4 border-t-white flex flex-col items-center text-center gap-6 group hover:bg-white/5 transition-colors">
            <h2 className="text-sm font-bold tracking-widest uppercase text-chess-accent w-full border-b border-white/10 pb-4">Overall KNUST Champion</h2>
            
            <div className="w-48 h-48 bg-gray-800 rounded-full border-2 border-white/10 relative overflow-hidden flex items-center justify-center group-hover:border-white transition-colors duration-300">
               <div className="absolute inset-0 flex flex-col items-center justify-center text-white/20">
                 <span className="text-5xl mb-2">♚</span>
               </div>
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none" />
            </div>
            
            <div className="space-y-4">
              <h3 className="text-3xl font-bold">Amoani Charles Antwi</h3>
              <p className="text-chess-accent text-sm leading-relaxed">
                Crowned the KNUST Champion in 2025 after an incredible run that began with winning the Fresher's Tournament in 2024. A true master of the board.
              </p>
            </div>
          </div>

          {/* Fresher's Champion */}
          <div className="glass-panel p-8 md:p-10 border-t-4 border-t-chess-accent flex flex-col items-center text-center gap-6 group hover:bg-white/5 transition-colors">
            <h2 className="text-sm font-bold tracking-widest uppercase text-chess-accent w-full border-b border-white/10 pb-4">Fresher's Champion (2025)</h2>
            
            <div className="w-48 h-48 bg-gray-800 rounded-full border-2 border-white/10 relative overflow-hidden flex items-center justify-center group-hover:border-chess-accent transition-colors duration-300">
               <img src="/events/freshers/fresher_champ.jpeg" alt="Fresher's Champion" className="w-full h-full object-cover grayscale-0 md:grayscale md:group-hover:grayscale-0 transition-all duration-500 absolute z-10" onError={(e) => e.target.style.display = 'none'} />
               <div className="absolute inset-0 flex flex-col items-center justify-center text-white/20">
                 <span className="text-5xl mb-2">♙</span>
               </div>
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-20 pointer-events-none opacity-50" />
            </div>
            
            <div className="space-y-4">
              <h3 className="text-3xl font-bold">2025 Champion</h3>
              <p className="text-chess-accent text-sm leading-relaxed">
                Emerged victorious in the highly competitive 2025 Fresher's Tournament, marking the beginning of a promising legacy in the KNUST Chess Club.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
