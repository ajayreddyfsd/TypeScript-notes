//! most difficult example
//! most difficult example
//! most difficult example
// ================= Generic Interface =================
interface Container<T> {
  value: T;
  show(): void;
}

// ================= Class implementing the interface =================
class Box<T> implements Container<T> {
  value: T;

  constructor(value: T) {
    this.value = value;
  }

  show() {
    console.log("Box contains:", this.value);
  }
}

// ================= Creating objects from the class that implemented interface =================
const numberBox = new Box<number>(42);
numberBox.show(); // Box contains: 42

const stringBox = new Box<string>("Hello World");
stringBox.show(); // Box contains: Hello World
