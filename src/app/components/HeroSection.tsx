import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative h-[100dvh] flex flex-col items-center justify-center overflow-hidden bg-[#f9f7f6]">
      {/* Dynamic Background Image */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 25, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1738025277281-582526f674c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcGluayUyMGZsb3JhbCUyMGFyY2glMjB3ZWRkaW5nfGVufDF8fHx8MTc3Nzc4ODAzNXww&ixlib=rb-4.1.0&q=80&w=1080')",
        }}
      />
      
      {/* Soft gradient overlay for text readability */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-white/70 via-white/50 to-[#f9f7f6] backdrop-blur-[1px]" />

      {/* Center Arch Content */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        className="relative z-10 w-[85%] max-w-sm mx-auto flex flex-col items-center justify-center py-16 px-8 border-t-[80px] border-b-[20px] rounded-t-full rounded-b-full border-x-[12px] border-white/60 bg-white/40 backdrop-blur-sm shadow-2xl shadow-[#e3caca]/30"
      >
        <div className="absolute top-[20px] text-[#d4b9b9] opacity-90">
          <span className="text-3xl">✧</span>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 1.5, type: "spring", bounce: 0.4 }}
          className="text-center w-full"
        >
          <h2 className="text-sm md:text-base text-[#6b8b9a] font-['Montserrat'] tracking-[0.4em] uppercase mb-8">
            Шақыру билеті
          </h2>
          
          <h1 className="text-7xl md:text-8xl text-[#2f5f73] font-['Pinyon_Script'] mb-6 tracking-tight drop-shadow-sm">
            Аида
          </h1>
          
          <div className="w-16 h-[1px] bg-[#d4b9b9] mx-auto mb-6"></div>
          
          <h3 className="text-3xl md:text-4xl text-[#4a778b] font-['Cormorant_Garamond'] italic">
            Қыз Ұзату
          </h3>
          
          <div className="mt-10 px-6 py-3 border border-[#d4b9b9]/50 rounded-full inline-block bg-white/50">
            <p className="text-[#88a3af] font-['Montserrat'] text-xs tracking-[0.2em] uppercase font-medium">
              28 Тамыз 2026<br>
              Уақыты: 19:00</br>
            </p>
          </div>
        </motion.div>

        <div className="absolute bottom-[20px] text-[#d4b9b9] opacity-90">
          <span className="text-3xl">✧</span>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 z-20 flex flex-col items-center text-[#557b8a]"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] mb-3 font-['Montserrat'] font-medium">
          Төмен айналдырыңыз
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 opacity-70" strokeWidth={1.5} />
        </motion.div>
      </motion.div>

    </section>
  );
}
