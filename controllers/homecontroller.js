let c = 0;
let T1 = 1100, T2 = 1107, T3 = 2173, T4 = 3925, T5 = 4572, T6 = 6872, T7 = 5497, T8 = 3461, T9 = 7431, T10 = 3418;
// let L1 = "OBH Basketball Court";
let C1 = '/video/C1.mov'
let C2 = '/video/C2.mov'
let C3 = '/video/C3.mov'
let C4 = '/video/C4.mov'
let C5 = '/video/C5.mov'
let C6 = '/video/C6.mp3'
let C7 = '/video/C7.mov'
async function counter() {
    c++;
    console.log(`Count: ${c}`);
    return;
}
module.exports.home = async (req, res) => {
    try {
        let loader = 1;
        console.log("1");
        counter();
        res.render("home1", {
            title: "Kaalrav 2024", loader
        });
    } catch (err) {
        console.log(err);
    }
};
module.exports.home2 = async (req, res) => {
    try {
        let loader = 0;
        console.log("0")
        counter();
        res.render("home1", {
            title: "Kaalrav 2024", loader
        });
    } catch (err) {
        console.log(err);
    }
};
module.exports.events = async (req, res) => {
    try {
        counter();
        res.render("events", {
            title: "Kaalrav - Events",
        });
    } catch (err) {
        console.log(err);
    }
};
module.exports.artists = async (req, res) => {
    try {
        counter();
        res.render("artists", {
            title: "Kaalrav - Artists",
        });
    } catch (err) {
        console.log(err);
    }
};
module.exports.sponsors = async (req, res) => {
    try {
        counter();
        res.render("sponsors", {
            title: "Kaalrav - Sponsors",
        });
    } catch (err) {
        console.log(err);
    }
};
module.exports.gallery = async (req, res) => {
    try {
        counter();
        res.render("gallery", {
            title: "Kaalrav - Gallery",
        });
    } catch (err) {
        console.log(err);
    }
};
module.exports.aboutus = async (req, res) => {
    try {
        counter();
        res.render("aboutus", {
            title: "Kaalrav - About Us",
        });
    } catch (err) {
        console.log(err);
    }
};

