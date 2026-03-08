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
      className="rounded-3xl p-6 md:p-8 shadow-soft overflow-hidden relative"
      style={{ background: 'linear-gradient(145deg, hsl(165 35% 55% / 0.08), hsl(0 0% 100% / 0.8), hsl(350 72% 55% / 0.05))', border: '1px solid hsl(165 35% 55% / 0.12)' }}
    >
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-foreground/[0.04] flex items-center justify-center text-4xl md:text-5xl">
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
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="bg-foreground/[0.03] rounded-2xl p-4 text-center">
          <p className="text-[10px] text-muted-foreground uppercase tracking-[0.15em] font-body font-medium">Weight</p>
          <p className="text-2xl font-display font-bold mt-1">{weekData.weight}</p>
        </div>
        <div className="bg-foreground/[0.03] rounded-2xl p-4 text-center">
          <p className="text-[10px] text-muted-foreground uppercase tracking-[0.15em] font-body font-medium">Length</p>
          <p className="text-2xl font-display font-bold mt-1">{weekData.length}</p>
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-czech/8 rounded-2xl px-4 py-3 border border-czech/10"
        >
          <p className="font-body text-sm leading-relaxed">{weekData.czechComparison}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-finn/8 rounded-2xl px-4 py-3 border border-finn/10"
        >
          <p className="font-body text-sm leading-relaxed">{weekData.finnComparison}</p>
        </motion.div>
      </div>
    </motion.div>
  );
}
