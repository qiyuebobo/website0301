import { Home, LayoutGrid, MessageSquare, Settings } from 'lucide-react';

export default function FloatingNav() {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-background-dark/80 backdrop-blur-xl border border-primary/30 rounded-full px-6 py-3 flex gap-8 items-center z-50 shadow-2xl">
      <a href="#home" className="flex items-center gap-2 text-gray-400 hover:text-white cursor-pointer transition-colors">
        <Home size={20} />
        <span className="text-sm font-medium hidden md:inline">Home</span>
      </a>
      <a href="#works" className="flex items-center gap-2 text-gray-400 hover:text-white cursor-pointer transition-colors">
        <LayoutGrid size={20} />
        <span className="text-sm font-medium hidden md:inline">Projects</span>
      </a>
      <a href="#contact" className="flex items-center gap-2 text-primary">
        <MessageSquare size={20} />
        <span className="text-sm font-medium hidden md:inline">Contact</span>
      </a>
      <div className="w-px h-4 bg-primary/30"></div>
      <button className="flex items-center gap-2 text-gray-400 hover:text-white cursor-pointer transition-colors">
        <Settings size={20} />
      </button>
    </div>
  );
}
