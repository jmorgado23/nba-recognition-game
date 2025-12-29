window.CONFIG = {
  siteName: "NBA Recognition Game",

  title: "NBA Recognition Game",
  subtitle: "How well do you recognize NBA players?",

  description: "Test how well you recognize NBA players. One attempt per face.",

  datasetUrl: "", // <-- we’ll fill this next

  totalPerRound: 20,
  pointsPerCorrect: 10,

  itemLabel: "Player",

  shareTemplate:
    "I scored {score} / {max} on NBA Recognition Game. Can you beat me?",
  shareUrl: "https://nbarecognitiongame.com",

  endMessages: [
    { min: 160, text: "You really know your NBA." },
    { min: 120, text: "Solid — but you missed some legends." },
    { min: 80,  text: "You know the faces. The names are tougher." },
    { min: 0,   text: "That was rough. Time to brush up on NBA history." }
  ],

  background: {
    start: "#fff1e6",
    end: "#ffd8b5"
  }
};
