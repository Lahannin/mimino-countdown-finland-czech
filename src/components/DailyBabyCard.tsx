import { motion } from "framer-motion";
import { DailyBabyInfo } from "@/data/babyDevelopment";

interface DailyBabyCardProps {
  dailyInfo: DailyBabyInfo;
}

export function DailyBabyCard({ dailyInfo }: DailyBabyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="bg-peach/30 rounded-2xl p-5 md:p-6 border border-border shadow-sm"
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="text-3xl">{dailyInfo.sizeEmoji}</span>
        <h3 className="text-xl font-display font-semibold">{dailyInfo.dayTitle}</h3>
      </div>
      <p className="font-body text-foreground leading-relaxed">
        {dailyInfo.funFact}
      </p>
      <div className="mt-3 bg-background/60 rounded-xl px-4 py-3">
        <p className="text-sm font-body text-muted-foreground">
          <span className="font-semibold text-foreground">💡 Tip:</span> {dailyInfo.tip}
        </p>
      </div>
    </motion.div>
  );
}
