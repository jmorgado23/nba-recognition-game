window.CONFIG = {
  siteName: "Celebrity Recognition Game",

  title: "Celebrity Recognition Game",
  subtitle: "Test how well you recognize famous people.",

  description: "Test how well you recognize famous people.",

  datasetUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vS52keBl1q6F8AVumY7iwghhuYyxm5n9XJdyHFVlBIdWTp4hN-IPvwseIo5cjJO_iUzJp7H6EQMIT6E/pub?output=csv",

  totalPerRound: 20,
  pointsPerCorrect: 10,

  itemLabel: "Face",

  shareTemplate:
    "I scored {score} / {max} on Celebrity Recognition Game. Can you beat me?",
  shareUrl: "https://celebrityrecognitiongame.com",

  endMessages: [
    { min: 160, text: "You really know your pop culture." },
    { min: 120, text: "Solid — but you left points on the table." },
    { min: 80,  text: "You know the faces. The names are harder." },
    { min: 0,   text: "Brutal round. Want another shot?" }
  ]
};
