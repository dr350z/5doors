"use client";

import { useEffect, useMemo, useState } from "react";

type PlayerId = "jen" | "clara" | "atticus";

type Puzzle = {
  eyebrow: string;
  question: string;
  options: string[];
  answer: string;
  hint: string;
  success: string;
};

type Player = {
  id: PlayerId;
  name: string;
  age: string;
  world: string;
  subtitle: string;
  intro: string;
  image: string;
  imagePosition: string;
  icon: string;
  accent: string;
  puzzles: Puzzle[];
};

const players: Player[] = [
  {
    id: "jen",
    name: "Jen",
    age: "The grown-up quest",
    world: "The Painted Pantry",
    subtitle: "Art, appetites & a final surprise",
    intro:
      "A mysterious supper club has hidden its invitation behind five painted doors. Follow the brushstrokes, trust your taste and unlock the gallery feast.",
    image: "/jen-xena.png",
    imagePosition: "50% 34%",
    icon: "🎨",
    accent: "coral",
    puzzles: [
      {
        eyebrow: "The Colour Kitchen",
        question:
          "The chef needs green icing, but only blue and yellow jars remain. Which two should be mixed?",
        options: ["Blue + yellow", "Red + blue", "Yellow + red"],
        answer: "Blue + yellow",
        hint: "Think of the colour you see on fresh leaves.",
        success: "A perfect leafy green swirls across the canvas!",
      },
      {
        eyebrow: "The Still-Life Table",
        question:
          "The pear is left of the cake. The mug is right of the cake. Which order is correct?",
        options: ["Pear · Cake · Mug", "Mug · Pear · Cake", "Cake · Mug · Pear"],
        answer: "Pear · Cake · Mug",
        hint: "Put the cake in the middle, then follow each clue.",
        success: "The still life settles into perfect balance.",
      },
      {
        eyebrow: "The Baker’s Canvas",
        question:
          "Eighteen macarons are arranged in equal rows of six. How many rows are there?",
        options: ["2 rows", "3 rows", "4 rows"],
        answer: "3 rows",
        hint: "Count by sixes: 6, 12, 18.",
        success: "Three delicious rows appear in a wash of colour.",
      },
      {
        eyebrow: "The Gallery Riddle",
        question:
          "I have a face and two hands, but no arms or legs. I help the soufflé rise just right. What am I?",
        options: ["A clock", "A portrait", "A spoon"],
        answer: "A clock",
        hint: "A chef watches me while something bakes.",
        success: "Right on time—the fourth lock clicks open.",
      },
      {
        eyebrow: "The Final Brushstroke",
        question:
          "Artists mix colour on me; food lovers hear my twin when talking about taste. What am I?",
        options: ["A palette", "A frame", "An easel"],
        answer: "A palette",
        hint: "Palette and palate sound alike, but this is the artist’s one.",
        success: "The final masterpiece is complete. Your invitation awaits!",
      },
    ],
  },
  {
    id: "clara",
    name: "Clara",
    age: "Age 8 · Easy",
    world: "Chipmunk Concert Quest",
    subtitle: "Big songs, tiny paws & five backstage doors",
    intro:
      "The chipmunk band’s big show starts soon, but their instruments are locked backstage. Solve five cheerful music puzzles and get the concert started!",
    image: "/clara-catboy.png",
    imagePosition: "50% 34%",
    icon: "🎤",
    accent: "berry",
    puzzles: [
      {
        eyebrow: "Acorn Soundcheck",
        question: "The band has 2 acorns, then finds 3 more. How many acorns do they have?",
        options: ["4 acorns", "5 acorns", "6 acorns"],
        answer: "5 acorns",
        hint: "Hold up two fingers, then three more.",
        success: "Five acorns rattle out a brilliant beat!",
      },
      {
        eyebrow: "Follow the Beat",
        question: "What comes next? Clap, stomp, clap, stomp, …",
        options: ["Clap", "Spin", "Jump"],
        answer: "Clap",
        hint: "The two moves take turns.",
        success: "Clap! You kept the rhythm perfectly.",
      },
      {
        eyebrow: "Microphone Mystery",
        question: "I make a singer’s voice loud enough for everyone to hear. What am I?",
        options: ["A pillow", "A microphone", "A paintbrush"],
        answer: "A microphone",
        hint: "A singer holds it close while performing.",
        success: "Testing, one, two—your answer sounds great!",
      },
      {
        eyebrow: "Costume Pattern",
        question: "Finish the pattern: 🔴 🔵 🔴 🔵 ___",
        options: ["🔴 Red", "🟢 Green", "🟡 Yellow"],
        answer: "🔴 Red",
        hint: "Red and blue are taking turns.",
        success: "The stage costumes are ready to sparkle.",
      },
      {
        eyebrow: "The Missing Instrument",
        question: "Which instrument has black and white keys?",
        options: ["Piano", "Drum", "Tambourine"],
        answer: "Piano",
        hint: "You press its keys with your fingers.",
        success: "The piano rolls onstage. The concert can begin!",
      },
    ],
  },
  {
    id: "atticus",
    name: "Atticus",
    age: "Age 4 · Easy",
    world: "Octonaut Ocean Rescue",
    subtitle: "Dive deep, help sea friends & open five hatches",
    intro:
      "Sound the Octo-Alert! Five friendly sea creatures need help. Pick the right answers to open each underwater hatch and finish the rescue.",
    image: "/atticus-train-driver.png",
    imagePosition: "50% 24%",
    icon: "🐙",
    accent: "ocean",
    puzzles: [
      {
        eyebrow: "Whale Check",
        question: "Which sea animal comes up to breathe air?",
        options: ["🐋 Whale", "⭐ Starfish", "🐚 Shell"],
        answer: "🐋 Whale",
        hint: "It is very big and blows water from the top of its head.",
        success: "The whale takes a big, happy breath!",
      },
      {
        eyebrow: "Count the Fish",
        question: "How many fish can you see? 🐟 🐟 🐟",
        options: ["2", "3", "5"],
        answer: "3",
        hint: "Point to each fish: one, two…",
        success: "Three fish swim safely through the hatch.",
      },
      {
        eyebrow: "Deep-Sea Ride",
        question: "What should we use to travel deep under the water?",
        options: ["🚲 Bicycle", "🚁 Helicopter", "🚤 Submarine"],
        answer: "🚤 Submarine",
        hint: "It is a special boat that can go under the sea.",
        success: "Bubble, bubble—down goes the submarine!",
      },
      {
        eyebrow: "Shell Match",
        question: "Find the orange shell.",
        options: ["🟠 Orange", "🟢 Green", "🟣 Purple"],
        answer: "🟠 Orange",
        hint: "Orange is the colour of a carrot.",
        success: "You found it! The little crab waves hello.",
      },
      {
        eyebrow: "Octo-Pattern",
        question: "What comes next? 🐙 🐠 🐙 🐠 ___",
        options: ["🐙 Octopus", "🦀 Crab", "🐬 Dolphin"],
        answer: "🐙 Octopus",
        hint: "The octopus and fish take turns.",
        success: "Rescue complete! All the sea friends are safe.",
      },
    ],
  },
];

