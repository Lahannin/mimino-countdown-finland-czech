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
      transition={{ duration: 0.6, delay: isFinland ? 0.6 : 0.8 }}
      className={`glass rounded-3xl p-5 md:p-6 shadow-soft border ${
        isFinland ? "border-finn/15" : "border-czech/15"
      }`}
    >
      <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-lg mb-3 ${
        isFinland ? "bg-finn/10" : "bg-czech/10"
      }`}>
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
