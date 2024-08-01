var houseKeeper1 = {
    name: "Anna",
    age: "21",
    hasWashDishes: true,
    languages: ["English", "Filipino"],
    tasksAimed: ["Cleaning", "laundry", "Organizing"]

}
console.log(houseKeeper1.tasksAimed);

function HouseKeeper (name, age, hasWashDishes, languages, tasksAimed) {
    this.name = name;
    this.age = age;
    this.hasWashDishes = hasWashDishes;
    this.languages = languages;
    this.tasksAimed = tasksAimed;
}

var houseKeeper1 = new HouseKeeper("Anna", 21, true, ["English", "Filipino"], ["Cleaning", "Laundry", "Organizing"]);
