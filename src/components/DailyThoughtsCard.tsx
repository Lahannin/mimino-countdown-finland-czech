import { motion } from "framer-motion";
import { Shuffle } from "lucide-react";
import { CulturalFact } from "@/data/culturalFacts";

interface DailyThoughtsCardProps {
  czechFact: CulturalFact;
  finnishFact: CulturalFact;
  onShuffle: () => void;
}

export function DailyThoughtsCard({ czechFact, finnishFact, onShuffle }: DailyThoughtsCardProps) {
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
            💭
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-body font-medium">Daily thoughts</p>
            <p className="text-sm font-body text-muted-foreground">From her two homelands</p>
          </div>
        </div>
        <button
          onClick={onShuffle}
          className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground/50 hover:text-muted-foreground hover:bg-foreground/[0.04] transition-colors"
          aria-label="Shuffle facts"
        >
          <Shuffle className="w-4 h-4" />
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-3">
        <div
          className="rounded-2xl p-4 border border-border/50"
          style={{ background: 'hsl(0 0% 0% / 0.02)' }}
        >
          <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground font-body font-medium mb-2">🇨🇿 Czechia</p>
          <p className="font-body text-foreground/90 leading-relaxed text-[14px]">
            {czechFact.emoji} {czechFact.fact}
          </p>
        </div>

        <div
          className="rounded-2xl p-4 border border-border/50"
          style={{ background: 'hsl(0 0% 0% / 0.02)' }}
        >
          <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground font-body font-medium mb-2">🇫🇮 Finland</p>
          <p className="font-body text-foreground/90 leading-relaxed text-[14px]">
            {finnishFact.emoji} {finnishFact.fact}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
