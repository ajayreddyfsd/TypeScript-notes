// =============================================
// 1. PRIMITIVE TYPES (THE ABCs)
// =============================================
type Name = string; 
// ↑    ↑
// |    └── This type can ONLY hold string values
// └── Creates a type alias called "Name"

type Age = number;
// Like "Name" but for numbers (1, 2, 3...)

type IsStudent = boolean;
// Only "true" or "false" allowed

// Usage:
const myName: Name = "Bob"; // ✅ Valid
const myAge: Age = "30"; // ❌ Error: Not a number!

// =============================================
// 2. OBJECT TYPE (LIKE A FORM)
// =============================================
type Person = {
  // ↑          ↑
  // |          └── Curly braces define object shape
  // └── Type alias name
  
  name: string; // Required string field
  age: number;  // Required number field
  isAdmin?: boolean; // "?" = Optional field
};

// Usage:
const user1: Person = {
  name: "Alice", // Required
  age: 25        // Required
  // isAdmin omitted (optional)
};

// =============================================
// 3. ARRAY TYPE (LIST OF THINGS)
// =============================================
type ShoppingList = string[];
// ↑                ↑
// |                └── Array of strings
// └── Type name

// Alternative syntax:
type Numbers = Array<number>; // Same as number[]

// Usage:
const groceries: ShoppingList = ["milk", "eggs"];
const luckyNumbers: Numbers = [7, 13, 42];




  
  // =============================================
  // 4. UNION TYPES (THIS OR THAT)
  // =============================================
  type Status = "loading" | "success" | "error";
  // ↑         ↑    ↑           ↑         ↑
  // |         |    |           |         └── Third possible string value
  // |         |    |           └── Second possible string value
  // |         |    └── First possible string value
  // |         └── Literal string values
  // └── Type alias
  
  // Usage:
  let currentStatus: Status;
  currentStatus = "loading"; // ✅
  currentStatus = "offline"; // ❌ Not allowed!