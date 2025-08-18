// =============================================
// 1. INTERFACE (FANCY OBJECT TYPE)
// =============================================
interface User {
    // ↑        ↑
    // |        └── Like "type" but better for objects
    // └── Keyword for interfaces
    
    id: number;     // Required number
    username: string; // Required string
    email?: string;   // Optional string
    
    // Method definition:
    greet(): string; // Must return a string
  }
  
  // Usage:
  const admin: User = {
    id: 1,
    username: "superuser",
    greet() { return `Hello ${this.username}`; }
  };
  
  // =============================================
  // 2. EXTENDING TYPES (LIKE INHERITANCE)
  // =============================================
  interface AdminUser extends User {
    // ↑           ↑       ↑
    // |           |       └── Inherits all User properties
    // |           └── New interface name
    // └── Keyword
    
    permissions: string[]; // Adds new required field
  }
  
  // Usage:
  const boss: AdminUser = {
    id: 2,
    username: "bossman",
    permissions: ["delete_users", "ban_users"],
    greet() { return "I'm the boss"; }
  };

  
