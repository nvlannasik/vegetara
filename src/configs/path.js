import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ROUTES } from './index';
import  pages  from '../pages'

function Path(){
  return(
    <Router>
      <Routes>
        <Route exact path={ROUTES.LANDING_PAGE()} element={<pages.LandingPage />} />
        <Route exact path={ROUTES.ABOUT()} element={<pages.About />} />
        <Route exact path={ROUTES.LOGIN()} element={<pages.Login />} />
        <Route exact path={ROUTES.REGISTER()} element={<pages.Register />} />
        <Route exact path={ROUTES.CARD_PAGE()} element={<pages.CardDetail />} />
        <Route exact path={ROUTES.LOGIN_ADMIN()} element={<pages.LoginAdmin />} />
        <Route exact path={ROUTES.LOGIN_PETANI()} element={<pages.LoginPetani />} />
        <Route exact path={ROUTES.DASBOARD_ADMIN()} element={<pages.DasboardAdmin />} />
        <Route exact path={ROUTES.DASBOARD_PETANI()} element={<pages.DasboardPetani />} />
        <Route exact path={ROUTES.CREATE_PRODUCT()} element={<pages.CreateProduct />} />
        <Route exact path={ROUTES.CHECKOUT()} element={<pages.CheckoutPage />} />
        <Route exact path={ROUTES.CHART()} element={<pages.ChartPage />} />
      </Routes>
    </Router>
  )
}

export default Path;