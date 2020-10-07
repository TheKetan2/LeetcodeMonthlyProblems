let num = 1;
document.getElementById("btn").addEventListener("click", function () {
  document.getElementById("btn").innerHTML = num++;
});

let list = ["amy 100", "david 100", "heraldo 50", "aakansha 75", "aleksa 150"];
list.sort((b, a) => parseInt(a.split(" ")[1]) - parseInt(b.split(" ")[1]));
