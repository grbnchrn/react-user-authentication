import { redirect } from "react-router-dom";

export function getAuthToken(){
    const token =  localStorage.getItem('token');
    if (!token) {
        return;
    }
    if (getAuthTokenDuration()<=0) {
        return 'EXPIRED'
    }
    return token;
}

export function getAuthTokenDuration(){
    const storedExpirationDate =  localStorage.getItem('expiration');
    const expirationDate = new Date(storedExpirationDate);
    const  now = new Date();
    return expirationDate.getTime() - now.getTime();
}

export function tokenLoader(){
    return getAuthToken();
}

export function checkAuthLoader(){
    if(!getAuthToken()){
        return redirect('/auth');
    }
    return null;
}