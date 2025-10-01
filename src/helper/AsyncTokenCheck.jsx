import { getAccessToken, getRefreshToken } from "../lib/securLocalStorage";
import { refreshAccessToken } from "../redux/feature/user/UserSlice";

// ---------------- Helper: Async token check ----------------
export const isTokenValidAsync = async (dispatch) => {
  let accessToken = getAccessToken();
  const refreshToken = getRefreshToken();

  if (!accessToken && !refreshToken) return false;

  // Check if access token exists and is still valid
  if (accessToken) {
    try {
      const payload = JSON.parse(atob(accessToken.split(".")[1]));
      if (payload.exp * 1000 > Date.now()) return true;
    } catch {
      // invalid token → try refresh
    }
  }

  // Access token missing or expired → try refresh
  if (refreshToken) {
    try {
      const result = await dispatch(refreshAccessToken).unwrap();
      return !!result.token;
    } catch {
      return false;
    }
  }

  return false;
};