import { motion } from "framer-motion";
import { WeekSummary, DailyBabyInfo } from "@/data/babyDevelopment";

interface BabyDevelopmentCardProps {
  weekData: WeekSummary;
  dailyInfo: DailyBabyInfo;
}

export function BabyDevelopmentCard({ weekData, dailyInfo }: BabyDevelopmentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="rounded-3xl p-6 md:p-8 shadow-soft overflow-hidden relative"
      style={{ background: 'linear-gradient(145deg, hsl(280 50% 62% / 0.04), hsl(0 0% 100% / 0.7), hsl(330 65% 58% / 0.03))', backdropFilter: 'blur(16px)', border: '1px solid hsl(0 0% 0% / 0.06)' }}
    >
      {/* Week summary */}
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

      <div className="mt-4 space-y-1.5 text-sm font-body text-muted-foreground leading-relaxed">
        <p>{weekData.czechComparison}</p>
        <p>{weekData.finnComparison}</p>
      </div>

      {/* Divider */}
      <div className="my-6 border-t border-border/40" />

      {/* Daily update */}
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