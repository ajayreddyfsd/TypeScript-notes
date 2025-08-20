// ================= Easy Examples =================
// 1️⃣ Identity function
function identity<T>(value: T): T {
  return value;
}
const num = identity<number>(42);
const str = identity<string>("hello");

// 2️⃣ Wrap in array
function wrapInArray<T>(item: T): T[] {
  return [item];
}
const numArr = wrapInArray(5);
const strArr = wrapInArray("abc");

// ================= Medium Examples =================
// 3️⃣ Return first element
function getFirst<T>(arr: T[]): T {
  return arr[0];
}
const firstNum = getFirst([1, 2, 3]); // inferred T = number
const firstStr = getFirst(["a", "b"]); // inferred T = string

// 4️⃣ Merge two objects of same type
function mergeObjects<T>(obj1: T, obj2: T): T {
  return { ...obj1, ...obj2 };
}
const merged = mergeObjects({ x: 1 }, { y: 2 }); // T inferred as {x:number, y:number}

// ================= Difficult Examples =================
// 5️⃣ Generic with constraint
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
const person = { name: "Ajay", age: 25 };
const age = getProperty(person, "age"); // K = "name" | "age"

// 6️⃣ Function returning generic class
class Cart<T> {
  private items: T[] = [];
  add(item: T) {
    this.items.push(item);
  }
  getAll(): T[] {
    return this.items;
  }
}
function createBackpack<T>(): Cart<T> {
  return new Cart<T>();
}
const numberCart = createBackpack<number>();
numberCart.add(5);
numberCart.add(10);
const stringCart = createBackpack<string>();
stringCart.add("apple");
stringCart.add("banana");
