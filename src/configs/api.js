const baseUrl = 'http://192.168.1.13:3000/';

const header = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Access-Control-Allow-Origin': '*',
};
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  header,
  login: baseUrl + 'api/user/login',
  register: baseUrl + 'api/user/register',
};
