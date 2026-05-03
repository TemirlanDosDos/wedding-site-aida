import { motion } from "motion/react";

export function InvitationSection() {
  return (
    <section className="py-24 px-6 relative bg-[#f9f7f6]">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="max-w-xl mx-auto text-center"
      >
        <div className="relative border-y-2 border-[#e3caca] py-12 px-6">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#f9f7f6] px-4">
            <span className="text-3xl text-[#e3caca]">✧</span>
          </div>
          
          <h2 className="text-3xl font-['Cormorant_Garamond'] text-[#2f5f73] mb-8 font-medium">
            Құрметті қонақтар!
          </h2>
          
          <p className="text-lg md:text-xl font-['Montserrat'] text-[#557b8a] leading-loose">
            Сіздерді Аида қызымыздың<br />
            ұзату тойына арналған<br />
            ақ дастарханымыздың<br />
            қадірлі қонағы болуға шақырамыз!
          </p>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-[#f9f7f6] px-4">
            <span className="text-3xl text-[#e3caca]">✧</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
