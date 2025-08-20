// T must be a function that returns a string
//! <T extends () => string> means T must be a function
//$ the function must return string, not number, not boolean

type FuncReturnString<T extends () => string> = {
    func: T;
  };
  
  //! creating variables
  const sayHi: FuncReturnString<() => string> = {
    func: () => 'Hello!' // ✅ works, returns string
  };
  
  //? wrong return type → ❌ Error
  const sayNumber: FuncReturnString<() => number> = { func: () => 123 }; 
  