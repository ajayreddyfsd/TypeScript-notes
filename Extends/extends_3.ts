// T can only be 'red', 'green', or 'blue'
//! union type: like a list of allowed colors
//! <T extends 'red'|'green'|'blue'> means T must be one of these
//! if you try to use 'yellow' or any other, TypeScript will complain

type Color<T extends 'red' | 'green' | 'blue'> = {
    color: T;
  };
  
  //! creating variables
  const c1: Color<'red'> = { color: 'red' }; // ✅ works
  const c2: Color<'blue'> = { color: 'blue' }; // ✅ works
  const c3: Color<'green'> = { color: 'green' }; // ✅ works
  const c4: Color<'yellow'> = { color: 'yellow' }; //? ❌ Error, not in allowed list
  