module.exports.solosingingeastern = async (req, res) => {
    try {
        counter();
        let tit = " Eastern Singing (Solo)";
        let time = "(Day 0) 10:00 - 11:00";
        let c1 = "This is where raw vocal talent and artistic expression take center stage.As the spotlight dims and the stage comes alive, participants have the opportunity to captivate the audience with their melodious voices and soulful renditions";
        let c2 = "With these rules and criteria in mind, participants are encouraged to showcase their vocal talent aartistic expression in the Solo Singing Competition Kaalrav. Let your voice shine and leave a lastiimpression on the audience!";
        let tp = "Minimum of 3 members and a maximum of 8 members.";
        let pt = "3 to 5 minutes per performance.";
        let pl = "1 participant (Solo)";
        let rules = ["Participants must perform solo; no group performances are allowed", "Backtrack Submissions: Backtrack submissions must be made by the specified deadline.", "Performances must be of an Eastern genre. This includes but is not limited to traditional Eastern music styles such as Hindustani classical, Carnatic classical, Qawwali, Ghazal, or any other culturally rooted Eastern musical form."];
        let judge = ["Vocal Quality (40 points)", "Stage Presence (30 points)", "Interpretation of the Song (30 points)"];

        res.render("eventpage", {
            title: "Kaalrav - Solo Singing Eastern", c1, time, tp, pt, c2, rules, tit, pl, judge
        });
    } catch (err) {
        console.log(err);
    }
};
module.exports.solosingingwestern = async (req, res) => {
    try {
        counter();
        let tit = "Western Singing (Solo)";
        let time = "(Day 0) 11:00 - 12:00";
        let c1 = "Here's where solo singing virtuosos are invited to dazzle the audience with their vocal brilliance. Set amidst a vibrant atmosphere, this esteemed event promises an electrifying showcase of musical prowess and unforgettable performances";
        let c2 = "With these rules and criteria in place, participants are encouraged to showcase their vocal talent and musical prowess in the Western Solo Singing Competition. Let your voice shine and leave an unforgettable impression on the audience!";
        let pt = "3 to 5 minutes per performance.";
        let pl = "1 participant (Solo)";
        let rules = ["Performers can showcase any number of Western songs within the designated time frame.",
            "Accompaniment is permitted, either with one instrumental accompanist or through a backing track. However, judging will focus solely on vocal performance.",
            "Participants must adhere to a code of conduct, avoiding misconduct, obscenity, or the use of foul language."
        ];
        let judge = ["Vocal Quality (40 points)", "Stage Presence (30 points)", "Interpretation of the Song (30 points)"];

        res.render("eventpage", {
            title: "Kaalrav - Solo Singing Western", c1, time, pt, c2, rules, tit, pl, judge
        });
    } catch (err) {
        console.log(err);
    }
};
module.exports.mrandmskaalrav = async (req, res) => {
    try {
        counter();
        let tit = "Mr. and Ms. Kaalrav";
        let time = "(Day 1) 12:00 - 2:00";
        let c1 = "Prepare to witness the pinnacle of charm, grace, and charisma as we embark on the search for the ultimate representatives of Kaalrav. Our prestigious competition transcends mere outer beauty, delving into the depths of inner qualities such as poise, intelligence, and personality. Join us as contestants illuminate the stage with their elegance, talent, and wit, all vying for the coveted titles of Mr. & Ms. Kaalrav. Be part of the excitement as we crown the shining stars who will embody the very spirit and essence of our college fest!";
        let c2 = "Join us in celebrating the embodiment of charm, grace, and charisma.";
        let pl = "Solo";
        let pt = "";
        let rules = ["Participants will compete individually across a series of rounds, including appearance, confidence, stage presence, talent, and responses to questions.", "Winners will be determined by a panel of judges based on their overall performance throughout the competition.", "Any form of inappropriate behavior or language will lead to immediate disqualification."];
        let judge = ["Physical Appearance and Stage Presence (30 points)", "Talent Showcase (30 points)", "Confidence and Poise (20 points)", "Responses to Questions (20 points)"];
        res.render("eventpage", {
            title: "Kaalrav - Mr. and Ms. Kaalrav", c1, time, pt, c2, rules, tit, pl, judge
        });
    } catch (err) {
        console.log(err);
    }
};
module.exports.solodancingeastern = async (req, res) => {
    try {
        counter();
        let tit = "Solo Dancing (Eastern)";
        let time = "(Day 1) 10:00 - 11:00";
        let c1 = "Solo dancers are invited to dazzle the stage with their Eastern dance moves and steal the spotlight.";
        let c2 = "Participants are encouraged to let their talent shine and leave a lasting impression with their captivating Eastern dance performances in this thrilling Solo Eastern Dance Competition";
        let pt = "5 minutes";
        let pl = "Solo participant";
        let rules = ["Costumes and props are allowed, but they should not hinder the performer's movements or pose any safety risks.", "Any inappropriate gestures, attire, or behavior,including but not limited to offensive themes, explicit movements, or disrespectful gestures, will result in immediate disqualification."];
        let judge = ["Technique and Execution (40 points)", " Expression and Emotion (30 points)", "Stage Presence and Performance (30 points)"];

        res.render("eventpage", {
            title: "Kaalrav - Solo Dancing Eastern", c1, time, pt, c2, rules, tit, pl, judge
        });
    } catch (err) {
        console.log(err);
    }
};
module.exports.solodancingwestern = async (req, res) => {
    try {
        counter();
        let tit = "Solo Dancing (Western)";
        let time = "(Day 1) 11:00 - 12:00";
        let c1 = "Solo dancers are invited to dazzle the stage with their Western dance moves and steal the spotlight.";
        let c2 = "Participants are encouraged to let their talent shine and leave a lasting impression with their captivating Western dance performances in this thrilling Solo Western Dance Competition!";
        let pt = "5 minutes";
        let pl = "Solo participant";
        let rules = ["Costumes and props are allowed, but they should not hinder the performer's movements or pose any safety risks.", "Any inappropriate gestures, attire, or behavior,including but not limited to offensive themes, explicit movements, or disrespectful gestures, will result in immediate disqualification."];
        let judge = ["Technique and Execution (40 points)", "Expression and Emotion (30 points)", "Stage Presence and Performance (30 points)"];

        res.render("eventpage", {
            title: "Kaalrav - Solo Dancing Western", c1, time, pt, c2, rules, tit, pl, judge
        });
    } catch (err) {
        console.log(err);
    }
};
module.exports.fashionshow = async (req, res) => {
    try {
        counter();
        let tit = "Fashion Show";
        let time = "(Day 1) 04:30 - 06:30";
        let c1 = "Prepare to dazzle the runway and captivate the audience with your flair for fashion in our fashion show event. From glamorous couture to cutting-edge streetwear, this is your opportunity to showcase your unique style and creativity. Join us as models, sashay down the catwalk showcasing the latest trends, innovative designs, and personal expressions of fashion. Whether you're a designer, a model, or simply a fashion enthusiast, this is your moment to shine in the spotlight and leave a lasting impression.";
        let c2 = "";
        let pt = "5 to 10 Minutes.";
        let pl = "Minimum of 5 members and a maximum of 10 members.";
        let rules = ["The team must include stylists, designers and models.", "The team will showcase a collection of outfits that reflect their chosen theme, style or inspiration", "Participants must adhere to the guidelines regarding attire, presentation and conduct during the fashion show", "Winner will be determined based on creativity, originality, and overall presentation of their collection", "Theme should be strictly Bollywood."];
        let judge = ["Creativity and Innovation (30 points)", "Expression and Emotion (30 points)", "Stage Presence and Performance (30 points)"];

        res.render("eventpage", {
            title: "Kaalrav - Fashion Show", c1, time, pt, c2, rules, tit, pl, judge
        });
    } catch (err) {
        console.log(err);
    }
};
module.exports.treasurehunt = async (req, res) => {
    try {
        counter();
        let tit = "Treasure Hunt";
        let time = "(Day 1) 11:00 - 1:00";
        let c1 = "In the spirit of the Bollywood theme, we present a thrilling Treasure Hunt (Hera Pheri). Your mission, should you choose to accept it, is to steal the prestigious Film Fare award from KAALRAV'24 organizers in a series of challenging rounds.";
        let c2 = "Prepare for a cinematic adventure like no other at KAALRAV'24 - where Bollywood meets real-life excitement in the Treasure Hunt of a lifetime! May the most cunning and strategic team emerge victorious in this epic quest for the Film Fare award!";
        let pt = "";
        let pl = " Upto 4 Members in a team";
        let rules = ["Each team must consist of exactly four members.", "Only the top 10 teams will proceed to the main event.", "Teams must follow their assigned guide throughout the event and use the unique team name provided.", "Clues must be collected discreetly, without raising suspicion from the vigilant Mumbai Police.", "Breaking any rules will result in disqualification, so tread carefully and strategically."];
        let judge = [];

        res.render("eventpage", {
            title: "Kaalrav - Treasure Hunt", c1, time, pt, c2, rules, tit, pl, judge
        });
    } catch (err) {
        console.log(err);
    }
};
module.exports.creativewriting = async (req, res) => {
    try {
        counter();
        let tit = "Creative Wrriting";
        let time = "(Day 1) 01:00 - 02:00";
        let c1 = "Get ready to unleash your creativity and immerse yourself in the enchanting world of Bollywood through the art of writing. In this thrilling competition, participants will have the opportunity to showcase their literary prowess as they craft captivating essays inspired by the magic of Indian cinema.";
        let c2 = "Join us as we celebrate the rich tapestry of Bollywood through the art of creative writing. Let your imagination soar, and may the best writer emerge victorious in the Bolly Write competition!";
        let pt = "1 Hour to write";
        let pl = "Solo Participation";
        let rules = ["All entries must be original creations of the participants.", "Essays must adhere to the maximum word limit of 1000 words.", "Participants must manage their time effectively within the one-hour timeframe allocated for writing their essays.", "Essays must be written in English.", "Participants must be ready to perform when called and adhere to the time limit strictly."];
        let judge = ["Creativity (40 points)", "Coherence (20 points)", "Originality (20 points)", "Adherence to Topic (20 points)"];

        res.render("eventpage", {
            title: "Kaalrav - Creative Writing", c1, time, pt, c2, rules, tit, pl, judge
        });
    } catch (err) {
        console.log(err);
    }
};
module.exports.debate = async (req, res) => {
    try {
        counter();
        let tit = "Debate";
        let time = "(Day 1) 01:00 - 02:00";
        let c1 = "Step into the world of Bollywood and engage in spirited discussions at our Bolly-Debate! Explore film criticism, industry trends, performances, and social impact. Whether you're a cinephile, critic, or simply passionate about Indian cinema, voice your views, challenge perspectives, and ignite discussions. Join us for an enlightening and entertaining debate celebrating the diversity and influence of Bollywood!";
        let c2 = "Get ready to showcase your passion for Bollywood and contribute to insightful discussions on its diverse facets at the Bolly-Debate!";
        let pt = "3 minutes";
        let pl = "Solo Participation";
        let rules = ["The debate will consist of 2 rounds.", "Participants will be assigned specific debate topic(s) related to the Indian entertainment industry.", "Each participant will be given 3+1 minutes to present their arguments.", "Participants must support their arguments with relevant evidence, examples, and analyses.", "While respectful and constructive dialogue is welcomed, and even strongly encouraged, any kind of ad hominem attacks or derogatory remarks are strictly prohibited, and will result in immediate disqualification from the debate.", "The debate will be strictly moderated by a panel of judges to ensure fairness and adherence to the rules."];
        let judge = ["Content and Argumentation (10 points)", "Research and Analysis (5 points)", "Delivery and Presentation (10 points)", "Rebuttal and Engagement (10 points)", "Overall Impact and Contribution to the Debate (10 points)", "Decorum (5 points)"];

        res.render("eventpage", {
            title: "Kaalrav - Debate", c1, time, pt, c2, rules, tit, pl, judge
        });
    } catch (err) {
        console.log(err);
    }
};
module.exports.quiz = async (req, res) => {
    try {
        counter();
        let tit = "Bolly Quiz";
        let time = "(Day 1) 02:30 - 04:00";
        let c1 = "Welcome to the Bolly Quiz, where your knowledge of Bollywood will be put to the test! Get ready to immerse yourself in the vibrant world of Indian cinema as we journey through iconic films, legendary actors, unforgettable songs, and everything in between. Whether you're a die-hard Bollywood fan or just looking to have some fun, this quiz is for you. So, gather your friends, brush up on your Bollywood trivia, and let's see who will emerge as the ultimate Bollywood aficionado! Let the quizzing begin!";
        let c2 = "Let the quizzing begin!";
        let pt = "Up to 3 members";
        let pl = "";
        let rules = ["Participants will engage in a series of rounds comprising multiple-choice questions, picture based and rapid fire rounds.", "Questions will cover a wide range of topics, including bollywood history, movies, actors, songs, dialogues and more.", "Participants must answer the questions within the allotted time to earn points."];
        let judge = [];

        res.render("eventpage", {
            title: "Kaalrav - Debate", c1, time, pt, c2, rules, tit, pl, judge
        });
    } catch (err) {
        console.log(err);
    }
};
module.exports.egames = async (req, res) => {
    try {
        counter();
        let tit = "E-Games";
        let time = "(Day 1) 10:00 - 05:00 & (Day 2) 10:00 - 05:00";
        let c1 = "Gear up for adrenaline-pumping action and intense competition in our E-Games Tournament. Whether you’re a master tactician in Valorant, a skilled marksman in BGMI(Battlegrounds Mobile India), or a strategic genius in Mobile Legends, this is your chance to showcase your gaming prowess and dominate the virtual battlefield. Join fellow gamers from around the globe in this epic showdown of skill,strategy and teamwork";
        let c2 = "Join us and be part of the ultimate gaming experience. Get ready to unleash your skills, forge new friendships, and make unforgettable memories. Welcome to E-Games where the adventure never ends!";
        let pt = "Solo or Team(based on game)";
        let pl = "";
        let rules = ["Participants can compete solo or as a team depending on the game.",
            " Matches will be supervised by referees or moderators who will enforce the rules, resolve disputes, and ensure fair play.",
            "Unsportsmanlike behavior, cheating, hacking, exploiting bugs, or engaging in any form of misconduct will result in immediate disqualification and potential disciplinary action.",
            "Participants are responsible for providing their own gaming equipment, including computers, consoles, controllers, headsets, and any other peripherals required to compete.",
            "Scoring systems, code of conduct, rules & regulations and tournament format.  may vary depending on the game."
        ];
        let judge = [];

        res.render("eventpage", {
            title: "Kaalrav - E-Games", c1, time, pt, c2, rules, tit, pl, judge
        });
    } catch (err) {
        console.log(err);
    }
};
module.exports.grpDEast = async (req, res) => {
    try {
        counter();
        let tit = "Group Dance Eastern";
        let time = "(Day 1) 12:00 - 01:00";
        let c1 = "Get ready to mesmerize the audience with your synchronized moves and captivating performances in the Eastern Dance Showcase! Showcasing the beauty and grace of Eastern dance styles, this event invites dance ensembles to come together, infuse their routines with energy and precision, and ignite the stage with their synchronized choreography.";
        let c2 = "With these rules and criteria in mind, dance ensembles are encouraged to showcase their talent, unity, and passion for Eastern dance forms in this electrifying showcase!        ";
        let pt = "5 to 8 minutes each";
        let pl = "Minimum: 3 members, maximum: 10 members";
        let rules = ["Only traditional and contemporary styles are allowed.",
            "Costumes and props are allowed.",
            "Any inappropriate gestures, attire, or behavior will result in immediate disqualification."
        ];
        let judge = ["Synchronization and Timing (40 points)",
            "Choreography and Creativity (30 points)",
            "Stage Presence and Performance Quality (30 points)"
        ];

        res.render("eventpage", {
            title: "Kaalrav - Group Dance Eastern", c1, time, pt, c2, rules, tit, pl, judge
        });
    } catch (err) {
        console.log(err);
    }
};
module.exports.grpDWest = async (req, res) => {
    try {
        counter();
        let tit = "Group Dance Western";
        let time = "(Day 1) 01:00 - 02:00";
        let c1 = "Prepare to dazzle the audience with your Western dance routines in the Western Dance Showcase! Gather your group, infuse your performance with energy and style, and showcase your synchronized choreography on stage. Let your unity and precision shine in this electrifying display of Western dance forms.";
        let c2 = "With these rules and criteria in mind, dance ensembles are encouraged to showcase their talent, unity, and passion for Western dance forms in this electrifying showcase!";
        let pl = "Minimum of 3 members, maximum of 10 members.";
        let pt = "5 to 8 minutes each";
        let rules = ["Groups must consist of a minimum of 3 members and a maximum of 10 members. Costumes and props are allowed.",
            "Any inappropriate gestures, attire, or behaviour will result in immediate disqualification.",
            "Only western dance forms would be allowed"
        ];
        let judge = ["Synchronization and Timing (40 points)",
            "Choreography and Creativity (30 points)",
            "Stage Presence and Performance Quality (30 points)"
        ];

        res.render("eventpage", {
            title: "Kaalrav - Group Dance Western", c1, time, pt, c2, rules, tit, pl, judge
        });
    } catch (err) {
        console.log(err);
    }
};
module.exports.battleofbands = async (req, res) => {
    try {
        counter();
        let tit = "Battle Of Bands";
        let time = "(Day 2) 03:00 - 05:00";
        let c1 = "We invite all musical talents to showcase their skills and captivate the audience in an electrifying atmosphere of music and entertainment. Whether you rock the stage or serenade the crowd with acoustic melodies, this event promises to be an unforgettable experience. ";
        let c2 = "Prepare to rock the stage or serenade the crowd with your unique sound and leave the audience in awe with your captivating performance at this highly anticipated event! ";
        let pl = "15 minutes per performance";
        let pt = "Minimum of 3 members and a maximum of 8 members.";
        let rules = ["Rock or Acoustic style allowed.",
            "Original compositions or covers are permitted.",
            "Profanity or offensive content in lyrics or behaviour will result in immediate disqualification."];
        let judge = ["Musicality and Technical Skill (40 Points)",
            "Stage Presence and Audience Engagement (30 Points)",
            "Originality and Creativity (30 Points)"
        ];

        res.render("eventpage", {
            title: "Kaalrav - Battle of Bands", c1, time, pt, c2, rules, tit, pl, judge
        });
    } catch (err) {
        console.log(err);
    }
};
module.exports.rapping = async (req, res) => {
    try {
        counter();
        let tit = "Rapping";
        let time = "(Day 1) 03:00 - 04:00";
        let c1 = "Talented rappers are invited to showcase their lyrical prowess and command the stage with their poetic flow. This esteemed event promises an electrifying atmosphere and provides participants with the opportunity to leave an indelible mark with their performance.";
        let c2 = "With these rules and criteria in mind, participants are encouraged to bring their A-game and wow the audience with their lyrical prowess in this thrilling Rap Battle Competition!";
        let pl = "Solo Participation";
        let pt = " 3 minutes each";
        let rules = ["Backing tracks are permitted, but the focus will be solely on the lyrical delivery and performance of the participant.",
            " Any use of inappropriate language or content, including but not limited to explicit lyrics, hate speech, or offensive themes, will result in immediate disqualification."
        ];
        let judge = ["Lyricism and Wordplay (40 points)",
            "Delivery and Flow (30 points)",
            "Stage Presence and Performance (30 points)"
        ];

        res.render("eventpage", {
            title: "Kaalrav - Rapping", c1, time, pt, c2, rules, tit, pl, judge
        });
    } catch (err) {
        console.log(err);
    }
};
module.exports.beatboxing = async (req, res) => {
    try {
        counter();
        let tit = "Beatboxing";
        let time = "(Day 1) 01:00 - 02:00";
        let c1 = "We're calling all beatboxing maestros to showcase their rhythmic talents and wow the crowd in a vibrant atmosphere of competition. Take center stage, unleash your beats, and leave a lasting impression with your jaw-dropping skills at this prestigious event!";
        let c2 = "Get ready to showcase your rhythmic talents and leave the crowd in awe with your beatboxing prowess at this prestigious event!";
        let pl = "1 participant (Solo)";
        let pt = "3 minutes ";
        let rules = ["No external instruments or pre-recorded tracks are allowed; the performance must be entirely acapella.",
            "Any form of misconduct, obscenity, or foul language will result in immediate disqualification."];
        let judge = ["Rhythm and Timing (40 Points)",
            " Creativity and Originality (30 Points)",
            "Technical Skill and Precision (30 Points)"];

        res.render("eventpage", {
            title: "Kaalrav - Beatboxing", c1, time, pt, c2, rules, tit, pl, judge
        });
    } catch (err) {
        console.log(err);
    }
};
module.exports.poetry = async (req, res) => {
    try {
        counter();
        let tit = "Poetry Slam";
        let time = "(Day 2) 11:00 - 12:00";
        let c1 = "A call to all poets to step into the spotlight to ignite the stage with their powerful words and captivating performances. This electrifying event celebrates the art of storytelling and the power of language, inviting individuals to share their passion, stories, and truth through poetry.";
        let c2 = "Poets are urged to step forward into the limelight and allow their words to set the stage ablaze in this vibrant and empowering Poetry Slam. It's time to make your voice heard and let your message echo throughout the world!";
        let pl = "Solo Participation";
        let pt = " 3 minutes each";
        let rules = ["Poets can explore a wide range of themes and topics, encouraging personal expression and authenticity.",
            " Props and costumes are allowed but should not detract from the spoken word performance.",
            " Any form of hate speech, discrimination, or offensive language will result in immediate disqualification."
        ];
        let judge = ["Originality and Creativity (30 points)",
            "Performance and Delivery (30 points)",
            "Impact and Audience Engagement (40 points)"
        ];

        res.render("eventpage", {
            title: "Kaalrav - Poetry Slam", c1, time, pt, c2, rules, tit, pl, judge
        });
    } catch (err) {
        console.log(err);
    }
};
module.exports.dumbcharades = async (req, res) => {
    try {
        counter();
        let tit = "Dumb Charades";
        let time = "(Day 2) 12:00 - 01:30";
        let c1 = " Silence is golden and gestures speak volumes! This fun-filled guessing game challenges teams to communicate movie titles through pantomime, igniting creativity and laughter. Join us in this exhilarating game where non-verbal prowess takes center stage.";
        let c2 = "Teams are encouraged to showcase their non-verbal prowess and strategic thinking in this exciting game of Dumb Charades. Let the fun begin!";
        let pl = "4 Membered team";
        let pt = "";
        let rules = ["Participants must act out movie titles using gestures, without speaking or making sounds.",
            "Time limits will be enforced for each round to keep the game moving smoothly and maintain excitement.",
            "Any form of verbal communication, including whispers or hints, is strictly prohibited. "];
        let judge = ["Clarity of Gestures (30 points)",
            "Creativity in Acting (30 points)",
            " Team Coordination and Strategy (40 points)"
        ];

        res.render("eventpage", {
            title: "Kaalrav - Dumb Charades", c1, time, pt, c2, rules, tit, pl, judge
        });
    } catch (err) {
        console.log(err);
    }
};
module.exports.streetplay = async (req, res) => {
    try {
        counter();
        let tit = "Street Play";
        let time = "(Day 2) 10:00 - 11:00";
        let c1 = "Theatre ensembles are called upon to take to the streets and ignite change through the power of drama. This vibrant event transforms the outdoor stage into a platform for social commentary, laughter, and inspiration, urging participants to craft narratives that resonate with the audience and leave an indelible mark on their hearts.";
        let c2 = "Theatre groups are encouraged to join in this vibrant celebration of creativity and activism through street theatre. Let your voices be heard, your stories resonate, and your performance inspire change!";
        let pl = "Minimum 6 and maximum 12";
        let pt = "15 minutes each";
        let rules = ["Performances must be in the form of a street play, addressing social or contemporary issues.",
            " Costumes and props are allowed but should be easy to set up and dismantle for outdoor performances",
            " Any inappropriate content or behavior, including but not limited to offensive language, gestures, or themes, will result in immediate disqualification. "
        ];
        let judge = ["Content and Relevance (30 points)",
            "Acting and Performance Quality (30 points)",
            "Creativity and Impact (40 points)"
        ];

        res.render("eventpage", {
            title: "Kaalrav - Street Play", c1, time, pt, c2, rules, tit, pl, judge
        });
    } catch (err) {
        console.log(err);
    }
};
module.exports.trifecta = async (req, res) => {
    try {
        counter();
        let tit = "Trifecta";
        let time = "(Day 1) 03:00 - 04:30";
        let c1 = "Trifecta Games is an annual event, hosted by SMIT Model United Nations, as an integral part of our inter-institution cultural festival, Kaalrav. The event would comprise of three gruelling games which would test the skill, creativity and wit of the participant! The events are: Courtroom Chronicles, Literary Pong, Dungeons and Dragons Lite.";
        let c2 = "";
        let pl = "Maximum 4 per team";
        let pt = "";
        let rules = [];
        let judge = ["Game 1: Award points for clarity, argumentation, and overall presentation,humour, innovative tactics, or using pop culture references in legal arguments (as long as they stay relevant).", "Game 2: points to be given on the delivery, presentation and overall presentation of the topic assigned.", "Game 3: The judges may mark the players out of 5 based on the words formed by the player."];

        res.render("eventpage", {
            title: "Kaalrav - Trifecta", c1, time, pt, c2, rules, tit, pl, judge
        });
    } catch (err) {
        console.log(err);
    }
};
module.exports.minutemasti = async (req, res) => {
    try {
        counter();
        let tit = "Minute Masti";
        let time = "(Day 2) 02:00 - 03:00";
        let c1 = "With just 60 seconds on the clock, this is your chance to shine and leave a lasting impression. Whether you're a singer, dancer, magician, comedian or you possess any other special skill, seize the moment and showcase your talent to the world. Join us for this exhilarating showcase of individual creativity and Entertainment!";
        let c2 = "";
        let pl = "1 minute per performance.";
        let pt = "Solo Participation";
        let rules = ["Each participant will have exactly 1 minute to perform their talent.", "Participant can showcase and talent they possess,including but not limited to singing, dancing, magic, comedy, juggling etc.", "Props or equipment required for the performance should be minimal and easily set up within the allotted time.", "Performances must be suitable for the general audience and free from any offensive or inappropriate content", "Participants must be ready to perform when called and adhere to the time limit strictly."];
        let judge = [];

        res.render("eventpage", {
            title: "Kaalrav - Minute Masti", c1, time, pt, c2, rules, tit, pl, judge
        });
    } catch (err) {
        console.log(err);
    }
};




