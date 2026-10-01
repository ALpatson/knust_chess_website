import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const chessPieces = [
  { symbol: '♔', name: 'King', delay: 0.1, x: -120, y: -80, scale: 1.2 },
  { symbol: '♕', name: 'Queen', delay: 0, x: 0, y: -40, scale: 1.8 },
  { symbol: '♖', name: 'Rook', delay: 0.25, x: 120, y: -80, scale: 1.1 },
  { symbol: '♗', name: 'Bishop', delay: 0.15, x: -140, y: 60, scale: 1.1 },
  { symbol: '♘', name: 'Knight', delay: 0.2, x: 140, y: 60, scale: 1.2 },
  { symbol: '♙', name: 'Pawn', delay: 0.3, x: 0, y: 110, scale: 1.0 },
];

const ChessSplash = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Automatically hide after 2.8 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          onClick={() => setIsVisible(false)}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#070a0f] text-white cursor-pointer select-none overflow-hidden"
        >
          {/* Animated Background Grid Pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none animate-pulse" />
          
          {/* Glowing Radial Halo */}
          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: [0.8, 1.3, 1], opacity: [0.2, 0.6, 0.4] }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute w-[500px] h-[500px] bg-gradient-to-r from-[#d4af37]/30 via-amber-500/20 to-transparent rounded-full blur-[100px] pointer-events-none" 
          />

          {/* Floating Sparkles & Light Beams */}
          <div className="relative flex items-center justify-center w-72 h-72 mb-6">
            {chessPieces.map((piece, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                animate={{ 
                  opacity: [0, 1, 0.9], 
                  scale: [0, piece.scale * 1.3, piece.scale], 
                  x: piece.x, 
                  y: piece.y,
                  rotate: [i % 2 === 0 ? -20 : 20, 0]
                }}
                transition={{ 
                  duration: 0.9, 
                  delay: piece.delay, 
                  ease: [0.34, 1.56, 0.64, 1] 
                }}
                className="absolute text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-amber-200 via-[#d4af37] to-amber-600 drop-shadow-[0_0_25px_rgba(212,175,55,0.7)]"
              >
                {piece.symbol}
              </motion.div>
            ))}

            {/* Central Burst Ring */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.8, 2.2], opacity: [0.8, 0.4, 0] }}
              transition={{ duration: 1.4, ease: "easeOut" }}
              className="absolute inset-0 rounded-full border-2 border-[#d4af37]"
            />
          </div>

          {/* Title & Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-center z-10 px-4"
          >
            <motion.h1 
              initial={{ letterSpacing: '0.1em' }}
              animate={{ letterSpacing: '0.35em' }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="text-3xl md:text-5xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-300 to-amber-500 drop-shadow-lg"
            >
              KNUST CHESS CLUB
            </motion.h1>
            
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent my-3 mx-auto max-w-xs" 
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="text-xs md:text-sm text-amber-200/80 uppercase tracking-[0.4em] font-medium"
            >
              Mastery in Every Move
            </motion.p>
          </motion.div>

          {/* Tap to skip prompt */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 0.3] }}
            transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
            className="absolute bottom-8 text-[10px] uppercase tracking-[0.3em] text-white/40 font-mono"
          >
            Tap anywhere to enter
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ChessSplash;
