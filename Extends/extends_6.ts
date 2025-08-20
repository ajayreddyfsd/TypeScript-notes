//! AC is like a backpack for a function
//! <AC extends () => AnyAction> means:
//!   1️⃣ AC must be a function (because of () => …)
//!   2️⃣ The function must return an AnyAction object
//!       (AnyAction = { type: string, ...any other props } from Redux)

//$ in short, AC must be a function, which returns AnyAction
//$ we can put any letter or letters in place of AC like T or KP or AJ, .........

//! Now we define Matchable, which is a new type
type Matchable<AC extends () => AnyAction> = AC & {
  //! AC & {...} means we take the original function and "add extra stuff" to it

  //! type property
  //! we get the type string from the function's return value
  //! ReturnType<AC> = what AC returns, e.g., { type: 'LOGIN' }
  //! ReturnType<AC>["type"] = 'LOGIN' (the type property)
  type: ReturnType<AC>["type"];

  //! match method
  //! takes an action (any Redux action)
  //! returns true if the action's type matches AC's type
  //! action is ReturnType<AC> is a TypeScript trick:
  //!   if match returns true, TS now knows action is exactly the return type of AC
  match(action: AnyAction): action is ReturnType<AC>;
};

//? AC is just a placeholder, u can T also as usual
