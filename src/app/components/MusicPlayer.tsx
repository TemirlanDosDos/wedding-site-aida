import { motion } from "motion/react";
import { Music, VolumeX } from "lucide-react";

interface MusicPlayerProps {
  isPlaying: boolean;
  onToggle: () => void;
}

export function MusicPlayer({ isPlaying, onToggle }: MusicPlayerProps) {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      onClick={onToggle}
      className={`fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-500 ${
        isPlaying 
          ? 'bg-[#2f5f73] text-white shadow-[#2f5f73]/40' 
          : 'bg-white text-[#2f5f73] border border-[#e3caca] shadow-[#e3caca]/40'
      }`}
    >
      <motion.div
        animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      >
        {isPlaying ? <Music className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
      </motion.div>
      
      {/* Decorative pulse when playing */}
      {isPlaying && (
        <span className="absolute -inset-1 rounded-full border border-[#2f5f73] animate-ping opacity-30 pointer-events-none" style={{ animationDuration: '3s' }}></span>
      )}
    </motion.button>
  );
}
