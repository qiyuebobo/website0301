import { Mail, Phone, Download, Link as LinkIcon, Share2, Camera, Code, MapPin, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section className="py-32 px-4 flex flex-col items-center justify-center relative" id="contact">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card-orange w-full max-w-4xl rounded-[2rem] p-8 md:p-16 flex flex-col items-center text-center shadow-2xl relative z-10"
      >
        <div className="mb-8">
          <div className="size-20 bg-primary/20 rounded-full flex items-center justify-center mb-6 mx-auto border border-primary/30">
            <MessageSquare className="text-primary" size={32} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Let's build the future.</h2>
          <p className="text-gray-400 text-lg max-w-lg mx-auto">
            Have a visionary project in mind? We're ready to translate your digital dreams into high-performance reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-12">
          <a href="mailto:hello@cyberstudio.io" className="flex flex-col items-center p-6 rounded-2xl bg-white/5 border border-white/10 group hover:border-primary/50 transition-colors">
            <Mail className="text-primary mb-3" size={24} />
            <p className="text-gray-500 text-sm uppercase tracking-widest font-semibold mb-1">Email</p>
            <span className="text-white text-lg font-medium group-hover:text-primary transition-colors">hello@cyberstudio.io</span>
          </a>
          
          <a href="tel:+19860206662" className="flex flex-col items-center p-6 rounded-2xl bg-white/5 border border-white/10 group hover:border-primary/50 transition-colors">
            <Phone className="text-primary mb-3" size={24} />
            <p className="text-gray-500 text-sm uppercase tracking-widest font-semibold mb-1">Phone</p>
            <span className="text-white text-lg font-medium group-hover:text-primary transition-colors">+1 986 020 6662</span>
          </a>
        </div>

        <div className="mb-12">
          <button className="neumorphic-btn px-10 py-4 rounded-full flex items-center gap-3 text-primary font-bold text-lg border border-primary/20">
            <Download size={20} />
            Download CV
          </button>
        </div>

        <div className="flex gap-6 mt-4">
          {[LinkIcon, Share2, Camera, Code].map((Icon, i) => (
            <div key={i} className="group relative">
              <button className="size-12 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-gray-300 hover:bg-primary hover:text-white hover:scale-110 transition-all cursor-pointer">
                <Icon size={20} />
              </button>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="mt-12 text-gray-500 text-sm flex items-center gap-2 z-10">
        <MapPin size={16} />
        Shenzhen University Science Park, China
      </div>
    </section>
  );
}
