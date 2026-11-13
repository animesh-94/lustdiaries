export interface TopicFaq {
  question: string;
  answer: string;
}

export interface TopicSection {
  heading: string;
  body: string;
  bullets?: string[];
}

export interface WellnessTopic {
  slug: string;
  title: string;
  shortTagline: string;
  externalUrl?: string;
  image: string;
  imageAlt: string;
  readTime: string;
  hasPainGlow?: boolean;
  summary: string;
  keyTakeaways: string[];
  sections: TopicSection[];
  faqs: TopicFaq[];
}

export const TOPIC_REDIRECT_URLS: Record<string, string> = {
  "sleep-issues": "https://staminnite.com/sleeping-pills/",
  "stress-and-tension": "https://staminnite.com/wakefulness/",
  "pain-management": "https://staminnite.com/pain-killers/",
};

export function getTopicHref(slug: string): string {
  return TOPIC_REDIRECT_URLS[slug] ?? `/topics/${slug}`;
}

export function isExternalHref(href: string): boolean {
  return href.startsWith("http://") || href.startsWith("https://");
}

export const WELLNESS_TOPICS: WellnessTopic[] = [
  {
    slug: "relationship-issues",
    title: "Relationship Issues",
    shortTagline: "Strengthen communication, repair trust, and navigate rough patches with empathy.",
    image: "/images/topic-relationship.jpg",
    imageAlt: "Couple sitting side by side looking at a golden sunset over calm ocean waves",
    readTime: "6 min read",
    summary:
      "Every lasting relationship moves through seasons of distance, miscommunication, or external strain. Learning how to listen without defensiveness and repair after conflict turns friction into deeper understanding.",
    keyTakeaways: [
      "Healthy couples aren't conflict-free—they are skilled at repairing quickly after misunderstandings.",
      "Speaking from personal feelings ('I feel...') keeps partners out of defensive cycles.",
      "Small daily bids for attention matter more than rare grand gestures.",
    ],
    sections: [
      {
        heading: "Breaking Unhelpful Conflict Loops",
        body: "When couples feel unheard, conversations quickly escalate into criticism or quiet withdrawal. Slowing the tempo helps both people feel safe enough to be honest.",
        bullets: [
          "Notice when heart rates spike and take a mutually agreed 20-minute reset break",
          "Replace 'you always/never' generalizations with concrete, present-tense feelings",
          "Listen to understand your partner's underlying need before crafting a rebuttal",
        ],
      },
      {
        heading: "Rebuilding Daily Emotional Connection",
        body: "Trust and warmth grow through consistent small moments of showing up.",
        bullets: [
          "Practice a 10-minute daily check-in about stress outside the relationship.",
          "Express specific appreciation for small thoughtful actions every day.",
          "Consider couples guidance proactively—not only as a last resort.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is arguing a sign that a relationship is failing?",
        answer:
          "Not necessarily. Disagreements are normal when two people share a life; what predicts long-term strength is mutual respect and willingness to repair afterward.",
      },
      {
        question: "What can we do when we feel like roommates?",
        answer:
          "Reintroduce novelty and dedicated one-on-one time without logistics talk—even a 30-minute evening walk or coffee date shifts energy.",
      },
      {
        question: "When is couples counseling helpful?",
        answer:
          "Anytime you feel stuck repeating the same argument or want neutral communication tools before resentment builds.",
      },
    ],
  },
  {
    slug: "sleep-issues",
    title: "Sleep Issues",
    shortTagline: "Restore deeper sleep cycles for sharper mood, hormone balance, and closeness.",
    image: "/images/topic-sleep.jpg",
    imageAlt: "Couple resting peacefully together in bright white cotton bedding",
    readTime: "5 min read",
    summary:
      "Restorative sleep is the silent foundation of emotional patience, hormone regulation, and physical energy. Even modest improvements to evening light, temperature, and nervous-system wind-down can transform how you feel each morning.",
    keyTakeaways: [
      "Deep sleep regulates testosterone, cortisol balance, and emotional resilience.",
      "Bedroom temperature, consistent wake times, and screen-free wind-down cues anchor circadian rhythm.",
      "Partner sleep alignment—like managing light, noise, or bedding—reduces shared nighttime friction.",
    ],
    sections: [
      {
        heading: "Why Sleep Quality Shapes Intimacy & Mood",
        body: "When sleep is fragmented or consistently short, cortisol stays elevated and irritability rises while natural desire drops. Restoring consistent slow-wave and REM sleep supports both physical vitality and emotional warmth.",
        bullets: [
          "Elevated evening cortisol suppresses natural relaxation and morning energy",
          "Sleep debt lowers patience and empathy during everyday partner conversations",
          "Consistent circadian timing helps synchronize shared rest and connection",
        ],
      },
      {
        heading: "Building a Calm Evening Wind-Down",
        body: "Treat the last 45 minutes before bed as a gentle transition rather than an abrupt stop.",
        bullets: [
          "Keep bedroom temperatures cool (around 65–68°F / 18–20°C) with breathable cotton layers.",
          "Dim overhead lighting an hour before sleep and keep phones charging outside reach.",
          "Anchor your wake-up time within a 30-minute window even on weekends.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does catching up on weekends fix weekday sleep debt?",
        answer:
          "Weekend recovery helps slightly, but large swings in wake time can create social jetlag. Steady daily sleep-wake cues yield deeper, steadier energy.",
      },
      {
        question: "What if my partner and I have different sleep schedules?",
        answer:
          "Try sharing a brief 15-minute screen-free wind-down together before the earlier sleeper turns in, and use separate blankets or reading lamps to avoid disturbing each other.",
      },
      {
        question: "When should persistent insomnia be evaluated?",
        answer:
          "If trouble falling or staying asleep lasts longer than a month or involves loud snoring and daytime exhaustion, consult a primary care or sleep specialist.",
      },
    ],
  },
  {
    slug: "stress-and-tension",
    title: "Stress & Tension",
    shortTagline: "Clear mental overload and calm your nervous system for healthier daily balance.",
    image: "/images/topic-stress.jpg",
    imageAlt: "Man seated at a calm sunlit desk resting his forehead on his hand",
    readTime: "5 min read",
    summary:
      "Chronic stress keeps the body locked in a low-grade fight-or-flight state, draining focus, tightening muscles, and crowding out intimacy. Simple nervous-system resets help shift you back into calm presence.",
    keyTakeaways: [
      "Chronic stress diverts energy away from rest, digestion, and romantic responsiveness.",
      "Short 3-minute physiological resets are easier to sustain than hour-long routines.",
      "Naming stressors aloud with a partner prevents unspoken tension from spilling into disconnection.",
    ],
    sections: [
      {
        heading: "How Everyday Stress Shows Up in the Body",
        body: "Even when deadlines pass, unresolved mental load lingers in tight shoulders, shallow breathing, restless thoughts, and emotional withdrawal.",
        bullets: [
          "Persistent jaw, neck, or shoulder tightness by mid-afternoon",
          "Difficulty switching off work thoughts when spending time at home",
          "Lowered patience, mental fog, or sudden drop in physical desire",
        ],
      },
      {
        heading: "Practical Nervous-System Resets",
        body: "Downshifting your stress response works best through brief physical cues that signal safety to the brain.",
        bullets: [
          "Use the physiological sigh (two quick nasal inhales followed by a long slow exhale) for 60 seconds.",
          "Create a 10-minute decompression buffer between work and evening interactions.",
          "Step outside for natural daylight and movement without podcasts or notifications.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can stress directly lower libido and energy?",
        answer:
          "Yes. High cortisol signals the body to prioritize survival over rest and intimacy. Lowering baseline stress typically restores natural interest over time.",
      },
      {
        question: "What is a fast way to calm down before bed?",
        answer:
          "Write tomorrow's top three tasks on paper to offload mental loops, then pair warm lighting with slow 4-second inhales and 6-second exhales.",
      },
      {
        question: "How do I know if stress needs professional support?",
        answer:
          "If anxiety, burnout, or low mood interferes with work, relationships, or sleep for several weeks, speaking with a therapist or physician is strongly worthwhile.",
      },
    ],
  },
  {
    slug: "pain-management",
    title: "Pain Management",
    shortTagline: "Practical strategies for easing lower-back strain, stiffness, and daily discomfort.",
    image: "/images/topic-pain.jpg",
    imageAlt: "Person seen from behind holding lower back in a calm neutral sunlit room",
    readTime: "6 min read",
    hasPainGlow: true,
    summary:
      "Lingering lower-back aches and muscular stiffness silently erode sleep, posture, mood, and physical confidence. Gentle mobility, ergonomic awareness, and targeted recovery habits can help restore comfortable movement.",
    keyTakeaways: [
      "Prolonged sitting tightens hip flexors and loads the lumbar spine unnecessarily.",
      "Gentle daily motion almost always supports recovery better than extended bed rest.",
      "Red-flag symptoms like radiating numbness or sudden weakness warrant prompt clinical review.",
    ],
    sections: [
      {
        heading: "Why Lower-Back & Muscular Pain Lingers",
        body: "Most everyday back discomfort stems from repetitive posture load, weakened core stabilizers, and stress-driven muscle guarding rather than serious structural damage.",
        bullets: [
          "Hours hunched over desks or phones without micro-breaks",
          "Tight glutes, hamstrings, and hip flexors pulling on the pelvis",
          "Unsupportive mattresses or sleeping positions that twist the lower spine",
        ],
      },
      {
        heading: "Gentle Daily Relief Habits",
        body: "Consistent low-impact movement brings warm circulation to stiff tissue and calms protective muscle spasms.",
        bullets: [
          "Stand and walk for 2–3 minutes every 45 minutes of desk work.",
          "Practice gentle cat-cow, pelvic tilts, or supine knee-to-chest stretches morning and night.",
          "Place a supportive pillow under your knees when sleeping on your back, or between your knees on your side.",
        ],
      },
    ],
    faqs: [
      {
        question: "Should I use heat or ice for tight lower back muscles?",
        answer:
          "Ice can calm sudden acute inflammation in the first 24–48 hours after a strain, while gentle warmth relaxes chronic muscular tightness and stiffness.",
      },
      {
        question: "Is resting in bed all day helpful for back pain?",
        answer:
          "Usually no. Light, pain-free walking and gentle mobility keep blood flowing and help most mechanical back aches recover faster than prolonged inactivity.",
      },
      {
        question: "When should pain be evaluated by a doctor immediately?",
        answer:
          "Seek prompt medical care if back pain follows a fall, causes numbness or tingling down the legs, or comes with fever or unexplained weakness.",
      },
    ],
  },
];

export function getTopicBySlug(slug: string): WellnessTopic | undefined {
  return WELLNESS_TOPICS.find((topic) => topic.slug === slug);
}

