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
  "erectile-dysfunction": "https://staminnite.com/mens-health/",
  "sleep-issues": "https://staminnite.com/sleeping-pills/",
  "stress-and-tension": "https://staminnite.com/wakefulness/",
  "pain-management": "https://staminnite.com/pain-killers/",
  "intimate-wellness": "https://staminnite.com/mens-health/",
};

export function getTopicHref(slug: string): string {
  return TOPIC_REDIRECT_URLS[slug] ?? `/topics/${slug}`;
}

export function isExternalHref(href: string): boolean {
  return href.startsWith("http://") || href.startsWith("https://");
}

export const WELLNESS_TOPICS: WellnessTopic[] = [
  {
    slug: "erectile-dysfunction",
    title: "Erectile Dysfunction",
    shortTagline: "Judgment-free guidance on vascular health, confidence, and partner support.",
    image: "/images/topic-ed.jpg",
    imageAlt: "Couple sitting warmly together holding hands in supportive conversation",
    readTime: "6 min read",
    summary:
      "Occasional difficulty achieving or maintaining an erection is far more common than most people realize. Understanding the physical, hormonal, and emotional factors behind it helps remove stigma and points toward practical, evidence-informed solutions.",
    keyTakeaways: [
      "Cardiovascular health, sleep quality, and stress hormones all directly affect blood flow and arousal.",
      "Performance anxiety often creates a self-reinforcing loop that open partner communication can break.",
      "Consistent lifestyle adjustments and clinician-guided options offer safe, effective pathways forward.",
    ],
    sections: [
      {
        heading: "Understanding Common Root Causes",
        body: "Erectile function relies on coordinated signaling between the brain, nerves, hormones, and blood vessels. Disruption in any single link—from chronic fatigue to elevated blood pressure or everyday performance worry—can change responsiveness.",
        bullets: [
          "Circulatory and metabolic factors such as blood pressure, cholesterol, or glucose balance",
          "Psychological load including work stress, anxiety, or fear of disappointing a partner",
          "Medication side effects, alcohol intake, or disrupted restorative sleep",
        ],
      },
      {
        heading: "Supportive Steps You Can Start Today",
        body: "Small daily shifts often create measurable improvements in energy, mood, and vascular responsiveness before or alongside medical care.",
        bullets: [
          "Prioritize 30 minutes of brisk walking or resistance training four times a week to support nitric oxide circulation.",
          "Shift focus during intimacy from rigid expectations toward relaxed touch and unhurried connection.",
          "Speak openly with a licensed healthcare professional to rule out underlying cardiovascular or hormonal factors.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is occasional erectile difficulty normal?",
        answer:
          "Yes. Stress, exhaustion, alcohol, or distraction can cause temporary changes at any age. Persistent patterns lasting several weeks are worth discussing calmly with a healthcare provider.",
      },
      {
        question: "How can partners help without adding pressure?",
        answer:
          "Reassurance, patience, and keeping physical affection relaxed—without treating every touch as a performance test—dramatically eases performance anxiety.",
      },
      {
        question: "When should I consult a doctor?",
        answer:
          "If changes persist for more than a few weeks, appear suddenly, or coincide with fatigue or chest discomfort, a routine medical checkup is a smart and confidential step.",
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
  {
    slug: "intimate-wellness",
    title: "Intimate Wellness",
    shortTagline: "Build comfort, body confidence, and unhurried physical connection together.",
    image: "/images/topic-intimacy.jpg",
    imageAlt: "Smiling couple sitting together on a sofa having an open warm conversation",
    readTime: "5 min read",
    summary:
      "Intimate wellness is about far more than mechanics—it combines physical comfort, curiosity, emotional safety, and honest dialogue free from embarrassment or rigid comparisons.",
    keyTakeaways: [
      "Responsive desire—warmth that builds after connection starts—is completely normal.",
      "Comfort, hydration, and unhurried pacing dramatically improve physical ease.",
      "Checking in calmly outside the bedroom makes intimate conversations far easier.",
    ],
    sections: [
      {
        heading: "Rethinking Desire & Physical Comfort",
        body: "Many healthy adults experience responsive rather than spontaneous desire—meaning interest grows once emotional safety, relaxation, and gentle touch are already present.",
        bullets: [
          "Release the myth that physical intimacy must look effortless or identical every time",
          "Pay attention to comfort essentials like gentle lubrication, breath, and pacing",
          "Notice how energy, hormones, and life seasons naturally shift rhythms",
        ],
      },
      {
        heading: "Keeping Curiosity Alive as a Couple",
        body: "Small intentional rituals protect closeness even during busy work and family weeks.",
        bullets: [
          "Share non-demanding physical affection—longer hugs, shoulder rubs, or holding hands.",
          "Talk about what feels good using positive, specific language rather than guesswork.",
          "Protect dedicated screen-free evenings to reconnect without rushing.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why do partners sometimes have mismatched desire?",
        answer:
          "Differences in stress levels, sleep, hormones, and responsive vs. spontaneous desire are normal in long-term couples. Curious, blame-free dialogue helps bridge the gap.",
      },
      {
        question: "How do we start talking about intimacy without awkwardness?",
        answer:
          "Start during a calm everyday moment—like a walk—framing the conversation around closeness and what you'd enjoy exploring more of together.",
      },
      {
        question: "Can physical discomfort during intimacy be addressed?",
        answer:
          "Yes. Discomfort is never something to simply push through; a gynecologist, urologist, or pelvic-health specialist can provide tailored, effective relief.",
      },
    ],
  },
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
];

export function getTopicBySlug(slug: string): WellnessTopic | undefined {
  return WELLNESS_TOPICS.find((topic) => topic.slug === slug);
}

