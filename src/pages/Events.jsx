import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const eventGalleries = {
  clubMoments: [
    { type: 'image', src: '/events/club_moments/fun.jpeg', alt: 'Fun Games 1', year: '2025' },
    { type: 'image', src: '/events/club_moments/fun1.jpeg', alt: 'Fun Games 2', year: '2025' },
    { type: 'image', src: '/events/club_moments/fun2.jpeg', alt: 'Fun Games 3', year: '2025' },
    { type: 'image', src: '/events/club_moments/fun3.jpeg', alt: 'Club Highlights 1', year: '2025' },
    { type: 'image', src: '/events/club_moments/fun4.jpeg', alt: 'Club Highlights 2', year: '2025' },
    { type: 'image', src: '/events/club_moments/fun5.jpeg', alt: 'Tactical Discussions', year: '2025' },
    { type: 'image', src: '/events/club_moments/fun6.jpeg', alt: 'Casual Matches', year: '2025' },
    { type: 'image', src: '/events/club_moments/fun7.jpeg', alt: 'Post-game Analysis', year: '2025' },
    { type: 'image', src: '/events/club_moments/fun8.jpeg', alt: 'Club Gathering', year: '2025' },
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

      {/* Upcoming Event Section - Cardless & Creative */}
      <div className="mb-32 relative overflow-hidden py-12">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-chess-accent/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="flex flex-col mb-12 relative z-10">
          <h2 className="text-sm font-bold tracking-widest uppercase text-chess-accent mb-2">Upcoming Major Event</h2>
          <div className="h-px w-24 bg-gradient-to-r from-chess-accent to-transparent" />
        </div>

        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-20 relative z-10">
          
          <div className="w-full md:w-2/5 aspect-[3/4] relative group">
            <div className="absolute -inset-4 border border-white/10 -translate-x-4 translate-y-4 -z-10 transition-transform group-hover:-translate-x-2 group-hover:translate-y-2" />
            <div className="absolute inset-0 bg-gray-900 border border-white/5 overflow-hidden flex items-center justify-center">
              <img src="/asset/Club_logo_1.png" alt="Queens Tournament 2026 Flyer" className="w-1/2 opacity-20 grayscale" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white/20">
                 <span className="text-6xl mb-4 text-chess-accent">♕</span>
                 <span className="text-xs uppercase tracking-widest text-center px-4">Flyer Coming Soon</span>
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-8">
            <h3 className="text-5xl md:text-6xl font-bold uppercase tracking-tighter leading-none text-white">
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
        </div>
      </div>

      {/* 2026 KNUST Championship Title Match */}
      <div className="mb-32 relative overflow-hidden py-16 border-t border-white/5">
        {/* Background Accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[200px] bg-chess-accent/5 blur-[120px] pointer-events-none" />

        <div className="flex flex-col mb-16 relative z-10">
          <h2 className="text-sm font-bold tracking-widest uppercase text-chess-accent mb-2">The Ultimate Showdown</h2>
          <div className="h-px w-24 bg-gradient-to-r from-chess-accent to-transparent" />
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 relative z-10">
          {/* Champion 1: Luqman */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-6 group"
          >
            <div className="w-56 h-56 rounded-full border-4 border-white/10 overflow-hidden relative group-hover:border-chess-accent transition-all duration-500 shadow-2xl scale-95 group-hover:scale-100">
              <img src="/legends/Luqman_Abubakar.jpeg" alt="Luqman Abubakar" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-4 left-0 right-0 text-center">
                 <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-chess-accent bg-black/40 px-3 py-1 backdrop-blur-sm">Challenger</span>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold uppercase tracking-wider text-white">Luqman Abubakar</h3>
              <p className="text-[10px] uppercase tracking-widest text-gray-500 mt-1">2026 Challengers Champion</p>
            </div>
          </motion.div>

          {/* VS Divider */}
          <div className="flex flex-col items-center gap-2 py-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-7xl md:text-9xl font-black text-white/5 italic select-none tracking-tighter leading-none"
            >
              VS
            </motion.div>
            <div className="w-20 h-1 bg-chess-accent" />
            <p className="text-xs uppercase tracking-[0.4em] font-bold text-chess-accent mt-4 text-center leading-relaxed">
              Battle for the <br/><span className="text-white">2026 University Title</span>
            </p>
          </div>

          {/* Champion 2: Charles */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-6 group"
          >
            <div className="w-56 h-56 rounded-full border-4 border-white/10 overflow-hidden relative group-hover:border-chess-accent transition-all duration-500 shadow-2xl scale-95 group-hover:scale-100">
              <img src="/legends/KCC_Champ.jpeg" alt="Amoani Charles Antwi" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-4 left-0 right-0 text-center">
                 <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-chess-accent bg-black/40 px-3 py-1 backdrop-blur-sm">Defending Champion</span>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold uppercase tracking-wider text-white">Amoani Charles Antwi</h3>
              <p className="text-[10px] uppercase tracking-widest text-gray-500 mt-1">2025 Overall Champion</p>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 text-center max-w-2xl mx-auto px-4"
        >
          <p className="text-xl text-gray-300 leading-relaxed font-light italic">
            "The clash of the titans. The reigning 2025 overall champion faces off against the 2026 challengers champion to decide who truly rules the KNUST chessboard."
          </p>
          <div className="mt-10">
            <div className="inline-block px-8 py-3 border border-chess-accent/30 rounded-none relative group overflow-hidden">
               <div className="absolute inset-0 bg-chess-accent/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
               <span className="relative text-xs uppercase tracking-[0.3em] font-bold text-chess-accent">Coming Soon in the 2026 Season</span>
            </div>
          </div>
        </motion.div>
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
              className={`px-6 py-2 uppercase tracking-wider text-sm font-medium transition-colors ${
                activeTab === tab.id 
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
                className={`relative group cursor-pointer overflow-hidden bg-gray-800 ${idx % 3 === 0 ? 'aspect-square' : 'aspect-[4/3]'} border border-white/10`}
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
