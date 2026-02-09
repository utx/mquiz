// src/data/questions.js

export const QUESTIONS = {
  math: {
    easy: [
      { q: "What is 150 + 250?", o: ["300","350","400","450"], a: 2 },
      { q: "What is 9 × 8?", o: ["71","72","73","81"], a: 1 },
      { q: "How many sides does a hexagon have?", o: ["5","6","7","8"], a: 1 },
      { q: "What is half of 150?", o: ["70","75","80","85"], a: 1 },
      { q: "What is 1000 - 350?", o: ["550","600","650","750"], a: 2 },
      { q: "Which number is even?", o: ["27","31","49","52"], a: 3 },
      { q: "How many minutes in 2 hours?", o: ["100","120","140","160"], a: 1 },
      { q: "What is 45 ÷ 5?", o: ["7","8","9","10"], a: 2 },
      { q: "How many grams in a kilogram?", o: ["10","100","1000","10000"], a: 2 },
      { q: "What is double 45?", o: ["80","85","90","95"], a: 2 },
      { q: "Which is largest?", o: ["0.5","0.1","0.9","0.09"], a: 2 },
      { q: "20 + 20 + 20 + 20 is the same as:", o: ["20 × 4","20 × 5","40 + 20","100"], a: 0 },
      { q: "What is the perimeter of a square with side 5cm?", o: ["10cm","15cm","20cm","25cm"], a: 2 },
      { q: "How many degrees in a right angle?", o: ["45","90","180","360"], a: 1 },
      { q: "Round 4.7 to the nearest whole number.", o: ["4","4.5","5","10"], a: 2 }
    ],
    medium: [
      { q: "What is 12 squared (12²)?", o: ["124","144","164","122"], a: 1 },
      { q: "What is 15% of 200?", o: ["15","20","25","30"], a: 3 },
      { q: "Solve for x: 3x + 5 = 20", o: ["3","4","5","6"], a: 2 },
      { q: "Which fraction is equivalent to 0.75?", o: ["1/2","2/3","3/4","4/5"], a: 2 },
      { q: "A train leaves at 2:15 and arrives at 3:45. How long is the trip?", o: ["1h 15m","1h 30m","1h 45m","2h"], a: 1 },
      { q: "What is the area of a rectangle 8cm by 6cm?", o: ["14cm²","28cm²","48cm²","64cm²"], a: 2 },
      { q: "What is the next prime number after 7?", o: ["9","10","11","13"], a: 2 },
      { q: "If 1kg of apples costs $4, how much for 2.5kg?", o: ["$8","$9","$10","$12"], a: 2 },
      { q: "Simplify 12/16", o: ["2/3","3/4","4/5","6/8"], a: 1 },
      { q: "What is 5 cubed (5³)?", o: ["15","25","100","125"], a: 3 },
      { q: "What is the mean (average) of 4, 6, and 8?", o: ["5","6","7","8"], a: 1 },
      { q: "How many milliliters in 1.5 Liters?", o: ["150","1500","15000","15"], a: 1 },
      { q: "Roman numeral XV is:", o: ["10","12","15","20"], a: 2 },
      { q: "25 + 25 × 2 = ?", o: ["100","75","50","125"], a: 1 },
      { q: "How many zeros in one million?", o: ["5","6","7","8"], a: 1 }
    ],
    hard: [
      { q: "What is the square root of 81?", o: ["7","8","9","11"], a: 2 },
      { q: "Solve: 50 - 3 × 10 + 5", o: ["475","25","35","15"], a: 1 },
      { q: "What is 1/3 + 1/6?", o: ["2/9","1/2","2/3","5/6"], a: 1 },
      { q: "A triangle has angles 40° and 60°. What is the third angle?", o: ["60°","80°","90°","100°"], a: 1 },
      { q: "If x = 4 and y = 3, what is 2x - y?", o: ["3","5","6","8"], a: 1 },
      { q: "What is 20% of 50% of 100?", o: ["10","20","25","50"], a: 0 },
      { q: "A car travels 60km in 45 mins. What is its speed?", o: ["60km/h","70km/h","80km/h","90km/h"], a: 2 },
      { q: "Which number is a factor of both 24 and 32?", o: ["6","8","12","16"], a: 1 },
      { q: "What is -5 + 12?", o: ["-7","7","-17","17"], a: 1 },
      { q: "Calculate the circumference: Diameter = 10 (use π≈3.14)", o: ["15.7","31.4","62.8","314"], a: 1 },
      { q: "There are 5 red and 3 blue balls. Probability of picking blue?", o: ["3/5","3/8","5/8","1/3"], a: 1 },
      { q: "What is 2 to the power of 5 (2⁵)?", o: ["10","16","32","64"], a: 2 },
      { q: "An angle greater than 90° but less than 180° is called:", o: ["Acute","Right","Obtuse","Reflex"], a: 2 },
      { q: "Which is not a prime number?", o: ["29","31","37","39"], a: 3 },
      { q: "0.2 × 0.3 =", o: ["0.6","0.06","6.0","0.5"], a: 1 }
    ]
  },
  science: {
    easy: [
      { q: "What planet do we live on?", o: ["Mars","Venus","Earth","Jupiter"], a: 2 },
      { q: "Which animal lays eggs?", o: ["Dog","Cat","Chicken","Cow"], a: 2 },
      { q: "What is the center of an atom?", o: ["Nucleus","Shell","Electron","Core"], a: 0 },
      { q: "H2O is the chemical formula for:", o: ["Air","Water","Fire","Ice"], a: 1 },
      { q: "Which organ pumps blood?", o: ["Brain","Lungs","Heart","Stomach"], a: 2 },
      { q: "Plants get energy from:", o: ["Wind","The Sun","Rocks","Insects"], a: 1 },
      { q: "What forces pulls objects to the ground?", o: ["Magnetic","Friction","Gravity","Elastic"], a: 2 },
      { q: "How many legs does a spider have?", o: ["6","8","10","12"], a: 1 },
      { q: "Which is a gas?", o: ["Wood","Water","Oxygen","Ice"], a: 2 },
      { q: "The sun is a:", o: ["Planet","Star","Moon","Asteroid"], a: 1 }
    ],
    medium: [
      { q: "What gas do plants absorb from the air?", o: ["Oxygen","Carbon Dioxide","Nitrogen","Helium"], a: 1 },
      { q: "Which part of the plant absorbs water?", o: ["Leaves","Stem","Roots","Flower"], a: 2 },
      { q: "What is the hardest natural mineral?", o: ["Gold","Iron","Diamond","Quartz"], a: 2 },
      { q: "Which planet is known as the Red Planet?", o: ["Venus","Jupiter","Saturn","Mars"], a: 3 },
      { q: "What covers most of the Earth's surface?", o: ["Forest","Desert","Water","Ice"], a: 2 },
      { q: "The process of liquid turning into gas is:", o: ["Melting","Freezing","Condensation","Evaporation"], a: 3 },
      { q: "Which animal is a mammal?", o: ["Shark","Frog","Dolphin","Eagle"], a: 2 },
      { q: "What protects the brain?", o: ["Ribcage","Skull","Spine","Pelvis"], a: 1 },
      { q: "Light travels faster than:", o: ["Sound","Electricity","Radio waves","Everything"], a: 0 },
      { q: "Which rock floats in water?", o: ["Granite","Pumice","Marble","Slate"], a: 1 }
    ],
    hard: [
      { q: "What is the chemical symbol for Gold?", o: ["Gd","Go","Au","Ag"], a: 2 },
      { q: "Newton's First Law is about:", o: ["Gravity","Inertia","Action/Reaction","Friction"], a: 1 },
      { q: "Which part of the cell contains DNA?", o: ["Mitochondria","Nucleus","Ribosome","Membrane"], a: 1 },
      { q: "What is the most abundant gas in our atmosphere?", o: ["Oxygen","Carbon Dioxide","Nitrogen","Hydrogen"], a: 2 },
      { q: "Photosynthesis takes place in the:", o: ["Nucleus","Chloroplasts","Mitochondria","Cell Wall"], a: 1 },
      { q: "What is the pH of pure water?", o: ["5","7","9","10"], a: 1 },
      { q: "Which planet has the most moons?", o: ["Jupiter","Saturn","Uranus","Neptune"], a: 1 },
      { q: "Kinetic energy is the energy of:", o: ["Height","Motion","Heat","Light"], a: 1 },
      { q: "What type of rock is formed from lava?", o: ["Sedimentary","Metamorphic","Igneous","Fossil"], a: 2 },
      { q: "The smallest bone in the body is in the:", o: ["Hand","Foot","Nose","Ear"], a: 3 }
    ]
  },
  soccer: {
    easy: [
      { q: "How many players are on the field for one team?", o: ["9","10","11","12"], a: 2 },
      { q: "Which position guards the net?", o: ["Striker","Midfielder","Defender","Goalkeeper"], a: 3 },
      { q: "What happens if you touch the ball with your hands?", o: ["Goal","Foul","Point","Nothing"], a: 1 },
      { q: "What color card means 'Sent Off'?", o: ["Yellow","Blue","Red","Green"], a: 2 },
      { q: "How long is a standard soccer match?", o: ["45 mins","60 mins","90 mins","100 mins"], a: 2 },
      { q: "What do you call 3 goals by one player?", o: ["Home Run","Touchdown","Hat-trick","Strikeout"], a: 2 },
      { q: "The big tournament held every 4 years is:", o: ["The Super Bowl","The World Cup","The World Series","The Olympics"], a: 1 }
    ],
    medium: [
      { q: "Who won the 2022 Men's World Cup?", o: ["France","Brazil","Argentina","Germany"], a: 2 },
      { q: "Which country has won the most World Cups?", o: ["Germany","Italy","Argentina","Brazil"], a: 3 },
      { q: "What does VAR stand for?", o: ["Video Assistant Referee","Very Angry Ref","Visual Area Review","Video Action Replay"], a: 0 },
      { q: "Which club does Erling Haaland play for (2024)?", o: ["Real Madrid","Man City","Liverpool","Bayern Munich"], a: 1 },
      { q: "Where is the penalty spot located?", o: ["6 yards","12 yards","18 yards","Halfway"], a: 1 },
      { q: "A corner kick is taken when:", o: ["Defense kicks ball over goal line","Attack kicks ball over goal line","Ball goes over side line","A foul occurs"], a: 0 },
      { q: "Which player is known as 'The Flea' (La Pulga)?", o: ["Ronaldo","Neymar","Messi","Mbappe"], a: 2 }
    ],
    hard: [
      { q: "Which country hosted the 2010 World Cup?", o: ["Brazil","Germany","South Africa","Russia"], a: 2 },
      { q: "Who is the all-time top scorer for Portugal?", o: ["Figo","Eusebio","Ronaldo","Deco"], a: 2 },
      { q: "What is a 'False 9'?", o: ["A bad referee","A striker who drops deep","A goalkeeper who scores","A defender who attacks"], a: 1 },
      { q: "Which team is nicknamed 'The Red Devils'?", o: ["Liverpool","Arsenal","Man Utd","Bayern Munich"], a: 2 },
      { q: "Who won the first ever World Cup in 1930?", o: ["Brazil","Italy","Uruguay","Argentina"], a: 2 },
      { q: "How many teams play in the English Premier League?", o: ["18","20","22","24"], a: 1 },
      { q: "The 'Ballon d'Or' is awarded to:", o: ["Best Goalkeeper","Best Young Player","Best Player of the Year","Top Scorer"], a: 2 }
    ]
  },
  trivia: {
    easy: [
      { q: "What is the fastest land animal?", o: ["Lion","Horse","Cheetah","Leopard"], a: 2 },
      { q: "Which fruit is yellow and curved?", o: ["Apple","Banana","Orange","Pear"], a: 1 },
      { q: "What is the capital of France?", o: ["London","Berlin","Rome","Paris"], a: 3 },
      { q: "How many days in a Leap Year?", o: ["364","365","366","367"], a: 2 },
      { q: "Who lives in a pineapple under the sea?", o: ["Patrick","SpongeBob","Squidward","Sandy"], a: 1 },
      { q: "Which superhero climbs walls?", o: ["Batman","Superman","Spider-Man","Iron Man"], a: 2 },
      { q: "What do bees make?", o: ["Milk","Jam","Honey","Syrup"], a: 2 }
    ],
    medium: [
      { q: "Which country invented pizza?", o: ["USA","France","Italy","Spain"], a: 2 },
      { q: "What is the largest ocean?", o: ["Atlantic","Indian","Arctic","Pacific"], a: 3 },
      { q: "Who wrote 'Harry Potter'?", o: ["Roald Dahl","J.K. Rowling","C.S. Lewis","J.R.R. Tolkien"], a: 1 },
      { q: "What is the currency of Japan?", o: ["Dollar","Euro","Yen","Won"], a: 2 },
      { q: "Which famous ship sank in 1912?", o: ["Titanic","Lusitania","Santa Maria","Mayflower"], a: 0 },
      { q: "How many continents are there?", o: ["5","6","7","8"], a: 2 },
      { q: "What is the hardest material in the human body?", o: ["Bone","Nail","Tooth Enamel","Skin"], a: 2 }
    ],
    hard: [
      { q: "What is the smallest country in the world?", o: ["Monaco","Malta","Vatican City","San Marino"], a: 2 },
      { q: "Which year did World War II end?", o: ["1943","1944","1945","1946"], a: 2 },
      { q: "What is the capital of Canada?", o: ["Toronto","Vancouver","Montreal","Ottawa"], a: 3 },
      { q: "Who painted the Mona Lisa?", o: ["Van Gogh","Picasso","Da Vinci","Michelangelo"], a: 2 },
      { q: "How many keys are on a standard piano?", o: ["66","77","88","99"], a: 2 },
      { q: "Which element has the symbol 'O'?", o: ["Gold","Oxygen","Osmium","Orange"], a: 1 },
      { q: "In Greek mythology, who is the King of Gods?", o: ["Poseidon","Hades","Apollo","Zeus"], a: 3 }
    ]
  },
  flags: {
    easy: [
      { q: "Which country is this? 🇺🇸", o: ["UK","USA","France","Canada"], a: 1, big: true },
      { q: "Which country is this? 🇨🇦", o: ["Canada","Japan","Peru","Austria"], a: 0, big: true },
      { q: "Which country is this? 🇯🇵", o: ["China","Korea","Japan","Vietnam"], a: 2, big: true },
      { q: "Which country is this? 🇬🇧", o: ["Australia","USA","UK","New Zealand"], a: 2, big: true },
      { q: "Which country is this? 🇫🇷", o: ["Italy","Russia","Netherlands","France"], a: 3, big: true },
      { q: "Which country is this? 🇮🇹", o: ["Mexico","Italy","Hungary","Ireland"], a: 1, big: true },
      { q: "Which country is this? 🇩🇪", o: ["Belgium","Germany","Poland","Netherlands"], a: 1, big: true },
      { q: "Which country is this? 🇨🇳", o: ["Vietnam","Turkey","China","Spain"], a: 2, big: true },
      { q: "Which country is this? 🇦🇺", o: ["UK","New Zealand","Fiji","Australia"], a: 3, big: true },
      { q: "Which country is this? 🇧🇷", o: ["Argentina","Brazil","Chile","Portugal"], a: 1, big: true }
    ],
    medium: [
      { q: "Which country is this? 🇪🇸", o: ["Portugal","Spain","Italy","Greece"], a: 1, big: true },
      { q: "Which country is this? 🇰🇷", o: ["Japan","North Korea","South Korea","Thailand"], a: 2, big: true },
      { q: "Which country is this? 🇮🇳", o: ["India","Ireland","Iran","Indonesia"], a: 0, big: true },
      { q: "Which country is this? 🇨🇭", o: ["Sweden","Switzerland","Norway","Denmark"], a: 1, big: true },
      { q: "Which country is this? 🇬🇷", o: ["Cyprus","Israel","Greece","Finland"], a: 2, big: true },
      { q: "Which country is this? 🇦🇷", o: ["Uruguay","Argentina","Brazil","Paraguay"], a: 1, big: true },
      { q: "Which country is this? 🇿🇦", o: ["Kenya","Nigeria","Ghana","South Africa"], a: 3, big: true },
      { q: "Which country is this? 🇸🇪", o: ["Sweden","Norway","Finland","Denmark"], a: 0, big: true },
      { q: "Which country is this? 🇹🇷", o: ["Tunisia","Turkey","Pakistan","Morocco"], a: 1, big: true },
      { q: "Which country is this? 🇲🇽", o: ["Italy","Mexico","Ireland","Iran"], a: 1, big: true }
    ],
    hard: [
      { q: "Which country is this? 🇳🇵", o: ["Nepal","Bhutan","India","Tibet"], a: 0, big: true },
      { q: "Which country is this? 🇪🇬", o: ["Syria","Iraq","Egypt","Yemen"], a: 2, big: true },
      { q: "Which country is this? 🇳🇿", o: ["Australia","UK","Fiji","New Zealand"], a: 3, big: true },
      { q: "Which country is this? 🇵🇹", o: ["Spain","Brazil","Portugal","Belarus"], a: 2, big: true },
      { q: "Which country is this? 🇳🇬", o: ["Nigeria","Niger","Kenya","Zimbabwe"], a: 0, big: true },
      { q: "Which country is this? 🇻🇳", o: ["China","Vietnam","Morocco","Turkey"], a: 1, big: true },
      { q: "Which country is this? 🇫🇮", o: ["Norway","Sweden","Finland","Iceland"], a: 2, big: true },
      { q: "Which country is this? 🇮🇱", o: ["Israel","Greece","Cyprus","Jordan"], a: 0, big: true },
      { q: "Which country is this? 🇸🇦", o: ["UAE","Saudi Arabia","Oman","Qatar"], a: 1, big: true },
      { q: "Which country is this? 🇨🇱", o: ["Texas","Chile","Cuba","Puerto Rico"], a: 1, big: true }
    ]
  },
  kotlc: {
    easy: [
      { q: "Who is Sophie's bodyguard?", o: ["Ro","Bo","Sandor","Grizel"], a: 2 },
      { q: "What color is a Registry pendant?", o: ["Gold","Silver","Crystal","Black"], a: 2 },
      { q: "What animal is Iggy?", o: ["Imp","Gremlin","Gnome","Murcat"], a: 0 },
      { q: "Which word is a NOUN? 'Dex fixed the gadget.'", o: ["Dex","Fixed","The","Fast"], a: 0 },
      { q: "Grammar: 'Sophie ___ to Foxfire yesterday.'", o: ["Go","Gone","Went","Going"], a: 2 },
      { q: "Inference: 'Fitz stomped his foot and crossed his arms.' He is:", o: ["Happy","Angry","Sleepy","Cold"], a: 1 },
      { q: "What is Keefe's favorite thing to do?", o: ["Study","Skip school","Clean his room","Follow rules"], a: 1 },
      { q: "Who is Biana's brother?", o: ["Keefe","Dex","Fitz","Tam"], a: 2 },
      { q: "What color are Sophie's eyes?", o: ["Blue","Green","Brown","Gold"], a: 2 }
    ],
    medium: [
      { q: "What is the name of the Black Swan's collective?", o: ["The Forkle","The Collective","The Neverseen","The Council"], a: 1 },
      { q: "Grammar: Identify the ADJECTIVE. 'Keefe has messy hair.'", o: ["Keefe","Has","Messy","Hair"], a: 2 },
      { q: "Inference: 'Biana vanished the moment she saw the mess.' She is:", o: ["Brave","Helpful","Avoiding trouble","Tired"], a: 2 },
      { q: "What ability does Tam have?", o: ["Hydrokinetic","Shade","Flasher","Mesmer"], a: 1 },
      { q: "What is the capital of the Elvin world?", o: ["Eternalia","Atlantis","Lumenaria","Ravagog"], a: 0 },
      { q: "Grammar: '___ going to the healing center.'", o: ["There","Their","They're","They"], a: 2 },
      { q: "Who is the Councillor of Empathy?", o: ["Oralie","Kenric","Bronte","Alina"], a: 0 },
      { q: "Inference: 'Dex checked the lock three times.' He is being:", o: ["Careless","Cautious","Silly","Rude"], a: 1 },
      { q: "Which twin is the Hydrokinetic?", o: ["Tam","Linh","Biana","Marella"], a: 1 }
    ],
    hard: [
      { q: "What is the name of Sophie's biological mother?", o: ["Edaline","Oralie","Vespera","Gisela"], a: 1 },
      { q: "Grammar: 'The alicorn flew ___ the clouds.' (Preposition)", o: ["Above","Red","Fast","Bird"], a: 0 },
      { q: "Inference: 'Sandor's voice went up an octave.' He is:", o: ["Relaxed","Happy","Panicked/Stressed","Asleep"], a: 2 },
      { q: "What represents the Neverseen?", o: ["A Swan","A Eye","A Hand","A Star"], a: 1 },
      { q: "Grammar: Which sentence is correct?", o: ["Keefe runned fast.","Keefe ran fast.","Keefe run fast.","Keefe running fast."], a: 1 },
      { q: "Who killed Councillor Kenric?", o: ["Fintan","Brant","Gethen","Ruy"], a: 0 },
      { q: "Inference: 'Sophie tugged out a loose eyelash.' She is:", o: ["Bored","Anxious/Nervous","Excited","Cold"], a: 1 },
      { q: "What is the substance that suppresses abilities?", o: ["Quintessence","Limpkins","Melder","Ability Restrictor"], a: 3 },
      { q: "Grammar: 'Silveny is the ___ alicorn in the world.'", o: ["Sparkly","Sparklier","Sparkliest","Sparkle"], a: 2 }
    ]
  },
  english: {
    easy: [
      { q: "Which word is a verb? 'The dog ran fast.'", o: ["The","Dog","Ran","Fast"], a: 2 },
      { q: "Plural of 'Mouse'?", o: ["Mouses","Mice","Mic","Mices"], a: 1 },
      { q: "Opposite of 'Difficult'?", o: ["Hard","Easy","Complex","Tough"], a: 1 },
      { q: "Rhymes with 'Blue'?", o: ["Blow","Shoe","Slow","Cow"], a: 1 },
      { q: "Choose the correct spelling:", o: ["Frend","Freind","Friend","Frind"], a: 2 }
    ],
    medium: [
      { q: "Identify the Adverb: 'He spoke softly.'", o: ["He","Spoke","Softly","None"], a: 2 },
      { q: "Past tense of 'Bring'?", o: ["Brang","Brought","Bringed","Bring"], a: 1 },
      { q: "A story about a person's life written by themself:", o: ["Biography","Autobiography","Fiction","Novel"], a: 1 },
      { q: "Which is a homophone for 'Sea'?", o: ["Say","See","Saw","Sue"], a: 1 },
      { q: "Choose the correct spelling:", o: ["Because","Becuse","Becuase","Beacuse"], a: 0 }
    ],
    hard: [
      { q: "What is a Simile?", o: ["Comparing using 'like' or 'as'","Giving human traits to objects","An exaggeration","A sound word"], a: 0 },
      { q: "Identify the Conjunction: 'I wanted to go, but I was tired.'", o: ["Wanted","Go","But","Tired"], a: 2 },
      { q: "Which word means 'Very happy'?", o: ["Melancholy","Ecstatic","Fatigued","Indifferent"], a: 1 },
      { q: "Choose the correct spelling:", o: ["Neccessary","Necesary","Necessary","Neccesary"], a: 2 },
      { q: "'The wind howled' is an example of:", o: ["Metaphor","Personification","Alliteration","Simile"], a: 1 }
    ]
  }
};
