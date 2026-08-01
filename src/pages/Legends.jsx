import { motion } from 'framer-motion';

const legendsData = [
  {
    id: 6,
    name: 'Johnny Edem Agboado',
    title: 'The Arbiter & Mathematician',
    description: 'A dedicated coach and certified arbiter who revolutionized the club\'s competitive landscape by developing the official KCC Player Rating System.',
    achievements: [
      "Architect of the Official KCC Rating Formula",
      "2nd Place, KNUST Freestyle Tournament (2025)",
      "Lead Coach and Tutor to Club Members",
      "Official Arbiter for Major Club Events"
    ],
    image: '/legends/Johnny_Edem_Agboado.jpeg'
  },
  {
    id: 1,
    name: 'Alpatson Cobbina Siaw',
    title: 'The Unstoppable Force',
    description: 'A tactical genius who has dominated the KNUST chess scene with an aggressive and uncompromising style.',
    achievements: [
      "Winner, Fresher's Tournament (2023)",
      "Strongest in KNUST (2023)",
      "Winner, Weekend Blitz Championship (2023)",
      "Inter-Colleges Champion, College of Engineering (2024)",
      "3rd Place, BCA Championship (2023)",
      "2nd Place, BCA Championship (2024)",
      "3rd Place, KNUST Championship (2025)"
    ],
    image: '/legends/Vice_president.jpeg'
  },
  {
    id: 2,
    name: 'Alexis Baffour Owusu Annor',
    title: 'The Grandmaster Lead',
    description: 'Our President, who leads by example on and off the board with strategic dominance.',
    achievements: [
      "Winner, KCC Blitz Royal (2025)",
      "Champion, GUSA Games (2025)",
      "Male Champion, College Games (2026)",
      "3rd Place, KCC Challengers Championship (2026)"
    ],
    image: '/executives/president.jpeg'
  },
  {
    id: 3,
    name: 'Amoani Charles Antwi',
    title: 'The Prodigy',
    description: 'An exceptional player whose mastery of the board led to back-to-back major championships.',
    achievements: [
      "Winner, Fresher's Tournament (2024)",
      "KNUST Champion (2025)",
      "Winner, College Championship (2025)"
    ],
    image: '/legends/KCC_Champ.jpeg'
  },
  {
    id: 4,
    name: 'Jubilee Roxsanne Bleboo',
    title: 'The Fortress',
    description: 'Our Financial Secretary and a dominant force in female competitive chess, winner of the maiden Queen\'s Tournament.',
    achievements: [
      "Winner, Maiden Queen's Tournament (2026)",
      "1st Place (Female), Inter-College Games (2025)",
      "1st Place (Female), Inter-College Games (2026)",
      "Champion, College of Health Sciences (COHS)"
    ],
    image: '/executives/Jubilee_Roxsanne_Bleboo.jpeg'
  },
  {
    id: 14,
    name: 'Abena Yeboah Danso',
    title: 'Queen\'s Tournament Runner-Up',
    description: 'A formidable chess talent who captured 2nd Place in the maiden edition of the KNUST Queen\'s Tournament.',
    achievements: [
      "2nd Place, Maiden Queen's Tournament (2026)"
    ],
    image: null
  },
  {
    id: 15,
    name: 'Precious Paulina Adjei',
    title: 'The Strategic Mind',
    description: 'Our General Secretary and a core force in female competitive chess who secured 3rd Place in the maiden Queen\'s Tournament.',
    achievements: [
      "3rd Place, Maiden Queen's Tournament (2026)",
      "General Secretary, KNUST Chess Club (2025-2026)"
    ],
    image: '/executives/precious.jpeg'
  },
  {
    id: 5,
    name: 'Akwasi Poku',
    title: 'The Calm Strategist',
    description: 'A formidable competitor known for his calm composure and precise execution under pressure.',
    achievements: [
      "2nd Place, KCC Championship (2025)",
      "Winner, KCC Get Together (2024)",
      "2nd Place, KCC Challengers Championship (2026)"
    ],
    image: '/legends/KCC_Champ2nd.jpeg'
  },
  {
    id: 7,
    name: 'Luqman Abubakar',
    title: 'The Challenger',
    description: 'A rising star known for his tactical precision and consistency in team play across multiple seasons.',
    achievements: [
      "Winner, KCC Challenger's tournament (2026)",
      "Team Member, College of Science (2024, 2025, 2026)"
    ],
    image: '/legends/Luqman_Abubakar.jpeg'
  },
  {
    id: 8,
    name: 'Kofi Amo Barimah',
    title: 'The Engineering Tactician',
    description: 'A key pillar of the College of Engineering team, delivering exceptional results in blitz and team formats.',
    achievements: [
      "1st Place Team, Inter-College games (2024, 2025)",
      "2nd Place, KCC Blitz Royale (2025)"
    ],
    image: '/legends/Kofi Amo Barimah.jpeg'
  },
  {
    id: 9,
    name: 'Antwi Marfo Francis',
    title: 'The Natural Leader',
    description: 'A dedicated leader and captain who has been a pillar of the CoHSS chess team for multiple seasons.',
    achievements: [
      "Captain, CoHSS Chess Team (2024-2025)",
      "2nd Place, KCC Get Together Tourney (2024)"
    ],
    image: '/legends/Antwi_Marfo_Francis.jpeg'
  },
  {
    id: 10,
    name: 'Asemsuro Solomon',
    title: 'The Creative Master',
    description: 'Renowned for his unorthodox and imaginative approach to the game, winning the maiden freestyle tournament.',
    achievements: [
      "Winner, Freestyle tournament Maiden Edition (2025)",
      "2nd Place, Fresher's Tournament (2025)"
    ],
    image: '/legends/solomon.jpeg'
  },
  {
    id: 11,
    name: 'Nana Adjei-Yeboah Otchere',
    title: 'The Rising Legend',
    description: 'A young talent who made history by winning the 2026 Fresher\'s Tournament with an undefeated run.',
    achievements: [
      "Winner, Fresher's Tournament (2026)"
    ],
    image: '/events/freshers/fresher_champ.jpeg'
  },
  {
    id: 12,
    name: 'Obeng Lawrence',
    title: 'The Rising Phenom',
    description: 'A young strategist who dominated the 2025 Fresher\'s Tournament with tactical brilliance.',
    achievements: [
      "Winner, Fresher's Tournament (2025)"
    ],
    image: '/legends/Obeng_Lawrence.jpeg'
  },
  {
    id: 13,
    name: 'CM Maud Benson',
    title: 'The Continental Champion',
    description: 'A multifaceted force balancing engineering and chess, who rose from a curious teenager to a two-time West African Women’s Chess Champion.',
    achievements: [
      "Two-time West African Women's Chess Champion",
      "Represented Ghana on the international stage",
      "Advocate for girls in STEM and chess"
    ],
    image: '/blogs/Maud_Benson.jpeg'
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
            transition={{ delay: index * 0.1 }}
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
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + (i * 0.1) }}
                      className="flex items-start gap-2 text-sm text-chess-accent"
                    >
                      <span className="text-white/50 mt-1">♙</span>
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {legend.formula && (
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex justify-between items-end mb-3">
                    <h4 className="text-[10px] uppercase tracking-widest text-white/40">The Agboado Formula</h4>
                    <span className="text-[8px] text-chess-accent/60 font-mono italic">K-Factor: 32</span>
                  </div>
                  <div className="bg-black/40 p-5 rounded-lg border border-chess-accent/20 font-mono text-center group/formula hover:border-chess-accent/40 transition-colors">
                    <p className="text-chess-accent text-xl font-bold tracking-widest mb-2 group-hover/formula:scale-105 transition-transform">
                      {legend.formula.equation}
                    </p>
                    {legend.formula.subEquation && (
                      <p className="text-white/40 text-[11px] mb-3 border-t border-white/5 pt-2">
                        {legend.formula.subEquation}
                      </p>
                    )}
                    <p className="text-[9px] text-white/60 italic leading-tight">
                      {legend.formula.explanation}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Legends;