const adventureOrder: PlayerId[] = ["atticus", "clara", "jen"];
const progressStorageKey = "three-doorways-relay-progress-v2";

const celebrationBits = ["✦", "●", "◆", "★", "✦", "●", "★", "◆"];

export default function Home() {
  const [selectedId, setSelectedId] = useState<PlayerId | null>(null);
  const [progress, setProgress] = useState<Record<PlayerId, number>>({
    jen: 0,
    clara: 0,
    atticus: 0,
  });
  const [activePuzzle, setActivePuzzle] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<"idle" | "wrong" | "right">("idle");
  const [hintOpen, setHintOpen] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(progressStorageKey);
    if (saved) {
      try {
        setProgress((current) => ({ ...current, ...JSON.parse(saved) }));
      } catch {
        // Ignore damaged browser storage and start fresh.
      }
    }
  }, []);

  const selected = useMemo(
    () => players.find((player) => player.id === selectedId) ?? null,
    [selectedId],
  );

  const currentPlayerId = useMemo(
    () => adventureOrder.find((id) => progress[id] < 5) ?? "jen",
    [progress],
  );

  const choosePlayer = (id: PlayerId) => {
    if (id !== currentPlayerId) return;
    setSelectedId(id);
    setActivePuzzle(null);
    setFeedback("idle");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openDoor = (index: number) => {
    if (!selected || index > progress[selected.id] || index < progress[selected.id]) return;
    setFeedback("idle");
    setHintOpen(false);
    setActivePuzzle(index);
  };

  const answerPuzzle = (choice: string) => {
    if (!selected || activePuzzle === null) return;
    const puzzle = selected.puzzles[activePuzzle];
    if (choice !== puzzle.answer) {
      setFeedback("wrong");
      return;
    }

    const nextValue = Math.max(progress[selected.id], activePuzzle + 1);
    const nextProgress = { ...progress, [selected.id]: nextValue };
    setProgress(nextProgress);
    window.localStorage.setItem(progressStorageKey, JSON.stringify(nextProgress));
    setFeedback("right");
  };

  const closePuzzle = () => {
    setActivePuzzle(null);
    setFeedback("idle");
  };

  const resetPlayer = () => {
    if (!selected) return;
    const nextProgress = { ...progress, [selected.id]: 0 };
    setProgress(nextProgress);
    window.localStorage.setItem(progressStorageKey, JSON.stringify(nextProgress));
    setActivePuzzle(null);
  };

  const continueAdventure = () => {
    if (!selected) return;
    const nextId = adventureOrder[adventureOrder.indexOf(selected.id) + 1];
    if (nextId) choosePlayer(nextId);
  };

  if (!selected) {
    return (
      <main className="selection-screen">
        <div className="paper-grain" aria-hidden="true" />
        <header className="hero">
          <p className="kicker">ONE FAMILY · THREE HEROES · FIFTEEN DOORS</p>
          <h1>Begin the hero relay.</h1>
          <p className="hero-copy">
            Atticus leads the way, Clara takes the middle quest, and Jen completes the final adventure. Each hero unlocks the next.
          </p>
          <div className="scroll-note"><span>↓</span> Follow the adventure order</div>
        </header>

        <section className="player-grid" aria-label="Choose a player">
          {[...players].sort((a, b) => adventureOrder.indexOf(a.id) - adventureOrder.indexOf(b.id)).map((player, index) => {
            const isCurrent = player.id === currentPlayerId;
            const isComplete = progress[player.id] === 5;
            const previousName = index > 0
              ? players.find(({ id }) => id === adventureOrder[index - 1])?.name
              : null;
            return (
            <button
              className={`player-card ${player.accent} ${isComplete ? "complete" : ""} ${!isCurrent ? "unavailable" : ""}`}
              key={player.id}
              onClick={() => choosePlayer(player.id)}
              disabled={!isCurrent}
              aria-label={isComplete ? `${player.name}'s adventure is complete` : isCurrent ? `Play ${player.name}'s game: ${player.world}` : `${player.name}'s adventure is locked`}
            >
              <span className="card-number">0{index + 1}</span>
              <span className={`journey-status ${isComplete ? "done" : isCurrent ? "ready" : "waiting"}`}>
                {isComplete ? "Complete ✓" : isCurrent ? "Play now" : "Locked"}
              </span>
              <span className="portrait-wrap">
                <img
                  src={player.image}
                  alt={`${player.name}, the hero of this adventure`}
                  style={{ objectPosition: player.imagePosition }}
                />
                <span className="world-icon" aria-hidden="true">{player.icon}</span>
              </span>
              <span className="card-copy">
                <span className="player-meta">{player.age}</span>
                <strong>{player.name}</strong>
                <span className="world-name">{player.world}</span>
                <span className="world-subtitle">{player.subtitle}</span>
              </span>
              <span className="enter-button">
                {isComplete ? "Quest complete" : isCurrent ? "Enter adventure" : `After ${previousName}`}
                <span aria-hidden="true">{isComplete ? "✓" : isCurrent ? "→" : "🔒"}</span>
              </span>
            </button>
            );
          })}
        </section>

        <footer className="selection-footer">
          Adventure order: Atticus → Clara → Jen. Progress is saved on this device.
        </footer>
      </main>
    );
  }

  const completed = progress[selected.id];
  const puzzle = activePuzzle === null ? null : selected.puzzles[activePuzzle];

  return (
    <main className={`game-screen ${selected.accent}`}>
      <div className="ambient-shape shape-one" aria-hidden="true" />
      <div className="ambient-shape shape-two" aria-hidden="true" />
      <nav className="game-nav">
        <button className="back-button" onClick={() => setSelectedId(null)}>← View the hero relay</button>
        <span className="nav-mark">THE THREE DOORWAYS</span>
        <span className="progress-label">{completed} / 5 OPEN</span>
      </nav>

      <section className="game-intro">
        <div className="mini-portrait">
          <img src={selected.image} alt="" style={{ objectPosition: selected.imagePosition }} />
          <span aria-hidden="true">{selected.icon}</span>
        </div>
        <div>
          <p className="kicker">{selected.name.toUpperCase()}’S ADVENTURE</p>
          <h1>{selected.world}</h1>
          <p>{selected.intro}</p>
        </div>
      </section>

      <section className="door-section" aria-label="Five puzzle doors">
        <div className="door-path" aria-hidden="true" />
        {selected.puzzles.map((item, index) => {
          const isSolved = index < completed;
          const isCurrent = index === completed;
          return (
            <div className="door-station" key={item.eyebrow}>
              <button
                className={`door ${isSolved ? "open" : ""} ${isCurrent ? "current" : "locked"}`}
                onClick={() => openDoor(index)}
                disabled={!isCurrent}
                aria-label={isSolved ? `Door ${index + 1} solved` : isCurrent ? `Open puzzle for door ${index + 1}` : `Door ${index + 1} locked`}
              >
                <span className="door-glow" />
                <span className="door-face">
                  <span className="door-panel top" />
                  <span className="door-panel bottom" />
                  <span className="door-knob" />
                  <span className="door-number">{index + 1}</span>
                </span>
                <span className="open-view">
                  <span>{isSolved ? ["✨", "🎵", "🐠", "🗝️", "🏆"][index] : ""}</span>
                </span>
              </button>
              <div className="door-caption">
                <span>DOOR {index + 1}</span>
                <strong>{item.eyebrow}</strong>
                <em>{isSolved ? "Solved ✓" : isCurrent ? "Tap to solve" : "Locked"}</em>
              </div>
            </div>
          );
        })}
      </section>

      {completed === 5 && (
        <section className="completion-card" aria-live="polite">
          <div className="confetti" aria-hidden="true">
            {celebrationBits.map((bit, index) => <span key={index}>{bit}</span>)}
          </div>
          <span className="completion-icon">🏆</span>
          <p className="kicker">ALL FIVE DOORS ARE OPEN</p>
          <h2>{selected.id === "jen" ? "Your final surprise is ready, Jen!" : `Brilliant work, ${selected.name}!`}</h2>
          <p>
            {selected.id === "jen"
              ? "You solved every painted puzzle and earned the secret invitation."
              : "You solved every puzzle and completed your adventure."}
          </p>
          {selected.id === "jen" ? (
            <a className="prize-link" href="https://surprise.zenhuang.com" target="_blank" rel="noreferrer">
              Open your surprise <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <button className="prize-link" onClick={continueAdventure}>
              Continue to {selected.id === "atticus" ? "Clara" : "Jen"}’s adventure →
            </button>
          )}
        </section>
      )}

      <div className="reset-row">
        <button onClick={resetPlayer}>Restart {selected.name}’s adventure</button>
      </div>

      {puzzle && activePuzzle !== null && (
        <div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && closePuzzle()}>
          <section className="puzzle-modal" role="dialog" aria-modal="true" aria-labelledby="puzzle-title">
            <button className="modal-close" onClick={closePuzzle} aria-label="Close puzzle">×</button>
            <div className="puzzle-door-number">DOOR {activePuzzle + 1} OF 5</div>
            <p className="kicker">{puzzle.eyebrow.toUpperCase()}</p>
            <h2 id="puzzle-title">{puzzle.question}</h2>

            {feedback !== "right" ? (
              <div className="answer-grid">
                {puzzle.options.map((option) => (
                  <button key={option} onClick={() => answerPuzzle(option)}>{option}</button>
                ))}
              </div>
            ) : (
              <div className="success-message">
                <span aria-hidden="true">✓</span>
                <strong>Door unlocked!</strong>
                <p>{puzzle.success}</p>
                <button onClick={closePuzzle}>{activePuzzle === 4 ? "See the celebration" : "Go to the next door"} →</button>
              </div>
            )}

            {feedback === "wrong" && (
              <p className="try-again" role="alert">Not quite—try another answer. You’ve got this!</p>
            )}

            {feedback !== "right" && (
              <div className="hint-box">
                <button onClick={() => setHintOpen((open) => !open)}>{hintOpen ? "Hide hint" : "Need a hint?"}</button>
                {hintOpen && <p>{puzzle.hint}</p>}
              </div>
            )}
          </section>
        </div>
      )}
    </main>
  );
}

