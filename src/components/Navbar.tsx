import { Rocket, Sun, User } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4 md:px-12 bg-background-dark/40 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="size-8 flex items-center justify-center bg-primary rounded-lg">
            <Rocket size={18} className="text-white" />
          </div>
          <div className="text-xl font-bold tracking-tighter">
            CYBER<span className="text-primary">.</span>
          </div>
        </div>
        
        <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-medium text-gray-300">
          <a href="#works" className="hover:text-primary transition-colors">Works</a>
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>
        
        <div className="flex gap-4">
          <button className="flex items-center justify-center rounded-xl h-10 w-10 bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors">
            <Sun size={18} />
          </button>
          <button className="flex items-center justify-center rounded-xl h-10 w-10 bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors">
            <User size={18} />
          </button>
        </div>
      </div>
    </nav>
  );
}
