//! getData is an async function with a backpack
//! which takes in string as input and returns promise as output
//! this async function also comes with a backpack
//! the type stored in the backpack is what the type of "the value resolved by the promise needs to be" 

export const getData = async <T>(url: string): Promise<T> => {
    const response = await fetch(url);
    return await response.json();
  };
  
  //! the function above is a TS based function, takes URL-string as input
  //! returns two things.
  //? if called directly, returns promise
  //? if called with await, then it returns the value resolved by that promise
  //? and T is the type of that value which is to be returned by the promise.
  