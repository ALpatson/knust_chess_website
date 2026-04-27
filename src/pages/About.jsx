import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="py-20 px-4 max-w-7xl mx-auto min-h-screen">
      <div className="text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold uppercase tracking-widest mb-4"
        >
          Our Legacy
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-chess-accent max-w-2xl mx-auto"
        >
          The KNUST Chess Club has a rich tradition of excellence, strategy, and sportsmanship.
        </motion.p>
      </div>
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6 text-chess-accent leading-relaxed"
        >
          <p>
            Founded with the vision to unite the brightest strategic minds on campus, the KNUST Chess Club 
            has grown into a powerhouse of competitive chess in Ghana. We believe that chess is more than just a game; 
            it's a discipline that hones critical thinking, patience, and foresight.
          </p>
          <p>
            Our club is renowned for producing some of the strongest players for the nation. We have consistently trained 
            and nurtured top-tier talent, including national stars like <strong>Maud Benson</strong>, who continue to dominate the national chess scene.
          </p>
          <div className="pt-6 border-t border-white/10 mt-6">
            <h3 className="text-white font-bold uppercase mb-2">Our Mission</h3>
            <p>To foster a community of intellectuals who approach life with the same calculation and grace as they do the chessboard.</p>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4"
        >
          <div className="bg-white/5 border border-white/10 aspect-square flex items-center justify-center p-6 text-center hover:bg-white/10 transition-colors">
             <div>
               <div className="text-4xl font-bold text-white mb-2">100+</div>
               <div className="text-xs uppercase tracking-wider text-chess-accent">Active Players</div>
             </div>
          </div>
          <div className="bg-white/5 border border-white/10 aspect-square flex items-center justify-center p-6 text-center hover:bg-white/10 transition-colors">
             <div>
               <div className="text-4xl font-bold text-white mb-2">1st</div>
               <div className="text-xs uppercase tracking-wider text-chess-accent">Tertiary Champions ('22)</div>
             </div>
          </div>
          <div className="bg-white/5 border border-white/10 flex items-center justify-center p-6 text-center col-span-2 hover:bg-white/10 transition-colors">
             <div className="w-full">
               <div className="text-sm uppercase tracking-wider text-white mb-4 border-b border-white/10 pb-2">Tertiary Chess Championship Record</div>
               <div className="flex justify-around text-chess-accent mt-4">
                 <div className="text-center group">
                   <div className="font-bold text-white text-2xl mb-1 group-hover:scale-110 transition-transform">1st</div>
                   <div className="text-xs uppercase tracking-widest text-white/50">2022</div>
                 </div>
                 <div className="text-center group">
                   <div className="font-bold text-white text-2xl mb-1 group-hover:scale-110 transition-transform">3rd</div>
                   <div className="text-xs uppercase tracking-widest text-white/50">2023</div>
                 </div>
                 <div className="text-center group">
                   <div className="font-bold text-white text-2xl mb-1 group-hover:scale-110 transition-transform">2nd</div>
                   <div className="text-xs uppercase tracking-widest text-white/50">2024</div>
                 </div>
               </div>
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
