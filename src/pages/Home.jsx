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

      {/* Current Champion Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="glass-panel p-8 md:p-12 border-l-4 border-l-white flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h2 className="text-sm font-bold tracking-widest uppercase text-chess-accent">Current Reigning Champion</h2>
            <h3 className="text-4xl font-bold">John "The Tactician" Doe</h3>
            <p className="text-chess-accent">
              Secured the title during the 2025 Annual Grand Prix with a stunning queen sacrifice in the final match. 
              Currently holding an unbeaten streak of 14 games.
            </p>
            <button className="border border-white/20 px-6 py-2 hover:bg-white hover:text-black transition-colors font-medium">
              View Games
            </button>
          </div>
          <div className="w-64 h-64 bg-gray-800 border border-white/10 relative overflow-hidden group">
             {/* Placeholder for champion image */}
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
             <div className="absolute bottom-4 left-4 z-20">
               <span className="bg-white text-black text-xs font-bold px-2 py-1 uppercase">Rating: 2150</span>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
