import secureLocalStorage from "react-secure-storage";

//add acceess token to local storage
export const addAccessToken = (accessToken)=>{
    secureLocalStorage.setItem(
        import.meta.env.VITE_SECURE_LOCAL_STORAGE_PREFIX,
        accessToken
    );
}

//get access token from local storage
export const getAccessToken = ()=>{
    return secureLocalStorage.getItem(
        import.meta.env.VITE_SECURE_LOCAL_STORAGE_PREFIX
    );
}

//remove access token from local storage
export const removeAccessToken = ()=>{
    secureLocalStorage.removeItem(
        import.meta.env.VITE_SECURE_LOCAL_STORAGE_PREFIX
    );
}