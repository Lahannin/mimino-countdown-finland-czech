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
      whileHover={{ y: -2, boxShadow: '0 12px 40px -8px hsl(350 72% 55% / 0.12)' }}
      className="rounded-3xl p-6 md:p-7 shadow-soft border border-primary/10 overflow-hidden relative"
      style={{ background: 'linear-gradient(135deg, hsl(350 72% 55% / 0.08), hsl(15 80% 85% / 0.35), hsl(0 0% 100% / 0.7))' }}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-xl bg-card/80 flex items-center justify-center text-2xl shadow-sm">
          {dailyInfo.sizeEmoji}
        </div>
        </motion.div>
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-body font-medium">Today's update</p>
          <h3 className="text-lg font-display font-semibold">{dailyInfo.dayTitle}</h3>
        </div>
      </div>
      <p className="font-body text-foreground/90 leading-relaxed text-[15px]">
        {dailyInfo.funFact}
      </p>
      <motion.div
        className="mt-4 bg-card/60 backdrop-blur-sm rounded-2xl px-4 py-3 border border-border/50"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        whileHover={{ scale: 1.01 }}
      >
        <p className="text-sm font-body text-muted-foreground">
          <motion.span
            className="inline-block mr-1"
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          >
            💡
          </motion.span>
          <span className="font-semibold text-foreground">Tip:</span> {dailyInfo.tip}
        </p>
      </motion.div>
    </motion.div>
  );
}
