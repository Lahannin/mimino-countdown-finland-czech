import { motion } from "framer-motion";
import { CulturalFact } from "@/data/culturalFacts";

interface CulturalFactCardProps {
  fact: CulturalFact;
  label: string;
}

export function CulturalFactCard({ fact, label }: CulturalFactCardProps) {
  const isFinland = fact.country === "finland";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: isFinland ? 0.1 : 0 }}
      className="rounded-3xl p-5 md:p-6 shadow-soft relative overflow-hidden"
      style={{
        background: 'hsl(0 0% 100% / 0.65)',
        backdropFilter: 'blur(16px)',
        border: '1px solid hsl(0 0% 100% / 0.8)',
      }}
    >
      {/* Accent dot */}
      <div
        className="absolute -top-4 -right-4 w-16 h-16 rounded-full opacity-[0.03] blur-xl pointer-events-none"
        style={{ background: isFinland ? 'hsl(215 60% 50%)' : 'hsl(355 70% 50%)' }}
      />

      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center text-lg mb-3"
        style={{ background: 'hsl(0 0% 0% / 0.03)' }}
      >
        {isFinland ? "🇫🇮" : "🇨🇿"}
      </div>
      <h3 className="text-[10px] font-body font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-2">
        {label}
      </h3>
      <p className="font-body text-foreground/90 leading-relaxed text-[15px]">
        {fact.emoji} {fact.fact}
      </p>
    </motion.div>
  );
}
