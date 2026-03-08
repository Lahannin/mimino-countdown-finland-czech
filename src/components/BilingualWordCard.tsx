import { motion } from "framer-motion";
import { Shuffle } from "lucide-react";
import { BilingualWord } from "@/data/bilingualWords";

interface BilingualWordCardProps {
  word: BilingualWord;
  onShuffle?: () => void;
}

export function BilingualWordCard({ word, onShuffle }: BilingualWordCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="rounded-3xl p-6 md:p-7 shadow-soft overflow-hidden relative"
      style={{ background: 'hsl(0 0% 100% / 0.55)', backdropFilter: 'blur(16px)', border: '1px solid hsl(0 0% 0% / 0.04)' }}
    >
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-2xl"
            style={{ background: 'hsl(0 0% 0% / 0.03)' }}
          >
            {word.emoji}
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-body font-medium">Word of the day</p>
            <p className="text-sm font-body text-muted-foreground">{word.english}</p>
          </div>
        </div>
        {onShuffle && (
          <button
            onClick={onShuffle}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground/50 hover:text-muted-foreground hover:bg-foreground/[0.04] transition-colors"
            aria-label="Show another word"
          >
            <Shuffle className="w-4 h-4" />
          </button>
        )}
      </div>

      <div className="grid grid-cols-2 gap-3">
        {/* Czech */}
        <div
          className="rounded-2xl p-4 border border-border/50 text-center"
          style={{ background: 'hsl(0 0% 0% / 0.02)' }}
        >
          <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground font-body font-medium mb-1">🇨🇿 Čeština</p>
          <p className="text-xl md:text-2xl font-display font-bold text-gradient">{word.czech}</p>
          {word.pronunciation_cz && (
            <p className="text-xs text-muted-foreground font-body mt-1 italic">/{word.pronunciation_cz}/</p>
          )}
        </div>

        {/* Finnish */}
        <div
          className="rounded-2xl p-4 border border-border/50 text-center"
          style={{ background: 'hsl(0 0% 0% / 0.02)' }}
        >
          <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground font-body font-medium mb-1">🇫🇮 Suomi</p>
          <p className="text-xl md:text-2xl font-display font-bold text-gradient">{word.finnish}</p>
          {word.pronunciation_fi && (
            <p className="text-xs text-muted-foreground font-body mt-1 italic">/{word.pronunciation_fi}/</p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
