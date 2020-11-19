const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let set = new Set();

function randomString() {
  return (
    labels[Math.floor(Math.random() * labels.length)] +
    labels[Math.floor(Math.random() * labels.length)]
  );
}

function generateRandomLabel() {
  let label = randomString();
  while (!set.add(label)) {
    label = randomString();
  }
  return label;
}

// for (let i = 0; i < 31; i++) {
//   let label = generateRandomLabel();
//   console.log(label);
// }

function game(gameArray) {
  let transpose = [];

  for (let i = 0; i < gameArray.length; i++) {
    let temp = [];
    for (let j = 0; j < gameArray.length; j++) {
      temp.push(gameArray[j][i]);
    }
    transpose.push(temp);
  }

  console.table(gameArray);
  console.table(transpose);

  for (let i = 0; i < gameArray.length; i++) {
    aArrOne = gameArray[i].filter((elem) => elem === "1").length;
    aArrTwo = gameArray[i].filter((elem) => elem === "2").length;
    tArrOne = transpose[i].filter((elem) => elem === "1").length;
    tArrTwo = transpose[i].filter((elem) => elem === "2").length;

    if (aArrOne !== aArrTwo || tArrOne !== tArrTwo) {
      return false;
    }
  }

  return true;
}

console.log(
  game([
    ["1", "2", "1", "2"],
    ["2", "1", "1", "2"],
    ["2", "2", "1", "1"],
    ["1", "1", "2", "2"],
  ])
);
