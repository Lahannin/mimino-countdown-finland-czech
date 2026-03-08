// Daily baby development tips mapped by days remaining until due date
// Covers weeks ~28-40 of pregnancy with daily granularity

export interface DailyBabyInfo {
  dayTitle: string;
  sizeEmoji: string;
  funFact: string;
  tip: string;
}

export interface WeekSummary {
  week: number;
  size: string;
  sizeEmoji: string;
  sizeComparison: string;
  weight: string;
  length: string;
}

const weekSummaries: WeekSummary[] = [
  { week: 28, size: "Eggplant", sizeEmoji: "🍆", sizeComparison: "About as big as an eggplant", weight: "~1.0 kg", length: "~37 cm" },
  { week: 29, size: "Butternut squash", sizeEmoji: "🎃", sizeComparison: "Size of a butternut squash", weight: "~1.1 kg", length: "~38 cm" },
  { week: 30, size: "Cabbage", sizeEmoji: "🥬", sizeComparison: "About the size of a cabbage", weight: "~1.3 kg", length: "~39 cm" },
  { week: 31, size: "Coconut", sizeEmoji: "🥥", sizeComparison: "Size of a coconut", weight: "~1.5 kg", length: "~41 cm" },
  { week: 32, size: "Napa cabbage", sizeEmoji: "🥬", sizeComparison: "Length of a napa cabbage", weight: "~1.7 kg", length: "~42 cm" },
  { week: 33, size: "Pineapple", sizeEmoji: "🍍", sizeComparison: "Size of a pineapple", weight: "~1.9 kg", length: "~43 cm" },
  { week: 34, size: "Cantaloupe", sizeEmoji: "🍈", sizeComparison: "About as big as a cantaloupe", weight: "~2.1 kg", length: "~44 cm" },
  { week: 35, size: "Honeydew melon", sizeEmoji: "🍈", sizeComparison: "Size of a honeydew melon", weight: "~2.4 kg", length: "~46 cm" },
  { week: 36, size: "Romaine lettuce", sizeEmoji: "🥬", sizeComparison: "Length of romaine lettuce", weight: "~2.6 kg", length: "~47 cm" },
  { week: 37, size: "Swiss chard", sizeEmoji: "🌿", sizeComparison: "Size of a Swiss chard bunch", weight: "~2.9 kg", length: "~48 cm" },
  { week: 38, size: "Leek", sizeEmoji: "🥒", sizeComparison: "Length of a leek", weight: "~3.1 kg", length: "~49 cm" },
  { week: 39, size: "Watermelon", sizeEmoji: "🍉", sizeComparison: "Small watermelon size", weight: "~3.3 kg", length: "~50 cm" },
  { week: 40, size: "Pumpkin", sizeEmoji: "🎃", sizeComparison: "Size of a small pumpkin", weight: "~3.5 kg", length: "~51 cm" },
];

