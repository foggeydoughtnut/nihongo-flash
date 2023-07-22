

import jwt_decode from "jwt-decode";
import Token from "../types/Token";


function decodeJwt(token: string) : Token {
  const decoded = jwt_decode<Token>(token);
  return decoded;
}

const useToken = () => {
  const getEncodedToken = () => {
    const tokenString = localStorage.getItem('token');
    if (!tokenString) return null;
    return tokenString;
  }

  const decodeToken = (tokenStr : string | null) => {
    if (!tokenStr) return null;
    const decodedToken = decodeJwt(tokenStr);
    return decodedToken;
  }

  const getTokenFromLocal = () => {
    const decodedToken = decodeToken(getEncodedToken());
    if (decodedToken === null) return null;
    let currentTime = Number.parseInt((new Date().getTime() / 1000).toFixed(0));
    if (currentTime > decodedToken.exp) return null;
    return decodedToken;
  }

  const logoutFunc = () => {
    localStorage.removeItem('token');
    token.value = null;
  }

  
  const saveToken = (tokenStr : string) => {
    localStorage.setItem('token', tokenStr);
  }

  const loginFunc = (tokenStr : string) => {
    saveToken(tokenStr);
    tokenEncoded.value = tokenStr;
    token.value = decodeToken(tokenStr);
  }

  const token = ref(getTokenFromLocal());
  const tokenEncoded = ref(getEncodedToken());
  const login = ref(loginFunc);
  const logout = ref(logoutFunc)

  return {
    login,
    logout,
    token,
    tokenEncoded,
  }
}

export default useToken;