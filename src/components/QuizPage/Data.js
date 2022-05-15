const questions = [
  {
    text: "What … your name?",
    options: [
      { id: 0, text: "am", isCorrect: false },
      { id: 1, text: "are", isCorrect: false },
      { id: 2, text: "is", isCorrect: true },
    ],
  },
  {
    text: "Is your name Bob? -  Yes. … is.",
    options: [
      { id: 0, text: "she", isCorrect: false },
      { id: 1, text: "he", isCorrect: false },
      { id: 2, text: "it", isCorrect: true },
    ],
  },
  {
    text: "Are you John? - Yes, … ",
    options: [
      { id: 0, text: "I am  ", isCorrect: true },
      { id: 1, text: "he is", isCorrect: false },
      { id: 2, text: "it is", isCorrect: false },
    ],
  },
  {
    text: "Is his name Adam? - Yes, … ",
    options: [
      { id: 0, text: "he is", isCorrect: false },
      { id: 1, text: "she is", isCorrect: false },
      { id: 2, text: "it is", isCorrect: true },
    ],
  },
  {
    text: "Are they students? - No, … ",
    options: [
      { id: 0, text: "they are", isCorrect: false },
      { id: 1, text: "he is", isCorrect: false },
      { id: 2, text: "they are not", isCorrect: true },
    ],
  },
  {
    text: "Every day I … at 7 o’clock.",
    options: [
      { id: 0, text: "got up", isCorrect: false },
      { id: 1, text: "shall get up", isCorrect: false },
      { id: 2, text: "get up", isCorrect: true },
    ],
  },
  {
    text: "Now I … my breakfast.",
    options: [
      { id: 0, text: "shall have", isCorrect: false },
      { id: 1, text: "am having", isCorrect: true },
      { id: 2, text: "have", isCorrect: false },
    ],
  },
  {
    text: "Tomorrow  we … to  see my grandmother.",
    options: [
      { id: 0, text: "go", isCorrect: false },
      { id: 1, text: "goes", isCorrect: false },
      { id: 2, text: "shall go", isCorrect: true },
    ],
  },
  {
    text: "Yesterday  we … flowers .",
    options: [
      { id: 0, text: "buy", isCorrect: false },
      { id: 1, text: "bought", isCorrect: true },
      { id: 2, text: "shall buy", isCorrect: false },
    ],
  },
  {
    text: "My sister … in the garden.",
    options: [
      { id: 0, text: "plays", isCorrect: false },
      { id: 1, text: "is playing", isCorrect: true },
      { id: 2, text: "played", isCorrect: false },
    ],
  },
  {
    text: "Now I ... ... a letter.",
    options: [
      { id: 0, text: "write", isCorrect: false },
      { id: 1, text: "am writing", isCorrect: true },
      { id: 2, text: "shall write", isCorrect: false },
      { id: 3, text: "wrote", isCorrect: false },
    ],
  },
  {
    text: "Look, the doctor ... ... a car. ",
    options: [
      { id: 0, text: "is driving", isCorrect: true },
      { id: 1, text: "drives", isCorrect: false },
      { id: 2, text: "drove", isCorrect: false },
      { id: 3, text: "will drive", isCorrect: false },
    ],
  },
  {
    text: "Yesterday we ... to school on foot. ",
    options: [
      { id: 0, text: "go", isCorrect: false },
      { id: 1, text: "went", isCorrect: true },
      { id: 2, text: "shall go", isCorrect: false },
      { id: 3, text: "are going", isCorrect: false },
    ],
  },
  {
    text: "Tomorrow he  ... help his mother.",
    options: [
      { id: 0, text: "will", isCorrect: true },
      { id: 1, text: "is helping", isCorrect: false },
      { id: 2, text: "helped", isCorrect: false },
      { id: 3, text: "helps", isCorrect: false },
    ],
  },
  {
    text: "We ... ... in the classroom now. ",
    options: [
      { id: 0, text: "shall sit", isCorrect: false },
      { id: 1, text: "sit", isCorrect: false },
      { id: 2, text: "are sitting   ", isCorrect: true },
      { id: 3, text: "sat", isCorrect: false },
    ],
  },
];

export default questions;

// const questions = [
//   {
//     text: "What is the capital of America?",
//     options: [
//       { id: 0, text: "New York City", isCorrect: false },
//       { id: 1, text: "Boston", isCorrect: false },
//       { id: 2, text: "Santa Fe", isCorrect: false },
//       { id: 3, text: "Washington DC", isCorrect: true },
//     ],
//   },
//   {
//     text: "What year was the Constitution of America written?",
//     options: [
//       { id: 0, text: "1787", isCorrect: true },
//       { id: 1, text: "1776", isCorrect: false },
//       { id: 2, text: "1774", isCorrect: false },
//       { id: 3, text: "1826", isCorrect: false },
//     ],
//   },
//   {
//     text: "Who was the second president of the US?",
//     options: [
//       { id: 0, text: "John Adams", isCorrect: true },
//       { id: 1, text: "Paul Revere", isCorrect: false },
//       { id: 2, text: "Thomas Jefferson", isCorrect: false },
//       { id: 3, text: "Benjamin Franklin", isCorrect: false },
//     ],
//   },
//   {
//     text: "What is the largest state in the US?",
//     options: [
//       { id: 0, text: "California", isCorrect: false },
//       { id: 1, text: "Alaska", isCorrect: true },
//       { id: 2, text: "Texas", isCorrect: false },
//       { id: 3, text: "Montana", isCorrect: false },
//     ],
//   },
//   {
//     text: "Which of the following countries DO NOT border the US?",
//     options: [
//       { id: 0, text: "Canada", isCorrect: false },
//       { id: 1, text: "Russia", isCorrect: true },
//       { id: 2, text: "Cuba", isCorrect: true },
//       { id: 3, text: "Mexico", isCorrect: false },
//     ],
//   },
// ];

// export default questions;

// let questions = [
//   {
//     question: "The tallest building in the world is located in which city? ",
//     choice1: "Dubai",
//     choice2: "New York",
//     choice3: "Shanghai",
//     choice4: "None of the above",
//     answer: 1,
//   },
//   {
//     question: "What is 2 + 2?",
//     choice1: "2",
//     choice2: "3",
//     choice3: "4",
//     choice4: "1",
//     answer: 3,
//   },
//   {
//     question: "What is 2 + 2?",
//     choice1: "2",
//     choice2: "3",
//     choice3: "4",
//     choice4: "1",
//     answer: 3,
//   },
//   {
//     question: "What is 2 + 2?",
//     choice1: "2",
//     choice2: "3",
//     choice3: "4",
//     choice4: "1",
//     answer: 3,
//   },
// ];
