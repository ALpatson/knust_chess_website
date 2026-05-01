import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Join = () => {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    program: '',
    year: '',
    lichess: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const response = await fetch('https://formspree.io/f/mvzloble', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        console.error('Submission failed');
        alert('There was an error submitting your application. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Network error. Please check your connection.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 md:pt-32 pb-20 px-4 max-w-4xl mx-auto overflow-x-hidden">
      <div className="text-center mb-10 md:mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-6xl font-bold uppercase tracking-tight md:tracking-widest mb-4 md:mb-6"
        >
          Join the <span className="text-chess-accent">Elite</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 max-w-xl mx-auto text-sm md:text-lg px-4 leading-relaxed"
        >
          Become a member of the KNUST Chess Club and embark on a journey of strategy, intellect, and championship.
        </motion.p>
      </div>

      <div className="relative w-full">
        {/* Decorative background elements - Contained to prevent overflow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-chess-accent/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-chess-accent/5 rounded-full blur-3xl" />
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-panel p-6 md:p-12 relative z-10"
        >
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit} 
                className="space-y-6 md:space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-[0.2em] font-bold text-chess-accent">Full Name *</label>
                    <input 
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Johnny Edem Agboado"
                      className="w-full bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-chess-accent transition-colors text-white"
                    />
                  </div>

                  {/* WhatsApp */}
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-[0.2em] font-bold text-chess-accent">WhatsApp Number *</label>
                    <input 
                      required
                      type="tel"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      placeholder="024 XXX XXXX"
                      className="w-full bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-chess-accent transition-colors text-white"
                    />
                  </div>

                  {/* Program of Study */}
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-[0.2em] font-bold text-chess-accent">Program of Study *</label>
                    <input 
                      required
                      type="text"
                      name="program"
                      value={formData.program}
                      onChange={handleChange}
                      placeholder="BSc. Computer Science"
                      className="w-full bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-chess-accent transition-colors text-white"
                    />
                  </div>

                  {/* Year/Class */}
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-[0.2em] font-bold text-chess-accent">Year / Class *</label>
                    <select 
                      required
                      name="year"
                      value={formData.year}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-chess-accent transition-colors text-white"
                    >
                      <option value="" className="bg-chess-black">Select Year</option>
                      <option value="1" className="bg-chess-black">Year 1</option>
                      <option value="2" className="bg-chess-black">Year 2</option>
                      <option value="3" className="bg-chess-black">Year 3</option>
                      <option value="4" className="bg-chess-black">Year 4</option>
                      <option value="5" className="bg-chess-black">Year 5</option>
                      <option value="6" className="bg-chess-black">Year 6</option>
                      <option value="Postgrad" className="bg-chess-black">Postgraduate</option>
                    </select>
                  </div>
                </div>

                {/* Lichess Handle */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-[0.2em] font-bold text-chess-accent flex justify-between">
                    Lichess Handle 
                    <span className="text-[10px] text-gray-500 normal-case italic font-normal">Optional</span>
                  </label>
                  <input 
                    type="text"
                    name="lichess"
                    value={formData.lichess}
                    onChange={handleChange}
                    placeholder="e.g. Master_Strategist"
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-chess-accent transition-colors text-white"
                  />
                </div>

                <div className="pt-6">
                  <button 
                    disabled={isLoading}
                    className="w-full relative group overflow-hidden bg-white text-black font-bold uppercase tracking-wider md:tracking-widest py-4 transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-chess-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isLoading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                          Processing...
                        </>
                      ) : (
                        'Submit Membership Application'
                      )}
                    </span>
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-chess-accent/10 rounded-full flex items-center justify-center text-chess-accent">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 6V3"/>
                      <path d="M9 4h6"/>
                      <path d="M12 6c1.66 0 3 1.34 3 3 0 .83-.34 1.58-.88 2.12a2.98 2.98 0 0 0-.62 2.88l.5 2H10l.5-2a2.98 2.98 0 0 0-.62-2.88A3 3 0 0 1 9 9c0-1.66 1.34-3 3-3Z"/>
                      <path d="M8 21h8"/>
                      <path d="M12 16v5"/>
                      <path d="M10 19h4"/>
                    </svg>
                  </div>
                </div>
                <h2 className="text-3xl font-bold uppercase tracking-widest mb-4">Application Received!</h2>
                <p className="text-gray-400 max-w-md mx-auto mb-10">
                  Thank you for applying, {formData.name.split(' ')[0]}. We've received your details and our team will contact you via WhatsApp soon to finalize your membership.
                </p>
                <button 
                  onClick={() => window.location.href = '/'}
                  className="px-8 py-3 border border-chess-accent text-chess-accent uppercase tracking-widest text-sm hover:bg-chess-accent hover:text-black transition-all"
                >
                  Return to Home
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Info section */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/5 bg-white/[0.02] overflow-hidden">
        <div className="space-y-4 text-center p-10 border-b md:border-b-0 md:border-r border-white/5 flex flex-col items-center hover:bg-white/[0.03] transition-colors group">
          <div className="text-chess-accent mb-2 group-hover:scale-110 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          </div>
          <h4 className="font-bold uppercase tracking-widest text-xs text-chess-accent">Community</h4>
          <p className="text-sm text-gray-400 leading-relaxed max-w-[200px]">Join a network of over 100+ passionate chess players at KNUST.</p>
        </div>

        <div className="space-y-4 text-center p-10 border-b md:border-b-0 md:border-r border-white/5 flex flex-col items-center hover:bg-white/[0.03] transition-colors group">
          <div className="text-chess-accent mb-2 group-hover:scale-110 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
              <path d="M12 6h4"/>
              <path d="M12 10h4"/>
              <path d="M12 14h4"/>
              <path d="M7 2v17.5c0 .28.22.5.5.5H20"/>
            </svg>
          </div>
          <h4 className="font-bold uppercase tracking-widest text-xs text-chess-accent">Training</h4>
          <p className="text-sm text-gray-400 leading-relaxed max-w-[200px]">Access exclusive weekly training sessions and study materials.</p>
        </div>

        <div className="space-y-4 text-center p-10 flex flex-col items-center hover:bg-white/[0.03] transition-colors group">
          <div className="text-chess-accent mb-2 group-hover:scale-110 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
              <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
              <path d="M4 22h16"/>
              <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
              <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
              <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
            </svg>
          </div>
          <h4 className="font-bold uppercase tracking-widest text-xs text-chess-accent">Tournaments</h4>
          <p className="text-sm text-gray-400 leading-relaxed max-w-[200px]">Compete in internal club matches and national university games.</p>
        </div>
      </div>
    </div>
  );
};

export default Join;
