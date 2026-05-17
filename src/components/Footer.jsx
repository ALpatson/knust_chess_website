import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#0a0f18] py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img src="/asset/Club_logo.jpeg" alt="KNUST Chess Club Logo" className="h-10 w-10 object-contain bg-white rounded-full p-0.5" onError={(e) => { e.target.style.display = 'none' }} />
              <span className="font-bold text-xl text-chess-accent tracking-wider uppercase">KNUST Chess Club</span>
            </div>
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              The official chess club of the Kwame Nkrumah University of Science and Technology. 2025 GUSA Minor Games Champions.
            </p>
          </div>
          
          {/* Navigation - Quick Links */}
          <div className="col-span-1">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-chess-accent text-sm transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-chess-accent text-sm transition-colors">About Us</Link></li>
              <li><Link to="/legends" className="text-gray-400 hover:text-chess-accent text-sm transition-colors">Legends</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-chess-accent text-sm transition-colors">Blog</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-chess-accent/60">
            © {new Date().getFullYear()} KNUST Chess Club. All rights reserved.
          </p>
          
          <div className="flex items-center justify-center gap-4 text-chess-accent">
            {/* X (Twitter) logo */}
            <a href="https://x.com/knustchess?s=11" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" title="Twitter (X)">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.732-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            {/* Pipe separator */}
            <span className="text-white/20 select-none">|</span>
            {/* Instagram logo */}
            <a href="https://www.instagram.com/knustchess?igsh=OWR2cTJpN2RxMHp1&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" title="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          {/* Pipe separator */}
          <span className="text-white/20 select-none">|</span>
          {/* Mail icon */}
          <a href="mailto:chessclubknust@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" title="Email">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
