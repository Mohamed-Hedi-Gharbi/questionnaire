import { base_url } from "../../config";

async function getQuiz(id, token) {
  
  const options = {  headers: { 'Authorization': token } };
  let data = null;
  
  const response = await fetch(base_url + "/api/user/quiz/" + id, options);
  const headers = response.headers.get('Content-Type');

  if(headers.includes('application/json')){
    data = await response.json();
  }
  
  const error = response.status < 200 || response.status >= 300;

  return { error, data }; 
}

async function sendData({ data, token, language }) {
  
  const options = {
    method: 'POST',
    body: JSON.stringify({ language, data }),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    }
  }

  const response = await fetch(base_url + "/api/user/submit/" , options);
  const headers = response.headers.get('Content-Type');

  if(headers.includes('application/json')){
    data = await response.json();
  }
  
  const error = response.status < 200 || response.status >= 300;

  return { error, data }; 
}

export { getQuiz, sendData };
