// eslint-disable-next-line import/no-anonymous-default-export
export default {
  username: /^[a-z0-9]{6,}$/,
  password: /^[a-zA-Z0-9]+$/,
  email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  phone: /^08\d+$/,
  spaceText: /\s/,
  toUpperCase: /^[A-Z]+$/,
  toLowerCase: /^[a-z]+$/,
  UpperCaseNumbernoSpace: /^(?=.*[A-Z])(?=.*[0-9])[A-Z0-9]+$/,
  
}