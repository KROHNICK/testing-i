//success
const battleaxe = {
  name: "Battleaxe",
  type: "weapon",
  durability: 100,
  enhancement: "PRI"
};
//success
const sword = {
  name: "Sword",
  type: "weapon",
  durability: 100,
  enhancement: "+10"
};

//fail
const dagger = {
  name: "Dagger",
  type: "weapon",
  durability: 25,
  enhancement: "+3"
};

//success
const chestplate = {
  name: "Chestplate",
  type: "armor",
  durability: 100,
  enhancement: "TRI"
};

//success
const helmet = {
  name: "Helmet",
  type: "armor",
  durability: 75,
  enhancement: "+8"
};

//repair
const leggings = {
  name: "Leggings",
  type: "armor",
  durability: 0,
  enhancement: "+2"
};

//fail
const gloves = {
  name: "Gloves",
  type: "armor",
  durability: 5,
  enhancement: "0"
};

const displayName = item => {
  if (item.enhancement === 0) {
    return item.name;
  } else if (item.enhancement <= 15) {
    return `[${item.enhancement}]${item.name}`;
  } else if (item.enhancement === 16) {
    return `[PRI] ${item.name}`;
  } else if (item.enhancement === 17) {
    return `[DUO] ${item.name}`;
  } else if (item.enhancement === 18) {
    return `[TRI] ${item.name}`;
  } else if (item.enhancement === 19) {
    return `[TET] ${item.name}`;
  } else if (item.enhancement === 20) {
    return `[PEN] ${item.name}`;
  }
};

module.exports = {
  battleaxe,
  sword,
  dagger,
  chestplate,
  helmet,
  leggings,
  gloves,
  displayName
};
