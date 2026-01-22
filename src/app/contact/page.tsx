"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute top-20 right-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />

        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold tracking-tighter text-white mb-6">
              Let's build the <span className="text-primary">impossible</span>.
            </h1>
            <p className="text-lg text-white/50 mb-12">
              Estamos aceptando nuevos proyectos para Q1 2026. Cuéntanos sobre tu visión y te ayudaremos a escalarla.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-white/5 border border-white/10">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Email</h3>
                  <p className="text-white/50">hola@huup.com.mx</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-white/5 border border-white/10">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Studio</h3>
                  <p className="text-white/50">Ciudad de México, MX.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/70">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/70">Company</label>
                  <input 
                    type="text" 
                    placeholder="Huup Inc."
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white/70">Email</label>
                <input 
                  type="email" 
                  placeholder="john@company.com"
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white/70">Budget Range (USD)</label>
                <select className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all appearance-none">
                  <option>$5k - $10k (MVP)</option>
                  <option>$10k - $25k (Full Product)</option>
                  <option>$25k - $50k (Ecosystem)</option>
                  <option>$50k+ (Enterprise)</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white/70">Project Details</label>
                <textarea 
                  rows={4}
                  placeholder="Cuéntanos sobre el problema que quieres resolver..."
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none"
                />
              </div>

              <button className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-4 rounded-lg transition-all transform hover:scale-[1.02]">
                Send Application
              </button>
            </form>
          </motion.div>

        </div>
      </section>
      
      <Footer />
    </main>
  );
}