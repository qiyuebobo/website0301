import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden" id="home">
      <div className="absolute top-1/4 left-10 md:left-20 w-32 h-32 md:w-64 md:h-64 opacity-60 sculpture-float" style={{ animationDelay: '-2s' }}>
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFAtkoq8irgqVv9FfPLqDqap0FAbFRn_w6xiwN8BqYq54V9TNzBjFhDR2P-1yfctD5qwIzEzzBs2xlk1x3KzN9SAQ5jh0N-l2VbXfmxPRtAVJzrhkwisqaByxZGkBV-hPwbAdYgvA048LskqqGcPokLMRuitquZaN-3Xmqt0iF0gAC2bMp_ZSN5VIHBluDTukkh1UmU1Xb3_y_1LIP6EBB-JjFZXUd_rY9xKJ2-yaWpnx3T19E8OY4b35JwzENJV77zkod3N4Tb04v" 
          alt="Iridescent chrome fluid shapes" 
          className="w-full h-full object-contain filter drop-shadow-2xl"
          referrerPolicy="no-referrer"
        />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="glass-card max-w-4xl w-full p-12 md:p-24 rounded-2xl text-center relative z-10"
      >
        <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tighter leading-none">
          CYBER <br/> CREATIVE <br/> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">STUDIO</span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto mb-10 font-light leading-relaxed">
          Crafting high-fidelity digital experiences at the intersection of art and technology.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a href="#works" className="neumorphic-btn px-10 py-4 rounded-xl font-bold uppercase tracking-widest text-sm text-primary inline-flex justify-center items-center">
            View Projects
          </a>
          <a href="#contact" className="px-10 py-4 rounded-xl font-bold uppercase tracking-widest text-sm border border-white/10 hover:bg-white/5 transition-all inline-flex justify-center items-center">
            Get in Touch
          </a>
        </div>
      </motion.div>

      <div className="absolute bottom-1/4 right-10 md:right-20 w-32 h-32 md:w-64 md:h-64 opacity-60 sculpture-float">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCI64IS5IArUNSjfhh8psfc5CCVbCsgHxbkw0DT3S9ScdfXzvsIvqHBs8gZSLGJja2XudgV_rRftoBqq4C0x8TdJLeY0OkstTukkcAf5CJAohnVJAedjh-0Xgp306a03ZrIqnu5-I0jQsBtakTW9EN5jXt658aQhy81WqUPcWdyMXgxC9jjgszAimBlcqTW1Bh-c8OsGLKUf06hw-adFhrDgiU5p3mWuYe0inWEIccL7MrYHlznG5nn83BptQX6IJ9OomKt2fTacioO" 
          alt="Glass sculpture with neon glow" 
          className="w-full h-full object-contain filter drop-shadow-2xl"
          referrerPolicy="no-referrer"
        />
      </div>
    </section>
  );
}
