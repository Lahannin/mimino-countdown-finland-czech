import { motion } from "framer-motion";
import { WeekSummary } from "@/data/babyDevelopment";

interface BabyDevelopmentCardProps {
  weekData: WeekSummary;
}

export function BabyDevelopmentCard({ weekData }: BabyDevelopmentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="px-2 py-4"
    >
      <div className="flex items-center gap-4">
        <div className="text-4xl md:text-5xl">
          {weekData.sizeEmoji}
        </div>
        <div className="flex-1">
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-body font-medium mb-0.5">This week</p>
          <h2 className="text-2xl md:text-3xl font-display font-semibold">
            Week {weekData.week}
          </h2>
          <p className="text-muted-foreground font-body text-sm mt-0.5">
            {weekData.sizeComparison}
          </p>
          <p className="text-muted-foreground/70 font-body text-xs mt-1 italic">
            🇨🇿 {weekData.sizeCzech} · 🇫🇮 {weekData.sizeFinnish}
          </p>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-6 text-center">
        <div>
          <p className="text-[10px] text-muted-foreground uppercase tracking-[0.15em] font-body font-medium">Weight</p>
          <p className="text-2xl font-display font-bold mt-1">{weekData.weight}</p>
        </div>
        <div>
          <p className="text-[10px] text-muted-foreground uppercase tracking-[0.15em] font-body font-medium">Length</p>
          <p className="text-2xl font-display font-bold mt-1">{weekData.length}</p>
        </div>
      </div>

      <div className="mt-5 space-y-2 text-sm font-body text-muted-foreground leading-relaxed">
        <p>{weekData.czechComparison}</p>
        <p>{weekData.finnComparison}</p>
      </div>
    </motion.div>
  );
}