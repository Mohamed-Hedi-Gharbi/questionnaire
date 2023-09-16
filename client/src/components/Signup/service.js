import { base_url } from "../../config";

async function sendLoginRequest({ email, password, name }) {
  const options = {
    method: 'POST',
    body: JSON.stringify({ email, password, name }),
    headers: {
        'Content-Type': 'application/json'
    }
  }

  let data = null;

  const response = await fetch(base_url + '/auth/signup', options);
  console.log({ response });
  const headers = response.headers.get('Content-Type');

  if(headers.includes('application/json')){
    data = await response.json();
  }
  
  const error = response.status < 200 || response.status >= 300;

  return { error, data }; 
}

export { 
  sendLoginRequest
}