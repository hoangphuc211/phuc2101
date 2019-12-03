// require("dotenv").config();

const MY_BASE_URL='http://localhost:3000'
// Api url for spring boot server : Api url for local server 
// export const API_BASE_URL = 'http://localhost:6060';
// export const API_BASE_URL = 'http://139.162.63.194:8080'
export const API_BASE_URL = 'http://bitsmovie-env.rmrcekkfbx.ap-southeast-1.elasticbeanstalk.com'
export const ACCESS_TOKEN = 'accessToken';


// Redirect url when app is on local : when app is deployed on heroku
export const OAUTH2_REDIRECT_URI = MY_BASE_URL+'/oauth2/redirect'
// export const OAUTH2_REDIRECT_URI = MY_BASE_URL+'/oauth2/redirect'

export const GOOGLE_AUTH_URL = API_BASE_URL + '/oauth2/authorize/google?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const FACEBOOK_AUTH_URL = API_BASE_URL + '/oauth2/authorize/facebook?redirect_uri=' + OAUTH2_REDIRECT_URI+'&STATE_PARAMETER = False';
export const GITHUB_AUTH_URL = API_BASE_URL + '/oauth2/authorize/github?redirect_uri=' + OAUTH2_REDIRECT_URI;
