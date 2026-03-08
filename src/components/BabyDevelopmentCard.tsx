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
      className="rounded-3xl p-6 md:p-8 shadow-soft overflow-hidden relative"
      style={{ background: 'hsl(0 0% 100% / 0.55)', backdropFilter: 'blur(16px)', border: '1px solid hsl(0 0% 0% / 0.04)' }}
    >
      <div className="flex items-center gap-4">
        <div
          className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center text-4xl md:text-5xl"
          style={{ background: 'hsl(0 0% 0% / 0.03)' }}
        >
          {weekData.sizeEmoji}
        </div>
        <div className="flex-1">
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-body font-medium mb-0.5">This week</p>
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-gradient">
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

      <div className="mt-5 grid grid-cols-2 gap-3">
        <div
          className="rounded-2xl p-4 text-center"
          style={{ background: 'hsl(0 0% 0% / 0.03)' }}
        >
          <p className="text-[10px] text-muted-foreground uppercase tracking-[0.15em] font-body font-medium">Weight</p>
          <p className="text-2xl font-display font-bold mt-1">{weekData.weight}</p>
        </div>
        <div
          className="rounded-2xl p-4 text-center"
          style={{ background: 'hsl(0 0% 0% / 0.03)' }}
        >
          <p className="text-[10px] text-muted-foreground uppercase tracking-[0.15em] font-body font-medium">Length</p>
          <p className="text-2xl font-display font-bold mt-1">{weekData.length}</p>
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <div className="rounded-2xl px-4 py-3 border border-border/50" style={{ background: 'hsl(0 0% 0% / 0.02)' }}>
          <p className="font-body text-sm leading-relaxed">{weekData.czechComparison}</p>
        </div>
        <div className="rounded-2xl px-4 py-3 border border-border/50" style={{ background: 'hsl(0 0% 0% / 0.02)' }}>
          <p className="font-body text-sm leading-relaxed">{weekData.finnComparison}</p>
        </div>
      </div>
    </motion.div>
  );
}
