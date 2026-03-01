import { motion } from 'motion/react';

export default function About() {
  return (
    <section className="py-32 bg-white/5 relative overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">
            PUSHING THE <br/> <span className="text-primary">BOUNDARIES</span> OF DIGITAL.
          </h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            Founded in the heart of the digital renaissance, Cyber Creative Studio is a collective of designers, developers, and visionaries. We don't just build websites; we create digital legacies that pulsate with life.
          </p>
          
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div>
              <div className="text-3xl font-bold text-white mb-1">150+</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">24</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest">Global Awards</div>
            </div>
          </div>
          
          <button className="neumorphic-btn px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs text-primary">
            Learn Our Process
          </button>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="glass-card rounded-2xl p-8 relative z-10">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCS1gFzAhYF1qxXYYlfummdL3L-3J_koQyL2JfEGepVymle_5Vb8F4NlltnLcM0suMBjNGk87ZrDd82sGXvMSau4KH-5BMJBp62MeAjK6HsHwyy4EZLwCIME-iS8TamDKayS1p1YGhuQGucwHm2DJFY9cExKsTxpcWJqIUS8ddSBV7IAFTYCHFZYUr8mw8zUifYf7wcAP-Gggc_wlwFFOBMcnY52pXP8QHWF5Z64INwUcqd2j3A75n7LzGD1r9XeNpGvD6q_jpErIci" 
              alt="Liquid Metal" 
              className="w-full h-auto rounded-xl"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 blur-3xl rounded-full"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/20 blur-3xl rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
}
