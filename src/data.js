export const data = [
  {
    Questions: "What is the correct command to create a new React project?",
    choice: [
      { anstxt: " npx create-react-app", istrue: true },
      { anstxt: " npm create-react-app myReactApp", istrue: false },
      { anstxt: " npm create-react-app", istrue: false },
      { anstxt: " npx create-react-app myReactApp", istrue: false },
    ],
  },
  {
    Questions:
      "What command is used to start the React local development server?",
    choice: [
      { anstxt: " npm start", istrue: true },
      { anstxt: " npm build", istrue: false },
      { anstxt: " npm serve", istrue: false },
      { anstxt: " npm run dev", istrue: false },
    ],
  },
  {
    Questions:
      "What is the default local host port that a React development server uses?",
    choice: [
      { anstxt: " 8080", istrue: false },
      { anstxt: " 3500", istrue: false },
      { anstxt: " 3000", istrue: true },
      { anstxt: " 5000", istrue: false },
    ],
  },
  {
    Questions: "To develop and run React code, Node.js is required.",
    choice: [
      { anstxt: " True", istrue: true },
      { anstxt: " False", istrue: false },
    ],
  },
  {
    Questions: "What is the children prop?",
    choice: [
      {
        anstxt: "  A property that lets you pass data to child components",
        istrue: true,
      },
      {
        anstxt: "  A property that lets you set an object as a property",
        istrue: false,
      },
      {
        anstxt:
          "  A property that lets you nest components in other components",
        istrue: false,
      },
      { anstxt: "  A property that adds child values to state", istrue: false },
    ],
  },
];
