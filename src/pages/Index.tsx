import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CountdownHero } from "@/components/CountdownHero";
import { BabyDevelopmentCard } from "@/components/BabyDevelopmentCard";
import { CulturalFactCard } from "@/components/CulturalFactCard";
import { getWeekData } from "@/data/babyDevelopment";
import { getDailyFacts } from "@/data/culturalFacts";

const DUE_DATE = new Date(2026, 4, 22); // May 22, 2026

const Index = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const weekData = getWeekData(DUE_DATE, now);
  const { finnish, czech } = getDailyFacts(DUE_DATE, now);

  const diffMs = DUE_DATE.getTime() - now.getTime();
  const totalDays = Math.max(0, Math.ceil(diffMs / (1000 * 60 * 60 * 24)));
  const hours = Math.max(0, Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const minutes = Math.max(0, Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60)));
  const seconds = Math.max(0, Math.floor((diffMs % (1000 * 60)) / 1000));

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 py-8 md:py-16 space-y-8">
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
            A Finnish-Czech baby on the way!
          </p>
        </motion.div>

        {/* Countdown */}
        <CountdownHero days={totalDays} hours={hours} minutes={minutes} seconds={seconds} />

        {/* Baby Development */}
        <BabyDevelopmentCard weekData={weekData} />

        {/* Cultural Facts */}
        <div className="grid md:grid-cols-2 gap-4">
          <CulturalFactCard fact={finnish} label="From Finland" />
          <CulturalFactCard fact={czech} label="From Czechia" />
        </div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center text-sm text-muted-foreground font-body pb-8"
        >
          Due date: May 22, 2026 · 🇫🇮 Isä & 🇨🇿 Maminka
        </motion.p>
      </div>
    </div>
  );
};

export default Index;
