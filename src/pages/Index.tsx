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
          className="text-center pb-2"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2, duration: 0.8 }}
            className="text-5xl mb-4"
          >
            👶
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-display tracking-tight leading-tight">
            Ahoj, <span className="italic text-primary">mimino</span>
          </h1>
          <p className="mt-3 text-muted-foreground text-base font-body">
            🇫🇮 Finnish isä & 🇨🇿 Czech maminka — a holka is on the way!
          </p>
        </motion.div>

        {/* Countdown */}
        <CountdownHero days={totalDays} hours={hours} minutes={minutes} seconds={seconds} />

        {/* Weekly size summary */}
        <BabyDevelopmentCard weekData={weekData} />

        {/* Daily baby info */}
        <DailyBabyCard dailyInfo={dailyInfo} />

        {/* Cultural Facts */}
        <div className="grid md:grid-cols-2 gap-4">
          <CulturalFactCard fact={finnish} label="Today from Finland" />
          <CulturalFactCard fact={czech} label="Today from Czechia" />
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center pt-4 pb-10"
        >
          <div className="inline-flex items-center gap-2 bg-card/60 backdrop-blur-sm rounded-full px-5 py-2.5 border border-border/50">
            <span className="text-xs text-muted-foreground font-body">
              22. května 2026 · 🇫🇮 Isä & 🇨🇿 Maminka · Czechia 🏡
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
