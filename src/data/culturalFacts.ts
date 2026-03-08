export interface CulturalFact {
  country: "finland" | "czech";
  emoji: string;
  fact: string;
}

// Large pool so facts rotate daily without repeating quickly
export const finnishFacts: CulturalFact[] = [
  { country: "finland", emoji: "📦", fact: "Every baby born in Finland gets a maternity box from the government: clothes, sheets, and toys. The box itself doubles as baby's first bed!" },
  { country: "finland", emoji: "🧖", fact: "Finnish babies sometimes take their first sauna within days of being born. In the old days, saunas were even used as birthing rooms!" },
  { country: "finland", emoji: "❄️", fact: "Finnish babies nap outside in the cold, even in -15°C! It's believed the fresh cold air helps them sleep deeper and stay healthier." },
  { country: "finland", emoji: "📚", fact: "Finnish kids don't start school until age 7, and Finland has one of the best education systems in the world. No rush, mimino!" },
  { country: "finland", emoji: "🧁", fact: "Pulla (Finnish cardamom bread) is often the first pastry Finnish kids learn to bake with mummo. She'll love it!" },
  { country: "finland", emoji: "🎿", fact: "Cross-country skiing is so popular in Finland that babies can start in a pulka (baby sled) before they can stand!" },
  { country: "finland", emoji: "🫎", fact: "The Finnish word 'sisu' describes inner strength and resilience, a quality she'll inherit from isi!" },
  { country: "finland", emoji: "🧤", fact: "Finnish grandmothers (mummo) knit the warmest socks and mittens. She'll get plenty from mummo!" },
  { country: "finland", emoji: "🪵", fact: "Summer at a mökki (lakeside cabin) is sacred Finnish family time. Isi will take her there someday!" },
  { country: "finland", emoji: "🎭", fact: "The Moomins were created by Finnish-Swedish author Tove Jansson. Every Finnish kid grows up with Muumit, and she will too!" },
  { country: "finland", emoji: "🛷", fact: "Finnish kids sled on everything: real sleds, plastic bags, even cardboard boxes. Pure childhood joy!" },
  { country: "finland", emoji: "🏒", fact: "Ice hockey is practically a religion in Finland. She might be skating before she can walk!" },
  { country: "finland", emoji: "🏠", fact: "The Finnish word 'koti' means home, and Finns value home life deeply. Cozy evenings (with baby!) are a way of life." },
  { country: "finland", emoji: "☕", fact: "Finns drink more coffee per capita than anyone. She'll smell kahvi at every family gathering with isä's side!" },
  { country: "finland", emoji: "🫐", fact: "Finnish kids pick wild berries and mushrooms every summer thanks to 'jokamiehenoikeus' (everyman's rights). A foraging adventure awaits!" },
  { country: "finland", emoji: "🐟", fact: "Kalakukko (fish baked inside bread) is Finnish comfort food from Kuopio. Isä might make it for her someday!" },
  { country: "finland", emoji: "🌌", fact: "An old Finnish legend says northern lights (revontulet) are sparks from a firefox's tail. What a bedtime story for her!" },
  { country: "finland", emoji: "🧊", fact: "Many Finnish families go from a 90°C sauna straight into a frozen lake. She might try this brave tradition with isä!" },
  { country: "finland", emoji: "🎵", fact: "Finnish lullabies (tuutulaulut) are hauntingly beautiful. Isä will sing her to sleep in Finnish!" },
  { country: "finland", emoji: "🦌", fact: "There are about 200,000 reindeer in Finland, more than people in some cities! She'll meet them on visits to isä's homeland." },
  { country: "finland", emoji: "☀️", fact: "In Finnish Lapland, the sun doesn't set for 73 days in summer. Imagine bedtime during midnight sun!" },
  { country: "finland", emoji: "🐻", fact: "The bear is a sacred animal in Finnish folklore. Finnish kids grow up hearing stories of Otso, the forest king." },
  { country: "finland", emoji: "🥟", fact: "Karelian pies (karjalanpiirakka) with egg butter are a Finnish comfort food. Isä will teach her to love them!" },
  { country: "finland", emoji: "🧸", fact: "Finnish toy design is famously minimalist and creative. She'll play with beautiful Nordic toys from isä's family!" },
  { country: "finland", emoji: "🌲", fact: "Finland has more trees per person than any other European country. She'll have endless forests to explore with isä!" },
];

