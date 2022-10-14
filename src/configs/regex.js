// eslint-disable-next-line import/no-anonymous-default-export
export default {
  username: /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]+$/,
  password: /^[a-zA-Z0-9]+$/,
  email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  phone: /^08\d+$/,
  spaceText: /\s/,
}