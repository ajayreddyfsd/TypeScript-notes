// A generic type T that must be a string
//! <T extends string> means T can only be string
//! when creating variables, T must be string literal or string type

type OnlyString<T extends string> = {
    text: T;
  };
  
  //! creating variables
  const greeting1: OnlyString<'hello'> = { text: 'hello' }; // ✅ works, literal string
  const greeting2: OnlyString<string> = { text: 'any string' }; // ✅ works, general string type
  const greeting3: OnlyString<'hi'> = { text: 'hi' }; // ✅ works
  const greeting4: OnlyString<123> = { text: 123 }; //? ❌ Error, number not allowed
  