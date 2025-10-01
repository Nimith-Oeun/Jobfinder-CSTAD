import secureLocalStorage from "react-secure-storage";

const REFRESH_KEY = import.meta.env.VITE_REFRESH_TOKEN_KEY;
const ACCESS_KEY = import.meta.env.VITE_SECURE_LOCAL_STORAGE_PREFIX;

// ----------------- ACCESS TOKEN -----------------
export const addAccessToken = (accessToken) => {
    secureLocalStorage.setItem(
        ACCESS_KEY, 
        accessToken
    );
};

export const getAccessToken = () => {
    return secureLocalStorage.getItem(
        ACCESS_KEY
    );
};

export const removeAccessToken = () => {
    secureLocalStorage.removeItem(
        ACCESS_KEY
    );
};

// ----------------- REFRESH TOKEN -----------------
export const addRefreshToken = (refreshToken) => {
    secureLocalStorage.setItem(
        REFRESH_KEY, 
        refreshToken
    );
};

export const getRefreshToken = () => {
    return secureLocalStorage.getItem(
        REFRESH_KEY
    );
};

export const removeRefreshToken = () => {
    secureLocalStorage.removeItem(
        REFRESH_KEY
    );
};