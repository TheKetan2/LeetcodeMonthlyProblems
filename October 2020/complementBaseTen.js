var bitwiseComplement = function (N) {
  return parseInt(
    N.toString(2)
      .split("")
      .map((n) => (n == "0" ? "1" : "0"))
      .join(""),
    2
  );
};
