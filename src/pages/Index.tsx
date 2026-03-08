import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CountdownHero } from "@/components/CountdownHero";
import { BabyDevelopmentCard } from "@/components/BabyDevelopmentCard";
import { DailyBabyCard } from "@/components/DailyBabyCard";
import { CulturalFactCard } from "@/components/CulturalFactCard";
import { getWeekSummary, getDailyBabyInfo } from "@/data/babyDevelopment";
import { getDailyFacts } from "@/data/culturalFacts";

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

  const diffMs = DUE_DATE.getTime() - now.getTime();
  const totalDays = Math.max(0, Math.ceil(diffMs / (1000 * 60 * 60 * 24)));
  const hours = Math.max(0, Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const minutes = Math.max(0, Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60)));
  const seconds = Math.max(0, Math.floor((diffMs % (1000 * 60)) / 1000));

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 py-8 md:py-16 space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-display tracking-tight">
            Ahoj, <span className="italic text-primary">mimino</span> 👶
          </h1>
          <p className="mt-3 text-muted-foreground text-lg font-body">
            🇫🇮 Finnish isä & 🇨🇿 Czech maminka — a holka is on the way!
          </p>
        </motion.div>

        {/* Countdown */}
        <CountdownHero days={totalDays} hours={hours} minutes={minutes} seconds={seconds} />

        {/* Weekly size summary */}
        <BabyDevelopmentCard weekData={weekData} />

        {/* Daily baby info — changes every day */}
        <DailyBabyCard dailyInfo={dailyInfo} />

        {/* Cultural Facts — change every day */}
        <div className="grid md:grid-cols-2 gap-4">
          <CulturalFactCard fact={finnish} label="Today from Finland" />
          <CulturalFactCard fact={czech} label="Today from Czechia" />
        </div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center text-sm text-muted-foreground font-body pb-8"
        >
          Due date: 22. května 2026 · 🇫🇮 Isä & 🇨🇿 Maminka · Living in Czechia 🏡
        </motion.p>
      </div>
    </div>
  );
};

export default Index;
