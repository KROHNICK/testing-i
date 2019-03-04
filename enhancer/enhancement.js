const { displayName } = require("./items");

module.exports = {
  success,
  fail,
  repair
};

function success(item) {
  const newItem = {};
  newItem.name = item.name;
  newItem.type = item.type;
  newItem.durability = item.durability;
  newItem.enhancement = item.enhancement;

  if (item.enhancement < 15) {
    const score = Number(item.enhancement.slice(1));
    newItem.enhancement = "+" + (score + 1);
    newItem.name = displayName(newItem);

    if (item.durability < 25) {
      throw new Error(
        "Item durability is too low. Please repair item before trying again."
      );
    }

    if (item.type === "weapon" && item.enhancement < "+7") {
      return newItem;
    }

    if (item.type === "armor" && item.enhancement < "+5") {
      return newItem;
    }

    return newItem;
  }

  if (
    item.enhancement === "+15" ||
    item.enhancement === "PRI" ||
    item.enhancement === "DUO" ||
    item.enhancement === "TRI" ||
    item.enhancement === "TET" ||
    item.enhancement === "PEN"
  ) {
    if (item.durability < 10) {
      throw new Error(
        "Item durability is too low. Please repair item before trying again."
      );
    }

    if (item.enhancement === "PEN") {
      throw new Error("Item is already fully upgraded.");
    }

    if (item.enhancement === "TET") {
      newItem.enhancement = "PEN";
      newItem.name = displayName(newItem);
      return newItem;
    }

    if (item.enhancement === "TRI") {
      newItem.enhancement = "TET";
      newItem.name = displayName(newItem);
      return newItem;
    }

    if (item.enhancement === "DUO") {
      newItem.enhancement = "TRI";
      newItem.name = displayName(newItem);
      return newItem;
    }

    if (item.enhancement === "PRI") {
      newItem.enhancement = "DUO";
      newItem.name = displayName(newItem);
      return newItem;
    }

    if (item.enhancement === "+15") {
      newItem.enhancement = "PRI";
      newItem.name = displayName(newItem);
      return newItem;
    }
  }
}

function fail(item) {
  const newItem = {};
  newItem.name = item.name;
  newItem.type = item.type;
  newItem.durability = item.durability;
  newItem.enhancement = item.enhancement;

  if (item.enhancement < 15) {
    newItem.durability = newItem.durability - 5;
    return newItem;
  }

  if (
    item.enhancement === "+15" ||
    item.enhancement === "PRI" ||
    item.enhancement === "DUO" ||
    item.enhancement === "TRI" ||
    item.enhancement === "TET" ||
    item.enhancement === "PEN"
  ) {
    newItem.durability = newItem.durability - 10;

    if (item.enhancement === "TET") {
      newItem.enhancement = "TRI";
      newItem.name = displayName(item);
      return newItem;
    }
    if (item.enhancement === "TRI") {
      newItem.enhancement = "DUO";
      newItem.name = displayName(item);
      return newItem;
    }
    if (item.enhancement === "DUO") {
      newItem.enhancement = "PRI";
      newItem.name = displayName(item);
      return newItem;
    }
    return newItem;
  }
}

function repair(item) {
  const newItem = {};
  newItem.name = item.name;
  newItem.type = item.type;
  newItem.enhancement = item.enhancement;
  newItem.durability = 100;
  return newItem;
}
