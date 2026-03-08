import { motion } from "framer-motion";

interface CountdownHeroProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountdownHero({ days, hours, minutes, seconds }: CountdownHeroProps) {
  const units = [
    { label: "days", value: days },
    { label: "hours", value: hours },
    { label: "min", value: minutes },
    { label: "sec", value: seconds },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="glass rounded-3xl p-8 md:p-12 text-center shadow-elevated"
    >
      <p className="text-muted-foreground font-body text-xs uppercase tracking-[0.2em] mb-6">
        Countdown to meeting her
      </p>
      <div className="flex justify-center gap-3 md:gap-5">
        {units.map((unit, i) => (
          <motion.div
            key={unit.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.1 }}
            className="flex flex-col items-center"
          >
            <div className="bg-foreground/[0.04] rounded-2xl w-16 h-20 md:w-24 md:h-28 flex items-center justify-center">
              <span
                className="text-4xl md:text-6xl font-display font-bold text-foreground"
                style={{ fontVariantNumeric: 'tabular-nums' }}
              >
                {String(unit.value).padStart(2, "0")}
              </span>
            </div>
            <span className="text-[10px] md:text-xs text-muted-foreground font-body mt-2 uppercase tracking-[0.15em] font-medium">
              {unit.label}
            </span>
          </motion.div>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <div className="w-48 md:w-72">
          <div className="flex justify-between text-[10px] text-muted-foreground font-body mb-1.5">
            <span>Week 1</span>
            <span>Week 40</span>
          </div>
          <div className="h-1.5 rounded-full bg-foreground/[0.06] overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ background: 'linear-gradient(90deg, hsl(var(--secondary)), hsl(var(--primary)))' }}
              initial={{ width: 0 }}
              animate={{ width: `${Math.max(5, ((280 - days) / 280) * 100)}%` }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
