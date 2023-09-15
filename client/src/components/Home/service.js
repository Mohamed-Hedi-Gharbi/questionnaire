import { base_url } from "../../config";

async function isUserAuthenticate() {
    try{
        
        const response = await fetch(base_url + '/api/user');
        return response.status >= 200 && response.status < 300;
        
    } catch(err) {
        throw Error(err);
    }
    
}

export { isUserAuthenticate };