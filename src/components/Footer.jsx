const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#0a0f18] py-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
           <img src="/asset/Club_logo.jpeg" alt="KNUST Chess Club Logo" className="h-8 w-8 object-contain rounded-full" onError={(e) => { e.target.style.display = 'none' }} />
           <span className="font-semibold text-chess-accent">KNUST Chess Club</span>
        </div>
        <p className="text-sm text-chess-accent/60">
          © {new Date().getFullYear()} KNUST Chess Club. All rights reserved.
        </p>
        <div className="flex space-x-6 text-sm text-chess-accent">
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="https://www.instagram.com/knustchess?igsh=OWR2cTJpN2RxMHp1&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">Lichess</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
