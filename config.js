/**
 * ╔══════════════════════════════════════════════════════════╗
 *  BIRTHDAY SURPRISE — CONFIG FILE
 *  ─────────────────────────────────────────────────────────
 *  Edit ONLY this file to personalise the entire experience.
 *  No need to touch index.html at all!
 * ╚══════════════════════════════════════════════════════════╝
 */

const CONFIG = {

  /* ──────────────────────────────────────────
     1. PASSWORD
     The secret word the recipient must type.
  ────────────────────────────────────────── */
  password: "birthday",

  /* ──────────────────────────────────────────
     2. NAMES & NICKNAMES
  ────────────────────────────────────────── */
  recipientName:  "BBG",          // Used in the Birthday Hero headline
  nickname:       "Sarah",        // Used in the Affirmation screen
  senderSignOff:  "Edwin",  // Sign-off at the bottom of the love letter

  /* ──────────────────────────────────────────
     3. SCREEN TEXT OVERRIDES
     Leave a value as "" to keep the default.
  ────────────────────────────────────────── */
  screen1: {
    heading:  "Secret Entrance",
    subline:  "…only for a very special someone 🌷",
  },

  screen2: {
    subline:  "I made something for you —",
    question: "do you want to see? 🥺",
    yesLabel: "Yes, of course! 🌸",
    noLabel:  "Hmm… No",
  },

  screen5: {
    // Big birthday headline — {name} is replaced with recipientName above
    headline: "HAPPY BIRTHDAY {name} ❤️",
    tagline1: "You are my favorite notification 🩷",
    tagline2: "Stay cute, stay happy, stay mine 🖤",
  },

  /* ──────────────────────────────────────────
     4. LOVE LETTER  (Screen 6)
     Use \n for line breaks.
  ────────────────────────────────────────── */
  letterText: `You are seen, you are heard, and you are loved — no matter what.

If you ever feel unloved, remember that my love for you is boundless and endless. I see you in all of your messy, beautiful, wonderful glory, and I choose you every single day.

On your birthday, I just want you to know: you make the world a warmer place just by being in it.

Happy Birthday, my love. 🌹`,

  /* ──────────────────────────────────────────
     5. POLAROID WALL  (Screen 7)
     src   → relative path or URL to an image
            (leave "" to show the placeholder)
     caption → text below each polaroid
  ────────────────────────────────────────── */
  polaroids: [
    { src: "images/photo1.jpg", caption: "us, always 💕"         },
    { src: "images/photo2.jpg", caption: "forever & ever 💍"     },
    { src: "images/photo3.jpg", caption: "flower in my hair 🌺"  },
    { src: "images/photo4.jpg", caption: "my favorite girl 🌸"   },
    { src: "images/photo5.jpg", caption: "painted in love 🎨"    },
  ],

  /* ──────────────────────────────────────────
     6. FINAL HUG SCREEN  (Screen 8)
     subtext shows below the hug emoji.
  ────────────────────────────────────────── */
  screen8: {
    hugText: "Here is a virtual hug for you 🤍",
    subtext: `Every day with you is a gift.\nToday is just extra special —\nbecause <em>you exist</em>. 🌸`,
  },

  /* ──────────────────────────────────────────
     7. PAGE <title>
  ────────────────────────────────────────── */
  pageTitle: "Happy Birthday, My Love 🎂",

};
