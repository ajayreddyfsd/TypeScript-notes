// T must be an object that has a name property
//! <T extends { name: string }> means any object we put in must have name
//! extra properties are okay
//! missing name → error

type PersonType<T extends { name: string }> = {
    person: T;
  };
  
  //! creating variables
  const person1: PersonType<{ name: string; age: number }> = {
    person: { name: 'Ajay', age: 21 } // ✅ works, has name + extra property age
  };
  
  //? missing name → ❌ Error
  // const person2: PersonType<{ age: number }> = { person: { age: 21 } }; 
  