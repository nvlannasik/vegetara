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
        
      </Routes>
    </Router>
  )
}

export default Path;