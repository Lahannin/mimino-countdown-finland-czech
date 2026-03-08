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
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: isFinland ? 0.6 : 0.5 }}
      whileHover={{ y: -3, boxShadow: `0 12px 36px -8px ${isFinland ? 'hsl(215 60% 50% / 0.15)' : 'hsl(355 70% 50% / 0.15)'}` }}
      className="rounded-3xl p-5 md:p-6 shadow-soft relative overflow-hidden"
      style={{
        background: isFinland
          ? 'linear-gradient(145deg, hsl(215 60% 50% / 0.06), hsl(0 0% 100% / 0.8))'
          : 'linear-gradient(145deg, hsl(355 70% 50% / 0.06), hsl(0 0% 100% / 0.8))',
        border: `1px solid ${isFinland ? 'hsl(215 60% 50% / 0.15)' : 'hsl(355 70% 50% / 0.15)'}`,
      }}
    >
      {/* Accent dot */}
      <motion.div
        className="absolute -top-4 -right-4 w-20 h-20 rounded-full opacity-[0.1] blur-xl"
        style={{ background: isFinland ? 'hsl(215 60% 50%)' : 'hsl(355 70% 50%)' }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className={`w-8 h-8 rounded-lg flex items-center justify-center text-lg mb-3 ${
          isFinland ? "bg-finn/15" : "bg-czech/15"
        }`}
        whileHover={{ scale: 1.15, rotate: 5 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        {isFinland ? "🇫🇮" : "🇨🇿"}
      </motion.div>
      <h3 className="text-[10px] font-body font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-2">
        {label}
      </h3>
      <p className="font-body text-foreground/90 leading-relaxed text-[15px]">
        {fact.emoji} {fact.fact}
      </p>
    </motion.div>
  );
}
