export default function authHeader(){
    const accessToken=JSON.parse(localStorage.getItem("token"));

    if(accessToken && accessToken.token){
        return {"Authorization":'Bearer '+accessToken.token}
    }else{
        return {};
    }
}


export function isLoggedIn(){
    let data=localStorage.getItem("user");
    if(data!=null){
        return true;
    }
    return false;
}


export function Logout(next){
    localStorage.removeItem("user");
    next();
}

export function currentUserDetails(){
    if(isLoggedIn()){
        return JSON.parse(localStorage.getItem("user"))
    }else{
        return undefined;
    }
}