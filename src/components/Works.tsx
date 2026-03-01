import { motion } from 'motion/react';

const projects = [
  {
    title: "NEURAL INTERFACE",
    category: "UI/UX • 3D Design",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAaE-HQRAQydn4hFnxzZQ9uYXFjm_PrVQe7LMcQRJalOOYxY3FaPhWJinOiigSgzHbZcDBMv9foz8K2hSDZ0Nq4Cw8N1vJyjlcUcepc95SjDLyFRAUTR4QMrPk3jP2kv3frXPN4hjBwTbah60PAc19x-caNb_PtfBudUNZvkISaHo_dAVwO8Jab0UwxW1VX_HoOf9M6mD4LkIgzkp1SlTQoHjVHXf4kyPk0sUjmyCq0eHwdGFxf9K3x0PX_YBma9z-iJy3tLYBtWjLs"
  },
  {
    title: "LIQUID ARCHITECTURE",
    category: "Metaverse • VR",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJh1a-c54XSsN65E3A7hhN5CYJgDgISoVcefUucILRy9ylVWIrQWVIYk_o8ft51_23V3R5Px2ZM11gnTpHVcL-PBnFHCFthMYsNc7N3hdUq2dMdFA_8sor3JMjhkmTLwivYW4GtdFC0TWR9Uni0KWVs3osYwczXIdLAZlfo2sAUcoGfRXe5M4BXOWUTM5W-8ERP3U5QDvkMNy7ApEGBe6ONGYtXMkvTGPfoKtTy1_b6LDAu1TU6Ig--Svly5s_hxIXkn6a6gfuvn_v"
  },
  {
    title: "CYBER TYPE",
    category: "Typography • Branding",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgl2REAt8isycVi6Q4ZiM-Xbq3aeVoFxJpK7vUQE-inKFNZDrfvyw8py_dqnKDdj1Gf007DjdITTX1sfEJUnGaQANJH7_wv37T5JzNEanO6l75s5CTK22TbX7ChAgC0VLo8vsaxZdDIe6BcfpNB82lP5EB8FgBKFgdeSweS9JrJoN7EmmiaAA4pN2UR9Fu9b1dw9hizjY25Jq0YJ3lMj-FCBkRc7MZp1hXMyYUUBAQ8-ivKQqNT1wKDU_GkEXFOJT0XsD7kwrXm4Xl"
  }
];

export default function Works() {
  return (
    <section className="py-32 px-4 max-w-7xl mx-auto" id="works">
      <div className="mb-16">
        <h2 className="text-3xl font-bold tracking-tight mb-2">FEATURED WORKS</h2>
        <div className="h-1 w-20 bg-primary rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="glass-card group cursor-pointer overflow-hidden rounded-2xl p-4"
          >
            <div className="aspect-square bg-white/5 rounded-xl mb-6 overflow-hidden relative">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-xs font-bold uppercase tracking-widest bg-black/80 text-white px-4 py-2 rounded-full">
                  View Case Study
                </span>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-sm text-gray-500 uppercase tracking-widest">{project.category}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
