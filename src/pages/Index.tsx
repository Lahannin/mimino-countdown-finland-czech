import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Shuffle } from "lucide-react";
import { CountdownHero } from "@/components/CountdownHero";
import { BabyDevelopmentCard } from "@/components/BabyDevelopmentCard";
import { DailyBabyCard } from "@/components/DailyBabyCard";
import { DailyThoughtsCard } from "@/components/DailyThoughtsCard";
import { BilingualWordCard } from "@/components/BilingualWordCard";
import { getWeekSummary, getDailyBabyInfo } from "@/data/babyDevelopment";
import { getDailyFacts, getRandomFact } from "@/data/culturalFacts";
import { getDailyWord, getRandomWord } from "@/data/bilingualWords";


const DUE_DATE = new Date(2026, 4, 22); // May 22, 2026

const Index = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const weekData = getWeekSummary(DUE_DATE, now);
  const dailyInfo = getDailyBabyInfo(now);
  const defaultFacts = getDailyFacts(now);
  const defaultWord = getDailyWord(now);

  const [czechFact, setCzechFact] = useState(defaultFacts.czech);
  const [finnishFact, setFinnishFact] = useState(defaultFacts.finnish);
  const [word, setWord] = useState(defaultWord);

  const shuffleFacts = useCallback(() => {
    setCzechFact(getRandomFact("czech"));
    setFinnishFact(getRandomFact("finland"));
  }, []);
  const shuffleWord = useCallback(() => setWord(getRandomWord()), []);

  const diffMs = DUE_DATE.getTime() - now.getTime();
  const totalDays = Math.max(0, Math.ceil(diffMs / (1000 * 60 * 60 * 24)));
  const hours = Math.max(0, Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const minutes = Math.max(0, Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60)));
  const seconds = Math.max(0, Math.floor((diffMs % (1000 * 60)) / 1000));

  return (
    <div className="min-h-screen overflow-x-hidden">
      <div className="max-w-2xl mx-auto px-5 py-12 md:py-24 space-y-8 md:space-y-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center relative px-6 pt-4 pb-14 md:pt-6 md:pb-20"
        >

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
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
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
        <div className="space-y-3">
          <div className="flex items-center justify-between px-1">
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-body font-semibold">Daily thoughts</p>
            <button
              onClick={shuffleFacts}
              className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.15em] text-muted-foreground/50 hover:text-muted-foreground font-body font-medium transition-colors"
            >
              <Shuffle className="w-3 h-3" />
              Shuffle
            </button>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <CulturalFactCard fact={czechFact} label="From Czechia" />
            <CulturalFactCard fact={finnishFact} label="From Finland" />
          </div>
        </div>

        {/* Bilingual word of the day */}
        <BilingualWordCard word={word} onShuffle={shuffleWord} />

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center pt-4 pb-10"
        >
          <div className="inline-flex items-center gap-2 bg-card/60 backdrop-blur-sm rounded-full px-5 py-2.5 border border-border/50">
            <span className="text-xs text-muted-foreground font-body">
              22. května 2026 · 🇨🇿 Maminka ❤️ 🇫🇮 Isi
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
