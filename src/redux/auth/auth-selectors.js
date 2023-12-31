export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUserName = state => state.auth?.user?.name;
export const selectRefresh = state => state.auth?.isRefresh;
export const selectAuthObj = state => state.auth;
