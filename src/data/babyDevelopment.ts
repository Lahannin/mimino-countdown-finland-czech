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
  sizeCzech: string;
  sizeFinnish: string;
  weight: string;
  length: string;
  finnComparison: string;
  czechComparison: string;
}

const weekSummaries: WeekSummary[] = [
  { week: 28, size: "Eggplant", sizeEmoji: "🍆", sizeComparison: "About as big as an eggplant", sizeCzech: "lilek", sizeFinnish: "munakoiso", weight: "~1.0 kg", length: "~37 cm",
    finnComparison: "🇫🇮 About as long as a kantele (the small travel-size one isä pretends to play)",
    czechComparison: "🇨🇿 Weighs as much as a big wheel of Olomoucké tvarůžky, and smells better!" },
  { week: 29, size: "Butternut squash", sizeEmoji: "🎃", sizeComparison: "Size of a butternut squash", sizeCzech: "máslová dýně", sizeFinnish: "myskikurpitsa", weight: "~1.1 kg", length: "~38 cm",
    finnComparison: "🇫🇮 As heavy as 6 bags of Fazer salmiakki. Isä's favorite! 🍬",
    czechComparison: "🇨🇿 About as long as 2.5 Pilsner Urquell cans stacked up. Cheers, mimino! 🍺" },
  { week: 30, size: "Cabbage", sizeEmoji: "🥬", sizeComparison: "About the size of a cabbage", sizeCzech: "zelí", sizeFinnish: "kaali", weight: "~1.3 kg", length: "~39 cm",
    finnComparison: "🇫🇮 As long as a big Finnish grillimakkara, the jumbo kind from the mökki grill! 🌭",
    czechComparison: "🇨🇿 Weighs as much as 5 trdelníky! That's a lot of cinnamon sugar 🍩" },
  { week: 31, size: "Coconut", sizeEmoji: "🥥", sizeComparison: "Size of a coconut", sizeCzech: "kokos", sizeFinnish: "kookospähkinä", weight: "~1.5 kg", length: "~41 cm",
    finnComparison: "🇫🇮 As heavy as 4 Moomin mugs! A proper collection starter ☕",
    czechComparison: "🇨🇿 As tall as a Krteček plush toy! The little mole would be proud 🐾" },
  { week: 32, size: "Napa cabbage", sizeEmoji: "🥬", sizeComparison: "Length of a napa cabbage", sizeCzech: "čínské zelí", sizeFinnish: "kiinankaali", weight: "~1.7 kg", length: "~42 cm",
    finnComparison: "🇫🇮 As heavy as 3 pairs of Finnish wool socks. Cozy! 🧦",
    czechComparison: "🇨🇿 As long as a big 2L Kofola bottle plus a koláč on top! 🥤" },
  { week: 33, size: "Pineapple", sizeEmoji: "🍍", sizeComparison: "Size of a pineapple", sizeCzech: "ananas", sizeFinnish: "ananas", weight: "~1.9 kg", length: "~43 cm",
    finnComparison: "🇫🇮 As heavy as a sauna löyly bucket (empty, don't worry). Time to warm up!",
    czechComparison: "🇨🇿 As long as a Czech garden gnome. Yes, every babička has one 🧙" },
  { week: 34, size: "Cantaloupe", sizeEmoji: "🍈", sizeComparison: "About as big as a cantaloupe", sizeCzech: "cukrový meloun", sizeFinnish: "cantaloupe-meloni", weight: "~2.1 kg", length: "~44 cm",
    finnComparison: "🇫🇮 As heavy as 6 packages of Karelian pies. Isä is drooling! 🥟",
    czechComparison: "🇨🇿 Length of 4 koláče lined up. Babička is already baking! 🥧" },
  { week: 35, size: "Honeydew melon", sizeEmoji: "🍈", sizeComparison: "Size of a honeydew melon", sizeCzech: "medový meloun", sizeFinnish: "hunajameloni", weight: "~2.4 kg", length: "~46 cm",
    finnComparison: "🇫🇮 Weighs the same as 12 bars of Fazer Blue chocolate. Nom! 🍫",
    czechComparison: "🇨🇿 As long as a Prague ham (Pražská šunka). A delicacy! 🍖" },
  { week: 36, size: "Romaine lettuce", sizeEmoji: "🥬", sizeComparison: "Length of romaine lettuce", sizeCzech: "římský salát", sizeFinnish: "roomansalaatti", weight: "~2.6 kg", length: "~47 cm",
    finnComparison: "🇫🇮 As heavy as a Nokia 3310... times 20. Unbreakable baby! 📱",
    czechComparison: "🇨🇿 As long as 2 Pilsner Urquell bottles end to end. Na zdraví! 🍺🍺" },
  { week: 37, size: "Swiss chard", sizeEmoji: "🌿", sizeComparison: "Size of a Swiss chard bunch", sizeCzech: "mangold", sizeFinnish: "lehtimangoldi", weight: "~2.9 kg", length: "~48 cm",
    finnComparison: "🇫🇮 About half the weight of a newborn reindeer. Almost twins! 🦌",
    czechComparison: "🇨🇿 As tall as a Hurvínek puppet! Ready for her stage debut 🎭" },
  { week: 38, size: "Leek", sizeEmoji: "🥬", sizeComparison: "Length of a leek", sizeCzech: "pórek", sizeFinnish: "purjosipuli", weight: "~3.1 kg", length: "~49 cm",
    finnComparison: "🇫🇮 Weighs about the same as a big double batch of pulla dough. Baking time! 🧁",
    czechComparison: "🇨🇿 As long as a standard Czech hockey stick (for babies, obviously) 🏒" },
  { week: 39, size: "Watermelon", sizeEmoji: "🍉", sizeComparison: "Small watermelon size", sizeCzech: "vodní meloun", sizeFinnish: "vesimeloni", weight: "~3.3 kg", length: "~50 cm",
    finnComparison: "🇫🇮 Half a meter! That's the length of a proper Finnish birch vihta for sauna 🧖",
    czechComparison: "🇨🇿 Weighs as much as 30 Becherovka mini bottles. Na zdraví! 🥃" },
  { week: 40, size: "Pumpkin", sizeEmoji: "🎃", sizeComparison: "Size of a small pumpkin", sizeCzech: "dýně", sizeFinnish: "kurpitsa", weight: "~3.5 kg", length: "~51 cm",
    finnComparison: "🇫🇮 As heavy as the Finnish maternity box she'll get from isä's homeland! 📦",
    czechComparison: "🇨🇿 As long as 4 rohlíky (Czech bread rolls) in a row. Snídaně time! 🥖" },
];

