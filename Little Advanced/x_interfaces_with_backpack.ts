// ================= Easy Examples =================
// 1️⃣ Simple Box interface
interface Box<T> {
  content: T;
}
const numberBox: Box<number> = { content: 42 };
const stringBox: Box<string> = { content: "hello" };

// 2️⃣ ArrayHolder interface
interface ArrayHolder<T> {
  items: T[];
}
const numbers: ArrayHolder<number> = { items: [1, 2, 3] };
const strings: ArrayHolder<string> = { items: ["a", "b"] };

// ================= Medium Examples =================
// 3️⃣ Pair interface
interface Pair<T> {
  first: T;
  second: T;
}
const numberPair: Pair<number> = { first: 1, second: 2 };
const stringPair: Pair<string> = { first: "x", second: "y" };

// 4️⃣ OptionalContent interface
interface OptionalContent<T> {
  content: T;
  isAvailable: boolean;
}
const book: OptionalContent<string> = { content: "My Book", isAvailable: true };
const score: OptionalContent<number> = { content: 99, isAvailable: false };

// ================= Difficult Examples =================
// 5️⃣ Generic Constraint interface
interface KeyValue<T extends { id: number }> {
  data: T;
}
const userKV: KeyValue<{ id: number; name: string }> = {
  data: { id: 1, name: "Ajay" },
};

// 6️⃣ Generic Backpack class using interface type
interface Item<T> {
  value: T;
}

class Cart<T> {
  private items: Item<T>[] = [];

  add(item: T) {
    this.items.push({ value: item });
  }

  getAll(): Item<T>[] {
    return this.items;
  }
}

const numberBag = new Cart<number>();
numberBag.add(5);
numberBag.add(10);

const stringBag = new Cart<string>();
stringBag.add("apple");
stringBag.add("banana");

