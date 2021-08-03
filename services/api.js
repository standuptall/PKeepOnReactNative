import { config } from "config.js";
export const api =  {
    getPasswords
}
const url = config.url;
function getPasswords(search){
    return fetch(url+"/api/password", {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        'Authorization':'Bearer '+config.token
        }
    }).then(handleResponse);

}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if ([401, 403].indexOf(response.status) !== -1) {
                // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                authenticationService.logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}
// function internalFetch(url,opti){
//      return fetch(url,opti)
//         .then(response=>{
//             return response.text().then(text => {
//                 const data = text && JSON.parse(text);
//                 if (!response.ok) {
//                     if ([401, 403].indexOf(response.status) !== -1) {
//                         // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
//                         authenticationService.logout();
//                         location.reload(true);
//                     }
        
//                     const error = (data && data.message) || response.statusText;
//                     return Promise.reject(error);
//                 }
//         },error=>{
//             console.log(error);
//             Promise.reject(error);
//         })
// }