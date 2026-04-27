import { motion } from 'framer-motion';

const executives = [
  { id: 1, name: 'Alexis Baffour Owusu Annor', role: 'President', piece: '♔ King', quote: '"Strategy is everything."', img: '/executives/president.jpeg' },
  { id: 2, name: 'Alpatson Cobbina Siaw', role: 'Vice President', piece: '♕ Queen', quote: '"Control the center."', img: '/executives/Vice_president.jpeg' },
  { id: 3, name: 'Precious Paulina Adjei', role: 'Secretary', piece: '♗ Bishop', quote: '"Precision and timing."', img: '/executives/precious.jpeg' },
  { id: 4, name: 'Jubilee Roxsanne Bleboo', role: 'Financial Sec.', piece: '♖ Rook', quote: '"Solid defense wins games."', img: '/executives/Jubilee_Roxsanne_Bleboo.jpeg' },
  { id: 5, name: 'Queenstar Esenam Adjoa Sobo', role: 'Media Officer', piece: '♘ Knight', quote: '"Unpredictable moves."', img: '/executives/Media.jpeg' },
  { id: 6, name: 'Emmanuel Nana Kofi Oppong', role: 'Organising Sec.', piece: '♗ Bishop', quote: '"Perfect coordination is the key to victory."', img: '/executives/organising_secretary.jpeg' },
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

      {/* Current Administration Achievements */}
      <div className="mt-32 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold uppercase tracking-widest mb-4">Administration Achievements</h2>
          <div className="h-1 w-20 bg-chess-accent mx-auto" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "KCC Rating System", desc: "Introduction of the first official KCC Rating system to standardize player rankings." },
            { title: "Rating Software", desc: "Development of custom software specifically designed to calculate and manage the club's rating system." },
            { title: "Official Website", desc: "Development and launch of the comprehensive KNUST Chess Club website." },
            { title: "KCC Champion", desc: "Introduction of the prestigious KCC Champion title and official championship format." },
            { title: "Queen's Tournament", desc: "Establishment of the Queen's Tournament, our maiden exclusive event for female players." },
            { title: "Wooden Boards", desc: "Successful acquisition of professional-grade wooden chess boards for elite tournament play." }
          ].map((achievement, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-8 border-l-4 border-l-white/20 hover:border-l-white transition-all group"
            >
              <h3 className="font-bold uppercase tracking-wider text-sm mb-3 group-hover:text-white transition-colors">
                {achievement.title}
              </h3>
              <p className="text-xs leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors">
                {achievement.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Past Administrations Gallery */}
      <div className="mt-32 pb-20">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold uppercase tracking-widest mb-4">Past Administrations</h2>
          <div className="h-1 w-20 bg-chess-accent mx-auto" />
        </div>

        <div className="space-y-24">
          {[
            {
              year: '2023-2024 Board',
              members: [
                { name: 'Maud Benson', role: 'President', img: '/executives/Maud_Benson.jpeg', piece: '♔' },
                { name: 'Moses Awuah', role: 'Vice President', img: null, piece: '♕' },
                { name: 'Darko Michael Agyeman', role: 'General Secretary', img: null, piece: '♗' },
                { name: 'Emmanuel Ofosu Ofori', role: 'Financial Secretary', img: null, piece: '♖' },
                { name: 'Sebastian Adu', role: 'Publicity Manager', img: null, piece: '♘' },
                { name: 'Alpatson Cobbina Siaw', role: 'Organiser', img: '/executives/Vice_president.jpeg', piece: '♗' },
              ]
            }
          ].map((admin, idx) => (
            <div key={idx} className="space-y-12">
              <h3 className="text-xl font-bold text-chess-accent text-center uppercase tracking-[0.3em]">{admin.year}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                {admin.members.map((member, mIdx) => (
                  <motion.div 
                    key={mIdx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: mIdx * 0.05 }}
                    className="flex flex-col items-center group"
                  >
                    <div className="w-20 h-20 rounded-full overflow-hidden border border-white/10 mb-4 bg-gray-900 group-hover:border-chess-accent transition-all duration-300 relative flex items-center justify-center">
                      {member.img ? (
                        <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale md:grayscale group-hover:grayscale-0 transition-all duration-500 z-10" />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-chess-accent/20 group-hover:text-chess-accent/40 transition-colors">
                          <span className="text-4xl">{member.piece}</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-0" />
                    </div>
                    <div className="text-center">
                      <h4 className="text-[10px] font-bold uppercase tracking-wider text-white mb-1 leading-tight">{member.name}</h4>
                      <p className="text-[9px] uppercase tracking-widest text-chess-accent font-medium">{member.role}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Executives;
