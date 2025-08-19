export const getData = async <T>(url: string): Promise<T> => {
    const response = await fetch(url);
    return await response.json();
  };
  
  //! the function above is a TS based function, takes URL-string as input
  //! returns two things.
  //? if called directly, returns promise
  //? if called with await, then it returns the value resolved by that promise
  //? and T is the type of that value which is to be returned by the promise.
  