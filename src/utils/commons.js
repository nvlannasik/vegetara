export const setUserSession = (accessToken, data ) => {
  const { _id, userName, name, email, role, phoneNumber } = data
  console.log(userName,"set user")
  localStorage.setItem('accessToken', accessToken)
  localStorage.setItem('id', _id)
  localStorage.setItem('username', userName)
  localStorage.setItem('name', name)
  localStorage.setItem('email', email)
  localStorage.setItem('role', role)
  localStorage.setItem('phoneNumber', phoneNumber)
};

export const getUserSession = () => {
  return {
    accessToken: localStorage.getItem('accessToken'),
    id: localStorage.getItem('id'),
    username: localStorage.getItem('username'),
    name: localStorage.getItem('name'),
    email: localStorage.getItem('email'),
    role: localStorage.getItem('role'),
    phoneNumber: localStorage.getItem('phoneNumber')
  };
};

export const removeUserSession = () => {
  localStorage.removeItem('accessToken')
  localStorage.removeItem('id')
  localStorage.removeItem('username')
  localStorage.removeItem('name')
  localStorage.removeItem('email')
  localStorage.removeItem('role')
  localStorage.removeItem('phoneNumber')
}
