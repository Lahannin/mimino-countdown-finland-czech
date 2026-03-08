import { motion } from "framer-motion";
import { DailyBabyInfo } from "@/data/babyDevelopment";

interface DailyBabyCardProps {
  dailyInfo: DailyBabyInfo;
}

export function DailyBabyCard({ dailyInfo }: DailyBabyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="px-2 py-4"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="text-2xl">
          {dailyInfo.sizeEmoji}
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-body font-medium">Today's update</p>
          <h3 className="text-lg font-display font-semibold">{dailyInfo.dayTitle}</h3>
        </div>
      </div>
      <p className="font-body text-foreground/90 leading-relaxed text-[15px]">
        {dailyInfo.funFact}
      </p>
      <p className="mt-3 text-sm font-body text-muted-foreground">
        💡 <span className="font-semibold text-foreground/80">Tip:</span> {dailyInfo.tip}
      </p>
    </motion.div>
  );
}