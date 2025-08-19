import { CATEGORIES_ACTION_TYPES, Category } from "./category.types";
// ⬆️ Importing:
// - The different category action types (like FETCH_CATEGORIES_START, etc.)
// - The Category type (probably an object with {id, title, items...})

import {
  createAction,
  Action,
  ActionWithPayload,
  withMatcher,
} from "../../utils/reducer/reducer.utils";
// ⬆️ Importing the helper functions/types we just studied:
// - createAction → makes action objects
// - Action, ActionWithPayload → TS types for actions
// - withMatcher → enhances action creators with .type and .match()

// ---------------------------
// 1️⃣ Action Types (using TypeScript)
// ---------------------------

// Action type for "start fetching categories"
// - This action has no payload, just a type
export type FetchCategoriesStart =
  Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START>;

// Action type for "fetch success"
// - This action has a payload (an array of Category objects)
export type FetchCategoriesSucess = ActionWithPayload<
  CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
  Category[]
>;

// Action type for "fetch failed"
// - This action has a payload (an Error object)
export type FetchCategoriesFailed = ActionWithPayload<
  CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED,
  Error
>;

// ---------------------------
// 2️⃣ Action Creators (functions that return actions)
// ---------------------------

// Action creator for starting fetch
// - Uses createAction (to build the action object)
// - Wrapped in withMatcher (so it has .type and .match helpers)
export const fetchCategoriesStart = withMatcher(
  (): FetchCategoriesStart =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START)
);

// Action creator for successful fetch
// - Takes a Category[] as argument
// - Returns an action with that array as payload
export const fetchCategoriesSuccess = withMatcher(
  (categoriesArray: Category[]): FetchCategoriesSucess =>
    createAction(
      CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
      categoriesArray
    )
);

// Action creator for failed fetch
// - Takes an Error object as argument
// - Returns an action with that Error as payload
export const fetchCategoriesFailed = withMatcher(
  (error: Error): FetchCategoriesFailed =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error)
);

// ---------------------------
// ✅ High-Level Summary
// ---------------------------
// - This file defines all the Redux actions for "fetching categories"
// - Step 1: It creates TypeScript types for each action (start, success, failed)
// - Step 2: It defines action creator functions using createAction()
// - Step 3: It wraps them with withMatcher() so you get .type and .match helpers
//
// In simple words: "This file prepares the 3 actions you need to handle
// an async fetch: start, success, and failed, with full TypeScript safety."