module.exports.inputcode = async (req, res) => {
    try {
        counter();
        console.log("params", req.params.id)
        const locationid = req.params.id;
        if (locationid == "L1") {
            
        }
        res.render("treasurehunt", {
            title: "Kaalrav - Treasure Hunt", locationid
        });
    } catch (err) {
        console.log(err);
    }
};
// module.exports.inputcode = async (req, res) => {
//     try {
//         counter();
//         console.log(req.body)

//         res.render("treasurehunt", {
//             title: "Kaalrav - Treasure Hunt",
//         });
//     } catch (err) {
//         console.log(err);
//     }
// };



// L1 Dispenary
// L2 OppositeLibrary
// L3 Froyo
// L4 DanceRoom
// L5 Finance Counter
// L6 Eblock
// L7 Security Gate

module.exports.codeverify = async (req, res) => {
    try {
        counter();

        console.log("params", req.params.id)

        console.log(req.body)
        const Lcode = req.body.Lcode
        const code = req.body.code
        let videolink = 'https://www.youtube.com/watch?v=zE7Pwgl6sLA';
        let vl = 0;
        if(Lcode == 'L1' && (code == "R31100" || code == "R33418")){ //R3
            videolink = C1;
            vl = 1;
        }
        if(Lcode == 'L2' && (code == "R31107" || code == "R37431")){ //R3
            videolink = C2;
            vl = 1;
        }
        if(Lcode == 'L3' && (code == "R22173" )){ //R2
            videolink = C3;
            vl = 1;
        }
        if(Lcode == 'L4' && (code == "R43925" || code == "R44572")){ //R3
            videolink = C4;
            vl = 1;
        }
        if(Lcode == 'L5' && (code == "R41107" || code == "R47431")){ //R3
            videolink = C5;
            vl = 1;
        }
        if(Lcode == 'L6' && (code == "R15497" )){ //R1
            videolink = C6;
            vl = 1;
        }
        if(Lcode == 'L7' && (code == "R51100" || code == "R51107" || code == "R52173" || code == "R53925" || code == "R54572" || code == "R56872" || code == "R55497" || code == "R53461" || code == "R57431" || code == "R53418")){ //R5
            videolink = C7;
            vl = 1;
        }
        
        res.render("treasurehunthint", {
            title: "Kaalrav - Treasure Hunt", videolink, vl
        });
    } catch (err) {
        console.log(err);
    }
};