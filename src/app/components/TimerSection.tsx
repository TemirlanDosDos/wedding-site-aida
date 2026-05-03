import { useState, useEffect } from "react";
import { motion } from "motion/react";

export function TimerSection() {
  const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const targetDate = new Date("2026-08-28T18:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        d: Math.floor(difference / (1000 * 60 * 60 * 24)),
        h: Math.floor((difference / (1000 * 60 * 60)) % 24),
        m: Math.floor((difference / 1000 / 60) % 60),
        s: Math.floor((difference / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { label: "Күн", value: timeLeft.d },
    { label: "Сағат", value: timeLeft.h },
    { label: "Минут", value: timeLeft.m },
    { label: "Секунд", value: timeLeft.s },
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-4xl font-['Cormorant_Garamond'] text-[#2f5f73] mb-12 italic">
          Ұзату уақытына қалды
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {timeUnits.map((unit, idx) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-[#faf5f5] rounded-3xl p-6 shadow-xl shadow-[#e3caca]/20 border border-[#f0eaea] flex flex-col items-center justify-center"
            >
              <span className="text-4xl md:text-5xl font-['Montserrat'] text-[#2f5f73] font-light mb-2">
                {unit.value.toString().padStart(2, '0')}
              </span>
              <span className="text-sm uppercase tracking-widest text-[#a68c8c] font-medium">
                {unit.label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
