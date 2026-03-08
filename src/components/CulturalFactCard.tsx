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
      className={`rounded-2xl p-5 md:p-6 border border-border shadow-sm ${
        isFinland ? "bg-finn/10" : "bg-czech/10"
      }`}
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="text-2xl">{fact.emoji}</span>
        <h3 className="text-sm font-body font-semibold uppercase tracking-wider text-muted-foreground">
          {label}
        </h3>
      </div>
      <p className="font-body text-foreground leading-relaxed">
        {fact.emoji} {fact.fact}
      </p>
    </motion.div>
  );
}
