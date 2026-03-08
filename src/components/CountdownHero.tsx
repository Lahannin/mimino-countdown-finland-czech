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
      className="bg-card rounded-2xl p-8 md:p-12 text-center border border-border shadow-sm"
    >
      <p className="text-muted-foreground font-body text-sm uppercase tracking-widest mb-4">
        Countdown to meeting her
      </p>
      <div className="flex justify-center gap-4 md:gap-8">
        {units.map((unit) => (
          <div key={unit.label} className="flex flex-col items-center w-16 md:w-24">
            <span className="text-4xl md:text-7xl font-display font-bold text-foreground tabular-nums" style={{ fontVariantNumeric: 'tabular-nums', letterSpacing: '0.02em' }}>
              {String(unit.value).padStart(2, "0")}
            </span>
            <span className="text-xs md:text-sm text-muted-foreground font-body mt-1 uppercase tracking-wider">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-center">
        <div className="h-1 rounded-full bg-muted overflow-hidden w-48 md:w-64">
          <motion.div
            className="h-full rounded-full bg-primary"
            initial={{ width: 0 }}
            animate={{ width: `${Math.max(5, ((280 - days) / 280) * 100)}%` }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
        </div>
      </div>
      <p className="text-xs text-muted-foreground mt-2 font-body">
        Pregnancy progress
      </p>
    </motion.div>
  );
}
