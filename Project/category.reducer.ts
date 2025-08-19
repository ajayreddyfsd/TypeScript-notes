import { AnyAction } from "redux";
// ⬆️ Importing Redux’s generic action type (object with at least a `type` property)

import { Category } from "./category.types";
// ⬆️ Importing the Category type (probably {id, title, items...})

import {
  fetchCategoriesStart,
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} from "./category.action";
// ⬆️ Importing the action creators we defined earlier
// - Each has .type and .match() because of withMatcher

// ---------------------------
// 1️⃣ Define the state type for categories
// ---------------------------
export type CategoriesState = {
  readonly categories: Category[]; // list of categories
  readonly isLoading: boolean; // true while fetching
  readonly error: Error | null; // stores error if fetch fails
};

// ---------------------------
// 2️⃣ Initial state
// ---------------------------
export const CATEGORIES_INITIAL_STATE: CategoriesState = {
  categories: [], // empty at start
  isLoading: false,
  error: null,
};

// ---------------------------
// 3️⃣ Reducer function
// ---------------------------
// Reducers in Redux take:
// - current state
// - an action
// And return a **new state**
export const categoriesReducer = (
  state = CATEGORIES_INITIAL_STATE, // default initial state
  action: AnyAction
): CategoriesState => {
  // -----------------
  // Case 1: fetch started
  // -----------------
  if (fetchCategoriesStart.match(action)) {
    // Set loading flag to true, keep other state unchanged
    return { ...state, isLoading: true };
  }

  // -----------------
  // Case 2: fetch successful
  // -----------------
  if (fetchCategoriesSuccess.match(action)) {
    // Set categories from payload, stop loading
    return { ...state, categories: action.payload, isLoading: false };
  }

  // -----------------
  // Case 3: fetch failed
  // -----------------
  if (fetchCategoriesFailed.match(action)) {
    // Store error, stop loading
    return { ...state, error: action.payload, isLoading: false };
  }

  // -----------------
  // Default case
  // -----------------
  return state; // if action doesn't match, return current state unchanged
};

// ---------------------------
//! ✅ High-Level Summary
// ---------------------------
// - This is a Redux reducer for managing category state
// - Uses TypeScript for type safety
// - Uses action creators with .match() to simplify checking action types
// - Handles 3 scenarios: fetch start, success, and failure
// - Returns a new state each time (immutable update using {...state})

//! 3️⃣ Why we did not use switch-case?
// You can still use switch if you like
// But with TypeScript + withMatcher, if statements with .match() give full type safety
// Especially useful when your action has a payload with a specific type, so TS automatically knows what action.payload contains
