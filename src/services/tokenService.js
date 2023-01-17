export async function tokenService() {
    const grant_type = 'grant_type=client_credentials';
    const client_id = 'client_id=6b7020d6018f4bfa89cf761dd0211cf3';
    const client_secret = 'client_secret=960336f3e8804af19238ca7ea2337084';

    let sendData = grant_type+"&"+client_secret+"&"+client_id;

    const URL = 'https://accounts.spotify.com/api/token';
    
    const requestToken = {
        method:'POST',
        headers: {'Content-Type':'application/x-www-form-urlencoded'},
        body: sendData,
    }

    let responseToken = await fetch(URL, requestToken);
    let token = await responseToken.json();

    let completeToken = token.token_type + " " + token.access_token;
    return completeToken;
}