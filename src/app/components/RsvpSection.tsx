import { useState } from "react";
import { motion } from "motion/react";
import { Check, X } from "lucide-react";

export function RsvpSection() {
  const [name, setName] = useState("");
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success"
  >("idle");
  const [error, setError] = useState("");

  const handleRsvp = async (attending: boolean) => {
    if (!name.trim()) {
      setError("Атыңызды енгізіңіз");
      return;
    }

    setError("");
    setStatus("submitting");

    // ==========================================
    // НАСТРОЙКИ TELEGRAM БОТА ДЛЯ ПОЛУЧЕНИЯ ДАННЫХ
    // ==========================================
    // 1. Создайте бота в Telegram через @BotFather и скопируйте токен.
    const BOT_TOKEN =
      "8737511047:AAGpyLr_ru9rizO8xJDXiNc3z2mAS01xF_Q";

    // 2. Напишите боту любое сообщение, затем перейдите в @userinfobot (или подобный),
    // чтобы узнать свой CHAT_ID (это цифры, например: 123456789)
    const CHAT_ID = "562876469";

    const textMessage = `
💌 <b>Жаңа жауап (Қыз Ұзату - Аида):</b>
👤 <b>Аты-жөні:</b> ${name}
❓ <b>Келеді ме:</b> ${attending ? "✅ Иә, келеді" : "❌ Жоқ, келе алмайды"}
    `;

    try {
      await fetch(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text: textMessage,
            parse_mode: "HTML",
          }),
        },
      );

      setStatus("success");
    } catch (err) {
      setError(
        "Қате кетті. Интернетті тексеріп, қайта көріңіз.",
      );
      setStatus("idle");
    }
  };

  return (
    <section className="py-24 px-6 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-xl mx-auto text-center"
      >
        <h2 className="text-4xl font-['Cormorant_Garamond'] text-[#2f5f73] mb-8 italic">
          Қатысуыңызды растаңыз
        </h2>

        <p className="text-[#a68c8c] font-['Montserrat'] mb-10">
          Тойға келетініңізді немесе келе алмайтыныңызды алдын
          ала хабарлауыңызды сұраймыз
        </p>

        {status === "success" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#f9f7f6] p-8 rounded-3xl border border-[#e3caca]"
          >
            <div className="w-16 h-16 bg-[#e3caca]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-[#2f5f73]" />
            </div>
            <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#2f5f73] mb-2">
              Рахмет!
            </h3>
            <p className="text-[#557b8a] font-['Montserrat']">
              Сіздің жауабыңыз қабылданды.
            </p>
          </motion.div>
        ) : (
          <div className="space-y-6">
            <div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Аты-жөніңіз"
                className="w-full px-6 py-4 rounded-2xl bg-[#f9f7f6] border-2 border-transparent focus:border-[#e3caca] focus:outline-none transition-colors font-['Montserrat'] text-center text-lg text-[#2f5f73] placeholder:text-[#a68c8c]/60"
                disabled={status === "submitting"}
              />
              {error && (
                <p className="text-red-400 text-sm mt-2 font-['Montserrat']">
                  {error}
                </p>
              )}
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <button
                onClick={() => handleRsvp(true)}
                disabled={status === "submitting"}
                className="flex items-center justify-center gap-2 w-full py-4 px-6 rounded-2xl bg-[#2f5f73] text-white font-['Montserrat'] hover:bg-[#1e4151] transition-all active:scale-95 disabled:opacity-70 shadow-lg shadow-[#2f5f73]/20"
              >
                <Check className="w-5 h-5" />
                <span>Иә, келемін</span>
              </button>

              <button
                onClick={() => handleRsvp(false)}
                disabled={status === "submitting"}
                className="flex items-center justify-center gap-2 w-full py-4 px-6 rounded-2xl bg-[#e3caca] text-[#2f5f73] font-['Montserrat'] hover:bg-[#d4b9b9] transition-all active:scale-95 disabled:opacity-70 shadow-lg shadow-[#e3caca]/20"
              >
                <X className="w-5 h-5" />
                <span>Келе алмаймын</span>
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
}