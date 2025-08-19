import { AnyAction } from "redux";
// Importing Redux's generic "any action" type (an object with at least a `type`).

//! AC means Action Creator Function
// ---------------------------
// 1️⃣ Matchable Type
// ---------------------------
// This is a helper type that "enhances" an action creator function
// by adding two things to it:
// - a `type` property (the action type string)
// - a `match()` function to check if an action is of this type
type Matchable<AC extends () => AnyAction> = AC & {
  type: ReturnType<AC>["type"];
  match(action: AnyAction): action is ReturnType<AC>;
};

// ---------------------------
// 2️⃣ withMatcher Function
// ---------------------------
// Takes an action creator and enhances it with:
// - .type (the action type string)
// - .match(action) (a function to check if an action matches this type)
//
// This makes reducers/sagas easier to write,
// since you can just call actionCreator.match(action) instead of
// manually comparing strings like `action.type === "SOME_TYPE"`.
export function withMatcher<AC extends () => AnyAction & { type: string }>(
  actionCreator: AC
): Matchable<AC>;

export function withMatcher<
  AC extends (...args: any[]) => AnyAction & { type: string }
>(actionCreator: AC): Matchable<AC>;

export function withMatcher(actionCreator: Function) {
  const type = actionCreator().type; // get the action's type
  return Object.assign(actionCreator, {
    type,
    match(action: AnyAction) {
      return action.type === type; // true if action matches
    },
  });
}

//! above code, we performed 2 enhancements
//! why we need two?
//! one for compile time
//! and other for run time. i know TS creators must be crazy

//? below code, we are defining two types - the action types
//? one with payload and the other without payload
// ---------------------------
// 3️⃣ Action Types
// ---------------------------
// Generic types for defining actions
// - ActionWithPayload: for actions that carry some data (payload)
// - Action: for actions with no data (just the type)
export type ActionWithPayload<T, P> = {
  type: T;
  payload: P;
};

export type Action<T> = {
  type: T;
};

//? using all the above to create action creator functions
// ---------------------------
// 4️⃣ createAction Function
// ---------------------------
// A helper to create action objects in a type-safe way.
// Depending on whether you pass a payload or not, it returns
// the correct type of action (with or without payload).
export function createAction<T extends string, P>(
  type: T,
  payload: P
): ActionWithPayload<T, P>;

export function createAction<T extends string>(
  type: T,
  payload: void
): Action<T>;

export function createAction<T extends string, P>(type: T, payload: P) {
  return { type, payload };
}

// ---------------------------
// ✅ High-Level Summary
// ---------------------------
// - createAction → makes Redux actions (with type + optional payload)
// - withMatcher → enhances action creators so you can easily check
//                 if an action matches a specific type
// - Action / ActionWithPayload → helper TypeScript-Types for clarity
