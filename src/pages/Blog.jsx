import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, ChevronRight, Calendar, User } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "CM Benard Anhwere's Journey",
    author: "KNUST Chess Club",
    date: "May 2026",
    summary: "CM Benard Anhwere's success story did not begin with the conventional stories we are used to in the chess scene. His journey with chess did not start when he was about five...",
    content: [
      "CM Benard Anhwere's success story (spoiler alert) did not begin with the conventional stories we are used to in the chess scene. His journey with chess did not start when he was about five, six or seven years old. Nor did it start he was about eight. His first introduction to chess was at sixteen, when he saw a group of boys intently perusing an 8×8 checkered board with distinct pieces at Presbyterian Boys' Secondary School, Legon.",
      "Today, he holds the Ghana National Chess Championship (2025) title and has represented Ghana in several chess Olympiads. According to him, Representing Ghana at the 44th FIDE Chess Olympiad in India (his first Olympiad) was the most surreal moment of his chess career. He had grown from the sixteen-year-old boy that decided to teach himself chess using the internet to a twenty-six-year-old representing Ghana at such an international stage.",
      "A fun fact about CM Anhwere is that he can teach himself anything. Fueled by his love for languages, he has taught himself to speak French, Spanish and is currently trying to add Mandarin Chinese to the list. Moreover, after studying civil engineering at KNUST, he works as a water resources engineer.",
      "From teaching himself chess at sixteen to becoming the national champion, his next dream is to defeat a grandmaster in an over-the-board classical game."
    ],
    image: null,
    tags: ["Legend", "Inspiration", "National Champion"]
  }
];

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div className="py-20 px-4 max-w-7xl mx-auto min-h-screen relative">
      <div className="text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold uppercase tracking-widest mb-4"
        >
          Club Stories
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-chess-accent max-w-2xl mx-auto"
        >
          Discover the inspiring journeys, achievements, and histories of the minds that shape the chess scene.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="glass-panel overflow-hidden flex flex-col group h-full cursor-pointer hover:border-white/20 transition-all duration-300"
            onClick={() => setSelectedPost(post)}
          >
            {/* Image Section */}
            <div className="h-48 bg-gray-800 relative border-b border-white/10 overflow-hidden">
              {post.image ? (
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white/20 group-hover:text-white/30 transition-colors bg-gradient-to-br from-black/60 to-gray-900/60">
                  <span className="text-5xl mb-2">♔</span>
                </div>
              )}
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col flex-grow relative">
              <div className="flex gap-2 mb-3 flex-wrap">
                {post.tags.map(tag => (
                  <span key={tag} className="text-[10px] uppercase tracking-wider bg-white/5 text-chess-accent px-2 py-1 rounded-full border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>
              
              <h2 className="text-xl font-bold text-white mb-2 line-clamp-2">
                {post.title}
              </h2>
              
              <div className="flex items-center gap-4 text-xs text-white/50 mb-4">
                <span className="flex items-center gap-1"><User size={12} /> {post.author}</span>
                <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
              </div>
              
              <p className="text-gray-400 text-sm mb-6 line-clamp-3 flex-grow">
                {post.summary}
              </p>

              <div className="mt-auto pt-4 border-t border-white/10 flex items-center text-chess-accent text-sm font-medium group-hover:text-white transition-colors">
                Read More <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-panel w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col relative"
            >
              <button 
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white/70 hover:text-white hover:bg-black/80 transition-all z-10"
              >
                <X size={20} />
              </button>

              <div className="overflow-y-auto custom-scrollbar">
                {selectedPost.image ? (
                  <div className="h-64 sm:h-80 w-full bg-gray-900 relative">
                    <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  </div>
                ) : (
                  <div className="h-32 sm:h-48 w-full bg-gradient-to-b from-gray-900 to-black/90 relative flex items-center justify-center">
                    <span className="text-6xl text-white/10 absolute">♔</span>
                  </div>
                )}

                <div className="p-6 sm:p-10 relative -mt-10 sm:-mt-16">
                  <div className="flex gap-2 mb-4 flex-wrap">
                    {selectedPost.tags.map(tag => (
                      <span key={tag} className="text-xs uppercase tracking-wider bg-black/80 text-chess-accent px-3 py-1 rounded-full border border-white/20 backdrop-blur-md">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                    {selectedPost.title}
                  </h1>

                  <div className="flex items-center gap-6 text-sm text-white/60 mb-8 pb-8 border-b border-white/10">
                    <span className="flex items-center gap-2"><User size={16} /> {selectedPost.author}</span>
                    <span className="flex items-center gap-2"><Calendar size={16} /> {selectedPost.date}</span>
                  </div>

                  <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
                    {selectedPost.content.map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Blog;
