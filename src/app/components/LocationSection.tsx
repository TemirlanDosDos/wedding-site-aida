import { motion } from "motion/react";
import { MapPin, CalendarHeart } from "lucide-react";

export function LocationSection() {
  const daysOfWeek = ["Дс", "Сс", "Ср", "Бс", "Жм", "Сб", "Жс"];
  // August 2026 starts on Saturday (6th day, index 5 if Mon=0)
  // Let's build a simple calendar grid for Aug 2026.
  // 1st is Saturday.
  const emptyDays = Array(5).fill(null);
  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <section className="py-24 px-6 bg-[#f9f7f6]">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Location Info */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-[2rem] p-10 shadow-2xl shadow-[#e3caca]/20 border border-[#f0eaea] text-center"
        >
          <div className="w-16 h-16 bg-[#f9f7f6] rounded-full flex items-center justify-center mx-auto mb-6">
            <MapPin className="w-8 h-8 text-[#2f5f73]" strokeWidth={1.5} />
          </div>
          
          <h2 className="text-3xl font-['Cormorant_Garamond'] text-[#2f5f73] mb-4">
            Өтетін орны
          </h2>
          
          <p className="text-[#557b8a] font-['Montserrat'] mb-6 text-lg">
            Орал қаласы<br />
            Самал көшесі 54а
          </p>

          <div className="text-5xl font-['Pinyon_Script'] text-[#2f5f73] mb-1">
            Жасмин
          </div>
          <div className="text-sm font-['Montserrat'] text-[#88a3af] uppercase tracking-[0.2em] mb-8 font-medium">
            мейрамханасы
          </div>

          <a 
            href="https://go.2gis.com/Qtlel"
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#2f5f73] text-white rounded-full font-['Montserrat'] text-sm uppercase tracking-widest hover:bg-[#1e4151] transition-colors shadow-lg shadow-[#2f5f73]/30"
          >
            Картадан көру
          </a>
        </motion.div>

        {/* Calendar Info */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-[2rem] p-10 shadow-2xl shadow-[#e3caca]/20 border border-[#f0eaea]"
        >
          <div className="flex flex-col items-center mb-8 text-center">
            <div className="w-16 h-16 bg-[#f9f7f6] rounded-full flex items-center justify-center mb-4">
              <CalendarHeart className="w-8 h-8 text-[#e3caca]" strokeWidth={1.5} />
            </div>
            <h2 className="text-3xl font-['Cormorant_Garamond'] text-[#2f5f73]">
              Тамыз 2026
            </h2>
          </div>

          <div className="grid grid-cols-7 gap-y-4 gap-x-2 text-center text-sm font-['Montserrat']">
            {daysOfWeek.map(day => (
              <div key={day} className="text-[#a68c8c] font-medium mb-2">{day}</div>
            ))}
            
            {emptyDays.map((_, idx) => (
              <div key={`empty-${idx}`} />
            ))}
            
            {daysInMonth.map(day => {
              const isEventDay = day === 28;
              return (
                <div 
                  key={day} 
                  className={`
                    flex items-center justify-center w-8 h-8 mx-auto rounded-full
                    ${isEventDay ? 'bg-[#e3caca] text-white shadow-md font-medium scale-110' : 'text-[#557b8a]'}
                  `}
                >
                  {day}
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
