// const [showResults, setShowResults] = useState(false);
// const [showButton, setShowButton] = useState("Show Answer");
let setShowResults = false;
const showMe = () => {
  setShowResults === false
    ? () => {
        setShowResults(true);
        setShowButton("Hide Answer");
      }
    : () => {
        setShowResults(false);
        setShowButton("Show Answer");
      };
};

showMe();
