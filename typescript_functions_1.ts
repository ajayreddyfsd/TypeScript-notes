// =============================================
// 1. ADD TWO NUMBERS (MOST BASIC FUNCTION EVER)
// =============================================

// This is like a microwave - you put numbers in, get number out
function addTwoNumbers(a: number, b: number): number {
    // ↑           ↑         ↑       ↑       ↑
    // |           |         |       |       └── Returns a number
    // |           |         |       └── Second number parameter  
    // |           |         └── First number parameter
    // |           └── Function name
    // └── Standard function keyword
    
    return a + b; // <- This is where the magic happens
  }
  
  // Usage example:
  const result = addTwoNumbers(2, 3); // = 5 (DUH)
  





  // =============================================
  // 2. GREET SOMEONE (OPTIONAL PARAMETERS)
  // =============================================
  
  // The "?" makes greeting optional - like choosing fries
  function greetPerson(name: string, greeting?: string): string {
    // ↑                  ↑              ↑
    // |                  |              └── "?" means you can skip this
    // |                  └── Required name (string)
    // └── Returns a string (the greeting message)
    
    return greeting ? `${greeting}, ${name}!` : `Hello, ${name}!`;
    //       ↑
    //       └── If greeting exists, use it. Else use "Hello"
  }
  
  // Usage examples:
  greetPerson("Bob"); // "Hello, Bob!" 
  greetPerson("Alice", "Hola"); // "Hola, Alice!"
  




  
  // =============================================
  // 3. DEFAULT VALUE FUNCTION (LAZY PEOPLE SPECIAL)
  // =============================================
  
  // When you're too lazy to specify everything
  function createCoffee(order: string, size: string = "medium"): string {
    // ↑                           ↑               ↑
    // |                           |               └── Default value if not provided
    // |                           └── Required order (string)
    // └── Returns the order summary
    
    return `Preparing ${size} ${order}`;
  }
  
  // Usage examples:
  createCoffee("latte"); // "Preparing medium latte"
  createCoffee("cappuccino", "large"); // "Preparing large cappuccino"