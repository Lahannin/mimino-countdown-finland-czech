export interface BilingualWord {
  finnish: string;
  czech: string;
  english: string;
  emoji: string;
  pronunciation_fi?: string;
  pronunciation_cz?: string;
}

export const bilingualWords: BilingualWord[] = [
  // Family
  { finnish: "äiti", czech: "maminka", english: "mom", emoji: "👩", pronunciation_fi: "AY-ti", pronunciation_cz: "MA-min-ka" },
  { finnish: "isi", czech: "tatínek", english: "dad", emoji: "👨", pronunciation_fi: "I-si", pronunciation_cz: "TA-tee-nek" },
  { finnish: "vauva", czech: "mimino", english: "baby", emoji: "👶", pronunciation_fi: "VAU-va", pronunciation_cz: "MI-mi-no" },
  { finnish: "perhe", czech: "rodina", english: "family", emoji: "👨‍👩‍👧", pronunciation_fi: "PER-he", pronunciation_cz: "RO-di-na" },
  { finnish: "mummo", czech: "babička", english: "grandma", emoji: "👵", pronunciation_fi: "MUM-mo", pronunciation_cz: "BA-bich-ka" },
  { finnish: "pappa", czech: "dědeček", english: "grandpa", emoji: "👴", pronunciation_fi: "PAP-pa", pronunciation_cz: "DYED-e-chek" },
  { finnish: "sisko", czech: "sestřička", english: "sister", emoji: "👧", pronunciation_fi: "SIS-ko", pronunciation_cz: "SES-trzhich-ka" },
  { finnish: "veli", czech: "bráška", english: "brother", emoji: "👦", pronunciation_fi: "VE-li", pronunciation_cz: "BRAASH-ka" },
  { finnish: "täti", czech: "teta", english: "auntie", emoji: "👩‍👧", pronunciation_fi: "TÄ-ti", pronunciation_cz: "TE-ta" },
  { finnish: "tyttö", czech: "holčička", english: "little girl", emoji: "👧", pronunciation_fi: "TÜT-tö", pronunciation_cz: "HOL-chich-ka" },

  // Love & affection
  { finnish: "rakas", czech: "miláček", english: "darling", emoji: "❤️", pronunciation_fi: "RA-kas", pronunciation_cz: "MI-laa-chek" },
  { finnish: "rakastan sinua", czech: "miluji tě", english: "I love you", emoji: "💕", pronunciation_fi: "RA-kas-tan SI-nu-a", pronunciation_cz: "MI-lu-yi tyeh" },
  { finnish: "halaus", czech: "objetí", english: "hug", emoji: "🤗", pronunciation_fi: "HA-la-us", pronunciation_cz: "OB-ye-tee" },
  { finnish: "suukko", czech: "pusinka", english: "kiss", emoji: "😘", pronunciation_fi: "SUU-kko", pronunciation_cz: "PU-sin-ka" },
  { finnish: "sydän", czech: "srdíčko", english: "little heart", emoji: "💗", pronunciation_fi: "SÜ-dän", pronunciation_cz: "SR-deech-ko" },
  { finnish: "kulta", czech: "zlatíčko", english: "sweetheart", emoji: "💛", pronunciation_fi: "KUL-ta", pronunciation_cz: "ZLA-teech-ko" },
  { finnish: "hymy", czech: "úsměv", english: "smile", emoji: "😊", pronunciation_fi: "HÜ-mü", pronunciation_cz: "OOS-myev" },
  { finnish: "nauru", czech: "smích", english: "laughter", emoji: "😂", pronunciation_fi: "NAU-ru", pronunciation_cz: "smeekh" },
  { finnish: "sylissä", czech: "v náručí", english: "in arms", emoji: "🤱", pronunciation_fi: "SÜ-lis-sä", pronunciation_cz: "v NAA-ru-chee" },
  { finnish: "syli", czech: "náruč", english: "embrace", emoji: "🫂", pronunciation_fi: "SÜ-li", pronunciation_cz: "NAA-ruch" },
  { finnish: "hellyys", czech: "něžnost", english: "tenderness", emoji: "🥰", pronunciation_fi: "HEL-lüüs", pronunciation_cz: "NYEZH-nost" },
  { finnish: "onni", czech: "štěstí", english: "happiness", emoji: "🌈", pronunciation_fi: "ON-ni", pronunciation_cz: "SHTYES-tee" },
  { finnish: "toivo", czech: "naděje", english: "hope", emoji: "🌟", pronunciation_fi: "TOI-vo", pronunciation_cz: "NA-dye-ye" },
  { finnish: "ikävä", czech: "stýská se mi", english: "I miss you", emoji: "💙", pronunciation_fi: "I-kä-vä", pronunciation_cz: "STEESS-kaa se mi" },

  // Baby & softness
  { finnish: "pieni", czech: "maličká", english: "tiny", emoji: "🤏", pronunciation_fi: "PIE-ni", pronunciation_cz: "MA-lich-kaa" },
  { finnish: "kaunis", czech: "krásná", english: "beautiful", emoji: "✨", pronunciation_fi: "KAU-nis", pronunciation_cz: "KRAAS-naa" },
  { finnish: "onnellinen", czech: "šťastná", english: "happy", emoji: "😊", pronunciation_fi: "ON-nel-li-nen", pronunciation_cz: "SHTYAS-tnaa" },
  { finnish: "pehmeä", czech: "měkounká", english: "soft", emoji: "☁️", pronunciation_fi: "PEH-me-ä", pronunciation_cz: "MNYE-koun-kaa" },
  { finnish: "lämmin", czech: "teplounká", english: "warm", emoji: "🔆", pronunciation_fi: "LÄM-min", pronunciation_cz: "TEP-loun-kaa" },
  { finnish: "ihana", czech: "nádherná", english: "wonderful", emoji: "🌸", pronunciation_fi: "I-ha-na", pronunciation_cz: "NAAD-her-naa" },
  { finnish: "turvassa", czech: "v bezpečí", english: "safe", emoji: "🛡️", pronunciation_fi: "TUR-vas-sa", pronunciation_cz: "v BEZ-pe-chee" },
  { finnish: "vatsa", czech: "bříško", english: "tummy", emoji: "🤰", pronunciation_fi: "VAT-sa", pronunciation_cz: "BRZHEE-shko" },
  { finnish: "poski", czech: "tvářička", english: "cheek", emoji: "😊", pronunciation_fi: "POS-ki", pronunciation_cz: "TVAA-rzhich-ka" },
  { finnish: "sormi", czech: "prstíček", english: "little finger", emoji: "👆", pronunciation_fi: "SOR-mi", pronunciation_cz: "PR-stee-chek" },
  { finnish: "nenä", czech: "nosík", english: "little nose", emoji: "👃", pronunciation_fi: "NE-nä", pronunciation_cz: "NO-seek" },
  { finnish: "käsi", czech: "ručička", english: "little hand", emoji: "✋", pronunciation_fi: "KÄ-si", pronunciation_cz: "RU-chich-ka" },
  { finnish: "jalka", czech: "nožička", english: "little foot", emoji: "🦶", pronunciation_fi: "YAL-ka", pronunciation_cz: "NO-zhich-ka" },

  // Home & comfort
  { finnish: "koti", czech: "domov", english: "home", emoji: "🏠", pronunciation_fi: "KO-ti", pronunciation_cz: "DO-mov" },
  { finnish: "uni", czech: "spánek", english: "sleep", emoji: "😴", pronunciation_fi: "U-ni", pronunciation_cz: "SPAA-nek" },
  { finnish: "tuutu", czech: "ukolébavka", english: "lullaby", emoji: "🎶", pronunciation_fi: "TUU-tu", pronunciation_cz: "U-ko-leh-bav-ka" },
  { finnish: "kehto", czech: "kolébka", english: "cradle", emoji: "🛏️", pronunciation_fi: "KEH-to", pronunciation_cz: "KO-lehb-ka" },
  { finnish: "peitto", czech: "dečka", english: "blanket", emoji: "🧸", pronunciation_fi: "PEIT-to", pronunciation_cz: "DECH-ka" },
  { finnish: "nalle", czech: "medvídek", english: "teddy bear", emoji: "🧸", pronunciation_fi: "NAL-le", pronunciation_cz: "MED-vee-dek" },
  { finnish: "tähti", czech: "hvězdička", english: "little star", emoji: "⭐", pronunciation_fi: "TÄH-ti", pronunciation_cz: "HVYEZ-dich-ka" },
  { finnish: "kuu", czech: "měsíček", english: "little moon", emoji: "🌙", pronunciation_fi: "kuu", pronunciation_cz: "MNYE-see-chek" },

  // Sweet moments
  { finnish: "leikki", czech: "hra", english: "play", emoji: "🧸", pronunciation_fi: "LEIK-ki", pronunciation_cz: "hra" },
  { finnish: "laulu", czech: "písnička", english: "song", emoji: "🎵", pronunciation_fi: "LAU-lu", pronunciation_cz: "PEES-nich-ka" },
  { finnish: "kirja", czech: "knížka", english: "storybook", emoji: "📖", pronunciation_fi: "KIR-ya", pronunciation_cz: "KNEEZH-ka" },
  { finnish: "potkia", czech: "kopat", english: "to kick", emoji: "🦶", pronunciation_fi: "POT-ki-a", pronunciation_cz: "KO-pat" },
  { finnish: "kasvaa", czech: "růst", english: "to grow", emoji: "🌱", pronunciation_fi: "KAS-vaa", pronunciation_cz: "roost" },
  { finnish: "maitoa", czech: "mlíčko", english: "milk", emoji: "🥛", pronunciation_fi: "MAI-to-a", pronunciation_cz: "MLEECH-ko" },

  // Greetings
  { finnish: "hyvää huomenta", czech: "dobré ráno", english: "good morning", emoji: "🌅", pronunciation_fi: "HÜ-vää HUO-men-ta", pronunciation_cz: "DOB-reh RAA-no" },
  { finnish: "hyvää yötä", czech: "dobrou noc", english: "good night", emoji: "🌙", pronunciation_fi: "HÜ-vää ÜÖ-tä", pronunciation_cz: "DOB-row nots" },
  { finnish: "kiitos", czech: "děkuji", english: "thank you", emoji: "🙏", pronunciation_fi: "KEE-tos", pronunciation_cz: "DYEH-ku-yi" },

  // Dreams & magic
  { finnish: "unelma", czech: "sen", english: "dream", emoji: "💫", pronunciation_fi: "U-nel-ma", pronunciation_cz: "sen" },
  { finnish: "taika", czech: "kouzlo", english: "magic", emoji: "🪄", pronunciation_fi: "TAI-ka", pronunciation_cz: "KOUZ-lo" },
  { finnish: "satu", czech: "pohádka", english: "fairy tale", emoji: "📚", pronunciation_fi: "SA-tu", pronunciation_cz: "PO-haad-ka" },
  { finnish: "enkeli", czech: "andílek", english: "little angel", emoji: "👼", pronunciation_fi: "EN-ke-li", pronunciation_cz: "AN-dee-lek" },
  { finnish: "ihme", czech: "zázrak", english: "miracle", emoji: "🌟", pronunciation_fi: "IH-me", pronunciation_cz: "ZAA-zrak" },
  { finnish: "lupaus", czech: "slib", english: "promise", emoji: "🤞", pronunciation_fi: "LU-pa-us", pronunciation_cz: "slib" },
  { finnish: "ikuisesti", czech: "navždy", english: "forever", emoji: "♾️", pronunciation_fi: "I-ku-i-ses-ti", pronunciation_cz: "NAV-zhdi" },
];

export function getDailyWord(currentDate: Date): BilingualWord {
  const dayOfYear = Math.floor(
    (currentDate.getTime() - new Date(currentDate.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24)
  );
  return bilingualWords[dayOfYear % bilingualWords.length];
}

const recentWords: number[] = [];

export function getRandomWord(): BilingualWord {
  let idx: number;
  do {
    idx = Math.floor(Math.random() * bilingualWords.length);
  } while (recentWords.includes(idx) && bilingualWords.length > 10);

  recentWords.push(idx);
  if (recentWords.length > 10) recentWords.shift();

  return bilingualWords[idx];
}
