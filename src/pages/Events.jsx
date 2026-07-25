import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const eventGalleries = {
  clubMoments: [
    { type: 'image', src: '/events/club_moments/fun.jpeg', alt: 'Fun Games 1', year: '2025' },
    { type: 'image', src: '/events/club_moments/fun1.jpeg', alt: 'Fun Games 2', year: '2025' },
    { type: 'image', src: '/events/club_moments/fun2.jpeg', alt: 'Fun Games 3', year: '2026' },
    { type: 'image', src: '/events/club_moments/fun18.jpeg', alt: 'Club Moment 2025-1', year: '2025' },
    { type: 'image', src: '/events/club_moments/fun19.jpeg', alt: 'Club Moment 2025-2', year: '2025' },
    { type: 'image', src: '/events/club_moments/fun20.jpeg', alt: 'Club Moment 2025-3', year: '2025' },
    { type: 'image', src: '/events/club_moments/fun3.jpeg', alt: 'Club Highlights 1', year: '2025' },
    { type: 'image', src: '/events/club_moments/fun4.jpeg', alt: 'Club Highlights 2', year: '2025' },
    { type: 'image', src: '/events/club_moments/fun5.jpeg', alt: 'Tactical Discussions', year: '2025' },
    { type: 'image', src: '/events/club_moments/fun6.jpeg', alt: 'Casual Matches', year: '2025' },
    { type: 'image', src: '/events/club_moments/fun7.jpeg', alt: 'Post-game Analysis', year: '2026' },
    { type: 'image', src: '/events/club_moments/fun8.jpeg', alt: 'Club Gathering', year: '2026' },
    { type: 'image', src: '/events/club_moments/fun9.jpeg', alt: 'Strategic Planning', year: '2022' },
    { type: 'image', src: '/events/club_moments/fun10.jpeg', alt: 'Tournament Focus', year: '2025' },
    { type: 'image', src: '/events/club_moments/fun11.jpeg', alt: 'Friendly Match', year: '2025' },
    { type: 'image', src: '/events/club_moments/fun12.jpeg', alt: 'Club Moment 2022-1', year: '2022' },
    { type: 'image', src: '/events/club_moments/fun13.jpeg', alt: 'Club Moment 2022-2', year: '2022' },
    { type: 'image', src: '/events/club_moments/fun14.jpeg', alt: 'Club Moment 2022-3', year: '2022' },
    { type: 'image', src: '/events/club_moments/fun15.jpeg', alt: 'Club Moment 2024-1', year: '2024' },
    { type: 'image', src: '/events/club_moments/fun16.jpeg', alt: 'Club Moment 2024-2', year: '2024' },
    { type: 'image', src: '/events/club_moments/fun17.jpeg', alt: 'Club Moment 2024-3', year: '2024' },
  ],
  freshers: [
    { type: 'image', src: '/events/freshers/fresher_champ.jpeg', alt: 'Freshers Champion', year: '2026' },
    { type: 'image', src: '/events/freshers/fresher_g1.jpeg', alt: 'Freshers Match 1', year: '2026' },
    { type: 'image', src: '/events/freshers/fresher_g2.jpeg', alt: 'Freshers Match 2', year: '2026' },
    { type: 'image', src: '/events/freshers/freshers.jpeg', alt: 'Freshers Tournament Group', year: '2026' },
    { type: 'image', src: '/events/freshers/freshers1.jpeg', alt: 'Freshers Tournament Action', year: '2026' },
  ],
  interColleges: [
    { type: 'image', src: '/events/inter_colleges/inter_col.jpeg', alt: 'Inter-Colleges Match', year: '2026' },
    { type: 'image', src: '/events/inter_colleges/inter_col1.jpeg', alt: 'Inter-Colleges Team', year: '2026' },
    { type: 'image', src: '/events/inter_colleges/inter_col2.jpeg', alt: 'Inter-Colleges Finals', year: '2026' },
    { type: 'image', src: '/events/inter_colleges/inter_col3.jpeg', alt: 'Inter-Colleges Focus', year: '2026' },
    { type: 'image', src: '/events/inter_colleges/inter_col4.jpeg', alt: 'Inter-Colleges Strategy', year: '2026' },
    { type: 'image', src: '/events/inter_colleges/inter_col5.jpeg', alt: 'Inter-Colleges Victory', year: '2026' },
  ],
  ladies: [
    { type: 'image', src: '/events/ladies/ladies.jpeg', alt: 'Ladies Tournament Match', year: '2025' },
    { type: 'image', src: '/events/ladies/ladies1.jpeg', alt: 'Ladies Champion', year: '2025' },
    { type: 'image', src: '/events/ladies/ladies2.jpeg', alt: 'Ladies Group', year: '2025' },
  ]
};