export const czechFacts: CulturalFact[] = [
  { country: "czech", emoji: "📅", fact: "Czech parents celebrate svátek (name day). Every day has an assigned name! She'll get extra celebrations growing up." },
  { country: "czech", emoji: "🐾", fact: "Krteček (The Little Mole) is the most beloved Czech cartoon character. Every Czech kid grows up watching him, and she will too!" },
  { country: "czech", emoji: "🍯", fact: "Czech babičky (grandmothers) are legendary for their koláče (sweet pastries). Homemade treats await her!" },
  { country: "czech", emoji: "🎵", fact: "Czech families sing 'Halí belí' and other ukolébavky (lullabies) to babies. Maminka will sing them to her!" },
  { country: "czech", emoji: "🌸", fact: "Czech tradition says you should carry a newborn around the house to show her every room of her new home!" },
  { country: "czech", emoji: "🎄", fact: "In Czech Republic, Christmas gifts are brought by Ježíšek (Baby Jesus), not Santa. She'll leave a window open for him!" },
  { country: "czech", emoji: "🌳", fact: "When a Czech baby is born, it's tradition to plant a tree. The tree grows together with the child!" },
  { country: "czech", emoji: "🎭", fact: "Czech puppet theater (loutkové divadlo) is UNESCO heritage. She'll love Spejbl and Hurvínek shows growing up!" },
  { country: "czech", emoji: "📖", fact: "Pohádky (fairy tales) by Božena Němcová are beloved Czech bedtime stories. Maminka will read them to her!" },
  { country: "czech", emoji: "🧊", fact: "Czechs love otužování (cold water exposure) for health. Many Czech kids grow up splashing in cold streams!" },
  { country: "czech", emoji: "🧙", fact: "On April 30th, Czech kids celebrate čarodějnice (burning witches), a fun spring bonfire tradition she'll love!" },
  { country: "czech", emoji: "🥚", fact: "At Easter, Czech kids decorate kraslice (painted eggs) and boys get pomlázka (willow whips). A colorful tradition!" },
  { country: "czech", emoji: "🏊", fact: "Czech kids learn to swim early, with aquaparks and outdoor swimming spots everywhere. She'll be a little water baby!" },
  { country: "czech", emoji: "🧁", fact: "Trdelník (chimney cake) is a beloved Czech treat. Warm, sweet, and impossible for little hands to resist!" },
  { country: "czech", emoji: "🏔️", fact: "Czech mountains (Krkonoše, Šumava) are perfect for family hikes. Krakonoš the mountain spirit watches over kids!" },
  { country: "czech", emoji: "🐝", fact: "Ferda Mravenec (Ferda the Ant) is a classic Czech cartoon, hardworking and clever. A great role model for her!" },
  { country: "czech", emoji: "🍲", fact: "Svíčková na smetaně is the Czech national dish. She'll grow up eating it at babička's house every Sunday!" },
  { country: "czech", emoji: "🚂", fact: "Czech kids love vlačky (train sets)! The country has one of the densest railway networks in Europe." },
  { country: "czech", emoji: "🎪", fact: "Prague Zoo is consistently ranked among the best in the world. She'll visit it countless times growing up!" },
  { country: "czech", emoji: "🌺", fact: "Many Czech families grow their own vegetables in a zahrádka (garden). Maybe she'll have her own little plot too!" },
  { country: "czech", emoji: "⛸️", fact: "Outdoor ice rinks pop up in every Czech town during winter. She'll learn to skate with the other kids!" },
  { country: "czech", emoji: "🧀", fact: "Smažený sýr (fried cheese) is Czech kids' favourite fast food. She'll love it too!" },
  { country: "czech", emoji: "🐕", fact: "Pejsek a Kočička (Dog and Cat) by Josef Čapek is a beloved Czech children's book. Perfect for bedtime!" },
  { country: "czech", emoji: "🏰", fact: "Czech Republic has over 2,000 castles. She'll grow up exploring them on family weekend trips!" },
  { country: "czech", emoji: "🎨", fact: "Czech kids love výtvarná výchova (art class). She'll bring home beautiful paintings for the fridge!" },
];

export function getDailyFacts(currentDate: Date): { finnish: CulturalFact; czech: CulturalFact } {
  const dayOfYear = Math.floor(
    (currentDate.getTime() - new Date(currentDate.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24)
  );

  return {
    finnish: finnishFacts[dayOfYear % finnishFacts.length],
    czech: czechFacts[dayOfYear % czechFacts.length],
  };
}