// Pool of daily developments, all pregnancy-appropriate
const dailyDevelopments: DailyBabyInfo[] = [
  { dayTitle: "Dreaming away", sizeEmoji: "💤", funFact: "She might be having her first dreams right now! REM sleep has started inside the womb.", tip: "Play some calm music, she can hear it through the belly!" },
  { dayTitle: "Growing stronger", sizeEmoji: "💪", funFact: "Her muscles are getting stronger every day. Maminka can feel those kicks and punches!", tip: "Count her kicks: 10 movements in 2 hours is a good sign." },
  { dayTitle: "Tiny fingernails", sizeEmoji: "✋", funFact: "Her fingernails are growing inside the womb and almost reach her fingertips now.", tip: "You might need to trim them soon after she's born!" },
  { dayTitle: "Brain power", sizeEmoji: "🧠", funFact: "Her brain is forming billions of neurons right now. Growing smarter by the minute!", tip: "Omega-3 fatty acids in maminka's diet help her brain development." },
  { dayTitle: "Hearing you", sizeEmoji: "👂", funFact: "She already recognizes both your voices through the belly wall! She'll know her parents from day one.", tip: "Talk to her, sing to her, in Finnish AND Czech!" },
  { dayTitle: "Blinking eyes", sizeEmoji: "👀", funFact: "She can open and close her eyes inside the womb and even react to bright light through maminka's belly.", tip: "Try shining a gentle flashlight on the belly, she might move!" },
  { dayTitle: "Taste buds active", sizeEmoji: "👅", funFact: "She's swallowing amniotic fluid and can taste what maminka eats! Flavors pass through.", tip: "Eating varied foods now may help her be less picky later." },
  { dayTitle: "Breathing practice", sizeEmoji: "🫁", funFact: "She's practicing breathing movements in the womb, even though she gets oxygen through the umbilical cord.", tip: "Her lungs are producing surfactant, crucial for her first real breaths." },
  { dayTitle: "Getting chubbier", sizeEmoji: "🍼", funFact: "She's adding fat layers every day inside the womb, those adorable baby rolls are forming!", tip: "This fat will help her regulate temperature after she's born." },
  { dayTitle: "Hair day", sizeEmoji: "👶", funFact: "She might be growing a full head of hair right now in there! Or she might arrive beautifully bald.", tip: "Hair color is a mystery: could be Finnish blonde or Czech brunette!" },
  { dayTitle: "Hiccups!", sizeEmoji: "😄", funFact: "Those rhythmic bumps maminka feels? She's probably hiccupping in there! Totally normal.", tip: "Hiccups help develop her diaphragm for breathing after birth." },
  { dayTitle: "Immune boost", sizeEmoji: "🛡️", funFact: "She's receiving antibodies from maminka through the placenta, building her immune system.", tip: "This passive immunity will protect her in the first months of life." },
  { dayTitle: "Sleep cycles", sizeEmoji: "😴", funFact: "She sleeps 90-95% of the day inside the womb! She has regular sleep-wake cycles now.", tip: "She's often most active when maminka is trying to rest!" },
  { dayTitle: "Bone development", sizeEmoji: "🦴", funFact: "Her bones are hardening inside the womb, but her skull stays soft and flexible for delivery.", tip: "Calcium-rich foods help her bone growth." },
  { dayTitle: "Grip strength", sizeEmoji: "🤝", funFact: "She's practicing her grip in the womb, grabbing the umbilical cord! Soon she'll squeeze your finger.", tip: "The grasp reflex will be one of the first things you notice." },
  { dayTitle: "Skin smoothing", sizeEmoji: "✨", funFact: "Her wrinkly skin is smoothing out as she gains more fat underneath. Getting cuter by the day!", tip: "Vernix (protective coating) is keeping her skin soft in the amniotic fluid." },
  { dayTitle: "Position check", sizeEmoji: "🔄", funFact: "She might be turning head-down inside the womb, getting ready for the big day!", tip: "Walking and gentle movement can encourage good positioning." },
  { dayTitle: "Lung maturity", sizeEmoji: "🌬️", funFact: "Her lungs are maturing rapidly inside, each day in the womb makes them stronger.", tip: "Full lung maturity usually happens around week 36." },
  { dayTitle: "Facial expressions", sizeEmoji: "😊", funFact: "She can smile, frown, and make faces inside the womb! Her facial muscles are well developed.", tip: "An ultrasound might catch her smiling if you're lucky!" },
  { dayTitle: "Toenails growing", sizeEmoji: "🦶", funFact: "Her tiny toenails are now visible and growing in there!", tip: "Baby toenails are incredibly soft and delicate." },
  { dayTitle: "Responding to touch", sizeEmoji: "🤲", funFact: "Press gently on maminka's belly, she might push back from inside!", tip: "Gentle belly massage can be soothing for both maminka and mimino." },
  { dayTitle: "Swallowing practice", sizeEmoji: "💧", funFact: "She swallows about a liter of amniotic fluid per day, practicing for feeding after birth!", tip: "This helps develop her digestive system." },
  { dayTitle: "Temperature prep", sizeEmoji: "🌡️", funFact: "She's developing the ability to regulate her own body temperature for life outside.", tip: "Brown fat is accumulating to help keep her warm after birth." },
  { dayTitle: "Nerve connections", sizeEmoji: "⚡", funFact: "Billions of nerve connections are forming in her brain. She's becoming more coordinated!", tip: "Her movements inside might feel more deliberate and less jerky now." },
  { dayTitle: "Eye color forming", sizeEmoji: "💙", funFact: "Her eye color is developing in the womb, though it might change after birth!", tip: "Most babies are born with blue/grey eyes, final color settles by 6-12 months." },
  { dayTitle: "Antibody transfer", sizeEmoji: "💉", funFact: "Important antibodies are passing from maminka to her right now through the placenta.", tip: "This passive immunity protects her in the first months of life." },
  { dayTitle: "Hormone teamwork", sizeEmoji: "⚗️", funFact: "Her adrenal glands are producing hormones that will help with the transition to life outside.", tip: "These hormones also help her lungs prepare for breathing air." },
  { dayTitle: "Growing eyelashes", sizeEmoji: "👁️", funFact: "She has beautiful tiny eyelashes now, growing inside the womb!", tip: "Eyelashes will protect her eyes from dust and light." },
  { dayTitle: "First poop forming", sizeEmoji: "🟤", funFact: "Her first poop (meconium) is forming inside, dark green and totally normal!", tip: "Usually passes within the first 24-48 hours after she's born." },
  { dayTitle: "Getting cozy", sizeEmoji: "🏠", funFact: "She's running out of room in there! Movements might feel different, more rolls than kicks.", tip: "Still count movements, they should stay consistent even if they feel different." },
  { dayTitle: "Protective coating", sizeEmoji: "🧴", funFact: "She's coated in vernix caseosa, a creamy white substance protecting her skin in the amniotic fluid.", tip: "Some of this coating may stay on at birth, it's great for her skin!" },
  { dayTitle: "Unique prints", sizeEmoji: "🖐️", funFact: "Her unique fingerprints are fully formed, one of a kind in the whole universe!", tip: "Fingerprints form between weeks 17-20 and never change." },
  { dayTitle: "Silent rehearsal", sizeEmoji: "😢", funFact: "She's practicing crying silently inside the womb! The motions are there but no sound yet.", tip: "You'll hear the real thing very soon after she arrives!" },
  { dayTitle: "Iron storage", sizeEmoji: "🔴", funFact: "She's storing iron from maminka, building up enough to last her first 6 months.", tip: "Iron-rich foods are important for maminka right now." },
  { dayTitle: "Sucking practice", sizeEmoji: "👍", funFact: "She can coordinate sucking and swallowing inside the womb, essential for feeding after birth.", tip: "She might even be sucking her thumb in there right now!" },
  { dayTitle: "Kidney function", sizeEmoji: "💧", funFact: "Her kidneys are fully functional inside and producing urine into the amniotic fluid.", tip: "She pees into the amniotic fluid, and swallows it again! Circle of life." },
  { dayTitle: "Day & night", sizeEmoji: "🌙", funFact: "She's developing a sense of day and night based on maminka's hormones and light.", tip: "Keeping a regular schedule now might help her sleep patterns after birth." },
  { dayTitle: "Liver developing", sizeEmoji: "🫀", funFact: "Her liver is storing iron and getting ready to process bilirubin after birth.", tip: "Slight jaundice is common in newborns, usually resolves on its own." },
  { dayTitle: "Almost there!", sizeEmoji: "🎉", funFact: "She's nearly full-term, getting ready to meet isä and maminka!", tip: "Make sure the hospital bag is packed, holka can come any time!" },
  { dayTitle: "Final countdown", sizeEmoji: "🚀", funFact: "She's in launch position inside! Head down and preparing for the grand entrance.", tip: "Rest when you can, soon sleep will be a luxury!" },
  { dayTitle: "Smooth skin", sizeEmoji: "🛡️", funFact: "The lanugo (fine body hair) is mostly gone, replaced by smooth baby skin underneath the vernix.", tip: "Some lanugo might remain on her shoulders and back at birth." },
  { dayTitle: "Strong heartbeat", sizeEmoji: "❤️", funFact: "Her heart beats about 110-160 times per minute inside the womb, twice as fast as maminka's!", tip: "You can hear it with a stethoscope or doppler at checkups." },
  { dayTitle: "Reflexes ready", sizeEmoji: "🦵", funFact: "All her newborn reflexes are developing: rooting, sucking, startle, and grasp!", tip: "These reflexes will be essential for survival and feeding after birth." },
  { dayTitle: "Gut prep", sizeEmoji: "🌀", funFact: "Her intestines are filled with meconium and ready for her first feeding after birth.", tip: "Colostrum (first milk) will help her pass meconium." },
  { dayTitle: "Voice recognition", sizeEmoji: "🎤", funFact: "She already prefers maminka's voice! Studies show babies in the womb react more to their mother's voice.", tip: "Reading books aloud now builds early language connections." },
  { dayTitle: "Weight gain mode", sizeEmoji: "📈", funFact: "She's gaining about 30 grams per day now inside, filling out those cheeks!", tip: "Most weight gain in the last weeks is fat for warmth." },
  { dayTitle: "Lung surfactant", sizeEmoji: "🫧", funFact: "Her lungs are producing plenty of surfactant, the substance that keeps air sacs open for breathing.", tip: "This is one of the last organs to fully mature." },
  { dayTitle: "Flexible skull", sizeEmoji: "🧩", funFact: "Her skull bones can overlap slightly to fit through the birth canal, clever design by nature!", tip: "The fontanelles (soft spots) won't fully close until about 18 months." },
  { dayTitle: "Calm hormones", sizeEmoji: "🧘", funFact: "She's producing cortisol, which will help her lungs work after birth.", tip: "When maminka is relaxed, baby gets a dose of feel-good hormones too." },
  { dayTitle: "Due date mystery", sizeEmoji: "📅", funFact: "Only about 5% of babies arrive on their exact due date, she'll come when she's ready!", tip: "The due date is just an estimate, normal range is 37-42 weeks." },
  { dayTitle: "Building immunity", sizeEmoji: "🏥", funFact: "She's stockpiling antibodies from maminka for the outside world, nature's first vaccine!", tip: "Skin-to-skin contact right after birth will boost her immune system even more." },
  { dayTitle: "Perfect temperature", sizeEmoji: "🧣", funFact: "She's kept at a perfect 37.5°C inside, warmer and cozier than any room!", tip: "After birth, skin-to-skin is the best way to keep her warm." },
  { dayTitle: "Neural pathways", sizeEmoji: "🌐", funFact: "Her brain weighs about 400g now and has over 100 billion neurons forming connections!", tip: "Early bonding after birth helps strengthen these neural connections." },
  { dayTitle: "Womb gymnastics", sizeEmoji: "🤸", funFact: "She's been practicing stretching, yawning, and rolling for months in there!", tip: "These movements help her muscles and joints develop properly." },
  { dayTitle: "Sweet preference", sizeEmoji: "🍬", funFact: "She already prefers sweet flavors, she swallows more amniotic fluid when it tastes sweet!", tip: "This preference helped our ancestors choose ripe, safe fruits." },
  { dayTitle: "Memory forming", sizeEmoji: "🎵", funFact: "She can remember sounds she hears regularly, she'll recognize familiar songs after birth!", tip: "Play the same lullaby each night, she'll find it calming after she arrives." },
  { dayTitle: "Perfect timing", sizeEmoji: "⏰", funFact: "Her body is producing hormones that will help trigger labor when she's truly ready.", tip: "Trust the process, she knows when it's time to come out!" },
  { dayTitle: "Blood production", sizeEmoji: "🩸", funFact: "Her bone marrow has fully taken over blood cell production inside the womb.", tip: "She has about 300 ml of blood, and it's being renewed constantly." },
  { dayTitle: "Microbiome prep", sizeEmoji: "🦠", funFact: "Her digestive tract is sterile now, it'll be colonized by helpful bacteria during birth!", tip: "This microbiome kickstart is one of birth's hidden superpowers." },
  { dayTitle: "Light curiosity", sizeEmoji: "🔦", funFact: "She turns toward bright light outside maminka's belly, curious about the world already!", tip: "Her pupils can now dilate and constrict in response to light." },
  { dayTitle: "So many bones", sizeEmoji: "🦴", funFact: "She has about 300 bones right now (adults have 206)! Some will fuse together as she grows.", tip: "This process of bones fusing takes years to complete." },
  { dayTitle: "Peaceful floating", sizeEmoji: "🌊", funFact: "She's floating in about 800ml of amniotic fluid, her own little swimming pool in there.", tip: "Amniotic fluid is completely renewed every 3 hours!" },
  { dayTitle: "Hormone exchange", sizeEmoji: "🔬", funFact: "She and maminka constantly exchange hormones through the placenta, true teamwork!", tip: "When maminka is happy, baby gets a dose of feel-good hormones too." },
  { dayTitle: "Vocal cords ready", sizeEmoji: "🗣️", funFact: "Her vocal cords are fully formed inside, ready for that first magical cry when she arrives!", tip: "A strong first cry means lungs are working perfectly." },
  { dayTitle: "Two languages", sizeEmoji: "🗣️", funFact: "Research shows babies can distinguish languages in the womb, she knows Finnish and Czech sound different!", tip: "OPOL (one parent, one language) works beautifully for bilingual families." },
  { dayTitle: "Placenta power", sizeEmoji: "🌳", funFact: "The placenta is an incredible organ: it filters, feeds, and protects her every second of pregnancy.", tip: "By now the placenta weighs about 500g and processes 500ml of blood per minute!" },
  { dayTitle: "Nesting instinct", sizeEmoji: "🏡", funFact: "While she nests inside the womb, maminka might be nesting outside, cleaning and organizing!", tip: "The nesting instinct is real and a sign the body is preparing for baby." },
  { dayTitle: "Growth spurt", sizeEmoji: "📏", funFact: "She might gain 200g this week alone, growing at incredible speed inside the womb!", tip: "Maminka eating well and resting helps support this rapid growth." },
  { dayTitle: "Eyebrow game", sizeEmoji: "🤨", funFact: "She has eyebrows now! Though they might be very light and thin at birth.", tip: "Baby eyebrows often fill in during the first year." },
  { dayTitle: "Multitasking baby", sizeEmoji: "🎯", funFact: "She can coordinate hand movements with sucking inside the womb, multitasking already!", tip: "This coordination is essential for feeding after she's born." },
  { dayTitle: "Best of both worlds", sizeEmoji: "🌍", funFact: "Half Finnish, half Czech, 100% loved. She's going to have the best of two amazing cultures!", tip: "She'll grow up with sauna, forests, castles, and koláče! 🇫🇮🇨🇿" },
  { dayTitle: "Stretching out", sizeEmoji: "🧘‍♀️", funFact: "She stretches her limbs regularly inside, maminka might see a foot shape pressing on the belly!", tip: "Feeling distinct body parts means she's getting big!" },
  { dayTitle: "Bilingual brain", sizeEmoji: "🧒", funFact: "Her brain is already wiring for two languages! Bilingual babies develop stronger cognitive flexibility.", tip: "Speaking both Finnish and Czech to the belly is already helping!" },
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
