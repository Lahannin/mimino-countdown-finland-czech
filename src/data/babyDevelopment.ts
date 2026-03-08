// Baby development data by gestational week (weeks 28-40)
export interface WeekData {
  week: number;
  size: string;
  sizeComparison: string;
  sizeEmoji: string;
  weight: string;
  length: string;
  developments: string[];
}

export const weeklyData: WeekData[] = [
  { week: 28, size: "Eggplant", sizeEmoji: "🍆", sizeComparison: "About as big as an eggplant", weight: "~1 kg", length: "~37 cm", developments: ["Can blink her eyes", "Has eyelashes now", "Developing more fat layers", "Brain is growing rapidly"] },
  { week: 29, size: "Butternut squash", sizeEmoji: "🎃", sizeComparison: "Size of a butternut squash", weight: "~1.1 kg", length: "~38 cm", developments: ["Bones are fully developed but still soft", "Muscles and lungs are maturing", "Head is growing to make room for brain", "Can sense light and dark"] },
  { week: 30, size: "Cabbage", sizeEmoji: "🥬", sizeComparison: "About the size of a cabbage", weight: "~1.3 kg", length: "~39 cm", developments: ["Losing the lanugo (fine body hair)", "Bone marrow is making red blood cells", "Baby is getting plumper!", "Strong grip reflex developing"] },
  { week: 31, size: "Coconut", sizeEmoji: "🥥", sizeComparison: "Size of a coconut", weight: "~1.5 kg", length: "~41 cm", developments: ["All five senses are working", "Brain connections forming rapidly", "Can turn head from side to side", "Processing information and tracking light"] },
  { week: 32, size: "Jicama", sizeEmoji: "🫒", sizeComparison: "About as big as a jicama", weight: "~1.7 kg", length: "~42 cm", developments: ["Toenails are visible now", "Practicing breathing movements", "Skin becoming less transparent", "Hair on her head is growing"] },
  { week: 33, size: "Pineapple", sizeEmoji: "🍍", sizeComparison: "Size of a pineapple", weight: "~1.9 kg", length: "~43 cm", developments: ["Bones hardening (except skull)", "Immune system developing", "Pupils can constrict and dilate", "Drinking amniotic fluid and peeing"] },
  { week: 34, size: "Cantaloupe", sizeEmoji: "🍈", sizeComparison: "About as big as a cantaloupe", weight: "~2.1 kg", length: "~44 cm", developments: ["Fingernails reach fingertips", "Central nervous system maturing", "Lungs developing rapidly", "Fat layers filling out her body"] },
  { week: 35, size: "Honeydew melon", sizeEmoji: "🍈", sizeComparison: "Size of a honeydew melon", weight: "~2.4 kg", length: "~46 cm", developments: ["Kidneys fully developed", "Liver can process waste", "Less room to move around", "Most babies are head-down by now"] },
  { week: 36, size: "Romaine lettuce", sizeEmoji: "🥬", sizeComparison: "Length of a head of romaine lettuce", weight: "~2.6 kg", length: "~47 cm", developments: ["Skin is smooth and soft", "Gums are firm and rigid", "Muscles are getting stronger", "Circulation and immune systems are ready"] },
  { week: 37, size: "Swiss chard bunch", sizeEmoji: "🥬", sizeComparison: "Size of a bunch of Swiss chard", weight: "~2.9 kg", length: "~48 cm", developments: ["Considered early term!", "Practicing inhaling and exhaling", "Firm grasp you'll soon feel", "Adding about 15g of fat per day"] },
  { week: 38, size: "Leek", sizeEmoji: "🥒", sizeComparison: "Length of a leek", weight: "~3.1 kg", length: "~49 cm", developments: ["All organs are fully matured", "Tear ducts are developing", "Producing surfactant for breathing", "Meconium accumulating in intestines"] },
  { week: 39, size: "Watermelon", sizeEmoji: "🍉", sizeComparison: "Small watermelon size", weight: "~3.3 kg", length: "~50 cm", developments: ["Full term! Ready when she decides", "Brain is still rapidly developing", "Chest is becoming more prominent", "Outer ear cartilage has firmed up"] },
  { week: 40, size: "Pumpkin", sizeEmoji: "🎃", sizeComparison: "Size of a small pumpkin", weight: "~3.5 kg", length: "~51 cm", developments: ["Due date week!", "Skull bones not yet fused (for birth)", "Ready to meet the world", "Average newborn size achieved"] },
];

export function getWeekData(dueDate: Date, currentDate: Date): WeekData {
  const diffMs = dueDate.getTime() - currentDate.getTime();
  const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
  const weeksLeft = Math.ceil(diffDays / 7);
  const currentWeek = 40 - weeksLeft;
  const clampedWeek = Math.max(28, Math.min(40, currentWeek));
  return weeklyData.find(w => w.week === clampedWeek) || weeklyData[0];
}
