const baseUrl = 'https://innovillage-api-c6uhvn24vq-et.a.run.app/';

const header = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Access-Control-Allow-Origin': '*',
};
const headerRegister = {
  'Content-Type': 'application/json',
};
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  header,
  headerRegister,
  login: baseUrl + 'api/user/login',
  register: baseUrl + 'api/user/register',
};
