import { motion } from "framer-motion";
import { WeekSummary } from "@/data/babyDevelopment";

interface BabyDevelopmentCardProps {
  weekData: WeekSummary;
}

export function BabyDevelopmentCard({ weekData }: BabyDevelopmentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-sm"
    >
      <div className="flex items-start gap-4">
        <span className="text-5xl md:text-6xl">{weekData.sizeEmoji}</span>
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-display">
            Week {weekData.week}
          </h2>
          <p className="text-muted-foreground font-body mt-1">
            {weekData.sizeComparison}
          </p>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="bg-muted rounded-xl p-4 text-center">
          <p className="text-xs text-muted-foreground uppercase tracking-wider font-body">Weight</p>
          <p className="text-xl font-display font-semibold mt-1">{weekData.weight}</p>
        </div>
        <div className="bg-muted rounded-xl p-4 text-center">
          <p className="text-xs text-muted-foreground uppercase tracking-wider font-body">Length</p>
          <p className="text-xl font-display font-semibold mt-1">{weekData.length}</p>
        </div>
      </div>

      {/* Funny Finnish & Czech comparisons */}
      <div className="mt-5 space-y-3">
        <div className="bg-finn/10 rounded-xl px-4 py-3">
          <p className="font-body text-sm leading-relaxed">{weekData.finnComparison}</p>
        </div>
        <div className="bg-czech/10 rounded-xl px-4 py-3">
          <p className="font-body text-sm leading-relaxed">{weekData.czechComparison}</p>
        </div>
      </div>
    </motion.div>
  );
}
