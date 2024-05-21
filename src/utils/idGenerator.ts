const randomIdGenerator = () => {
  const GENERATOR_LIST = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "A",
    "B",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "X",
    "Y",
    "Z",
  ];

  const getRand = () =>
    GENERATOR_LIST[Math.floor(Math.random() * GENERATOR_LIST.length)];

  const generatedID = [];

  for (let i = 0; i < 10; i++) {
    generatedID.push(getRand());
  }

  return generatedID.join("");
};

export default randomIdGenerator;
