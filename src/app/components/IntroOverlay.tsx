import { motion } from "motion/react";
import { MailOpen } from "lucide-react";

interface IntroOverlayProps {
  onEnter: () => void;
}

export function IntroOverlay({ onEnter }: IntroOverlayProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#f9f7f6]">
      {/* Background texture */}
      <div 
        className="absolute inset-0 opacity-40 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1766713655634-22fb109f28a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0JTIwcGluayUyMHNpbGslMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc3Nzc4ODAzOXww&ixlib=rb-4.1.0&q=80&w=1080')" }}
      />
      
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center justify-center text-center p-10 bg-white/75 backdrop-blur-md rounded-[2.5rem] border border-[#e3caca]/50 shadow-2xl max-w-sm w-[90%]"
      >
        <div className="w-12 h-12 rounded-full bg-[#f9f7f6] flex items-center justify-center mb-6 shadow-inner">
          <span className="text-[#d4b9b9] text-2xl">✧</span>
        </div>

        <h1 className="text-6xl font-['Pinyon_Script'] text-[#2f5f73] mb-4">
          Аида
        </h1>
        <p className="text-2xl font-['Cormorant_Garamond'] text-[#557b8a] mb-10 italic">
          Қыз Ұзату
        </p>
        
        <button 
          onClick={onEnter}
          className="group relative flex items-center justify-center gap-3 w-full py-4 bg-gradient-to-r from-[#b38888] to-[#d4b9b9] text-white rounded-full font-['Montserrat'] uppercase tracking-widest text-sm transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#e3caca]/50 active:scale-95 overflow-hidden"
        >
          <MailOpen className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform relative z-10" />
          <span className="relative z-10">Шақыруды ашу</span>
          
          {/* Shimmer effect */}
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-[shimmer_1.5s_infinite] skew-x-12" />
        </button>
      </motion.div>
    </div>
  );
}
