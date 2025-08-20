// =============================================
// 4. GENERIC TYPE (REUSABLE TEMPLATE)
// =============================================

//! generic type means i will decide the Type later
type ApiResponse<T> = {
  // ↑        ↑    ↑
  // |        |    └── Shape of the response
  // |        └── Type parameter (can be anything)
  // └── Generic type

  data: T;
  error: string | null;
  isLoading: boolean;
};

// Usage with number:
const numberResponse: ApiResponse<number> = {
  data: 42,
  error: null,
  isLoading: false,
};

// Usage with User object:
const userResponse: ApiResponse<User> = {
  data: { id: 1, username: "ts_learner", greet: () => "Hi" },
  error: "404 Not Found",
  isLoading: true,
};
