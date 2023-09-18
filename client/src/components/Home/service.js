import { base_url } from "../../config";

async function isUserAuthenticate(token) {
    try{
        
        const options = {  headers: { 'Authorization': token } };
        const response = await fetch(base_url + '/api/user', options);
        console.log(response);
        return response.status !== 401;
        
    } catch(err) {
        console.error(err.message);
        throw Error(err);
    }
    
}

async function logout() {
    try{
        
        const response = await fetch(base_url + '/auth/logout');
        console.log(response);
        return response.status !== 401;
        
    } catch(err) {
        console.error(err.message);
        throw Error(err);
    }
}

export { isUserAuthenticate, logout };