import { motion } from 'framer-motion';

const legendsData = [
  {
    id: 1,
    name: 'Alpatson Cobbina Siaw',
    title: 'The Unstoppable Force',
    description: 'A tactical genius who has dominated the KNUST chess scene with an aggressive and uncompromising style.',
    achievements: [
      "Winner, Fresher's Tournament (2023)",
      "Strongest in KNUST (2023)",
      "Winner, Weekend Blitz Championship (2023)",
      "Inter-Colleges Champion, College of Engineering (2024)"
    ],
    image: '/legends/Vice_president .jpeg' // Using the uploaded image
  },
  {
    id: 2,
    name: 'Amoani Charles Antwi',
    title: 'The Prodigy',
    description: 'An exceptional player whose mastery of the board led to back-to-back major championships.',
    achievements: [
      "Winner, Fresher's Tournament (2024)",
      "KNUST Champion (2025)"
    ],
    image: null // Picture to be added later
  }
];

const Legends = () => {
  return (
    <div className="py-20 px-4 max-w-7xl mx-auto min-h-screen">
      <div className="text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold uppercase tracking-widest mb-4"
        >
          Hall of Legends
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-chess-accent max-w-2xl mx-auto"
        >
          Celebrating the extraordinary minds that have etched their names into the history of the KNUST Chess Club.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {legendsData.map((legend, index) => (
          <motion.div
            key={legend.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2 + 0.3 }}
            className="glass-panel overflow-hidden flex flex-col md:flex-row group"
          >
            {/* Image Section */}
            <div className="md:w-2/5 bg-gray-800 relative min-h-[300px] border-r border-white/10 overflow-hidden">
              {legend.image ? (
                <img src={legend.image} alt={legend.name} className="w-full h-full object-cover grayscale-0 md:grayscale md:group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105" />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white/20 group-hover:text-white/40 transition-colors">
                  <span className="text-6xl mb-4">♕</span>
                  <span className="text-sm tracking-widest uppercase text-center px-4">{legend.name}</span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
            </div>

            {/* Content Section */}
            <div className="p-8 md:w-3/5 flex flex-col justify-center relative">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <span className="text-8xl font-serif">"</span>
              </div>
              
              <h2 className="text-2xl font-bold uppercase tracking-wider text-white mb-1">
                {legend.name}
              </h2>
              <h3 className="text-chess-accent text-sm font-medium uppercase tracking-widest mb-4 pb-4 border-b border-white/10">
                {legend.title}
              </h3>
              
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                {legend.description}
              </p>

              <div>
                <h4 className="text-xs uppercase tracking-widest text-white/50 mb-3">Notable Achievements</h4>
                <ul className="space-y-2">
                  {legend.achievements.map((achievement, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + (i * 0.1) }}
                      className="flex items-start gap-2 text-sm text-chess-accent"
                    >
                      <span className="text-white/50 mt-1">♙</span>
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Legends;
