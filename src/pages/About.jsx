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
            and nurtured top-tier talent, including national stars like <strong>Kwabena Adu-Poku, Bernard Anhwere, Maud Benson</strong>, who continue to dominate the national chess scene. 
            Most recently, we solidified our legacy by emerging as the <strong>Overall Champions at the 2nd Minor GUSA Games (2025)</strong>.
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
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          <div className="bg-white/5 border border-white/10 aspect-square flex items-center justify-center p-6 text-center hover:bg-white/10 transition-colors">
             <div>
               <div className="text-4xl font-bold text-white mb-2">1st</div>
               <div className="text-xs uppercase tracking-wider text-chess-accent">GUSA Minor Games ('25)</div>
             </div>
          </div>
          <div className="bg-white/5 border border-white/10 aspect-square flex items-center justify-center p-6 text-center hover:bg-white/10 transition-colors">
             <div>
               <div className="text-4xl font-bold text-white mb-2">1st</div>
               <div className="text-xs uppercase tracking-wider text-chess-accent">Tertiary Champions ('22)</div>
             </div>
          </div>
          <div className="bg-white/5 border border-white/10 aspect-square flex items-center justify-center p-6 text-center hover:bg-white/10 transition-colors col-span-2 md:col-span-1">
             <div>
               <div className="text-4xl font-bold text-white mb-2">100+</div>
               <div className="text-xs uppercase tracking-wider text-chess-accent">Active Players</div>
             </div>
          </div>
          <div className="bg-white/5 border border-white/10 flex items-center justify-center p-6 text-center col-span-2 md:col-span-3 hover:bg-white/10 transition-colors">
             <div className="w-full">
               <div className="text-sm uppercase tracking-wider text-white mb-4 border-b border-white/10 pb-2">Tertiary Chess Championship Record</div>
               <div className="flex justify-around text-chess-accent mt-4">
                 <div className="text-center group">
                   <div className="font-bold text-white text-2xl mb-1 group-hover:scale-110 transition-transform">1st</div>
                   <div className="text-xs uppercase tracking-widest text-white/50">2025</div>
                 </div>
                 <div className="text-center group">
                   <div className="font-bold text-white text-2xl mb-1 group-hover:scale-110 transition-transform">2nd</div>
                   <div className="text-xs uppercase tracking-widest text-white/50">2024</div>
                 </div>
                 <div className="text-center group">
                   <div className="font-bold text-white text-2xl mb-1 group-hover:scale-110 transition-transform">3rd</div>
                   <div className="text-xs uppercase tracking-widest text-white/50">2023</div>
                 </div>
                 <div className="text-center group">
                   <div className="font-bold text-white text-2xl mb-1 group-hover:scale-110 transition-transform">1st</div>
                   <div className="text-xs uppercase tracking-widest text-white/50">2022</div>
                 </div>
               </div>
             </div>
          </div>
        </motion.div>
      </div>

      {/* Our Journey Section */}
      <div className="max-w-5xl mx-auto mt-32 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest mb-4">Our Journey</h2>
          <div className="w-24 h-1 bg-chess-accent mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300 flex flex-col group"
          >
            <div className="text-chess-accent text-6xl font-bold opacity-30 mb-6 group-hover:opacity-100 transition-opacity">01</div>
            <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-wider">The Early Days</h3>
            <span className="text-chess-accent font-bold tracking-widest text-xs uppercase block mb-6">2017 & Restructuring</span>
            <p className="text-white/70 leading-relaxed flex-grow text-sm">
              Initially operating as a joint Chess & Scrabble Club, the group faced significant structural and resource challenges that hindered serious chess development. A major turning point came when the two sports were separated. A dedicated executive board was established through a detailed selection process, replacing the previous single-president structure and laying a strong foundation for a focused chess community.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300 flex flex-col group"
          >
            <div className="text-chess-accent text-6xl font-bold opacity-30 mb-6 group-hover:opacity-100 transition-opacity">02</div>
            <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-wider">The Rebirth</h3>
            <span className="text-chess-accent font-bold tracking-widest text-xs uppercase block mb-6">National Recognition</span>
            <p className="text-white/70 leading-relaxed flex-grow text-sm">
              The biggest milestone was successfully re-establishing the chess club as an official sports club under the KNUST Sports Directorate. Supported by a chess enthusiast Sports Director, the club quickly secured vital resources—growing from a mere 3 chess sets for the entire university to a well-equipped hub. This rebirth brought recognition from the wider Ghana Chess Association, allowing the club to host prestigious events like the Kumasi Chess Classics and bilateral university games.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300 flex flex-col group"
          >
            <div className="text-chess-accent text-6xl font-bold opacity-30 mb-6 group-hover:opacity-100 transition-opacity">03</div>
            <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-wider">The Modern Era</h3>
            <span className="text-chess-accent font-bold tracking-widest text-xs uppercase block mb-6">Our Lasting Legacy</span>
            <p className="text-white/70 leading-relaxed flex-grow text-sm">
              Today, what was once a small gathering of enthusiasts has evolved into arguably the biggest and most active university chess club in the country. With structured weekly training sessions, active alumni mentorship, and the integration of online platforms, the club has built a vibrant, competitive community. Over the years, this dedication has proudly produced two national champions and one women’s national champion, alongside numerous players who have gone on to represent the country internationally.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
