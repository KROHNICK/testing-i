const battleaxe = {
  name: "Battleaxe",
  type: "weapon",
  durability: 100,
  enhancement: "PEN"
};

const sword = {
  name: "Sword",
  type: "weapon",
  durability: 100,
  enhancement: "+10"
};

const dagger = {
  name: "Dagger",
  type: "weapon",
  durability: 50,
  enhancement: "+3"
};

const chestplate = {
  name: "Chestplate",
  type: "armor",
  durability: 100,
  enhancement: "TRI"
};

const helmet = {
  name: "Helmet",
  type: "armor",
  durability: 75,
  enhancement: "+8"
};

const leggings = {
  name: "Leggings",
  type: "armor",
  durability: 50,
  enhancement: "+2"
};

const gloves = {
  name: "Gloves",
  type: "armor",
  durability: 25,
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
