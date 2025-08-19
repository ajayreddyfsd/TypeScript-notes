  
  // =============================================
  // 4. UNION TYPES (THIS OR THAT)
  // =============================================
  type Status = "loading" | "success" | "error";
  // ↑         ↑    ↑           ↑         ↑
  // |         |    |           |         └── Third possible string value
  // |         |    |           └── Second possible string value
  // |         |    └── First possible string value
  // |         └── Literal string values
  // └── Type alias
  
  // Usage:
  let currentStatus: Status;
  currentStatus = "loading"; // ✅
  currentStatus = "offline"; // ❌ Not allowed!





// ========== 1. Define Member Types ==========
type EmailUser = {
    id: string;
    type: 'email';
    email: string;
    passwordHash: string;
    verified: boolean;
    twoFactorEnabled: boolean;
  };
  
  type GoogleUser = {
    id: string;
    type: 'google';
    googleId: string;
    email: string;
    accessToken: string;
    refreshToken: string;
  };
  
  type GitHubUser = {
    id: string;
    type: 'github';
    githubId: string;
    username: string;
    oauthToken: string;
  };
  
  //! here union means not all combined 
  //! but it is either this type or that type or another type or ............
  // ========== 2. Create Discriminated Union ==========
  type AuthUser = EmailUser | GoogleUser | GitHubUser;
  //          ↑
  //          └── "type" property acts as discriminator

