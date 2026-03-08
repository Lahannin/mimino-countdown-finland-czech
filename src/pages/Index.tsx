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
    <div className="min-h-screen overflow-x-hidden">
      <div className="max-w-2xl mx-auto px-5 py-10 md:py-20 space-y-5">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center relative px-6 pt-4 pb-14 md:pt-6 md:pb-20"
        >
          {/* Decorative blobs */}
          <motion.div
            className="absolute -top-16 -left-16 w-48 h-48 rounded-full opacity-15 pointer-events-none"
            style={{ background: 'radial-gradient(circle, hsl(350 72% 55%), transparent)' }}
            animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-12 -right-12 w-40 h-40 rounded-full opacity-10 pointer-events-none"
            style={{ background: 'radial-gradient(circle, hsl(165 35% 55%), transparent)' }}
            animate={{ y: [0, 8, 0], x: [0, -4, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Floating sparkles */}
          <motion.span
            className="absolute top-6 left-[10%] text-2xl opacity-30 pointer-events-none"
            animate={{ y: [0, -12, 0], x: [0, 4, 0], rotate: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            ✨
          </motion.span>
          <motion.span
            className="absolute top-8 right-[12%] text-xl opacity-25 pointer-events-none"
            animate={{ y: [0, -8, 0], x: [0, -5, 0], rotate: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            💕
          </motion.span>
          <motion.span
            className="absolute bottom-8 left-[20%] text-lg opacity-20 pointer-events-none"
            animate={{ y: [0, -6, 0], rotate: [0, 8, -8, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          >
            🌸
          </motion.span>

          <div className="relative z-10">
            <motion.p
              className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-body mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Arriving May 2026
            </motion.p>

            <h1 className="text-6xl md:text-8xl font-display tracking-tight leading-none">
              Ahoj,{" "}
              <motion.span
                className="italic inline-block"
                style={{
                  backgroundImage: 'linear-gradient(90deg, hsl(350 72% 55%), hsl(330 65% 58%), hsl(300 55% 60%), hsl(280 50% 62%), hsl(350 72% 55%))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  backgroundSize: '200% 100%',
                  textShadow: 'none',
                }}
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'], scale: [1, 1.03, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                mimino
              </motion.span>
            </h1>

            <motion.p
              className="mt-4 text-xl md:text-3xl font-display font-semibold"
              style={{
                backgroundImage: 'linear-gradient(90deg, hsl(340 75% 55%), hsl(320 65% 58%), hsl(290 55% 60%), hsl(260 50% 62%), hsl(340 75% 55%))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Our holka is on her way! ✨
            </motion.p>
          </div>
        </motion.div>

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
