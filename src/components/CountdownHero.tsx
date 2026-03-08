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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="rounded-3xl p-8 md:p-12 text-center shadow-soft overflow-hidden relative"
      style={{
        background: 'hsl(0 0% 100% / 0.6)',
        backdropFilter: 'blur(16px)',
        border: '1px solid hsl(0 0% 0% / 0.06)',
      }}
    >
      {/* Subtle accent */}
      <div
        className="absolute -top-14 -right-14 w-36 h-36 rounded-full opacity-[0.03] blur-2xl pointer-events-none"
        style={{ background: 'hsl(350 72% 55%)' }}
      />

      <p className="text-muted-foreground font-body text-xs uppercase tracking-[0.2em] mb-6 relative z-10">
        Countdown to meeting her
      </p>
      <div className="flex justify-center gap-3 md:gap-5 relative z-10">
        {units.map((unit, i) => (
          <motion.div
            key={unit.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex flex-col items-center"
          >
            <div
              className="rounded-2xl w-16 h-20 md:w-24 md:h-28 flex items-center justify-center"
              style={{
                background: 'hsl(0 0% 100% / 0.5)',
                border: '1px solid hsl(0 0% 0% / 0.05)',
                boxShadow: '0 2px 8px hsl(0 0% 0% / 0.04)',
              }}
            >
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
      <div className="mt-8 flex justify-center relative z-10">
        <div className="w-48 md:w-72">
          <div className="flex justify-between text-[10px] text-muted-foreground font-body mb-1.5">
            <span>Week 1</span>
            <span>Week 40</span>
          </div>
          <div className="h-2.5 rounded-full bg-foreground/[0.08] overflow-hidden border border-foreground/[0.06]">
            <motion.div
              className="h-full rounded-full"
              style={{ background: 'linear-gradient(90deg, hsl(280 50% 68%), hsl(330 65% 65%))' }}
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