// Pool of daily developments — we rotate through these
const dailyDevelopments: DailyBabyInfo[] = [
  { dayTitle: "Dreaming away", sizeEmoji: "💤", funFact: "She might be having her first dreams right now! REM sleep has started.", tip: "Play some calm music — she can hear it!" },
  { dayTitle: "Growing stronger", sizeEmoji: "💪", funFact: "Her muscles are getting stronger every day. She's practicing kicks and punches!", tip: "Count her kicks — 10 movements in 2 hours is a good sign." },
  { dayTitle: "Tiny fingernails", sizeEmoji: "✋", funFact: "Her fingernails are growing and almost reach her fingertips now.", tip: "You might need to trim them soon after birth!" },
  { dayTitle: "Brain power", sizeEmoji: "🧠", funFact: "Her brain is forming billions of neurons. She's getting smarter by the minute!", tip: "Omega-3 fatty acids help her brain development." },
  { dayTitle: "Hearing you", sizeEmoji: "👂", funFact: "She recognizes both your voices! She'll know her parents from day one.", tip: "Talk to her, sing to her — in Finnish AND Czech!" },
  { dayTitle: "Blinking eyes", sizeEmoji: "👀", funFact: "She can open and close her eyes and even react to bright light through the belly.", tip: "Try shining a gentle flashlight — she might move!" },
  { dayTitle: "Taste buds active", sizeEmoji: "👅", funFact: "She's swallowing amniotic fluid and can taste what maminka eats!", tip: "Eating varied foods now may help her be less picky later." },
  { dayTitle: "Breathing practice", sizeEmoji: "🫁", funFact: "She's practicing breathing movements even though she gets oxygen through the umbilical cord.", tip: "Her lungs are producing surfactant — crucial for first breaths." },
  { dayTitle: "Getting chubbier", sizeEmoji: "🍼", funFact: "She's adding fat layers every day — those adorable baby rolls are forming!", tip: "This fat helps her regulate temperature after birth." },
  { dayTitle: "Hair day", sizeEmoji: "👶", funFact: "She might have a full head of hair already! Or she might be beautifully bald.", tip: "Hair color might change after birth — could be Finnish blonde or Czech brunette!" },
  { dayTitle: "Hiccups!", sizeEmoji: "😄", funFact: "Those rhythmic bumps you feel? She's probably hiccupping! It's totally normal.", tip: "Hiccups help develop her diaphragm for breathing." },
  { dayTitle: "Immune boost", sizeEmoji: "🛡️", funFact: "She's receiving antibodies from maminka, building her immune system.", tip: "Breastfeeding will continue passing antibodies after birth." },
  { dayTitle: "Sleep cycles", sizeEmoji: "😴", funFact: "She sleeps 90-95% of the day! She has regular sleep-wake cycles now.", tip: "She's often most active when you're trying to rest!" },
  { dayTitle: "Bone development", sizeEmoji: "🦴", funFact: "Her bones are hardening, but her skull stays soft for delivery.", tip: "Calcium-rich foods help her bone growth." },
  { dayTitle: "Grip strength", sizeEmoji: "🤝", funFact: "Her grip is surprisingly strong already — she'll squeeze your finger soon!", tip: "The grasp reflex is one of the first things you'll notice." },
  { dayTitle: "Skin smoothing", sizeEmoji: "✨", funFact: "Her wrinkly skin is smoothing out as she gains more fat underneath.", tip: "Vernix (protective coating) is keeping her skin soft." },
  { dayTitle: "Position check", sizeEmoji: "🔄", funFact: "She might be turning head-down, getting ready for the big day!", tip: "Walking and gentle movement can encourage good positioning." },
  { dayTitle: "Lung maturity", sizeEmoji: "🌬️", funFact: "Her lungs are maturing rapidly — each day makes them stronger.", tip: "Full lung maturity usually happens around week 36." },
  { dayTitle: "Facial expressions", sizeEmoji: "😊", funFact: "She can smile, frown, and make faces! Her facial muscles are well developed.", tip: "Ultrasound might catch a smile if you're lucky!" },
  { dayTitle: "Toenails growing", sizeEmoji: "🦶", funFact: "Her tiny toenails are now visible and growing.", tip: "Baby toenails are incredibly soft and delicate." },
  { dayTitle: "Responding to touch", sizeEmoji: "🤲", funFact: "Press gently on the belly — she might push back!", tip: "Gentle belly massage can be soothing for both of you." },
  { dayTitle: "Swallowing practice", sizeEmoji: "💧", funFact: "She swallows about a liter of amniotic fluid per day — practicing for feeding!", tip: "This helps develop her digestive system." },
  { dayTitle: "Temperature regulation", sizeEmoji: "🌡️", funFact: "She's developing the ability to regulate her own body temperature.", tip: "Brown fat is accumulating to help keep her warm after birth." },
  { dayTitle: "Nerve connections", sizeEmoji: "⚡", funFact: "Billions of nerve connections are forming. She's becoming more coordinated.", tip: "Her movements might feel more deliberate and less jerky now." },
  { dayTitle: "Eye color forming", sizeEmoji: "💙", funFact: "Her eye color is developing, though it might change after birth!", tip: "Most babies are born with blue/grey eyes — final color by 6-12 months." },
  { dayTitle: "Antibody transfer", sizeEmoji: "💉", funFact: "Important antibodies are passing from maminka to her right now.", tip: "This passive immunity protects her in the first months of life." },
  { dayTitle: "Adrenal glands", sizeEmoji: "⚗️", funFact: "Her adrenal glands are producing hormones that will help with the transition to life outside.", tip: "These hormones also help her lungs prepare for breathing air." },
  { dayTitle: "Growing eyelashes", sizeEmoji: "👁️", funFact: "She has beautiful tiny eyelashes now!", tip: "Eyelashes protect her eyes from dust and light." },
  { dayTitle: "Meconium forming", sizeEmoji: "🟤", funFact: "Her first poop (meconium) is forming — it's dark green/black and totally normal!", tip: "Usually passes within the first 24-48 hours after birth." },
  { dayTitle: "Space getting tight", sizeEmoji: "🏠", funFact: "She's running out of room! Movements might feel different — more rolls than kicks.", tip: "Still count movements — they should stay consistent." },
  { dayTitle: "Vernix coating", sizeEmoji: "🧴", funFact: "She's coated in vernix caseosa — a creamy white substance protecting her skin.", tip: "Some of this coating stays on at birth and is great for her skin!" },
  { dayTitle: "Fingertip pads", sizeEmoji: "🖐️", funFact: "Her unique fingerprints are fully formed — one of a kind in the whole universe!", tip: "Fingerprints form between weeks 17-20 and never change." },
  { dayTitle: "Practice crying", sizeEmoji: "😢", funFact: "She's practicing crying silently! The motions are there but no sound (yet!).", tip: "You'll hear the real thing very soon!" },
  { dayTitle: "Iron storage", sizeEmoji: "🔴", funFact: "She's storing iron from maminka — enough to last her first 6 months.", tip: "Iron-rich foods are important for maminka right now." },
  { dayTitle: "Coordinated sucking", sizeEmoji: "🍼", funFact: "She can coordinate sucking and swallowing — essential for feeding after birth.", tip: "She might even be sucking her thumb right now!" },
  { dayTitle: "Kidney function", sizeEmoji: "💧", funFact: "Her kidneys are fully functional and producing urine.", tip: "She pees into the amniotic fluid — and swallows it again! Circle of life." },
  { dayTitle: "Circadian rhythm", sizeEmoji: "🌙", funFact: "She's developing a sense of day and night based on maminka's hormones.", tip: "Keeping a regular schedule now might help her sleep patterns later." },
  { dayTitle: "Liver ready", sizeEmoji: "🫀", funFact: "Her liver is storing iron and will start processing bilirubin after birth.", tip: "Slight jaundice is common in newborns — usually resolves on its own." },
  { dayTitle: "Almost there!", sizeEmoji: "🎉", funFact: "She's considered full-term or nearly there — ready to meet isä and maminka!", tip: "Make sure the hospital bag is packed — holka can come any time!" },
  { dayTitle: "Final countdown", sizeEmoji: "🚀", funFact: "She's in launch position! Head down and ready for the grand entrance.", tip: "Rest when you can — soon sleep will be a luxury!" },
  { dayTitle: "Protective coating", sizeEmoji: "🛡️", funFact: "The lanugo (fine body hair) is mostly gone, replaced by smooth baby skin.", tip: "Some lanugo might remain on shoulders and back at birth." },
  { dayTitle: "Strong heartbeat", sizeEmoji: "❤️", funFact: "Her heart beats about 110-160 times per minute — you can hear it with a stethoscope!", tip: "A baby's heart rate is about twice as fast as an adult's." },
  { dayTitle: "Developing reflexes", sizeEmoji: "🦵", funFact: "All her newborn reflexes are ready — rooting, sucking, startle, and grasp!", tip: "These reflexes are essential for survival and feeding." },
  { dayTitle: "Intestinal prep", sizeEmoji: "🌀", funFact: "Her intestines are filled with meconium and ready for the first feeding.", tip: "Colostrum (first milk) will help her pass meconium." },
  { dayTitle: "Voice recognition", sizeEmoji: "🎤", funFact: "She already prefers maminka's voice over strangers — and recognizes isä too!", tip: "Reading books aloud now builds early language connections." },
  { dayTitle: "Weight gain mode", sizeEmoji: "📈", funFact: "She's gaining about 30 grams per day now — filling out those cheeks!", tip: "Most weight gain in the last weeks is fat for warmth." },
  { dayTitle: "Lung surfactant", sizeEmoji: "🫧", funFact: "Her lungs are producing plenty of surfactant — the substance that keeps air sacs open.", tip: "This is one of the last organs to fully mature." },
  { dayTitle: "Skull flexibility", sizeEmoji: "🧩", funFact: "Her skull bones overlap slightly to fit through the birth canal — clever design!", tip: "The fontanelles (soft spots) won't fully close until 18 months." },
  { dayTitle: "Stress hormones", sizeEmoji: "🧘", funFact: "She's producing cortisol, which will help her lungs work after birth.", tip: "Maminka staying calm helps regulate baby's stress hormones too." },
  { dayTitle: "Due date approaching", sizeEmoji: "📅", funFact: "Only about 5% of babies arrive on their exact due date — she'll come when she's ready!", tip: "The due date is just an estimate — normal range is 37-42 weeks." },
  // More daily items to ensure enough variety
  { dayTitle: "Building immunity", sizeEmoji: "🏥", funFact: "She's stockpiling antibodies for the outside world — nature's first vaccine!", tip: "Skin-to-skin contact right after birth boosts her immune system." },
  { dayTitle: "Cozy & warm", sizeEmoji: "🧣", funFact: "She's kept at a perfect 37.5°C inside — warmer than room temperature!", tip: "After birth, she'll need help staying warm — skin-to-skin is best." },
  { dayTitle: "Neural pathways", sizeEmoji: "🌐", funFact: "Her brain weighs about 400g now and has over 100 billion neurons!", tip: "Early bonding helps strengthen neural connections." },
  { dayTitle: "Practice makes perfect", sizeEmoji: "🤸", funFact: "She's been practicing movements for months — stretching, yawning, and rolling.", tip: "These movements help her muscles and joints develop properly." },
  { dayTitle: "Sweet tooth", sizeEmoji: "🍬", funFact: "She already prefers sweet flavors — she swallows more when amniotic fluid tastes sweet!", tip: "This preference helped our ancestors choose ripe, safe fruits." },
  { dayTitle: "Memory forming", sizeEmoji: "🎵", funFact: "She can remember sounds she hears regularly — she'll recognize familiar songs after birth!", tip: "Play the same lullaby each night — she'll find it calming later." },
  { dayTitle: "Perfect timing", sizeEmoji: "⏰", funFact: "Her body is producing hormones that will help trigger labor when she's truly ready.", tip: "Trust the process — she knows when it's time." },
  { dayTitle: "Blood production", sizeEmoji: "🩸", funFact: "Her bone marrow has fully taken over blood cell production.", tip: "She has about 300 ml of blood — and it's being renewed constantly." },
  { dayTitle: "Digestive prep", sizeEmoji: "🦠", funFact: "Her digestive tract is sterile now — it'll be colonized by helpful bacteria at birth!", tip: "This microbiome kickstart is one of birth's hidden superpowers." },
  { dayTitle: "Light sensitivity", sizeEmoji: "🔦", funFact: "She turns toward bright light outside the belly — curious already!", tip: "Her pupils can now dilate and constrict in response to light." },
  { dayTitle: "Cartilage to bone", sizeEmoji: "🦴", funFact: "Much of her cartilage is hardening into bone, but she still has about 300 bones (adults have 206)!", tip: "Some bones fuse together as she grows — a process taking years." },
  { dayTitle: "Peaceful floating", sizeEmoji: "🌊", funFact: "She's floating in about 800ml of amniotic fluid — her own little swimming pool.", tip: "Amniotic fluid is completely renewed every 3 hours!" },
  { dayTitle: "Hormone exchange", sizeEmoji: "🔬", funFact: "She and maminka constantly exchange hormones through the placenta — true teamwork!", tip: "When maminka is happy, baby gets a dose of feel-good hormones too." },
  { dayTitle: "Vocal cord ready", sizeEmoji: "🗣️", funFact: "Her vocal cords are fully formed — ready for that first magical cry!", tip: "A strong first cry means lungs are working perfectly." },
  { dayTitle: "Pain awareness", sizeEmoji: "🤕", funFact: "Her pain pathways are developed — she can feel and respond to discomfort.", tip: "Gentle rocking and maminka's heartbeat are naturally soothing." },
  { dayTitle: "Bilateral magic", sizeEmoji: "🧠", funFact: "She'll likely be hearing Finnish in one ear and Czech in the other — bilingual from birth!", tip: "Bilingual babies develop stronger cognitive flexibility." },
  { dayTitle: "Stretching out", sizeEmoji: "🧘‍♀️", funFact: "She stretches her limbs regularly — you might see a foot shape on the belly!", tip: "Feeling distinct body parts means she's getting big!" },
  { dayTitle: "Ready to latch", sizeEmoji: "🤱", funFact: "Her rooting reflex is strong — turn her cheek and she'll look for food!", tip: "This instinct helps her find breast/bottle naturally." },
  { dayTitle: "Two languages", sizeEmoji: "🗣️", funFact: "Research shows babies can distinguish languages in the womb — she knows Finnish and Czech are different!", tip: "OPOL (one parent, one language) works beautifully for bilingual families." },
  { dayTitle: "Placenta power", sizeEmoji: "🌳", funFact: "The placenta is an incredible organ — it filters, feeds, and protects her every second.", tip: "By now the placenta weighs about 500g and processes 500ml of blood per minute!" },
  { dayTitle: "Nesting instinct", sizeEmoji: "🏡", funFact: "While she nests inside, maminka might be nesting outside — cleaning and organizing!", tip: "The nesting instinct is real and a sign the body is preparing." },
  { dayTitle: "Growth spurt", sizeEmoji: "📏", funFact: "She might gain 200g this week alone — growing at incredible speed!", tip: "Eating well and resting helps support this rapid growth." },
  { dayTitle: "Eyebrow game", sizeEmoji: "🤨", funFact: "She has eyebrows now! Though they might be very light and thin.", tip: "Baby eyebrows often fill in during the first year." },
  { dayTitle: "Coordination central", sizeEmoji: "🎯", funFact: "She can coordinate hand movements with sucking — multitasking already!", tip: "This coordination is essential for feeding after birth." },
  { dayTitle: "Ready for the world", sizeEmoji: "🌍", funFact: "Half Finnish, half Czech, 100% loved — she's going to have the best of two amazing cultures!", tip: "She'll grow up with sauna, forests, castles, and koláče!" },
];

export function getWeekSummary(dueDate: Date, currentDate: Date): WeekSummary {
  const diffMs = dueDate.getTime() - currentDate.getTime();
  const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
  const weeksLeft = Math.ceil(diffDays / 7);
  const currentWeek = Math.max(28, Math.min(40, 40 - weeksLeft));
  return weekSummaries.find(w => w.week === currentWeek) || weekSummaries[0];
}

export function getDailyBabyInfo(currentDate: Date): DailyBabyInfo {
  const dayOfYear = Math.floor(
    (currentDate.getTime() - new Date(currentDate.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24)
  );
  return dailyDevelopments[dayOfYear % dailyDevelopments.length];
}
