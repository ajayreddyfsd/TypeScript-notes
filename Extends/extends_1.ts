// A generic type T that must be a number
  //! usually if we have a backpack <T> => means we wanna decide the T later
  //! <T extends ........> means, we are limiting what T can be
  //! here in this case, T is restricted to number and nothing else
  //? also, wehn initialising, we pass number in place of T or any no. like 10, 20, ... in place of T
type OnlyNumber<T extends number> = {
    value: T;
  };
  

//! so here num1 is OnlyNumber type
//! and T for OnlyNumber is 5
const num1: OnlyNumber<5> = { value: 5 }; // ✅ works


const num2: OnlyNumber<'hi'> = { value: 'hi' }; //? ❌ Error: T must be number
  
const num3: OnlyNumber<5> = { value: 5 };      // ✅ works, literal 5
const num4: OnlyNumber<10> = { value: 10 };    // ✅ works, literal 10
const num5: OnlyNumber<number> = { value: 123 }; // ✅ works, general number type
const num6: OnlyNumber<'5'> = { value: 5 }; //? ❌ ❌ ❌ Error, '5' is string

