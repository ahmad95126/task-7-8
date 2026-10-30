const team = {
  name: "Egypt",
  coach: { name: "Hossam Hassan", nationality: "Egyptian" },
  stadium: { name: "Cairo Stadium", city: "Cairo", capacity: 75000 },
  colors: ["red", "white", "black"],
  founded: 1921,
};

const players = [
  { id: 1, name: "Salah", number: 10, position: "Forward", age: 34, goals: 20, assists: 10 },
  { id: 2, name: "Marmoush", number: 7, position: "Forward", age: 27, goals: 15, assists: 6 },
  { id: 3, name: "Trezeguet", number: 11, position: "Winger", age: 31, goals: 9, assists: 8 },
  { id: 4, name: "Zizo", number: 25, position: "Midfielder", age: 30, goals: 6, assists: 11 },
  { id: 5, name: "Emam Ashour", number: 8, position: "Midfielder", age: 28, goals: 5, assists: 7 },
  { id: 6, name: "El Shenawy", number: 1, position: "Goalkeeper", age: 37, goals: 0, assists: 0 },
];

const matches = [
  { opponent: "Ghana", score: [2, 0], goals: ["Salah", "Marmoush"] },
  { opponent: "Morocco", score: [1, 1], goals: ["Trezeguet"] },
  { opponent: "Senegal", score: [3, 2], goals: ["Salah", "Zizo", "Salah"] },
];

const bench = ["Hamdi Fathy", "Mostafa Fathi", "Akram Tawfik"];

const settings = {
  theme: "light",
  language: "ar",
  notifications: true,
};

const { name, founded } = team;
console.log(name, founded);

const { coach: { name: coachName } } = team;
console.log(coachName);

const { stadium: { city, capacity } } = team;
console.log(city, capacity);

const [firstColor, secondColor] = team.colors;
console.log(firstColor, secondColor);
const [, , thirdColor] = team.colors;
console.log(thirdColor);
const { nickname = "The Pharaohs" } = team;
console.log(nickname);
const [firstPlayer] = players;
const { name: playerName, goals } = firstPlayer;
console.log(playerName, goals);
const [first, ...others] = players;
console.log(first.name);     
console.log(others.length);  
const [firstMatch] = matches;
const { opponent, score: [home, away] } = firstMatch;
console.log(opponent, home, away); 

matches.forEach((match) => {
  console.log(`Egypt ${match.score[0]} - ${match.score[1]} ${match.opponent}`);
});
players.forEach((player) => {
  console.log(`#${player.number} ${player.name} — ${player.position}`);
});
const playerNames = players.map((player) => player.name);
console.log(playerNames);

function printPlayer({ name, age, position }) {
  console.log(`${name}, ${age} years, ${position}`);
}

players.forEach(printPlayer);

function describe({ name, position = "Unknown" }) {
  console.log(`${name} plays as ${position}`);
}

describe({ name: "New Player" });

const allPlayers = [...players.map((p) => p.name), ...bench];
console.log(allPlayers);

const newColors = [...team.colors, "gold"];
console.log(newColors); 

const darkSettings = { ...settings, theme: "dark" };
console.log(darkSettings);

const oldTeam = { ...team, founded: 1920 };
console.log(oldTeam.founded);

console.log(settings); 
console.log(team);    

const star = { ...players[0], captain: true };
console.log(star);

const updatedMarmoush = { ...players[1], goals: players[1].goals + 1 };
console.log(updatedMarmoush.goals); 

const { notifications, ...basic } = settings;
console.log(basic);

const { id, ...info } = players[0];
console.log(info);

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

const totalGoals = sum(...players.map((p) => p.goals));
console.log(totalGoals);

function maxGoals(...numbers) {
  return Math.max(...numbers);
}

console.log(maxGoals(...players.map((p) => p.goals)));

const highestAge = Math.max(...players.map((p) => p.age));
console.log(highestAge); 

function addPlayers(teamName, ...names) {
  return [teamName, ...names];
}

console.log(addPlayers("Egypt", "Salah", "Marmoush", "Zizo"));

const copy = team;
copy.name = "Ghana";
console.log(team.name);

const copy2 = { ...team };
copy2.stadium.city = "Giza";
console.log(team.stadium.city);

const copy3 = structuredClone(team);
copy3.stadium.city = "Giza";
console.log(team.stadium.city);

console.log(players[0] === players[0]);
console.log({} === {});     

function increaseAge(player) {
  return { ...player, age: player.age + 1 };
}

const olderSalah = increaseAge(players[0]);
console.log(olderSalah.age);  
console.log(players[0].age);   

const salahGoalsInMatches = matches
  .flatMap((match) => match.goals)
  .filter((goal) => goal === "Salah")
  .length;

console.log(salahGoalsInMatches); 


const results = matches.reduce(
  (acc, match) => {
    const [home, away] = match.score;
    if (home > away) acc.wins++;
    else if (home === away) acc.draws++;
    else acc.losses++;
    return acc;
  },
  { wins: 0, draws: 0, losses: 0 }
);

console.log(results);

