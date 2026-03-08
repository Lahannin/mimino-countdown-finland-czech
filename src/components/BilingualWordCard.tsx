import { motion } from "framer-motion";
import { BilingualWord } from "@/data/bilingualWords";

interface BilingualWordCardProps {
  word: BilingualWord;
}

export function BilingualWordCard({ word }: BilingualWordCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.55 }}
      className="rounded-3xl p-6 md:p-7 shadow-soft overflow-hidden relative"
      style={{ background: 'linear-gradient(145deg, hsl(220 55% 58% / 0.07), hsl(0 0% 100% / 0.8), hsl(350 72% 55% / 0.06))', border: '1px solid hsl(220 55% 58% / 0.12)' }}
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-2xl">
          {word.emoji}
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-body font-medium">Word of the day</p>
          <p className="text-sm font-body text-muted-foreground">{word.english}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {/* Czech */}
        <div className="bg-czech/12 rounded-2xl p-4 border border-czech/15 text-center">
          <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground font-body font-medium mb-1">🇨🇿 Čeština</p>
          <p className="text-xl md:text-2xl font-display font-bold">{word.czech}</p>
          {word.pronunciation_cz && (
            <p className="text-xs text-muted-foreground font-body mt-1 italic">/{word.pronunciation_cz}/</p>
          )}
        </div>

        {/* Finnish */}
        <div className="bg-finn/12 rounded-2xl p-4 border border-finn/15 text-center">
          <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground font-body font-medium mb-1">🇫🇮 Suomi</p>
          <p className="text-xl md:text-2xl font-display font-bold">{word.finnish}</p>
          {word.pronunciation_fi && (
            <p className="text-xs text-muted-foreground font-body mt-1 italic">/{word.pronunciation_fi}/</p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
