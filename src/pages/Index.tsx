import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CountdownHero } from "@/components/CountdownHero";
import { BabyDevelopmentCard } from "@/components/BabyDevelopmentCard";
import { DailyBabyCard } from "@/components/DailyBabyCard";
import { CulturalFactCard } from "@/components/CulturalFactCard";
import { BilingualWordCard } from "@/components/BilingualWordCard";
import { getWeekSummary, getDailyBabyInfo } from "@/data/babyDevelopment";
import { getDailyFacts } from "@/data/culturalFacts";
import { getDailyWord } from "@/data/bilingualWords";


const DUE_DATE = new Date(2026, 4, 22); // May 22, 2026

const floatingAnim = {
  y: [0, -6, 0] as number[],
  rotate: [0, 5, -5, 0] as number[],
};

const floatingTransition = {
  duration: 4,
  repeat: Infinity,
  ease: "easeInOut" as const,
};

const Index = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const weekData = getWeekSummary(DUE_DATE, now);
  const dailyInfo = getDailyBabyInfo(now);
  const { finnish, czech } = getDailyFacts(now);
  const dailyWord = getDailyWord(now);

  const diffMs = DUE_DATE.getTime() - now.getTime();
  const totalDays = Math.max(0, Math.ceil(diffMs / (1000 * 60 * 60 * 24)));
  const hours = Math.max(0, Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const minutes = Math.max(0, Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60)));
  const seconds = Math.max(0, Math.floor((diffMs % (1000 * 60)) / 1000));

  return (
    <div className="min-h-screen">
      <div className="max-w-2xl mx-auto px-5 py-10 md:py-20 space-y-5">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center pb-2 relative"
        >
          {/* Floating decorative elements */}
          <motion.span
            className="absolute -top-2 left-[10%] md:left-[15%] text-xl opacity-40 pointer-events-none hidden md:inline"
            animate={{ y: [0, -10, 0], x: [0, 3, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            ✨
          </motion.span>
          <motion.span
            className="absolute -top-1 right-[12%] md:right-[18%] text-lg opacity-30 pointer-events-none hidden md:inline"
            animate={{ y: [0, -8, 0], x: [0, -4, 0], rotate: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            💕
          </motion.span>

          <h1 className="text-5xl md:text-7xl font-display tracking-tight leading-tight">
            Ahoj,{" "}
            <motion.span
              className="italic text-primary inline-block"
              style={{ textShadow: '0 2px 20px hsl(350 72% 55% / 0.2)' }}
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              mimino
            </motion.span>
          </h1>
          <p className="mt-4 text-muted-foreground text-base md:text-lg font-body">
            🇨🇿 Czech maminka & 🇫🇮 Finnish isä · a holka is on the way!
          </p>
        </motion.div>

        <div className="h-4 md:h-6" />

        {/* Countdown */}
        <CountdownHero days={totalDays} hours={hours} minutes={minutes} seconds={seconds} />

        {/* Weekly size summary */}
        <BabyDevelopmentCard weekData={weekData} />

        {/* Daily baby info */}
        <DailyBabyCard dailyInfo={dailyInfo} />

        {/* Cultural Facts */}
        <div className="grid md:grid-cols-2 gap-4">
          <CulturalFactCard fact={czech} label="Today from Czechia" />
          <CulturalFactCard fact={finnish} label="Today from Finland" />
        </div>

        {/* Bilingual word of the day */}
        <BilingualWordCard word={dailyWord} />

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center pt-4 pb-10"
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-card/60 backdrop-blur-sm rounded-full px-5 py-2.5 border border-border/50"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="text-xs text-muted-foreground font-body">
              22. května 2026 ·{" "}
              <motion.span className="inline-block" animate={floatingAnim} transition={floatingTransition}>🇨🇿</motion.span>
              {" "}Maminka{" "}
              <motion.span
                className="inline-block"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                ❤️
              </motion.span>
              {" "}
              <motion.span className="inline-block" animate={floatingAnim} transition={floatingTransition}>🇫🇮</motion.span>
              {" "}Isä
            </span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