const videos = [
  { src: '/videos/fresher_vi.mp4', title: 'Fresher\'s Highlights', year: '2025' },
  { src: '/videos/ladies_games.mp4', title: 'Ladies Games Highlights', year: '2025' },
];

const Events = () => {
  const [activeTab, setActiveTab] = useState('clubMoments');
  const [selectedImage, setSelectedImage] = useState(null);

  const tabs = [
    { id: 'clubMoments', label: "Club Moments" },
    { id: 'freshers', label: "Fresher's Tournament" },
    { id: 'interColleges', label: "Inter-Colleges" },
    { id: 'ladies', label: "Ladies Tournament" },
  ];

  return (
    <div className="py-20 px-4 max-w-7xl mx-auto min-h-screen">
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold uppercase tracking-widest mb-4"
        >
          Event Gallery
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-chess-accent max-w-2xl mx-auto"
        >
          Relive the intensity of our greatest battles and celebrations.
        </motion.p>
      </div>

      {/* 2026 KNUST Championship Title Match */}
      <div className="mb-12 relative overflow-hidden py-8">
        {/* Background Accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[200px] bg-chess-accent/5 blur-[120px] pointer-events-none" />

        <div className="flex flex-col mb-8 relative z-10">
          <h2 className="text-sm font-bold tracking-widest uppercase text-chess-accent mb-2">Upcoming Major Event • The Ultimate Showdown</h2>
          <div className="h-px w-24 bg-gradient-to-r from-chess-accent to-transparent" />
        </div>

        <div className="flex flex-row items-center justify-center gap-2 sm:gap-8 lg:gap-24 relative z-10">
          {/* Champion 1: Luqman */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-3 sm:gap-6 group flex-1 max-w-[160px] sm:max-w-[240px]"
          >
            <div className="w-24 h-24 sm:w-44 sm:h-44 md:w-56 md:h-56 rounded-full border-2 sm:border-4 border-white/10 overflow-hidden relative group-hover:border-chess-accent transition-all duration-500 shadow-2xl scale-95 group-hover:scale-100">
              <img src="/legends/Luqman_Abubakar.jpeg" alt="Luqman Abubakar" className="w-full h-full object-cover grayscale-0 sm:grayscale sm:group-hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-2 sm:bottom-4 left-0 right-0 text-center">
                <span className="text-[8px] sm:text-[10px] font-bold uppercase tracking-wider text-chess-accent bg-black/50 px-2 py-0.5 sm:px-3 sm:py-1 backdrop-blur-sm">Challenger</span>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xs sm:text-xl md:text-2xl font-bold uppercase tracking-wider text-white">Luqman Abubakar</h3>
              <p className="text-[8px] sm:text-[10px] uppercase tracking-widest text-gray-500 mt-0.5 sm:mt-1">2026 Challengers Champion</p>
            </div>
          </motion.div>

          {/* VS Divider */}
          <div className="flex flex-col items-center gap-1 sm:gap-2 py-2 sm:py-8 flex-shrink-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-7xl md:text-9xl font-black text-white/20 sm:text-white/5 italic select-none tracking-tighter leading-none"
            >
              VS
            </motion.div>
            <div className="w-8 sm:w-20 h-0.5 sm:h-1 bg-chess-accent" />
            <p className="text-[9px] sm:text-xs uppercase tracking-wider sm:tracking-[0.4em] font-bold text-chess-accent mt-2 text-center leading-tight sm:leading-relaxed">
              Battle for the <br /><span className="text-white">2026 Title</span>
            </p>
          </div>

          {/* Champion 2: Charles */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-3 sm:gap-6 group flex-1 max-w-[160px] sm:max-w-[240px]"
          >
            <div className="w-24 h-24 sm:w-44 sm:h-44 md:w-56 md:h-56 rounded-full border-2 sm:border-4 border-white/10 overflow-hidden relative group-hover:border-chess-accent transition-all duration-500 shadow-2xl scale-95 group-hover:scale-100">
              <img src="/legends/KCC_Champ.jpeg" alt="Amoani Charles Antwi" className="w-full h-full object-cover grayscale-0 sm:grayscale sm:group-hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-2 sm:bottom-4 left-0 right-0 text-center">
                <span className="text-[8px] sm:text-[10px] font-bold uppercase tracking-wider text-chess-accent bg-black/50 px-2 py-0.5 sm:px-3 sm:py-1 backdrop-blur-sm">Defending Champ</span>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xs sm:text-xl md:text-2xl font-bold uppercase tracking-wider text-white">Charles Antwi</h3>
              <p className="text-[8px] sm:text-[10px] uppercase tracking-widest text-gray-500 mt-0.5 sm:mt-1">2025 Overall Champion</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center max-w-4xl mx-auto px-4"
        >
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light italic mb-8">
            "Two legends, one throne. A battle of wits and willpower where every move carries the weight of history. Will the reigning champion defend his legacy, or will the new challenger forge a new era of dominance?"
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 text-left border-t border-white/10 pt-8">
            <div className="space-y-2 group">
              <span className="text-[10px] uppercase tracking-[0.3em] text-chess-accent font-bold block">Day 1 • 3 Rounds</span>
              <span className="text-xl md:text-2xl font-bold text-white block group-hover:text-chess-accent transition-colors">25 / 07 / 2026</span>
              <div className="h-0.5 w-12 bg-white/20 group-hover:w-full transition-all duration-500" />
            </div>
            
            <div className="space-y-2 group">
              <span className="text-[10px] uppercase tracking-[0.3em] text-chess-accent font-bold block">Day 2 • 4 Rounds</span>
              <span className="text-xl md:text-2xl font-bold text-white block group-hover:text-chess-accent transition-colors">01 / 08 / 2026</span>
              <div className="h-0.5 w-12 bg-white/20 group-hover:w-full transition-all duration-500" />
            </div>

            <div className="space-y-2 group">
              <span className="text-[10px] uppercase tracking-[0.3em] text-chess-accent font-bold block">Format</span>
              <span className="text-xl md:text-2xl font-bold text-white block group-hover:text-chess-accent transition-colors">7 Rounds Total</span>
              <div className="h-0.5 w-12 bg-white/20 group-hover:w-full transition-all duration-500" />
            </div>

            <div className="space-y-2 group">
              <span className="text-[10px] uppercase tracking-[0.3em] text-chess-accent font-bold block">Time Control</span>
              <span className="text-xl md:text-2xl font-bold text-white block group-hover:text-chess-accent transition-colors">15 + 10 Rapid</span>
              <div className="h-0.5 w-12 bg-white/20 group-hover:w-full transition-all duration-500" />
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Blitz Royale Section */}
      <div className="mb-12 relative overflow-hidden py-8 border-t border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[300px] bg-chess-accent/5 blur-[120px] pointer-events-none" />
        
        <div className="flex flex-col mb-6 relative z-10">
          <h2 className="text-sm font-bold tracking-widest uppercase text-chess-accent mb-2">High-Speed Battle</h2>
          <div className="h-px w-24 bg-gradient-to-r from-chess-accent to-transparent" />
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative z-10">
          <div className="flex-1">
             <h3 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-none text-white mb-6">
               Blitz<br />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-chess-accent to-white">Royale</span>
             </h3>
             <p className="text-xl text-gray-400 font-light max-w-xl">
               Speed, precision, and nerves of steel. 11 rounds of pure adrenaline where the clock is as much an opponent as the player across the board.
             </p>
          </div>

          <div className="w-full lg:w-auto flex flex-col gap-4">
             <div className="glass-panel p-8 border-l-4 border-chess-accent flex flex-col gap-6">
                <div className="grid grid-cols-2 gap-8">
                   <div>
                      <span className="text-[10px] uppercase tracking-widest text-gray-500 block mb-1">Time Control</span>
                      <span className="text-2xl font-bold text-white">5 + 0</span>
                   </div>
                   <div>
                      <span className="text-[10px] uppercase tracking-widest text-gray-500 block mb-1">Rounds</span>
                      <span className="text-2xl font-bold text-white">11 Rounds</span>
                   </div>
                   <div>
                      <span className="text-[10px] uppercase tracking-widest text-gray-500 block mb-1">Entry Fee</span>
                      <span className="text-2xl font-bold text-white">30 GHS</span>
                   </div>
                   <div>
                      <span className="text-[10px] uppercase tracking-widest text-gray-500 block mb-1">Date</span>
                      <span className="text-2xl font-bold text-white">08 / 08 / 26</span>
                   </div>
                   <div className="col-span-2 border-t border-white/5 pt-4">
                      <span className="text-[10px] uppercase tracking-widest text-chess-accent font-bold block mb-1">Tournament Rewards</span>
                      <span className="text-3xl font-black text-white italic tracking-tighter">CASH PRIZES</span>
                   </div>
                </div>
                <div className="h-px bg-white/10" />
                <div className="text-center">
                   <span className="text-xs uppercase tracking-[0.4em] font-bold text-chess-accent">Prepare for the Storm</span>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* KNUST Online Cup Chess Tournament */}
      <div className="mb-12 relative overflow-hidden py-8 border-t border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[300px] bg-chess-accent/5 blur-[120px] pointer-events-none" />

        <div className="flex flex-col mb-6 relative z-10">
          <h2 className="text-sm font-bold tracking-widest uppercase text-chess-accent mb-2">Online Cup Competition</h2>
          <div className="h-px w-24 bg-gradient-to-r from-chess-accent to-transparent" />
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 relative z-10">
          <div className="flex-1 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-chess-accent block mb-2">Platform: Lichess.org</span>
              <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-white">
                KNUST Online<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-chess-accent to-white">Cup 2026</span>
              </h3>
            </div>

            <p className="text-lg text-gray-300 font-light italic border-l-2 border-chess-accent/40 pl-4">
              "Every move counts. Every game matters. Chase the Cup!"
            </p>

            <p className="text-gray-400 leading-relaxed max-w-xl">
              An intense FIFA World Cup-style online rapid chess tournament featuring 32 players across 8 groups (A–H), followed by a 16-player single-elimination knockout stage to crown the KNUST Online Cup Champion.
            </p>

            <div className="pt-4">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSe5aKefvxyPRqU4TOYT3VJ9Xi5T6osE0vqMipwMgrbMK-pa1Q/viewform?usp=sharing&ouid=101099544730608504627"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-transparent border-2 border-chess-accent overflow-hidden"
              >
                <div className="absolute inset-0 w-0 transition-all duration-300 ease-out bg-chess-accent group-hover:w-full"></div>
                <span className="relative uppercase tracking-widest text-sm group-hover:text-black">Register For Online Cup</span>
              </a>
            </div>
          </div>

          <div className="w-full lg:w-auto flex flex-col gap-6">
            <div className="glass-panel p-8 border-l-4 border-chess-accent flex flex-col gap-6 min-w-[320px]">
              <div className="grid grid-cols-2 gap-6 border-b border-white/10 pb-6">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-gray-500 block mb-1">Time Control</span>
                  <span className="text-xl font-bold text-white">20 + 0 Rapid</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-gray-500 block mb-1">Max Slots</span>
                  <span className="text-xl font-bold text-white">32 Players</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-gray-500 block mb-1">Entry Fee</span>
                  <span className="text-xl font-bold text-white">GH₵ 10</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-gray-500 block mb-1">Start Date</span>
                  <span className="text-xl font-bold text-chess-accent">07 / 09 / 2026</span>
                </div>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-widest text-chess-accent font-bold block mb-3">Prize Distribution</span>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center text-white font-bold">
                    <span>🏆 Champion</span>
                    <span className="text-chess-accent">GH₵ 150</span>
                  </div>
                  <div className="flex justify-between items-center text-gray-300">
                    <span>🥈 Runner-up</span>
                    <span>GH₵ 90</span>
                  </div>
                  <div className="flex justify-between items-center text-gray-400">
                    <span>🥉 3rd Place</span>
                    <span>GH₵ 50</span>
                  </div>
                  <div className="flex justify-between items-center text-gray-500">
                    <span>4th Place</span>
                    <span>GH₵ 30</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Highlights Section */}
      <div className="mb-20">
        <h2 className="text-2xl font-bold uppercase tracking-widest mb-8 border-b border-white/10 pb-4">Video Highlights</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {videos.map((video, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel overflow-hidden relative group aspect-video bg-gray-900 border border-white/10"
            >
              <video
                src={video.src}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                autoPlay
                muted
                loop
                playsInline
                controls
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              {/* Fallback if video is missing */}
              <div className="absolute inset-0 hidden flex-col items-center justify-center text-white/20">
                <span className="text-4xl mb-2">▶</span>
                <span className="text-xs tracking-widest uppercase text-center px-4">Waiting for {video.src.split('/').pop()}</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent flex justify-between items-end">
                <h3 className="text-sm font-bold uppercase tracking-wider">{video.title}</h3>
                <span className="text-[10px] font-bold text-chess-accent tracking-widest">{video.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Photo Gallery Section */}
      <div>
        <h2 className="text-2xl font-bold uppercase tracking-widest mb-8 border-b border-white/10 pb-4">Photo Archive</h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 uppercase tracking-wider text-sm font-medium transition-colors ${activeTab === tab.id
                  ? 'bg-white text-black'
                  : 'border border-white/20 text-chess-accent hover:text-white hover:border-white/50'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Masonry-style Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {eventGalleries[activeTab].map((media, idx) => (
              <motion.div
                key={`${activeTab}-${idx}`}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="relative group cursor-pointer overflow-hidden bg-gray-800 aspect-[4/3] border border-white/10"
                onClick={() => setSelectedImage(media)}
              >
                <img
                  src={media.src}
                  alt={media.alt}
                  className="w-full h-full object-cover grayscale-0 md:grayscale md:group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />

                {/* Year Badge */}
                <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-1 border border-white/10 z-10">
                  <span className="text-[10px] font-bold text-white tracking-widest uppercase">{media.year}</span>
                </div>

                {/* Fallback if image is missing */}
                <div className="absolute inset-0 hidden flex-col items-center justify-center text-white/20 bg-[#111827]">
                  <span className="text-4xl mb-2">📷</span>
                  <span className="text-[10px] tracking-widest uppercase text-center px-2">Drop {media.src.split('/').pop()}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal for viewing full images */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/50 hover:text-white text-4xl"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[90vh] object-contain border border-white/20"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Events;
