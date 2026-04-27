import { motion } from 'framer-motion';

const executives = [
  { id: 1, name: 'Alexis Baffour Owusu Annor', role: 'President', piece: '♔ King', quote: '"Strategy is everything."', img: null },
  { id: 2, name: 'Alpatson Cobbina Siaw', role: 'Vice President', piece: '♕ Queen', quote: '"Control the center."', img: '/executives/Vice_president .jpeg' },
  { id: 3, name: 'Precious Paulina Adjei', role: 'Secretary', piece: '♗ Bishop', quote: '"Precision and timing."', img: null },
  { id: 4, name: 'Jubilee Roxsanne Bleboo', role: 'Financial Sec.', piece: '♖ Rook', quote: '"Solid defense wins games."', img: null },
  { id: 5, name: 'Kwabena Yeboah', role: 'Organizer', piece: '♘ Knight', quote: '"Unpredictable moves."', img: null },
];

const Executives = () => {
  return (
    <div className="py-20 px-4 max-w-7xl mx-auto min-h-screen">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-widest mb-4">The Royal Court</h1>
        <p className="text-chess-accent max-w-2xl mx-auto">
          Meet the minds guiding the KNUST Chess Club. Our executive board operates with the precision and foresight of Grandmasters.
        </p>
      </div>

      {/* Chess Board Layout Grid */}
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {executives.map((exec, index) => (
            <motion.div
              key={exec.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group cursor-pointer"
            >
              {/* Card Background resembling a chess square */}
              <div className={`absolute inset-0 z-0 border border-white/10 ${index % 2 === 0 ? 'bg-[#1a2332]' : 'bg-[#111827]'}`} />
              
              {/* Content */}
              <div className="relative z-10 p-8 flex flex-col items-center text-center h-full">
                <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-white/20 mb-6 bg-gray-800 relative group-hover:border-white transition-colors duration-300">
                  {exec.img ? (
                    <img src={exec.img} alt={exec.name} className="w-full h-full object-cover grayscale-0 md:grayscale md:group-hover:grayscale-0 transition-all duration-500" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-4xl text-white/50">
                      {exec.piece.split(' ')[0]}
                    </div>
                  )}
                </div>
                
                <h3 className="text-xl font-bold uppercase tracking-wider mb-1">{exec.name}</h3>
                <div className="text-chess-accent font-medium mb-4 flex items-center gap-2">
                  <span>{exec.piece}</span>
                  <span className="w-1 h-1 bg-chess-accent rounded-full" />
                  <span>{exec.role}</span>
                </div>
                
                <div className="mt-auto pt-6 border-t border-white/10 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm italic text-gray-400">{exec.quote}</p>
                </div>
              </div>
              
              {/* Hover Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-400 to-white opacity-0 group-hover:opacity-20 blur transition duration-500 z-[-1]" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Past Executives Section */}
      <div className="mt-32">
        <h2 className="text-2xl font-bold uppercase tracking-widest mb-8 text-center border-b border-white/10 pb-4">Past Leaders</h2>
        <div className="glass-panel p-6 overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-chess-accent">
                <th className="p-4 uppercase text-xs font-bold tracking-wider">Year</th>
                <th className="p-4 uppercase text-xs font-bold tracking-wider">President</th>
                <th className="p-4 uppercase text-xs font-bold tracking-wider">Vice President</th>
                <th className="p-4 uppercase text-xs font-bold tracking-wider">Notable Achievement</th>
              </tr>
            </thead>
            <tbody>
              {[
                { year: '2024-2025', pres: 'Alex Yeboah', vp: 'Diana Owusu', ach: 'Inter-University Champions' },
                { year: '2023-2024', pres: 'Samuel Osei', vp: 'Rita Mensah', ach: 'Hosted National Open' },
                { year: '2022-2023', pres: 'Isaac Nti', vp: 'Gifty Addo', ach: 'Club Reformation' },
              ].map((row, i) => (
                <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="p-4 font-mono text-sm">{row.year}</td>
                  <td className="p-4 font-medium">{row.pres}</td>
                  <td className="p-4 text-chess-accent">{row.vp}</td>
                  <td className="p-4 text-sm text-gray-400">{row.ach}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Executives;
