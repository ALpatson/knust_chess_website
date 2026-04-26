const About = () => {
  return (
    <div className="py-20 px-4 max-w-7xl mx-auto min-h-screen">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-widest mb-4">Our History</h1>
        <p className="text-chess-accent max-w-2xl mx-auto">
          The KNUST Chess Club has a rich tradition of excellence, strategy, and sportsmanship.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-chess-accent leading-relaxed">
          <p>
            Founded with the vision to unite the brightest strategic minds on campus, the KNUST Chess Club 
            has grown into a powerhouse of competitive chess. We believe that chess is more than just a game; 
            it's a discipline that hones critical thinking, patience, and foresight.
          </p>
          <p>
            Over the years, our members have competed at national and international levels, bringing glory 
            to the university. We provide a welcoming yet highly competitive environment for players of all levels, 
            from absolute beginners to seasoned experts.
          </p>
          <div className="pt-6 border-t border-white/10 mt-6">
            <h3 className="text-white font-bold uppercase mb-2">Our Mission</h3>
            <p>To foster a community of intellectuals who approach life with the same calculation and grace as they do the chessboard.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/5 border border-white/10 aspect-square flex items-center justify-center p-6 text-center">
             <div>
               <div className="text-4xl font-bold text-white mb-2">50+</div>
               <div className="text-xs uppercase tracking-wider text-chess-accent">Active Members</div>
             </div>
          </div>
          <div className="bg-white/5 border border-white/10 aspect-square flex items-center justify-center p-6 text-center">
             <div>
               <div className="text-4xl font-bold text-white mb-2">12</div>
               <div className="text-xs uppercase tracking-wider text-chess-accent">Major Titles</div>
             </div>
          </div>
          <div className="bg-white/5 border border-white/10 aspect-square flex items-center justify-center p-6 text-center col-span-2">
             <div>
               <div className="text-4xl font-bold text-white mb-2">2008</div>
               <div className="text-xs uppercase tracking-wider text-chess-accent">Year Founded</div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
