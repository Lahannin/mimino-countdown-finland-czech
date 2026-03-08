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
        background: 'hsl(0 0% 100% / 0.55)',
        backdropFilter: 'blur(16px)',
        border: '1px solid hsl(0 0% 0% / 0.04)',
      }}
    >

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
