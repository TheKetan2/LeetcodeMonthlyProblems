const data = [
  {
    country: "Spain",
    city: "Madrit",
    pop: 3500000,
  },
  {
    country: "Spain",
    city: "Barcelona",
    pop: 1500000,
  },
  {
    country: "Spain",
    city: "Valencia",
    pop: 1000000,
  },
  {
    country: "Germany",
    city: "Berlin",
    pop: 4500000,
  },
  {
    country: "Germany",
    city: "Munich",
    pop: 1500000,
  },
  {
    country: "Germany",
    city: "Dortmund",
    pop: 1000000,
  },
  {
    country: "England",
    city: "London",
    pop: 8000000,
  },
  {
    country: "England",
    city: "Liverpool",
    pop: 500000,
  },
  {
    country: "England",
    city: "Manchester",
    pop: 1000000,
  },
];

let sol = {};

for (let country of data) {
  if (sol[country.country] === undefined) {
    sol[country.country] = { city: [country.city], pop: [country.pop] };
  } else {
    sol[country.country] = {
      city: [...sol[country.country].city, country.city],
      pop: [...sol[country.country].pop, country.pop],
    };
  }
}

console.log(sol);

for (let key of Object.keys(sol)) {
  console.log(key);
  for (let i in sol[key].city) {
    console.log(sol[key].city[i], " ", sol[key].pop[i]);
  }
  console.log("------------");
}
