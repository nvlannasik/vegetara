const routes = {
  LANDING_PAGE(){
    return '/';
  },
  ABOUT() {
    return '/about';
  },
  LOGIN() {
    return '/login';
  },
  REGISTER() {
    return '/register';
  },
  CARD_PAGE() {
    return `/card`;
  },
  LOGIN_PETANI() {
    return '/login-petani';
  },
  LOGIN_ADMIN() {
    return '/login-admin';
  },
  DASBOARD_ADMIN() {
    return '/dasboard-admin';
  },
  DASBOARD_PETANI() {
    return '/dashboard-petani';
  }
}

export default routes