// =============================================
// 1. FUNCTION WITH OBJECT PARAMETER (FANCY STUFF)
// =============================================

// First we define the "shape" of a user object
interface User {
    id: number;
    username: string;
    email?: string; // "?" means optional
    isAdmin?: boolean;
  }
  
  // This function takes a User object and prints info
  function displayUser({ id, username, email = "N/A" }: User): string {
    // ↑       ↑                             ↑
    // |       |                             └── Default value if email missing
    // |       └── Destructuring the User object
    // └── Returns a formatted string
    
    return `ID: ${id} | User: ${username} | Email: ${email}`;
    // Template literals (fancy strings) use backticks `
  }
  
  // Usage example:
  displayUser({ id: 1, username: "ts_god" }); 
  // Returns: "ID: 1 | User: ts_god | Email: N/A"
  






  // =============================================
  // 2. GENERIC FUNCTION (MAGIC BLACK BOX)
  // =============================================
  
  // The "<T>" makes it work with ANY type - like a blender
  function getFirstItem<T>(items: T[]): T | undefined {
    // ↑       ↑     ↑       ↑        ↑
    // |       |     |       |        └── Returns either T or undefined
    // |       |     |       └── Array of type T
    // |       |     └── Generic type parameter
    // |       └── Function name
    // └── Returns first item or undefined
    
    return items[0]; // Grabs first item or undefined if empty
  }
  
  // Usage examples:
  getFirstItem([1, 2, 3]); // Returns 1 (type number)
  getFirstItem(["a", "b", "c"]); // Returns "a" (type string)
  




  // =============================================
  // 3. ASYNC FUNCTION (WAIT FOR IT...)
  // =============================================
  
  // "async" means this function will WAIT for slow operations
  async function fetchPokemon(name: string): Promise<Pokemon> {
    // ↑        ↑               ↑                  ↑
    // |        |               |                  └── Returns a Promise of Pokemon
    // |        |               └── Parameter (pokemon name)
    // |        └── Function name
    // └── Marks as asynchronous
    
    try {
      // "await" pauses until the fetch completes
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      
      if (!response.ok) {
        throw new Error("Pokemon not found!"); // Crash gracefully
      }
      
      return await response.json(); // Convert to JSON
    } catch (error) {
      console.error("Oops, Pokemon failed:", error);
      throw error; // Re-throw the error
    }
  }
  
  // Usage example:
  // fetchPokemon("pikachu").then(data => console.log(data));
  




  
  // =============================================
  // 4. FUNCTION THAT MAKES FUNCTIONS (MIND BLOWN)
  // =============================================
  
  // This creates CUSTOM greeting functions
  function createGreeter(greeting: string): (name: string) => string {
    // ↑                          ↑               ↑
    // |                          |               └── Returns a NEW function
    // |                          └── Takes greeting text
    // └── Factory function
    
    return function(name: string): string {
      return `${greeting}, ${name}!`; // Uses the greeting from above
    };
  }
  
  // Usage example:
  const sayHi = createGreeter("Hi");
  sayHi("Jenny"); // "Hi, Jenny!"