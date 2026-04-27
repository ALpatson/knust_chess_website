import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const eventGalleries = {
  freshers: [
    { type: 'image', src: '/events/freshers/fresher_champ.jpeg', alt: 'Freshers Champion' },
    { type: 'image', src: '/events/freshers/fresher_g1.jpeg', alt: 'Freshers Match 1' },
    { type: 'image', src: '/events/freshers/fresher_g2.jpeg', alt: 'Freshers Match 2' },
    { type: 'image', src: '/events/freshers/freshers.jpeg', alt: 'Freshers Tournament Group' },
    { type: 'image', src: '/events/freshers/freshers1.jpeg', alt: 'Freshers Tournament Action' },
  ],
  interColleges: [
    { type: 'image', src: '/events/inter_colleges/inter_col.jpeg', alt: 'Inter-Colleges Match' },
    { type: 'image', src: '/events/inter_colleges/inter_col1.jpeg', alt: 'Inter-Colleges Team' },
    { type: 'image', src: '/events/inter_colleges/inter_col2.jpeg', alt: 'Inter-Colleges Finals' },
    { type: 'image', src: '/events/inter_colleges/inter_col3.jpeg', alt: 'Inter-Colleges Focus' },
    { type: 'image', src: '/events/inter_colleges/inter_col4.jpeg', alt: 'Inter-Colleges Strategy' },
    { type: 'image', src: '/events/inter_colleges/inter_col5.jpeg', alt: 'Inter-Colleges Victory' },
  ],
  ladies: [
    { type: 'image', src: '/events/ladies/ladies.jpeg', alt: 'Ladies Tournament Match' },
    { type: 'image', src: '/events/ladies/ladies1.jpeg', alt: 'Ladies Champion' },
    { type: 'image', src: '/events/ladies/ladies2.jpeg', alt: 'Ladies Group' },
  ]
};

const videos = [
  { src: '/videos/fresher_vi.mp4', title: 'Fresher\'s Highlights' },
  { src: '/videos/ladies_games.mp4', title: 'Ladies Games Highlights' },
];

const Events = () => {
  const [activeTab, setActiveTab] = useState('freshers');
  const [selectedImage, setSelectedImage] = useState(null);

  const tabs = [
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
            <div className="absolute inset-0 bg-gray-900 border border-white/5 overflow-hidden">
              <img src="/events/queens_flyer.jpg" alt="Queens Tournament 2026 Flyer" className="w-full h-full object-cover grayscale-0 md:grayscale md:group-hover:grayscale-0 transition-all duration-700 absolute z-10" onError={(e) => e.target.style.display = 'none'} />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white/20">
                 <span className="text-6xl mb-4">♕</span>
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
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                <h3 className="text-sm font-bold uppercase tracking-wider">{video.title}</h3>
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
