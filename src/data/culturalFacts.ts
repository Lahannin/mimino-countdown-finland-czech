export interface CulturalFact {
  country: "finland" | "czech";
  emoji: string;
  fact: string;
}

export const culturalFacts: CulturalFact[] = [
  // Finnish facts
  { country: "finland", emoji: "🇫🇮", fact: "Every baby born in Finland gets a maternity box from the government — a cardboard box filled with clothes, sheets, and toys. The box itself doubles as a baby's first bed!" },
  { country: "finland", emoji: "🧖", fact: "Finnish babies sometimes take their first sauna within days of being born. In the old days, saunas were even used as birthing rooms!" },
  { country: "finland", emoji: "🌲", fact: "Finland has more trees per person than any other European country — about 72 billion trees. Your baby will grow up with endless forests to explore." },
  { country: "finland", emoji: "🎅", fact: "Santa Claus officially lives in Korvatunturi, Finland. Your baby will grow up in the homeland of joulupukki!" },
  { country: "finland", emoji: "❄️", fact: "Finnish babies nap outside in the cold, even in winter. It's believed the fresh, cold air helps them sleep better and stay healthier." },
  { country: "finland", emoji: "🫐", fact: "Finland has 'everyman's rights' (jokamiehenoikeus) — your baby can pick berries and mushrooms anywhere in the wild!" },
  { country: "finland", emoji: "📚", fact: "Finland consistently ranks among the best education systems in the world. Kids don't start school until age 7!" },
  { country: "finland", emoji: "🌊", fact: "Finland has 188,000 lakes. Your baby will never be far from water!" },
  { country: "finland", emoji: "☀️", fact: "In Finnish Lapland, the sun doesn't set for 73 days in summer. Midnight sun playtime!" },
  { country: "finland", emoji: "🦌", fact: "There are about 200,000 reindeer in Finland — almost as many as people in Tampere!" },
  { country: "finland", emoji: "🎶", fact: "Finland has more heavy metal bands per capita than any other country. Baby's first headbang?" },
  { country: "finland", emoji: "🤫", fact: "Finns love comfortable silence. It's totally normal. Your baby will learn that quiet is golden." },

  // Czech facts
  { country: "czech", emoji: "🇨🇿", fact: "Czech parents traditionally choose a name from the 'name day' calendar (svátek). Every day of the year has an assigned name!" },
  { country: "czech", emoji: "🏰", fact: "The Czech Republic has more castles per square kilometer than any country in the world — over 2,000! So many to explore!" },
  { country: "czech", emoji: "🧸", fact: "The Czech Republic is the birthplace of the word 'robot' — coined by Karel Čapek in 1920. Your baby's country invented the concept!" },
  { country: "czech", emoji: "📖", fact: "Czechs are among the world's most avid readers. Pohádky (fairy tales) like those by Božena Němcová are beloved bedtime stories." },
  { country: "czech", emoji: "🎭", fact: "Czech puppet theater (loutkové divadlo) is a UNESCO cultural heritage. Your baby will love Spejbl and Hurvínek!" },
  { country: "czech", emoji: "🐾", fact: "Krteček (The Little Mole) is the most beloved Czech cartoon character. Every Czech child grows up with him!" },
  { country: "czech", emoji: "🍯", fact: "Czech grandmothers (babičky) are legendary for their koláče (sweet pastries). Your baby has delicious treats ahead!" },
  { country: "czech", emoji: "🎵", fact: "Czechs sing 'Halí belí' and other ukolébavky (lullabies) to babies. Music is deeply woven into Czech family life." },
  { country: "czech", emoji: "🌸", fact: "Czech tradition says you should carry a newborn around the house to show them their new home — every room!" },
  { country: "czech", emoji: "🎄", fact: "In Czech Republic, Christmas gifts are brought by Ježíšek (Baby Jesus), not Santa Claus!" },
  { country: "czech", emoji: "🧊", fact: "Czechs love otužování — cold water exposure for health. Many Czech kids are raised with this tradition!" },
  { country: "czech", emoji: "🌳", fact: "When a Czech baby is born, it's tradition to plant a tree. The tree grows with the child!" },
];

export function getDailyFacts(dueDate: Date, currentDate: Date): { finnish: CulturalFact; czech: CulturalFact } {
  const dayOfYear = Math.floor((currentDate.getTime() - new Date(currentDate.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
  
  const finnishFacts = culturalFacts.filter(f => f.country === "finland");
  const czechFacts = culturalFacts.filter(f => f.country === "czech");

  return {
    finnish: finnishFacts[dayOfYear % finnishFacts.length],
    czech: czechFacts[dayOfYear % czechFacts.length],
  };
}
